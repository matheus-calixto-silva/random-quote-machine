import React, { useEffect, useState } from 'react';
import './App.scss';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    callApi();
  }, []);

  function handleClick() {
    setData(null);
    callApi();
  }

  async function callApi() {
    const quoteJson = await (await fetch('https://favqs.com/api/qotd')).json();
    setData(quoteJson);
  }

  return (
    <div id='quote-box'>
      <div id='quote'>
        <h1 id='text'>“{data && data.quote.body}”</h1>
        <p id='author'>{data && data.quote.author}</p>
      </div>
      <div id='buttons'>
        <a href='twitter.com/intent/tweet' target='_blank' id='tweet-quote'>
          Tweet
        </a>
        <button id='new-quote' onClick={handleClick}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
