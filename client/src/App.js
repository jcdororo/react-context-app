import './App.css';
import SummaryPage from './pages/Summary';
import OrderPage from './pages/OrderPage';
import CompleatePage from './pages/CompletePage'
import { useState } from 'react';

function App() {

  const [step, setStep] = useState(0)


  return (
    <div style={{ firstng: "4rem" }}>
      {step === 0 && <OrderPage setStep={setStep}/>}      
      {step === 1 && <SummaryPage setStep={setStep}/>}
      {step === 2 && <CompleatePage setStep={setStep}/>}
    </div>
  );
}

export default App;
