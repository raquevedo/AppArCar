
import '../MemberInformation/MemberInformation.css';

function MemberInformation(props){
  
  return(
    <div className='grid-container'>
      <div className='grid-y'>
        <div className='cell'>
          <div className='container-member'>
            <img 
              className="photo-member" 
              src={require(`../../assets/img/${props.image}.png`)}
              alt="member"
            />
            <div className="container-message">
              <p className="name-message"><strong>{props.name}</strong></p>
              <p className="text-message">"{props.message}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberInformation;