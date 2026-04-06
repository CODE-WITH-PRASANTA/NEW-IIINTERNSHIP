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

      {/* ================= PHOTO ================= */}
      <div className="media-section">
        <h2>Media Posting </h2>

        <div className="media-grid">
          {/* FORM BOX */}
          <div className="media-card">
            <h3>Upload Photo</h3>
            <form onSubmit={handlePhotoSubmit}>
              <input
                type="text"
                placeholder="Title"
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

          {/* TABLE BOX */}
          <div className="media-card">
            <h3>Photo List</h3>
            <table>
              <thead>
                <tr>
                  <th>Sl.No</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {photos.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.title}</td>
                    <td><img src={item.image} alt="" /></td>
                    <td>
                      <button className="edit">Edit</button>
                      <button onClick={() => handleDelete(item.id, "photo")} className="delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ================= VIDEO ================= */}
      <div className="media-section">
        <h2>Video Posting</h2>

        <div className="media-grid">
          <div className="media-card">
            <h3>Upload Video</h3>
            <form onSubmit={handleVideoSubmit}>
              <input
                type="text"
                placeholder="Title"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
              />

              <input
                type="text"
                placeholder="Video URL"
                value={videoURL}
                onChange={(e) => setVideoURL(e.target.value)}
              />

              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="media-card">
            <h3>Video List</h3>
            <table>
              <thead>
                <tr>
                  <th>Sl.No</th>
                  <th>Title</th>
                  <th>URL</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {videos.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.url}</td>
                    <td>
                      <button className="edit">Edit</button>
                      <button onClick={() => handleDelete(item.id, "video")} className="delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ================= PROJECT ================= */}
      <div className="media-section">
        <h2>Project Posting</h2>

        <div className="media-grid">
          <div className="media-card">
            <h3>Add Project</h3>
            <form onSubmit={handleProjectSubmit}>
              <input
                type="text"
                placeholder="Title"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
              />

              <textarea
                placeholder="Description"
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

          <div className="media-card">
            <h3>Project List</h3>
            <table>
              <thead>
                <tr>
                  <th>Sl.No</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.title}</td>
                    <td><img src={item.image} alt="" /></td>
                    <td>
                      <button className="edit">Edit</button>
                      <button onClick={() => handleDelete(item.id, "project")} className="delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MediaPosting;