import {Composition} from 'remotion';
import {YouTubeIntro} from './YouTubeIntro';
import {YouTubeIntroPortrait} from './YouTubeIntroPortrait';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="YouTubeIntro"
        component={YouTubeIntro}
        durationInFrames={256}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="YouTubeIntroPortrait"
        component={YouTubeIntroPortrait}
        durationInFrames={256}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
