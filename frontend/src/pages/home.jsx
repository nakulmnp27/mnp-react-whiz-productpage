// export default function Home() {
//   return (
//     <div style={{ padding: "40px" }}>
//       <h1>Welcome to NASA Explorer</h1>
//       <p>Browse astronomy pictures and space data.</p>
//     </div>
//   );
// }

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNasa } from "../redux/nasaSlice";

const Home = () => {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.nasa);

  useEffect(() => {
    dispatch(fetchNasa());
  }, [dispatch]);

  return (
    <div className="container mt-4 text-center">

      <h2 className="mb-3">Home</h2>
      <p className="text-muted">Welcome to Home Page</p>

      {loading && (
        <div className="spinner-border text-primary mt-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-3">
          {error}
        </div>
      )}

      {data && !loading && (
        <div className="card mx-auto mt-4 shadow" style={{ maxWidth: "600px" }}>
          <div className="card-body">

            <h4 className="card-title mb-3">
              {data.title}
            </h4>

            <img
              src={data.url}
              className="img-fluid rounded mb-3"
            />

            <p className="card-text">
              {data.explanation}
            </p>

          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
