export const IntroQuestions = ({ name, setName, lastName, setLastName, company, setCompany, nextStep,}) => {
  
  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleChangeCompany = (event) => {
    setCompany(event.target.value)
  }

  const handleNextStep = (event) => {
    event.preventDefault()
    console.log({name, lastName, company})
  }

    return (
    <div className="card">
        <h1>Fun that you are interested in our services!</h1> 
        <form onSubmit={handleNextStep}>
          <label htmlFor="">What is your name?</label>
          <input 
          type="text" 
          name="name" 
          id="" 
          value={name}
          onChange={handleNameChange} 
          />
          
          <label htmlFor="">What is your surname?</label>
          <input 
          type="text" 
          name="lastName" 
          id="" 
          value={lastName}
          onChange={handleLastNameChange} 
          />
          
          <label htmlFor="">What company do you represent?</label>
          <input 
          type="text" 
          name="company" 
          id="" 
          value={company}
          onChange={handleChangeCompany} 
          />
        <button type="submit" onClick={nextStep}>Next step</button>
        </form>      
    </div>  
  )  
}
