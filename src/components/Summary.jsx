export const Summary = ({ name, lastName, company, budget, agency, services, nextStep }) => {
  
    return (
    <div className="summary-card">
        <h1>Thanks for submitting your information, we are here to help!</h1>
        <div>
            <p>Thank you {name}, {lastName}! You currently {agency ? 'have' : 'do not have'} an agency.</p>
            <p>We are ready to help {company} with the following:</p>
            <ul>
                {services && services.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>
            <p>Your budget is: {budget}</p>
        </div>
        <button type="submit" onClick={nextStep}>Start again</button>
    </div>
  )
}
