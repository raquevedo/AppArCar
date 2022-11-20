import '../App/App.css';

function MemberInformation(props){
  return(
    <div id="member-card-container" className='with-shadow white-background'>
      <div className='grid-x'>
        <div className='cell small-4'>
          <img 
            id="card-photo" 
            src={require(`../../assets/img/${props.image}.png`)}
            alt="member"
          />
        </div>
        <div className="cell small-8">
          <h3 id="card-name"><strong>{props.name}</strong></h3>
          <div id="roles-container">
            {props.roles.map((role, index) => (
              <p><strong>{role}</strong></p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberInformation;