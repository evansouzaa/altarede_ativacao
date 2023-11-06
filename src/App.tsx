import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FormCard as FormActivation } from './components/ActivationForm/FormCard';
import { FormCard as ChangeOntForm } from './components/ChangeOntForm/FormCard';
import { NavBar } from './components/NavBar';
import { formStepsActivation, formStepsChangeOnt } from './config/steps';
import { MainPage } from './pages/MainPage';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ativacao" element={<FormActivation nStep={formStepsActivation.steps} startStep={formStepsActivation.startStep} />} />
          <Route path="/troca_ont" element={<ChangeOntForm nStep={formStepsChangeOnt.steps} startStep={formStepsChangeOnt.startStep} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
