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

import React from "react";
import { usePageVisibility } from './utils/visibility';
import {
  useCurrentVisibilityTimer,
  useTotalVisibilityTimer
} from "./utils/timerHooks";
import Info from "./component/Info";
import Citations from "./component/Citations";
import Nav from "./component/Nav";
import Resources from "./component/Resources";
import "./App.css";

function App() {
  const isVisible = usePageVisibility();

  // Change the title based on page visibility
  if (isVisible) {
    document.title = "Active";
  } else {
    document.title = "Inactive";
  }

  // Custom timers which are affected by the page visibility
  const timerVal = useCurrentVisibilityTimer(isVisible);
  const totalTimeVal = useTotalVisibilityTimer(isVisible);

  return (
    <React.Fragment>
      <Nav />
      <div className="row">
        <div className="lg-5 col">
          <div className="paper">
            <Info />
          </div>
          <Resources />
          <Citations />
        </div>
        <div className="lg-7 col">
          <div className="paper">
            <h2 className="title">You've looking at this page for</h2>
            <p>
              about <b>{timerVal}</b> seconds non-stop
              <br />
              and <b>{totalTimeVal}</b> seconds in total
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
