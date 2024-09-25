import React from "react";

const EventInfo = ({ nextStep, handleChange, formData }) => {
  const { match, tickets } = formData;

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Match and Ticket Selection</h2>
      <label className="block mb-2">Select Match</label>
      <select value={match} onChange={handleChange("match")} className="border p-2 mb-4 w-full">
        <option value="">-- Select a Match --</option>
        <option value="Match 1">Match 1 - Team A vs Team B</option>
        <option value="Match 2">Match 2 - Team C vs Team D</option>
        <option value="Final">Final Match</option>
      </select>

      <label className="block mb-2">Number of Tickets</label>
      <input
        type="number"
        value={tickets}
        onChange={handleChange("tickets")}
        className="border p-2 mb-4 w-full"
        min="1"
        max="10"
      />
      <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">
        Next
      </button>
    </div>
  );
};

export default EventInfo;
