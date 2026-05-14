type SiteConfig = {
    title: string;
    description: string;
    author: string;
    siteUrl: string;
    ogImage: string;
    locale: string;
    twitter: {
        site: string;
    };
};

type SocialsConfig = {
    instagram: string;
    tiktok: string;
    x: string;
    youtube: string;
};

export const SITE = (): SiteConfig => {
    return {
        title: "@onticdani",
        description:
            "Content creator. Follow me on social media for daily content.",
        author: "onticdani",
        siteUrl: "https://onticdani.com/",
        ogImage: "/src/assets/images/og-image.jpg",
        locale: "en_US",
        twitter: { site: "@onticdani" },
    };
};

export const SOCIALS = (): SocialsConfig => ({
    instagram: "https://instagram.com/onticdani",
    tiktok: "https://www.tiktok.com/@onticdani",
    x: "https://x.com/onticdani",
    youtube: "https://www.youtube.com/@onticdani",
});
