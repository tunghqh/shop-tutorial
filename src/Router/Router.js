import {Routes,Route} from 'react-router-dom'
import Detail from '../Page/Detail/Detail'
import Home from '../Page/Home/Home'
import Introduce from '../Page/Introduce/Introduce'
import Product from '../Page/Product/Product'
import Map from '../Page/Map/Map'
import Contact from '../Page/Contact/Contact'


function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/introduce' element={<Introduce />} />
        <Route path='/product' element={<Product />} />
        <Route path="/:product/:id" element={<Detail />} />
        <Route path="/map" element={<Map />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Router