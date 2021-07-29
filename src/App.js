import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Count from './components/Count.js';
import Toggle from './components/Toggle';

function App() {
  const [display, setDisplay] = useState(true);
  const [message, setMessage] = useState('マウント中やで');

  return (
    <SDiv className='App'>
      <h1>Learn useEffect</h1>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && <Count />}

      <SArticle>
        <h1>useEffect cleanUp check</h1>
        {message}
        <br />
        {display && <Toggle setMessage={setMessage} setDisplay={setDisplay} />}
        <br />
        {message}
      </SArticle>
    </SDiv>
  );
}

const SDiv = styled.div`
  background-color: coral;
`;

const SArticle = styled.article`
  background-color: aqua;
  padding: 20px;
`;

export default App;
