const SyVideo = () => {
  const videos = [
    {
      src: "https://res.cloudinary.com/dxswouxj5/video/upload/v1729434322/WhatsApp_Video_2024-10-16_at_10.33.08_AM_wh0mte.mp4",
      alt: "SY Fashion Craft ",
    },
    {
      src: "https://res.cloudinary.com/dxswouxj5/video/upload/v1729434288/WhatsApp_Video_2024-10-16_at_10.32.48_AM_euvktl.mp4",
      alt: "SY Fashion Craft ",
    },
    {
      src: "https://res.cloudinary.com/dxswouxj5/video/upload/v1729434125/WhatsApp_Video_2024-10-17_at_7.01.41_PM_xticfi.mp4",
      alt: "SY Fashion Craft ",
    },
  ];

  return (
    <div className="my-12">
      <h1 className="md:text-4xl text-2xl text-center mx-8">
        From Concept to Creation: Watch Us Work
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-8 mt-10 mx-20 my-6 h-[50vh]">
        {videos.map((video, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 relative rounded-lg overflow-hidden shadow-lg  "
          >
            <video
              controls
              muted
              className="w-full h-full object-cover rounded-lg"
            >
              <source src={video.src} type="video/mp4" />
            </video>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center py-3">
              {video.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyVideo;
