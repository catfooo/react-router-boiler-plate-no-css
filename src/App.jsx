import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BurgerList } from './pages/BurgerList'
import { ShowBurger } from "./pages/ShowBurger";

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
            <Route path="/" element={<BurgerList />} />
            <Route path="/burgers/:slug" element={<ShowBurger />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}