import * as React from 'react';
import ReactDOM from "react-dom/client";
import App from './app.jsx';
import "./input.css"

export default function Home() {
  return (
    <App/>
  );
}


const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<Home />);
