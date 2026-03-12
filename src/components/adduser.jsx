import React from 'react'

const Adduser = ({data,setData,editInputName,setEditInputName,editInputAge,setEditInputAge,editInputEmail,setEditInputEmail,editInputJob,setEditInputJob}) => {

let handleSubmit=(event)=>{
  event.preventDefault()

  let obj={
    id:Date.now(),
    name:event.target["inpName"].value,
    age:event.target["inpAge"].value,
    email:event.target["inpEmail"].value,
    job:event.target["inpJob"].value,
    status:true
  }

  setData([...data,obj])
}






  return (
    <>

    <div className='flex justify-between p-[60px] px-[180px]'>
    <form onSubmit={handleSubmit} className='flex flex-col gap-[10px] bg-blue-400 w-[40%]  p-[30px] rounded-2xl'>
      <h1 className='text-center text-white text-2xl font-bold'>Add</h1>

      <input name="inpName" placeholder='Name...' className='bg-white p-[5px] rounded'/>
      <input name="inpAge" placeholder='Age...' className='bg-white p-[5px] rounded'/>
      <input name="inpEmail" placeholder='Email...' className='bg-white p-[5px] rounded'/>
      <input name="inpJob" placeholder='Job...' className='bg-white p-[5px] rounded'/>

      <button className='bg-blue-800 text-white p-[10px] rounded'>
        Add
      </button>

    </form>
    
    <div className='flex flex-col gap-[10px] bg-blue-400 w-[40%]  p-[30px] rounded-2xl'>
      <h1 className='text-center text-white text-2xl font-bold'>Edit</h1>

      <input value={editInputName} onChange={(e)=>setEditInputName(e.target.value)} name="inpName" placeholder='Name...' className='bg-white p-[5px] rounded'/>
      <input value={editInputAge} onChange={(e)=>setEditInputAge(e.target.value)} name="inpAge" placeholder='Age...' className='bg-white p-[5px] rounded'/>
      <input value={editInputEmail} onChange={(e)=>setEditInputEmail(e.target.value)} name="inpEmail" placeholder='Email...' className='bg-white p-[5px] rounded'/>
      <input value={editInputJob} onChange={(e)=>setEditInputJob(e.target.value)} name="inpJob" placeholder='Job...' className='bg-white p-[5px] rounded'/>

      <button className='bg-blue-800 text-white p-[10px] rounded'>
        Edit
      </button>

    </div>
    </div>
    </>
  )
}

export default Adduser