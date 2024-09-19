import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available</span>
          {/* <span className={styles.subtitle}>Contact the dean of students for details</span> */}
          <h3>Hey Everyone!</h3>
          <p className={styles.desc}>Visit our YouTube Channel.</p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          {/* <span className={styles.subtitle}>Boost your income</span> */}
          <h3>Boost your income</h3>
          <p className={styles.desc}>
            Join our holiday tuition program. Senior staff can now apply for
            study leave.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
