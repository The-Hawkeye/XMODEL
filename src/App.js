// App.js
import { useState, useEffect } from 'react';
import './App.css';
import Form from "./Components/Form";

function App() {
  const [openForm, setOpenForm] = useState(false);

  const handleClick = (e) => {
    setOpenForm(!openForm);
    e.stopPropagation();

  };

  const handleOutsideClick = (event) => {
    if (openForm && !event.target.closest('.model-content')) {
      // Clicked outside the form, close the form
      console.log("helo");
      setOpenForm(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openForm]);

  return (
    <div className={`model ${openForm ? 'blur-back' : ''}`}>
      <h1>User Details Model</h1>
      <button onClick={(e)=>handleClick(e)}>Open Form</button>
      {openForm ? <Form handleClick={handleClick} /> : null}
    </div>
  );
}

export default App;
