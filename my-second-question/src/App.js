import React, { useState } from 'react'
import UserForm from './component/UserForm'
import MyList from './component/MyList'

function App() {
  const [userFormDataList , setUserFormList] = useState([]);
  console.log(userFormDataList);
  const handleSubmitButton = (formDataObj) => {
    setUserFormList([...userFormDataList , formDataObj])
  }

  const handleDelete = (id) => {
    const updatedUserFormList = userFormDataList.filter((card) => {
      console.log(card , id);
      return card.id !== id;
    });
    setUserFormList(updatedUserFormList);
  };
  return (
    <div className='App'>
      <div className='week1'>
        <div className='myForm'>
            <UserForm onAddObj={handleSubmitButton}/>
        </div>
        <div className='myList'>
            <MyList formData={userFormDataList} onDelete={handleDelete}/>
        </div>  
      </div>
    </div>
  )
}

export default App