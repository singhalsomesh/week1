import React from 'react'

function MyList({formData,onDelete}) {
  console.log(formData)
  const handleDelete = (id) => {
     onDelete(id);
  };
  return (
    <div className='container'>
      {formData && formData.map((data, index) => (
        <div className='item'>
          <div className='image'>
            <img src={data.imageUrl} alt='not declare'/>
            <i className="fa-solid fa-xmark" onClick={() => handleDelete(formData[index].id)}></i>
          </div>
          <div className='product'>
              <h2>Rs {data.price}</h2>
              <h3>{data.itemName}</h3>
              <p>{data.description}</p>
          </div>
        </div>
      ))}
      

      {/* <div className='item'>
         <div className='image'>
          <img src='https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/u/d/reno-11-5g-cph2599-oppo-original-imagwxdsh2zjfpdt.jpeg?q=70&crop=false' alt='not declare'/>
        </div>
        <div className='product'>
            <h2>Rs 34999</h2>
            <h3>Oppo Reno 11</h3>
            <p>This is a long sentence that will break into three lines of approximately equal length</p>
        </div> 
      </div> */}
    </div>
  )
}

export default MyList