import Popup from "./popup";
import { useState } from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="App">
      <main>
        <h3>React Popup</h3>
        <br /><br />
        <button onClick={() => setButtonPopup(true)}>Open PopUp</button>
        <Popup action="Start" trigger = { buttonPopup } setTrigger = {setButtonPopup} />
      </main>
    </div>
  );
}

export default App;
