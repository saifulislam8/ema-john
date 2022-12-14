import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const[products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( ()=>{
        fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    }, []);
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='products'>
            <div className="products-container">
                {
                   products.map(product =><Products key={product.id}
                     product={product}
                     handleAddToCart={handleAddToCart}
                     ></Products>) 
                }
            </div>
            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;