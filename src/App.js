import Products from './components/Products/Products';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import TestButton from './components/TestButton/TestButton';

const App = () => {

  return (
    <Container>
      <Header />
      <Products />
      <TestButton />
    </Container>
  );
}

export default App;
