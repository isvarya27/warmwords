'use client'

import React, { useState, useRef } from 'react'
import '@/styles/audioPlayer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

interface AudioPlayerProps {
  musicUrl: string
  musicTitle: string
  imageUrl: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ musicUrl, musicTitle, imageUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="audio-player">
      <div className={`cover-container ${isPlaying ? 'playing' : ''}`}>
        <Image
          src={imageUrl}
          alt={musicTitle}
          className="album-cover"
          width={100}
          height={100}
          priority
        />
      </div>

      <div className="song-info">
        <p className="song-title">{musicTitle}</p>
        <p className="song-artist">Warm Words</p> {/* Bisa disesuaikan */}
      </div>

      <button onClick={togglePlay} className="play-button">
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>

      <audio ref={audioRef} src={musicUrl} />
    </div>
  )
}

export default AudioPlayer
