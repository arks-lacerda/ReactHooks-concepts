import React, { useState, useEffect, useDebugValue } from "react";
import './App.css';

function App() {
  const [loading, response] = useFetch('https://api.github.com/users/maateusilva');
  const [loading2, response2] = useFetch('https://api.github.com/users/maasdffsdteusilxzxzxva');

  if (loading) {
    return <h1>Loading ...</h1>
  }

  return (
    <>
      {JSON.stringify(response)}
    </>
  )
};

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(url);
      const json = await resp.json();

      setLoading(false);
      setResponse({json, status: resp.status});
    })();
  }, [url]);

  useDebugValue(response?.status, (message) => {
    return `Status: ${message}`; 
  });

  return [loading, response?.json];
}

export default App;