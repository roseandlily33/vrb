# VRB Website Redesign

## Brand, Design & Development Guidelines

### 1. Project Overview

VRB Web Design and Development is an independent web design and development business based in Halifax, Nova Scotia, serving businesses across Canada and remotely.

The purpose of this redesign is to create a more distinctive, creative and professional website that better reflects VRB's capabilities, approach and personality.

The website should demonstrate the combination of thoughtful design, user experience, technical expertise and business understanding that goes into each project.

**Primary goal:** Position VRB as a creative, technically knowledgeable web design and development specialist who can guide businesses from initial ideas through to complete, functional websites.

### 2. Brand Positioning

**Core positioning:** Connected thinking across design, development and strategy.

VRB approaches websites as complete experiences rather than isolated visual designs or development tasks.

Every decision should consider how the website looks, how people use it, how it performs, how it supports the business and how it can evolve in the future.

**Core strengths:**

- Custom website design and development
- Creative, thoughtful UI/UX design
- Website redesigns and improvements
- Front-end development and responsive interfaces
- SEO, performance and technical understanding
- End-to-end project planning and execution
- Understanding how different parts of a website work together

VRB should be positioned primarily around creative web design and development, not as a specialist in highly complex backend systems.

Technical versatility is an advantage, but it should support the core offering rather than dominate the brand.

### 3. Target Clients

VRB primarily wants to attract:

- New businesses building their first professional website
- Established businesses ready for a website redesign
- Businesses unhappy with their current website
- Businesses seeking custom design and functionality
- Clients who appreciate collaboration, creativity and attention to detail
- Businesses interested in ongoing website support and improvement

The website should communicate that VRB can make the design and development process approachable, organized and collaborative.

### 4. Brand Personality

VRB should feel:

**Creative:** Original, visually interesting and willing to explore ideas.

**Professional:** Reliable, knowledgeable and detail-oriented.

**Approachable:** Friendly, understandable and easy to work with.

**Thoughtful:** Decisions are intentional and consider the bigger picture.

**Confident:** Communicates expertise clearly without exaggeration or aggressive selling.

The overall experience should leave visitors feeling reassured and confident in VRB's ability to deliver a professional website.

### 5. Brand Voice & Copywriting

**Voice direction:** Bold, direct and professional, with a friendly, approachable personality.

Copy should sound natural, clear and human.

**Writing guidelines:**

- Use straightforward language.
- Make information easy to understand on the first read.
- Explain the value of design and development without unnecessary technical jargon.
- Use confident headlines supported by practical explanations.
- Keep messaging specific and grounded.
- Highlight creativity, functionality, collaboration and attention to detail.
- Emphasize how a professional website can improve the way customers perceive a business.
- Avoid overly complicated sentences, buzzwords, exaggerated promises and aggressive sales language.
- Avoid artificial urgency, pressure tactics and generic agency clichés.
- Maintain a balanced personal voice, reflecting an independent specialist rather than pretending to be a large agency.

**Primary homepage headline:**

"Where design, development and strategy connect."

**Core messaging theme:**

Great websites bring together visual design, user experience, development and business goals. Each part should support the others.

### 6. Chosen Visual Direction: Digital & Playful

The chosen direction is **Concept #2: Digital & Playful**, refined to feel professional, polished and distinctive.

The design should take direct inspiration from the existing VRB logo.

It should use technical graphics, intentional motion, connected elements and structured layouts rather than relying on generic imagery or decorative gradients.

**Visual priorities:**

1. Pixels and square-based details
2. Circuit traces and connected nodes
3. Sweeping orbital paths
4. Strong, oversized typography
5. Sharp, geometric layouts
6. Deep navy and electric blue
7. Selective yellow accents
8. Subtle, purposeful animations
9. Clear spacing and visual hierarchy

The result should feel like a creative digital studio with strong technical capabilities.

### 7. Logo-Inspired Design Elements

#### Pixels

Pixels are an essential part of VRB's visual identity.

Use filled and outlined squares in different sizes, including occasional pixel clusters.

Pixels can be used as:

- Decorative accents
- Navigation indicators
- Section markers
- Card details
- Animation endpoints
- Elements attached to orbital or circuit paths

Pixels should feel intentional and should not overwhelm the layout.

#### Circuits

Circuit traces are a major visual element, inspired by the circuit lines running through the V and R of the VRB logo.

Use:

- Thin connected lines
- Straight segments and angled turns
- Circular endpoints
- Illuminated nodes
- Animated path drawing
- Small travelling-light effects

Circuit paths can visually connect content, illustrate relationships and guide users through sections.

#### Orbits

Orbits are inspired by the sweeping oval surrounding the VRB logo.

They should feel dynamic, elongated and slightly angled rather than like generic circular borders.

Possible applications:

- Active navigation states
- Hero illustrations
- Section headings
- Featured project compositions
- Decorative framing
- Scroll-based interactions

Orbits can be simplified to a single line where appropriate.

#### Motion

Animations should be subtle, purposeful and performant.

Examples:

- Circuit paths drawing into view
- Light travelling along circuit lines
- Pixels appearing or shifting
- Orbits revealing on hover
- Elements responding gently to scroll position

One future idea is a vertical circuit line that follows the user's scroll progress through a page.

Animations must respect `prefers-reduced-motion`.

### 8. Colour Palette

Use the existing CSS variables defined in the project's global `:root`.

**Primary colours:**

- Deep navy: `--blue-950` (#001233)
- Navy: `--blue-900` (#001f4d)
- Strong blue: `--blue-800` (#0054c9)
- Bright blue: `--blue-700` (#1b8ae4)
- Sky blue: `--blue-500` (#69b9f2)
- Yellow accent: `--yellow-500` (#ffd21f)
- White: `--white` (#ffffff)

**Colour principles:**

- Use navy for strong feature sections and high-impact backgrounds.
- Use white and very light blue to balance darker sections.
- Use blue for circuits, orbits, links and technical accents.
- Use yellow selectively for emphasis, pixels and calls to action.
- Maintain accessible text contrast.
- Avoid excessive gradients, glow effects and decorative backgrounds.

The design should rely primarily on strong composition, typography, lines, shapes and colour contrast.

### 9. Typography

Use the existing font variables:

- Headings: `var(--font-heading)`
- Body: `var(--font-body)`

The current heading stack prioritizes Inter, and body text uses Poppins.

**Typography principles:**

- Bold, confident headings
- Strong hierarchy
- Comfortable body-text line heights
- Clear and readable labels
- Minimal decorative typography
- Responsive font sizing using `clamp()` where appropriate

### 10. Component & Layout Guidelines

The website is built with Next.js and uses CSS Modules.

**Development requirements:**

- Preserve existing navigation, routing and business logic.
- Keep components responsive and accessible.
- Reuse existing CSS variables.
- Prefer reusable components over repeated markup.
- Use SVG for complex circuits and orbital paths where practical.
- Use CSS for layout, styling and simple animation.
- Keep animations lightweight.
- Avoid unnecessary dependencies.
- Respect reduced-motion preferences.
- Maintain semantic HTML and keyboard accessibility.
- Avoid breaking existing links or functionality.

**Important workflow preference:**

When redesigning an existing section, update the JSX, styling and wording together as one cohesive implementation.

Provide complete, copy-and-paste-ready component and CSS files whenever possible, rather than disconnected snippets.

Preserve existing logic, imports, routing and functionality unless a change is explicitly discussed.

### 11. Homepage Structure

The homepage should tell a clear story, guiding visitors from understanding VRB to exploring services, evaluating work and making contact.

Planned sections:

1. Hero
2. Introduction / What VRB Does
3. Services
4. Featured Work / Case Studies
5. Process
6. Why Work With VRB
7. Final Call to Action

Each section should have its own visual identity while remaining part of the same design system.

Alternate dark and light sections intentionally.

Avoid making every section use the same card layout or background treatment.

### 12. Portfolio & Case Studies

Portfolio content should demonstrate more than the finished visual design.

Case studies should highlight:

- The original problem or opportunity
- Planning and research
- UX/UI thinking
- Wireframes and design decisions
- Visual design development
- Front-end implementation
- Functional solutions
- Improvements and outcomes, where evidence is available

The portfolio should show VRB's ability to connect business needs, user experience, visual design and technical implementation.

Do not invent metrics or results.

### 13. UX Principles

VRB's own website should demonstrate the same principles offered to clients.

- Navigation should be clear and intuitive.
- Visitors should quickly understand the business and services.
- Calls to action should be visible without being intrusive.
- Information should appear in a logical order.
- Content should answer visitor questions before they become obstacles.
- Mobile layouts should feel intentionally designed.
- Visual effects must never compromise usability.
- Performance, accessibility and SEO should be considered throughout development.

### 14. What to Avoid

- Generic agency aesthetics
- Excessive gradients
- Too many unrelated decorative shapes
- Stock imagery used only to fill space
- Unnecessary visual clutter
- Overly complex animation
- Difficult-to-read typography
- Buzzword-heavy marketing copy
- Artificial urgency or pushy sales messaging
- Unnecessarily complex technical implementations
- Designs that look creative but are difficult to use

### 15. Guiding Principle

**Every element should have a purpose.**

VRB's visual identity should demonstrate how separate pieces connect to create something stronger.

Pixels represent the building blocks.

Circuits represent connections and functionality.

Orbits represent movement, continuity and bringing different disciplines together.

The website itself should reinforce the same message:

**Thoughtful design, development and strategy working together.**
