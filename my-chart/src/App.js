
import React from "react";

import {
  Chart,
  CommonSeriesSettings,
  Series,
  ArgumentAxis,
  Grid,
  Crosshair,
  Export,
  Legend,
  Point,
  Label,
  Font,
  Title,
  Subtitle,
  Tooltip
} from "devextreme-react/chart";
import { chartValues, charttype } from "./data.js";

class App extends React.Component {
  render() {
    return (
      <Chart id="chart" dataSource={charttype}>
        <CommonSeriesSettings type="spline" argumentField="createdAt" >
          <Point hoverMode="ArgumentPoints" />
        </CommonSeriesSettings>
        {chartValues.map((item) => (
          <Series key={item.value} valueField={item.value} name={item.name} />
        ))}
        <ArgumentAxis
          valueMarginsEnabled={true}
         discreteAxisDivisionMode="crossLabels"
        >
          <Grid  display={false} />
        </ArgumentAxis>
        <Crosshair enabled={true} color="#949494" width={1} dashStyle="dot">
          <Label visible={true} backgroundColor="#949494">
            <Font color="#fff" size={12} />
          </Label>
        </Crosshair>
        <Legend enabled={false}
          verticalAlignment="bottom"
          horizontalAlignment="center"
          itemTextPosition="bottom"
          equalColumnWidth={true}
        />
        <Title text="performance theme">
         
        </Title>
        <Export enabled={false} />
        <Tooltip enabled={true}   />
      </Chart>
    );
  }
}

export default App;
