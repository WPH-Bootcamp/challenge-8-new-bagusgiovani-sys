type Props = {
  videoKey: string;
  onClose: () => void;
};

const TrailerModal = ({ videoKey, onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-xl"
      >
        ✕
      </button>

      <div className="w-[90%] max-w-4xl aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          className="w-full h-full"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default TrailerModal;
