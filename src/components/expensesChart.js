import React, { useEffect } from "react";
import styles from "../styles/ExpensesChart.module.scss";
import Image from "next/image";
import data from "../data/data.json";
function ExpensesChart() {
  const maxAmount = Math.max(...data.map((item) => item.amount));
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <p>My balance</p>
          <p>$921.48</p>
        </div>
        <Image src={"/logo.svg"} alt="" width={73} height={73} />
      </div>
      <div className={styles.main}>
        <h1>Spending - Last 7 days</h1>
        <div className={styles.chartsContainer}>
          {data.map((data) => (
            <div className={styles.chart} key={data.day}>
              <span>${data.amount}</span>
              <div
                above50={(data.amount > 50).toString()}
                style={{ height: `${data.amount + 15}%` }}
              />

              <p>{data.day}</p>
            </div>
          ))}
        </div>
        <div className={styles.hr} />
        <div>
          <div>
            <p>Total this month</p>
            <p>$478.33</p>
          </div>
          <div>
            <p>+2.4%</p>
            <p>from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpensesChart;
