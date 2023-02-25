import HighlightText from './HighlightText';
import VideoPlayer from './VideoPlayer';

const options = {
  shoppable: {
    startState: 'open',
    autoClose: 2,
    bannerMsg: ' ',
    transformation: {
      quality: 'auto:eco',
      fetch_format: 'auto',
      crop: 'pad',
      aspect_ratio: '1',
    },
    products: [
      {
        productId: 1,
        productName: 'Plumero',
        startTime: 0,
        endTime: 11,
        publicId: 'images/plumero_smaxuh',
        hotspots: [
          {
            time: '00:08',
            x: '43%',
            y: '55%',
            tooltipPosition: 'left',
            clickUrl: 'https://cloudinary.com/',
          },
        ],
        onHover: {
          action: 'overlay',
          args: 'Plumero',
        },
        onClick: {
          action: 'goto',
          args: {
            url: 'https://cloudinary.com/',
          },
        },
        // onClick: {
        //   action: 'seek',
        //   pause: 5,
        //   args: {
        //     time: '00:08',
        //   },
        // },
      },
    ],
  },
};

export default function Featured() {
  return (
    <section className="mx-auto max-w-5xl rounded-2xl bg-secondary">
      <h2 className="relative isolate p-10 text-center text-3xl font-bold">
        <HighlightText /> Destacados
      </h2>
      <div className="mx-8 grid grid-cols-featured gap-4 pb-10">
        <VideoPlayer
          id="ginger_kitten_playing_fgbxaf"
          source="videos/ginger_kitten_playing_fgbxaf"
          options={options}
        />
        <VideoPlayer
          id="ginger_kitten_playing_fgbxaf123"
          source="videos/ginger_kitten_playing_fgbxaf"
          options={options}
        />
      </div>
    </section>
  );
}
