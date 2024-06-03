import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./App.css"
import ProductPage from "./views/ProductPage"
import NotFoundPage from "./views/NotFoundPage"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/:id" element={<ProductPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
