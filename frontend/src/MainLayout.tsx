import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
// import Footer from "./components/footer";
import type { JSX } from "react";

export default function MainLayout(): JSX.Element {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light text-dark">
      <div className="container-lg d-flex flex-column flex-grow-1">

        <Navbar />

        <main className="flex-grow-1 py-4">
          <div className="bg-white rounded-4 shadow-sm p-4 h-100">
            <Outlet />
          </div>
        </main>

        {/* <Footer /> */}

      </div>
    </div>
  );
}