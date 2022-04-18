import React, { useState } from "react";
import "./accordian.css";
import { questions } from "./api";
import MyAccordian from "./MyAccordian";

const Accordian = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="main-div">
      <h1>React Interview Question</h1>
        {data.map((curElem) => {
            const {id} = curElem;
          return <MyAccordian key={id} {...curElem} />;
        })}
      </section>
    </>
  );
};

export default Accordian;
