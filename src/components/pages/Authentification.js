import React, {useState} from 'react';
import {auth} from '../firebaseConfig';
import {createUserWithEmailAndPassword } from 'firebase/auth';

function Authentification() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const RegisterUser =() => {
    auth(createUserWithEmailAndPassword(email, password)
    .then((re)=>{
      console.log(re);
    })
    .catch((re)=>{
      console.log(re);
    })
  )}

   
  return(
    <div style={{paddingTop: 50}}>
      <input placeholder='Email' value={email} onChangeText={text=>setEmail(text)}/>
      <input placeholder='Password' value={password} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
      <button title='Register' onPress={RegisterUser}/>
    </div>
  )
}

export default Authentification;