import React, { useState } from 'react';

async function registerUser(credentials) {
  return fetch('http://0.0.0.0:8000/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
  }

export default function Register() {
 
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [passwordCorrect,setpasswordCorrect] = useState(false);
  const [mailCorrect,setmailCorrect] = useState(false);
  const [userCorrect,setuserCorrect] = useState(false);
  const [passwordConfirmationCorrect,setpasswordConfirmationCorrect] = useState(false);
  const EmailRegex = /\S+@\S+\.\S+/;
  
  

  const handleSubmit = async e => {
    e.preventDefault();
    
     if((passwordCorrect == true) && (mailCorrect == true) && (userCorrect == true) && (passwordConfirmationCorrect == true)){
      const token = await registerUser({
        email,
        username,
        password
      });
    }
  }

  function Validation(){
    if ((password != '') && (password.length>=8)){
      setpasswordCorrect(!passwordCorrect);
    }
    else{
      alert('Ingrese una contraseñá con mas de 8 digitos');
    }
    if(EmailRegex.test(email)){
      setmailCorrect(!mailCorrect);
    }
    else{
      alert('Ingrese un mail con el formato example@example.com')
    }
    if(username != ''){
      setuserCorrect(!userCorrect)
    }
    else{
      alert('Ingrese un Usuario');
    }
    if(password == passwordConfirmation){
      setPasswordConfirmation(!passwordConfirmation)
    }
    else{
      alert('La contraseña a confirmar no coincide con la contraseña previa')
    }
}

return(
    <div className="login-wrapper">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUsername(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <label>
          <p>Confirm Password</p>
          <input type="password"  onChange={e => setPasswordConfirmation(e.target.value)}/>
        </label>
        <div>
          <button type="button" class="button" onClick={Validation}>Submit</button>
        </div>
      </form>
    </div>
  );
}