import React, { useState } from "react";
import EventInfo from "./Step1.js";
import PersonalInfo from "./Step2.js";
import PaymentInfo from "./Step3.js";
import Confirmation from "./Step4.js";

// Step indicator component
const StepIndicator = ({ currentStep }) => {
  const steps = ["1", "2", "3", "4"];

  return (
    <div className="p-4 flex justify-between items-center mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex-1">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto ${
            currentStep === index + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-500"
          }`}>
            {step}
          </div>
          {index < steps.length - 1 && (
            <div className={`border-t-4 mt-1 ${
              currentStep > index + 1 ? "border-blue-500" : "border-gray-300"
            }`}></div>
          )}
        </div>
      ))}
    </div>
  );
};

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    match: "",
    tickets: 1,
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
  });

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl text-center mb-6">Cricket Match Ticket Booking</h1>
      
      {/* Step indicator */}
      <StepIndicator currentStep={currentStep} />

      {currentStep === 1 && (
        <EventInfo nextStep={nextStep} handleChange={handleChange} formData={formData} />
      )}
      {currentStep === 2 && (
        <PersonalInfo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />
      )}
      {currentStep === 3 && (
        <PaymentInfo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />
      )}
      {currentStep === 4 && (
        <Confirmation prevStep={prevStep} formData={formData} />
      )}
    </div>
  );
};

export default Register;
