import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";
import Users from "./Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Login} exact={true} />
        <Route path="/users/:id" component={Users}  />
      </BrowserRouter>
    </div>
  );
}

export default App;
