import React from "react";
import VideoHero from "../../Component/VideoHero/VideoHero";
import VideoPrice from "../../Component/VideoPrice/VideoPrice";
import VideoSection from "../../Component/VideoSection/VideoSection";
import "./CourseVideo.css";

const CourseVideo = () => {
  const base = "courseVideo";

  return (
    <div className={base}>
      <div className={`${base}__hero`}>
        <VideoHero />
      </div>

      <div className={`${base}__main`}>
        <aside className={`${base}__sidebar`}>
          <div className={`${base}__sidebarInner`}>
            <VideoPrice />
          </div>
        </aside>

        <section className={`${base}__content`}>
          <VideoSection />
        </section>
      </div>
    </div>
  );
};

export default CourseVideo;