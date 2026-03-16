import type { JSX } from "react"
import "./course_stats.css"

type Stat = {
  id: string
  label: string
  value: string
  icon?: string
}

type Props = {
  stats: Stat[]
}

export default function CourseStats({ stats }: Props): JSX.Element {

  return (
    <div className="course_overview_container container-lg bg-white shadow-sm p-4 h-100 mt-3">
      <div className="container-lg py-4">
      {stats.map((s) => (
        <div key={s.id}
          className="stat-card d-flex align-items-center justify-content-between mb-4 p-4" >
          <div className="d-flex align-items-center gap-4">

            <div className="stat-icon">
              <img src={s.icon ?? "/default.png"} alt="" />
            </div>

            <div>
              <div className="text-muted small fw-semibold">
                {s.value}
              </div>
              <div className="stat-title">
                {s.label}
              </div>
            </div>
          </div>
          <div className="stat-arrow"> ▼ </div>
        </div>
      ))}
    </div>
    </div>
  )
}