'use client'

import styles from '@/styles/videobackground.module.css'; // Import CSS module


const VideoBackground = () => {


  return (

    <div className={styles.videoContainer}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/videos/yasuolongkiem.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default VideoBackground;
