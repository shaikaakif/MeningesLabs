"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./icons";

const FALLBACK_DURATION = 51;

function formatTime(value: number) {
  if (!Number.isFinite(value) || value < 0) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export default function BrandFilm({ compact = false }: { compact?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(FALLBACK_DURATION);

  useEffect(() => {
    if (started) playButtonRef.current?.focus();
  }, [started]);

  const start = async () => {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    video.muted = muted;
    try {
      await video.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try {
        await video.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
  };

  const seek = (value: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = value;
    setCurrent(value);
  };

  const toggleFullscreen = async () => {
    const frame = frameRef.current;
    if (!frame) return;
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await frame.requestFullscreen();
      }
    } catch {
      /* Fullscreen is a progressive enhancement. */
    }
  };

  return (
    <div className={compact ? "film-wrap is-compact" : "film-wrap"}>
      <div className="film-frame" ref={frameRef}>
        <video
          ref={videoRef}
          className="film-video"
          poster="/brand/meninges-labs-brand-film-poster.webp"
          preload="none"
          playsInline
          muted={muted}
          aria-label="MENINGES LABS brand film. A 51-second visual introduction to connected digital systems."
          onLoadedMetadata={(event) => {
            const value = event.currentTarget.duration;
            if (Number.isFinite(value) && value > 0) setDuration(value);
          }}
          onTimeUpdate={(event) => setCurrent(event.currentTarget.currentTime)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => {
            setPlaying(false);
            setCurrent(0);
          }}
        >
          <source src="/videos/meninges-labs-brand-film.mp4" type="video/mp4" />
          <p>
            Your browser cannot play this video. The film introduces MENINGES LABS: disconnected websites,
            marketing and manual processes becoming one connected system.
          </p>
        </video>

        {!started ? (
          <button className="film-poster" type="button" onClick={start} aria-label="Brand film 51 seconds · Sound off. Play the MENINGES LABS brand film.">
            <span className="film-poster-top">
              <span className="film-tag">
                <span className="live-dot" /> Brand film
              </span>{" "}
              <span className="film-tag film-tag-muted">51 seconds · Sound off</span>
            </span>
            <span className="film-play" aria-hidden="true">
              <Icon name="play" size={30} />
            </span>
          </button>
        ) : null}

        {started ? (
          <div className="film-controls" role="group" aria-label="Video controls">
            <button ref={playButtonRef} type="button" className="film-control" onClick={togglePlay} aria-label={playing ? "Pause film" : "Play film"}>
              <Icon name={playing ? "pause" : "play"} size={18} />
            </button>
            <input
              className="film-progress"
              type="range"
              min="0"
              max={duration}
              step="0.1"
              value={Math.min(current, duration)}
              onChange={(event) => seek(Number(event.target.value))}
              aria-label="Seek through the film"
            />
            <span className="film-time">
              {formatTime(current)} / {formatTime(duration)}
            </span>
            <button
              type="button"
              className="film-control film-control-text"
              onClick={toggleMute}
              aria-label={muted ? "Turn sound on" : "Turn sound off"}
              aria-pressed={!muted}
            >
              <Icon name={muted ? "mute" : "volume"} size={17} />
              <span>{muted ? "Sound off" : "Sound on"}</span>
            </button>
            <button type="button" className="film-control" onClick={toggleFullscreen} aria-label="Toggle fullscreen">
              <Icon name="expand" size={17} />
            </button>
          </div>
        ) : null}
      </div>
      {compact ? null : (
        <details className="film-transcript">
          <summary>Visual transcript</summary>
          <p>
            The film opens with the idea that businesses have potential, then shows the usual reality: a website,
            marketing and manual processes operating separately. It explains that MENINGES LABS builds connected
            systems around real business needs, links digital engineering, search intelligence, performance marketing
            and automation into one structure, and closes on the ML monogram and the line “The Architecture of
            Autopilot.” No spoken narration.
          </p>
        </details>
      )}
    </div>
  );
}
