import React ,{useState, useEffect} from 'react'
import Nav from '../Components/Nav'
import style from './AllProducts.module.css'
import Product from '../Components/Product';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchData =async()=>{
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
        setLoading(false)
    }
    useEffect(()=>{
        fetchData();
    },[])

  return (
    <>
      <Nav />
      <div className={style.products}>
        <h1>All Products</h1>
        {loading ? (
          <h1 className={style.loading}>Loading....</h1>
        ) : (
          <div className={style.productsStyle}>
            {products.map((item) => {
              return <Product product={item} key={item.id} />
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default AllProducts