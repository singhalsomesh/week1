import React, { useState } from 'react'

function UserForm({onAddObj}) {
 
const [id , setId] = useState(1);  
const [formData, setFormData] = useState({
        itemName: '',
        price: '',
        imageUrl: '',
        description:''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    console.log("after formdata");
    setId(id + 1);
    formData.id = id;
    onAddObj(formData);
    setFormData({
        itemName: '',
        price: '',
        imageUrl: '',
        description:''
      });
};

return (
    <div className="form-container">
         <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="itemName">Item Name:</label>
                <input type="text" id="itemName" value={formData.itemName} name="itemName" onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input type="text" id="price" value={formData.price} name="price" onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label htmlFor="imageUrl">Image Url:</label>
                <input type="text" id="imageUrl" value={formData.imageUrl} name="imageUrl" onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" value={formData.description} name="description" onChange={handleChange} required />
            </div>

            <div className="form-group">
                <button type="submit">Submit</button>
            </div>
        </form> 
    </div>
  )
}

export default UserForm