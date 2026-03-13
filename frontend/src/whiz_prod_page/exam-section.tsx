
import "./exam-section.css"

type CourseExamDetail = {
  id: string
  heading: string
  description: string
}

type ExamInfo = {
  id: string
  icon: string
  heading: string
  text: string
}

type Props = {
  examDetail: CourseExamDetail[]
  examInfo: ExamInfo[]
}

export default function ExamFormatSection({ examDetail, examInfo }: Props) {

  console.log("showing exam detail");
  console.log(examDetail);
  return (


    // this sis left 
    <div className=" container-lg bg-white shadow-sm mt-2" id="exam">
    <section className="exam-section container-fluid position-relative">
      <div className="row">
          <div className="section-logo"><img src="/section-logo.png" alt="" /></div>
        <div className="col-lg-4 left-panel">
          {examDetail.map((item) => (
            <div key={item.id} className="mb-4 d-flex gap-3">
              <div className="tick">✓</div>
              <div>
                <h5 className="fw-semibold mb-2">{item.heading}</h5>
                <p className="mb-0 text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>


{/* this is right */}
        <div className="col-lg-8 right-panel">
          <h2 className="mb-4 fw-semibold">Exam Format and Information</h2>
          <div className="row g-4">
            {examInfo.map((item, index) => (
              <div key={item.id} className="col-md-4">
                <div className="exam-card d-flex flex-column align-items-start gap-3 p-4 rounded-3">
                  <div className={`icon-circle ${index % 2 === 0 ? "icon-orange" : "icon-red"} d-flex align-items-center justify-content-center `}>
                    <img src={`/${item.icon || 'default.png'}`} width={20} />
                  </div>
                  <div>
                    <p className="exam-heading">{item.heading}</p>
                    <h5 className="exam-text">{item.text}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}