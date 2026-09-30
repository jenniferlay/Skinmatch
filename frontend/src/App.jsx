import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import QuizPageName from './pages/quiz/QuizPageName';
import QuizPageSkin from './pages/quiz/QuizPageSkin';
import QuizPageSens from './pages/quiz/QuizPageSens';
import QuizPageConcern from './pages/quiz/QuizPageConcern';
import QuizPageAge from './pages/quiz/QuizPageAge';
import DashboardPage from './pages/Dashboard';
import SpecificProductPage from './pages/specificProductPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element= { <HomePage /> } />
        <Route path='/about' element= {<AboutPage />} />
        <Route path='/contact' element= {<ContactPage/>}/>
        <Route path='/quiz/name' element= {<QuizPageName />}/>
        <Route path='/quiz/skin' element= {<QuizPageSkin />}/>
        <Route path='/quiz/sensitive' element= {<QuizPageSens />}/>
        <Route path='/quiz/concern' element={<QuizPageConcern />} />
        <Route path='/quiz/age' element={<QuizPageAge />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/dashboard/product' element={<SpecificProductPage />}/>

      </Routes>
    </BrowserRouter>
  );
}


export default App;
