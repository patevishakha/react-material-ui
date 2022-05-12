import React, { useState } from "react";

const initialState = {
  // id: 1002,
  show_dialed_access_no: true,
  show_network_address_suppliers: false,
  show_external_code: false,
  sms_service: true,
  product_type_n_i_col1: true,
  product_type_i_i_col1: false,
  date_created_from: new Date("2022-01-01T12:00:00"),
  date_created_to: new Date("2022-01-01T12:00:00"),
  revenue_owners: [],
  corps: [],
  country_code: [],
  inbound_accesstype: [],
};

export const Context1 = React.createContext();

export const initialValues = initialState;
const Storereport = ({ children }) => {
  const [state1, setState1] = useState(initialState);
  return (
    <Context1.Provider value={[state1, setState1]}>
      {children}
    </Context1.Provider>
  );
};

export default Storereport;
