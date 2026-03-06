/**
 * Go Green Mowing — Brand Guidelines
 * 
 * Formalized brand identity system inspired by the Anthropic brand-guidelines skill.
 * This is the single source of truth for all brand colors, typography, spacing,
 * and component styling across the website.
 * 
 * Based on: go-green-mowing-brand-brief.md & go-green-mowing-design-directi.md
 */

// ═══════════════════════════════════════════════════
// COLORS
// ═══════════════════════════════════════════════════

export const brand = {
    colors: {
        // Primary palette
        primary: {
            forest: "#1C3A1C",       // Deep forest green — headers, navbar, footer, hero
            lime: "#7AB648",          // Vibrant lime — CTAs, accents, hover states, trust signals
            emerald: "#2D5A2D",       // Rich emerald — secondary text on dark, icon backgrounds
        },

        // Neutral palette
        neutral: {
            black: "#1A1A18",         // Near-black — primary text
            darkGray: "#4A4A44",      // Body text, secondary content
            midGray: "#999",          // Muted text, metadata, timestamps
            lightBorder: "rgba(0,0,0,0.06)",  // Container borders (light)
            lightBorderDark: "rgba(0,0,0,0.08)", // Dividers, separators
        },

        // Backgrounds
        background: {
            cream: "#FDFCFA",         // Page background, light sections
            warmGray: "#F7F4EE",      // Alternating section backgrounds
            white: "#FFFFFF",         // Cards, form containers
            forestOverlay: "rgba(28, 58, 28, 0.97)", // Scrolled navbar
        },

        // On-dark palette (for use on dark backgrounds)
        onDark: {
            text: "#FFFFFF",                      // Primary text on dark
            textMuted: "rgba(255,255,255,0.55)",  // Body text on dark
            textFaint: "rgba(255,255,255,0.4)",   // Metadata on dark
            border: "rgba(255,255,255,0.06)",     // Borders on dark
            surface: "rgba(255,255,255,0.04)",    // Card surface on dark
        },

        // Accent
        accent: {
            gold: "#D4A843",          // Stars, ratings
            limeHover: "#8DC95A",     // Lime hover state
            limeBg: "rgba(122, 182, 72, 0.12)",   // Icon backgrounds
            limeLight: "rgba(122, 182, 72, 0.1)",  // Category badges
        },
    },

    // ═══════════════════════════════════════════════════
    // TYPOGRAPHY
    // ═══════════════════════════════════════════════════

    fonts: {
        heading: "'Playfair Display', serif",   // All headings — elegant, premium feel
        body: "'DM Sans', sans-serif",          // All body text — clean, modern readability
    },

    // Font sizes (clamp-based responsive)
    fontSizes: {
        // Headings
        hero: "clamp(2.4rem, 5vw, 3.5rem)",    // Hero h1
        h1: "clamp(2rem, 4vw, 3rem)",           // Page titles
        h2: "clamp(1.8rem, 3vw, 2.6rem)",       // Section headings
        h3: "1.15rem",                          // Card titles, sub-sections
        h4: "0.95rem",                          // Small headings

        // Body
        bodyLg: "1rem",                         // Lead paragraphs
        body: "0.95rem",                        // Standard body text
        bodySm: "0.88rem",                      // Buttons, form labels
        caption: "0.82rem",                     // Descriptions, card text
        small: "0.75rem",                       // Tags, metadata
        tiny: "0.72rem",                        // Timestamps, fine print
        micro: "0.7rem",                        // Category labels
        nano: "0.65rem",                        // Uppercase labels
    },

    // Line heights
    lineHeights: {
        tight: 1.12,      // Hero headings
        heading: 1.2,     // Section headings
        snug: 1.3,        // Card titles
        body: 1.7,        // Standard body text
        relaxed: 1.8,     // Lead paragraphs
    },

    // Font weights
    weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },

    // ═══════════════════════════════════════════════════
    // SPACING & LAYOUT
    // ═══════════════════════════════════════════════════

    spacing: {
        maxWidth: "1320px",
        sectionPadding: "py-24 lg:py-32",
        containerPadding: "px-6 lg:px-8",
        navHeight: "68px",
    },

    // ═══════════════════════════════════════════════════
    // COMPONENT PATTERNS
    // ═══════════════════════════════════════════════════

    components: {
        // CTA Button (primary)
        buttonPrimary: {
            backgroundColor: "#7AB648",
            color: "#1C3A1C",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.88rem",
        } as React.CSSProperties,

        // CTA Button (outline on dark)
        buttonOutline: {
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#FFFFFF",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: "0.88rem",
        } as React.CSSProperties,

        // Section label (LimeLabel)
        sectionLabel: {
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            color: "#7AB648",
            textTransform: "uppercase" as const,
        } as React.CSSProperties,

        // Card container (light)
        cardLight: {
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(0,0,0,0.06)",
        } as React.CSSProperties,

        // Card container (dark)
        cardDark: {
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "4px",
        } as React.CSSProperties,
    },

    // ═══════════════════════════════════════════════════
    // BUSINESS INFORMATION
    // ═══════════════════════════════════════════════════

    business: {
        name: "Go Green Mowing",
        tagline: "Eco-Friendly Lawn Care You Can Trust",
        phone: "+1778 558 0447",
        phoneHref: "tel:+17785580447",
        email: "info@gogreenmowing.ca",
        location: "South Surrey, BC, Canada",
        website: "gogreenmowing.ca",
        hours: "Monday – Saturday, 7am – 7pm",
        founded: "2014",
        areasServed: [
            "South Surrey",
            "White Rock",
            "Surrey",
            "Langley",
            "Delta",
            "Metro Vancouver",
        ],
    },
} as const;

// ═══════════════════════════════════════════════════
// STYLE HELPERS
// ═══════════════════════════════════════════════════

/** Standard heading style */
export function headingStyle(
    size: keyof typeof brand.fontSizes = "h2",
    color: string = brand.colors.neutral.black
): React.CSSProperties {
    return {
        fontFamily: brand.fonts.heading,
        fontSize: brand.fontSizes[size],
        fontWeight: brand.weights.bold,
        lineHeight: brand.lineHeights.heading,
        color,
    };
}

/** Standard body text style */
export function bodyStyle(
    size: keyof typeof brand.fontSizes = "body",
    color: string = brand.colors.neutral.darkGray
): React.CSSProperties {
    return {
        fontFamily: brand.fonts.body,
        fontSize: brand.fontSizes[size],
        lineHeight: brand.lineHeights.body,
        color,
    };
}

/** Uppercase label style (category badges, trust signals) */
export function labelStyle(color: string = brand.colors.primary.lime): React.CSSProperties {
    return {
        fontFamily: brand.fonts.body,
        fontSize: brand.fontSizes.nano,
        fontWeight: brand.weights.semibold,
        letterSpacing: "0.12em",
        color,
        textTransform: "uppercase",
    };
}
