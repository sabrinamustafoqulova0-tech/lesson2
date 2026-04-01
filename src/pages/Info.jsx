import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from '../App'; 
import { Button } from '@mui/material';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: null,
      loading: true,
      error: null
    };
    this.Api = 'http://37.27.29.18:8001/api/to-dos';
    this.ApiImages = 'http://37.27.29.18:8001/images';
    this.ApiDelete = 'http://37.27.29.18:8001/api/to-dos/images';
  }

  componentDidMount() {
    this.getTodo();
  }

  getTodo = async () => {
    const { id } = this.props.params;
    console.log("Запрашиваемый ID из URL:", id);

    try {
      const response = await axios.get(`${this.Api}?id=${id}`);
      console.log("Ответ от сервера:", response.data);

      
      let incomingData = response.data.data;
      
      
      let singleTodo = null;
      if (Array.isArray(incomingData)) {
          singleTodo = incomingData.find(item => String(item.id) === String(id));
      } else {
          singleTodo = incomingData;
      }

      this.setState({ todo: singleTodo, loading: false });
    } catch (error) {
      console.error("Ошибка при загрузке:", error);
      this.setState({ error: error.message, loading: false });
    }
  };
  
  handelAdd = async (event) => {
  event.preventDefault();
  const { id } = this.props.params;
  const file = event.target["images"].files[0];

  if (!file) {
    alert("Пожалуйста, выберите файл");
    return;
  }

  const formData = new FormData();
  formData.append("images", file);

  try {
    await axios.post(`${this.Api}/${id}/images`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    event.target.reset();
    this.getTodo();
  } catch (error) {
    console.error('Ошибка добавления:', error.response?.data );
  }
};

DeletUser =async(id)=>{
  try {
    await axios.delete(`${this.ApiDelete}/${id}`)
    this.getTodo()
  } catch (error) {
    console.error('Ошибка добавления:', error.response?.data );
  }
}

  render() {
    const { todo, loading, error } = this.state;

    if (loading) return <h1 className="p-10 text-center">Загрузка данных...</h1>;
    if (error) return <h1 className="p-10 text-center text-red-500">Ошибка: {error}</h1>;
    
    if (!todo) return (
      <div className="p-10 text-center">
        <h1>Карточка с таким ID не найдена</h1>
        <Button onClick={() => this.props.navigate('/')}>Вернуться назад</Button>
      </div>
    );

    
    return (
      <>
          <form className='border p-5 gap-2 rounded-2xl flex flex-col w-[300px]' onSubmit={this.handelAdd}>
            <input className='border' type="file" name="images" />
            <button className='bg-green-500 text-white p-2 rounded' type='submit'>Add</button>
          </form>
      <div className="p-10 max-w-2xl mx-auto shadow-xl rounded-3xl border mt-10">

          
          <div className="flex gap-2 ">
            {todo.images && todo.images.map((img, index) => (
              <div>
              <img
                key={index}
                src={`${this.ApiImages}/${img.imageName}`}
                alt="todo"
                className="w-[300px]"
              />
              <Button onClick={()=>this.DeletUser(img.id)} variant='contained'>DELETE</Button>
              </div>
            ))}
          </div>
      </div>
      </>
    );
  }
}

export default withRouter(Info);