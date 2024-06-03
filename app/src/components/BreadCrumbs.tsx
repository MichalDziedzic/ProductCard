import { Link, useParams } from "react-router-dom"

const Breadcrumbs = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="text-14px breadcrumbs pb-26">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={`/${id}`}>Current Auctions</Link>
        </li>
      </ul>
    </div>
  )
}

export default Breadcrumbs
