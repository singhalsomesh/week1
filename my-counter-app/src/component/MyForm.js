import React,{useState} from 'react'

function MyForm({onAddClick}) {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (username.trim() !== '') {
      onAddClick(username);
      setUsername('');
    }
  };
  return (
    <div className='inputBox'>
      <div className='username'>
          <input
            type="text"
            value={username}
            onChange={handleInputChange}
            placeholder="Enter username"
          />
          <button onClick={handleAddButtonClick} className='btn'>Add User</button>
      </div>
      
    </div>
  )
}

export default MyForm