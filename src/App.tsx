import React from "react";
import { Provider } from "react-redux";
import { store } from "./state";
import "./App.css";
import { RepositoriesList } from "./components/RepositoriesList";
import { Login } from "./components/Login";
import { JitsiConfig } from "./components/JitsiMeet";
import { Routes, Route } from "react-router-dom";
import { Main } from "./components/Main";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<RepositoriesList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/room" element={<JitsiConfig />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
