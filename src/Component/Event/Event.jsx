import React from 'react';
import './Event.css';
import { Link } from 'react-router-dom';

const Event = () => {
  return (
    <div className='main-event'>
      <div className="event-content">
        <h1>Welcome to the Event Management Application</h1>
        <h3>Do you have account? <br />Yes &gt; Login <br /> No &gt; Sign-up </h3>
        <div className="btn-container">
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
          <span className="btn-separator">Or</span>
          <Link to="/signup">
            <button className="btn btn-secondary">Sign-up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;