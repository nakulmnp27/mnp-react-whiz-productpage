import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import HeroSection from "./heroSection";
import CourseTabs from "./course_tab";
import CourseOverview from "./course_overview";
import WhyChoose from "./whychoose";
import CourseStats from "./course_stats";
import CourseBenefits from "./course_benefits";
import ExamSection from "./exam-section";
import ExamFeatureSection from "./exam-features";
import FAQSection from "./faq-section";
import Herobg from "./herobg";


const API_BASE = import.meta.env.VITE_BACKEND_API_URL;

const CoursePage = () => {
  // const { id } = useParams();
  const id = "1";
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadCourse = async () => {
      try {
        const res = await fetch(`${API_BASE}/courses/${id}/full`);
        const data = await res.json();
        console.log(data);
        setCourse(data);
      }
      catch (err) {
        console.error("Fetch error:", err);
      } 
      finally {
        setLoading(false);
      }
    };

    console.log("Course ID:", id);

    loadCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5">
        <div className="text-center">
          <div className="spinner-border text-warning mb-3" role="status" />
          <div>Loading course...</div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container py-5 text-center">
        <h5>No course found</h5>
      </div>
    );
  }

  return (
    <>
    <Herobg/>

    <HeroSection
      title={course.title}
      rating={course.rating}
      learners={course.learners}
      updatedAt={course.updatedAt}
      stats={course.stats}
      pricing={course.pricing}
    />

    <CourseTabs />

      <CourseOverview
        points={course?.courseOverview ?? []}
        description={course?.description}
      />

      <WhyChoose features={course?.features ?? []} />

      <CourseStats stats = { course?.stats ??[]} />

      <CourseBenefits
        message={course?.benefitsMessage}
        benefits={course?.courseBenefits ?? []}
        testimonials={course?.testimonials ?? []}
      />

    <ExamSection
      examDetail={course.examDetails}
      examInfo={course.examInfo}
    />

    <ExamFeatureSection
      examFeatureCards={course.examFeatureCards}
      benefitsMessage={course.benefitsMessage}
    />

    <FAQSection
      faqs={course.faqs}
    />

    </>
  );
};

export default CoursePage;