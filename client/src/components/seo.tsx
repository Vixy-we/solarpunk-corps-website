import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    canonical?: string;
    jsonLd?: Record<string, any>;
    keywords?: string | string[];
    author?: string;
    robots?: string;
}

const siteUrl = 'https://solarpunkcorps.vercel.app';
const siteName = 'Solarpunk Corps';

const defaultMeta = {
    title: `${siteName} (SPC) | Robotics Club BIET Jhansi | Bundelkhand Institute of Engineering & Technology, Jhansi`,
    description: 'Solarpunk Corps (SPC) is a student-led robotics and sustainability club in the Mechanical Engineering Department at Bundelkhand Institute of Engineering and Technology (BIET), Jhansi. At the intersection of robotics, AI, sustainable development, real-world impact, and social work, we build practical solutions for people and the planet. Officially representing SPC BIET Jhansi (Bundelkhand Institute of Engineering & Technology, Jhansi) for robotics, engineering innovations, and green technology.',
    image: '/SPC_logo.png',
    url: siteUrl,
    type: 'website',
    author: siteName,
    keywords: 'Solarpunk Corps, SPC, BIET Jhansi, Mechanical Engineering, robotics, artificial intelligence, AI, sustainable development, real-world impact, social work, sustainability club, robotics club biet jhansi, biet jhansi, Bundelkhand Institute of Engineering & Technology, Jhansi, Bundelkhand Institute of Engineering and Technology Jhansi, Bundelkhand Institute of Engineering & Technology, Bundelkhand Institute of Engineering and Technology, BIET, biet, bietjhansi, biet jhansi robotics, biet jhansi robotics club, biet robotics club, spc, spc biet, spc biet jhansi, SPC BIET, SPC BIET Jhansi, SPC Jhansi, robotics club, robotics society, student robotics club biet, biet jhansi college, biet college jhansi, biet jhs, bietjhs.ac.in, bietjhansi.ac.in, biet jhansi official club, biet jhansi student clubs, biet jhansi technical club, department of mechanical engineering biet jhansi, solarpunk corps biet jhansi, solarpunk corps biet',
    robots: 'index, follow',
};

const CORE_COLLEGE_KEYWORDS = [
    "robotics club biet jhansi",
    "biet jhansi",
    "Bundelkhand Institute of Engineering & Technology, Jhansi",
    "Bundelkhand Institute of Engineering and Technology, Jhansi",
    "Bundelkhand Institute of Engineering & Technology",
    "Bundelkhand Institute of Engineering and Technology",
    "BIET Jhansi",
    "BIET",
    "biet",
    "spc",
    "SPC",
    "spc biet",
    "spc biet jhansi",
    "SPC BIET",
    "SPC BIET Jhansi",
    "SPC Jhansi",
    "biet jhansi robotics",
    "biet jhansi robotics club",
    "biet robotics club",
    "biet jhansi college",
    "biet college jhansi",
    "biet jhs",
    "bietjhs.ac.in",
    "bietjhansi.ac.in",
    "biet jhansi official club",
    "Solarpunk Corps",
    "Solarpunk Corps BIET Jhansi",
    "robotics club",
    "sustainability club biet jhansi",
    "department of mechanical engineering biet jhansi"
];

const defaultOrganizationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "CollegeOrUniversity",
            "@id": "http://bietjhs.ac.in/#college",
            "name": "Bundelkhand Institute of Engineering & Technology, Jhansi",
            "alternateName": [
                "BIET Jhansi",
                "BIET",
                "Bundelkhand Institute of Engineering and Technology, Jhansi",
                "Bundelkhand Institute of Engineering and Technology",
                "Bundelkhand Institute of Engineering & Technology",
                "BIET JHS"
            ],
            "url": "http://bietjhs.ac.in",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kanpur Road, NH-25",
                "addressLocality": "Jhansi",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "284128",
                "addressCountry": "IN"
            }
        },
        {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            "name": "Solarpunk Corps",
            "alternateName": [
                "SPC",
                "SPC BIET",
                "SPC BIET Jhansi",
                "SPC Jhansi",
                "Solarpunk Corps BIET Jhansi",
                "Robotics Club BIET Jhansi",
                "BIET Jhansi Robotics Club",
                "Robotics & Sustainability Club at BIET Jhansi"
            ],
            "description": defaultMeta.description,
            "url": siteUrl,
            "logo": `${siteUrl}/SPC_logo.png`,
            "parentOrganization": {
                "@id": "http://bietjhs.ac.in/#college"
            },
            "affiliation": {
                "@id": "http://bietjhs.ac.in/#college"
            },
            "department": {
                "@type": "EducationalOrganization",
                "name": "Department of Mechanical Engineering, BIET Jhansi"
            },
            "sameAs": [
                "https://www.linkedin.com/company/solarpunk-corps/",
                "https://x.com/SolarpunkCorps",
                "https://github.com/SolarpunkCorps",
                "https://www.instagram.com/we.the.spc/"
            ],
            "knowsAbout": [
                "Robotics Club",
                "Robotics Club BIET Jhansi",
                "BIET Jhansi",
                "Bundelkhand Institute of Engineering & Technology, Jhansi",
                "Bundelkhand Institute of Engineering and Technology",
                "SPC BIET",
                "SPC BIET Jhansi",
                "Artificial Intelligence",
                "Sustainable Engineering",
                "Mechanical Engineering"
            ]
        }
    ]
};

export function SEO({
    title,
    description = defaultMeta.description,
    image = defaultMeta.image,
    url,
    type = defaultMeta.type,
    canonical,
    jsonLd,
    keywords = defaultMeta.keywords,
    author = defaultMeta.author,
    robots = defaultMeta.robots,
}: SEOProps) {
    const fullTitle = title
        ? (title.includes(siteName) ? title : `${title} | ${siteName}`)
        : defaultMeta.title;

    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
    const normalizedPath = currentPath.replace(/\/+$/, '') || '/';
    const canonicalPath = normalizedPath === '/sponsors/alumni' ? '/alumni' : normalizedPath;
    const currentUrl = url || new URL(canonicalPath, defaultMeta.url).href;
    const canonicalUrl = canonical || currentUrl;
    const imageUrl = new URL(image, defaultMeta.url).href;

    // Preserve all existing keywords and append college / robotics queries not already present
    const inputKeywords = Array.isArray(keywords)
        ? keywords
        : (keywords ? keywords.split(',').map((k) => k.trim()).filter(Boolean) : []);

    const existingLower = new Set(inputKeywords.map((k) => k.toLowerCase()));
    const additional = CORE_COLLEGE_KEYWORDS.filter((k) => !existingLower.has(k.toLowerCase()));
    const finalKeywords = [...inputKeywords, ...additional];
    const keywordsContent = finalKeywords.join(', ');

    const finalJsonLd = jsonLd || defaultOrganizationJsonLd;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywordsContent} />
            <meta name="author" content={author} />
            <meta name="robots" content={robots} />
            <meta name="googlebot" content={robots} />
            <link rel="canonical" href={canonicalUrl} />

            {/* College & Institution Meta Tags */}
            <meta name="college" content="Bundelkhand Institute of Engineering &amp; Technology, Jhansi (BIET Jhansi)" />
            <meta name="institution" content="Bundelkhand Institute of Engineering and Technology, Jhansi" />
            <meta name="department" content="Department of Mechanical Engineering, BIET Jhansi" />
            <meta name="subject" content="Robotics Club BIET Jhansi | Bundelkhand Institute of Engineering &amp; Technology, Jhansi (SPC)" />
            <meta name="topic" content="Robotics Club at BIET Jhansi, Bundelkhand Institute of Engineering &amp; Technology, Solarpunk Corps, SPC" />
            <meta name="classification" content="Education, Robotics Club, BIET Jhansi, Bundelkhand Institute of Engineering and Technology, Student Organization" />
            <meta name="category" content="Robotics &amp; Sustainability Club, College Student Club, BIET Jhansi" />
            <meta name="target" content="all" />
            <meta name="coverage" content="Worldwide" />
            <meta name="distribution" content="Global" />
            <meta name="rating" content="General" />
            <meta name="geo.region" content="IN-UP" />
            <meta name="geo.placename" content="Jhansi, Bundelkhand Institute of Engineering and Technology" />
            <meta name="geo.position" content="25.4921;78.6186" />
            <meta name="ICBM" content="25.4921, 78.6186" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:alt" content={`${siteName} logo`} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@solarpunkcorps" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify(finalJsonLd)}
            </script>
        </Helmet>
    );
}
