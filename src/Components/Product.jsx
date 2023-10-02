import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import style from './Product.module.css'
import {AiOutlineHeart} from 'react-icons/ai'
const Product = (props) => {
    const { images, title, price ,description,id} = props.product ;
    const [like, setLike] = useState(false);
  return (
    <div className={style.product}>
      <div className={style.imageStyle}>
      
          <AiOutlineHeart
            className={like ? `${style.like} ${style.HeartIcon}`: `${style.unlike} ${style.HeartIcon}`}
            size={40}
            onClick={() => setLike(!like)}
          />
       

        <Link to={`product/${id}`}><img src={images[0]}/></Link>
      </div>

      <Link to={`product/${id}`} className={style.link}>
        <div className={style.prod_info}>
          <h2>{title}</h2>
          <h2>{price}$</h2>
        </div>
      </Link>

      <p>{description}</p>
    </div>
  )
}

export default Product