type Props = {
  width?: number | string;
  height?: number | string;
  gauge: number;
  gaugeColor?: string;
  isCharging: boolean;
  isShowGaugePercentage: boolean;
  lightningBoltStyles?: {
    fill: string;
    stroke: string;
    strokeWidth: string | number;
  };
  gaugePercentageStyles?: {
    fontSize: string | number;
    color: string;
  };
};
const BatteryLevel = ({
  gauge,
  width = "100%",
  height = "100%",
  isCharging = false,
  isShowGaugePercentage = true,
  gaugeColor = "#6EF47A",
  lightningBoltStyles = {
    fill: "white",
    stroke: "black",
    strokeWidth: 0.5,
  },
  gaugePercentageStyles = {
    fontSize: 7,
    color: "black",
  },
}: Props) => {
  const maxGaugeWidth = 73;
  const batteryHeight = 73;
  const gaugeWidth = gauge * (maxGaugeWidth / 100);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 45 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.2102 11.4C44.2102 9.96999 43.2702 8.76999 41.9702 8.35999V14.43C43.2702 14.02 44.2102 12.82 44.2102 11.39V11.4Z"
        fill="black"
      />
      <path
        d="M41.9702 14.93C41.8702 14.93 41.7602 14.9 41.6702 14.83C41.5402 14.74 41.4702 14.59 41.4702 14.43V8.35999C41.4702 8.19999 41.5502 8.04999 41.6702 7.95999C41.8002 7.86999 41.9702 7.83999 42.1202 7.88999C43.6702 8.37999 44.7102 9.78999 44.7102 11.4C44.7102 13.01 43.6702 14.42 42.1202 14.91C42.0702 14.93 42.0202 14.93 41.9702 14.93ZM42.4702 9.13999V13.65C43.2302 13.16 43.7102 12.32 43.7102 11.39C43.7102 10.46 43.2302 9.61999 42.4702 9.12999V9.13999Z"
        fill="black"
      />
      <path
        d="M33.5 22.74H7.60995C3.94995 22.74 0.959961 19.76 0.959961 16.09V6.7C0.959961 3.04 3.93995 0.0500031 7.60995 0.0500031H33.5C37.16 0.0500031 40.1499 3.03 40.1499 6.7V16.09C40.1499 19.75 37.17 22.74 33.5 22.74ZM7.60995 2.56C5.31995 2.56 3.45996 4.42 3.45996 6.71V16.1C3.45996 18.39 5.31995 20.25 7.60995 20.25H33.5C35.79 20.25 37.6499 18.39 37.6499 16.1V6.71C37.6499 4.42 35.79 2.56 33.5 2.56H7.60995Z"
        fill="black"
      />
      <rect
        id="4"
        x="4.1"
        y="3"
        width={gaugeWidth + "%"}
        height={batteryHeight + "%"}
        rx="3"
        ry="3"
        fill={gaugeColor}
      />
      {isShowGaugePercentage && (
        <text
          x="20"
          y="11"
          fontSize={gaugePercentageStyles.fontSize}
          color={gaugePercentageStyles.color}
          textAnchor="middle"
          alignmentBaseline="central"
          fill="black"
        >
          {gauge}%
        </text>
      )}
      {isCharging && (
        <path
          d="M27.6495 12.15L18.7595 7.23C18.7595 7.23 18.6696 7.21 18.6396 7.23C18.5996 7.25 18.5796 7.29 18.5796 7.34V10.3H11.5996C11.5396 10.3 11.4896 10.34 11.4796 10.39C11.4696 10.44 11.4895 10.5 11.5395 10.53L20.4295 15.45C20.4295 15.45 20.4696 15.47 20.4896 15.47C20.5096 15.47 20.5296 15.47 20.5496 15.45C20.5896 15.43 20.6096 15.39 20.6096 15.34V12.38H27.5896C27.6496 12.38 27.6995 12.34 27.7095 12.29C27.7195 12.24 27.6995 12.18 27.6495 12.15Z"
          fill={lightningBoltStyles.fill}
          stroke={lightningBoltStyles.stroke}
          strokeWidth={lightningBoltStyles.strokeWidth}
        />
      )}
    </svg>
  );
};

export default BatteryLevel;
