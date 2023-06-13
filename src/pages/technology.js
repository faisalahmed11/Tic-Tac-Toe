import React, { useState, useEffect } from "react";
import styles from "../styles/Technology.module.scss";

import { useRouter } from "next/router";
import Data from "../data/data.json";
import { Title, TechnologyNavigation } from "@/components";

function Technology() {
  const { name } = useRouter().query;
  const [technology, setTechnology] = useState("Launch vehicle");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (name) {
      setTechnology(name);
    }
  }, [name]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 40);
    return clearTimeout;
  }, []);

  const data = Data.technology.find((item) => item.name === technology);
  return loading ? (
    <></>
  ) : (
    <main className={styles.main}>
      <Title preText={"03"} text={" Space Launch 101"} />
      <section className={styles.section1}>
        <div className={styles.technologyImage} aria-label={technology} />
        <TechnologyNavigation styles={styles} technology={technology} />
        <article className={styles.article1}>
          <p className={styles.preTechnologyName}>The technology...</p>
          <h2 className={styles.technologyName}>{data.name}</h2>
          <p className={styles.technologyDescription}>{data.description}</p>
        </article>
      </section>
    </main>
  );
}

export default Technology;
