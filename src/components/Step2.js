import React from "react";

const PersonalInfo = ({ nextStep, prevStep, handleChange, formData }) => {
  const { name, email, phone } = formData;

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Personal Information</h2>
      <label className="block mb-2">Name</label>
      <input
        type="text"
        value={name}
        onChange={handleChange("name")}
        className="border p-2 mb-4 w-full"
      />
      <label className="block mb-2">Email</label>
      <input
        type="email"
        value={email}
        onChange={handleChange("email")}
        className="border p-2 mb-4 w-full"
      />
      <label className="block mb-2">Phone</label>
      <input
        type="tel"
        value={phone}
        onChange={handleChange("phone")}
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

export default PersonalInfo;
