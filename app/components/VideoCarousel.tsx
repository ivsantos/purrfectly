import type { Video } from '@prisma/client';

import Card from './Card';
import VideoPlayer from './VideoPlayer';

export default function VideoCarousel({
  videos,
  title,
}: {
  videos: Video[];
  title: string;
}) {
  return (
    <Card title={title}>
      <div className="mx-8 grid grid-cols-card gap-4 pb-10">
        {videos.map((video) => (
          <VideoPlayer
            key={video.id}
            id={video.id}
            source={video.publicId}
            // @ts-ignore
            options={video.options}
          />
        ))}
      </div>
    </Card>
  );
}
