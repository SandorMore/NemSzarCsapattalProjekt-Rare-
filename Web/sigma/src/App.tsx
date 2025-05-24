import { useState } from 'react'
import './App.css'

const images = [
  {
    src: '/gallery1.jpg',
    title: 'Gallery Image 1',
    description: 'This is the first image in the gallery.',
  },
  {
    src: '/gallery2.jpg',
    title: 'Gallery Image 2',
    description: 'This is the second image in the gallery.',
  },
  {
    src: '/gallery3.jpg',
    title: 'Gallery Image 3',
    description: 'This is the third image in the gallery.',
  },
  {
    src: '/gallery4.jpg',
    title: 'Gallery Image 4',
    description: 'This is the fourth image in the gallery.',
  },
  {
    src: '/gallery5.jpg',
    title: 'Gallery Image 5',
    description: 'This is the fifth image in the gallery.',
  },
  {
    src: '/gallery6.jpg',
    title: 'Gallery Image 6',
    description: 'This is the sixth image in the gallery.',
  },
  {
    src: '/gallery7.jpg',
    title: 'Gallery Image 7',
    description: 'This is the seventh image in the gallery.',
  },
  {
    src: '/gallery8.jpg',
    title: 'Gallery Image 8',
    description: 'This is the eighth image in the gallery.',
  },
]

function App() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="app-container">
      <button className="download-btn">Download</button>
      <header>
        <h1>Sigma Gallery</h1>
      </header>
      <main>
        <div className="content-area"></div>
        <div className="gallery">
          {images.map((img, idx) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.title}
              className="gallery-img"
              onClick={() => setSelected(idx)}
            />
          ))}
        </div>
        {selected !== null && (
          <div className="modal" onClick={() => setSelected(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <img src={images[selected].src} alt={images[selected].title} />
              <h2>{images[selected].title}</h2>
              <p>{images[selected].description}</p>
              <button onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
