import "./faq-section.css"

type Faq = {
  id: string
  question: string
  answer: string
}

type Props = {
  faqs: Faq[]
}

export default function FAQSection({ faqs }: Props) {
  return (
    <section className="faq container-fluid bg-white" id="faq">
      <h2 className="text-center pt-5 fw-light">Frequently Asked Questions</h2>
      <div className="container mt-5">
        <div className="row g-4">
          {faqs.map((item) => (
            <div key={item.id} className="col-md-6">
              <div className="faq-card d-flex align-items-center gap-3 rounded border p-3">
                <img
                  className="faq-search-icon flex-shrink-0"
                  src="/search_faq.png"
                  alt="search-icon"
                />
                <p className="faq-question mb-0 flex-grow-1">
                  {item.question}
                </p>
                <img
                  className="faq-arrow ms-auto flex-shrink-0"
                  src="/arrow-down.png"
                  alt="arrow"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center p-4 my-4">
        <button className="see-more-btn">
          See More
        </button>
      </div>
    </section>
  )
}