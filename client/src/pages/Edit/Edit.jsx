import React, {useState} from 'react'
import Toolbar from './_component/Toolbar'
import Template from './_component/Template'
import TextTool from './_component/TextTool'
import ObjectTool from './_component/ObjectTool'
import ImageTool from './_component/ImageTool'
import UploadTool from './_component/UploadTool'
import Setting from './_component/Setting'
import Canvas from './_component/Canvas'



const Edit = () => {

const [activeTool, setactiveTool] = useState('')
 
const handleToolsClick = (option) => {
  setactiveTool(option)
}

  return (
  <>
  <div className='flex'>
  
  <Toolbar handleToolsClick={handleToolsClick} />
  <div
  className="relative px-3 h-[calc(100%-0px)] min-w-[320px] bg-[var(--color-1)] border-r border-[var(--color-4)] left-[0px] top-0 box-border z-[999999] block overflow-hidden">
 {activeTool == 'setting' && <Setting/>}
 {activeTool == 'template' && (<Template/>)}
 {activeTool == 'text' && (<TextTool/>)}
 {activeTool == 'object' && (<ObjectTool/>)}
 {activeTool == 'upload' && (<UploadTool/>)}
 {activeTool == 'image' && (<ImageTool/>)}
</div>
<Canvas/>
  
</div>
  </>
  )
}

export default Edit