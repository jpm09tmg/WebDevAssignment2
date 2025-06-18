'use client';

import { useState } from 'react';

const AddForm = ({ addStudent }) => {
  // State variables to store form input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [currentGrade, setCurrentGrade] = useState('');

  // Function to handle form submission
  const submit = () => {
    // Check if all fields are filled out
    if (firstName && lastName && dateOfBirth && currentGrade) {
      // Add the new student to the list
      addStudent({
        firstName,
        lastName,
        dateOfBirth,
        currentGrade
      });
      
      // Clear the form after submission
      setFirstName('');
      setLastName('');
      setDateOfBirth('');
      setCurrentGrade('');
    }
  };

  return (
    <>
      <div>
        {/* Form title */}
        <h2>Add New Student</h2>
        
        {/* First name input field */}
        <div>
          <label>First Name:</label>
          <input 
            type="text" 
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>

        {/* Last name input field */}
        <div>
          <label>Last Name:</label>
          <input 
            type="text" 
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>

        {/* Date of birth input field */}
        <div>
          <label>Date of Birth:</label>
          <input 
            type="date" 
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
          />
        </div>

        {/* Grade selection dropdown */}
        <div>
          <label>Grade:</label>
          <select 
            value={currentGrade}
            onChange={(event) => setCurrentGrade(event.target.value)}
          >
            <option value="">Select Grade</option>
            <option value="9th Grade">9th Grade</option>
            <option value="10th Grade">10th Grade</option>
            <option value="11th Grade">11th Grade</option>
            <option value="12th Grade">12th Grade</option>
          </select>
        </div>

        {/* Submit button */}
        <button onClick={submit}>
          Add Student
        </button>
      </div>

      {/* Component styling */}
      <style>{`
        
        h2 {
          color: #1e3a8a;
          margin-bottom: 20px;
        }

        
        div {
          margin-bottom: 15px;
        }

        
        label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
          color: #374151;
        }

        
        input, select {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
        }

        
        button {
          background-color: #3b82f6;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
        }

        /
        button:hover {
          background-color: #1d4ed8;
        }
      `}</style>
    </>
  );
};

export default AddForm;