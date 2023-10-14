export const Burger = ({ name, image }) => {
  return (
  <div className="burger">
    <img src={`/images/${image}`} alt="" />
    <h3>{name}</h3>
  </div>
  )
}