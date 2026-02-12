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

const defaultMeta = {
    title: 'Solarpunk Corps',
    description: 'Solarpunk Corps is a student-led club at BIET Jhansi blending robotics, sustainability, creativity, and community action. Join the movement for hopeful innovation.',
    image: '/SPC_logo.png',
    url: 'https://solarpunkcorps.vercel.app',
    type: 'website',
    author: 'Solarpunk Corps',
    keywords: 'solarpunk, robotics, sustainability, student club, BIET Jhansi, engineering, innovation, green technology, community',
    robots: 'index, follow',
};

export function SEO({
    title,
    description = defaultMeta.description,
    image = defaultMeta.image,
    url = defaultMeta.url,
    type = defaultMeta.type,
    canonical,
    jsonLd,
    keywords = defaultMeta.keywords,
    author = defaultMeta.author,
    robots = defaultMeta.robots,
}: SEOProps) {
    const fullTitle = title
        ? `${title} | Solarpunk Corps`
        : defaultMeta.title;

    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : defaultMeta.url);
    const canonicalUrl = canonical || currentUrl;

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
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Structured Data (JSON-LD) */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    );
}
