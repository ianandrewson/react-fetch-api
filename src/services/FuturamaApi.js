const getQuotes = () => {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.json())
    .then(quotes => quotes.map(quote => ({
      character: quote.character,
      quote: quote.quote
    })));
};

export default getQuotes;
