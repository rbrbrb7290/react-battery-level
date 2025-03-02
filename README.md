# React Battery Level

## Simple customizable battery component!

## 목차

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [License](#license)

### Features

<div align="center">
  <img width="300px" src="/demo/demo.gif">
</div>

### Installation

```bash
npm i react-battery-level
```

### Usage

```jsx
import BatteryLevel from 'react-battery-level';

function App() {
  return (
    <BatteryLevel
      width="250"
      gauge={75}
      isCharging
      borderStyles={{
        color: '#000',
      }}
    />
  );
}

export default App;
```

## Props

`BatteryLevel` 컴포넌트는 다음과 같은 props를 받습니다:

| Prop               | Type                 | Default     | Description                                            |
| ------------------ | -------------------- | ----------- | ------------------------------------------------------ |
| `width`            | `number` \| `string` | `"150"`     | Optional. The width of the battery icon.               |
| `height`           | `number` \| `string` | `"100%"`    | Optional. The height of the battery icon.              |
| `gauge`            | `number`             | None        | Required. The charge level of the battery (0-100).     |
| `gaugeColor`       | `string`             | `"#34C759"` | Optional. The color of the battery fill.               |
| `isCharging`       | `boolean`            | `false`     | Optional. Indicates if the battery is charging.        |
| `showPercentage`   | `boolean`            | `false`     | Optional. Shows the battery percentage inside the SVG. |
| `borderStyles`     | `object`             | `{}`        | Optional. Styling for the border.                      |
| `lightningStyles`  | `object`             | `{}`        | Optional. Styling for the lightning bolt.              |
| `percentageStyles` | `object`             | `{}`        | Optional. Styling for the battery percentage text.     |

### `borderStyles` Object

| Key           | Type     | Default   | Description                          |
| ------------- | -------- | --------- | ------------------------------------ |
| `color`       | `string` | `"black"` | Stroke color for the battery border. |
| `strokeWidth` | `number` | `1`       | Stroke width for the battery border. |
| `radius`      | `number` | `5`       | Border radius for the battery.       |

### `lightningStyles` Object

| Key           | Type     | Default                    | Description                                  |
| ------------- | -------- | -------------------------- | -------------------------------------------- |
| `fill`        | `string` | `"yellow"`                 | Fill color for the lightning bolt.           |
| `stroke`      | `string` | `none`                     | Stroke color for the lightning bolt.         |
| `strokeWidth` | `number` | `0.5`                      | Stroke width for the lightning bolt.         |
| `position`    | `object` | `{ x: 15, y: -1 }`         | Position of the lightning bolt.              |
| `transform`   | `object` | `{ scale: 1, rotate: 10 }` | Transform properties for the lightning bolt. |

### `percentageStyles` Object

| Key        | Type     | Default   | Description                                |
| ---------- | -------- | --------- | ------------------------------------------ |
| `fontSize` | `number` | `8`       | Font size for the battery percentage text. |
| `color`    | `string` | `"black"` | Color for the battery percentage text.     |

### License

MIT
