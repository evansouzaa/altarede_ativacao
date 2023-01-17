import FormCard from './components/FormCard';
import { FormLocation } from './components/Forms';
import { nStep } from './config/nStep';

export default function App() {
  return (
    <div className="App">
      <FormCard nStep={nStep.steps} startStep={nStep.startStep} />
    </div>
  )
}
