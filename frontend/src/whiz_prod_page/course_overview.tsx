import type { JSX } from "react"
import "./course_overview.css"

type OverviewPoint = {
  id: string
  text: string
  column: number
}

type Props = {
  points: OverviewPoint[]
  description?: string
}

export default function CourseOverview({ points, description }: Props): JSX.Element {

  const left = points.filter(p => p.column === 1)
  const right = points.filter(p => p.column === 2)

  return (
    <div className="course_overview_container container-lg bg-white shadow-sm p-0 h-100">
      <div className="overview-logo"><img src="/overview-logo.png" alt="" /></div>
      <div className="overview_box d-flex ps-5 pt-5 ">
        <div className="overview_box_left col-5 align-top">
          <p>Course Overview</p> 
        </div>

        <div className="col-7 px-5 align-top">
          {description}
        </div>
      </div>

      <div className="row g-4 pb-5">
        <div className="col-lg-6">
          <div className="p-4 rounded-4 h-100">
            <h5 className="features-heading mb-0 rounded-top p-3">Key Features of taking AWS Cloud Practioner Course? </h5>
            <ul className="features-list p-3 rounded-bottom">
              {left.map((p) => (
                <li key={p.id} className="mb-2 d-flex gap-2">
                  <span>✓</span>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="p-4 rounded-4  h-100">

            <h5 className="learning-heading mb-0 rounded-top p-3">Learning outcomes of taking AWS Cloud Practioner Course </h5>

            <ul className="learning-list p-3 rounded-bottom">
              {right.map((p) => (
                <li key={p.id} className="mb-2 d-flex gap-2">
                  <span>✓</span>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}