import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  console.log('name-', name,)
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [info, setInfo] = useState([])

console.log('info-', info)
  // add user function
   const addUser = () => {
      setInfo([...info, name])
      setName('')
      setEmail('')
      setPhone('')
   }

  return (
    <>
    <form >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit" onClick={addUser}>Add User</button>
    
    </form>

 {/* show user */}

   
    <div className="container">
    {info.map((curElem) => {
      return (
        <div className='card'>
            <h3>{curElem.name}</h3>
            <p>{curElem.email}</p>
            <p>{curElem.phone}</p>
            <div className="edit-btn">
                <a href="">Edit</a>
                <a href="">Delete</a>
            </div>
        </div>
      )
    })}
      
    </div>

</>
  
  );
};

export default Form;
