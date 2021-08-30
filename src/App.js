import Web from "./Components/home/Web"
import Menu from './Components/menu'

export default function App() {
  return (

    <div className="App">
      <Menu/>
      <Web/>
      <div className='footerHome'>
        <h3>Eduardo Silva</h3>
      </div>
    </div>
  );
}
