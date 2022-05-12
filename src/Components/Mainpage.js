import React, { useEffect, useRef, useState } from 'react'
import {Route,Link,BrowserRouter, Routes,useParams,useLocation,useHistory, useRoutes} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import About from "../Components/About";
import { TextField } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Mainpage = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            {/* <Route path='/Services/:courses' element={<Services/>}/> */}
            <Route path='/Services' element={<Services/>}/>
            <Route path='/Calculator' element={<Calculator/>}/>
            <Route path='/Todos' element={<Todos/>}/>
            <Route path='/Quotes' element={<Quotes/>}/>
        
        </Routes>
    </BrowserRouter>
  )
}

const Home = ()=>{
  const location = useLocation();
//   const [name,setname] = useState("krish");
//   console.log(name);

// const [details,setdetails] = useState({
//     name:"krish",
//     lname :"kharal",
// })
const num = useRef(0);
const [count,setcount] = useState(num.current);

let a  = count + 1;



    return (
        <>
        <h1>{count}</h1>
        {/* {a > 10 || <h1>hello world</h1>}  */}
        <button onClick={()=>setcount(a)}>click</button>
       <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
        </ul>

        </>
    )
}

const Header = ()=>{
  return (
      <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
      <Link color="inherit" style={styled.link} to="/">Home</Link>
      <Link color="inherit" style={styled.link} to="/About">About</Link>
      <Link color="inherit" style={styled.link} to="/Services">Services</Link>
      <Link color="inherit" style={styled.link} to="/Calculator">Calculator</Link>
      <Link color="inherit" style={styled.link} to="/Todos">Todos</Link>
      <Link color="inherit" style={styled.link} to="/Quotes">Quotes</Link>
    
      </Toolbar>
      </AppBar>
    </Box>
      </>
  )
}


const Services = ()=>{
    return (
        <>
        {/* <h1>this is Services page {courses}</h1> */}
        <button>click</button>
        </>
    )
}

const Calculator = ()=>{
  const [principle,setprinciple]=useState("");
  const [Time,setTime]=useState("");
  const [Rate,setRate]=useState("");  
  const [result,setresult] = useState();
  return (
    <>
    <h1 className='text-center text-lg text-3xl capitalize mt-5'>Simple interest Calculator</h1>
    <div className='h-full w-full flex justify-center flex-col items-center'>
    <div className="w-80 flex justify-center items-center flex-col p-10">
    <TextField onChange={(e)=>setprinciple(e.target.value)} value={principle} title='Enter principle' label="Principle"/><br /><br />
    <TextField onChange={(e)=>setTime(e.target.value)} value={Time} title='Enter Time' label="Time"/><br /><br />
    <TextField onChange={(e)=>setRate(e.target.value)} value={Rate} title='Enter Rate' label="Rate"/><br /><br />
    <Button variant="outlined" onClick={()=>{
      let calculate = (principle * Time * Rate)/100;
       setresult(calculate);
    }}>Outlined</Button>
    {result?<h1 className='text-2xl mt-3'>your Interest is {result}</h1>:""}
    </div>
    </div>
    </>
  );
}


const Todos = ()=>{
  const [input,setinput] = useState("");
  const [Items,setItems] = useState([]);

  const AddItems = ()=>{
    let additems = [...Items,input];
    setItems(additems);
  }

  return (
    <><br /><br />
    <TextField title='Add Items' value={input} onChange={(e)=>setinput(e.target.value)} label="Add Items"/>
   <br /><br />
   <Button variant="contained" onClick={()=>AddItems()} component="span">Add Items</Button>
    <Lists items={Items}/>
    </>
   )
}

const Lists = (props)=>{
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return(
    <>
 <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
     {props.items.map((items)=>{
       return <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
       <List component="nav" aria-label="main mailbox folders">
         <ListItemButton
           selected={selectedIndex === 0}
           onClick={(event) => handleListItemClick(event, 0)}
         >
           <ListItemIcon>
             <InboxIcon />
           </ListItemIcon>
           <ListItemText primary={`${items}`} />
         </ListItemButton>
       </List>
       <Divider />
     </Box>
     })}
    </Box>
    </>
  )
}

const Quotes = ()=>{
  const [data,setdata] = useState([]);
  const [isloading,setisloading] = useState(true);
  let url = "https://jsonguide.technologychannel.org/quotes.json";


  const Getdata = async()=>{
    setisloading(true);
    let response = await fetch(url);
    let data = await response.json();
    setdata(data);
    setisloading(false);
  }
  
  useEffect(()=>{
    Getdata();
    },[])

  if(isloading){
    return <h1 className='text-3xl text-center'>...Loading</h1>
  }  

  return (
    <div className="w-full">
    <div className="w-full h-full grid grid-cols-4 gap-4">
    {data.map(items=>{
      return <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="./dailyquotes1.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {items.from}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {items.text}
          </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </>
    })}
</div>
</div>
  )
}

const styled = {
  link:{
    textDecoration:"none",
    margin:"10px",
    fontSize:"20px",
    color:"white",
  }
}

export default Mainpage