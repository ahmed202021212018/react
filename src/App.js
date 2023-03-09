import './App.css';
import Products from './components/Products';
import { Routes,Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import React, { lazy, Suspense } from 'react';
import NavigationBar from './components/Navbar';
import ProductDetailsApi from './components/ProductDetailsApi';
import AddProduct from './components/AddProduct';


function App() {
  const ProductDetails = lazy(() => import('./components/ProductDetails'));
  const UpdateProduct = React.lazy(()=> import('./components/UpdateProduct '));

  return (
    <div className="App">
      <NavigationBar />
      <Suspense fallback={<div>Loading...</div>}>

    
     {/* <Products/> */}
     <Routes>
        {/* <Route path="/products" element={<Products />} />
        <Route path=":name" component={ProductDetails} /> */}
        <Route  path='/products'>
          <Route index  element={<Products/>}/>
          <Route path='add' element={<AddProduct />} />
          <Route path='update/:id' element={<UpdateProduct />} />
          <Route path=':name' element={<ProductDetails/>}/>
          <Route path=':id' element={<ProductDetailsApi />}/>
        </Route>
        <Route path="*" element={<NotFound />} />
     </Routes>
     </Suspense>

    </div>
  );
}

export default App;
