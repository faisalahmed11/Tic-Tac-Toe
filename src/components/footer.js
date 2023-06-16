import React from 'react'
import Link from 'next/link'
import styles from "../styles/Footer.module.scss"
function Footer() {
  return (
   <footer className={styles.footer}>
   <p className={styles.reference}>

          {/* Challenge by{" "}
          <Link
            target="_blank"
            href={
              "https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3/hub"
            }
          >
            Frontend mentor
          </Link>{" "} */}
           Coded by{" "}
          <Link
            target="_blank"
            href={"https://www.github.com/faisalahmed11"}
          >
            Faisal Ahmed
          </Link>
   </p>
        </footer> 
  )
}

export default Footer