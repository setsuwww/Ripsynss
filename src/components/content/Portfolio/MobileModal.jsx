import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ModalViewer({ isOpen, onClose, onNext, onPrev, project }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <button className="absolute top-4 right-4 text-white text-3xl" onClick={onClose}><X /></button>
      <button className="absolute left-4 text-white text-2xl" onClick={onPrev}><ChevronLeft /></button>
      <button className="absolute right-4 text-white text-2xl" onClick={onNext}><ChevronRight /></button>
      <LazyLoadImage src={project.image} alt={project.image} loading="lazy" effect="blur" className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg" />
    </div>
  )
}
