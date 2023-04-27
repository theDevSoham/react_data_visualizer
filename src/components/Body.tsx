/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-tabs */
/* eslint-disable eol-last */
import React from "react";

// importing wine data from json file
import data from "../assets/Wine-Data.json";

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
} from "echarts/components";

// Importing renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from "echarts/renderers";
import type { Options, Tab } from "../interfaces/interface";
import { InitialOptions, tabs } from "../static/static";
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
]);

const Body: React.FC = () => {
  const [option, setOption] = React.useState<Options>(InitialOptions);
  const [currentTab, setCurrentTab] = React.useState<Tab['id']>(tabs[0].id);
  const [showLegend, setShowLegend] = React.useState<boolean>(false);

  const selectTab = (e: React.MouseEvent<HTMLButtonElement>, id: string): void => {
    e.preventDefault();
    setCurrentTab(id as Tab['id']);
  };

  React.useEffect(() => {
    setOption((option) => {
      return {
        ...option,
        title: {
          text: `Wine Data - ${currentTab as string}`,
          padding: 20,
        },
        legend: {
          data: Object.keys(data[0]),
          show: showLegend
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: Object.keys(data[0]),
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],

        series: getSeriesData(data, currentTab),
      };
    });
  }, [data, currentTab, showLegend]);

  return (
    <section className="w-full h-8/10 px-10">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {tabs.map((tab, index) => {
          if (currentTab === tab.id) {
            return (
            <li className="mr-2" key={index}>
              <button
                className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
                onClick={(e) => { selectTab(e, tab.id); }}
              >
                {tab.name}
              </button>
            </li>)
          } else {
            return (
              <li className="mr-2" key={index}>
                <button
                  className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  onClick={(e) => { selectTab(e, tab.id); }}
                >
                  {tab.name}
                </button>
              </li>
            )
          }
        })}
      </ul>

      <div className="mt-6">
        {currentTab !== 'raw'
        ? <div>
            <ReactEChartsCore
              echarts={echarts}
              option={option}
              notMerge={true}
              lazyUpdate={true}
              theme={"dark"}
              opts={{ renderer: "canvas" }}
              style={{ height: 400 }}
            />

            <div className="mt-6">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => { setShowLegend(showLegend => !showLegend) }}
            >
              Toggle Legend
            </button>
            </div>
        </div>
        : <div className="overflow-x-auto">xxx</div>
        }
      </div>
    </section>
  );
};

export default Body;
