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
    <div className={`modal ${openForm ? 'blur-back' : ''}`}>
      <h1>User Details Model</h1>
      <button onClick={(e)=>handleClick(e)}>Open Form</button>
      {openForm ? <Form handleClick={handleClick} /> : null}
    </div>
  );
}

export default App;



// // import React, { useState } from "react";
// // import "./styles.css";




// // const User = ({ closeModal }) => {

// //   const handleSubmit = (event) => {
// //     event.preventDefault(); // Prevent default form submission
// //     closeModal(true); // Close the modal
// //   };

// //   return (
// //     <div className="modal">
// //       <div className="modal-content">
// //         <h2>Fill Details</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="form-group">
// //             <label htmlFor="username">Username:</label>
// //             <input
// //               type="text"
// //               id="username"
// //               name="username"
// //               required
// //               className="input-field"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="email">Email Address:</label>
// //             <input
// //               type="email"
// //               id="email"
// //               name="email"
// //               required
// //               className="input-field"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="phone">Phone Number:</label>
// //             <input
// //               type="tel"
// //               id="phone"
// //               name="phone"
// //               required
// //               className="input-field"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="dob">Date of Birth:</label>
// //             <input
// //               type="date"
// //               id="dob"
// //               name="dob"
// //               required
// //               className="input-field"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <button type="submit" className="submit-button">
// //               Submit
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // const App = () => {
// //   const [isOpen, setIsOpen] = useState(false);
  

// //   const openModal = () => {
// //     setIsOpen(true);
// //   };

// //   const closeModal = () => {
// //     setIsOpen(false);
// //   };

// //   return (
// //     <div className="App">
// //       <h1>User Details Modal</h1>
// //       <button onClick={openModal} className="submit-button">Open Form</button>
// //       {isOpen && <User closeModal={closeModal} />}
// //     </div>
// //   );
// // };

// // export default App;
// import React, { useState } from "react";
// import "./styles.css";

// const User = ({ closeModal }) => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     closeModal(true);
//   };

//   return (
//     <div className="modal-overlay" onClick={() => closeModal(false)}>
//       <div className="modal" onClick={(e) => e.stopPropagation()}>
//         <div className="modal-content">
//           <h2>Fill Details</h2>
//           <form onSubmit={handleSubmit}>
//           <div className="form-group">
//              <label htmlFor="username">Username:</label>
//            <input
//               type="text"
//               id="username"
//               name="username"
//               required
//               className="input-field"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email Address:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               className="input-field"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Phone Number:</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               required
//               className="input-field"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="dob">Date of Birth:</label>
//             <input
//               type="date"
//               id="dob"
//               name="dob"
//               required
//               className="input-field"
//             />
//           </div>
//           <div className="form-group">
//             <button type="submit" className="submit-button">
//               Submit
//             </button>
//           </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="App">
//       <h1>User Details Modal</h1>
//       <button onClick={openModal} className="submit-button">
//         Open Form
//       </button>
//       {isOpen && <User closeModal={closeModal} />}
//     </div>
//   );
// };

// export default App;



// App.js
// import React, { useState } from "react";
// import "./styles.css";
// import User from "../src/Components/User";

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className={`App ${isOpen ? 'blur-back' : ''}`}>
//       <h1>User Details Modal</h1>
//       <button onClick={openModal} className="submit-button">
//         Open Form
//       </button>
//       {isOpen && <User closeModal={closeModal} />}
//     </div>
//   );
// };

// export default App;

