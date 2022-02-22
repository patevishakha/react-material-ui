import React, { useEffect, useState } from "react";
import Docnames from "./Docnames";

const Contact = () => {
  /* useEffect(() => {
      document.title = `this is my contact`;
    });
*/

  return (
    <h1 style={{textAlign:"center"}}>
      {<Docnames pageno={0} />}
      contact
    </h1>
  );
};
export default Contact;
