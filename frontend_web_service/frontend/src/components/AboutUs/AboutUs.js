import MemberInformation from '../MemberInformation/MemberInformation';


function AboutUs(){

  return(
    <div className='grid-container'>
      <div className='cell'>
        <MemberInformation
          name="Ramiro"
          image='ProfileImgRama'
          message="Mensaje Ramiro"
        />
      </div>
      <div className='cell'>
        <MemberInformation
          name="Federico"
          image="ProfileImgFede"
          message="Mensaje Federico"
        />
      </div>
      <div className='cell'>
        <MemberInformation
          name="Maximiliano"
          image="ProfileImgMaxi"
          message="Mensaje Maximiliano"
        />
      </div>
      <div className='cell'>
        <MemberInformation
          name="Juan"
          image="ProfileImgJuan"
          message="Mensaje Juan"
        />
      </div>
      <div className='cell'>
        <MemberInformation
          name="Marcos"
          image="ProfileImgMarcos"
          message="Mensaje Marcos"
        />
      </div>
      <div className='cell'>
        <MemberInformation
          name="Manuel"
          image="ProfileImgManu"
          message="Mensaje Manuel"
        />
      </div>
    </div>
  );
}

export default AboutUs;