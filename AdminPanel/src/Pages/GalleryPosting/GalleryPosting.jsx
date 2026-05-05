import React, { useState, useEffect, useRef } from "react";
import API, { ImageUrl } from "../../api/axios";
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

  // LOADING STATE
  const [loading, setLoading] = useState(false);

  // FILE REF (to reset input)
  const fileRef = useRef();

  /* ================= FETCH DATA ================= */
  const fetchGallery = async () => {
    try {
      const res = await API.get("/galleryposting");

      const photoData = res.data.data.filter((i) => i.type === "photo");
      const videoData = res.data.data.filter((i) => i.type === "video");

      setPhotos(photoData);
      setVideos(videoData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  /* ================= ADD PHOTO ================= */
  const handleAddPhoto = async (e) => {
    e.preventDefault();

    if (!photoTitle.trim() || !photoFile) return;

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", photoTitle);
      formData.append("image", photoFile);

      await API.post("/galleryposting/photo", formData);

      setPhotoTitle("");
      setPhotoFile(null);
      fileRef.current.value = "";

      fetchGallery();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= DELETE PHOTO ================= */
  const handleDeletePhoto = async (id) => {
    try {
      await API.delete(`/galleryposting/${id}`);
      fetchGallery();
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= ADD VIDEO ================= */
  const handleAddVideo = async (e) => {
    e.preventDefault();

    if (!videoTitle.trim() || !videoURL.trim()) return;

    try {
      setLoading(true);

      await API.post("/galleryposting/video", {
        title: videoTitle,
        videoUrl: videoURL,
      });

      setVideoTitle("");
      setVideoURL("");

      fetchGallery();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= DELETE VIDEO ================= */
  const handleDeleteVideo = async (id) => {
    try {
      await API.delete(`/galleryposting/${id}`);
      fetchGallery();
    } catch (err) {
      console.error(err);
    }
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
            ref={fileRef}
            onChange={(e) => setPhotoFile(e.target.files[0])}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Uploading..." : "Submit"}
          </button>
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
                    <tr key={p._id}>
                      <td>{index + 1}</td>
                      <td>{p.title}</td>
                      <td>
                        <img
                          src={ImageUrl(p.image)}
                          alt=""
                          style={{ width: "80px", borderRadius: "6px" }}
                        />
                      </td>
                      <td>
                        <button
                          className="delete"
                          onClick={() => handleDeletePhoto(p._id)}
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

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
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
                    <tr key={v._id}>
                      <td>{index + 1}</td>
                      <td>{v.title}</td>
                      <td>
                        <a href={v.videoUrl} target="_blank" rel="noreferrer">
                          View
                        </a>
                      </td>
                      <td>
                        <button
                          className="delete"
                          onClick={() => handleDeleteVideo(v._id)}
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