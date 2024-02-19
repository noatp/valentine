import './App.css';
import {useState} from 'react';

function App() {
  const [shouldShowButton, setShouldShowButton] = useState(true)
  const [titleLabel, setTitleLabel] = useState("Will you be my Valentine?")
  const [timesClickNo, setTimesClickNo] = useState(0)

  function onClickYes() {
    setTitleLabel("I love you Nibbles! <3")
    setShouldShowButton(false)
  }

  function onClickNo() {
    console.log("Clicked")
    setTimesClickNo((prevState) => {
      let timesClickNo = prevState + 1
      let titleString = "Please"
      for (let i = 0; i < timesClickNo; i++) {
        titleString += " please"
      }
      titleString += " be my Valentine?"
      setTitleLabel(titleString)
      return timesClickNo
    })
    
  }

  const yesButtonStyle = {
    transform: `scale(${1 + timesClickNo * 0.1})`, 
  };

  const titleLabelStyle = {
    fontSize: `${3 + timesClickNo * 0.2}em`, 
  };

  return (
    <div className="vh-100 d-flex flex-column user-select-none justify-content-center align-items-center">
      <div className='h1 mb-3' style={titleLabelStyle}>{titleLabel}</div>
      {shouldShowButton && <button type="button" className='btn btn-primary btn-lg mb-3' onClick={onClickYes} style={yesButtonStyle}>OK</button>}
      {shouldShowButton && <button type="button" className='btn btn-danger btn-lg mb-3' onClick={onClickNo}>Nope</button>}
    </div>
  );
}

export default App;
