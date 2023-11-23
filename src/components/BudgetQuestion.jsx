export const BudgetQuestion = ({ budget, setBudget, nextStep, prevStep }) => {
    
    const handleSliderChange = (event) => {
        setBudget(event.target.value)
    }

    const handleNextStep = (event) => {
        event.preventDefault()
        console.log(budget)
    }
    

    return (
        <div className="card">
            <h1>What is your budget?</h1>

            
            <div className="slidecontainer">
                <form onSubmit={handleNextStep}>
                <input 
                type="range" 
                min="1" 
                max="100000" 
                value={budget}
                className="slider" 
                id="myRange"
                onChange={handleSliderChange}
                 
                />
                <p>My budget is: <span id="budget">{budget} SEK</span></p>
                <div className="buttons">
                    <button type="submit" onClick={prevStep}>Prev step</button>
                    <button type="submit" onClick={nextStep}>Next step</button>
                </div>
                </form>
            </div>
            
        </div>
  )
}
