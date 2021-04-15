import React, {useContext} from 'react';
import {LoginContext} from '../Helper/Context'

const Home = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext)
  
  return (
    
    <div    
    style={{
      color: 'red',
      borderWidth: 2,
      borderColor: 'black',
      borderStyle: 'solid',
      margin:'25px',
      padding: '50px',
         
      }}
    >
       <h3>This is a login page </h3>
      <button
           style={{
            fontSize: '20px',
            color: 'white',
            backgroundColor: 'red',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
        onClick={() => {setLoggedIn(!loggedIn)}}
      >Click to login</button>
      {loggedIn ? <h2>You are logged in</h2> : <h2>You are NOT logged in</h2>}
    </div>
  )
}

export default Home
