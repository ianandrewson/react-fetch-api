const getQuotes = () => {
  return Promise.resolve([
    { character: 'Tester', quote: 'This is a test' },
    { character: 'Another Test', quote: 'This is another test' }
  ]);
};

export default getQuotes;
