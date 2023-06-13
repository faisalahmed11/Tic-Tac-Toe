import React,{useState,useEffect} from "react";
import styles from "../styles/Crew.module.scss";

import { useRouter } from "next/router";
import Image from "next/image";
import Data from "../data/data.json";
import { Title,CrewNavigation } from "@/components";

function Crew() {
  const { name } = useRouter().query;
  const [crew, setCrew] = useState("Douglas Hurley");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (name) {
      setCrew(name);
    }
  }, [name]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 40);
    return clearTimeout;
  }, []);

  const data = Data.crew.find((item) => item.name === crew);
  return loading ? (
    <></>
  ) : (
    <main className={styles.main}>
      <Title preText={"02"} text={"Meet your Crew"} />
      <section1 className={styles.section1}>
      {data && data.image && (
          <div className={styles.crewImageContainer}>

          <Image
            alt={crew}
            className={styles.crewImage}
            src={data.image}
            width={1000}
            height={1000}
          />
          </div>
        )}
        <article1 className={styles.article1}>
       <CrewNavigation styles={styles} crew={crew}/>
<p className={styles.crewRole}>{data.role}</p>
<h2 className={styles.crewName}>{crew}</h2>
      <p className={styles.crewBio}> {data.bio}</p>
        </article1>
      </section1>
    </main>
  );
}

export default Crew;
