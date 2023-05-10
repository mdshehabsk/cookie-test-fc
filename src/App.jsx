import axios from 'axios'
import './App.css'

function App() {
  async function btnClick ()  {
      const res = await axios.post('https://cookie-bc.onrender.com/user', undefined , {withCredentials:true})
      console.log(res)
  }
  return (
    <div className="App">
      <button onClick={btnClick} >click me to save cookie</button>
    </div>
  )
}

export default App
