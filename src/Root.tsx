import {Composition} from 'remotion';
import {YouTubeIntro} from './YouTubeIntro';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="YouTubeIntro"
      component={YouTubeIntro}
      durationInFrames={196}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
