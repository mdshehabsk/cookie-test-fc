import axios from "axios";
import "./App.css";

 const apiCallWithAxios = async () => {
  const res = await axios.post(
    "https://cookie-test-mu.vercel.app/user", {}, {
      withCredentials:true,
      headers:{
        'Content-Type': 'application/json'
      }
    }
  );
  console.log(res);
 }
const apiCallWithFetch = async () => {
  const res = await fetch('https://cookie-test-mu.vercel.app/user',{
    method:'POST',
    body:JSON.stringify({}),
    headers:{
      'Content-Type': 'application/json'
    },
    credentials:'include'
  })
  const data = await res.json()
  console.log(data)
}
function App() {
  async function btnClick() {
  //  apiCallWithFetch()
  apiCallWithAxios()
  }
  return (
    <div className="App">
      <button onClick={btnClick}>click me to save cookie</button>
    </div>
  );
}

export default App;
