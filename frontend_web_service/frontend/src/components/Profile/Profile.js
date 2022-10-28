import UserForm from '../Forms/UserForm';

export default function Profile() {
  
  return(
    <div className='grid-container'>
      <div className='grid-y login-box'>
        <div className='cell'>
          <h1 className="text-form">Profile</h1>
        </div>
        <div className='cell'>
          <UserForm buttonText={'Update'}/>
        </div>
      </div>
    </div>
  );
}