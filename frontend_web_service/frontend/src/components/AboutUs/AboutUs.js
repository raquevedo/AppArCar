import react from 'react';
import MemberInformation from '../MemberInformation/MemberInformation';


function AboutUs(){

  return(
    <div className='grid-container'>
      <div className='grid-y'>
        <div className='cell'>
          <MemberInformation
            name="Ramiro"
            image="icon"
            message="Mensaje Ramiro"
          />
        </div>
        <div className='cell'>
          <MemberInformation
            name="Federico"
            image="icon"
            message="Mensaje Federico"
          />
        </div>
        <div className='cell'>
          <MemberInformation
            name="Maximiliano"
            image="icon"
            message="Mensaje Maximiliano"
          />
        </div>
        <div className='cell'>
          <MemberInformation
            name="Juan"
            image="icon"
            message="Mensaje Juan"
          />
        </div>
        <div className='cell'>
          <MemberInformation
            name="Marcos"
            image="icon"
            message="Mensaje Marcos"
          />
        </div>
        <div className='cell'>
          <MemberInformation
            name="Manuel"
            image="icon"
            message="Mensaje Manuel"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;