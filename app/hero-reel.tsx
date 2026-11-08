export default function HeroReel() {
  return <figure className="hero-reel">
    <video autoPlay muted loop playsInline controls preload="metadata" poster="/brand/meninges-labs-ad-poster.webp" aria-label="MENINGES LABS introduction film">
      <source src="/meninges_labs_ad.mp4" type="video/mp4" />
      Your browser does not support embedded video.
    </video>
  </figure>;
}
