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

        <div className="space-y-8">
          {/* Placeholder for drone video - replace src with actual video URL */}
          <div className="aspect-video rounded-lg overflow-hidden bg-muted relative group">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
              <svg
                className="w-16 h-16 mb-4 opacity-40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="font-body text-sm tracking-wide">
                Dronevideo — indsæt YouTube/Vimeo embed eller video-fil
              </p>
            </div>
            {/*
              Udskift ovenstående placeholder med en af disse:
              
              YouTube embed:
              <iframe
                src="https://www.youtube.com/embed/DIN_VIDEO_ID"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Dronevideo af ejendommen"
              />

              Eller lokal video:
              <video controls className="w-full h-full object-cover">
                <source src="/video/drone.mp4" type="video/mp4" />
              </video>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
