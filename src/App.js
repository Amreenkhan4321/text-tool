import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Outputarea from './components/Outputarea'
import Textarea from './components/Textarea'


function App() {

  const [text , setText] = useState("")

  function submitText(text){
    setText(text)
  }

  //clear text

  function clearText(){
    setText("")
  }
 
  return (
    <>
    <Navbar/>
    <div className='container mt-5'>
    <Textarea text={text} submitText={submitText} />
    <Outputarea  clearText={clearText} text={text} setText={setText}/>
    </div>
    </>
  )
}

export default App