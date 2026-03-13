import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import type { JSX } from "react";
import Floating from "./components/floating-icons";

export default function MainLayout(): JSX.Element {
  return (
    <div className=" d-flex flex-column bg-light text-dark">
      <div className="container-fluid d-flex flex-column flex-grow-1 p-0">

        <Navbar />

        <main className="flex-grow-1">
          <div style={{ backgroundColor: '#f5f4ef' }}>
            <Outlet />
            </div>
        </main>

        <Footer />
        <Floating/>

      </div>
    </div>
  );
}