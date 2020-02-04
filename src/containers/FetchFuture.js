import React, { Component } from 'react';
import Header from '../components/header/Header.js';
import QuoteList from '../components/quoteList/QuoteList.js';
import getQuotes from '../services/FuturamaApi.js';

export default class FetchFuture extends Component {

  state = {
    quotes: []
  }

  fetch = () => {
    return getQuotes()
      .then(result => this.setState({ quotes: result }));
  }

  componentDidMount() {
    this.fetch();
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
