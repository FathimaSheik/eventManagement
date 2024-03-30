import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./Showevent.css"

const ShowEvent = () => {
  const location = useLocation();
  const { eventName, eventDescription, eventDate } = location.state || {};
  const [storedEvent, setStoredEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedEventJSON = localStorage.getItem('eventDetails');
    if (storedEventJSON) {
      setStoredEvent(JSON.parse(storedEventJSON));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (eventName && eventDescription && eventDate) {
      localStorage.setItem('eventDetails', JSON.stringify({ eventName, eventDescription, eventDate }));
    }
  }, [eventName, eventDescription, eventDate]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className='main-showEvent'>
                <h1 className="card-title text-center">Event Details</h1>
                <p><strong>Name:</strong> {eventName || storedEvent?.eventName || "No name available"}</p>
                <p><strong>Description:</strong> {eventDescription || storedEvent?.eventDescription || "No description available"}</p>
                <p><strong>Date:</strong> {eventDate || storedEvent?.eventDate || "No date available"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowEvent;
