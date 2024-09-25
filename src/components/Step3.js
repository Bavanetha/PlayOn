import React from "react";

const PaymentInfo = ({ nextStep, prevStep, handleChange, formData }) => {
  const { cardNumber, expiryDate } = formData;

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Payment Information</h2>
      <label className="block mb-2">Card Number</label>
      <input
        type="text"
        value={cardNumber}
        onChange={handleChange("cardNumber")}
        className="border p-2 mb-4 w-full"
      />
      <label className="block mb-2">Expiry Date</label>
      <input
        type="text"
        value={expiryDate}
        onChange={handleChange("expiryDate")}
        className="border p-2 mb-4 w-full"
      />
      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">
          Back
        </button>
        <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default PaymentInfo;
