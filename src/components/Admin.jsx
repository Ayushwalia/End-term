import { createTheme, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider } from '@material-ui/core'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Context'
const useStyle=makeStyles((theme)=>({
  cont:{
    background:'url(https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg)',
    display:'flex',
    backdropFilter:'blur(20px)',
    // justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    width:'100%',
    height:'90vh',
    // border:'2px solid red'
    // paddingTop:'30px'
  },
  table:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    width:'fit-content',
    background: 'rgba(255,255,255)',
    [theme.breakpoints.down("xs")]:{
      width:'100%',
    }
  },
  cell:{
    paddingLeft:'50px',
    paddingRight:'50px',
    color:"white",
    fontWeight:"800",
    [theme.breakpoints.down('sm')]:{
      paddingLeft:'30px',
      paddingRight:'30px',
    },
    [theme.breakpoints.down('xs')]:{
      paddingLeft:'0px',
      paddingRight:'0px',
    }
  },
  cell1:{
    paddingLeft:'45px',
    paddingRight:'45px',
    color:"black",
    // fontWeight:"800",
    [theme.breakpoints.down('sm')]:{
      paddingLeft:'30px',
      paddingRight:'30px',
    },
    [theme.breakpoints.down('xs')]:{
      paddingLeft:'0px',
      paddingRight:'0px',
    }
  },
  btn2:{
    marginTop:'50px',
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
  xmark:{
    color:'black',
    fontSize:'20px',
    cursor:'pointer',
    '&:hover':{
      color:'red'
    }
  }
}))
const Admin = () => {
  const darkTheme=createTheme({
    palette:{
        primary:{
            main:"#fff"
        },
        type:'dark'
    },
})
  const classes=useStyle();
  const {regUsers,setRegUsers}=GlobalContext();
  const [search,setSearch]=useState('');
  const history=useNavigate();
  const handleSearch=()=>{
    return regUsers?.filter((user)=>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.message.toLowerCase().includes(search.toLowerCase())
    )
  }
  const delUser=(user)=>{
    if(window.confirm("Are you sure you want to delete"))
    {
      const data=regUsers.filter((curr)=>
      curr.name!==user.name || curr.email!==user.email || curr.message!=user.message
      )
      setRegUsers(data);
    }
  }
  return (
    <div className={classes.cont}>
      <h1 style={{color:'white',fontSize:'40px',marginTop:'70px',marginBottom:'50px'}}>Queries sent by Users</h1>
      {!regUsers || regUsers.length===0?<h1 style={{color:'white',fontSize:'40px'}} className='stroke'>No User Sent any Query</h1>:
      <div style={{
        width:'fit-content',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
      }}>
        <ThemeProvider theme={darkTheme}>
        <TextField
        className={classes.search}
            label="Search Any User...."
            variant='outlined'
            style={{
              width:'100%',
              marginTop:'10px',
              marginBottom:'30px',
              borderRadius:'20px'
            }}
            onChange={(e)=>{setSearch(e.target.value)}}
            />
        </ThemeProvider>
      {handleSearch().length>0?
      <TableContainer className={classes.table}>
        <Table>
        <TableHead style={{
          backgroundColor:'#166bd3',
        }}>
          <TableRow>
            {['Name','Email','Message',''].map((head)=>{
              return (
                <TableCell className={classes.cell} key={head}>
                  {head}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {handleSearch()?.map((user)=>{
            return (
              <TableRow key={user.name}>
                <TableCell className={classes.cell1}>
                  {user.name}
                </TableCell>
                <TableCell className={classes.cell1}>
                  {user.email}
                </TableCell>
                <TableCell className={classes.cell1}>
                  {user.message}
                </TableCell>
                <TableCell>
                  <span>
                  <i className={`fa-solid fa-xmark ${classes.xmark}`}
                onClick={()=>{delUser(user)}}
                ></i>
                  </span>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
        </Table>
      </TableContainer>
      :
      <>
      <h1 style={{color:'white'}}>No Query Found with this input keywords</h1>
      </>}
      </div>
      }
    </div>
  )
}

export default Admin