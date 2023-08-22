import { useState } from 'react';
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage.js';


const Product = props => {

  const [currentSize, setCurrentSize]  = useState(props.sizes[0].name);

  const [currentColor, setCurrentColor]  = useState(props.colors[0]);

  


  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }
  function getPrice(){
  const getArtt = props.sizes.find((size) => size.name === currentSize);
  //console.log('heyy', getArtt.additionalPrice);
  const finalPrice = getArtt.additionalPrice + props.basePrice;
  return finalPrice
  }
  
  



const handleSubmit = e => {
  e.preventDefault();
  console.log('name', props.title);
  console.log('price', getPrice());
  console.log('size', currentSize);
  console.log('color', currentColor);
}
  


  
  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
            {props.sizes.map(size => <li>
              <button 
                id ={props.sizes.indexOf(size)} 
                key = {size.name} 
                type="button" 
                onClick ={()=>setCurrentSize(size.name)}
                className={clsx(size.name === currentSize && styles.active)}>
                  {size.name}
                </button>
                </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {props.colors.map(color => 
            <li><button key= {color}
            type="button" onClick ={()=>setCurrentColor(color)}
            className={clsx(prepareColorClassName(color), color === currentColor && styles.active)}/>
            </li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;