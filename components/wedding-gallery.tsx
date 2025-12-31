"use client"
import Image from "next/image"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react"

interface Photo {
  src: string
  caption: string
  orientation: "portrait" | "landscape"
}

const photos: Photo[] = [
  { src: "/couple1.jpg", caption: "The First Look", orientation: "landscape" },
  { src: "/couple2.jpg", caption: "The Ceremony", orientation: "landscape" },
  { src: "/couple3.jpg", caption: "Bridal Portrait", orientation: "portrait" },
  { src: "/couple4.jpg", caption: "The Rings", orientation: "portrait" },
  { src: "/couple5.jpg", caption: "First Dance", orientation: "landscape" },
  { src: "/couple6.jpg", caption: "Groom's Portrait", orientation: "portrait" },
  { src: "/couple7.jpg", caption: "The Toast", orientation: "landscape" },
  { src: "/couple8.jpg", caption: "Golden Hour", orientation: "portrait" },
  { src: "/couple1.jpg", caption: "The Cake", orientation: "portrait" },
  
]

export function WeddingGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + photos.length) % photos.length)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % photos.length)
    }
  }



  // 1. Create the animated version of the Next.js Image component
const MotionImage = motion.create(Image);

  return (
    <>
      {/* Masonry Grid Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative mb-4 group cursor-pointer break-inside-avoid"
            onClick={() => openLightbox(index)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow">
              {/* <motion.img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-auto block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              /> */}

              <MotionImage
                src={photo.src}
                alt={photo.caption}
                width={'300'}
                height={'300'}
                className="w-full h-auto block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-2"
                transition={{ duration: 0.3 }}
              >
                <Heart className="w-8 h-8 text-white fill-white" />
                <span className="text-white font-medium text-lg">View Photo</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selectedImage].src || "/placeholder.svg"}
                alt={photos[selectedImage].caption}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg"
              >
                <p className="text-white text-lg font-medium text-center">{photos[selectedImage].caption}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
