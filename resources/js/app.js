import React from 'react'
import ReactDom from 'react-dom'

const App = () => {
  return (
    <div id="income-analytics">
      <h1>Income Analytics</h1>
    </div>
  );
}
console.log('mic check');
$(function() {
  ReactDom.render(<App/>, document.getElementById('app'));
});