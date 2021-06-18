import Login from "./Components/Login";


function App() {
  return (
    <div className="App">
      <Login 
      phLogin={'USERNAME'}
      phPassword={'PASSWORD'}
      typePassword={'password'}
      nameOfButton={'ENTER'}
      />
      
    </div>
  );
}

export default App;
