import {loadFont} from '@remotion/google-fonts/Bangers';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const {fontFamily} = loadFont('normal', {
  weights: ['400'],
  subsets: ['latin'],
});

const title = 'SOFTWARE DELIVERED';

export const YouTubeIntroPortrait: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const arrowProgress = spring({
    frame: frame - 60,
    fps,
    config: {damping: 14, stiffness: 100},
  });
  const titleProgress = spring({
    frame: frame - 30,
    fps,
    config: {damping: 13, stiffness: 125},
  });
  const tiltProgress = spring({
    frame: frame - 70,
    fps,
    config: {damping: 22, stiffness: 45},
  });
  const slideProgress = spring({
    frame: frame - 87,
    fps,
    config: {damping: 22, stiffness: 45},
  });
  const impactBounce = interpolate(frame, [70, 73, 78, 83], [0, -48, 12, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const exitProgress = interpolate(frame, [150, 195], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const exitTravel = exitProgress * exitProgress;
  const titleSlideX = interpolate(slideProgress, [0, 1], [0, -180]);
  const titleSlideY = interpolate(slideProgress, [0, 1], [0, 118]);
  const titleExitX = 1080 * exitTravel;
  const titleExitY = titleExitX * (118 / 180);
  const chevronExitProgress = interpolate(frame, [195, 225], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const chevronDrop = chevronExitProgress ** 1.5 * 2600;
  const titleOpacity = interpolate(frame, [30, 39], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: '#48d9f1', overflow: 'hidden'}}>
      <AbsoluteFill
        style={{
          backgroundImage:
            'radial-gradient(circle at 7px 7px, rgba(0, 133, 205, 0.16) 7px, transparent 7.35px), radial-gradient(circle at 21px 21px, rgba(0, 133, 205, 0.16) 7px, transparent 7.35px)',
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0',
        }}
      />

      <AbsoluteFill
        style={{
          transform: `translateY(${chevronDrop}px) rotate(${chevronExitProgress * 45}deg)`,
          transformOrigin: 'left bottom',
        }}
      >
        <svg
          aria-hidden
          height="100%"
          viewBox="0 0 1080 1920"
          width="100%"
          preserveAspectRatio="xMidYMid meet"
          style={{
            transform: `translateY(${interpolate(arrowProgress, [0, 1], [1900, 0])}px) scale(1.1)`,
            transformOrigin: 'center center',
            overflow: 'visible',
          }}
        >
          <defs>
            <pattern
              height="28"
              id="arrow-dots-portrait"
              patternUnits="userSpaceOnUse"
              width="28"
            >
              <rect fill="#1675e5" height="28" width="28" />
              <circle cx="7" cy="7" fill="#0757bd" fillOpacity="0.72" r="7" />
              <circle cx="21" cy="21" fill="#0757bd" fillOpacity="0.72" r="7" />
            </pattern>
          </defs>
          <path
            d="M 540 960 L 1680 1708 L 1680 5000 L -600 5000 L -600 1708 Z"
            fill="url(#arrow-dots-portrait)"
            stroke="#05070a"
            strokeLinejoin="round"
            strokeWidth="14"
          />
        </svg>
      </AbsoluteFill>

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          opacity: titleOpacity,
          transform: `translate(${titleSlideX - titleExitX}px, calc(-50% + ${interpolate(titleProgress, [0, 1], [-36, 0]) + titleSlideY + impactBounce - 50 + titleExitY}px)) scale(${interpolate(slideProgress, [0, 1], [1, 0.62])}) rotate(${interpolate(tiltProgress, [0, 1], [-3, -33.3])}deg)`,
        }}
      >
        <div
          style={{
            position: 'relative',
            color: '#fff',
            fontFamily,
            fontSize: 105,
            lineHeight: 1.1,
            letterSpacing: 1,
            whiteSpace: 'nowrap',
            WebkitTextStroke: '7px #05070a',
            paintOrder: 'stroke fill',
            textShadow:
              '4px 4px 0 #05070a, 8px 8px 0 #05070a, 12px 12px 0 #05070a, 16px 16px 0 #05070a',
          }}
        >
          {title}
        </div>
      </div>
    </AbsoluteFill>
  );
};
