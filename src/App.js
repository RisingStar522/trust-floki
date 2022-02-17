import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/landing/landing';
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route path="*" element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
