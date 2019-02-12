import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function formatName(mahasiswa) {
//     return mahasiswa.firstName + ' ' + mahasiswa.lastName;
//   }

//   function selamatDatang(mahasiswa){
//       if(mahasiswa.angkatan < 2019){
//           return "Selamat datang Maba " + mahasiswa.firstName;
//       }
//   }
  
//   function formatNIM(mahasiswa) {
//     return mahasiswa.nim;
//   }

//   function formatAngkatan(mahasiswa) {
//     return mahasiswa.angkatan;
//   }
  
//   const mahasiswa = {
//     firstName: 'Harper',
//     lastName: 'Perez',
//     nim: 1234,
//     angkatan : 2019
//   };
  
//   const element = (
//       <h1>{selamatDatang(mahasiswa)}</h1>
//     <h1>
//       Nama : {formatName(mahasiswa)}
//       <br></br>
//       NIM : {formatNIM(mahasiswa)}
//       <br></br>
//       Angkatan : {formatAngkatan(mahasiswa)}
//     </h1>
//   );
  
//   ReactDOM.render(element, document.getElementById('root'));

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
