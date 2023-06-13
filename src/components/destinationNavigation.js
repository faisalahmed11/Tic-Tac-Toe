import React from 'react'
import Link from 'next/link'
function DestinationNavigation({styles,destination}) {
  return (
    <nav className={styles.destinationNav}>
            <ul>
              <li>
                <Link
                  href="/destination?name=Moon"
                  scroll={false}
                  className={
                    destination === "Moon" ? styles.activeLink : styles.link
                  }
                >
                  Moon
                </Link>
              </li>
              <li>
                <Link
                  href="/destination?name=Mars"
                  scroll={false}
                  className={
                    destination === "Mars" ? styles.activeLink : styles.link
                  }
                >
                  Mars
                </Link>
              </li>
              <li>
                <Link
                  scroll={false}
                  href="/destination?name=Europa"
                  className={
                    destination === "Europa" ? styles.activeLink : styles.link
                  }
                >
                  Europa
                </Link>
              </li>
              <li>
                <Link
                  scroll={false}
                  href="/destination?name=Titan"
                  className={
                    destination === "Titan" ? styles.activeLink : styles.link
                  }
                >
                  Titan
                </Link>
              </li>
            </ul>
          </nav>
  )
}

export default DestinationNavigation