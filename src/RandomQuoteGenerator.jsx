import React, { useState, useEffect } from 'react';

function RandomQuoteGenerator() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const fetchQuotes = async () => {
    const response = await fetch('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand');
    const data = await response.json();
    const quoteArray = data.map(item => item.content.rendered.replace(/<\/?p>/g, ''));
    setQuotes(quoteArray);
  };

  const fetchRandomQuote = () => {
    const newIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuoteIndex(newIndex);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className='container d-flex flex-column p-3 '>
      <h1 className='text-center mb-3'>Random Quote Generator</h1>
      <button title='Click to get random Queotes' className='btn btn-primary font-weight-bold fs-3' onClick={fetchRandomQuote}>Click here to Get New Quote</button>
      <div className='fs-4 card text-bg-info text-white '>
      <p title='Randomly Generated Queotes'>{quotes[currentQuoteIndex]}</p>
      </div>
    </div>
  );
}

export default RandomQuoteGenerator;
