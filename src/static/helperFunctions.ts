import type { SeriesItems, Tab, WineData } from '../interfaces/interface'

const isNumber = (value: any): boolean => {
  return typeof value === 'number' && isFinite(value)
}

const getSeriesData = (
  data: WineData[],
  currentTab: Tab['id']
): SeriesItems[] => {
  return Object.keys(data[0]).map((key: string) => {
    return {
      name: key,
      type: currentTab !== 'raw' ? currentTab : 'line',
      stack: currentTab === 'line' ? 'stack' : undefined,
      smooth: currentTab === 'line',
      data: data.map((wine: WineData) => {
        if (isNumber(wine[key as keyof WineData])) {
          return wine[key as keyof WineData]
        }

        try {
          const value = parseFloat(wine[key as keyof WineData] as string)
          return value
        } catch (e: unknown) {
          console.error('error', e)
          return 0
        }
      }) as number[]
    }
  })
}

export { getSeriesData }
