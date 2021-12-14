
import './App.css';
import BookList from './Components/BookList/BookList';
import Header from './Components/Header/Header';


function App() {
  
  return (
    <div className="App">
      {/* import Header Component */}
       <Header></Header>

        {/* import BookList Component */}
        <BookList></BookList>  
    </div>
  );
}

export default App;
