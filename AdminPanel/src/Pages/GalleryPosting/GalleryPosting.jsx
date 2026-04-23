import React, { useState } from "react";
import "./GalleryPosting.css";

const GalleryPosting = () => {
  // PHOTO STATE
  const [photoTitle, setPhotoTitle] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [photos, setPhotos] = useState([]);

  // VIDEO STATE
  const [videoTitle, setVideoTitle] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [videos, setVideos] = useState([]);

  // ADD PHOTO
  const handleAddPhoto = (e) => {
    e.preventDefault();
    if (!photoTitle || !photoFile) return;

    const newPhoto = {
      id: Date.now(),
      title: photoTitle,
      image: URL.createObjectURL(photoFile),
    };

    setPhotos([...photos, newPhoto]);
    setPhotoTitle("");
    setPhotoFile(null);
  };

  // DELETE PHOTO
  const handleDeletePhoto = (id) => {
    setPhotos(photos.filter((p) => p.id !== id));
  };

  // ADD VIDEO
  const handleAddVideo = (e) => {
    e.preventDefault();
    if (!videoTitle || !videoURL) return;

    const newVideo = {
      id: Date.now(),
      title: videoTitle,
      url: videoURL,
    };

    setVideos([...videos, newVideo]);
    setVideoTitle("");
    setVideoURL("");
  };

  // DELETE VIDEO
  const handleDeleteVideo = (id) => {
    setVideos(videos.filter((v) => v.id !== id));
  };

  return (
    <div className="galleryPosting">
      
      {/* PHOTO SECTION */}
      <h2 className="galleryPosting__heading">Photo Posting</h2>

      <div className="galleryPosting__row">
        {/* LEFT FORM */}
        <form className="galleryPosting__card" onSubmit={handleAddPhoto}>
          <h3>Upload Photo</h3>

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

        {/* RIGHT TABLE */}
        <div className="galleryPosting__card">
          <h3>Photo List</h3>

          <div className="tableWrapper">
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
                {photos.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="empty">
                      No Photos Added
                    </td>
                  </tr>
                ) : (
                  photos.map((p, index) => (
                    <tr key={p.id}>
                      <td>{index + 1}</td>
                      <td>{p.title}</td>
                      <td>
                        <img src={p.image} alt="" />
                      </td>
                      <td>
                        <button
                          className="delete"
                          onClick={() => handleDeletePhoto(p.id)}
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

      {/* VIDEO SECTION */}
      <h2 className="galleryPosting__heading">Video Posting</h2>

      <div className="galleryPosting__row">
        {/* LEFT FORM */}
        <form className="galleryPosting__card" onSubmit={handleAddVideo}>
          <h3>Upload Video</h3>

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

        {/* RIGHT TABLE */}
        <div className="galleryPosting__card">
          <h3>Video List</h3>

          <div className="tableWrapper">
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
                {videos.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="empty">
                      No Videos Added
                    </td>
                  </tr>
                ) : (
                  videos.map((v, index) => (
                    <tr key={v.id}>
                      <td>{index + 1}</td>
                      <td>{v.title}</td>
                      <td>
                        <a href={v.url} target="_blank" rel="noreferrer">
                          View
                        </a>
                      </td>
                      <td>
                        <button
                          className="delete"
                          onClick={() => handleDeleteVideo(v.id)}
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

    </div>
  );
};

export default GalleryPosting;