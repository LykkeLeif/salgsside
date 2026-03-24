const videos = [
  {
    title: "Overflyvning af ejendommen",
    vimeoId: "1176702125",
  },
  {
    title: "Overflyvning af markerne",
    vimeoId: "1176703530",
  },
];

const VideoSection = () => {
  return (
    <section id="video" className="section-padding bg-card">
      <div className="container-narrow">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-warm-gray text-center mb-3">
          Drone-optagelser
        </p>
        <h2 className="text-display text-foreground text-center mb-4">
          Se ejendommen fra luften
        </h2>
        <div className="divider-ornament mb-12 md:mb-16" />

        <div className="space-y-10">
          {videos.map((video) => (
            <div key={video.vimeoId}>
              <h3 className="font-body text-lg text-foreground mb-4 text-center">
                {video.title}
              </h3>
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <iframe
                  src={`https://player.vimeo.com/video/${video.vimeoId}?title=0&byline=0&portrait=0`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
