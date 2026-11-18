import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceDir = path.join(root, "MeningesLabs Rebrand");
const logoSrc = path.join(sourceDir, "Meninges Labs Named logo.png");
const taglineSrc = path.join(sourceDir, "Meninges Labs logo with tagline.png");
const monogramSrc = path.join(sourceDir, "MeningesLabs-Icon-MonogramLogo.png");

const out = (...parts) => path.join(root, "public", ...parts);
const ensure = (file) => fs.mkdirSync(path.dirname(file), { recursive: true });

const COLORS = {
  white: { r: 255, g: 255, b: 255 },
  ink: { r: 0x14, g: 0x25, b: 0x2b },
  orange: { r: 0xff, g: 0x73, b: 0x00 },
};

async function extractArtwork(input, color, { trim = true, pad = 0.03 } = {}) {
  const image = sharp(input).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const corner = (data[0] + data[1] + data[2]) / 3;
  const bgG = data[1];
  const bgB = data[2];
  const outData = Buffer.alloc(width * height * 4);
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const i = (y * width + x) * channels;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const aG = Math.max(0, Math.min(1, (g - bgG) / Math.max(1, 255 - bgG)));
      const aB = Math.max(0, Math.min(1, (b - bgB) / Math.max(1, 255 - bgB)));
      const aR = Math.max(0, Math.min(1, (r - 255) / 1));
      const alpha = Math.max(aG, aB, aR);
      const o = (y * width + x) * 4;
      outData[o] = color.r;
      outData[o + 1] = color.g;
      outData[o + 2] = color.b;
      outData[o + 3] = Math.round(alpha * 255);
      if (alpha > 0.04) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }

  let pipeline = sharp(outData, { raw: { width, height, channels: 4 } });
  if (trim && maxX > minX && maxY > minY) {
    const padX = Math.round((maxX - minX) * pad);
    const padY = Math.round((maxY - minY) * pad);
    const left = Math.max(0, minX - padX);
    const top = Math.max(0, minY - padY);
    pipeline = pipeline.extract({
      left,
      top,
      width: Math.min(width - left, maxX - minX + 1 + padX * 2),
      height: Math.min(height - top, maxY - minY + 1 + padY * 2),
    });
  }
  return pipeline.png();
}

async function save(pipeline, file, width) {
  ensure(file);
  let p = pipeline;
  if (width) p = p.resize({ width, withoutEnlargement: true });
  await p.png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(file);
  console.log("wrote", path.relative(root, file));
}

function roundedMask(size, radius) {
  return Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><rect width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#fff"/></svg>`,
  );
}

async function roundedIcon(input, size, radiusRatio = 0.225) {
  const base = await sharp(input).resize(size, size, { fit: "cover" }).png().toBuffer();
  const mask = roundedMask(size, Math.round(size * radiusRatio));
  return sharp(base)
    .composite([{ input: mask, blend: "dest-in" }])
    .png({ compressionLevel: 9 });
}

function icoHeader(count) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);
  return header;
}

async function writeIco(input, file, sizes) {
  ensure(file);
  const entries = [];
  const pngs = [];
  for (const size of sizes) {
    const png = await roundedIcon(input, size).then((p) => p.toBuffer());
    pngs.push(png);
    const entry = Buffer.alloc(16);
    entry[0] = size >= 256 ? 0 : size;
    entry[1] = size >= 256 ? 0 : size;
    entry[2] = 0;
    entry[3] = 0;
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(entries.length === 0 ? 6 + 16 * sizes.length : 6 + 16 * sizes.length + pngs.slice(0, -1).reduce((n, b) => n + b.length, 0), 12);
    entries.push(entry);
  }
  const output = Buffer.concat([icoHeader(sizes.length), ...entries, ...pngs]);
  fs.writeFileSync(file, output);
  console.log("wrote", path.relative(root, file));
}

async function socialPreview(file, { square = false } = {}) {
  const width = square ? 1200 : 1200;
  const height = square ? 1200 : 630;
  const tagline = await sharp(taglineSrc).resize(square ? 900 : 900).png().toBuffer();
  const meta = square ? 900 : 900;
  const logoSize = await sharp(tagline).metadata();
  const logoW = meta;
  const logoH = Math.round((logoSize.height / logoSize.width) * logoW);
  const left = Math.round((width - logoW) / 2);
  const top = Math.round((height - logoH) / 2);
  const label = square ? "MENINGES LABS" : "DIGITAL ENGINEERING · AI SYSTEMS · GROWTH INTELLIGENCE";
  const foot = square ? "meningeslabs.com" : "meningeslabs.com";
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow" cx="78%" cy="10%" r="72%">
          <stop offset="0%" stop-color="#FFD9B8"/>
          <stop offset="55%" stop-color="#FFF4E6"/>
          <stop offset="100%" stop-color="#FFF4E6"/>
        </radialGradient>
        <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.1" fill="#202124" opacity=".10"/>
        </pattern>
      </defs>
      <rect width="${width}" height="${height}" fill="#FFF4E6"/>
      <rect width="${width}" height="${height}" fill="url(#glow)"/>
      <rect width="${width}" height="${height}" fill="url(#dots)" opacity=".55"/>
      <text x="${square ? 70 : 64}" y="${square ? 92 : 64}" font-family="Arial, Helvetica, sans-serif" font-size="${square ? 22 : 17}" font-weight="700" letter-spacing="2.4" fill="#77716A">${label}</text>
      <text x="${width - (square ? 70 : 64)}" y="${height - (square ? 74 : 44)}" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="${square ? 24 : 19}" font-weight="600" letter-spacing="1.8" fill="#202124">${foot}</text>
    </svg>`;
  ensure(file);
  await sharp(Buffer.from(svg))
    .composite([{ input: tagline, left, top }])
    .png({ compressionLevel: 9 })
    .toFile(file);
  console.log("wrote", path.relative(root, file));
}

async function main() {
  const lockupWhite = await extractArtwork(logoSrc, COLORS.white);
  const taglineWhite = await extractArtwork(taglineSrc, COLORS.white);
  const monogramWhite = await extractArtwork(monogramSrc, COLORS.white, { trim: true, pad: 0.02 });
  const lockupInk = await extractArtwork(logoSrc, COLORS.ink);
  const taglineInk = await extractArtwork(taglineSrc, COLORS.ink);
  const monogramInk = await extractArtwork(monogramSrc, COLORS.ink, { trim: true, pad: 0.02 });
  const monogramOrange = await extractArtwork(monogramSrc, COLORS.orange, { trim: true, pad: 0.02 });

  await save(lockupWhite, out("brand-assets", "logos", "meninges-labs-lockup-white.png"), 1600);
  await save(taglineWhite, out("brand-assets", "logos", "meninges-labs-lockup-tagline-white.png"), 1800);
  await save(monogramWhite, out("brand-assets", "logos", "meninges-labs-monogram-white.png"), 900);
  await save(lockupInk, out("brand-assets", "logos", "meninges-labs-lockup-ink.png"), 1600);
  await save(taglineInk, out("brand-assets", "logos", "meninges-labs-lockup-tagline-ink.png"), 1800);
  await save(monogramInk, out("brand-assets", "logos", "meninges-labs-monogram-ink.png"), 900);
  await save(monogramOrange, out("brand-assets", "logos", "meninges-labs-monogram-orange.png"), 900);

  await save(sharp(logoSrc), out("brand-assets", "logos", "meninges-labs-lockup-orange.png"), 1800);
  await save(sharp(taglineSrc), out("brand-assets", "logos", "meninges-labs-lockup-tagline-orange.png"), 1800);
  await save(sharp(monogramSrc), out("brand-assets", "logos", "meninges-labs-monogram-square-orange.png"), 1024);

  await save(await roundedIcon(monogramSrc, 1024), out("brand-assets", "app-icons", "meninges-labs-app-icon-1024x1024.png"));
  await save(await roundedIcon(monogramSrc, 512), out("brand-assets", "app-icons", "meninges-labs-app-icon-512x512.png"));
  await save(await roundedIcon(monogramSrc, 192), out("brand-assets", "app-icons", "meninges-labs-app-icon-192x192.png"));
  await save(await roundedIcon(monogramSrc, 180), out("apple-touch-icon.png"));
  await save(await roundedIcon(monogramSrc, 1024), out("icon-1024.png"));
  await save(await roundedIcon(monogramSrc, 512), out("icon-512.png"));
  await save(await roundedIcon(monogramSrc, 192), out("icon-192.png"));
  await save(await roundedIcon(monogramSrc, 64), out("images", "meninges-labs-favicon.png"));
  await writeIco(monogramSrc, out("favicon.ico"), [16, 32, 48, 64, 128, 256]);
  await writeIco(monogramSrc, out("brand-assets", "app-icons", "meninges-labs-favicon.ico"), [16, 32, 48, 64, 128, 256]);

  await socialPreview(out("brand-assets", "social", "meninges-labs-social-preview-1200x630.png"));
  await socialPreview(out("images", "meninges-labs-ai-agency-social-preview.png"));
  await socialPreview(out("brand-assets", "social", "meninges-labs-avatar-1200x1200.png"), { square: true });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
