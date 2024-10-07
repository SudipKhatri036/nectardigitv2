import "./VideoModal.css";

function VideoModal({ setIsModalOpen }) {
  return (
    <div className="video-modal">
      <button
        className="btn btn-modal-close"
        onClick={() => setIsModalOpen(false)}
      >
        X
      </button>
      <div className="video-modal-cont">
        <iframe
          width="100%"
          height="350"
          src="https://www.youtube.com/embed/UbEYoztJ_0I?si=22uZfL4kO6NlaKD1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerppolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoModal;
