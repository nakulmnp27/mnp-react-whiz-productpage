import { useMemo } from "react";
import "./HeroSection.css";

type Stat = {
  id: string;
  label: string;
  value: string;
};

type Pricing = {
  id: string;
  title: string;
  sellingPrice: number;
  offerPrice: number;
  isticked: boolean;
};

type Props = {
  title: string;
  rating?: number;
  learners?: string;
  updatedAt: string;
  stats: Stat[];
  pricing: Pricing[];
};

const HeroSection = ({
  title,
  learners,
  rating,
  updatedAt,
  stats,
  pricing,
}: Props) => {

  const dateVal = useMemo(() => {
    if (!updatedAt) return "";
    return new Date(updatedAt).toLocaleDateString("en-GB");
  }, [updatedAt]);

  let totalSelling = 0
  let totalOffer = 0

  if (pricing) {
    for (let i = 0; i < pricing.length; i++) {
      totalSelling += pricing[i].sellingPrice
      totalOffer += pricing[i].offerPrice
    }
  }
  const discountPercent = totalSelling ? Math.round(((totalSelling - totalOffer) / totalSelling) * 100): 0;
  return (
    <>
    {/* <div className="wraper-logo">
      <img src="/wrapper-logo.png" alt="" />
    </div> */}
    <div className="test container-lg bg-white rounded-4 shadow-sm p-4 h-100">
    <div className="hero-wrapper container py-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="review-box d-flex align-items-center mb-4">
            {rating && (
              <div className="review-badge">
                {rating} ★★★★★
              </div>
            )}

            <div className="icon-text text-muted d-flex align-items-center">
              <img src="/calender.png" width="14" className="icon calendar-icon"/>
              LAST UPDATED ON {dateVal}
            </div>
          </div>

          {learners && (
            <div className="info d-flex align-items-center mb-4">
              <img src="/graduation_hat.png" width="40" className="hat-icon"/>
              <span className="learners"> {Number(learners).toLocaleString()} Learners </span>
            </div>
          )}
          <h1 className="course-title"> {title} </h1>
          <div className="banner-box d-flex justify-content-between align-items-center mb-4">
            <div>
              Download Cheat Sheet – Quick reference
            </div>

            <button id="download-btn" className="btn btn-sm download-btn"> Download </button>
          </div>

          <div className="action-buttons mb-4">
            <button className="fir-btn btn btn-dark me-2"> Try for free </button>
            <button className="sec-btn btn"> Add to wishlist </button>
          </div>
          <div className="stats-grid row">
            {stats?.map((stat) => (
              <div key={stat.id} className="col-md-6 mb-3">

                <div className="grid-box d-flex">
                  <img src="/practise_test.png" width="100" className="test-icon"/>
                  <div className="grid-text align-content-center">
                    <div className="grid-text1">
                      {stat.label}
                    </div>

                    <div className="grid-text2">
                      {stat.value}
                    </div>
                  </div>
                </div>
              </div>))}
          </div>

          <div className="last-updated">
            <h3 className="update-title">
              Last Updated
            </h3>
            <div className="row small">
              <div className="col-md-6 mb-2">
                <span className="tick">✓</span> Course version updated
              </div>

              <div className="col-md-6 mb-2">
                <span className="tick">✓</span> New PT questions
              </div>
              <div className="col-md-6 mb-2">
                <span className="tick">✓</span> Cheat sheet refreshed
              </div>
              <div className="col-md-6 mb-2">
                <span className="tick">✓</span> 3 new tests added
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className=" rounded-4 border border-warning shadow-sm bg-light d-flex flex-column">
            <p className="p-0 rounded-top-4 pricing-heading text-center mb-2"> This Course is included in these plans </p>
            <div className="pricing-color ps-2 pb-2">
            <img src="/video-dup.png" alt="intro video" className="img-fluid rounded-3 mb-3" />
            <h3 className="text-center fw-semibold"> Get Whizlabs Subscription </h3>
            <p className="text-center text-muted small mb-3"> Access 250+ cloud courses with Practice tests + Hands-on Labs, Sandboxes and more!!</p>
            <button className="side-btn-1 btn rounded-pill"> Start Subscription </button>
            <p className="d-flex justify-content-center align-items-baseline gap-2 mb-3">
              Start at <b>${Math.min(...pricing.map(p => p.offerPrice))}</b>
              <small className="text-muted">/ Month</small>
            </p>

            <div className="bg-white rounded-4 p-3 border">
              <div className="row g-3">

                {pricing?.map((plan) => (
                  <div className="col-6" key={plan.id}>
                    <div className={`pricing-card d-flex justify-content-between align-items-center 
                    ${plan.isticked ? "pricing-active" : ""}`} >
                      <div className="pricing-left d-flex flex-column">
                        <div className="pricing-title fw-semibold text-capitalize">
                          {plan.title}
                        </div>
                        <div className="pricing-price-row d-flex align-items-center">

                          <span className="pricing-offer">
                            ${plan.offerPrice}
                          </span>

                          <span className="pricing-selling text-decoration-line-through ms-2">
                            ${plan.sellingPrice}
                          </span>

                        </div>
                      </div>
                      {plan.isticked && (
                        <div className="pricing-tick d-flex align-items-center justify-content-center">
                          ✓
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex align-items-center gap-3 mt-4 total-row">

                <div className="total-row-items d-flex align-items-center justify-content-between ">
                  <span >Total </span>
                  <span>${totalOffer.toFixed(2)}</span>
                  <span className="muted-items text-muted text-decoration-line-through ms-2">
                  <span>${totalSelling.toFixed(2)}</span>
                  </span>
                </div>

                <div className="discount-badge">
                 ${discountPercent}%
                </div>

              </div>
            </div>
            <button className="cart-button mt-2">
              Add to Cart
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default HeroSection;