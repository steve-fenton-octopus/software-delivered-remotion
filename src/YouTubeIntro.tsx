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

export const YouTubeIntro: React.FC = () => {
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
    config: {damping: 18, stiffness: 90},
  });
  const slideProgress = spring({
    frame: frame - 87,
    fps,
    config: {damping: 18, stiffness: 90},
  });
  const impactBounce = interpolate(frame, [70, 73, 78, 83], [0, -64, 16, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const titleOpacity = interpolate(frame, [30, 39], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: '#48d9f1', overflow: 'hidden'}}>
      <AbsoluteFill
        style={{
          backgroundImage:
            'radial-gradient(circle at 6.3px 6.3px, rgba(0, 133, 205, 0.16) 7px, transparent 7.35px), radial-gradient(circle at 18.9px 18.9px, rgba(0, 133, 205, 0.16) 7px, transparent 7.35px)',
          backgroundSize: '25.2px 25.2px',
          backgroundPosition: '0 0',
        }}
      />

      <svg
        aria-hidden
        height="100%"
        viewBox="0 0 1920 1080"
        width="100%"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          inset: 0,
          transform: `translateY(${interpolate(arrowProgress, [0, 1], [1100, 0])}px) scale(1.1)`,
          transformOrigin: 'center center',
        }}
      >
        <defs>
          <pattern
            height="25.2"
            id="arrow-dots"
            patternUnits="userSpaceOnUse"
            width="25.2"
          >
            <rect fill="#1675e5" height="25.2" width="25.2" />
            <circle cx="6.3" cy="6.3" fill="#0757bd" fillOpacity="0.72" r="7" />
            <circle cx="18.9" cy="18.9" fill="#0757bd" fillOpacity="0.72" r="7" />
          </pattern>
        </defs>
        <path
          d="M 960 238 L 1920 842 L 1920 1080 L 0 1080 L 0 842 Z"
          fill="url(#arrow-dots)"
          stroke="#05070a"
          strokeLinejoin="round"
          strokeWidth="14"
        />
      </svg>

      <div
        style={{
          position: 'absolute',
          top: 48,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          opacity: titleOpacity,
          transform: `translate(${interpolate(slideProgress, [0, 1], [0, -440])}px, ${interpolate(titleProgress, [0, 1], [-36, 0]) + interpolate(slideProgress, [0, 1], [0, 283]) + impactBounce}px) scale(${interpolate(slideProgress, [0, 1], [1, 0.62])}) rotate(${interpolate(tiltProgress, [0, 1], [-3, -32])}deg)`,
        }}
      >
        <div
          style={{
            position: 'relative',
            color: '#fff',
            fontFamily,
            fontSize: 185,
            lineHeight: 1.1,
            letterSpacing: 1,
            whiteSpace: 'nowrap',
            WebkitTextStroke: '12px #05070a',
            paintOrder: 'stroke fill',
            textShadow:
              '6px 6px 0 #05070a, 11px 11px 0 #05070a, 16px 16px 0 #05070a, 21px 21px 0 #05070a',
          }}
        >
          {title}
        </div>
      </div>
    </AbsoluteFill>
  );
};
