import { useRef } from 'react';
import { VIDEO_URL } from '../utils/constants';

type VideoTypes = {
  sourceURL?: string;
};

export const Video = ({ sourceURL }: VideoTypes) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    const videoElement = videoRef.current;

    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if ((videoElement as any).videoElement.webkitRequestFullscreen) {
        (videoElement as any).webkitRequestFullscreen();
      } else if ((videoElement as any).videoElement.msRequestFullscreen) {
        (videoElement as any).videoElement.msRequestFullscreen();
      }
    }
  };

  return (
    <div className='rounded-lg'>
      <video
        className='absolute inset-0 h-full w-full'
        controls
        autoPlay
        ref={videoRef}
        onPlay={handlePlay}
      >
        <source src={sourceURL || VIDEO_URL} type='video/mp4' />
      </video>
    </div>
  );
};
