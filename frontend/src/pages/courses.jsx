import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourses } from '../redux/coursesSlice'

const Courses = () => {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(state => state.courses)

  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch])

  if (loading) return <p style={{ padding: 20 }}>Loading courses...</p>
  if (error) return <p style={{ padding: 20 }}>Error: {error}</p>

  return (
    <div style={{ padding: 20 }}>
      <h2>Courses</h2>

      {data.length === 0 && <p>No courses available</p>}

      {data.map(course => (
        <div key={course.id} style={{ borderBottom: '1px solid #ccc', marginBottom: 12 }}>
          <h4>{course.title}</h4>
          <p>Rating: {course.rating}</p>
          <p>Learners: {course.learners}</p>
        </div>
      ))}
    </div>
  )
}

export default Courses
