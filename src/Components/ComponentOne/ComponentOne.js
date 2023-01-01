import React from "react";
import allActions from "../../Actions";
import { useDispatch, useSelector } from "react-redux";

function ComponentOne() {
    const dispatch = useDispatch();
    const counter = useSelector( state => state.counter)
    const text = useSelector( state => state.text.value)

    return (
        <div className="ComponentOne">
          <h5>1. Fuctional Component</h5>
    
          <p>Counter: {counter}</p>
          <p>Text: {text} </p>
    
          <button
            className="btn btn-outline-primary"
            onClick={() => dispatch(allActions.counterAction.increament())}
          >
            Increase Counter
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => dispatch(allActions.counterAction.decreament())}
          >
            Decrease Counter
          </button>
        </div>
      );
}

export default ComponentOne;
