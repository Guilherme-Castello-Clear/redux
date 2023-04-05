import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux Simples</h1>
      <div className='linha'>
        <Card title="Card 1" red>X</Card>
      </div>
      <div className='linha'>
        <Card title='Card 2' purple>Y</Card>
        <Card title="Card 3" green>X</Card>
        <Card title="Card 4" blue>X</Card>
      </div>
    </div>
  );
}

export default App;
