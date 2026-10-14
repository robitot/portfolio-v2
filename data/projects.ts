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
    timeline: '3 months',
    team: 'Solo',
    status: 'Live',
    featured: true,
    links: {
      live: 'https://coffee-shop-inv-pos.up.railway.app/',
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
    demo: {
      email: 'admin@gmail.com',
      password: 'admin123',
      url: 'https://coffee-shop-inv-pos.up.railway.app/',
      source: '',
    },
  },
  {
    slug: 'ferry-booking',
    title: 'Ferry Booking System',
    tagline: 'A Simple Ferry Booking System',
    summary:
      'A comprehensive ferry booking system featuring an intuitive visual booking interface, real-time seat availability, and efficient seat management for each ferry, streamlining reservations and enhancing the passenger booking experience',
    category: 'Full Stack',
    year: '2025',
    role: 'Full Stack Developer',
    timeline: '3 months',
    team: 'Solo',
    status: 'Live',
    links: {
      live: 'https://ferry-booking-system.up.railway.app/',
    },
    tech: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'PHP', 'Laravel', 'MySQL'],
    stack: [
      {
        label: 'Frontend',
        items: ['HTML', 'CSS', 'Tailwind', 'JavaScript'],
      },
      {
        label: 'Backend',
        items: ['PHP', 'Laravel'],
      },
      {
        label: 'Data & Infra',
        items: ['MySQL', 'Railway'],
      },
    ],
    problem:
      'Inefficient and unorganized ferry booking management due to reliance on social media platforms such as Facebook, resulting in booking conflicts, duplicate reservations, inaccurate seat availability, delayed responses, and a high risk of human error',
    solution:
      'Develop a centralized ferry booking system with dedicated client and admin interfaces, enabling passengers to conveniently book trips, select seats through an interactive visual seating layout, and process payments securely. The system will provide real-time seat availability, automated booking management, and centralized reservation tracking to minimize booking conflicts, reduce manual errors, and improve overall operational efficiency and customer experience.',
    features: [
      {
        title: 'Client-Facing System',
        text: 'Passengers can conveniently book ferry trips, select seats through an interactive seating layout, manage their reservations, and complete payments through a single, user-friendly platform.',
      },
      {
        title: 'Ferry and Seat Management',
        text: 'Admins can manage ferry details, configure seat types and capacities, and customize seat layouts and numbering to ensure accurate seat allocation and efficient booking management.',
      },
      {
        title: 'Integrated Payment System',
        text: 'Passengers can securely complete their payments directly within the platform, simplifying transactions, streamlining booking confirmation, and providing a more convenient and seamless reservation experience.',
      },
      {
        title: 'Route and Destination Management',
        text: 'Admins can manage ferry routes, destinations, schedules, and trip details, while passengers can view available trips, track booking statuses, and access their reservation history in one centralized platform.',
      },
    ],
    metrics: [
      {
        value: 'XX',
        label: 'Product pages',
      },
      {
        value: 'XX ms',
        label: 'Average page load',
      },
      {
        value: '100%',
        label: 'Mobile responsive',
      },
    ],
    challenges: [
      {
        title: 'Interactive Ferry Layout and Real-Time Seat Availability',
        text: 'Designing an accurate visual representation of ferry seating and bed arrangements, including different seat types, capacities, and availability. Ensuring seat selections and booking statuses remain synchronized to prevent double bookings and provide passengers with a reliable booking experience.',
      },

      {
        title: 'Learning and Implementing Payment Integration',
        text: 'Integrating a payment gateway was a new technical challenge that required dedicated time for research, understanding payment workflows, and implementing secure and reliable transactions within the booking system.',
      },
    ],
    image: '/images/ferry/home.png',
    gallery: [
      '/images/ferry/details.png',
      '/images/ferry/clientroutes.png',
      '/images/ferry/routes.png',
    ],
    demo: {
      email: 'admin@gmail.com',
      password: 'Admin123',
      url: 'https://ferry-booking-system.up.railway.app/',
      source: '',
    },
  },
  {
    slug: 'rk-prints',
    title: 'RK Prints — Business Landing Page',
    tagline:
      'A responsive business website featuring a product catalog, showcasing print services, and presenting products in a clean, user-friendly layout.',
    summary:
      'A responsive landing website for RK Prints, showcasing printing services and products through a clean, organized interface designed to help customers explore offerings and find relevant product information.',
    category: 'Frontend',
    year: '2026',
    role: 'Frontend Developer',
    timeline: '3 days',
    team: 'Solo',
    status: 'Live',
    links: {
      live: 'https://www.rkprints.shop/',
    },
    tech: ['HTML', 'CSS', 'Javascript', 'ReactJS', 'TypeScript', 'Tailwind'],
    stack: [
      {
        label: 'Frontend',
        items: ['React', 'TypeScript', 'Tailwind CSS'],
      },
      {
        label: 'Tooling',
        items: ['Codex', 'Git', 'GitHub', 'Figma'],
      },
    ],
    problem:
      'Limited online visibility and the absence of a centralized digital product catalog make it difficult for customers to discover printing services, browse available products, and access essential business information.',
    solution:
      'Developed a responsive landing website to establish an online presence, showcase printing services, provide an organized product catalog, and help customers easily explore available offerings and business information.',
    features: [
      {
        title: 'Services Section',
        text: 'Showcases the available printing services through a clean, organized layout, helping customers quickly understand the business offerings and find the services they need.',
      },
      {
        title: 'Product Display',
        text: 'Presents available products in an organized, visually appealing catalog, allowing customers to browse product listings and easily explore the business offerings.',
      },
    ],
    metrics: [
      {
        value: 'XX kB',
        label: 'Total bundle size',
      },
      {
        value: 'XX',
        label: 'Lighthouse performance',
      },
      {
        value: 'XX',
        label: 'GitHub stars',
      },
    ],
    challenges: [
      {
        title: 'Designing a User-Friendly Interface',
        text: 'Creating a clean, responsive layout that effectively showcases printing services and products while ensuring a smooth browsing experience across desktop and mobile devices.',
      },
      {
        title: 'Establishing a Consistent Color Scheme',
        text: 'Selecting and applying a cohesive color palette that reflects the brand identity, maintains visual consistency, and improves readability throughout the website.',
      },
    ],
    image: '/images/rk/hero.png',
    gallery: ['/images/rk/detail.png', '/images/rk/contact.png', '/images/rk/products.png'],
  },
  {
    slug: 'simple-pos',
    title: 'Simple Inventory and POS System',
    tagline: 'A Simple Inv and POS system for small businesses',
    summary:
      'This system highlights a comprehensive Point of Sale (POS) solution designed to deliver detailed, accurate, and reliable transaction management. It streamlines sales operations, improves inventory tracking, minimizes manual errors, and provides clear, organized records for better monitoring and reporting. With its focus on accuracy, efficiency, and consistency, the system helps businesses optimize daily operations, make informed decisions, and maintain better control over their sales and inventory processes.',
    category: 'Full Stack',
    year: '2025',
    role: 'Designer and Developer',
    timeline: '2 Months',
    team: 'Solo',
    status: 'Live',
    links: {
      live: 'https://simplepos.up.railway.app/',
      repo: 'https://github.com/robitot/Simple-POS-System',
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
      'Inaccurate sales records caused by manual data entry, transaction errors, and inconsistent tracking can lead to discrepancies in sales reports, inventory levels, and financial records. These issues make it difficult for businesses to monitor actual sales performance, reconcile transactions, and make informed business decisions.',
    solution:
      'An integrated Point of Sale (POS) and Inventory Management System that automatically records sales transactions and updates inventory levels in real time. It minimizes manual errors, ensures accurate sales reporting, maintains consistent stock records, and provides reliable data for monitoring business performance and making informed decisions.',
    features: [
      {
        title: 'Dashboard',
        text: 'View key business metrics, sales performance, transaction summaries, and inventory insights in one centralized dashboard.',
      },
      {
        title: 'Inventory Management',
        text: 'Track stock levels, monitor product availability, and maintain accurate inventory records with automatic stock updates from sales transactions.',
      },
      {
        title: 'Point of Sale (POS)',
        text: 'Process sales transactions efficiently, calculate totals accurately, and generate reliable sales records while automatically updating inventory.',
      },
      {
        title: 'POS Session Management',
        text: 'Manage cashier sessions, monitor starting and ending cash balances, track transactions per session, and reconcile cash discrepancies for improved accountability.',
      },
    ],
    metrics: [
      {
        value: 'XX',
        label: 'Lighthouse accessibility',
      },
      {
        value: '0',
        label: 'UI libraries used',
      },
      {
        value: 'XX',
        label: 'Reusable components',
      },
    ],
    challenges: [
      {
        title: 'Dynamic Receipt Printing Integration',
        text: 'Implementing receipt printing without access to the client’s physical printer for testing. The solution required a dynamic printing approach that supports receipt formatting and printing while remaining adaptable to different printer setups.',
      },
      {
        title: 'Detailed POS Transaction Management',
        text: 'Ensuring every POS transaction captures accurate and complete details, including purchased items, quantities, prices, payment information, and transaction totals. Maintaining consistent records helps improve sales accuracy, inventory tracking, and transaction auditing.',
      },
    ],
    image: '/images/simplePOS/login.png',
    gallery: [
      '/images/simplePOS/sidebar.png',
      '/images/simplePOS/dashboard.png',
      '/images/simplePOS/possession.png',
    ],
    demo: {
      email: 'admin@gmail.com',
      password: 'admin123',
      url: 'https://simplepos.up.railway.app/',
      source: 'https://github.com/robitot/Simple-POS-System',
    },
  },
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
