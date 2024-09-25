import React, { useContext, useEffect, useState, useRef } from 'react';
import { stepperContext } from '/contexts/stepperContext';

// Account Component
export function Account() {
    const { userData, setUserData } = useContext(stepperContext);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div className='flex flex-col'>
            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">UserName</div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                        onChange={handleChange}
                        value={userData["username"] || ""}
                        name="username"
                        placeholder="Username"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                </div>
            </div>
            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Password</div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                        onChange={handleChange}
                        value={userData["password"] || ""}
                        name="password"
                        placeholder="Password"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                </div>
            </div>
            Account
        </div>
    );
}

// Details Component
export function Details() {
    return (
        <div>Details</div>
    );
}

// Final Component
export function Final() {
    return (
        <div className="container md:mt-10">
            <div className="flex flex-col items-center">
                <div className="text-green-400">
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className='mt-3 text-xl font-semibold uppercase text-green-500'>Congratulations!</div>
                <div className='text-lg font-semibold text-gray-500'>Your account has been created.</div>
                <a className='mt-10' href="/">
                    <button className='h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100'>
                        Close
                    </button>
                </a>
            </div>
        </div>
    );
}

// Payment Component
export function Payment() {
    return (
        <div>Payment</div>
    );
}

// Stepper1 Component
const Stepper1 = ({ steps, currentStep }) => {
    const [newStep, setNewStep] = useState([]);
    const stepRef = useRef();

    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps];
        let count = 0;

        while (count < newSteps.length) {
            if (count === stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true,
                };
                count++;
            } else if (count < stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true,
                };
                count++;
            } else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false,
                };
                count++;
            }
        }
        return newSteps;
    };

    useEffect(() => {
        const stepsState = steps.map((step, index) =>
            Object.assign({}, {
                description: step,
                completed: false,
                highlighted: index === 0,
                selected: index === 0,
            })
        );
        stepRef.current = stepsState;
        const current = updateStep(currentStep - 1, stepRef.current);
        setNewStep(current);
    }, [steps, currentStep]);

    const displaySteps = newStep.map((step, index) => (
        <div key={index} className={index === newStep.length - 1 ? "w-full flex items-center" : "flex items-center"}>
            <div className="relative flex flex-col items-center text-teal-600">
                <div className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${step.selected ? "bg-green-600 text-white font-bold border-green-600" : ""}`}>
                    {step.completed ? (
                        <span className="text-white font-bold text-xl">&#10003;</span>
                    ) : (index + 1)}
                </div>
                <div className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${step.highlighted ? "text-gray-900" : "text-gray-400"}`}>
                    {step.description}
                </div>
            </div>
            {index < newStep.length - 1 && (
                <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed ? "border-green-600" : "border-gray-300"}`}></div>
            )}
        </div>
    ));

    return (
        <div className="mx-4 p-4 flex justify-between items-center">
            {displaySteps}
        </div>
    );
};

// StepperControl1 Component
const StepperControl1 = ({ handleClick, currentStep, steps }) => {
    return (
        <div className="container flex justify-around mt-4 mb-8">
            <button
                onClick={() => handleClick()}
                className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
                Back
            </button>
            <button
                onClick={() => handleClick("next")}
                className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out">
                {currentStep === steps.length - 1 ? "Confirm" : "Next"}
            </button>
        </div>
    );
};

export { Stepper1, StepperControl1 };
