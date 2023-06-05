import React, { useEffect, useState } from "react";
import styles from "../styles/AdviceGenerator.module.scss";
import Image from "next/image";
function AdviceGenerator() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState(0);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <div className={styles.adviceGenerator}>
      <h1>Advice #{adviceId}</h1>
      <p className={styles.adviceText}>{`"${advice}"`} </p>
      <img
        className={styles.dividerPattern}
        srcSet="/pattern-divider-mobile.svg 600w, /pattern-divider-desktop.svg 1000w"
        alt=""
      />
      <button onClick={() => fetchAdvice()} className={styles.diceContainer}>
        <Image
          className={styles.dice}
          src={"/icon-dice.svg"}
          alt=""
          width={100}
          height={100}
        />
      </button>
    </div>
  );
}

export default AdviceGenerator;
