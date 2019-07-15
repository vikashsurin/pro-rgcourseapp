import React from "react"
import Heading from "../Reuseable/Heading"

export default function Contact() {
  return (
    <section className="py-3 ">
      <Heading tite="Contact Us" />
      <div className="col-10 col-sm-8 mx-auto">
        <form action="" method="POST">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="phone"
              id="phone"
              placeholder="Your phone"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="description"
              id="description"
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="btn btn-outline-info btn-block">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
