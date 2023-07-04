const CandidatesPage = ({ candidates }) => {
    return (
      <div>
        <h2>Candidate Listing</h2>
        <div className="cardContainer">
          {candidates && candidates.length > 0 ? (
            candidates.map((candidate) => (
              <div className="card" key={candidate.id}>
                <h3>{candidate.name}</h3>
                <p>Location: {candidate.location}</p>
                <p>Job Role: {candidate.jobRole}</p>
              </div>
            ))
          ) : (
            <p>No candidates found.</p>
          )}
        </div>
  
        <style jsx>{`
          h2 {
            font-size: 1.8rem;
            color: #3a3d94;
            margin-bottom: 1rem;    
          }
  
          .cardContainer {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-gap: 1rem;
          }
  
          .card {
            background-color: #fff;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
  
          h3 {
            font-size: 1.5rem;
            color: #333;
            margin-bottom: 0.5rem;
          }
  
          p {
            font-size: 1.2rem;
            color: #555;
            margin-bottom: 0.5rem;
          }
        `}</style>
      </div>
    );
  };
  

export default CandidatesPage;
