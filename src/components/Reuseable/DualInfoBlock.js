import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"
export default function DualInfoBlock({ heading,img }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem nulla repellendus praesentium in delectus dolorem
              quibusdam labore omnis iusto. Dolores eius, voluptatibus quas
              veritatis excepturi fuga? Repudiandae quas minima eaque, esse
              saepe adipisci accusamus architecto magnam? Provident quidem
              perferendis, consectetur, et quis, impedit dicta temporibus nobis
              exercitationem velit praesentium voluptatibus!
            </p>
          </div>
          <div className="col-4">
            <div className="card bg-dark">
              <img
                src={img}
        
                className="card-img-top"
                alt="image goes here"
              />
              <div className="card-body">
                <h5 className="card-title text-white">Just click photos</h5>
                <p className="card-text text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maiores repellendus dolorum rerum obcaecati consectetur,
                  maxime aspernatur, qui quidem, harum expedita cupiditate
                  repudiandae distinctio dolorem culpa modi necessitatibus? Sit,
                  distinctio eveniet!
                </p>
                <Link href="#" className="btn btn-warning btn-block">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
