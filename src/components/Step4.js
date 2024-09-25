import React, { useState } from "react";

const Step4 = ({ prevStep, formData }) => {
  const { match, tickets, name, email, phone, cardNumber, expiryDate } = formData;
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    // Update the confirmation state to show the message
    setIsConfirmed(true);
  };

  return (
    <div className="p-4">
      {isConfirmed ? (
        <div className="text-center" style={{height:"38vh"}}>
            <p className="text-green-500 text-lg font-semibold">Your ticket is confirmed!</p>
        </div>
        
      ) : (
        <div style={{height:"38vh"}}>
          <p><strong>Match:</strong> {match}</p>
          <p><strong>Tickets:</strong> {tickets}</p>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Card Number:</strong> **** **** **** {cardNumber.slice(-4)}</p>
          <p><strong>Expiry Date:</strong> {expiryDate}</p>

          <div className="flex justify-between mt-4">
            <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">
              Back
            </button>
            <button onClick={handleConfirm} className="bg-blue-500 text-white p-2 rounded">
              Confirm & Book
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step4;
