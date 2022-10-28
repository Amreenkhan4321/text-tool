import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Outputarea({text , clearText }) {

  //tostify

   
  function copyAlert(){
    toast.success('🦄 Copied', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
  }

  //clear text
  const handleClear = (e)=>{
    e.preventDefault()
    clearText()
  }

  //copy text

const handleClick = (e)=>{
  e.preventDefault()
  
  navigator.clipboard.writeText(text).then(()=>{
    copyAlert()
  });

 
}
  return (
    <form className="form-floating mt-5">
  <textarea  value={text}className="form-control rounded-0" id="floatingTextarea"></textarea>
    <button className="btn   btn-danger mt-3 mx-1" onClick={(e)=>handleClick(e)} >Copy</button>
    <button className="btn  btn-info  mt-3 mx-1" onClick={(e)=>handleClear(e)}>Clear</button>
    <ToastContainer
position="top-center"//t
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
</form>
  )
}

export default Outputarea