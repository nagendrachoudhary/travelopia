import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Form from './Pages/Form';
import Dashboard from './Pages/Dashboard';
import Form_top from './components/Formtop';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { GetData } from './Api/Api';

function App() {
  document.title="TRAVELOPIA"
  window.onblur = function() { 
    document.title="Please Come Back"
   }
   window.onfocus = function() { 
    document.title="TRAVELOPIA"
   }
  useEffect(() => {
    GetData()
  }, [])
  
  return (
    
    <div className="App">
      <Form_top/>
      <Routes>
        <Route path='/' element={<Form/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
