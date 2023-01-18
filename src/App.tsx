import FormCard from './components/FormCard';
import { NavBar } from './components/NavBar';
import { nStep } from './config/nStep';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './components/MainPage';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/mainPage" component={MainPage}/>
        </Routes>
          <NavBar></NavBar>
          <FormCard nStep={nStep.steps} startStep={nStep.startStep} />
      </BrowserRouter>
    </div>
  )
}
