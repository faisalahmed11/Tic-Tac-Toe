import React from "react";
import styles from "../styles/Home.module.scss";
function Home() {
  return (
    <>
      <main className={styles.main}>
<section className={styles.section1}>
<article className={styles.article1}>
  <p className={styles.p1}>So, you want to travel to </p>
  <p className={styles.p2}>Space</p>
  <p className={styles.p3}>{"Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"}</p>
</article>
<button className={styles.explore}>
  Explore
</button>
</section>


        
      </main>
      
    </>
  );
}

export default Home;
