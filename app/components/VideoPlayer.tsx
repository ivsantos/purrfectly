import type { SourceOptions } from 'cloudinary-video-player/types/video-player';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import VideoProducts from './VideoProducts';

declare global {
  interface Window {
    ENV: Record<string, string>;
  }
}

let cloudinary: typeof window.cloudinary;

interface VideoPlayerProps {
  id: string;
  source: string;
  options: SourceOptions & { shoppable: Object };
}

const VideoPlayer = ({ id, source, options }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    function create() {
      if (!videoRef.current) return;

      const video = cloudinary?.videoPlayer(id, {
        cloud_name: window.ENV.CLOUDINARY_CLOUD_NAME,
        muted: true,
        controls: true,
        fluid: true,
      });
      video.source(source, options);
      setLoaded(true);
    }

    async function loadCloudinary() {
      // @ts-ignore
      cloudinary = await import('cloudinary-video-player');
      create();
    }

    if (!cloudinary) {
      loadCloudinary();
    } else {
      create();
    }
  }, [id, options, source]);

  useEffect(() => {
    if (!loaded) return;

    const video = videoRef.current;

    function endHandler() {
      setEnded(true);
    }

    video?.addEventListener('ended', endHandler);

    return () => {
      video?.removeEventListener('ended', endHandler);
    };
  }, [loaded, id]);

  // This is a hack to get the parent of the video element from the cloudinary player,
  // since it creates a div wrapper around the video element.
  // if (typeof document === 'undefined') return null;
  // const videoParent = document.querySelector(`#${id}`);
  const videoParent = videoRef.current?.parentElement;

  return (
    <>
      {ended && videoParent && createPortal(<VideoProducts />, videoParent)}
      <video
        id={id}
        ref={videoRef}
        className={`cld-video-player cld-fluid ${
          ended ? 'absolute top-0 blur-sm' : ''
        }`}
      />
    </>
  );
};

export default VideoPlayer;
