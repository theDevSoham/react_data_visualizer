interface WineData {
  Alcohol: number | string
  'Malic Acid': number | string
  Ash: number | string
  'Alcalinity of ash': number | string
  Magnesium: number | string
  'Total phenols': number | string
  Flavanoids: number | string
  'Nonflavanoid phenols': number | string
  Proanthocyanins: number | string
  'Color intensity': number | string
  Hue: number | string
  'OD280/OD315 of diluted wines': number | string
  Unknown: number | string
}

interface SeriesItems {
  name: string
  type: 'line' | 'bar'
  stack?: string
  data: number[]
  smooth?: boolean
}

interface Options {
  title: {
    text: string
    padding?: number
  }
  tooltip: {
    trigger: string
  }
  legend?: {
    data: string[]
    show: boolean
  }
  toolbox: {
    feature: {
      saveAsImage: object
    }
  }
  grid: {
    left: string
    right: string
    bottom: string
    containLabel: boolean
  }
  xAxis: Array<{
    type: 'category'
    boundaryGap: boolean
    data: string[]
  }>
  yAxis: Array<{
    type: 'value'
  }>
  series: SeriesItems[]
}

interface Tab {
  name: 'Line View' | 'Bar View' | 'Raw JSON'
  id: 'line' | 'bar' | 'raw'
}

export type { WineData, Options, SeriesItems, Tab }
