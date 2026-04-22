import React, { useMemo, useState } from "react";
import "./VideoSection.css";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaListUl, FaStar, FaUserAlt } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import API, { ImageUrl } from "../../api/axios";
import { useEffect } from "react";

const VideoSection = ({ searchTerm, category, filters = {} }) => {
  const base = "videoSection";
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("Default");
  const [activePage, setActivePage] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await API.get("/api/virtual-internships");
      setCourses(res.data.data);
      console.log("Fetched courses:", res.data.data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getEmbedUrl = (url) => {
    if (!url) return "";

    // youtube.com/watch?v=
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }

    // youtu.be/
    if (url.includes("youtu.be/")) {
      return url.replace("youtu.be/", "youtube.com/embed/");
    }

    // already embed
    if (url.includes("embed/")) {
      return url;
    }

    return "";
  };

  const sortedCourses = useMemo(() => {
    let data = [...courses];

    // 🔍 SEARCH
    if (searchTerm) {
      data = data.filter((item) =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // 📂 CATEGORY
    if (category) {
      data = data.filter(
        (item) =>
          item.category?._id === category ||
          item.category?.toString() === category,
      );
    }

    // 🎯 FILTERS (NEW)
    if (filters?.price?.length) {
      data = data.filter((item) => filters.price.includes(item.price));
    }

    if (filters?.language?.length) {
      data = data.filter((item) => filters.language.includes(item.language));
    }

    if (filters?.format?.length) {
      data = data.filter((item) => filters.format.includes(item.format));
    }

    // 🔽 SORTING
    const priceToNumber = (price) => {
      if (price === "Free") return 0;
      return Number(price?.replace("$", "") || 0);
    };

    if (sortBy === "Price Low") {
      return data.sort(
        (a, b) => priceToNumber(a.price) - priceToNumber(b.price),
      );
    }

    if (sortBy === "Price High") {
      return data.sort(
        (a, b) => priceToNumber(b.price) - priceToNumber(a.price),
      );
    }

    if (sortBy === "Title") {
      return data.sort((a, b) => a.title.localeCompare(b.title));
    }

    return data;
  }, [courses, sortBy, searchTerm, category, filters]);

  const itemsPerPage = viewMode === "grid" ? 6 : 2;
  const totalPages = Math.ceil(sortedCourses.length / itemsPerPage);

  const paginatedCourses = sortedCourses.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage,
  );

  const activeCourse =
    sortedCourses.find((c) => c._id === selectedCourse) ||
    sortedCourses[0] ||
    {};

  const renderStars = () => (
    <div className={`${base}__stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar key={star} className={`${base}__star`} />
      ))}
    </div>
  );

  const handleViewChange = (mode) => {
    setViewMode(mode);
    setActivePage(1);
  };

  if (loading) return <p>Loading courses...</p>;

  return (
    <section className={base}>
      <div className={`${base}__container`}>
        <div className={`${base}__topbar`}>
          <p className={`${base}__results`}>
            Showing {paginatedCourses.length} of {sortedCourses.length} results
          </p>

          <div className={`${base}__topbarRight`}>
            <div className={`${base}__viewSwitch`}>
              <button
                type="button"
                className={`${base}__viewBtn ${
                  viewMode === "grid" ? `${base}__viewBtn--active` : ""
                }`}
                onClick={() => handleViewChange("grid")}
                aria-label="Grid view"
              >
                <BsGrid3X3GapFill />
              </button>

              <button
                type="button"
                className={`${base}__viewBtn ${
                  viewMode === "list" ? `${base}__viewBtn--active` : ""
                }`}
                onClick={() => handleViewChange("list")}
                aria-label="List view"
              >
                <FaListUl />
              </button>
            </div>

            <div className={`${base}__sortWrap`}>
              <span className={`${base}__sortLabel`}>Short By:</span>
              <select
                className={`${base}__sortSelect`}
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setActivePage(1);
                }}
              >
                <option value="Default">Default</option>
                <option value="Price Low">Price Low</option>
                <option value="Price High">Price High</option>
                <option value="Title">Title</option>
              </select>
            </div>
          </div>
        </div>

        {viewMode === "grid" && (
          <>
            <div className={`${base}__featuredWrap`}>
              <div className={`${base}__featuredMain`}>
                <div className={`${base}__featuredImageWrap`}>
                  {activeCourse.youtubeLinks?.[0] ? (
                    <iframe
                      width="100%"
                      height="300"
                      src={getEmbedUrl(activeCourse.youtubeLinks[0])}
                      title="Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={
                        activeCourse.thumbnail
                          ? ImageUrl(activeCourse.thumbnail)
                          : "https://via.placeholder.com/600x300?text=No+Image"
                      }
                      alt={activeCourse.title}
                    />
                  )}
                </div>

                <div className={`${base}__featuredContent`}>
                  <h3 className={`${base}__featuredTitle`}>
                    {activeCourse.title}
                  </h3>

                  <div className={`${base}__ratingRow`}>
                    {renderStars()}
                    <span className={`${base}__ratingText`}>
                      {activeCourse.rating}
                    </span>
                  </div>
                  <div
                    className={`${base}__featuredDesc`}
                    dangerouslySetInnerHTML={{
                      __html: activeCourse.courseDescription || "",
                    }}
                  ></div>

                  <div className={`${base}__priceRow`}>
                    <span
                      className={`${base}__price ${
                        activeCourse.price === "Free"
                          ? `${base}__price--free`
                          : ""
                      }`}
                    >
                      {activeCourse.price}
                    </span>
                    <span className={`${base}__oldPrice`}>
                      {activeCourse.oldPrice}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`${base}__playlist`}>
                <div className={`${base}__playlistHead`}>
                  <h4 className={`${base}__playlistTitle`}>
                    {activeCourse.category?.title}
                  </h4>

                  <div className={`${base}__playlistLessons`}>
                    <FiFileText />
                    <span>{activeCourse.lectures}</span>
                  </div>
                </div>

                <div className={`${base}__playlistList`}>
                  {sortedCourses.slice(0, 6).map((item, index) => (
                    <button
                      type="button"
                      key={item._id}
                      className={`${base}__playlistItem ${
                        selectedCourse === item._id
                          ? `${base}__playlistItem--active`
                          : ""
                      }`}
                      onClick={() => setSelectedCourse(item._id)}
                    >
                      <span className={`${base}__playlistNumber`}>
                        {index + 1}.
                      </span>

                      <img
                        src={
                          item.thumbnail
                            ? ImageUrl(item.thumbnail)
                            : "https://via.placeholder.com/300x200?text=No+Image"
                        }
                        className={`${base}__cardImage`}
                      />

                      <div className={`${base}__playlistContent`}>
                        <h5 className={`${base}__playlistItemTitle`}>
                          {item.title}
                        </h5>
                        <p className={`${base}__playlistItemMeta`}>
                          {item.category?.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${base}__grid`}>
              {paginatedCourses.map((item) => (
                <article className={`${base}__card`} key={item._id}>
                  <div className={`${base}__cardImageWrap`}>
                    <img
                      src={
                        item.thumbnail
                          ? ImageUrl(item.thumbnail)
                          : "https://via.placeholder.com/300x200?text=No+Image"
                      }
                      className={`${base}__cardImage`}
                    />

                    <button
                      type="button"
                      className={`${base}__playBtn ${base}__playBtn--card`}
                      aria-label="Play video"
                    >
                      <span className={`${base}__playTriangle`}></span>
                    </button>
                  </div>

                  <div className={`${base}__cardContent`}>
                    <h3 className={`${base}__cardTitle`}>{item.title}</h3>

                    <div className={`${base}__ratingRow`}>
                      {renderStars()}
                      <span className={`${base}__ratingText`}>
                        {item.rating}
                      </span>
                    </div>
                    <div
                      className={`${base}__cardDescription`}
                      dangerouslySetInnerHTML={{
                        __html:
                          item.courseDescription ||
                          item.description ||
                          "No description available",
                      }}
                    ></div>

                    <div
                      className={`${base}__priceRow ${base}__priceRow--card`}
                    >
                      <span
                        className={`${base}__price ${
                          item.price === "Free" ? `${base}__price--free` : ""
                        }`}
                      >
                        {item.price}
                      </span>
                      <span className={`${base}__oldPrice`}>
                        {item.oldPrice}
                      </span>
                    </div>
                  </div>

                  <div className={`${base}__cardFooter`}>
                    <div className={`${base}__metaItem`}>
                      <FaUserAlt />
                      <span>{item.students}</span>
                    </div>

                    <div className={`${base}__metaItem`}>
                      <HiOutlineDocumentText />
                      <span>{item.lectures}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {viewMode === "list" && (
          <div className={`${base}__listWrap`}>
            {paginatedCourses.map((item) => (
              <article className={`${base}__listCard`} key={item._id}>
                <div className={`${base}__listImageWrap`}>
                  <img
                    src={ImageUrl(item.thumbnail)}
                    src={
                      item.thumbnail
                        ? ImageUrl(item.thumbnail)
                        : "https://via.placeholder.com/300x200?text=No+Image"
                    }
                    className={`${base}__listImage`}
                  />
                </div>

                <div className={`${base}__listContent`}>
                  <h3 className={`${base}__listTitle`}>{item.title}</h3>

                  <div className={`${base}__ratingRow`}>
                    {renderStars()}
                    <span className={`${base}__ratingText`}>{item.rating}</span>
                  </div>
                  <div
                    className={`${base}__listDescription`}
                    dangerouslySetInnerHTML={{
                      __html:
                        item.courseDescription ||
                        item.description ||
                        "No description available",
                    }}
                  ></div>

                  <div className={`${base}__priceRow ${base}__priceRow--list`}>
                    <span
                      className={`${base}__price ${
                        item.price === "Free" ? `${base}__price--free` : ""
                      }`}
                    >
                      {item.price}
                    </span>
                    <span className={`${base}__oldPrice`}>{item.oldPrice}</span>
                  </div>

                  <div className={`${base}__listFooter`}>
                    <div className={`${base}__metaItem`}>
                      <FaUserAlt />
                      <span>{item.students}</span>
                    </div>

                    <div className={`${base}__metaItem`}>
                      <HiOutlineDocumentText />
                      <span>{item.lectures}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className={`${base}__pagination`}>
          <button
            type="button"
            className={`${base}__pageBtn`}
            disabled={activePage === 1}
            onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              type="button"
              key={index + 1}
              className={`${base}__pageBtn ${
                activePage === index + 1 ? `${base}__pageBtn--active` : ""
              }`}
              onClick={() => setActivePage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            type="button"
            className={`${base}__pageBtn`}
            disabled={activePage === totalPages}
            onClick={() =>
              setActivePage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
