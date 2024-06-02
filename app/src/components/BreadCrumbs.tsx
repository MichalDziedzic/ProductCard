import React from "react"
import { Link, useLocation } from "react-router-dom"

const Breadcrumbs: React.FC = () => {
  const location = useLocation()

  const pathnames = location.pathname.split("/").filter((x) => x)

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`

          return (
            <li key={to}>
              <Link to={to}>{value}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Breadcrumbs
