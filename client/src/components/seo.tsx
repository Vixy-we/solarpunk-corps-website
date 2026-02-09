import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
}

const defaultMeta = {
    title: 'Solarpunk Corps',
    description: 'Solarpunk Corps is a student-led club at BIET Jhansi blending robotics, sustainability, creativity, and community action. Join the movement for hopeful innovation.',
    image: '/SPC_logo.png',
    url: 'https://solarpunkcorps.vercel.app',
    type: 'website',
};

export function SEO({
    title,
    description = defaultMeta.description,
    image = defaultMeta.image,
    url = defaultMeta.url,
    type = defaultMeta.type,
}: SEOProps) {
    const fullTitle = title
        ? `${title} | Solarpunk Corps`
        : defaultMeta.title;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
}
