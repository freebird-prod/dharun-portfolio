type PageSEO = {
    title: string;
    description: string;
    keywords: string[];
    image?: string;
    type?: 'website' | 'article' | 'profile';
};

const defaultImage = '/logo.svg';

const seoByPath: Record<string, PageSEO> = {
    '/': {
        title: 'Dharun Kumar S H | Front-End Developer | React.js & Next.js',
        description:
            'Aspiring Front-end developer focused on building optimized, responsive websites. Advancing in React, Next.js, TypeScript, Tailwind CSS.',
        keywords: [
            'Front-End Developer',
            'React Developer',
            'Next.js Developer',
            'TypeScript Expert',
            'Web Performance Optimization',
            'Responsive Web Design',
            'Tailwind CSS Specialist',
            'UI/UX Development',
            'Core Web Vitals',
            'High-Performance Websites',
            'SEO-Friendly Development',
        ],
        image: defaultImage,
    },
    '/about': {
        title: 'About | Dharun Kumar S H',
        description:
            'Learn about Dharun Kumar S H: React developer, UI/UX enthusiast, hackathon participant, and lifelong learner with a passion for building seamless web experiences.',
        keywords: [
            'about Dharun Kumar',
            'React developer bio',
            'frontend skills',
            'tech stack',
            'timeline',
        ],
        image: defaultImage,
    },
    '/projects': {
        title: 'Projects | React, AI, Full-Stack Builds',
        description:
            'Browse projects spanning React, Next.js, AI tools, image generation, resume analyzers, and IoT dashboards built with modern web stacks.',
        keywords: [
            'React projects',
            'Next.js portfolio',
            'AI tools',
            'web apps',
            'full stack developer',
            'Tailwind projects',
        ],
        image: defaultImage,
    },
    '/certifications': {
        title: 'Certifications & Achievements | Dharun Kumar S H',
        description:
            'Verified certifications, workshops, internships, and hackathon achievements covering Flutter, React, AI, RAG, and cloud skills.',
        keywords: [
            'certifications',
            'hackathon awards',
            'internships',
            'Flutter certificate',
            'MongoDB course',
        ],
        image: defaultImage,
    },
    '/events': {
        title: 'Events & Hackathons | Dharun Kumar S H',
        description:
            'Participation across hackathons, workshops, and competitions with AI, web, and UI/UX projects, including winning entries and team roles.',
        keywords: [
            'hackathons',
            'tech events',
            'workshops',
            'competitions',
            'event portfolio',
        ],
        image: defaultImage,
    },
    '/contact': {
        title: 'Contact | Work with Dharun Kumar S H',
        description:
            'Get in touch to collaborate on React, Next.js, or UI/UX projects. Reach out via email, social links, or the contact form for fast replies.',
        keywords: [
            'contact Dharun Kumar',
            'hire React developer',
            'collaboration',
            'portfolio contact',
        ],
        image: defaultImage,
    },
};

const normalizePath = (pathname: string): string => {
    if (!pathname || pathname === '/') return '/';
    const trimmed = pathname.replace(/\/+$/, '');
    return trimmed === '' ? '/' : trimmed;
};

const ensureMetaTag = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
    if (!content) return;
    const selector = `${attr}="${name}"`;
    let tag = document.head.querySelector<HTMLMetaElement>(`meta[${selector}]`);
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
};

const ensureCanonical = (url: string) => {
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
    }
    link.href = url;
};

export const applyPageSEO = (pathname: string) => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;

    const normalizedPath = normalizePath(pathname);
    const meta = seoByPath[normalizedPath] || seoByPath['/'];
    const pageUrl = `${window.location.origin}${normalizedPath}`;
    const image = meta.image || defaultImage;
    const type = meta.type || 'website';

    document.title = meta.title;

    ensureMetaTag('description', meta.description);
    ensureMetaTag('keywords', meta.keywords.join(', '));
    ensureMetaTag('robots', 'index,follow');

    ensureMetaTag('og:title', meta.title, 'property');
    ensureMetaTag('og:description', meta.description, 'property');
    ensureMetaTag('og:type', type, 'property');
    ensureMetaTag('og:url', pageUrl, 'property');
    ensureMetaTag('og:image', image, 'property');

    ensureMetaTag('twitter:card', 'summary_large_image');
    ensureMetaTag('twitter:title', meta.title);
    ensureMetaTag('twitter:description', meta.description);
    ensureMetaTag('twitter:image', image);

    ensureCanonical(pageUrl);
};

export type { PageSEO };
