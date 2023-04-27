/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-tabs */
/* eslint-disable eol-last */
import React from "react";

// importing wine data from json file
import data from "../assets/Wine-Data.json"

// importing the core library.
import ReactEChartsCore from "echarts-for-react/lib/core";

// Importing the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from "echarts/core";
import { BarChart, LineChart } from "echarts/charts";

// importing components, all suffixed with Component
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  ToolboxComponent,
  // DatasetComponent,
} from "echarts/components"

// Importing renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from "echarts/renderers"
import type { Options } from "../interfaces/interface";
import { InitialOptions } from "../static/static";
import { getSeriesData } from "../static/helperFunctions";

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
  LegendComponent,
  ToolboxComponent,
])

const Body: React.FC = () => {
  const [option, setOption] = React.useState<Options>(InitialOptions);

  React.useEffect(() => {
    setOption(option => {
      return {
        ...option,
        title: {
          text: "Wine Data Line Chart",
          padding: 20,
        },
        legend: {
          data: Object.keys(data[0]),
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: Object.keys(data[0]),
          }
        ],
        yAxis: [
          {
            type: "value",
          }
        ],

        series: getSeriesData(data)
      }
    });
  }, [data]);

  return (
    <section className="w-full h-8/10 px-10">
      <ReactEChartsCore
        echarts={echarts}
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme={"dark"}
        opts={{ renderer: "canvas" }}
		    style={{ height: 400 }}
      />
    </section>
  );
};

export default Body;
