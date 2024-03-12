# React Battery Level

## Simple customizable battery component!

## Features

- **SVG-Based**: Crisp and clean rendering at any size or resolution.
- **Dynamic Gauge**: Visual battery level represented by a customizable SVG fill.
- **Charging State**: Optional SVG lightning bolt icon for charging indication.
- **Customizable Appearance**: Configure the dimensions, color, and styles of the SVG elements.
- **Percentage Display**: Option to display the battery percentage text within the SVG.

<div align="center">
  <img width="300px" src="/demo/demo1.gif">
   <img width="300px" src="/demo/demo2.gif">
    <img width="300px" src="/demo/demo3.gif">
</div>

## Installation

```bash
npm install react-battery-level --save
```

## Usage

```jsx
import { useState } from "react";
import BatteryLevel from "react-battery-level";

function App() {
  const [gauge, setGauge] = useState(75);
  return (
    //Adjust only width to maintain aspect ratio.
    <BatteryLevel
      width="10vw"
      gauge={gauge}
      gaugeColor={gauge <= 20 ? "#FF5713" : "#6EF47A"}
      isCharging={true}
      isShowGaugePercentage={false}
      lightningBoltStyles={{
        fill: gauge <= 20 ? "#FF5713" : "#6EF47A",
        stroke: "white",
        strokeWidth: 0.5,
      }}
    />
  );
}
export default App;
```

## Props

| Prop                    | Type                 | Default     | Description                                            |
| ----------------------- | -------------------- | ----------- | ------------------------------------------------------ |
| `width`                 | `number` \| `string` | `"100%"`    | Optional. The width of the SVG battery icon.           |
| `height`                | `number` \| `string` | `"auto"`    | Optional. The height of the SVG battery icon.          |
| `gauge`                 | `number`             | None        | Required. The charge level of the battery (0-100).     |
| `gaugeColor`            | `string`             | `"#6EF47A"` | Optional. The color of the battery fill.               |
| `isCharging`            | `boolean`            | `false`     | Required. Indicates if the battery is charging.        |
| `isShowGaugePercentage` | `boolean`            | `true`      | Optional. Shows the battery percentage inside the SVG. |
| `lightningBoltStyles`   | `object`             | `{}`        | Optional. Styling for the SVG lightning bolt.          |
| `gaugePercentageStyles` | `object`             | `{}`        | Optional. Styling for the battery percentage text.     |

<br>

### `lightningBoltStyles` Object

| Key           | Type                 | Default   | Description                              |
| ------------- | -------------------- | --------- | ---------------------------------------- |
| `fill`        | `string`             | `"white"` | SVG fill color for the lightning bolt.   |
| `stroke`      | `string`             | `"black"` | SVG stroke color for the lightning bolt. |
| `strokeWidth` | `number` \| `string` | `0.5`     | SVG stroke width for the lightning bolt. |

### `gaugePercentageStyles` Object

| Key        | Type                 | Default   | Description                                |
| ---------- | -------------------- | --------- | ------------------------------------------ |
| `fontSize` | `number` \| `string` | `7`       | Font size for the battery percentage text. |
| `color`    | `string`             | `"black"` | Color for the battery percentage text.     |

## License

MIT
