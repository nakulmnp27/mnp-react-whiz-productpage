import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_BASE = import.meta.env.VITE_BACKEND_API_URL;

const CoursePage = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!id) return;

      try {
        const res = await fetch(`${API_BASE}/courses/${id}/full`);
        if (!res.ok) throw new Error("Failed to fetch course");
        const result = await res.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-warning mb-3" role="status" />
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="h4 fw-bold mb-4">Full Course Response</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <pre className="mb-0" style={{ fontSize: "14px" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;