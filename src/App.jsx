import './App.css';
import FeedbackList from './components/FeedbackList';
import FeedbackState from './components/FeedbackState';
import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm';
import {BrowserRouter  ,Route, Routes,} from 'react-router-dom'
import About from './pages/About';
import AboutIcon from './components/AboutIcon';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {

  return (
    <FeedbackProvider>
    <BrowserRouter>
    <div className="App">
      <Header text="Feedback UI" />
      <Routes>
      <Route  exact  path='/' element={
      <>
      <FeedbackForm />
      <FeedbackState />
      <FeedbackList/>
      </>}
      />
      <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
      <AboutIcon/>
    </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
