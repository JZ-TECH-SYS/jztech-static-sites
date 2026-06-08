import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import perfil from '@/assets/img/eu.webp'
import perfil2 from '@/assets/img/eu2.webp'
import perfil3 from '@/assets/img/eu3.webp'
import perfil4 from '@/assets/img/eu4.webp'
import perfil5 from '@/assets/img/eu5.webp'

const images = [perfil, perfil2, perfil3, perfil4, perfil5]

export function ImageCarousel() {
  const [sliderInstance, setSliderInstance] = useState<any>(null)

  useEffect(() => {
    if (!sliderInstance) return
    const interval = setInterval(() => {
      sliderInstance.next()
    }, 3500)
    return () => clearInterval(interval)
  }, [sliderInstance])

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    created(instance) {
      setSliderInstance(instance)
    },
  })

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Carrossel */}
      <div ref={ref} className="keen-slider max-w-xs md:max-w-sm rounded-lg overflow-hidden shadow-md">
        {images.map((src, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <img
              src={src}
              alt={`Foto ${index + 1} de João Vitor Nascimento`}
              className="rounded-md w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <div className="flex gap-4 justify-center pt-2">
        <button
          onClick={() => sliderInstance?.prev()}
          className="p-2 rounded-full hover:bg-muted transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => sliderInstance?.next()}
          className="p-2 rounded-full hover:bg-muted transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
