
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from './Components/signupPage';
import PostJob from './PostJob/postjobPage';

function App() {

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUpPage/>}/>
      <Route path='/Post' element={<PostJob/>}/>
      
    </Routes>
    </BrowserRouter>

  );
}

export default App;
