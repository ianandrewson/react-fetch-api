import React, { Component } from 'react';
import Header from '../components/header/Header.js';
import QuoteList from '../components/quoteList/QuoteList.js';
import getQuotes from '../services/FuturamaApi.js';

export default class FetchFuture extends Component {

  state = {
    quotes: [
      { character: 'Ian', quote: 'Just to see this works' },
      { character: 'Someone Else', quote: 'A second test' }
    ]
  }

  fetch = () => {
    return getQuotes()
      .then(result => this.setState({ quotes: result }));
  }

  render() {
    const { quotes } = this.state;

    return (
      <>
        <Header />
        <QuoteList quotes={quotes} />
      </>
    );
  }
}
