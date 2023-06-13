import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Destination.module.scss";
import Image from "next/image";
import Data from "../data/data.json";
import { Title, DestinationNavigation } from "@/components";

function Destination() {
  const { name } = useRouter().query;
  const [destination, setDestination] = useState("Moon");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (name) {
      setDestination(name);
    }
  }, [name]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 40);
    return clearTimeout;
  }, []);

  const data = Data.destinations.find((item) => item.name === destination);

  return loading ? (
    <></>
  ) : (
    <main className={styles.main}>
      <Title preText={"01"} text={"Pick your destination"} />
      <section className={styles.section1}>
        {data && data.image && (
          <Image
            alt={destination}
            className={styles.destinationImage}
            src={data.image}
            width={400}
            height={400}
          />
        )}
        <article className={styles.article1}>
          <DestinationNavigation styles={styles} destination={destination} />

          <h2 className={styles.destinationName}>{destination}</h2>
          <p className={styles.bodyText}>{data.description}</p>
          <div className={styles.statsContainer}>
            <div>
              <p>Avg. Distance</p>
              <p>{data.distance}</p>
            </div>
            <div>
              <p>Est. Travel Time</p>
              <p>{data.travel}</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Destination;
