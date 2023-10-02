import React ,{useState ,useEffect} from 'react'
import Nav from '../Components/Nav'
import style from './HomePage.module.css'
import person from '../img/person.png'
import Product from '../Components/Product'
import { Link } from 'react-router-dom'


const HomePage = () => {
    const [products , setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

      const fetchData = async () => {
        const data = await fetch(
          'https://dummyjson.com/products?limit=12'
        )
        const response = await data.json()
         setProducts(response.products);
         setLoading(false)

      }
    useEffect(()=>{
      
        fetchData();
       
    },[])
    console.log(products);
  return (
    <>
      <Nav />
      <div className={style.header}>
        <img src={person} />
        <h1>Get 50% Off on Selected categories</h1>
      </div>
      <div className={style.products}>
        <h1>Products</h1>
        {loading ? (
          <h1 className={style.loading}>Loading....</h1>
        ) : (
          <div className={style.productsStyle}>
            {products.map((product) => {
              return <Product key={product.id} product={product} />
            })}
          </div>
        )}
        <Link to="/allProducts" className={style.seeMore}>
          See More
        </Link>
      </div>
    </>
  )
}

export default HomePage