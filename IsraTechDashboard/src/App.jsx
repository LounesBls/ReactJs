import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "./components/Layouts";
import Home from "./Page/Home";
import Orders from './components/Orders/Orders';
import Explore from './components/Explore/Explore';
import Products from "./components/products/products";
import Error from './components/Error/Error';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layouts />} >
            <Route index element={<Home />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/products' element={<Products />} />
            <Route path='*' element={<Error />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
