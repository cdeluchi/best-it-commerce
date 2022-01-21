import React from 'react';
import { Link } from 'react-router-dom';

const Singup = () => {
  return (

  <div className="myform">
            <h2>Sign Up</h2>
            <form >
                <label htmlFor="name">Name:</label>
                <input type="text" name="name"  placeholder="Your name" id="name"  required />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email"  placeholder="Your email" id="email"  required />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="New password" id="password"  required />
                <button type="submit">Sign Up</button>
                <div className="bottom-link"><Link to="/login">Login</Link></div>
            </form>
        </div>
  )
};

export default Singup;
