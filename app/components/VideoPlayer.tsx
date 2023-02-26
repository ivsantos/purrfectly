import type { SourceOptions } from 'cloudinary-video-player/types/video-player';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import VideoProducts from './VideoProducts';

let cloudinary: typeof window.cloudinary;

interface VideoPlayerProps {
  id: string;
  source: string;
  options: SourceOptions & { shoppable: ProductList };
}

const VideoPlayer = ({ id, source, options }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [ended, setEnded] = useState(false);
  const { shoppable } = options || {};

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

    function endedHandler() {
      setEnded((prev) => !prev);
    }

    function playHandler() {
      setEnded(false);
    }

    video?.addEventListener('ended', endedHandler);
    video?.addEventListener('play', playHandler);

    return () => {
      video?.removeEventListener('ended', endedHandler);
      video?.removeEventListener('play', playHandler);
    };
  }, [loaded, id]);

  // This is a hack to get the parent of the video element from the cloudinary player,
  // since it creates a div wrapper around the video element.
  const videoParent = videoRef.current?.parentElement;

  return (
    <>
      {ended &&
        videoParent &&
        createPortal(
          <VideoProducts products={shoppable?.products} />,
          videoParent,
        )}
      <video
        id={id}
        ref={videoRef}
        className={`cld-video-player cld-fluid absolute top-0 ${
          ended ? 'blur-sm' : ''
        }`}
      />
    </>
  );
};

export default VideoPlayer;
