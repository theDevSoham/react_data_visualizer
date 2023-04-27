import type { Options, Tab } from '../interfaces/interface'

const InitialOptions: Options = {
  title: {
    text: 'Default Title'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Def1', 'Def2', 'Def3'],
    show: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Default A',
      type: 'line',
      stack: 'x',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Default B',
      type: 'line',
      stack: 'x',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Default C',
      type: 'line',
      stack: 'x',
      data: [150, 232, 201, 154, 190, 330, 410]
    }
  ]
}

const tabs: Tab[] = [
  {
    name: 'Line View',
    id: 'line'
  },
  {
    name: 'Bar View',
    id: 'bar'
  },
  {
    name: 'Area View',
    id: 'area'
  },
  {
    name: 'Raw JSON',
    id: 'raw'
  }
]

export { InitialOptions, tabs }
