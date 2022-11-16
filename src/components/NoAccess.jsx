import React from 'react'

const NoAccess = () => {
  return (
    <div style={{
      height:'100vh',
      background:'black',
      backdropFilter:'blur(20px)',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
    }}>
      <div style={{
        position:'relative',
        textAlign:'center',
        top:'-80px'
      }}>
      <h1 style={{
        color:'white',
        fontSize:'50px',
      }}>Sorry !!</h1>
      <h2 style={{
        color:'white'
      }}>You are not allowed to see content of this page</h2>
      </div>
    </div>
  )
}

export default NoAccess