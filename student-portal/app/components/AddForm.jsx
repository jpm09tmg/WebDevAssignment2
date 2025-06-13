'use client';

import { useState } from 'react';

const AddForm = ({ addStudent }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [currentGrade, setCurrentGrade] = useState('');

  const submit = () => {
    if (firstName && lastName && dateOfBirth && currentGrade) {
      addStudent({
        firstName,
        lastName,
        dateOfBirth,
        currentGrade
      });
      
      setFirstName('');
      setLastName('');
      setDateOfBirth('');
      setCurrentGrade('');
    }
  };

  return (
    <div>
      <h2>Add New Student</h2>
      
      <div>
        <label>First Name:</label>
        <input 
          type="text" 
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>

      <div>
        <label>Last Name:</label>
        <input 
          type="text" 
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>

      <div>
        <label>Date of Birth:</label>
        <input 
          type="date" 
          value={dateOfBirth}
          onChange={(event) => setDateOfBirth(event.target.value)}
        />
      </div>

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

      <button onClick={submit}>
        Add Student
      </button>
    </div>
  );
};

export default AddForm;