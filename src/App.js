import React, { useState, useEffect } from 'react';
import './App.css';
import ProblemDetail from './ProblemDetail';
import { getProblemList } from './api/problems';

function App() {
  const [ problems, setProblems ] = useState([]);
  const [ selectedProblemId, setSelectedProblemId ] = useState(null);

  const [ selectedProblem ] = problems.filter(data => data.id === selectedProblemId);

  useEffect(function () {
    async function getProblems () {
      const data = await getProblemList();
      setProblems(data);
    }

    getProblems();
  }, []);

  return (
    <div className="App">
      {
        selectedProblemId === null &&
        <>
          <nav>
            Codewars
          </nav>
          <ul>
            {
              problems.map(function (problem) {
                return (
                  <li key={problem.id}>
                    <h3>{problem.title}</h3>
                    <button onClick={() => setSelectedProblemId(problem.id)}>문제풀기</button>
                  </li>
                );
              })
            }
          </ul>
        </>
      }
      {
        selectedProblemId !== null &&
        <ProblemDetail problem={selectedProblem} />
      }
    </div>
  );
}

export default App;
