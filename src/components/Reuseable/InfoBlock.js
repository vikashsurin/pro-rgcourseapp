import React from "react"
import Heading from "../Reuseable/Heading"
import { Link } from "gatsby"
export default function InfoBlock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-white text-center">
            <p className="lead text white mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
              alias temporibus minus aperiam quasi quae atque eos repellat
              fugiat modi odit distinctio itaque facere autem voluptates
              necessitatibus vero dolores aliquam sed? Vitae obcaecati, velit
              inventore saepe consequuntur provident reiciendis quia nesciunt,
              quidem quaerat officiis nostrum ipsa labore. Doloremque repellat
              consequatur inventore fugiat, iure ad deleniti ut ab distinctio,
              vel aspernatur.
            </p>
            <Link to="/about">
              <button className="btn btn-warning btnn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
