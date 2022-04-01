import React, {useState ,useEffect} from "react";
import axios from "axios";
import {useNavigate,useParams} from "react-router";
const {id}=useParams;
const EditUser=()=>{
    let history=useNavigate();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:""
    });
const {name,username,email,phone}=user; 
const onInputChange=e=>{
console.log(e.target.value);
setUser({...user,[e.target.name]:e.target.value})
}
useEffect(()=>{
    loadUser();
    },[]);
    const onSubmit=async e=>{
    e.preventDefault();
    await axios.put(`http://localhost:3004/users/${id}`,user);
    history.push("/")
    }
const loadUser=async()=>{
    const result=await axios.get(`http://localhost:3004/users/${id}`)
    //console.log(result);
    setUser(result.data);
}
    return(
        <div className='container'>
            <div className="w-75 mx-auto shadow p-5">
<h2 className="text-center mb-4">Edit A User</h2>
          <form class  ="row g-3" onSubmit={e=>onSubmit(e)}>
           <div className="form-group">
    <input placeholder="Enter the  Name"  className="form-control form-control-lg"  name="name"   value={name} onChange={e=>onInputChange(e)} />
</div>

<div className="form-group">
<input type="text" className="form-control form-control-lg"  placeholder="Enter the Username" name="username" value={username} onChange={e=>onInputChange(e)} />
</div>

<div className="form-group">
<input type="text" className="form-control form-control-lg"   placeholder="email" name="email"  value={email} onChange={e=>onInputChange(e)} />
</div>

<div className="form-group">
<input type="text" className="form-control form-control-lg"  class="form-control"  placeholder="Enter the phone Number "name="phone" value={phone} onChange={e=>onInputChange(e)} />
</div>

<button className="btn btn-success btn-block">Edit A User</button>
      </form>
   </div>
  </div>
    )
}
export default EditUser;