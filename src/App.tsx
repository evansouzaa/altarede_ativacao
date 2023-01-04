import { useState } from 'react'
import './App.css'
import FormCard from './components/FormCard';
import { FormClient, FormDocNetwork, FormInventoryNetwork } from './components/Forms/';

function App() {

  const [formStep, setFormStep] = useState(0);
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div className="App">
      <h1>preencha os dados do formulario</h1>
      <FormCard currentStep={formStep} nextFormStep={nextFormStep} prevFormStep={prevFormStep}>
        <FormClient prevFormStep={prevFormStep} currentStep={formStep} nextFormStep={nextFormStep}></FormClient>
        <FormDocNetwork prevFormStep={prevFormStep} currentStep={formStep} nextFormStep={nextFormStep}></FormDocNetwork>
        <FormInventoryNetwork prevFormStep={prevFormStep} currentStep={formStep} nextFormStep={nextFormStep}></FormInventoryNetwork>
      </FormCard>
    </div>
  )
}

export default App
