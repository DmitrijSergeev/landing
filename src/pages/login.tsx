import React, {useState} from 'react';

export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <div>
                <input type={'text'} placeholder={'email'}
                       value={email} onChange={event => setEmail(event.target.value)}/>
            </div>
            <div>
                <input type={'password'} placeholder={'password'}
                       value={password} onChange={event => setPassword(event.target.value)}/>
            </div>
            <button onClick={ ()=>{
                console.log({email, password})
            } }>login</button>
        </div>
    );
};
