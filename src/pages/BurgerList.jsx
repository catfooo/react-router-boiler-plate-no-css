import { Link } from 'react-router-dom'
import { Burger } from '../components/Burger'
import burgers from '../data/burgers.json'

export const BurgerList = () => {
    return (
        <section className="burgers">
            {burgers.map((burger) => (
                <Link key={burger.name} to={`/burgers/${burger.slug}`}>
                  <Burger name={burger.name} image={burger.image} />
                </Link>
            ))}
        </section>
    )
}