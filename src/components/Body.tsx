/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-tabs */
/* eslint-disable eol-last */
import React from "react";

// importing the core library.
import ReactEChartsCore from "echarts-for-react/lib/core";

// Importing the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";

// importing components, all suffixed with Component
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  // DatasetComponent,
} from "echarts/components"

// Importing renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from "echarts/renderers"

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
])

const option = {
  title: {
    text: "ECharts Getting Started Example",
  },
  tooltip: {},
  legend: {
    data: ["sales"],
  },
  xAxis: {
    data: ["Shirts", "Cardigans", "Chiffons", "Pants", "Heels", "Socks"],
  },
  yAxis: {},
  series: [
    {
      name: "sales",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    }
  ]
}

const Body: React.FC = () => {
  return (
    <section className="w-full h-8/10 pt-10">
      <ReactEChartsCore
        echarts={echarts}
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme={"dark"}
        opts={{ renderer: "canvas" }}
		className="w-full h-full"
      />
    </section>
  );
};

export default Body;
