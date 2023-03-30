import React from 'react'

const  signup = () => {
  return (
    <div className='signup-page'>
        <label>Email</label>
        <input type="email" required placeholder='Enter Email'/>
        <label>Password</label>
        <input type="password" required placeholder='Password'/>
    </div>
  );
};
export default signup;
