import Button from './Button.js'

const Footer = () => (
  <div className="footer">
        
          <Button 
          content= 'Te lo encontramos' 
          href="https://docs.google.com/forms/d/e/1FAIpQLScQJmsuWf9TVJwN9KThfqsN5I68m7FKcanrPJg1w5w54xrYrA/viewform?embedded=true"          
          icon={"../img/manage_search.png"}          
          />
            
          <Button 
          content='Danos tu opinión' 
          href="https://wa.me/573042846298"          
          icon={"../img/feedback_black.png"}
          />          
  </div>
);

export default Footer;