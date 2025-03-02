 export type BatteryProps = {
    width?: number | string;
    height?: number | string;
    gauge: number;
    gaugeColor?: string;
    isCharging?: boolean;
    lightningStyles?: {
      fill?: string;
      stroke?: string;
      strokeWidth?: number;
      position?: {
        x?: number;
        y?: number;
      };
      transform?: {
        scale?: number;
        rotate?: number;
      };
    };
    showPercentage?: boolean;
    percentageStyles?: {
      fontSize?: number;
      color?: string;
    };
    borderStyles?: {
      color?: string;
      strokeWidth?: number;
      radius?: number;
    };
};