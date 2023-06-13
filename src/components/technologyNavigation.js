import React from 'react'
import Link from 'next/link'
function TechnologyNavigation({styles,technology}) {
  return (
    <nav className={styles.technologyNav}>
    <ul>
      <li>
        <Link
        scroll={false}
            href="/technology?name=Launch vehicle"
          className={
           `${styles.link} ${technology==="Launch vehicle"&&styles.activeLink}`
          }
        >1</Link>
      </li>
      <li>
        <Link
          scroll={false}
          href="/technology?name=Spaceport"
          className={
           `${styles.link} ${technology==="Spaceport"&&styles.activeLink}`
          }
        >2</Link>
      </li>
      <li>
        <Link
          scroll={false}
          href="/technology?name=Space capsule"
          className={
           `${styles.link} ${technology==="Space capsule"&&styles.activeLink}`
          }
        >3</Link>
      </li>
 
    </ul>
  </nav>
  )
}

export default TechnologyNavigation