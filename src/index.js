import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Product from './Product';
import * as serviceWorker from './serviceWorker';

/* const & elements */

// function formatName(mahasiswa) {
//     return mahasiswi.firstName + ' ' + mahasiswi.lastName;
//   }

//   function selamatDatang(mahasiswa){
//       if(mahasiswi.angkatan < 2019){
//           return "Selamat datang Maba " + mahasiswi.firstName;
//       }
//   }
  
//   function formatNIM(mahasiswi) {
//     return mahasiswi.nim;
//   }

//   function formatAngkatan(mahasiswi) {
//     return mahasiswi.angkatan;
//   }
  
//   const mahasiswi = {
//     firstName: 'Harper',
//     lastName: 'Perez',
//     nim: 1234,
//     angkatan : 2019
//   };
  
//   const element = (
//       <h1>{selamatDatang(mahasiswi)}</h1>
//     <h1>
//       Nama : {formatName(mahasiswi)}
//       <br></br>
//       NIM : {formatNIM(mahasiswi)}
//       <br></br>
//       Angkatan : {formatAngkatan(mahasiswi)}
//     </h1>
//   );
  
//   ReactDOM.render(element, document.getElementById('root'));

// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
//   }
  
//   setInterval(tick, 1000);

/* functions & props */

const element = <App/>;

ReactDOM.render(element, document.getElementById('root'));

  // ReactDOM.render(<App/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
