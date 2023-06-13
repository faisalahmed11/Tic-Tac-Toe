import React from 'react'
import Link from 'next/link'
function CrewNavigation({styles,crew}) {
  return (
    <nav className={styles.crewNav}>
    <ul>
      <li>
        <Link
        scroll={false}
            href="/crew?name=Douglas Hurley"
          className={
           `${styles.link} ${crew==="Douglas Hurley"&&styles.activeLink}`
          }
        />
      </li>
      <li>
        <Link
          scroll={false}
          href="/crew?name=Mark Shuttleworth"
          className={
           `${styles.link} ${crew==="Mark Shuttleworth"&&styles.activeLink}`
          }
        />
      </li>
      <li>
        <Link
          scroll={false}
          href="/crew?name=Victor Glover"
          className={
           `${styles.link} ${crew==="Victor Glover"&&styles.activeLink}`
          }
        />
      </li>
      <li>
        <Link
          scroll={false}
          href="/crew?name=Anousheh Ansari"
          className={
           `${styles.link} ${crew==="Anousheh Ansari"&&styles.activeLink}`
          }
        />
      </li>
    </ul>
  </nav>
  )
}

export default CrewNavigation