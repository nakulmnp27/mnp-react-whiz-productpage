import type { JSX } from "react"
import "./whychoose.css"

type Feature = {
  id: string
  title: string
  description?: string
  icon?: string
}

type Props = {
  features: Feature[]
}

export default function WhyChoose({ features }: Props): JSX.Element {

  return (
    <div id="included" className="course_overview_container container-lg bg-white shadow-sm p-4 mt-2 h-100">
    <div className="container-lg py-5">
      <h3 className="text-center mb-5">Why Choose Us?</h3>
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="row g-4">
            {features.map((f) => (
              <div key={f.id} className="col-md-4">
                <div className="why-card">
                  <div className="why-card-icon">
                    <img src={`/${f.icon || "default.png"}`} alt={f.title} />
                  </div>
                  <div className="why-card-body">
                    <h5>{f.title}</h5>
                    <p>{f.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-4">
          
          <div className="why-side-panel p-4">
            <h2>Why get AWS Cloud Practitioner Certification?</h2>
            <p> You will undoubtedly learn a lot, regardless of your level of experience with AI. This certification provides a strong foundation for understanding how AI will be used in the future and adds credibility in the tech community. </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}