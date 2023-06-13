import styles from "../styles/Destination.module.scss";
const Title=({preText,text})=><h1 className={styles.heading}>
<span>{preText}</span> {text}
</h1>

export default Title