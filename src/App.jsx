import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import FilmDetail from './components/FilmDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie/:movieId" element={<FilmDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
