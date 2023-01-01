import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Actions";

const ComponentTwo = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);

  const [valueChange, setValueChange] = useState("");

  const handleSetText = () => {
    dispatch(allActions.textAction.setText(valueChange));
  };

  const handleClearText = () => {
    dispatch(allActions.textAction.clearText());
    setValueChange("");
  };

  return (
    <div className="ComponentTwo">
      <h5>2. Function Component</h5>
      <p> Counter: {counter}</p>

      <label htmlFor="useState"> Text :</label>
      <input
        id="useState"
        onChange={event => setValueChange(event.target.value)}
        type="text"
        value={valueChange}
        className="inputBox"
      />
      <br />
      <button
        type="submit"
        className="btn btn-outline-primary"
        onClick={handleSetText}
      >
        Set Redux
      </button>
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={handleClearText}
      >
        Clear Redux
      </button>
    </div>
  );
};

export default ComponentTwo;