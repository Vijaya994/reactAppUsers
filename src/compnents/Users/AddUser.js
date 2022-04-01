import React, {useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router";
const AddUser=()=>{
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
const onSubmit=async e=>{
e.preventDefault();
await axios.post("http://localhost:3004/users",user);
history.push("/")
}
    return(
        <div className='container'>
          <form class  ="row g-3" onSubmit={e=>onSubmit(e)}>
            <table border="2">
<div class="col-md-6">
<label for="name" class="form-label">Name</label>
<input type="name" class="form-control" name="name"  placeholder="Enter your Name" value={name} onChange={e=>onInputChange(e)} />
</div>
<div class="col-md-6">
  <label for="username" class="form-label">User Name</label>
  <input type="username" class="form-control" name="username" placeholder="Give the User Name"  value={username} onChange={e=>onInputChange(e)} />
</div>
<div class="col-md-6">
<label for="email" class="form-label">Email</label>
<input type="email" class="form-control" name="email" placeholder="Email Address"  value={email} onChange={e=>onInputChange(e)} />
</div>
<div class="col-md-12">
<label for="phone" class="form-label">Phone</label>
<input type="phone" class="form-control" name="phone" placeholder="Phone Number"  value={phone} onChange={e=>onInputChange(e)} />
</div>
</table> 
<div class="col= 12">
<button className='btn btn-success' >Add User</button>
    </div> 
    
  </form>
  </div>
    )
}
export default AddUser;