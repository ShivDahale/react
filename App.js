
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {

  return (
   <>
  <Navbar title="Convert Text "/>

  <div className='container my-4'>
  <TextForm heading="Enter the text to analyze"/> 

  {/* <About/> */}
  
  </div>
   </>
  );
}

export default App;
