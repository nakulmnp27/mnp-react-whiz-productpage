import type { JSX } from "react";
import "./floating-icons.css";

export default function Floating(): JSX.Element {
  return (
    <div className="floating">

      <button className="chat-btn">S</button>

      <button className="help-btn">
        <span>?</span>
        Help
      </button>

      <a href="#top" className="go-top">↑</a>

      <a href="#" className="whatsapp">
        <img src="/essentials/whatsapp.png" alt="WhatsApp" />
      </a>

    </div>
  );
}