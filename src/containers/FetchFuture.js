import React, { Component } from 'react';
import Header from '../components/header/Header.js';
import QuoteList from '../components/quoteList/QuoteList.js';

export default class FetchFuture extends Component {
  render() {
    return (
      <>
        <Header />
        <QuoteList />
      </>
    );
  }
}
