import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from "./firebase";
import './App.css';

const auth = getAuth(app);
function App() {
  const signupUser = () =>{
    createUserWithEmailAndPassword(
      auth,
      "tannyaverma086@gmail.com",
      "Tanya@18"
    ).then((value) => console.log(value));
  }

  return (
    <div className="App">
     <h1>Tanya </h1>
     <button onClick={signupUser}>Create User</button>
    </div>
  );
}

export default App;
