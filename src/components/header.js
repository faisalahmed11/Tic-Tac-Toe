import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [loading, setLoading] = useState(true);
  const [fTime, setFTime] = useState(true);
  function handleToggleMenu() {
    const UL = document.querySelector("ul");
    if (openMenu === true) {
      setTimeout(() => {
        UL.style.display = "none";
      }, 500);
    } else {
      UL.style.display = "grid";
    }
    setOpenMenu((prev) => !prev);
  }
  const activeRoute = useRouter().pathname.substring(1);

  useEffect(() => {
    !fTime && handleToggleMenu();
    setFTime(false);
    setActive(activeRoute);
  }, [activeRoute]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 40);
    return clearTimeout;
  }, []);

  return loading ? (
    <></>
  ) : (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src="/shared/logo.svg"
        alt=""
        width={200}
        height={200}
      />
      <button
        className={styles.menu}
        aria-label="menu"
        aria-expanded={openMenu.toString()}
        onClick={handleToggleMenu}
      >
        <Image
          src={
            openMenu ? "/shared/icon-close.svg" : "/shared/icon-hamburger.svg"
          }
          width={100}
          height={100}
          alt="menu"
        />
      </button>
      <nav>
        <ul>
          <li>
            <Link
              href="/home"
              number="00"
              className={`${styles.link} ${
                active === "home" && styles.activeLink
              } `}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/destination"
              number="01"
              className={`${styles.link} ${
                active === "destination" && styles.activeLink
              } `}
            >
              Destination
            </Link>
          </li>
          <li>
            <Link
              href="/crew"
              number="02"
              className={`${styles.link} ${
                active === "crew" && styles.activeLink
              } `}
            >
              Crew
            </Link>
          </li>
          <li>
            <Link
              href="/technology"
              number="03"
              className={`${styles.link} ${
                active === "technology" && styles.activeLink
              } `}
            >
              Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
