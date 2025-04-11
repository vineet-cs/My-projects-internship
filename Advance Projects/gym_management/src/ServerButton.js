import React, { useState } from 'react';
import axios from 'axios';

const ServerButton = () => {
  const [response, setResponse] = useState('');

  const handleClick = () => {
    axios.get('/api/hello') // Assumes your server is listening at '/api/hello'
      .then(res => setResponse(res.data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {response && <p>{response}</p>}
    </div>
  );
};

export default ServerButton;
