import styles from "./darkHeader.module.css";

export default function Darkheader({ check }) {
  return (
    <>
      <div className={styles.darkHeader}>darkheader</div>
      <div className="darkheader">darkheader: {check ? "yes" : "no"}</div>
    </>
  );
}
