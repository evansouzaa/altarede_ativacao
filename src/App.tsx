import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormCard from './components/FormCard';
import { NavBar } from './components/NavBar';
import { nStep } from './config/nStep';
import { MainPage } from './pages/MainPage';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ativacao" element={<FormCard nStep={nStep.steps} startStep={nStep.startStep} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
