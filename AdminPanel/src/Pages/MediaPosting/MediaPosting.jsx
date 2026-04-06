import React, { useState } from "react";
import "./MediaPosting.css";

const MediaPosting = () => {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [projects, setProjects] = useState([]);

  const [photoTitle, setPhotoTitle] = useState("");
  const [photoFile, setPhotoFile] = useState(null);

  const [videoTitle, setVideoTitle] = useState("");
  const [videoURL, setVideoURL] = useState("");

  const [projectTitle, setProjectTitle] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectImg, setProjectImg] = useState(null);

  // ================= HANDLERS =================
  const handlePhotoSubmit = (e) => {
    e.preventDefault();
    if (!photoTitle || !photoFile) return;

    setPhotos([
      ...photos,
      {
        id: Date.now(),
        title: photoTitle,
        image: URL.createObjectURL(photoFile),
      },
    ]);

    setPhotoTitle("");
    setPhotoFile(null);
  };

  const handleVideoSubmit = (e) => {
    e.preventDefault();
    if (!videoTitle || !videoURL) return;

    setVideos([
      ...videos,
      { id: Date.now(), title: videoTitle, url: videoURL },
    ]);

    setVideoTitle("");
    setVideoURL("");
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    if (!projectTitle || !projectDesc || !projectImg) return;

    setProjects([
      ...projects,
      {
        id: Date.now(),
        title: projectTitle,
        desc: projectDesc,
        image: URL.createObjectURL(projectImg),
      },
    ]);

    setProjectTitle("");
    setProjectDesc("");
    setProjectImg(null);
  };

  const handleDelete = (id, type) => {
    if (type === "photo") setPhotos(photos.filter((i) => i.id !== id));
    if (type === "video") setVideos(videos.filter((i) => i.id !== id));
    if (type === "project") setProjects(projects.filter((i) => i.id !== id));
  };

  return (
    <div className="media-container">

      {/* ========= PHOTO ========= */}
      <section className="media-section">
        <h2 className="section-main-title">Photo Posting</h2>

        <div className="media-grid">
          {/* FORM */}
          <div className="media-card">
            <h3 className="card-title">Upload Photo</h3>
            <form onSubmit={handlePhotoSubmit}>
              <input
                type="text"
                placeholder="Enter Title"
                value={photoTitle}
                onChange={(e) => setPhotoTitle(e.target.value)}
              />
              <input
                type="file"
                onChange={(e) => setPhotoFile(e.target.files[0])}
              />
              <button type="submit">Submit</button>
            </form>
          </div>

          {/* TABLE */}
          <div className="media-card table-card">
            <div className="table-header">
              <h3>Photo List</h3>
            </div>

            <div className="table-responsive">
              <table className="media-table">
                <thead>
                  <tr>
                    <th>Sl.No</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {photos.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="no-data">
                        No Photos Added
                      </td>
                    </tr>
                  ) : (
                    photos.map((item, i) => (
                      <tr key={item.id}>
                        <td>{i + 1}</td>
                        <td>{item.title}</td>
                        <td><img src={item.image} alt="" /></td>
                        <td>
                          <button className="btn edit">Edit</button>
                          <button
                            className="btn delete"
                            onClick={() => handleDelete(item.id, "photo")}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ========= VIDEO ========= */}
      <section className="media-section">
        <h2 className="section-main-title">Video Posting</h2>

        <div className="media-grid">
          <div className="media-card">
            <h3 className="card-title">Upload Video</h3>
            <form onSubmit={handleVideoSubmit}>
              <input
                type="text"
                placeholder="Enter Title"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Video URL"
                value={videoURL}
                onChange={(e) => setVideoURL(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="media-card table-card">
            <div className="table-header">
              <h3>Video List</h3>
            </div>

            <div className="table-responsive">
              <table className="media-table">
                <thead>
                  <tr>
                    <th>Sl.No</th>
                    <th>Title</th>
                    <th>URL</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {videos.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="no-data">
                        No Videos Added
                      </td>
                    </tr>
                  ) : (
                    videos.map((item, i) => (
                      <tr key={item.id}>
                        <td>{i + 1}</td>
                        <td>{item.title}</td>
                        <td className="url-cell">{item.url}</td>
                        <td>
                          <button className="btn edit">Edit</button>
                          <button
                            className="btn delete"
                            onClick={() => handleDelete(item.id, "video")}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ========= PROJECT ========= */}
      <section className="media-section">
        <h2 className="section-main-title">Project Posting</h2>

        <div className="media-grid">
          <div className="media-card">
            <h3 className="card-title">Add Project</h3>
            <form onSubmit={handleProjectSubmit}>
              <input
                type="text"
                placeholder="Enter Title"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
              />
              <textarea
                placeholder="Enter Description"
                value={projectDesc}
                onChange={(e) => setProjectDesc(e.target.value)}
              />
              <input
                type="file"
                onChange={(e) => setProjectImg(e.target.files[0])}
              />
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="media-card table-card">
            <div className="table-header">
              <h3>Project List</h3>
            </div>

            <div className="table-responsive">
              <table className="media-table">
                <thead>
                  <tr>
                    <th>Sl.No</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {projects.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="no-data">
                        No Projects Added
                      </td>
                    </tr>
                  ) : (
                    projects.map((item, i) => (
                      <tr key={item.id}>
                        <td>{i + 1}</td>
                        <td>{item.title}</td>
                        <td><img src={item.image} alt="" /></td>
                        <td>
                          <button className="btn edit">Edit</button>
                          <button
                            className="btn delete"
                            onClick={() => handleDelete(item.id, "project")}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MediaPosting;