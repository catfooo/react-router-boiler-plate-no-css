import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Welcome } from './Welcome'
import { About } from './About'
import { Contact } from './Contact'
import { Nav } from './Nav'

export const App = () => {
    return (
      <BrowserRouter>
        <main>
          <Nav />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>   
    )
}
