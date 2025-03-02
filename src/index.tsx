import { BatteryProps } from './types';

const BatteryLevel = ({
  width = '150',
  height = '100%',
  gauge,
  gaugeColor = '#34C759',
  isCharging = false,
  lightningStyles = {},
  showPercentage = false,
  percentageStyles = {},
  borderStyles = {},
}: BatteryProps) => {
  const BATTERY_WIDTH = 42;
  const BATTERY_HEIGHT = 22;
  const BATTERY_X = 1;
  const BATTERY_Y = 1;
  const PADDING = 2;
  const GAUGE_MAX_WIDTH = BATTERY_WIDTH - PADDING * 2;

  const defaultBorderStyles = {
    color: 'black',
    strokeWidth: 1,
    radius: 5,
  };

  const defaultLightningStyles = {
    fill: 'yellow',
    stroke: 'none',
    strokeWidth: 0.5,
    position: { x: 15, y: -1 },
    transform: { scale: 1, rotate: 10 },
  };

  const defaultPercentageStyles = {
    fontSize: 8,
    color: 'black',
  };

  const appliedBorderStyles = { ...defaultBorderStyles, ...borderStyles };

  const appliedLightningStyles = {
    ...defaultLightningStyles,
    ...lightningStyles,
    position: {
      ...defaultLightningStyles.position,
      ...lightningStyles.position,
    },
    transform: {
      ...defaultLightningStyles.transform,
      ...lightningStyles.transform,
    },
  };

  const appliedPercentageStyles = {
    ...defaultPercentageStyles,
    ...percentageStyles,
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width={BATTERY_WIDTH}
        height={BATTERY_HEIGHT}
        rx={appliedBorderStyles.radius}
        stroke={appliedBorderStyles.color}
        strokeWidth={appliedBorderStyles.strokeWidth}
      />

      <path
        d="M44.6 8V16C46.2094 15.32244 47.256 13.74626 47.256 12C47.256 10.25374 46.2094 8.67756 44.6 8Z"
        fill={appliedBorderStyles.color}
        fillOpacity="1"
      />

      <rect
        x={BATTERY_X + PADDING}
        y={BATTERY_Y + PADDING}
        width={GAUGE_MAX_WIDTH * (gauge / 100)}
        height="18"
        rx="3"
        fill={gaugeColor}
      />

      {showPercentage && (
        <text
          x={BATTERY_X + 22}
          y={BATTERY_Y + 11}
          fontSize={appliedPercentageStyles.fontSize}
          color={appliedPercentageStyles.color}
          textAnchor="middle"
          alignmentBaseline="central"
          fill="black"
        >
          {gauge}%
        </text>
      )}

      {isCharging && (
        <g
          transform={`
              translate(${appliedLightningStyles.position.x}, ${appliedLightningStyles.position.y}) 
              scale(${appliedLightningStyles.transform.scale}) 
              rotate(${appliedLightningStyles.transform.rotate})
            `}
        >
          <path
            d="M12 0L4 12H10L5 24L16 10H9L12 0Z"
            fill={appliedLightningStyles.fill}
            stroke={appliedLightningStyles.stroke}
            strokeWidth={appliedLightningStyles.strokeWidth}
          />
        </g>
      )}
    </svg>
  );
};

export default BatteryLevel;
