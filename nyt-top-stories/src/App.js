// src/App.js
import React, { useEffect, useState } from 'react'
import { fetchTopStories } from './service'
import { motion } from 'framer-motion'
import './App.css'
import SkeletonCard from './SkeletonCard'
import { allowedSections } from './constant'
import SectionList from './Section'

function App() {
  const [stories, setStories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [selectedSection, setSelectedSection] = useState(allowedSections[0])
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const data = await fetchTopStories(selectedSection)
        setStories(data)
      } catch (error) {
        console.error('Error fetching top stories:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [selectedSection])

  const handleSelectSection = (section) => {
    setSelectedSection(section);
  };

  return (
    <div >
      <h1 className='header'>Top Stories</h1>
      <SectionList
        sections={allowedSections}
        selectedSection={selectedSection}
        onSelectSection={handleSelectSection}
      />
      <div className='story-container'>
        {isLoading
          ? // Display the SkeletonCard component while loading
            Array.from({ length: 12 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : stories?.map((story, index) => (
              <motion.div
                key={story.url}
                className='story-card'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={story.multimedia[0].url} alt={story.title} />
                <h2>{story.title}</h2>
                <p>{story.abstract}</p>
                <a href={story.url} target='_blank' rel='noopener noreferrer'>
                  Read More
                </a>
              </motion.div>
            ))}
      </div>
    </div>
  )
}

export default App
