import { Welcome } from './Welcome'
import { About } from './About'
import { Contact } from './Contact'
import { Nav } from './Nav'

export const App = () => {
    return (
        <main>
          <Nav />

          <Welcome />
          <Contact />
          <About />
        </main>
    )
}
