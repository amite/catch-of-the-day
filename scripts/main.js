var React = require('react');
var ReactDOM = require('react-dom');




// StorePicker

const StorePicker = React.createClass({

  render : () => {
    return(
      <form className="store-selector">
        <h2>Please enter a store</h2>
        <input type="text" ref="storeId" required />
        <input type="submit"/>
      </form>
    )
  }

});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'))
