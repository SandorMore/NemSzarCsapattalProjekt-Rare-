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

	const handleDownload = () => {
		const element = document.createElement('a')
		const file = new Blob(['test'], { type: 'text/plain' })
		element.href = URL.createObjectURL(file)
		element.download = 'test.txt'
		document.body.appendChild(element)
		element.click()
		document.body.removeChild(element)
	}

	return (
		<div className="app-container">
			<a
				className="github-btn"
				href="https://github.com/SandorMore/NemSzarCsapattalProjekt-Rare-"
				target="_blank"
				rel="noopener noreferrer"
			>
				Github
			</a>
			<button className="download-btn" onClick={handleDownload}>
				Download
			</button>
			<header>
				<h1>Naprendszer Vizualizálás</h1>
			</header>
			<main>
				<div className="content-area">
					{selected !== null && (
						<div className="selected-image-content">
							<div className="selected-image-description">
								<h2>{images[selected].title}</h2>
								<p>{images[selected].description}</p>
							</div>
							<img
								src={images[selected].src}
								alt={images[selected].title}
								style={{
									maxWidth: '100%',
									borderRadius: '1rem',
									marginBottom: '1rem',
									background: '#111',
								}}
							/>
						</div>
					)}
				</div>
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
			</main>
		</div>
	)
}

export default App
