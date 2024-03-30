import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateEvent.css';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:2000/api/events/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: eventName,
          description: eventDescription,
          date: eventDate
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Event created successfully:', data);
       
        navigate('/showEvent', { state: { eventName, eventDescription, eventDate } });
      } else {
        console.error('Failed to create event:', data.message);
       
      }
    } catch (error) {
      console.error('Error creating event:', error);
      
    }
  };

  return (
    <div className="create-event-container">
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="eventName" className="form-label">Add Event</label>
          <input
            type="text"
            className="form-control"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eventDescription" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="eventDescription"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eventDate" className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateEvent;