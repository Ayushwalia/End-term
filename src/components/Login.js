import { createTheme, makeStyles, TextField, ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Context'
const useStyle=makeStyles((theme)=>({
  cont:{
    background:'url(https://img.freepik.com/premium-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg?w=2000)',
    // background:'url(https://www.wallpaperbetter.com/wallpaper/282/86/479/train-2K-wallpaper-middle-size.jpg)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    width:'100%',
    height:'99.9vh',
  },
  form:{
     width:'500px',
     height:'500px',
     borderRadius:'10%',
     background: 'rgba(255,255,255)',
     WebkitBackdropFilter: 'blur(10px)',
     backdropFilter: 'blur(10px)',
     display:'flex',
     justifyContent:'center',
    //  gap:'20px',
     alignItems:'center',
     flexDirection:'column',
     [theme.breakpoints.down('xs')]:{
      width:'100%',
     },
     boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
  },
  btn:{
    marginTop:'10px',
    width:'150px',
    height:'50px',
    borderRadius:'25px',
    outline:'none',
    backgroundColor:'#166bd3',
    color:'white',
    fontSize:'20px',
    cursor:'pointer',
    fontWeight:'bold',
    border:'5px solid #166bd3',
    '&:hover':{
      backgroundColor:'transparent',
      // color:'#166bd3',
      fontSize:'20px',
      color:'#166bd3'
    }
  },
  title:{
    color:'white'
  },
  normal:{
    // border:'2px solid red',
    width:'100%',
    height:'50px',
    borderTopLeftRadius:'50px',
    borderTopRightRadius:'50px',
    display:'flex',
    alignItems:'center',
    color:'white',
    fontSize:'20px',
  },
  success:{
    // border:'2px solid red',
    width:'100%',
    height:'50px',
    borderTopLeftRadius:'50px',
    borderTopRightRadius:'50px',
    display:'flex',
    alignItems:'center',
    color:'white',
    fontSize:'20px',
    backgroundColor:'rgb(11, 218, 81)',
  },
  err:{
    // border:'2px solid red',
    width:'100%',
    height:'50px',
    borderTopLeftRadius:'50px',
    borderTopRightRadius:'50px',
    display:'flex',
    alignItems:'center',
    color:'white',
    fontSize:'20px',
    backgroundColor:'red',
  },
  btn2:{
    marginTop:'10px',
    // width:'500px',
    paddingLeft:'30px',
    paddingRight:'30px',
    height:'50px',
    borderRadius:'25px',
    outline:'none',
    backgroundColor:'#166bd3',
    color:'white',
    fontSize:'20px',
    cursor:'pointer',
    fontWeight:'bold',
    border:'5px solid #166bd3',
  },
  radio:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'rgb(22, 107, 211,0.2)',
    padding:'5px',
    paddingLeft:'10px',
    paddingRight:'10px',
    borderRadius:'20px',
    flexDirection:'row',
    gap:'5px',
    // color:'#166bd3',
    color:'white',
    fontWeight:'bold',
  },
  radio_div:{
    display:'flex',
    alignItems:'center',
    flexDirection:'row',
  },
  radio_selected:{
    display:'flex',
    gap:'5px',
    // justifyContent:'center',
    // alignItems:'center',
    flexDirection:'row',
    backgroundColor:'rgb(22, 107, 211,0.5)',
    padding:'5px',
    paddingLeft:'10px',
    paddingRight:'10px',
    borderRadius:'20px',
    // color:'#166bd3',
    color:'white',
    fontWeight:'bold',
  },
}))
const Login = () => {
  const darkTheme=createTheme({
    palette:{
        primary:{
            main:"#fff"
        },
        type:'dark'
    },
})
const {addUser}=GlobalContext();
const history=useNavigate();
const handleClick=()=>{
    const data={username,password};
    addUser(data);
    history('/');
  }
  const classes=useStyle();
  const [username,setUsername]=useState('');
  const [password,setpassword]=useState('');
  return (
    <div className={classes.cont}>
      <div className={classes.form}>
        <h1 style={{color:'black',fontSize:'50px'}}>LOGIN</h1>
      <div style={{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        // flexGrow:'1',
        gap:'20px',
      }}>
      <TextField
      value={username}
        label="UserName"
        variant="outlined"
        style={{
          width:"75%",
          marginTop:20,
        }}
        onChange={(e)=>{
          setUsername(e.target.value);
        }}
      />
      <TextField
      value={password}
        label="Password"
        variant="outlined"
        style={{
          width:"75%",
          marginTop:20,
        }}
        onChange={(e)=>{
          setpassword(e.target.value);
        }}
      />
      <button className={classes.btn}
      onClick={()=>{handleClick()}}
      >
        Login
      </button>
      </div>
      </div>
    </div>
  )
}

export default Login