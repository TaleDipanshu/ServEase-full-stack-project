import React, { useState, useEffect, useRef } from 'react'


const cards = [
  { id: 1, title: 'Service 1', content: '$100', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Service 2', content: '$200', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Service 3', content: '$300', image: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Service 4', content: '$400', image: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Service 5', content: '$500', image: 'https://via.placeholder.com/150' },
]

export default function ServiceCarousel() {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const animate = () => {
      if (isHovered) return
      container.scrollLeft += 1
      if (container.scrollLeft >= (container.scrollWidth - container.clientWidth)) {
        container.scrollLeft = 0
      }
    }

    const animation = setInterval(animate, 20)

    return () => clearInterval(animation)
  }, [isHovered])

  return (
    <div className="w-full overflow-hidden bg-white p-4">
      <div className='flex justify-center items-center '>
          <h1 className='text-green-900 text-4xl md:text-5xl font-bold mb-8' >Our Services</h1>
      </div>
      <div
        ref={containerRef}
        className="flex space-x-4 overflow-x-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...cards, ...cards].map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md p-4 transition-transform duration-300 hover:scale-105"
          >
            <img 
              src={card.image} 
              alt={card.title} 
              className="w-full h-40 object-cover rounded-md mb-4" 
            />
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
