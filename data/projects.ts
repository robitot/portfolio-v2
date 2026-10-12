import type { Project } from '@/types';

/**
 * PLACEHOLDER CONTENT: replace the text, links and numbers with your real projects.
 * Each project automatically gets its own page at /projects/<slug>.
 * Add screenshots to public/images/projects/ and set `image` (and optional `gallery`).
 */
export const PROJECTS: Project[] = [
  {
    slug: 'Homies-Coffee-Shop-System',
    title: 'Beverage/Food System',
    tagline: 'A Beverage/Food shop system for small to medium businesses',
    summary:
      'Dashboard for tracking Sales, Product Management and Detailed POS, with Supply restocking feature',
    category: 'Full Stack',
    year: '2025',
    role: 'Full Stack Developer',
    timeline: '3 month',
    team: 'Solo',
    status: 'Live',
    featured: true,
    links: {
      live: 'https://coffee-shop-inv-pos.up.railway.app/',
      repo: 'https://github.com/robitot/Coffee-Shop-INV-POS-System',
    },
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'Laravel', 'Livewire', 'MySQL'],
    stack: [
      {
        label: 'Frontend',
        items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Blade'],
      },
      {
        label: 'Backend',
        items: ['PHP', 'Laravel', 'Livewire'],
      },
      {
        label: 'Data & Infra',
        items: ['MySQL', 'Railway'],
      },
    ],
    problem:
      'Inventory and product data is currently managed through paper records and a loosely structured tracker. Because the data is scattered across physical documents and inconsistent entries, it is difficult to know accurate stock levels, locate product information, or trace inventory movements.',
    solution:
      'A single web-based system that replaces the paper records and manual tracker with one source of truth. It combines a dashboard, product and supply management, expense tracking, and a point-of-sale (POS) for over-the-counter orders.',
    features: [
      {
        title: 'Sales Dashboard',
        text: 'Sales Dashboard: A filterable overview (daily, weekly, monthly, yearly) with detailed summary cards showing totals and period-over-period percentage changes, plus interactive charts for sales trends, top products, and category breakdowns',
      },
      {
        title: 'Product Management',
        text: 'Organize products by category and size in one connected catalog, so every item is easy to find, update, and track with consistent, reliable data.',
      },
      {
        title: 'POS',
        text: 'Record every sale under the cashier on duty, with POS session history and voucher support for a complete, traceable record of each transaction.',
      },
      {
        title: 'Inventory',
        text: 'Track stock quantities in real time and record incoming inventory (stock-in) so counts stay accurate and every delivery is logged.',
      },
    ],
    metrics: [
      {
        value: 'XX%',
        label: 'Faster stock lookups',
      },
      {
        value: 'XX k',
        label: 'SKUs managed',
      },
      {
        value: 'XX',
        label: 'Daily active users',
      },
    ],
    challenges: [
      {
        title: 'Product Relationships',
        text: 'Linking each product size to its own sales records and inventory deduction was new to me, so designing how a sale of one size updates the correct stock was a real challenge to implement.',
      },
      {
        title: 'Relational DB and Laravel Livewire',
        text: 'This project taught me to work more deeply with relational databases, from designing linked tables to querying across them. It also introduced me to Laravel Livewire, which let me build dynamic, interactive features without a separate frontend framework.',
      },
    ],
    image: '/images/coffeeShop/coffeeShopDashboard.png',
    gallery: [
      '/images/coffeeShop/POS.png',
      '/images/coffeeShop/Session.png',
      '/images/coffeeShop/Sizes.png',
    ],
  },
  // {
  //   slug: 'rk-prints',
  //   title: 'RK Prints',
  //   tagline: 'An online print shop with account login and order tracking.',
  //   summary:
  //     'Storefront for custom prints with sign-in, a cart, and a simple order history. Built mobile-first with fast page loads.',
  //   category: 'Full Stack',
  //   year: '2025',
  //   role: 'Full Stack Developer',
  //   timeline: '2 months',
  //   team: 'Solo',
  //   status: 'In progress',
  //   links: {
  //     live: '#',
  //     repo: '#',
  //   },
  //   tech: ['Next.js', 'TypeScript', 'AWS Cognito', 'Amplify'],
  //   stack: [
  //     {
  //       label: 'Frontend',
  //       items: ['Next.js', 'TypeScript', 'CSS Modules'],
  //     },
  //     {
  //       label: 'Auth & Backend',
  //       items: ['AWS Cognito', 'AWS Amplify'],
  //     },
  //     {
  //       label: 'Tooling',
  //       items: ['Git', 'Figma', 'Postman'],
  //     },
  //   ],
  //   problem:
  //     'Small print shops often take orders through chat, which is slow to manage and easy to lose track of.',
  //   solution:
  //     'A clean storefront where customers can sign in, upload or pick a design, place an order, and check its status at any time.',
  //   features: [
  //     {
  //       title: 'Secure sign-in',
  //       text: 'Email sign-up and login handled by AWS Cognito.',
  //     },
  //     {
  //       title: 'Product pages',
  //       text: 'Fast, SEO-friendly pages generated with Next.js.',
  //     },
  //     {
  //       title: 'Cart and checkout flow',
  //       text: 'Simple, mobile-friendly steps with clear validation.',
  //     },
  //     {
  //       title: 'Order history',
  //       text: 'Customers can see past orders and their current status.',
  //     },
  //   ],
  //   metrics: [
  //     {
  //       value: 'XX',
  //       label: 'Product pages',
  //     },
  //     {
  //       value: 'XX ms',
  //       label: 'Average page load',
  //     },
  //     {
  //       value: '100%',
  //       label: 'Mobile responsive',
  //     },
  //   ],
  //   challenges: [
  //     {
  //       title: 'Protected pages',
  //       text: 'Keeping account pages private while the rest of the site stays statically fast. Solved with route-level auth checks.',
  //     },
  //     {
  //       title: 'Image-heavy pages',
  //       text: 'Large product images slowed pages down. Fixed with optimized images and lazy loading.',
  //     },
  //   ],
  // },
  // {
  //   slug: 'taskboard',
  //   title: 'Taskboard',
  //   tagline: 'A drag-and-drop kanban board that feels instant.',
  //   summary:
  //     'Plan work in columns, drag cards between them, and keep everything saved in the browser. Built for speed and keyboard use.',
  //   category: 'Frontend',
  //   year: '2024',
  //   role: 'Frontend Developer',
  //   timeline: '3 weeks',
  //   team: 'Solo',
  //   status: 'Live',
  //   links: {
  //     live: '#',
  //     repo: '#',
  //   },
  //   tech: ['React', 'TypeScript', 'Tailwind', 'Zustand'],
  //   stack: [
  //     {
  //       label: 'Frontend',
  //       items: ['React', 'TypeScript', 'Tailwind CSS'],
  //     },
  //     {
  //       label: 'State & Storage',
  //       items: ['Zustand', 'localStorage'],
  //     },
  //     {
  //       label: 'Tooling',
  //       items: ['Vite', 'Git', 'GitHub'],
  //     },
  //   ],
  //   problem: 'Most task boards are heavy, slow to load and need an account just to try them.',
  //   solution:
  //     'A lightweight board that opens instantly, needs no sign-up, and keeps your data on your device.',
  //   features: [
  //     {
  //       title: 'Drag and drop',
  //       text: 'Smooth card moves between columns, with touch support.',
  //     },
  //     {
  //       title: 'Keyboard shortcuts',
  //       text: 'Create, move and search cards without touching the mouse.',
  //     },
  //     {
  //       title: 'Saved automatically',
  //       text: 'Boards persist in the browser, with export and import.',
  //     },
  //     {
  //       title: 'Dark and light themes',
  //       text: 'Follows system preference, switchable at any time.',
  //     },
  //   ],
  //   metrics: [
  //     {
  //       value: 'XX kB',
  //       label: 'Total bundle size',
  //     },
  //     {
  //       value: 'XX',
  //       label: 'Lighthouse performance',
  //     },
  //     {
  //       value: 'XX',
  //       label: 'GitHub stars',
  //     },
  //   ],
  //   challenges: [
  //     {
  //       title: 'Smooth dragging',
  //       text: 'Avoiding re-renders of the whole board while dragging by isolating card state.',
  //     },
  //     {
  //       title: 'Accessible drag and drop',
  //       text: 'Added keyboard and screen reader support so the board is usable without a mouse.',
  //     },
  //   ],
  // },
  // {
  //   slug: 'pixel-portfolio',
  //   title: 'Pixel Portfolio',
  //   tagline: 'This site: a pixel-art portfolio with a character that follows your cursor.',
  //   summary:
  //     'Personal portfolio built with Next.js and TypeScript. Typed content files, custom hooks for animation, and zero UI libraries.',
  //   category: 'Frontend',
  //   year: '2026',
  //   role: 'Designer and Developer',
  //   timeline: '2 weeks',
  //   team: 'Solo',
  //   status: 'Live',
  //   links: {
  //     live: '#',
  //     repo: '#',
  //   },
  //   tech: ['Next.js', 'React', 'TypeScript', 'CSS'],
  //   stack: [
  //     {
  //       label: 'Framework',
  //       items: ['Next.js App Router', 'React', 'TypeScript'],
  //     },
  //     {
  //       label: 'Styling',
  //       items: ['Plain CSS', 'Design tokens', 'Pixel-art SVG'],
  //     },
  //     {
  //       label: 'Quality',
  //       items: ['Reduced-motion support', 'Accessible markup', 'Responsive 320px+'],
  //     },
  //   ],
  //   problem:
  //     'Most developer portfolios look the same and are hard for recruiters to scan in a few seconds.',
  //   solution:
  //     'A clear, scannable layout with a distinct pixel identity, with all content in one typed data folder so updates take minutes.',
  //   features: [
  //     {
  //       title: 'Cursor-tracking character',
  //       text: 'Seven head frames, blinking, idle glances and a wave on click.',
  //     },
  //     {
  //       title: 'Typed content',
  //       text: 'Experience, skills and projects all live in data files.',
  //     },
  //     {
  //       title: 'Scroll effects',
  //       text: 'Reveals, count-up stats and a scroll-spy navbar.',
  //     },
  //     {
  //       title: 'Accessible by default',
  //       text: 'Semantic HTML, focus states and reduced-motion support.',
  //     },
  //   ],
  //   metrics: [
  //     {
  //       value: 'XX',
  //       label: 'Lighthouse accessibility',
  //     },
  //     {
  //       value: '0',
  //       label: 'UI libraries used',
  //     },
  //     {
  //       value: 'XX',
  //       label: 'Reusable components',
  //     },
  //   ],
  //   challenges: [
  //     {
  //       title: 'Cursor tracking without lag',
  //       text: 'Updating only the character frame (not the whole page) using requestAnimationFrame and refs.',
  //     },
  //     {
  //       title: 'Server vs client components',
  //       text: 'Keeping most of the page on the server and pushing client code down to the smallest pieces.',
  //     },
  //   ],
  // },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);

/** Previous and next project (wraps around) for the pager on detail pages. */
export function getAdjacent(slug: string) {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  return {
    prev: PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length],
    next: PROJECTS[(i + 1) % PROJECTS.length],
  };
}
