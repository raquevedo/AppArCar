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
    </div>
  );
}

export default AboutUs;