import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.Logo}>
      <img src="https://cdn-icons-png.flaticon.com/128/3778/3778927.png" alt="Shred Cafe Logo" />
      <div className={styles.MainContainer}>
        <div>SHRED</div>
        <div>CAFE</div>
      </div>
    </div>
  );
}