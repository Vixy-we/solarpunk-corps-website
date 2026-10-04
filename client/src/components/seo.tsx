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
    title: siteName,
    description: 'Solarpunk Corps is a student-led club at BIET Jhansi building robotics, sustainable technology and community projects through hands-on learning and creative collaboration.',
    image: '/SPC_logo.png',
    url: siteUrl,
    type: 'website',
    author: siteName,
    keywords: 'Solarpunk Corps, BIET Jhansi, student club, robotics, sustainable technology, engineering projects, community innovation',
    robots: 'index, follow',
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

    const keywordsContent = Array.isArray(keywords) ? keywords.join(', ') : keywords;

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
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    );
}
