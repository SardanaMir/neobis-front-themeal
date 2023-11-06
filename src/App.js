import './App.css';
import Recipe from './components/Recipe/Recipe';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage/>}/>
          <Route path="/:id" element={<Recipe/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
