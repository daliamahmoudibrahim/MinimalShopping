import React ,{useState , useEffect} from 'react'
import Nav from '../Components/Nav'
import { useParams } from 'react-router-dom'
import style from './productDesc.module.css';
import loadingImg from '.././img/loadingGif.gif'

const ProductDesc = () => {
    const {id} = useParams();
    const [productInfo, setProductInfo] = useState({});
    const [loading , setLoading] = useState(true);
    const [add , setAdd] = useState(false);
    const { title, price, brand, description, discountPercentage, rating } =
      productInfo
    const fetchProduct = async ()=>{
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        console.log(data);
        setProductInfo(data);
        setLoading(false)
    }
    useEffect(()=>{
        fetchProduct();
        
    },[])
    const clickHandler =()=>{
        console.log('Added To Cart');
        setAdd(true)
        setTimeout(() => {
           setAdd(false)
         }, 5000)
    }
  return (
    <>
      <Nav />
      <div className={style.productDesc}>
        {loading ? (
          <>
            <img src={loadingImg} className={style.gif} />
          </>
        ) : (
          <div className={style.productContainer}>
            <div className={style.productImg}>
              {productInfo.images && productInfo.images['0'] && (
                <img src={productInfo.images['0']} alt={title} />
              )}
            </div>
            <div className={style.productInfo}>
              <p className={style.new}>New!</p>
              <h1 className={style.title}>{title}</h1>
              <h2 className={style.title}>${price}</h2>
              <p className={style.brand}>Brand:{brand}</p>
              {/* <h5 className={style.brand}>discount:{discountPercentage}%</h5> */}
              <p className={style.desc}>
                {description.split(',').map((item) => {
                  return <p>{item}</p>
                })}
              </p>
              <p className={style.size}>Size</p>
              <div className={style.btn}>
                <button>XS</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
              </div>
              <button onClick={clickHandler} className={style.addBtn}>Add To Cart</button>
              {add && <p className={style.afterClick}>Added to Cart</p>}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ProductDesc