import React from 'react'
import ReactDom from 'react-dom'
import Navigation from './components/Navigation.js'

const App = () => {
  return (
    <div id="income-analytics">
      <h1>Income Analytics</h1>
      <Navigation/>
    </div>
  );
};

$(function() {
  ReactDom.render(<App/>, document.getElementById('app'));
});
