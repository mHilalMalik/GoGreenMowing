export interface PortfolioProject {
    title: string;
    category: PortfolioCategory;
    /** Neighbourhood or city the work was done in. */
    location: string;
    desc: string;
    /** Path under /public — self-hosted so the site works under a strict CSP. */
    img: string;
    alt: string;
    /** Shown in the homepage teaser grid. */
    featured?: boolean;
}

export type PortfolioCategory =
    | "Lawn Care"
    | "Hedges & Pruning"
    | "Seasonal"
    | "Landscaping"
    | "Exterior Cleaning";

export const portfolioCategories: PortfolioCategory[] = [
    "Lawn Care",
    "Hedges & Pruning",
    "Seasonal",
    "Landscaping",
    "Exterior Cleaning",
];

export const portfolioProjects: PortfolioProject[] = [
    {
        title: "Weekly Mowing Program",
        category: "Lawn Care",
        location: "Morgan Heights, South Surrey",
        desc: "A weekly mowing schedule running May through October on a battery-electric mower. Clippings are grasscycled back into the lawn, which supplies a meaningful share of its nitrogen for free.",
        img: "/images/services/lawn_mowing_service.png",
        alt: "Go Green Mowing technician mowing a striped front lawn in Morgan Heights, South Surrey",
        featured: true,
    },
    {
        title: "Striped Lawn Finish",
        category: "Lawn Care",
        location: "Grandview Heights, Surrey",
        desc: "Alternating mow direction each visit to keep the grass standing upright and avoid compacted wheel tracks. Cut height held at 3.5 inches through the summer to conserve soil moisture.",
        img: "/images/services/lawn-mowing.png",
        alt: "Freshly mowed lawn with clean alternating stripes at a Grandview Heights property",
    },
    {
        title: "Formal Hedge Shearing",
        category: "Hedges & Pruning",
        location: "Ocean Park, South Surrey",
        desc: "A boxwood boundary hedge sheared back to a crisp line in the late-June window, tapered slightly wider at the base so light still reaches the lower growth. Cut on a dry day — open cuts on damp boxwood are an entry point for blight.",
        img: "/images/services/hedge_trimming_service.png",
        alt: "Go Green Mowing crew shearing a formal boxwood hedge at an Ocean Park property",
        featured: true,
    },
    {
        title: "Street-Side Hedge Line",
        category: "Hedges & Pruning",
        location: "Sunnyside, South Surrey",
        desc: "A long frontage hedge held to a consistent height and a straight face along the sidewalk, with the lawn edge cut back at the same visit. Boundary hedges are where a wandering line shows most.",
        img: "/images/services/hedge-trimming.png",
        alt: "Neatly trimmed street-side hedge running along a sidewalk in Sunnyside, South Surrey",
    },
    {
        title: "Ornamental Pruning",
        category: "Hedges & Pruning",
        location: "Crescent Park, South Surrey",
        desc: "Selective structural pruning on established garden shrubs — dead and crossing wood removed, canopy opened to let light and air into the interior rather than shearing the outside.",
        img: "/images/services/pruning_service.png",
        alt: "Selective pruning cuts being made on an ornamental garden shrub",
    },
    {
        title: "Spring Core Aeration",
        category: "Seasonal",
        location: "Elgin, South Surrey",
        desc: "Core aeration to break up the compaction left by a saturating coastal winter, followed immediately by overseeding so the seed drops straight into the open holes.",
        img: "/images/services/aeration_service.png",
        alt: "Core aeration machine pulling soil plugs from a lawn in Elgin, South Surrey",
        featured: true,
    },
    {
        title: "Power Raking & Moss Removal",
        category: "Seasonal",
        location: "Crescent Beach, South Surrey",
        desc: "A heavily mossed lawn stripped back in March, then aerated, overseeded and fed. Moss near the water is a drainage and light problem before it is a moss problem.",
        img: "/images/services/power_raking_service.png",
        alt: "Power rake pulling moss and thatch out of a lawn near Crescent Beach",
    },
    {
        title: "Front Yard Seasonal Refresh",
        category: "Seasonal",
        location: "Morgan Creek, Surrey",
        desc: "Beds re-edged and re-mulched, shrubs shaped, and the lawn brought back after winter. The crisp bed line does more for curb appeal than almost anything else on the list.",
        img: "/images/services/seasonal_cleanup_service.png",
        alt: "Freshly mulched garden beds and manicured lawn at a Morgan Creek home",
        featured: true,
    },
    {
        title: "Fall Cleanup",
        category: "Seasonal",
        location: "Elgin Chantrell, Surrey",
        desc: "Full leaf clearing, bed cutback, and a final low mow before the wet season. Leaves left to mat down over winter are the single biggest cause of the moss found in spring.",
        img: "/images/services/seasonal-cleanup.png",
        alt: "Fall leaf cleanup underway at an Elgin Chantrell property",
    },
    {
        title: "Organic Fertilizing Program",
        category: "Lawn Care",
        location: "Rosemary Heights, Surrey",
        desc: "Three slow-release organic feeds a year — April, late June and September. No re-entry period, so the family can use the lawn the same day it is treated.",
        img: "/images/services/fertilizing_service.png",
        alt: "Applying organic slow-release fertilizer to a lawn in Rosemary Heights",
    },
    {
        title: "Soil Health Restoration",
        category: "Lawn Care",
        location: "South Surrey",
        desc: "A thin, tired lawn rebuilt over two seasons by feeding the soil rather than the grass. Organic matter improves the water retention that clay-heavy Lower Mainland soils lack.",
        img: "/images/services/fertilizer.png",
        alt: "Organic lawn fertilizer being spread across a South Surrey lawn",
    },
    {
        title: "Garden Bed Maintenance",
        category: "Landscaping",
        location: "Rosemary Heights, Surrey",
        desc: "Ongoing bed care through the season — weeding, edging, mulching and seasonal planting — so the garden holds its shape rather than being rescued once a year.",
        img: "/images/services/gardening_service.png",
        alt: "Weeding and maintaining a planted garden bed in Rosemary Heights",
    },
    {
        title: "Front Garden & Walkway Design",
        category: "Landscaping",
        location: "Morgan Creek, Surrey",
        desc: "A flagstone walkway set through curved planting beds, with a mix chosen for year-round interest and low upkeep. Designed for how the property is actually used, not just how it photographs.",
        img: "/images/services/landscaping_service.png",
        alt: "Flagstone walkway curving through landscaped garden beds at a Morgan Creek home",
        featured: true,
    },
    {
        title: "Driveway Power Washing",
        category: "Exterior Cleaning",
        location: "White Rock",
        desc: "A winter's worth of algae and moss taken off a concrete driveway with biodegradable solutions and pressure matched to the surface — important this close to Semiahmoo Bay.",
        img: "/images/services/power_washing_service.png",
        alt: "Power washing algae and moss off a concrete driveway in White Rock",
    },
    {
        title: "Patio & Walkway Restoration",
        category: "Exterior Cleaning",
        location: "Ocean Park, South Surrey",
        desc: "Paver patio and walkway cleaned back to their original colour. Beyond appearance, clearing moss off walkways removes a genuine slip hazard through the wet months.",
        img: "/images/services/power-washing.png",
        alt: "Restored paver patio after eco-friendly power washing in Ocean Park",
    },
    {
        title: "Gutter Clearing",
        category: "Exterior Cleaning",
        location: "South Surrey",
        desc: "Gutters and downspouts cleared in late November, once the leaves had finished dropping, then flushed to confirm water was actually running out where it should.",
        img: "/images/services/gutter_cleaning_service.png",
        alt: "Clearing leaf debris from a residential gutter in South Surrey",
    },
    {
        title: "Green Waste Haul-Away",
        category: "Seasonal",
        location: "Surrey",
        desc: "Every job we finish, the green waste leaves with us and goes to a composting facility rather than the landfill. No bags left at the curb for the homeowner to deal with.",
        img: "/images/services/green_waste_removal_service.png",
        alt: "Bagged green waste being loaded for composting after a Surrey yard cleanup",
    },
    {
        title: "Post-Cleanup Green Waste Removal",
        category: "Seasonal",
        location: "Langley",
        desc: "A full backyard clearing with all the trimmings and cuttings hauled out the same day, leaving the property usable immediately rather than a week later.",
        img: "/images/services/green_waste_removal_service_v2.png",
        alt: "Go Green Mowing crew member carrying bagged green waste out of a Langley backyard",
    },
];

/** The subset shown in the homepage teaser grid. */
export const featuredProjects = portfolioProjects.filter((p) => p.featured);
