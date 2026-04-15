import { useEffect , useState} from 'react';
import  axios  from 'axios';
import { Header } from '../components/Header';
import {Product} from './product'


export function HomePage({cart , getCartData}) {
    const [products, setProducts] = useState([]);
 
  
    
    // fetch('http://localhost:3000/api/products')
    //     .then((response) => {
    //         response.json();
    //     })
    //     .then((data) => {
    //         console.log(data);
    // });
    
    //fetch returns a promise . it has a method '.the(()=>{});.
    //response parameter contains the data
    //response.json is also asyncronous so we can not save it in avariable
  useEffect(() => {
        axios.get('/api/products').then((response) => {
            setProducts(response.data);
        });
  }, []);
   
    
   
    return (
        <>
            <Header cart={ cart} />

                <div className="home-page">
                <div className="products-grid">
                    {products.map((product) => {
                        return (
                            <Product key= {product.id} product={product} getCartData= {getCartData} />    
                    
                       )
                   })}
                   

                
                </div>
                </div>
            
        </>
    );
}