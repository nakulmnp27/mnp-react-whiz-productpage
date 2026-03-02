import { useMemo } from "react";

type Stat = {
  id: string;
  label: string;
  value: string;
};

type Props = {
  title: string;
  rating?: number;
  learners?: string;
  updatedAt: string;
  stats: Stat[];
};

const HeroSection = ({
  title,
  rating,
  learners,
  updatedAt,
  stats,
}: Props) => {

  const dateVal = useMemo(() => {
    if (!updatedAt) return "";
    return new Date(updatedAt).toLocaleDateString("en-GB");
  }, [updatedAt]);

  return (
    <div className="mainDiv container py-4">

      <div className="topRow d-flex align-items-center mb-2">

        {rating && (
          <div
            className="box1"
            style={{
              background: "#f7dcd6",
              border: "1px solid #F55B43",
              color: "#F55B43",
              padding: "6px 12px",
              borderRadius: "6px",
              marginRight: "12px"
            }}
          >
            {rating} ★★★★★
          </div>
        )}

        <div className="smallText text-muted d-flex align-items-center">
          <img
            src="/assests/calender.png"
            width="14"
            style={{ marginRight: "6px" }}
          />
          Last updated {dateVal}
        </div>

      </div>

      {learners && (
        <div className="learnBlock d-flex align-items-center mb-3">
          <img
            src="/assests/graduation_hat.png"
            width="40"
            style={{ marginRight: "8px" }}
          />
          <span className="numText">
            {Number(learners).toLocaleString()} learners enrolled
          </span>
        </div>
      )}

      <h1 className="titleText" style={{ fontWeight: 400, marginBottom: "20px" }}>
        {title}
      </h1>

      <div
        className="tempBox d-flex justify-content-between align-items-center mb-3"
        style={{
          background: "#fff2e3",
          border: "1px solid #f6c28b",
          padding: "12px",
          borderRadius: "6px"
        }}
      >
        <div className="leftSide">
          Download Cheat Sheet – Quick reference
        </div>

        <button
          className="btn btn-sm btn1"
          style={{ background: "#F7931E", color: "#fff" }}
        >
          Download
        </button>
      </div>

      <div className="btnRow mb-4">
        <button
          className="btn btn-dark btnMain me-2"
          style={{ borderRadius: "20px", padding: "6px 20px" }}
        >
          Try for free
        </button>

        <button
          className="btn btnAlt"
          style={{
            border: "1px solid black",
            borderRadius: "20px",
            padding: "6px 20px"
          }}
        >
          Add to wishlist
        </button>
      </div>

      <div className="dataWrap row">
        {stats?.map((stat) => (
          <div key={stat.id} className="cardX col-md-6 mb-3">

            <div
              className="innerBox d-flex"
              style={{
                border: "1px solid #eee",
                padding: "15px",
                borderRadius: "6px"
              }}
            >
              <img
                src="/assests/practise_test.png"
                width="60"
                style={{ marginRight: "10px" }}
              />

              <div className="textSide">
                <div className="labelSmall" style={{ fontSize: "13px", color: "#777" }}>
                  {stat.label}
                </div>
                <div className="valBig">
                  {stat.value}
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

      <div
        className="lastBox"
        style={{
          background: "#fff2e3",
          border: "1px solid #f6c28b",
          padding: "15px",
          borderRadius: "6px",
          marginTop: "20px"
        }}
      >
        <div className="headSmall" style={{ marginBottom: "10px", fontWeight: 500 }}>
          Latest updates
        </div>

        <div className="row small">
          <div className="col-md-6 mb-2">
            <span style={{ color: "#F55B43" }}>✓</span> Course version updated
          </div>
          <div className="col-md-6 mb-2">
            <span style={{ color: "#F55B43" }}>✓</span> New PT questions
          </div>
          <div className="col-md-6 mb-2">
            <span style={{ color: "#F55B43" }}>✓</span> Cheat sheet refreshed
          </div>
          <div className="col-md-6 mb-2">
            <span style={{ color: "#F55B43" }}>✓</span> 3 new tests added
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;