import React, { useEffect, useState } from "react";
import Docnames from "./Docnames";
const About = () => {
  /*
  useEffect(() => {
    document.title = `this is my about page`;
  });*/

  return (
    <h1 style={{ textAlign: "center" }}>
      {<Docnames pageno={1} />}
      about
    </h1>
  );
};
export default About;
