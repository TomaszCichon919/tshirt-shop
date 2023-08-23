import { useState } from 'react';
import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage.js';
import ProductForm from '../ProductForm/ProductForm';
import { useMemo } from 'react';


const Product = props => {

  const [currentSize, setCurrentSize]  = useState(props.sizes[0].name);

  const [currentColor, setCurrentColor]  = useState(props.colors[0]);

  


 
  const getPrice = useMemo (()=>{
  const getArtt = props.sizes.find((size) => size.name === currentSize);
  const finalPrice = getArtt.additionalPrice + props.basePrice;
  return finalPrice
  }, [currentSize, props.basePrice, props.sizes]);
  
  


  
  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
      <ProductForm title={props.title} currentColor={currentColor} setCurrentColor = {setCurrentColor} getPrice = {getPrice} 
      setCurrentSize = {setCurrentSize} getPrize = {getPrice} sizes = {props.sizes} 
      colors = {props.colors} currentSize={currentSize}/>
      </div>
    </article>
  )
};

export default Product;