import React, { useMemo, useState } from "react";
import "./FaqMain.css";

const FaqMain = () => {
  const base = "faqMain";

  const sections = useMemo(
    () => [
      {
        id: "general",
        tab: "General Questions",
        title: "General Questions",
        items: [
          {
            q: "What is this course about?",
            a: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
          },
          {
            q: "Who is this course for?",
            a: "This course is designed for beginners, students, professionals, and learners who want to build practical skills with guided lessons and easy-to-follow modules.",
          },
          {
            q: "How do I enroll in the course?",
            a: "You can enroll by selecting your preferred course package, completing the registration process, and making the payment through the available secure payment options.",
          },
          {
            q: "Is there a deadline to enroll?",
            a: "Most courses offer flexible enrollment, but some special batches or live sessions may have limited seats and deadline-based registration windows.",
          },
        ],
      },
      {
        id: "structure",
        tab: "Course Structure",
        title: "Course Structure & Access",
        items: [
          {
            q: "How is the course structured?",
            a: "The course is structured into modules, lessons, assignments, and guided learning materials so students can progress step by step in a clear format.",
          },
          {
            q: "How long does the course take?",
            a: "The duration depends on the course type and learning pace. Some courses can be completed within a few weeks, while advanced programs may take longer.",
          },
          {
            q: "Is the course self-paced or scheduled?",
            a: "Many programs are self-paced for flexibility, while selected premium or mentor-led batches may include scheduled sessions and live guidance.",
          },
          {
            q: "Do I need to be online at a specific time?",
            a: "Not always. Recorded sessions can be accessed anytime, but live interactive sessions or mentoring classes may require attendance at scheduled times.",
          },
        ],
      },
      {
        id: "certification",
        tab: "Certification",
        title: "Certification & Benefits",
        items: [
          {
            q: "Will I receive a certificate?",
            a: "Yes, eligible courses provide a certificate of completion after you successfully finish the required lessons, assessments, or projects.",
          },
          {
            q: "Is the certificate recognized?",
            a: "The certificate is valuable for portfolios, resumes, and showcasing your course completion, especially when supported by projects and practical learning.",
          },
        ],
      },
      {
        id: "payments",
        tab: "Payments",
        title: "Payments & Refunds",
        items: [
          {
            q: "Is this course free or paid?",
            a: "We offer both free and paid learning options. Premium courses include extended modules, support features, and additional learning resources.",
          },
          {
            q: "Do you offer refunds?",
            a: "Refund availability depends on the course policy. Please review the payment and refund terms before purchasing a program.",
          },
        ],
      },
      {
        id: "support",
        tab: "Support",
        title: "Support & Assistance",
        items: [
          {
            q: "What if I have questions during the course?",
            a: "You can reach out through support channels, contact forms, or mentor support if available in your enrolled program.",
          },
          {
            q: "Is there a community or discussion forum?",
            a: "Yes, selected programs include community learning spaces or discussion groups where students can connect, ask doubts, and share ideas.",
          },
        ],
      },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState("general");
  const [openItems, setOpenItems] = useState({
    general: 0,
    structure: null,
    certification: null,
    payments: null,
    support: null,
  });

  const activeSection =
    sections.find((section) => section.id === activeTab) || sections[0];

  const handleTabChange = (id) => {
    setActiveTab(id);
  };

  const handleToggle = (sectionId, index) => {
    setOpenItems((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId] === index ? null : index,
    }));
  };

  return (
    <div className={base}>
      <section className={`${base}__hero`}>
        <div className={`${base}__heroPattern`} />
        <div className={`${base}__heroGlow`} />

        <div className={`${base}__heroInner`}>
          <div className={`${base}__sparkles`}>
            <span className={`${base}__spark ${base}__spark--big`}>✦</span>
            <span className={`${base}__spark ${base}__spark--small`}>✦</span>
          </div>

          <h1 className={`${base}__title`}>FAQ’s</h1>

          <p className={`${base}__subtitle`}>
            Best online education platforms offer flexible learning,
            <br />
            quality courses, and expert instructors.
          </p>

          <div className={`${base}__tabWrap`}>
            <div className={`${base}__tabs`} role="tablist" aria-label="FAQ Tabs">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  className={`${base}__tab ${
                    activeTab === section.id ? `${base}__tab--active` : ""
                  }`}
                  onClick={() => handleTabChange(section.id)}
                >
                  {section.tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`${base}__bottomShape`} />
      </section>

      <section className={`${base}__content`}>
        <div className={`${base}__contentInner`}>
          <div className={`${base}__faqPanel`}>
            <h2 className={`${base}__sectionTitle`}>{activeSection.title}</h2>

            <div className={`${base}__accordionList`}>
              {activeSection.items.map((item, index) => {
                const isOpen = openItems[activeSection.id] === index;

                return (
                  <div
                    key={`${activeSection.id}-${index}`}
                    className={`${base}__accordionItem ${
                      isOpen ? `${base}__accordionItem--open` : ""
                    }`}
                  >
                    <button
                      type="button"
                      className={`${base}__accordionHeader ${
                        isOpen ? `${base}__accordionHeader--open` : ""
                      }`}
                      onClick={() => handleToggle(activeSection.id, index)}
                      aria-expanded={isOpen}
                    >
                      <span className={`${base}__accordionQuestion`}>
                        {item.q}
                      </span>

                      <span
                        className={`${base}__accordionIcon ${
                          isOpen ? `${base}__accordionIcon--open` : ""
                        }`}
                      >
                        ▾
                      </span>
                    </button>

                    <div
                      className={`${base}__accordionBody ${
                        isOpen ? `${base}__accordionBody--open` : ""
                      }`}
                    >
                      <div className={`${base}__accordionAnswer`}>
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`${base}__cta`}>
            <h2 className={`${base}__ctaTitle`}>Get Started for Free</h2>
            <p className={`${base}__ctaText`}>
              Best online education platforms offer flexible learning, quality
              courses, and expert instructors.
            </p>

            <button type="button" className={`${base}__ctaButton`}>
              <span className={`${base}__ctaButtonText`}>Get Free Course</span>
              <span className={`${base}__ctaButtonIcon`}>✈</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqMain;