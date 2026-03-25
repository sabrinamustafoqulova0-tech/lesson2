import React from 'react'
import { useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import imgCard from "../images/imgcard.png";
import imgCard2 from "../images/js.png";
import imgCard3 from "../images/react.png";
import imgCard4 from "../images/figma.png";
import imgCard5 from "../images/basic.png";
import imgCard6 from "../images/python.png";
import imgCard7 from "../images/cchar.png";
import imgCard8 from "../images/git.png";
import imgCard9 from "../images/mobile.png";
import imgCard10 from "../images/kids.png";
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Home = () => {
    

  const [value, setValue] = useState('All');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setLimit(6);
  };
  const [limit, setLimit] = useState(6);



  
    let [card,setCard]=useState([
        {
            id:1,
            name:"HTML & CSS",
            bg:"#6a1010",
            img:imgCard,
            about:"Learn the building blocks of the  web",
            time:"1 month",
            stack:"Frontend",
            border:"#f0522d"
        },
        {
            id:2,
            name:"JavaScript",
            bg:"#5c5c24",
            img:imgCard2,
            about:"Master programming fundamentals with JavaScript",
            time:"2 month",
            stack:"Frontend",
            border:"yellow"
        },
        {
            id:3,
            name:"React",
            bg:"#125576",
            img:imgCard3,
            about:"Build interactive Uls with the popular JavaScript library",
            time:"3 month",
            stack:"Frontend",
            border:"#04c7e1"
        },
        {
            id:4,
            name:"Design",
            bg:"#075607",
            img:imgCard4,
            about:"Create beautiful, functional digital experiences",
            time:"1 month",
            stack:"Design",
            border:"green"
        },
        {
            id:5,
            name:"Basics of C++",
            bg:"#124776",
            img:imgCard5,
            about:"Start your programming journey with C++",
            time:"1 month",
            stack:"Backend",
            border:"#088afc"
        },
        {
            id:6,
            name:"Python",
            bg:"#07837e",
            img:imgCard6,
            about:"Learn one of the most versatile programming languages",
            time:"4 month",
            stack:"Backend",
            border:"#00f1e9"
        },
        {
            id:7,
            name:"С #",
            bg:"#511678",
            img:imgCard7,
            about:"Build versatile applications with this powerful language",
            time:"3 month",
            stack:"Backend",
            border:"#a624fc"
        },
        {
            id:8,
            name:"Git",
            bg:"#6a1010",
            img:imgCard8,
            about:"Master version control to collaborate on coding projects",
            time:"1 month",
            stack:"Frontend",
            border:"#f0522d"
        },
        {
            id:9,
            name:"Flutter",
            bg:"#124776",
            img:imgCard9,
            about:"Build cross-platform mobile apps with a single codebase",
            time:"4 month",
            stack:"Mobile",
            border:"#088afc"
        },
        {
            id:10,
            name:"Programming for teenagers",
            bg:"#122d76",
            img:imgCard10,
            about:"Programming fundamentals for young learners",
            time:"10 month",
            stack:"Kids",
            border:"#094bff"
        },
    ])
    
  const filteredCards = value == 'All' 
    ? card
    : card.filter((item) => item.stack == value);
 const visibleCards = filteredCards.slice(0, limit);
      let navigate=useNavigate()
      let handleNavigate=(id)=>{
      navigate(`/card/${id}`)
  }
  const toggleLimit = () => {
  if (limit < filteredCards.length) {
    setLimit(filteredCards.length);
  } else {
    setLimit(6); 
  }
};


  return (
    <div className='bg-[#141b2d]  p-[50px] px-[100px] '>
        <h1 className='text-center text-6xl text-white font-bold'>Academy Courses</h1>
        <p className='w-[800px] text-[18px] mt-[10px] mb-[30px] text-center m-auto text-white font-bold'>Choose your learning path and build skills in Frontend, Backend, Mobile development, or start with our Kids program</p>
      
        <Box sx={{ width: '100%', marginBottom: '40px' }}>
        <TabContext value={value}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <TabList 
              onChange={handleChange} 
              centered
              sx={{
                '& .MuiTabs-indicator': { display: 'none' }, 
                '& .MuiTab-root': { 
                  color: 'white', 
                  textTransform: 'none', 
                  fontSize: '16px',
                  borderRadius: '20px',
                  marginLeft:"20px",
                  backgroundColor: '#1f2937', 
                },
                '& .Mui-selected': { 
                  backgroundColor: 'white',
                  color: 'black' 
                },
              }}
            >
              <Tab label="All" value="All" />
              <Tab label="Frontend" value="Frontend" />
              <Tab label="Backend" value="Backend" />
              <Tab label="Mobile" value="Mobile" />
              <Tab label="Kids" value="Kids" />
              <Tab label="Design" value="Design" />
            </TabList>
          </Box>
        </TabContext>
      </Box>
        <div className='flex flex-wrap gap-8'>
      {
        visibleCards.map((e)=>{
            return(
                <div 
                onClick={()=>handleNavigate(e.id)}
                style={{
                  background: `linear-gradient(135deg, #00000049, ${e.bg})`, borderLeft: `5px solid ${e.border}`}}
                className="w-[410px] p-[20px] rounded-2xl text-white transition duration-300 hover:scale-105">
                    <div className='flex justify-between items-start'>
                    <h1 className='text-4xl font-bold'>{e.name}</h1>
                    <div className='p-[10px] bg-[#aeaeae33] rounded-[50%]'>
                    <img className='w-[60px]' src={e.img} alt="" />
                    </div>
                    </div>
                    <p className='text-[#b5b5b5] text-[18px] mb-[50px] '>{e.about}</p>
                    <div className='flex gap-3 items-center'>
                    <button style={{color:e.border}} className='flex gap-2 px-[10px] py-[5px]  rounded-2xl bg-[#aeaeae33] '>
                    <AccessTimeIcon/>
                    <p>{e.time}</p>
                    </button>
                    <p>{e.stack}</p>
                    </div>
                </div>
            )
        })
      }
      </div>
     <div className="flex justify-center mt-10 w-full">
  {filteredCards.length > 6 && (
    <button 
      onClick={toggleLimit} 
      className="px-6 py-2 border border-gray-500 rounded-full text-white hover:bg-gray-800 transition flex items-center gap-2"
    >
      {limit < filteredCards.length ? (
        <p>
          Show All ({filteredCards.length - limit} more) 
          <span>  ∨</span>
        </p>) : (
        <p>
          Show Less
          <span className="rotate-180">  ^</span>
        </p>
      )}
    </button>
  )}
</div>
    </div>
  )
}

export default Home
