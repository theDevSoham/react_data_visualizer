/* eslint-disable no-tabs */
import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import data from '../assets/Wine-Data.json'

const JSONViewer: React.FC = () => {
  const [bodyData, setBodyData] = React.useState<string>(JSON.stringify(data, null, 2))

  const onChange = React.useCallback((value: any, viewUpdate: any) => {
    setBodyData(value as string)
  }, [])

  return (
	<div className='w-full h-full'>
		<CodeMirror
			value={bodyData}
			height="100%"
			extensions={[javascript({ jsx: true })]}
			editable={false}
			basicSetup={true}
			onChange={onChange}
		/>
	</div>
  )
}

export default JSONViewer
