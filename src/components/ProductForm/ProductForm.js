import styles from './ProductForm.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';

const ProductForm = props => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log('name', props.title);
        console.log('price', props.getPrice);
        console.log('size', props.currentSize);
        console.log('color', props.currentColor);
      }
        
    return <form onSubmit={handleSubmit}>
        <div className={styles.sizes}>
<h3 className={styles.optionLabel}>Sizes</h3>
     <OptionSize setCurrentSize={props.setCurrentSize} currentSize= {props.currentSize} sizes = {props.sizes}/>
    </div>
    <div className={styles.colors}>
    <h3 className={styles.optionLabel}>Colors</h3>
    <OptionColor colors = {props.colors} setCurrentColor={props.setCurrentColor} currentColor={props.currentColor}/>
</div>
    <Button className={styles.button}>
      <span className="fa fa-shopping-cart" />
    </Button>
  </form>
}

export default ProductForm;