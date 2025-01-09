import React, { useState } from "react";

const XDictionary = () => {
  // Initialize the dictionary state
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  // Function to handle search
  const handleSearch = () => {
    const word = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (word) {
      setResult(word.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>XDictionary</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter a word..."
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
      <h4>Definition</h4>
      {result && (
        <div style={{ marginTop: "20px", fontSize: "16px", color: "#333" }}>
          {result}
        </div>
      )}
    </div>
  );
};

export default XDictionary;
