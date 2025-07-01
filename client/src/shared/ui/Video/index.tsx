import React, { useMemo, useRef, useState } from "react";
import Play from "shared/icons/play.svg?react";
import styles from "./index.module.scss";
import { VideoType } from "shared/lib/config/interfaces";

interface IVideo
  extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, "src"> {
  src: VideoType[];
  preview: {
    jpg: string;
    webp: string;
  };
  className?: string;
}
const Video: React.FC<IVideo> = ({ src, preview, className, ...props }) => {
  const [playing, setPlaying] = useState(false);

  const videoSources = useMemo(
    () =>
      src.map((source, index) => (
        <source
          key={`${source.type}-${index}`}
          src={source.src}
          type={source.type}
        />
      )),
    [src]
  );

  const videoRef = useRef<HTMLVideoElement>(null);
  const handleClick = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      if (!video.paused && !video.ended) {
        video.pause();
      } else {
        video.play();
      }
    }
  };

  return (
    <div className={`${styles.container} ${className}`}>
      {playing ? (
        <video
          onClick={handleClick}
          muted
          autoPlay
          playsInline
          poster={preview.jpg}
          width="100%"
          className={styles.video}
          ref={videoRef}
          {...props}
        >
          {videoSources}
          Ваш браузер не поддерживает воспроизведение видео.
        </video>
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className={styles["preview-wrapper"]}
        >
          <picture>
            <source srcSet={preview.webp} type="image/webp" />
            <img
              src={preview.jpg}
              alt="Видеопревью"
              className={styles.preview}
            />
          </picture>
          <Play className={styles["preview__btn"]} />
        </button>
      )}
    </div>
  );
};

export default Video;
