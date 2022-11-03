import {useState, useEffect} from "react";
import { StyleSheet, View, Text, Modal, Pressable, Alert } from "react-native";
import { reserve } from "../controllers/reservation_controller";
import { io } from "socket.io-client";
import host_instance from '../../host_instance.json';

function Reservation({parentStates,parentSetters}){
  
  const [socket, setSocket] = useState();
  const [socketPayment, setSocketPayment] = useState();
  const [socketConnected, setSocketConnected] = useState(false);
  const [reserveState, setReserveState] = useState("unreserved");
  
  function upPaymentSocket(){
    const conectionPath = host_instance.path.slice(0,host_instance.path.length-4)+'3004/payments'
    const newSocket = io(
      conectionPath,
      {
        transports: ['websocket']
      }
    );
    setSocketPayment(newSocket);
    console.log(socket)
    console.log('Connection to payment socket established')
  }
  
  useEffect(() => {
    const conectionPath = host_instance.path.slice(0,host_instance.path.length-4)+'3004/reservations'
    const newSocket = io(
      conectionPath,
      {
        transports: ['websocket']
      }
    );
    setSocket(newSocket);
    console.log(socket)
    console.log('Connection to socket established')
  }, []);

  useEffect(()=>{
    if (socket) {
      console.log(socket);
      if (!socket) return;
      socket.on('connect', () => {
        setSocketConnected(socket.connected);
        console.log(`Connected to socket, client id:${socket.id}`);
      });

      socket.on('reservation_accepted', (data) => {
        if(reserveState === "unreserved"){
          setReserveState("accepted")
        }
      })
      socket.on('reservation_rejected', (data) => {
        Alert.alert('Your reservation has been rejected.', 'Please find other parking.')
      })

      return () => {
        socket.off("receive-message");
        //const a= socket;
      };
    }
  },[socket])
  
  useEffect(()=>{
    if (socketPayment) {
      console.log(socketPayment);
      if (!socketPayment) return;
      socketPayment.on('connect', () => {
        setSocketConnected(socketPayment.connected);
        console.log(`Connected to payment socket, client id:${socketPayment.id}`);
      });

      socketPayment.on('payment_pending', (data) => {
        if(reserveState === "accepted"){
          setReserveState("payment_pending");          
        }
      })
      return () => {
        socketPayment.off("receive-message2");
        socketPayment.disconnect();
        //const a = socketPayment;
      };
    }
  },[socketPayment])

  useEffect(() => {
    switch (reserveState) { 
      
      case "accepted":
        Alert.alert('Your reservation has been accepted.', 'Parking is awaiting your arriving. Thanks.');
        upPaymentSocket();
        break;
      case "payment_pending":
        Alert.alert('Many thanks','Now your payment has been make from your credit card. See you latter.')
        setReserveState("unreserved");  
        break;
      /*case "pending_reservation":
        setReserveState("pending_reservation");
        Alert.alert('Great', 'Parking is proccesing your reservation, please wait.');
        break;*/
      }
    console.log("Estado actualizado a:",reserveState)
  },[reserveState]);

  return (
    <></>
  );
}

export default Reservation;
