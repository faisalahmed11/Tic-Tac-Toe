import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
import { Footer } from "@/components";
function Home() {
  const [turnO, setTurnO] = useState(true);
  const [blockTurns, setBlockTurns] = useState({});
  const [winPattern, setWinPattern] = useState("");

  const handleOnClick = (block) => {
    if (!blockTurns[block] && !winPattern) {
      const updatedBlockTurns = { ...blockTurns, [block]: turnO ? "O" : "X" };
      setBlockTurns(updatedBlockTurns);
      checkWin(updatedBlockTurns[block], updatedBlockTurns);
      setTurnO((prevTurn) => !prevTurn);
    }
  };
  const checkWin = (x, blocks) => {
    blocks.block1 === x && blocks.block2 === x && blocks.block3 === x
      ? setWinPattern("1/3")
      : blocks.block4 === x && blocks.block5 === x && blocks.block6 === x
      ? setWinPattern("4/6")
      : blocks.block7 === x && blocks.block8 === x && blocks.block9 === x
      ? setWinPattern("7/9")
      : blocks.block1 === x && blocks.block4 === x && blocks.block7 === x
      ? setWinPattern("1/7")
      : blocks.block2 === x && blocks.block5 === x && blocks.block8 === x
      ? setWinPattern("2/8")
      : blocks.block1 === x && blocks.block5 === x && blocks.block9 === x
      ? setWinPattern("1/9")
      : blocks.block3 === x && blocks.block5 === x && blocks.block7 === x
      ? setWinPattern("3/7")
      : blocks.block3 === x && blocks.block6 === x && blocks.block9 === x
      ? setWinPattern("3/9")
      : "";
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Tic Tac Toe</h1>
        <h2 className={styles.subTitle}>O / X</h2>
        <div className={styles.gameBoard} data-win-pattern={winPattern}>
          {/* game board lines */}
          {[1, 2, 3, 4].map((line) => (
            <div
              key={line}
              className={`${styles["boardLine" + line]} ${styles.boardLine}`}
            />
          ))}

          {/* game blocks */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <button
              key={item}
              onClick={() => handleOnClick("block" + item)}
              className={`${styles.gameBlock} ${styles["gameBlock" + item]}`}
              data-active={blockTurns["block" + item] ? "true" : "false"}
            >
              {blockTurns["block" + item]
                ? blockTurns["block" + item]
                : turnO
                ? "O"
                : "X"}
            </button>
          ))}
        </div>

        <button
          data-visible={Object.keys(blockTurns).length > 0 ? "true" : "false"}
          className={styles.resetButton}
          onClick={() => (setBlockTurns({}), setWinPattern(""), setTurnO(true))}
        >
          {!winPattern ? "Reset Game" : "Restart Game"}
        </button>
      </div>
      <Footer />
    </main>
  );
}

export default Home;
