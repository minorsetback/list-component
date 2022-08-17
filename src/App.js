import './App.css';
import ListComponent from './components/ListComponent';

function App() {
  const data = [
    {
      "header": "Заголовок 1",
      "options": ["элемент списка 1", "элемент списка 2", "элемент списка 3"],
      "text": "какой-то текст 1 текст какой-то 1 какой-то"
    },
    {
      "header": "Заголовок 1",
      "options": ["элемент списка 1", "элемент списка 2", "элемент списка 3"],
      "text": "какой-то текст 1 текст какой-то 1 какой-то"
    }
  ]

  return (
    <div className="App">
      <ListComponent data={data} />
    </div>
  );
}

export default App;
