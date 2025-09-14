import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import galleryImage from "@/assets/travel-gallery.jpg";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Sample gallery images
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Mountain adventure in Nepal",
      location: "Nepal"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Beach sunset in Thailand",
      location: "Thailand"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Greek island paradise",
      location: "Greece"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1539650116574-75c0c6930311?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Moroccan market adventure",
      location: "Morocco"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1520637736862-4d197d17c0a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "European castle exploration",
      location: "Eastern Europe"
    },
    {
      id: 6,
      src: galleryImage,
      alt: "Travel destination collage",
      location: "Multiple"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Desert adventure",
      location: "Jordan"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "City exploration",
      location: "Vietnam"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Local cuisine experience",
      location: "India"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-section">Photo & Video Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A glimpse into our adventures around the world. Every photo tells a story, 
            every destination holds a memory worth sharing.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item relative overflow-hidden rounded-xl aspect-square group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">{image.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more? Follow us on social media for daily travel updates!
          </p>
          <div className="flex justify-center gap-4">
            <Button className="btn-adventure">
              Follow on Instagram
            </Button>
            <Button variant="outline" className="btn-outline-warm">
              Watch on YouTube
            </Button>
          </div>
        </div>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-6xl w-full p-0 bg-black border-none">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>
              
              {selectedImage !== null && (
                <>
                  <img
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={goToNext}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
                    <p className="text-lg font-semibold">{galleryImages[selectedImage].location}</p>
                    <p className="text-sm opacity-75">
                      {selectedImage + 1} of {galleryImages.length}
                    </p>
                  </div>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PhotoGallery;