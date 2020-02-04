const getQuotes = () => {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes')
    .then(res => res.json())
    .then(quotes => quotes.map(quote => ({
      character: quote.character,
      quote: quote.quote
    })));
};

export default getQuotes;
