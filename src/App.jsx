
import { useState } from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid'
import FeedbackList from './components/FeedbackList';
import FeedbackState from './components/FeedbackState';
import FeedbackData from "./data/FeedbackData"
import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm';
import {BrowserRouter  ,Route, Routes,} from 'react-router-dom'
import About from './pages/About';
import AboutIcon from './components/AboutIcon';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  const [feedback ,setFeedback] =useState(FeedbackData)

  const addFeedback =(newFeedback)=>{
    newFeedback.id=uuidv4()
    setFeedback([newFeedback, ...feedback])

  }

  const deleteFeedback =(id)=>{
    if(window.confirm('Are you sure you want delete')){
      setFeedback(feedback.filter((item)=>item.id !==id))
    }
  }
  return (
    <FeedbackProvider>
    <BrowserRouter>
    <div className="App">
    <Header text="Feedback UI" />
    <Routes>
      <Route 
      exact  
      path='/' 
      element={
        <>
      <FeedbackForm handleAdd={addFeedback}/>
      <FeedbackState />
      <FeedbackList handleDelete={deleteFeedback}/>
      </>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
      <AboutIcon/>
    </BrowserRouter>
        </FeedbackProvider>
  );
}

export default App;
