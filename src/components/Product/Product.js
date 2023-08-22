import { useState } from 'react';
import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage.js';
import ProductForm from '../ProductForm/ProductForm';


const Product = props => {

  const [currentSize, setCurrentSize]  = useState(props.sizes[0].name);

  const [currentColor, setCurrentColor]  = useState(props.colors[0]);

  


 
  function getPrice(){
  const getArtt = props.sizes.find((size) => size.name === currentSize);
  //console.log('heyy', getArtt.additionalPrice);
  const finalPrice = getArtt.additionalPrice + props.basePrice;
  return finalPrice
  }
  
  


  
  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
      <ProductForm title={props.title} currentColor={currentColor} setCurrentColor = {setCurrentColor} getPrice = {getPrice} 
      setCurrentSize = {setCurrentSize} getPrize = {getPrice} sizes = {props.sizes} 
      colors = {props.colors} currentSize={currentSize}/>
      </div>
    </article>
  )
};

export default Product;