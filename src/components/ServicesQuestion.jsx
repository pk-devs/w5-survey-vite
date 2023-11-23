export const ServicesQuestion = ({ agency, setAgency, services, setServices, nextStep, prevStep }) => {
  
  const handleAgencyChange = (event) => {
    setAgency(event.target.value === "true")
    console.log(agency)
  }

  const handleServicesChange = (event) => {
    const service = event.target.value

    if (event.target.checked) {
        setServices(prevServices => [...prevServices, service])
    } else {
        setServices(prevServices => prevServices.filter(prevService => prevService !== service));
    }
  }

  const handleNextStep = (event) => {
    event.preventDefault()
    console.log([services])
  }
  
    return (
    <div className="card">
        <h1>Tell us a bit more about how we can help</h1>

        <form className="services-questions" onSubmit={handleNextStep}>
        <div className="radiobutton">
            <label className="have-agency">Do you have an agency helping you with digital marketing now?</label>
            
            <input 
            type="radio" 
            id="option_yes" 
            name="radio_option" 
            value="true"
            checked={agency === true}
            onChange={handleAgencyChange} 
            />
            <label htmlFor="option_yes">Yes</label>
            
            <input 
            type="radio" 
            id="option_no" 
            name="radio_option" 
            value="false"
            checked={agency === false} 
            onChange={handleAgencyChange}
            />
            <label htmlFor="option_no">No</label>

        </div>
    
        <div className="checkboxes">
            <label className="please-select">Please select what you would like help with:</label>
           
            <input 
            type="checkbox" 
            id="option_website" 
            name="checkbox_option_website"
            value="Website"
            onChange={handleServicesChange}
            />
            <label htmlFor="option_website">Website</label>       

            <input 
            type="checkbox" 
            id="option_ads" 
            name="checkbox_option_ads" 
            value="Google Ads"
            onChange={handleServicesChange}
            />
            <label htmlFor="option_ads">Google Ads</label>

            <input 
            type="checkbox" 
            id="option_seo" 
            name="checkbox_option_seo" 
            value="SEO"
            onChange={handleServicesChange}
            />
            <label htmlFor="option_seo">SEO</label>
            
            <input 
            type="checkbox" 
            id="option_dunno" 
            name="checkbox_option_dunno"
            value="Social Media"
            onChange={handleServicesChange}
            />
            <label htmlFor="option_dunno">Social Media</label>

        </div>
        <div className="buttons">
        <button type="submit" onClick={prevStep}>Prev step</button>
        <button type="submit" onClick={nextStep}>Next step</button>
        </div>

        </form>
        
    </div>


  )
}
