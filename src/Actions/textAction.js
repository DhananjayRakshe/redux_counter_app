const setText = textObj => {
    return {
      type: "SET_TEXT",
      payload: textObj
    };
  };
  
  const clearText = () => {
    return {
      type: "CLEAR_TEXT"
    };
    
  };

  export default {
    setText,
    clearText
  };