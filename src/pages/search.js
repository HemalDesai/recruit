import React, { useState } from 'react';
import CandidatesPage from './candidates';

const SearchPage = () => {
  const [location, setLocation] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    // Mocking sample data for testing
    const sampleCandidates = [
      { id: 1, name: 'John Doe', location: 'New York', jobRole: 'Software Engineer' },
      { id: 2, name: 'John Mark', location: 'New York', jobRole: 'Software Engineer' },
      { id: 3, name: 'Jane Smith', location: 'San Francisco', jobRole: 'UX Designer' },
      { id: 4, name: 'David Johnson', location: 'London', jobRole: 'Product Manager' },
      // Add more sample candidates as needed
    ];

    // Filter the sample candidates based on location and job role
    const filteredCandidates = sampleCandidates.filter((candidate) => {
      return (
        candidate.location.toLowerCase().includes(location.toLowerCase()) &&
        candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase())
      );
    });

    // Update the search results state variable
    setSearchResults(filteredCandidates);
  };

  return (
    <div className="searchPage">
      <h2>Search Candidates</h2>
      <form onSubmit={handleSearch}>
        <div className="formGroup">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="jobRole">Job Role:</label>
          <input
            type="text"
            id="jobRole"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </form>
      <CandidatesPage candidates={searchResults} />

      <style jsx>{`
        .searchPage {
          font-family: 'Arial', sans-serif;
          color: #333;
          background-color: #f7f7f7;
          padding: 2rem;
          border-radius: 8px;
          height: 100vh;
        }

        h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 1.5rem;
        }

        form {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        label {
          font-size: 1.2rem;
          color: #555;
        }

        input {
          padding: 0.5rem;
          font-size: 1.2rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        button {
          padding: 0.5rem 1rem;
          font-size: 1.2rem;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        /* Colorful palette */
        // .searchPage {
        //   background-color: #f3e7e9;
        // }

        h2 {
          color: #3a3d94;
        }

        label {
          color: #6d48e5;
        }

        input {
          border-color: #6d48e5;
        }

        button {
          background-color: #ff6961;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default SearchPage;
