import { useParams } from "react-router-dom"
import { Burger } from '../components/Burger'
import burgers from '../data/burgers.json'

export const ShowBurger = () => {
    const params = useParams()
    const burgerMatch = burgers.find((burger) => burger.slug === params.slug)
    console.log(burgerMatch)
    return (
        <div className="orderPage">
          <Burger name={burgerMatch.name} image={burgerMatch.image}/>
          <div className="actions">
            <button type="button">Order Burger!</button>
          </div>
        </div>
    )
}