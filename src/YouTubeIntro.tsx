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
    frame,
    fps,
    config: {damping: 16, stiffness: 85},
  });
  const titleProgress = spring({
    frame: frame - 8,
    fps,
    config: {damping: 13, stiffness: 125},
  });
  const titleOpacity = interpolate(frame, [8, 17], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: '#48d9f1', overflow: 'hidden'}}>
      <AbsoluteFill
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0, 133, 205, 0.22) 5px, transparent 5.5px)',
          backgroundSize: '18px 18px',
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
          transform: `translateY(${interpolate(arrowProgress, [0, 1], [45, 0])}px) scale(${interpolate(arrowProgress, [0, 1], [0.96, 1])})`,
          transformOrigin: 'center center',
        }}
      >
        <defs>
          <pattern
            height="18"
            id="arrow-dots"
            patternUnits="userSpaceOnUse"
            width="18"
          >
            <rect fill="#1675e5" height="18" width="18" />
            <circle cx="9" cy="9" fill="#0757bd" r="5" />
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
          transform: `translateY(${interpolate(titleProgress, [0, 1], [-36, 0])}px) rotate(-3deg)`,
        }}
      >
        <div
          style={{
            position: 'relative',
            color: '#fff',
            fontFamily,
            fontSize: 142,
            lineHeight: 1.1,
            letterSpacing: 1,
            whiteSpace: 'nowrap',
            WebkitTextStroke: '9px #05070a',
            paintOrder: 'stroke fill',
            textShadow:
              '5px 5px 0 #05070a, 8px 8px 0 #05070a, 11px 11px 0 #05070a',
          }}
        >
          {title}
        </div>
      </div>
    </AbsoluteFill>
  );
};
