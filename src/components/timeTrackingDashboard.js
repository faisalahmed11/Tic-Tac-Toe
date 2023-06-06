import React, { useEffect, useState } from "react";
import styles from "../styles/TimeTrackingDashboard.module.scss";
import Image from "next/image";
import data from "../data/data.json";

function TimeTrackingDashboard() {
  const TimeCard = ({ title, time }) => (
    <div title1={title} className={styles.timeCardWrapper}>
      <div className={styles.timeCard}>
        <div>
          <h2 className={styles.timeTitle}>{title}</h2>
          <Image
            className={styles.ellipsisIcon}
            src={"/icon-ellipsis.svg"}
            alt=""
            width={30}
            height={30}
          />
        </div>
        <div>
          <p>{time.current}hrs</p>
          <p>
            Last {active == "d" ? "day" : active == "w" ? "week" : "month"} -{" "}
            {time.previous}hrs
          </p>
        </div>
      </div>
    </div>
  );

  const [active, setActive] = useState("w");
  return (
    <section className={styles.wrapper}>
      <div className={styles.userContainerWrapper}>
        <div className={styles.userContainer}>
          <Image
            className={styles.userImage}
            alt=""
            width={100}
            height={100}
            src={"/image-jeremy.png"}
          />
          <div className={styles.userTextContainer}>
            <p className={styles.userPreName}>Report for</p>
            <h1 className={styles.userName}>Jeremy Robson</h1>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button
            active={active == "d" ? "true" : "false"}
            onClick={() => setActive("d")}
          >
            Daily
          </button>
          <button
            active={active == "w" ? "true" : "false"}
            onClick={() => setActive("w")}
          >
            Weekly
          </button>
          <button
            active={active == "m" ? "true" : "false"}
            onClick={() => setActive("m")}
          >
            Monthly
          </button>
        </div>
      </div>
      <div className={styles.dataWrapper}>
        {data.map((item) => (
          <TimeCard
            key={item.title}
            title={item.title}
            time={
              active == "d"
                ? item.timeframes.daily
                : active == "w"
                ? item.timeframes.weekly
                : item.timeframes.monthly
            }
          />
        ))}
      </div>
    </section>
  );
}

export default TimeTrackingDashboard;
