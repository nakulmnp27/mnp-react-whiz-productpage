import "./exam-feature.css"

type ExamFeature = {
  id: string
  icon: string
  text: string
}

type Props = {
  examFeatureCards: ExamFeature[]
  benefitsMessage: string
}

export default function ExamFeatureSection({
  examFeatureCards,
  benefitsMessage
}: Props) {

  return (

    // left part
    <div className="course_overview_container container-lg bg-white shadow-sm p-4 h-100 mt-1">
    <section className="container-lg mt-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="row g-4">
            {examFeatureCards.map((item) => (
              <div key={item.id} className="col-md-4 d-flex">
                <div className="feature-card w-100">
                  <div className="feature-icon d-flex justify-content-center">
                    <img src={`/${item.icon}`} width={40} />
                  </div>
                  <p className="feature-text">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>




{/* right */}
        <div className="col-lg-4 right-info-panel">

          <h2 className="info-title">
            Who can take the AWS AI Practitioner (AIF-C01) Exam?
          </h2>

          <p className="info-description">
            {benefitsMessage}
          </p>
          <div className="features-logo"><img src="/section-logo.png" alt="" /></div>
        </div>

      </div>
    </section>
    </div>
  )
}