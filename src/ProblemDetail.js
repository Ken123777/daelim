import React, { useState } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import { postUserSolution } from './api/problems';

export default function ProblemDetail({ problem }) {
  const [ code, setCode ] = useState("");

  function validateAnswer () {
    postUserSolution(problem._id, code).then(data => {
      if (data.result !== '에러') {
        alert(data.result);
      } else {
        alert(data.detail);
      }
    });
  }

  return (
    <div className="problem">
      <section className="description">
        <h3>{problem.title}</h3>
        <p>{problem.description}</p>
      </section>
      <section className="code-editor">
        <CodeMirror
          onChange={function onChange(newValue) {
            setCode(newValue);
          }}
          value={'function solution () {}'}
          options={{
            mode: 'javascript'
          }}
        />
        <button onClick={() => validateAnswer()}>제출</button>
      </section>
    </div>
  );
}
