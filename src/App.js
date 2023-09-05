import './css/App.css';
import './components/Testify.js';
import Testify from './components/Testify.js';

function App() {
  return (
    <div className='App'>
      <div className='main-content'> 
        <h1>Masterunion Testimonials</h1>
        <Testify 
        name='Patricia Fonseca'
        country = 'Construction Sector'
        image = '1'
        role = 'Manager'
        enterprise = 'Steel Panel'     
        testimonial = '"We are specialized in roofs and metal structures. The idea was to project the careful responsibility we have with safety, people and building design in our brand. Masterunion captured the essence from the beginning of our brand design."'
        />
        <Testify 
        name='Alexander Herrera'
        country = 'Construction Sector'
        image = '2'
        role = 'CEO'
        enterprise = 'Vision Architecture'
        testimonial = '"We work with Masterunion in two different roles. The HSEQ Documentation System, and the audit of civil works projects. In both cases, we have the confidence of good advisors and satisfaction with the completed projects."'
        />
        <Testify 
        name='Diana Enciso'
        country = 'Educational Sector'
        image = '3'
        role = 'Director'
        enterprise = 'Escalando kinder Garden'
        testimonial = '"Our users are children and our clients are parents. The idea was to create the digital image of the institution, which would give us the opportunity to reach both publics, with our values and respect for children. Materunion managed to merge both interests into a reliable brand that is close to our infants."'
        />
      </div>
    </div>
  );
}
 
export default App;
