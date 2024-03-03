import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.Logo}>
      <img src="https://img.icons8.com/?size=48&id=aGeUpLpfJRoF&format=png" alt="Shred Cafe Logo" />
      <div className={styles.MainContainer}>
        <div>SHRED</div>
        <div>CAFE</div>
      </div>
    </div>
  );
}