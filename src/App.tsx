import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function App() {
  const[inputVal, setInputVal] = useState(" ");
  const[url,setUrl]=useState("")

  const handleonclick = ()=> {
        setUrl(inputVal)
  }

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputVal(event.target.value)
    
  }

  return (

    <div>
      
      <p>Name of website</p>
      <input type="text" value={inputVal} onChange={handleChange} />
      <br>
      </br>
      <button onClick={handleonclick}>submit</button>
    
      {url && (
       
        <div>
          <p>Here is your QR code:</p>
          <QRCode value={url} />
        </div>
      
      )}
      
    </div>
  )
};

export default App
