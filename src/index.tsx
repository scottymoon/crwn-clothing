import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App"
import { BrowserRouter } from "react-router-dom"
import MultiProvider from "./contexts/MultiProvider"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MultiProvider>
        <App />
      </MultiProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
)
