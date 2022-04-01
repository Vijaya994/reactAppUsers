
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './compnents/Pages/About';
import Navbar from './compnents/Layout/Navbar';
import Home from './compnents/Pages/Home';
import Contacts from './compnents/Pages/Contacts';
import AddUser from './compnents/Users/AddUser';
import User from './compnents/Users/User';
import EditUser from './compnents/Users/EditUser';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <Routes>
       <Route exact path='/home' element={<Home/>}>Home</Route>
       <Route exact path='/about' element={<About/>}>About</Route>
       <Route exact path='/contacts' element={<Contacts/>}>Contacts</Route>
       <Route exact path ='/users/add' element={<AddUser/>}>AddUser</Route>
      <Route exact path='/users/edit/:id' element={<EditUser/>}>EditUser</Route>
       <Route exact path ='/users/:id' element={<User/>}>User</Route>
      
     </Routes>
     </BrowserRouter>
     </div>
  );
  }
export default App;
