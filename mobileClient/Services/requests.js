import host_instance from '../host_instance'

async function IsRegisteredFunc(token){
    const fetchData2={}
    fetchData2.method= 'GET'
    fetchData2.headers={
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+token
    }
    console.log(fetchData2)
    //fetchData2.headers.Authorization='Bearer '+token
    const response = await fetch(host_instance.path+'/user/car-drivers/user-info',fetchData2)
  
    if(response.status == 200){
      console.log('registrado')
      return true
    }else{
      console.log('no registrado')
      return false
    }
  }

  export default IsRegisteredFunc