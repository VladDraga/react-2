import Greeting from './components/Greeting';
import Message from './components/Message';
import Button from './components/Button';

function App() {

  const handleClick = () => {
    console.log("Кнопка була натиснута!");
    alert("Привіт! Кнопка працює 😊");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Greeting name="Vlad" />
      
      <Message text="Це повідомлення передано через props!" />
      
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
