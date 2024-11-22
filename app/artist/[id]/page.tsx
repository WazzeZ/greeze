import { AboutSection } from "@/components/artist/about-section";
import { BandMembers } from "@/components/artist/band-members";
import { ContactSection } from "@/components/artist/contact-section";
import { HeroSection } from "@/components/artist/hero-section";
import { LatestReleases } from "@/components/artist/latest-releases";
import { PhotoGallery } from "@/components/artist/photo-gallery";
import { PostFeed } from "@/components/artist/post-feed";
import { TourDates } from "@/components/artist/tour-dates";
import { VideoSection } from "@/components/artist/video-section";
import { mockArtists } from "@/data/mock-artists";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ArtistProfilePage({ params }: PageProps) {
  const { id } = params;
  const artist = mockArtists.find((a) => a.id === id);

  if (!artist) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <HeroSection artist={artist} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <AboutSection />
          <LatestReleases />
          <VideoSection />
          <PhotoGallery />
        </div>
        <div className="space-y-8">
          <TourDates />
          <BandMembers />
          <PostFeed />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return mockArtists.map((artist) => ({
    id: artist.id,
  }));
}