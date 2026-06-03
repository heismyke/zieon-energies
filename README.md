# CIU - Customer Interface Unit

A modern, responsive web application for managing prepaid electricity meters in Nigeria. Buy tokens, share units, and monitor power consumption directly from your phone.

![CIU Logo](./public/ciu-logo.svg)

## 🚀 Features

- **Instant Token Purchase** - Buy electricity tokens from any Nigerian DisCo directly from your phone
- **Share Units** - Send electricity units to family and friends anywhere in Nigeria instantly
- **Usage Monitoring** - Track power consumption daily, weekly, and monthly with real-time analytics
- **Remote Appliance Control** - Manage home appliances remotely and set schedules to save electricity
- **Outage Alerts** - Get instant notifications about planned maintenance and power restoration
- **Multi-DisCo Support** - Works with all Nigerian DisCos (AEDC, EKEDC, IKEDC, IBEDC, EEDC, PHCN)
- **Zero Service Fees** - Pay exactly what you use, no hidden charges
- **24/7 Availability** - Always online, manage your meter anytime

## 🛠️ Tech Stack

- **Framework**: Vue 3 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons (via CDN)
- **Font**: Terminess TTF Nerd Font
- **State Management**: Pinia
- **Routing**: Vue Router
- **Development**: TypeScript, ESLint

## 📁 Project Structure

```
customer-interface-unit/
├── public/
│   ├── ciu-logo.svg          # Small logo (32x32)
│   ├── ciu-logo-full.svg     # Large logo (128x128)
│   └── vite.svg
├── src/
│   ├── assets/               # Static assets
│   │   ├── fonts/
│   │   └── images/
│   ├── components/
│   │   ├── layout/           # Layout components
│   │   │   ├── Background.vue
│   │   │   ├── Footer.vue
│   │   │   └── Navigation.vue
│   │   └── sections/         # Page sections
│   │       ├── BenefitsGrid.vue
│   │       ├── CarouselSection.vue
│   │       ├── HeroSection.vue
│   │       ├── ServicesGrid.vue
│   │       └── WaitlistForm.vue
│   ├── router/
│   │   └── index.ts          # Vue Router configuration
│   ├── stores/
│   │   └── index.ts          # Pinia stores
│   ├── styles/
│   │   └── global.css        # Global styles and animations
│   ├── views/
│   │   └── HomeView.vue      # Main homepage view
│   ├── App.vue                # Root component
│   ├── main.ts               # Application entry point
│   └── style.css             # Tailwind CSS imports
├── index.html                # HTML template
├── package.json
├── tailwind.config.js        # Tailwind configuration
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── Dockerfile.dev            # Docker development setup
└── docker-compose.yml        # Docker Compose configuration
```

## 🎨 Components Overview

### Layout Components

- **Background.vue** - Handles background gradients, column animations, and visual effects
- **Navigation.vue** - Top navigation bar with logo and menu items
- **Footer.vue** - Footer section with company info and links

### Section Components

- **HeroSection.vue** - Main hero section with animated title and partner logos
- **ServicesGrid.vue** - Grid of service cards (Buy Tokens, Share Units, etc.)
- **WaitlistForm.vue** - Waitlist signup form with DisCo selection
- **CarouselSection.vue** - 3D carousel showcasing smart features
- **BenefitsGrid.vue** - Filterable grid of benefits with category filters

## 🎨 Styling

The project uses **Tailwind CSS** with custom configurations:

- **Custom Colors**: Brand colors (emerald green `#10B981`)
- **Custom Animations**: Fade-in, slide-down reveal, clip column reveal
- **3D Transform Utilities**: Custom rotate-x, rotate-y, rotate-z utilities
- **Perspective Utilities**: Custom perspective classes for 3D effects

### Custom CSS Classes

- `.font-heading` - Terminess TTF Nerd Font for headings
- `.font-body` - Terminess TTF Nerd Font for body text
- `.char-wrapper` - Character animation wrapper
- `.char-reveal` - Character reveal animation
- `.animate-fade-in` - Fade-in animation
- `.custom-checkbox` - Custom checkbox styling
- `.filter-btn.active` - Active filter button state
- `.portfolio-item` - Portfolio/benefit item styling

## 🔤 Fonts

The project uses **Terminess TTF Nerd Font** loaded from the Nerd Fonts GitHub repository:

- **Regular** (400 weight)
- **Bold** (700 weight)
- **Italic** (400 weight, italic style)

Fonts are loaded via `@font-face` declarations in `src/styles/global.css`.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd customer-interface-unit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🐳 Docker Development

### Using Docker Compose

```bash
docker-compose up
```

This will start the development server in a container.

### Using Dockerfile

```bash
docker build -f Dockerfile.dev -t ciu-dev .
docker run -p 5173:5173 ciu-dev
```

## 🏗️ Building for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

## 📱 Features Breakdown

### Hero Section
- Animated text reveal with character-by-character animation
- Coming soon badge with pulse animation
- Partner DisCo logos with staggered fade-in
- Responsive design for mobile, tablet, and desktop

### Services Grid
- Two feature cards (Buy Tokens, Share Units)
- Wide promotional card with call-to-action
- Hover effects and transitions

### Waitlist Form
- Phone number and email inputs
- DisCo provider selection (checkboxes)
- Custom checkbox styling
- Form validation ready

### Carousel Section
- 3D carousel with perspective effects
- Auto-rotating cards every 5 seconds
- Manual navigation buttons
- Three feature cards: Monitor Usage, Manage Appliances, Outage Alerts

### Benefits Grid
- Six benefit cards with icons
- Category filtering (All, Payments, Service)
- Smooth transitions and animations
- Hover effects

## 🎯 Key Animations

1. **Background Column Reveal** - Staggered column animation on page load
2. **Character Reveal** - Letter-by-letter text animation
3. **Fade-in Animations** - Staggered fade-in for various elements
4. **Carousel 3D Effect** - Perspective-based card rotation
5. **Filter Transitions** - Smooth show/hide for filtered items

## 🔧 Configuration

### Tailwind Configuration

Custom Tailwind utilities are configured in `index.html`:
- Brand colors (emerald green)
- 3D transform utilities (rotate-x, rotate-y, rotate-z)
- Perspective utilities
- Transform style utilities

### TypeScript Configuration

TypeScript is configured with strict mode enabled. Configuration files:
- `tsconfig.json` - Main TypeScript config
- `tsconfig.app.json` - Application-specific config
- `tsconfig.node.json` - Node.js-specific config

## 📦 Dependencies

### Production Dependencies
- `vue` - Vue 3 framework
- `vue-router` - Routing
- `pinia` - State management
- `@heroicons/vue` - Icon components

### Development Dependencies
- `vite` - Build tool
- `typescript` - TypeScript support
- `tailwindcss` - CSS framework
- `vue-tsc` - TypeScript checking
- `@vitejs/plugin-vue` - Vue plugin for Vite

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For contributions, please contact the project maintainers.

## 📧 Contact

For support or inquiries, please contact the development team.

---

**Built with ❤️ for Nigerian electricity consumers**

# zieon-energies
