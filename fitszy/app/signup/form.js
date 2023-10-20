"use client"

import {useState} from 'react'

export default function form() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegistration = async (e) => {
      e.preventDefault();

      const result = await fetch.post(`/api/auth/register`, {
          username,
          email,
          password
      });
  
      if (result.error) {
        // Handle registration errors
        console.error(result.error);
      } else {
        // Registration successful, you can redirect or update UI
      //   router.push('/dashboard');
      }
    };
  
    return (
      <form onSubmit={handleRegistration}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    )
}
