import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Space, Table, Button, Modal, Select, Input } from 'antd';
import { DeleteOutlined, EditOutlined, InfoCircleOutlined} from '@ant-design/icons';
import { Checkbox } from 'antd';

let Api="http://localhost:3001/data"

const App = () =>{
  
    let [data, setData]=useState([])

    
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);


    let [inpName, setName]=useState("")
    let [inpImg, setImg]=useState("")
    let [inpAge, setAge]=useState("")


    let [inpNameEdit, setNameEdit]=useState("")
    let [inpImgEdit, setImgEdit]=useState("")
    let [inpAgeEdit, setAgeEdit]=useState("")
    let [idx, setIdx]=useState("")


    let [idxInfo, setIdxInfo]=useState("")

  async function DeleteUser(id) {
    try {
  await axios.delete(`${Api}/${id}`)
  GetUser()
    } catch (error) {
      console.error(error);
    }
}

  async function CheckedStatus(idx) {
    let peshinastatus=data.find((e)=>e.id==idx)
    let izminonoestatus={
      ...peshinastatus,
      status:!peshinastatus.status
    }
  try {
    let {data}=await axios.put(`${Api}/${idx}`,izminonoestatus)
    setData(data)
  } catch (error) {
    console.error(error);
  }
}




  async function GetUser() {
    try {
       let {data}=await axios.get(Api)
       setData(data)
    } catch (error) {
      console.error(error);
    }
  }

  async function AddUser(newUser) {
    try {
      await axios.post(Api, newUser)
      GetUser()
    } catch (error) {
      console.error();
    }
  }

  async function EditUser(editedUser,idx) {
    let peshinaUser=data.find((e)=>e.id==idx)
    let izmenoniUser={
      ...peshinaUser,
      ...editedUser
    }
    try {
      await axios.put(`${Api}/${idx}`,izmenoniUser)
      GetUser()
    } catch (error) {
      console.error(error);
    }
  }

  async function selectStatus(textstatus) {
    try {
      if(textstatus==""){
        GetUser()
      }
      else{
      let {data}=await axios.get(`${Api}?status=${textstatus}`)
      setData(data)
      }
    } catch (error) {
      console.error(error);
    }
  }
  async function searchName(textname) {
    try {
      if(textname==""){
        GetUser()
      }
      else{
      let {data}=await axios.get(`${Api}?name=${textname}`)
      setData(data)
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    GetUser()
  },[]) 
  
  
const columns = [
  {
    title: 'Img',
    dataIndex: 'img',
    key: 'img',
      render: (img) => (
    <img src={img}/>
  ),

  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
    <p className={`${status?"text-[green]":"text-[red]"}`}>{status ? "Active" : "Inactive"}</p>
),
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',render: (_, record) => (
  <Space size="middle">
    <Button 
      style={{color:"red"}} onClick={() => DeleteUser(record.id)}>
      <DeleteOutlined />
    </Button>

    <Button 
      style={{color:"blue"}} onClick={() => handleEdit(record)}>
      <EditOutlined />
    </Button>

    <Button onClick={() => showModalInfo(record)}>
      <InfoCircleOutlined />
      </Button>

    <Checkbox checked={record.status} onChange={() => CheckedStatus(record.id)} />
  </Space>
),
  },
];
  const showModal = () => {
    setOpen(true);
  };
  const showModalInfo = (user) => {
  setIdxInfo(user)
  setOpenInfo(true)
};
  let handleOk = () => {
    setTimeout(() => {
      let newUser={
        img: inpImg,
        name: inpName,
        age: inpAge
      }
      AddUser(newUser)
    }, 1000);
  };

  let handleOkInfo=()=>{
      setOpenInfo(false)
  }
  const handleCancel = () => {
    setOpen(false);
  };

  const handleCancelInfo =()=>{
    setOpenInfo(false)
  }
  


  let handleEdited=()=>{
    setTimeout(() => {
      setOpenEdit(false);
      let editedUser={
        img: inpImgEdit,
        name: inpNameEdit,
        age: inpAgeEdit,
        id:idx
      }
      setOpenEdit(true);

      EditUser(editedUser,idx)
    }, 1000);
  }

  let handleEdit = (user) => {
  setOpenEdit(true)

  setNameEdit(user.name)
  setImgEdit(user.img)
  setAgeEdit(user.age)
  setIdx(user.id)
}
  
  const handleCancelEdit = () => {
    setOpenEdit(false);
  };

  
      const { Search } = Input;
  return(
    <>
    <div className='ml-[150px] mt-[50px] gap-4 flex'>
    <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>

      <Search
        placeholder="Search..."
        onChange={(e) => searchName(e.target.value)}
        style={{ width: 200 }}
      />
      <Select
      onChange={(e)=>selectStatus(e)}
      style={{width:"200px"}}
      showSearch={{
        filterOption: (input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
      }}
      placeholder="Select a person"
      options={[
        { value: '', label: 'All' },
        { value: 'true', label: 'Active' },
        { value: 'false', label: 'Inactive' },
      ]}
    />
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form className='flex flex-col gap-3'>
          <input value={inpImg} onChange={(e)=>setImg(e.target.value)} className='border rounded-[10px] p-[10px]' type="url" placeholder='Img...' />
          <input value={inpName} onChange={(e)=>setName(e.target.value)} className='border rounded-[10px] p-[10px]' type="text" placeholder='Name...' />
          <input value={inpAge} onChange={(e)=>setAge(e.target.value)} className='border rounded-[10px] p-[10px]' type="text" placeholder='Age...' />
        </form>
      </Modal>
      <Modal
        title="Title"
        open={openEdit}
        onOk={handleEdited}
        onCancel={handleCancelEdit}
      >
        <form className='flex flex-col gap-3'>
          <input value={inpImgEdit} onChange={(e)=>setImgEdit(e.target.value)} className='border rounded-[10px] p-[10px]' type="url" placeholder='Img...' />
          <input value={inpNameEdit} onChange={(e)=>setNameEdit(e.target.value)} className='border rounded-[10px] p-[10px]' type="text" placeholder='Name...' />
          <input value={inpAgeEdit} onChange={(e)=>setAgeEdit(e.target.value)} className='border rounded-[10px] p-[10px]' type="text" placeholder='Age...' />
        </form>
      </Modal>


      
      <Modal
  title="Info"
  open={openInfo}
  onOk={handleOkInfo}
  onCancel={handleCancelInfo}
>
  {idxInfo && (
    <div className="flex flex-col  items-center">
      <img src={idxInfo.img} width={300} />
      <p>{idxInfo.name}</p>
      <p>{idxInfo.age}</p>
        <span style={{color: idxInfo.status ? "green" : "red"}}>
          {idxInfo.status ? "Active" : "Inactive"}
        </span>
    </div>
  )}
</Modal>
      </div>


  <Table style={{width:"80%", margin:"auto",marginTop:"40px", border:"1px solid gray", borderRadius:"5px"}} columns={columns} dataSource={data} />
  </>)
}
export default App;