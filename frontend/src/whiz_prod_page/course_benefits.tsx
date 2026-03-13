import type { JSX } from "react"
import "./course_benefits.css"

type Benefit = {
  id: string
  title: string
  description: string
}

type Testimonial = {
  id: string
  name: string
  role?: string
  message: string
  rating: number
  profile:string
}

type Props = {
  message?: string
  benefits: Benefit[]
  testimonials: Testimonial[]
}

export default function CourseBenefits({
  message,
  benefits,
  testimonials
}: Props): JSX.Element {

  return (

    <div id="benefits"className="course_overview_container container-lg bg-white shadow-sm p-4 h-100 mt-3">

      <div className="row g-4">
        {/* left benetif */}
        <div className="col-lg-7">
          <div className=" p-4 h-100">
            <div className="row mb-4">
              <div className="col-lg-10">
                <h2>The Ultimate AWS Certified Cloud Practitioner Exam Benefits</h2>
                <p className="text-muted">{message}</p>
              </div>
            </div>

            <div className="row g-4">
              {benefits.map((b) => (
                <div key={b.id} className="col-12 col-md-6">
                  <div className="benefit-card p-4 h-100">
                    <h5 className="benefit-title"> {b.title}</h5>
                    <p className="benefit-description mb-0">{b.description}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>


        {/* right testi*/}
        <div className="col-lg-5">
        <div className="bg-white border h-100">
            <div className="d-flex flex-column m-2">
            <div className="testimonial-header text-center py-2">
            <strong>Testimonials</strong>
            </div>

            <div className="testimonial-rating p-4 text-white">
            <div className="row align-items-center">
                <div className="col-4 text-center">
                <div className="display-3 fw-bold">4.7</div>
                <div>Overall Feedbacks</div>
                </div>

                <div className="col-8">
                {[5,4,3,2,1].map((star) => {
                    const widths: Record<number, number> = 
                    { 5: 100, 4: 75, 3: 50, 2: 25, 1: 10 }
                  return (
                    <div key={star} className="rating-row d-flex align-items-center mb-2">

                        <span className="rating-star me-2">
                        {star} Star
                        </span>

                        <div className="rating-bar flex-grow-1 me-2">
                        <span className="fill" style={{ width: widths[star] + "%" }}/>
                        </div>
                        <span className="rating-count">({widths[star]})</span>
                    </div>
                    )
                })}
                </div>
            </div>
            </div>
            <div className="mt-2">
            {testimonials.map((t) => (
                <div key={t.id} className="testimonial-card d-flex p-3 mb-3">
                <div className="text-center me-3">
                    <img src={`/${t.profile || "default.png"}`}
                    className="rounded-circle mb-2"
                    width="60" />
                    <div className="fw-semibold"> {t.name} </div>

                    {t.role && (
                    <div className="small text-muted">
                        {t.role}
                    </div>
                    )}

                </div>

                <div className="flex-grow-1">

                    <p className="mb-2 text-center ">
                    {t.message}
                    </p>

                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}