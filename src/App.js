import Navigation  from './Components/Navigation/Navigation';
import Hero from './Components/Hero/Hero';
import Form from './Components/Form/Form'
import './App.css';

function App() {
  return (
    <div>
      <Navigation/>
      {/* <Hero/> */}
      <main>
      <Hero/>
      <Form/>
      </main>
    </div>
  );
}

export default App;
