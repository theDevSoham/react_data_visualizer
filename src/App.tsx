/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable eol-last */

import React, { Suspense } from 'react'
import type { ReactElement } from 'react'
import Loading from './components/Loading'
const Header = React.lazy(() => import('./components/Header'))
const Body = React.lazy(() => import('./components/Body'))

const App: React.FC = (): ReactElement => {
  return (
    <div className='w-screen h-screen'>
      <Suspense fallback={<Loading />}>
        <Header />
        <Body />
      </Suspense>
    </div>
  )
}

export default App