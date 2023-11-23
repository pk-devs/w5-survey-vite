import "./App.css"
import { useState } from "react"
import { IntroQuestions } from "./components/IntroQuestions"
import { ServicesQuestion } from "./components/ServicesQuestion"
import { BudgetQuestion } from "./components/BudgetQuestion"
import { Summary } from "./components/Summary"


export const App = () => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [company, setCompany] = useState("")
  const [agency, setAgency] = useState(true)
  const [services, setServices] = useState([])
  const [budget, setBudget] = useState(50000)

  const [currentStep, setCurrentStep] = useState(1)
  const handleNextStep = () => {
    setCurrentStep(currentStep +1)
  }

  const handlePrevStep = () => {
    if(currentStep > 1) {
      setCurrentStep(currentStep -1)
    }
  }


  const resetForm = () => {
    setCurrentStep(1)
    setName("")
    setLastName("")
    setCompany("")
    setAgency(true)
    setServices([])
    setBudget(50000)
  }

  return (
  
  <div className="app">
    
    {currentStep === 1 && < IntroQuestions
    name={name}
    setName={setName}
    lastName={lastName}
    setLastName={setLastName}
    company={company} 
    setCompany={setCompany}
    nextStep={handleNextStep}
    />}

    {currentStep === 2 && <ServicesQuestion
    agency={agency}
    setAgency={setAgency}
    services={services}
    setServices={setServices}
    nextStep={handleNextStep}
    prevStep={handlePrevStep}
    />}

    
    {currentStep === 3 && <BudgetQuestion 
    budget={budget}
    setBudget={setBudget}
    nextStep={handleNextStep}
    prevStep={handlePrevStep}

    />}

    {currentStep === 4 && <Summary
    name={name}
    lastName={lastName}
    company={company}
    budget={budget}
    agency={agency}
    services={services}
    nextStep={resetForm}
    
    />}
    
  </div>
  )
}
