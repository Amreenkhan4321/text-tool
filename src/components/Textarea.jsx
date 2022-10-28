import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Textarea({submitText}) {

 const [input , setInput]= useState("")

 //tostify
 function emptyAlert(){
  toast.error('🥵 Enter Something', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });//tostify
}



 //text submit
 const handleSubmit = (e) => {
  e.preventDefault()
  if(input===""){
// window.alert("enter something")
emptyAlert()
  }
  else{
    submitText(input)
  }
  setInput("")
 }


 //text uppercase

 const handleUppercase = (e)=>{
  e.preventDefault()
  if(input===""){
    // window.alert("enter something")
    emptyAlert()

  }else{
    submitText(input.toUpperCase())
  }
  setInput("")

 }


 //Lower case

 const handleLowercase = (e)=>{
  e.preventDefault()
  if(input===""){
    window.alert("enter something")
  }else{
    submitText(input.toLowerCase())
  }
  setInput("")
 }
  return (
    <form className="form-floating ">
    <textarea value={input} className="form-control rounded-0" id="floatingTextarea" onChange={(e)=>setInput(e.target.value)} ></textarea>
      <button className="btn  btn-success mt-3 mx-1" onClick={(e)=>handleUppercase(e)} >Uppercase</button>
      <button className="btn  btn-warning  mt-3 mx-1" onClick={(e)=>handleLowercase(e)}>Lowercase</button>
      <button className="btn  btn-primary  mt-3 mx-1" onClick={(e)=>handleSubmit(e)}>Submit</button>
      <ToastContainer
position="top-right"//t
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
  </form>
  )
}

export default Textarea