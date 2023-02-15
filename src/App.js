import { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cart from './components/Cart';



function App() {
  useEffect(() => {
    import('../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
  })
  return (

    <div className="App">
      <Cart />
    </div>
  );
}

export default App;
