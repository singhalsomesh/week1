import React, { useState } from 'react'
import MyForm from './component/MyForm';
import MyList from './component/MyList';

function App() {
  const [usernameList , setUsernameList] = useState([]);

  const handleUserNameList = (username) => {
      setUsernameList([...usernameList,username])
  }
  return (
    <div className='App'>
      <h1>Week1 First Question</h1>
      <div className='week1'>
        <div className='myForm'>
            <MyForm onAddClick={handleUserNameList}/>
        </div>
        <div className='myList'>
            <MyList results={usernameList}/>
        </div>  
      </div>
    </div>
  )
}

export default App;