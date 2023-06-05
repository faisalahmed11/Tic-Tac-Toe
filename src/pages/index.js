import React from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import AdviceGenerator from "@/components/adviceGenerator";
function Home() {
  return (
    <>
      <main className={styles.main}>
      <AdviceGenerator/>
        <p className={styles.reference}>
          Challenge by{" "}
          <Link
            target="_blank"
            href={
              "https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt"
            }
          >
            Frontend mentor
          </Link>{" "}
          coded by{" "}
          <Link
            target="_blank"
            href={"https://www.frontendmentor.io/profile/faisalahmed11"}
          >
            Faisal Ahmed
          </Link>
        </p>
      </main>
    </>
  );
}

export default Home;
