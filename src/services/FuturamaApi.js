const getQuotes = (num, character) => {
  let url;
  if(character === 'none'){
    url = `https://futuramaapi.herokuapp.com/api/quotes/${num}`;
  } else {
    url =  `https://futuramaapi.herokuapp.com/api/characters/${character}`;
    if(num) url += `/${num}`;
  }

  return fetch(url)
    .then(res => res.json())
    .then(quotes => quotes.map(quote => ({
      character: quote.character,
      quote: quote.quote
    })));
};

export default getQuotes;
