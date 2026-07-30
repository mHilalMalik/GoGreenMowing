/**
 * Location pages.
 *
 * IMPORTANT: these must stay genuinely distinct. Google's doorway-page policy
 * targets near-duplicate pages that differ only by a swapped city name. Every
 * field below is written from scratch per city — different neighbourhoods,
 * different soil and terrain problems, different service emphasis, different
 * FAQs. Do not add a new city by copying an existing entry and find-replacing.
 */

export interface LocationContent {
    slug: string;
    /** City name as displayed. */
    city: string;
    metaTitle: string;
    metaDescription: string;
    heroHeadline: string;
    heroSubheadline: string;
    /** Opening paragraphs, before the sections. */
    intro: string[];
    neighbourhoods: string[];
    /** What makes lawn care here different — the substance of the page. */
    sections: { heading: string; body: string[] }[];
    /** Services we emphasise here and why, specific to this city. */
    servicePriorities: { title: string; slug: string; why: string }[];
    faqs: { question: string; answer: string }[];
    /** Portfolio images relevant to this city. */
    gallery: { img: string; alt: string; caption: string }[];
}

export const locationsData: Record<string, LocationContent> = {
    "south-surrey": {
        slug: "south-surrey",
        city: "South Surrey",
        metaTitle: "Lawn Care South Surrey BC | Eco-Friendly Mowing | Go Green Mowing",
        metaDescription:
            "Eco-friendly lawn care in South Surrey BC. Mowing, aeration, hedge trimming, moss control and seasonal cleanups from Grandview Heights to Crescent Beach. Free estimates — 778-558-0447.",
        heroHeadline: "Lawn Care in South Surrey",
        heroSubheadline:
            "We are based here. South Surrey is where the majority of our routes run, and where we know the soil, the slopes and the strata rules street by street.",
        intro: [
            "Go Green Mowing operates out of South Surrey, and this is the community where most of our weekly routes run. That matters more than it sounds: a lawn care company that is genuinely local is on your street every week anyway, which means smaller travel windows, easier reschedules when the rain does not cooperate, and crews who already know that the north side of your house behaves nothing like the south.",
            "South Surrey is not one landscape. A new build in Grandview Heights sits on thin builder topsoil spread over compacted subsoil. An older property in Ocean Park sits under mature conifers with root competition and deep shade. An acreage in Elgin Chantrell has drainage running toward the Nicomekl floodplain. These need different programs, and we quote them differently.",
        ],
        neighbourhoods: [
            "Grandview Heights",
            "Morgan Creek",
            "Morgan Heights",
            "Ocean Park",
            "Crescent Beach",
            "Elgin Chantrell",
            "Sunnyside Park",
            "Rosemary Heights",
            "Douglas",
            "Hazelmere",
        ],
        sections: [
            {
                heading: "Why South Surrey soil is the real problem",
                body: [
                    "Most lawn complaints we get in South Surrey trace back to the same place: glacial till subsoil that drains slowly, sitting under a shallow layer of topsoil. When more than 1,000 mm of rain falls on that between October and March, the root zone stays saturated for months. Grass roots need oxygen. Saturated clay does not supply it, so the turf thins out — and moss, which is perfectly happy in those conditions, takes the space.",
                    "This is why we push core aeration harder in South Surrey than we would in a drier region. Aerating pulls physical plugs out of the profile and gives water and air somewhere to move. On the newer subdivisions in Grandview Heights and Morgan Heights the problem is worse, because the subsoil was driven over by heavy equipment during construction and then covered with a few inches of imported topsoil. Those lawns look fine for two years and then stall out.",
                    "The fix is not more fertilizer. Feeding grass that cannot get oxygen to its roots does very little. The sequence that works here is power rake, aerate, overseed, then feed — in that order, in one spring visit.",
                ],
            },
            {
                heading: "Shade, conifers and the Ocean Park problem",
                body: [
                    "The older, treed parts of South Surrey — Ocean Park, Crescent Park, parts of Elgin — have beautiful mature Douglas fir and cedar and lawns that will never be lush underneath them. Two things are happening at once: the canopy is blocking the four to six hours of direct light most turfgrass needs, and the tree roots are outcompeting the grass for water and nutrients in the top few inches of soil.",
                    "We would rather tell you this up front than sell you a treatment program that cannot work. Under a dense conifer canopy the honest options are overseeding with a shade-tolerant fine fescue blend and accepting a thinner lawn, selectively thinning the canopy to let light through, or converting the area to a shade planting or mulched bed. All three are legitimate. Repeatedly reseeding a deep-shade lawn with sun-grass is not.",
                ],
            },
            {
                heading: "Strata and townhouse properties",
                body: [
                    "A large share of newer South Surrey housing is strata — the townhouse complexes around Morgan Crossing, Morgan Heights and Grandview Corners in particular. Strata grounds work has requirements a detached-home route does not: proof of liability insurance and WorkSafe BC clearance on file with the property manager, scheduled service windows that do not conflict with resident parking, consistent standards across every unit so nobody is comparing their strip to their neighbour's, and one point of contact rather than thirty.",
                    "We carry full liability coverage and WorkSafe BC clearance and can provide documentation to a strata council or property manager before work starts. We also quote strata common areas as a fixed seasonal contract rather than per visit, which is usually easier for a council to budget against.",
                ],
            },
            {
                heading: "What our South Surrey calendar looks like",
                body: [
                    "March is power raking and moss control, because that is when the winter moss is at its peak and the soil is finally workable. Late March into April is core aeration and overseeding, timed so seed goes down while the soil is warming but the spring rain is still reliable. Weekly mowing starts in April and runs at its tightest through May and June, when growth here can exceed an inch a week. July and August we typically move to every seven to ten days and raise the cut height to conserve soil moisture.",
                    "Hedges get their main trim in late June or early July. September is the most valuable fertilizer application of the year and the last safe window for hedge shaping. October through November is leaf clearing, the final low mow, and gutters — done late enough in November that the leaves have actually finished falling.",
                ],
            },
        ],
        servicePriorities: [
            {
                title: "Core Aeration",
                slug: "aeration",
                why: "The highest-impact service on most South Surrey properties, because compacted glacial till under winter rain is the root cause behind thin turf and moss here.",
            },
            {
                title: "Power Raking",
                slug: "power-raking",
                why: "Pulls out the moss and thatch mat that builds through a coastal winter. Without it, overseeding lands on a mat instead of soil and largely fails.",
            },
            {
                title: "Lawn Mowing",
                slug: "lawn-mowing",
                why: "Weekly through the May–June peak, easing to every 7–10 days in summer. Fixed routes mean we are on your street regularly regardless.",
            },
            {
                title: "Hedge Trimming",
                slug: "hedge-trimming",
                why: "Cedar and laurel property lines are everywhere in South Surrey, and each wants the shears at a different point in the season.",
            },
            {
                title: "Fall Cleanups",
                slug: "spring-fall-cleanup",
                why: "The treed neighbourhoods generate serious leaf volume, and leaves left to mat down are the direct cause of next spring's moss.",
            },
        ],
        faqs: [
            {
                question: "Do you serve all of South Surrey?",
                answer:
                    "Yes. We run routes across Grandview Heights, Morgan Creek, Morgan Heights, Ocean Park, Crescent Beach, Elgin Chantrell, Sunnyside Park, Rosemary Heights, Douglas and Hazelmere. South Surrey is our home base, so it has our densest coverage and our shortest scheduling windows.",
            },
            {
                question: "How much does lawn mowing cost in South Surrey?",
                answer:
                    "Roughly $45 to $85 per visit for a typical South Surrey residential property in 2026. Townhouse and small lots run $40–$55, standard detached lots $55–$75, and properties over a quarter acre $85–$150 or more. That covers mowing, line trimming, blowing off hard surfaces and grasscycling the clippings. We quote a fixed per-visit price after seeing the property, with no trip or fuel surcharges.",
            },
            {
                question: "Why does my South Surrey lawn grow so much moss?",
                answer:
                    "Because local conditions favour moss over grass for about five months a year: over 1,000 mm of annual rain concentrated in winter, slow-draining glacial till subsoil, low winter light, shade from mature conifers, and acidic soil around pH 5.0–5.5 when grass wants 6.0–6.5. Moss does not kill grass — it fills space thin, oxygen-starved turf has already given up. Fixing it means addressing compaction and light, not just applying moss killer.",
            },
            {
                question: "When should I aerate my lawn in South Surrey?",
                answer:
                    "Late March through April is ideal — the soil is moist but no longer waterlogged and the grass is entering active growth. September is the second-best window. Avoid aerating in summer heat, in the waterlogged depths of winter, or during drought.",
            },
            {
                question: "Do you work with strata properties and property managers?",
                answer:
                    "Yes. We carry full liability insurance and WorkSafe BC clearance and can supply documentation to a strata council or property manager before work begins. Strata common areas are quoted as a fixed seasonal contract rather than per visit, which is generally easier for a council to budget.",
            },
        ],
        gallery: [
            {
                img: "/images/services/lawn_mowing_service.png",
                alt: "Go Green Mowing crew mowing a front lawn in Morgan Heights, South Surrey",
                caption: "Weekly mowing route — Morgan Heights",
            },
            {
                img: "/images/services/aeration_service.png",
                alt: "Core aeration pulling soil plugs from a lawn in Elgin, South Surrey",
                caption: "Spring core aeration — Elgin",
            },
            {
                img: "/images/services/hedge_trimming_service.png",
                alt: "Go Green Mowing crew shearing a formal hedge at an Ocean Park property in South Surrey",
                caption: "Formal hedge shearing — Ocean Park",
            },
            {
                img: "/images/services/seasonal_cleanup_service.png",
                alt: "Mulched garden beds and manicured lawn at a Morgan Creek home",
                caption: "Seasonal refresh — Morgan Creek",
            },
        ],
    },

    "white-rock": {
        slug: "white-rock",
        city: "White Rock",
        metaTitle: "Lawn Care White Rock BC | Hillside & Small-Lot Specialists | Go Green Mowing",
        metaDescription:
            "Lawn and garden care in White Rock BC. Steep hillside lots, small yards, salt-air exposure and view-corridor hedge work. Eco-friendly products that protect Semiahmoo Bay. 778-558-0447.",
        heroHeadline: "Lawn & Garden Care in White Rock",
        heroSubheadline:
            "Small lots, steep hillsides and salt air. White Rock is a genuinely different job from the rest of the Lower Mainland, and it needs different equipment and a different plan.",
        intro: [
            "White Rock is barely five square kilometres, most of it draped down a hillside facing Semiahmoo Bay. Almost nothing about standard suburban lawn care applies cleanly here. Lots are small, driveways are steep, street parking is contested, and a good share of properties are terraced behind retaining walls that a ride-on mower will never reach.",
            "We service White Rock as its own route rather than as an extension of a South Surrey run, because the equipment and the time budget are different. A White Rock property with a quarter of the turf of a Grandview Heights lot can easily take just as long once you account for the stairs, the terracing and the hand work.",
        ],
        neighbourhoods: [
            "East Beach",
            "West Beach",
            "Marine Drive waterfront",
            "The Hillside",
            "Centennial Park",
            "Five Corners",
            "Uptown White Rock",
            "Semiahmoo",
        ],
        sections: [
            {
                heading: "The hillside changes everything",
                body: [
                    "The slope from the uptown ridge down to Marine Drive is steep enough that gravity dictates most of the work. Water does not sit on a White Rock lawn the way it sits on a flat South Surrey one — it runs off, taking topsoil and applied nutrients with it. So the classic Lower Mainland compaction-and-moss problem is often replaced by the opposite: dry, thin, hungry turf on the upper slope, and a soggy over-fed strip at the bottom of the run.",
                    "That changes the program. On sloped White Rock lawns we favour more frequent, lighter organic feeding over a single heavy application that will largely wash downhill. We mow across the slope rather than up and down where it is safe to do so. And on the steeper terraces we use walk-behind and hand equipment as a matter of course, not as an exception.",
                    "It also changes access. Many hillside properties have no side-gate route to the back at all — everything goes through the house or down an exterior stair. We factor that into the quote honestly rather than discovering it on day one.",
                ],
            },
            {
                heading: "Salt air, wind and what actually survives",
                body: [
                    "Properties on the waterfront side of White Rock deal with something no inland property does: salt-laden onshore wind. It desiccates foliage, burns the windward side of hedges, and over time accumulates in the soil. Plants that thrive two kilometres inland look scorched on the West Beach side within a season.",
                    "For hedging and planting near the water, we steer toward genuinely salt- and wind-tolerant material — escallonia, olearia, salal, and shore pine hold up considerably better than the standard Emerald cedar that is planted everywhere else in the region. If you already have cedar on an exposed frontage and it is browning on one side only, wind burn is the likely cause and no amount of fertilizer will fix it.",
                    "Soils near the beach also run sandier and thinner than the clay inland, which means they drain fast and hold very little. Building organic matter into those soils matters more here than aerating them does.",
                ],
            },
            {
                heading: "Hedges, views and neighbours",
                body: [
                    "In a city where a large share of the property value is the water view, hedge height is not a purely aesthetic question. Hedge and tree height disputes between neighbours are a genuine feature of life on the White Rock hillside, and the City of White Rock has bylaws governing tree removal and property maintenance that homeowners are frequently unaware of until a complaint arrives.",
                    "We keep hedges to an agreed, maintained height rather than letting them drift up a few inches a year until they become somebody's problem. If a hedge on your property has already outgrown what a neighbour will tolerate, be aware that with cedar there is no fast fix — cedar will not regenerate from bare brown wood, so a hard reduction leaves a permanent bare face. Bringing an overgrown cedar hedge down responsibly is a staged reduction across two or three seasons. Laurel, by contrast, takes a hard renovation cut and recovers.",
                    "We recommend confirming current height and tree-removal rules with the City of White Rock before any significant hedge reduction.",
                ],
            },
            {
                heading: "Everything here drains into the bay",
                body: [
                    "This is the part of White Rock work we take most seriously. Runoff from these properties reaches Semiahmoo Bay quickly — it is a short, steep trip. Synthetic fertilizer that washes off a hillside lawn, and detergent-based cleaners used for power washing a driveway, do not disappear. They end up in the water people swim in and shellfish grow in.",
                    "Our whole program is organic and biodegradable, which is a genuine differentiator here rather than a marketing line. We use slow-release organic fertilizers that bind to the soil rather than flushing through, biodegradable solutions for power washing, and controlled water volumes that limit runoff into storm drains. On the waterfront blocks we will decline to apply a product we would not want reaching the beach.",
                ],
            },
        ],
        servicePriorities: [
            {
                title: "Hedge Trimming",
                slug: "hedge-trimming",
                why: "The highest-demand service in White Rock. Views, neighbours and salt-burned windward faces all make hedge work here more consequential than elsewhere.",
            },
            {
                title: "Garden Maintenance",
                slug: "gardening",
                why: "Small White Rock lots are often more planted bed than lawn, so ongoing bed care matters more than mowing volume does.",
            },
            {
                title: "Power Washing",
                slug: "power-washing",
                why: "Steep, shaded, damp walkways and stairs grow moss fast and become a genuine slip hazard. We use biodegradable solutions because runoff reaches the bay.",
            },
            {
                title: "Organic Fertilizing",
                slug: "fertilizing",
                why: "Lighter, more frequent applications suit sloped lawns where a single heavy feed largely washes downhill.",
            },
            {
                title: "Lawn Mowing",
                slug: "lawn-mowing",
                why: "Walk-behind and hand equipment on terraced and stepped lots, cutting across the slope where it is safe.",
            },
        ],
        faqs: [
            {
                question: "Do you service steep hillside properties in White Rock?",
                answer:
                    "Yes — it is most of what we do in White Rock. We use walk-behind and hand equipment on terraced and stepped lots rather than ride-ons, and mow across the slope rather than up and down where it is safe. Properties with no side-gate access to the rear are common here, and we factor that into the quote up front rather than discovering it on the first visit.",
            },
            {
                question: "What hedges grow well in White Rock's salt air?",
                answer:
                    "On exposed waterfront frontages, escallonia, olearia, salal and shore pine handle salt-laden onshore wind considerably better than the Emerald cedar planted throughout the rest of the region. If your existing cedar hedge is browning on the seaward side only, that is wind burn rather than a nutrient problem, and fertilizer will not correct it.",
            },
            {
                question: "Are there rules about hedge height in White Rock?",
                answer:
                    "The City of White Rock has bylaws covering tree removal and property maintenance, and hedge height disputes between neighbours are common in a city where water views carry real value. We keep hedges at an agreed maintained height rather than letting them creep up year over year, and we recommend confirming current City requirements before any significant reduction or removal.",
            },
            {
                question: "Why does eco-friendly matter more in White Rock?",
                answer:
                    "Because runoff from these properties reaches Semiahmoo Bay quickly down a short, steep slope. Synthetic fertilizer washed off a hillside lawn and detergent-based power washing solutions end up in water people swim in and shellfish grow in. We use slow-release organic fertilizers that bind to soil rather than flushing through, biodegradable cleaning solutions, and controlled water volumes to limit storm drain runoff.",
            },
            {
                question: "My White Rock lawn is dry and thin at the top of the slope. Why?",
                answer:
                    "Water and applied nutrients run downhill rather than soaking in, so the upper part of a sloped lawn ends up dry and underfed while the base stays soggy and over-fed. Sandier, thinner soils near the beach make it worse because they hold very little. The fix is building organic matter into the upper soil and feeding lighter and more often, rather than one heavy application that mostly washes away.",
            },
        ],
        gallery: [
            {
                img: "/images/services/hedge-trimming.png",
                alt: "Hedge held to a consistent maintained height along a White Rock frontage",
                caption: "Maintained hedge height — the Hillside",
            },
            {
                img: "/images/services/power_washing_service.png",
                alt: "Power washing a moss-covered driveway in White Rock, BC",
                caption: "Driveway power washing — West Beach",
            },
            {
                img: "/images/services/gardening_service.png",
                alt: "Maintaining planted garden beds on a small White Rock lot",
                caption: "Garden bed maintenance — Centennial Park",
            },
            {
                img: "/images/services/pruning_service.png",
                alt: "Pruning an ornamental shrub at a White Rock property",
                caption: "Ornamental pruning — East Beach",
            },
        ],
    },
};

export const locationSlugs = Object.keys(locationsData);
