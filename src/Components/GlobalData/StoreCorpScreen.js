import React, { useState } from "react";

const initialState2 = {
  id:102,

  name : " ",
  activeStatus : true,
  dateGiven : new Date("2000-01-01T12:00:00")
};

export const Context2 = React.createContext();

const StoreCorpScreen = ({ children }) => {
  const [state2, setState2] = useState(initialState2);
  return (
    <Context2.Provider value={[state2, setState2]}>{children}</Context2.Provider>
  );
};

export default StoreCorpScreen;
