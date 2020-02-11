import React from 'react';
import './App.css';
import Header from "./components/Header";
import Feed from "./components/Feed";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header titlebadge="NBA PLAYERS" />
      </header>
      <body>
        <div>
          <Feed />
        </div>
      </body>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Feed titlebadge="NBA PLAYERS"
//           middle="MIDDLE SECTION"
//           description="DESCRIPTION" />
//       </header>
//       <body></body>
//     </div>
//   );
// }