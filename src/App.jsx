// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import {Component} from 'react'
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }

//   handleIncrement = () => {
//     this.setState((prevstate) => {return { count: prevstate.count +1}})
//   }
//   handleDecerement = () => {
//     this.setState((prevstate) => {return {count: prevstate.count -1}})
//   }
//   handleReset = () => {
//     this.setstate((prevstate) => {
//       return {count:0}
//     })
//   }

// render() {
//   return <section>
//     <article>
//             <h1>Class Component Counter</h1>
//             <h2>{this.state.count}</h2>
//             <button onClick={this.handleIncrement}>+</button>
//             <button onClick={this.handleDecerement}>-</button>
//             <button onClick={this.handleReset}>Reset</button>
//         </article>
//   </section>
// }
// }

// export default App;



// import React,{useEffect , useState} from'react'
// const App = () =>{
//   const [hours,setHours] =useState(0)
//   const [mins,setMins] =useState(0)
//   const [second,setSecond] =useState(0)

//   useEffect(() => {
//     setInterval(() =>{
//       setSecond(second+1)
//     },1000)
//   },[])

//   useEffect(() => {
//     if (second == 59){
//       setMins(mins++);
//       setSecond = 0;
//     }
    
//   },[second])

//   useEffect(()=> {
//     if (mins==59){
//       setHours(hours++);
//       setMins(mins= 0);
//       setSecond(second= 0);
//     }
//     // setHours(hours+1)
//   },[mins])

//  return (
//   <section>
//     <article>
//       <h1>{hours}</h1>
//       <h1>{mins}</h1>
//       <h1>{second}</h1>
//     </article>
//     <div className='button'>
//       <button className='p-2'>Stop</button>
//       <button>Resume</button>
//     </div>
//   </section>
//  )

// }

// export default App


// import React, { useState, useEffect } from "react";

// function App() {
//   const [date, setDate] = useState(new Date());

//   useEffect(() => {
//     const timerId = setInterval(() => {
//       setDate(new Date());
//     }, 1000);

//     return () => {
//       clearInterval(timerId);
//     };
//   }, []);

//   return (
//     <div>
//       <span>Time: {date.toLocaleTimeString()}</span>
//     </div>
//   );
// }

// export default App;




import React, {useState} from 'react'

const App =() => {
  const [user, setUser] = useState("No User")
  const [password, setPassword] = useState("No Password")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    console.log(password);
  }

  return (
    <div className='px-[10vw] h-[100vh] overflow-hidden flex justify-center items-center bg-slate-700'>
        <form className='bg-green-300 flex flex-col p-[1vw] gap-2 px-4 py-6' onSubmit={handleSubmit}>
        <input type="text" name='' id='' className='border-[1px] text-[1.3rem] border-[#00a113] p-2' placeholder='Username' onChange={(e) => {setUser (e.target.value)}} />
        <input type="Password" name='' id=''  className='border-[1px] text-[1.3rem] border-[#00a113] p-2' placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}/>
        <button className='py-2 bg-emerald-600 text-[white] font-bold text-[1.3rem] hover:bg-emerald-800 border-2 border-green-800'>Register</button>
        </form>
      </div>
  )
}

export default App