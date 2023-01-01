import React from "react";
import { connect } from "react-redux";

class ComponentThree extends React.Component {
  render() {
    let counter = this.props.counter;
    let text = this.props.text.value;
    
    return (
      <div className="ComponentThree">
        <h5>3. Class Component</h5>
        <p>Counter: {counter}</p>
        <p>Text: {text} </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const counter = state.counter;
  const text = state.text;
  return {
    counter,
    text
  };
}

export default connect(mapStateToProps)(ComponentThree);