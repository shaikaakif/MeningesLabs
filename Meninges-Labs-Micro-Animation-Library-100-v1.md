# MENINGES LABS

## Micro-Animation & Interaction Library

**Version 1.0 · 100 motion and interaction patterns**

A standalone reference for designing and implementing the motion
language of the MENINGES LABS website.

------------------------------------------------------------------------

## Purpose

This library contains 100 distinct animation and interaction patterns
spanning scroll-driven storytelling, typography, entrances, ambient
backgrounds, surfaces, hover states, navigation, transitions, 3D, data
visualisation and interface feedback.

It is a design inventory, not an instruction to place all 100 effects on
one page. Select effects according to content, hierarchy and
performance. Reuse a small number of motion principles consistently so
the website feels like one coherent product.

## Motion principles

1.  **Purpose before novelty.** Every animation should communicate
    hierarchy, state, continuity, feedback or spatial relationships.
2.  **Scroll must remain in control.** Scroll-linked effects should
    track progress smoothly and reverse naturally when the visitor
    scrolls backwards.
3.  **No hidden content.** Content must remain accessible if JavaScript
    or animation fails.
4.  **Mobile is a first-class experience.** Replace hover-only
    interactions with tap, focus or press states.
5.  **Respect reduced motion.** Honour `prefers-reduced-motion`; provide
    static or simplified alternatives.
6.  **Protect performance.** Prefer transforms and opacity. Avoid
    animating layout properties, excessive blur, huge filters or too
    many simultaneous WebGL effects.
7.  **Keep motion coherent.** Use a restrained easing and timing system
    rather than giving every component a different personality.
8.  **Do not animate everything.** Preserve stillness around important
    moments.

## Suggested motion tokens

  Token                         Suggested value Typical use
  ---------- ---------------------------------- ------------------------------------------
  Micro                              120--180ms Press, toggle, icon feedback
  Quick                              180--260ms Button, link, small hover
  Standard                           300--450ms Cards, menus, small reveals
  Reveal                             450--750ms Images, section entrances
  Story                             700--1200ms Hero and editorial sequences
  Ambient                                8--24s Slow background movement
  Easing       `cubic-bezier(0.22, 1, 0.36, 1)` Main entrance and reveal
  Linear                               `linear` Progress indicators and scroll-scrubbing

These are starting points, not rigid rules. Scroll-driven timelines
should map animation progress to scroll progress rather than rely on a
fixed duration.

------------------------------------------------------------------------

# A. Scroll-driven storytelling --- 1--15

### 01. Scroll-Scrubbed Word Reveal

Words progressively appear as scroll advances; reverse scrolling
reverses the reveal.

### 02. Scroll-Scrubbed Character Reveal

Individual characters reveal in sequence, useful for a short hero phrase
rather than long paragraphs.

### 03. Pinned Scrollytelling

A section remains pinned while its copy, imagery or diagram changes
through a sequence of scroll chapters.

### 04. Scroll-Linked Image Sequence

A series of frames advances with scroll position to create a controlled
cinematic sequence.

### 05. Scroll-Driven Video Scrubbing

The visitor's scroll position controls video playback position. Provide
a poster or static fallback.

### 06. Horizontal Scroll Gallery

Vertical wheel or touch scrolling moves a horizontal track of projects
or service panels.

### 07. Multi-Layer Parallax

Foreground, subject and background layers move at different rates to
create restrained depth.

### 08. Scroll-Based Scale Transform

A visual grows or contracts in proportion to scroll progress.

### 09. Scroll-Based Rotation

A symbol, diagram or object rotates as the visitor moves through a
section.

### 10. Scroll-Based Opacity Crossfade

One visual fades out while the next fades in according to scroll
progress.

### 11. Scroll-Linked Background Transition

The page canvas transitions between approved brand surfaces as sections
change.

### 12. Scroll Progress Line

A thin line or marker indicates progress through the page or a long case
study.

### 13. Section Progress Markers

Navigation markers update as the visitor moves through pinned or
chapter-based content.

### 14. Scroll-Driven Clip Reveal

An image or graphic is progressively uncovered by an animated clipping
boundary.

### 15. Scroll-Driven Shape Morph

A simple SVG shape changes form across a section's scroll timeline.

------------------------------------------------------------------------

# B. Typography and lettering --- 16--27

### 16. Line-by-Line Text Reveal

Each line enters in sequence using a masked vertical movement.

### 17. Word Stagger

Words appear one after another with a small, controlled delay.

### 18. Character Stagger

Characters animate individually for short labels or brief display
statements.

### 19. Split-Text Mask Reveal

Text is split into lines or words and revealed from behind a clipping
mask.

### 20. Blur-to-Sharp Typography

A headline transitions from a subtle blur to crisp focus.

### 21. Scramble-to-Resolve Text

Characters briefly cycle through alternatives before resolving into the
final word.

### 22. Typewriter Reveal

Characters appear sequentially, used sparingly for short system-style
messages.

### 23. Word Replacement

A fixed phrase cycles through a small set of relevant words using a
clear transition.

### 24. Variable Font Weight Shift

A variable font moves between weights to emphasise a word or respond to
interaction.

### 25. Text Fill Reveal

Outlined or muted display text gradually fills with the brand colour.

### 26. Kinetic Emphasis

One selected word changes scale, weight or position to create a
deliberate emphasis beat.

### 27. Animated Underline

An underline draws, expands or slides into place beneath a heading or
link.

------------------------------------------------------------------------

# C. Entrance and visual reveal --- 28--39

### 28. Fade-Up Reveal

An element fades in while translating upward by a small distance.

### 29. Fade-Down Reveal

An element fades in while moving gently downward.

### 30. Side-Slide Reveal

An element enters from the left or right with restrained travel.

### 31. Scale-In Reveal

An element grows from a slightly reduced scale to its natural size.

### 32. Clip-Path Image Reveal

An image is uncovered using an animated polygon, inset or other clipping
shape.

### 33. Curtain Reveal

A solid layer moves away to expose the content underneath.

### 34. Circular Mask Reveal

A circular mask expands to reveal an image or graphic.

### 35. Staggered Card Entrance

Cards enter in a deliberate sequence rather than all at once.

### 36. Image Pan Entrance

The image moves gently inside a fixed frame as the frame itself appears.

### 37. Image Focus Reveal

An image transitions from slightly softened to sharp as it enters view.

### 38. Border Draw Entrance

A card or panel outline draws around its perimeter.

### 39. Number Count-Up

A metric counts from a starting value to a verified final value. Do not
imply fabricated performance data.

------------------------------------------------------------------------

# D. Ambient atmosphere and background --- 40--50

### 40. Aurora Drift

Soft brand-colour fields move slowly behind content.

### 41. Mesh Gradient Drift

Gradient control points shift gradually to create a living colour field.

### 42. Ambient Breathing

A background glow subtly changes scale or opacity in a slow cycle.

### 43. Film Grain Overlay

A fine, restrained grain texture adds a tactile editorial finish.

### 44. Floating Particle Field

A small number of low-contrast particles move slowly in a defined
region.

### 45. Radial Light Bloom

A soft radial light expands or changes intensity around a focal area.

### 46. Light Sweep

A narrow highlight travels across a surface or selected component.

### 47. Gradient Position Shift

A gradient's position changes slowly without changing the layout.

### 48. Soft Vignette Pulse

An edge vignette changes intensity subtly to guide attention.

### 49. Ambient Grid Drift

A faint technical grid moves almost imperceptibly in the background.

### 50. SVG Path Flow

A decorative SVG line or path draws or moves along a route to suggest
connected systems.

------------------------------------------------------------------------

# E. Surface, depth and material effects --- 51--60

These are primarily visual treatments. They may be static or animated;
use them only when they support the brand.

### 51. Glassmorphism

Translucent surfaces with background blur and a restrained border.

### 52. Frosted Panel Reveal

A frosted surface fades or sharpens into view.

### 53. Layered Depth

Overlapping surfaces use controlled shadows, borders and offsets to
establish hierarchy.

### 54. Neumorphic Press

A surface appears gently recessed when pressed. Use sparingly; maintain
clear contrast.

### 55. Soft Shadow Elevation

A card's shadow and vertical position change slightly on hover or focus.

### 56. Iridescent Surface Shift

A subtle colour sheen moves across a surface.

### 57. Chromatic Edge Accent

A restrained colour separation appears briefly at a selected transition
edge.

### 58. 3D Extrusion

A symbol or short word gains apparent depth through layered geometry.

### 59. Noise Displacement

A texture gently distorts an image or surface, preferably as a short
transition.

### 60. Liquid Surface Distortion

A shader-based distortion creates a fluid transition between visual
states.

------------------------------------------------------------------------

# F. Pointer, hover and direct manipulation --- 61--74

### 61. Magnetic Button

A button moves a few pixels toward the pointer within a limited
interaction radius.

### 62. Custom Cursor Follower

A small cursor element follows pointer movement on desktop; never
replace the native cursor where it harms usability.

### 63. Cursor Context Label

A compact label follows the pointer over a specific interactive region,
such as "View project".

### 64. 3D Tilt Card

A card tilts subtly according to pointer position.

### 65. Hover Lift

A card rises slightly and gains a little shadow on hover.

### 66. Image Hover Zoom

An image scales gently within an overflow-hidden frame.

### 67. Image Reveal on Hover

A secondary image, layer or detail appears when the pointer enters a
card.

### 68. Arrow Nudge

An arrow shifts a few pixels to indicate that a link is interactive.

### 69. Icon Morph

An icon transitions between related states, such as plus to close.

### 70. Border Trace

A highlight travels along part or all of a component border.

### 71. Magnetic Navigation Link

A navigation label shifts subtly toward the pointer, with a small
movement limit.

### 72. Hover Spotlight

A soft radial highlight follows the pointer within a card or panel.

### 73. Drag-to-Explore Gallery

A visitor can drag a gallery or timeline horizontally with clear grab
and grabbing states.

### 74. Press Compression

A button or tile scales down slightly while pressed, then returns
smoothly.

------------------------------------------------------------------------

# G. Navigation and page transitions --- 75--84

### 75. Staggered Menu Reveal

Navigation items appear one after another when a menu opens.

### 76. Menu Icon Morph

The menu icon smoothly transforms into a close icon.

### 77. Full-Screen Menu Expansion

A navigation layer expands to cover the viewport.

### 78. Navigation Indicator Slide

An active underline or marker glides between navigation items.

### 79. Page Crossfade

The outgoing page fades into the incoming page.

### 80. Page Wipe

A panel or shape moves across the viewport to transition between routes.

### 81. Shared-Element Transition

A selected visual appears to travel from its position on one page to its
position on another.

### 82. Route Content Stagger

The main page content enters in a coordinated sequence after navigation.

### 83. Section-to-Section Morph

A selected shape or graphic changes between two section states to
establish continuity.

### 84. Back-to-Top Motion

A compact control appears after sufficient scrolling and smoothly
returns the visitor to the top.

------------------------------------------------------------------------

# H. 3D, WebGL and spatial motion --- 85--92

### 85. Pointer-Responsive 3D Monogram

The angular ML symbol responds subtly to pointer movement.

### 86. Scroll-Driven 3D Rotation

A 3D object rotates according to the section's scroll progress.

### 87. Orbital Elements

Small labels or objects move around a central system diagram.

### 88. Camera Dolly

A camera moves closer to or farther from a 3D scene.

### 89. Depth-of-Field Transition

Focus shifts between foreground and background elements.

### 90. Morphing Geometry

A geometric object transforms between a small set of deliberate forms.

### 91. Shader Displacement Transition

A GPU shader distorts one visual into another.

### 92. Interactive 3D Diagram

A visitor can rotate or inspect a simplified model of a connected
business system.

------------------------------------------------------------------------

# I. Interface feedback and state changes --- 93--100

### 93. Toggle Spring

A toggle knob moves with a restrained spring-like response.

### 94. Accordion Height Transition

An accordion opens and closes smoothly while keeping its content
accessible.

### 95. Tab Indicator Transition

The active tab marker slides to the selected item.

### 96. Form Validation Feedback

Fields show clear success, warning or error states with brief visual
feedback.

### 97. Button Loading State

A button communicates an in-progress action without changing its overall
position.

### 98. Success Confirmation

A checkmark or confirmation indicator animates after a successful
action.

### 99. Toast Notification Entrance

A notification enters and exits with a short, consistent transition.

### 100. Skeleton-to-Content Transition

A loading placeholder transitions into the real content without a
jarring layout shift.

------------------------------------------------------------------------

# Implementation guidance

## Recommended website stack

  -----------------------------------------------------------------------
  Technology                          Use
  ----------------------------------- -----------------------------------
  Next.js + React + TypeScript        Website framework and component
                                      architecture

  Tailwind CSS                        Styling and responsive design

  Motion for React                    Component transitions, gestures and
                                      scroll-linked animation

  GSAP + ScrollTrigger                Complex pinned, scrubbed and
                                      sequenced storytelling

  SVG                                 Lightweight diagrams, paths, masks
                                      and icon animation

  Three.js + React Three Fiber        Selective interactive 3D scenes

  CSS animations                      Simple ambient loops and small
                                      transitions

  Rive or Lottie                      Carefully selected prepared motion
                                      assets
  -----------------------------------------------------------------------

Do not install or use every library just because it appears in this
list. Choose the smallest toolset that can implement the required effect
reliably. Avoid running two animation engines against the same element.

## Suggested implementation tiers

-   **Tier 1 --- Core:** 01, 03, 07, 12, 16, 28, 32, 35, 40, 61, 68, 75,
    94, 96, 97, 98.
-   **Tier 2 --- Signature:** 04, 06, 14, 15, 24, 33, 38, 50, 64, 72,
    79, 81, 85, 92.
-   **Tier 3 --- Experimental:** 05, 57, 59, 60, 89, 90, 91.

Tier 1 establishes a polished baseline. Tier 2 adds distinctive
storytelling. Tier 3 should be introduced only when it has a clear
creative purpose and passes performance testing.

## Engineering acceptance checklist

-   [ ] Every scroll-linked effect reverses correctly when scrolling
    backwards.
-   [ ] No section traps the visitor or hijacks normal scrolling.
-   [ ] No essential text or navigation depends on hover.
-   [ ] Touch interactions have visible pressed and focus states.
-   [ ] `prefers-reduced-motion` disables or simplifies non-essential
    movement.
-   [ ] Keyboard users can access every interactive component.
-   [ ] Animations do not cause avoidable layout shifts.
-   [ ] Transform and opacity are preferred for frequent animation.
-   [ ] Off-screen decorative animations pause when practical.
-   [ ] Heavy 3D and video sequences load only when needed.
-   [ ] Static fallbacks remain usable if JavaScript or WebGL is
    unavailable.
-   [ ] Test on mid-range Android devices as well as desktop.
-   [ ] Motion never obscures text, controls or important information.
-   [ ] All counters, metrics and claims use real, verified values.

## Brand-specific creative direction

For MENINGES LABS, the motion should feel like **digital architecture in
motion**:

-   Canela typography supplies the editorial character.
-   Manrope keeps interfaces clear and contemporary.
-   IBM Plex Mono provides technical labels and system cues.
-   Warm ivory (`#F7F0E6`) remains the primary canvas.
-   Deep pomegranate (`#780000`) supplies the main brand accent.
-   Muted rose and related tones may appear in restrained ambient
    effects.
-   The angular ML monogram can become the basis for selected geometric
    transitions and a signature 3D object.

Avoid turning every section into a spectacle. Use stillness, spacing and
deliberate timing to make the important animations feel more impactful.

------------------------------------------------------------------------

**End of library · 100 motion and interaction patterns**
