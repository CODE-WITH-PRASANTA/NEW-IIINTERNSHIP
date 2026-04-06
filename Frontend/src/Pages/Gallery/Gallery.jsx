import React from 'react'
import MediaPhoto from '../../Component/MediaPhoto/MediaPhoto';
import VideoGallery from '../../Component/VideoGallery/VideoGallery';
import OnlineMedia from '../../Component/OnlineMedia/OnlineMedia';
import GalleryBD from '../../Component/GalleryBD/GalleryBD';

const Gallery = () => {
  return (
    <div>
        <GalleryBD/>
        <MediaPhoto/>
        <VideoGallery/>
        <OnlineMedia/>
    </div>

  )
}

export default Gallery