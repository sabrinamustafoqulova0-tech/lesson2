import React, { Component } from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate, useParams, useLocation } from 'react-router';
import axios from 'axios';

export function withRouter(Component) {
  return (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    return <Component {...props} params={params} navigate={navigate} location={location} />;
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "",
      description: "",
      idx: null
    };
    this.Api = 'http://37.27.29.18:8001/api/to-dos';
    this.ApiImages = 'http://37.27.29.18:8001/images';
    this.ApiChecked = 'http://37.27.29.18:8001/completed';
  }

  GetUser = async () => {
    try {
      const response = await axios.get(this.Api);
      this.setState({ data: response.data.data });
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };

  DeleteUser = async (id) => {
    try {
      await axios.delete(`${this.Api}?id=${id}`);
      this.GetUser();
    } catch (error) {
      console.error('Ошибка удаления:', error);
    }
  };

  CheckedStatus = async (id) => {
    try {
      await axios.put(`${this.ApiChecked}?id=${id}`);
      this.GetUser();
    } catch (error) {
      console.error('Ошибка статуса:', error);
    }
  };

  componentDidMount() {
    this.GetUser();
  }

  handelAdd = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", event.target["name"].value);
    formData.append("description", event.target["description"].value);
    formData.append("images", event.target["images"].files[0]);

    try {
      await axios.post(this.Api, formData);
      this.GetUser();
    } catch (error) {
      console.error('Ошибка добавления:', error);
    }
  };

  handelEdit = async (event) => {
    event.preventDefault();
    const editedobj = {
      id: this.state.idx,
      name: this.state.name,
      description: this.state.description
    };
    try {
      await axios.put(this.Api, editedobj);
      this.GetUser();
      this.setState({ name: "", description: "", idx: null });
    } catch (error) {
      console.error('Ошибка редактирования:', error);
    }
  };

  render() {
    const { data } = this.state;

    return (
      <div className='p-5'>
        <div className='flex gap-5 mb-10'>
          <form className='border p-5 gap-2 rounded-2xl flex flex-col w-[300px]' onSubmit={this.handelAdd}>
            <input className='border p-1' type="text" name="name" placeholder='Name...' required />
            <input className='border p-1' type="text" name="description" placeholder='Description...' required />
            <input className='border' type="file" name="images" />
            <button className='bg-green-500 text-white p-2 rounded' type='submit'>Add</button>
          </form>

          <form className='border p-5 gap-2 rounded-2xl flex flex-col w-[300px]' onSubmit={this.handelEdit}>
            <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} className='border p-1' type="text" placeholder='Edit Name...' />
            <input value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} className='border p-1' type="text" placeholder='Edit Description...' />
            <button className='bg-blue-500 text-white p-2 rounded' type='submit'>Save Changes</button>
          </form>
        </div>

        <div className='flex justify-start flex-wrap gap-10'>
          {data.map((e) => (
            <div key={e.id} className='p-[20px] border rounded-2xl w-[300px] flex flex-col gap-2'>
              <div>
                {e.images?.slice(0,1).map((img, i) => (
                  <img key={i} className='w-full h-32 object-cover rounded' src={`${this.ApiImages}/${img.imageName}`} alt="" />
                ))}
              </div>
              <h1 className='font-bold text-xl'>{e.name}</h1>
              <p>{e.description}</p>
              
              <div className='flex items-center gap-2'>
                <input onChange={() => this.CheckedStatus(e.id)} checked={e.isCompleted} type="checkbox" />
                <span className={e.isCompleted ? "text-green-700" : "text-red-600"}>
                  {e.isCompleted ? "Completed" : "Pending"}
                </span>
              </div>

              <Button onClick={() => this.DeleteUser(e.id)} color="error" variant='contained'>DELETE</Button>
              <Button onClick={() => this.setState({ name: e.name, description: e.description, idx: e.id })} color="primary" variant='contained'>EDIT</Button>
              
              <Link to={`/info/${e.id}`} style={{ textDecoration: 'none' }}>
                <Button fullWidth sx={{ backgroundColor: "black" }} variant='contained'>INFO</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(App);