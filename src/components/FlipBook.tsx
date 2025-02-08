'use client'

import React, { useState } from 'react'
import '@/styles/flipbook.css'
import AudioPlayer from './AudioPlayer'
import { Word, Media } from '@/payload-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const FlipBook: React.FC<Word> = ({ title, pages, music }) => {
  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = pages.length

  const turnPage = (delta: number) => {
    const nextPage = currentPage + delta
    if (nextPage >= 0 && nextPage <= totalPages) {
      setCurrentPage(nextPage)
    }
  }
  const isLastPage = currentPage === totalPages
  return (
    <div className="flipbook-container">
      <h1>{title}</h1>
      <div className="flipbook">
        {pages.map((page, index) => (
          <div
            key={index}
            className={`leaf ${index < currentPage ? 'turned' : ''}`}
            style={{
              zIndex: totalPages - index,
              display: index === currentPage - 1 || index === currentPage ? 'block' : 'none',
            }}
          >
            {/* Front Page */}
            <div className="page front" style={{ backgroundColor: page.front.backgroundColor }}>
              {page.front.image && (
                <Image
                  src={(page.front.image as Media)?.url || ''}
                  alt={page.front.title || 'Image'}
                  width={(page.front.image as Media).width || 800}
                  height={(page.front.image as Media).height || 600}
                  className={!page.front.title ? 'full-image' : ''}
                  style={{
                    width: '100%',
                    height: !page.front.title ? '80%' : '50%',
                    objectFit: 'cover',
                  }}
                />
              )}
              {page.front.decorations?.map((decoration, i) => (
                <Image
                  key={i}
                  src={(decoration.image as Media).url || ''}
                  alt={(decoration.image as Media).alt || 'Decoration'}
                  width={(decoration.image as Media).width || 100}
                  height={(decoration.image as Media).height || 100}
                  style={{
                    position: 'absolute',
                    ...Object.fromEntries(
                      Object.entries(decoration.style || {}).filter(([_, value]) => value != null),
                    ),
                  }}
                />
              ))}
              {page.front.title && (
                <h1
                  className={`title ${page.front.textColor ? `text-[${page.front.textColor}]` : ''}`}
                >
                  {page.front.title}
                </h1>
              )}
              <p
                className={`content ${page.front.textColor ? `text-[${page.front.textColor}]` : ''}`}
              >
                {page.front.content}
              </p>
            </div>

            {/* Back Page */}
            <div className="page back" style={{ backgroundColor: page.back.backgroundColor }}>
              {page.back.image && (
                <Image
                  src={(page.back.image as Media).url || ''}
                  alt={page.back.title || 'Image'}
                  width={(page.back.image as Media).width || 800}
                  height={(page.back.image as Media).height || 600}
                  className={!page.back.title ? 'full-image' : ''}
                  style={{
                    width: '100%',
                    height: !page.back.title ? '80%' : '50%',
                    objectFit: 'cover',
                  }}
                />
              )}
              {page.back.title && (
                <h2
                  className={`title ${page.front.textColor ? `text-[${page.front.textColor}]` : ''}`}
                >
                  {page.back.title}
                </h2>
              )}
              <p
                className={`content ${page.front.textColor ? `text-[${page.front.textColor}]` : ''}`}
              >
                {page.back.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={() => turnPage(-1)} disabled={currentPage === 0} className="btn prev">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={() => turnPage(1)} disabled={isLastPage} className="btn next">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      {/* Render AudioPlayer hanya jika ada data music di JSON */}
      {music && (
        <AudioPlayer
          musicUrl={(music.audio as Media).url || ''}
          musicTitle={music.title}
          imageUrl={(music.image as Media).url || ''}
        />
      )}
      <footer className="footer">
        <p>Created by warmwords</p>
      </footer>
    </div>
  )
}

export default FlipBook
