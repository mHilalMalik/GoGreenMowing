export interface LocalServiceContent {
    slug: string;
    schemaType: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    heroHeadline: string;
    heroSubheadline: string;
    contentSections: {
        heading: string;
        body: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
    areasServed: string[];
}

export const servicesData: Record<string, LocalServiceContent> = {
    "lawn-mowing": {
        slug: "lawn-mowing",
        schemaType: "LawnAndGardenService",
        title: "Lawn Mowing",
        metaTitle: "Professional Lawn Mowing Service South Surrey | Go Green Mowing",
        metaDescription: "Eco-friendly, reliable lawn mowing services in South Surrey, Surrey, and White Rock. We use organic methods for a perfectly striped, lush green lawn.",
        heroHeadline: "Eco-Friendly Lawn Mowing in South Surrey",
        heroSubheadline: "Weekly and bi-weekly mowing schedules tailored to the Pacific Northwest climate.",
        contentSections: [
            {
                heading: "Why South Surrey Lawns Need Specialized Maintenance",
                body: "Due to Metro Vancouver's unique coastal climate, lawns in South Surrey and White Rock experience rapid growth during spring and heavy rain saturation in winter. Go Green Mowing provides precise, scheduled cuts that prevent moss buildup, encourage deep root growth, and ensure your grass thrives in our local soil conditions."
            },
            {
                heading: "Our Eco-Friendly Approach",
                body: "We believe in sustainable lawn care. Our lawn mowing service uses well-maintained equipment that reduces emissions and noise. We practice grasscycling—leaving nutrient-rich clippings to decompose naturally—reducing the need for synthetic fertilizers and keeping South Surrey green."
            }
        ],
        faqs: [
            {
                question: "How often should my lawn be mowed in South Surrey?",
                answer: "During the peak growing seasons (spring and early summer), we recommend weekly mowing. In the heat of late summer, bi-weekly is often sufficient to prevent stressing the grass."
            },
            {
                question: "Do you offer one-time lawn mowing?",
                answer: "While we specialize in recurring weekly and bi-weekly maintenance programs to ensure the best health for your lawn, we do accommodate one-time mowings depending on our schedule."
            }
        ],
        areasServed: ["South Surrey", "White Rock", "Langley", "Delta"]
    },
    "aeration": {
        slug: "aeration",
        schemaType: "LawnAndGardenService",
        title: "Lawn Aeration",
        metaTitle: "Core Lawn Aeration South Surrey & Surrey BC | Go Green Mowing",
        metaDescription: "Relieve soil compaction with professional core aeration in South Surrey. Essential for healthy root growth and water absorption in BC's clay-heavy soils.",
        heroHeadline: "Breathe Life Into Your Lawn With Core Aeration",
        heroSubheadline: "The secret to a lush, resilient lawn in South Surrey.",
        contentSections: [
            {
                heading: "The Importance of Aeration in BC Soils",
                body: "Many lawns in South Surrey and Langley are planted on clay-heavy soil, which easily becomes compacted from heavy rain and foot traffic. Core aeration removes small plugs of soil, allowing oxygen, water, and nutrients to penetrate directly to the root zone."
            },
            {
                heading: "When to Aerate Your Lawn",
                body: "The best time for aeration in Metro Vancouver is during the active growing seasons—either early spring (March/April) or early fall (September/October). This allows the grass to quickly recover and fill the holes."
            }
        ],
        faqs: [
            {
                question: "What should I do after my lawn is aerated?",
                answer: "Aeration is the perfect time to overseed and fertilize, as the seeds and nutrients can fall directly into the aeration holes, ensuring excellent soil contact."
            },
            {
                question: "Should the soil plugs be removed?",
                answer: "No, we recommend leaving the soil plugs on the lawn. They will break down naturally within a couple of weeks, returning valuable nutrients and topsoil back to your lawn."
            }
        ],
        areasServed: ["South Surrey", "White Rock", "Surrey", "Langley"]
    },
    "fertilizing": {
        slug: "fertilizing",
        schemaType: "LawnAndGardenService",
        title: "Lawn Fertilizing",
        metaTitle: "Organic Lawn Fertilizing Service South Surrey | Go Green Mowing",
        metaDescription: "Safe, organic lawn fertilizing for South Surrey homes. Pet-friendly and child-safe nutrient programs tailored for Metro Vancouver lawns.",
        heroHeadline: "Organic Lawn Fertilizing in South Surrey",
        heroSubheadline: "Nourish your lawn with safe, sustainable, and powerful growth nutrients.",
        contentSections: [
            {
                heading: "Customized Nutrient Programs",
                body: "Every lawn is different, especially in the varied microclimates of South Surrey and White Rock. We assess your lawn's specific needs and apply premium, slow-release organic fertilizers that deliver sustained growth without the harmful chemical runoff associated with synthetic products."
            },
            {
                heading: "Safe for Families and Pets",
                body: "When you choose Go Green Mowing, you never have to worry about toxic chemicals on your grass. Our organic fertilizer blends are 100% safe for children and pets to play on immediately after application."
            }
        ],
        faqs: [
            {
                question: "How many fertilizer applications do I need per year?",
                answer: "For optimal health in BC, we recommend a 4-step program: early spring (to kickstart growth), late spring, summer (to maintain color), and fall (a winterizer to strengthen roots)."
            },
            {
                question: "Are your fertilizers completely organic?",
                answer: "Yes, we prioritize organic and natural products that promote long-term soil health and microbial activity, rather than short-term synthetic growth spikes."
            }
        ],
        areasServed: ["South Surrey", "White Rock", "Langley", "Delta"]
    },
    "power-raking": {
        slug: "power-raking",
        schemaType: "LawnAndGardenService",
        title: "Power Raking",
        metaTitle: "Power Raking & Dethatching South Surrey | Go Green Mowing",
        metaDescription: "Remove choking thatch and moss from your lawn with expert power raking in South Surrey. Essential spring lawn care for a healthier yard.",
        heroHeadline: "Professional Power Raking & Dethatching",
        heroSubheadline: "Clear the way for new growth and a vibrant spring lawn.",
        contentSections: [
            {
                heading: "Combatting Moss and Thatch in South Surrey",
                body: "The damp, mild winters in Metro Vancouver create the perfect environment for moss and thick thatch layers to choke your lawn. Power raking mechanically removes this dead layer, allowing your lawn to breathe and absorb essential water and nutrients."
            },
            {
                heading: "A Crucial Step in Spring Recovery",
                body: "We recommend power raking in early spring before the heavy growth phase begins. When paired with aeration and overseeding, power raking is the fastest way to transform a struggling, mossy lawn into a dense, green carpet."
            }
        ],
        faqs: [
            {
                question: "Is power raking the same as aeration?",
                answer: "No. Power raking removes the layer of dead grass and moss (thatch) sitting on top of the soil, while aeration pulls plugs out of the soil to relieve compaction."
            },
            {
                question: "Will power raking make my lawn look bad initially?",
                answer: "It can leave the lawn looking a bit thin immediately after the procedure, as we are pulling out a large volume of dead material. However, it bounces back quickly, much thicker and healthier than before."
            }
        ],
        areasServed: ["South Surrey", "White Rock", "Surrey"]
    },
    "hedge-trimming": {
        slug: "hedge-trimming",
        schemaType: "LawnAndGardenService",
        title: "Hedge Trimming",
        metaTitle: "Hedge Trimming Service South Surrey & White Rock | Go Green",
        metaDescription: "Professional hedge trimming and shaping in South Surrey. We expertly prune cedar, laurel, and boxwood hedges for privacy and clean aesthetics.",
        heroHeadline: "Precision Hedge Trimming & Shaping",
        heroSubheadline: "Keep your property lines neat, clean, and beautiful.",
        contentSections: [
            {
                heading: "Expert Care for BC Hedges",
                body: "Cedar and Laurel hedges are incredibly popular in South Surrey and White Rock for privacy. Our team provides precise, straight-line trimming that promotes dense internal growth while maintaining the perfect shape and height you desire."
            },
            {
                heading: "Clean-up Always Included",
                body: "Hedge trimming generates a lot of green waste. Our service always includes a meticulous clean-up. We rake the beds, blow off the walkways, and haul away all the clippings, leaving your property pristine."
            }
        ],
        faqs: [
            {
                question: "When is the best time to trim cedar hedges?",
                answer: "For cedars in BC, the ideal time to trim is early summer (June) after the spring growth flush, or early fall (September). We avoid trimming during the intense heat of mid-summer."
            },
            {
                question: "How much of a hedge can you cut back?",
                answer: "It depends on the species. Laurels can be cut back hard, but with cedars, you cannot cut past the green foliage into the dead wood, or it will not grow back. We are experts at knowing exactly how much to safely trim."
            }
        ],
        areasServed: ["South Surrey", "White Rock", "Langley", "Delta"]
    },
    "pruning": {
        slug: "pruning",
        schemaType: "LawnAndGardenService",
        title: "Shrub & Tree Pruning",
        metaTitle: "Shrub & Small Tree Pruning South Surrey | Go Green Mowing",
        metaDescription: "Expert pruning for shrubs, ornamental trees, and fruit trees in South Surrey. Keep your garden healthy and structurally sound year-round.",
        heroHeadline: "Expert Shrub & Small Tree Pruning",
        heroSubheadline: "Promoting healthy growth, beautiful blooms, and structural integrity.",
        contentSections: [
            {
                heading: "The Art and Science of Pruning",
                body: "Proper pruning is essential for plant health. Our team in South Surrey understands the specific pruning requirements for the diverse array of ornamental shrubs, rose bushes, and small trees found in West Coast gardens. We prune to remove dead or diseased wood, improve air circulation, and encourage vibrant blooms."
            },
            {
                heading: "Seasonal Pruning Schedules",
                body: "Different plants require pruning at different times of the year. We manage the care of early spring bloomers, summer flowering shrubs, and dormant winter pruning to ensure your landscape always looks its best."
            }
        ],
        faqs: [
            {
                question: "Do you prune large trees?",
                answer: "We specialize in shrubs, hedges, and small ornamental trees (up to about 15 feet). For large, hazardous, or high-canopy trees, we recommend hiring a certified arborist."
            },
            {
                question: "Why has my shrub stopped blooming?",
                answer: "Often, this is due to pruning at the wrong time of year (e.g., cutting off next year's flower buds) or a lack of sunlight. We can help assess and correct the pruning schedule."
            }
        ],
        areasServed: ["South Surrey", "White Rock", "Surrey", "Langley"]
    },
    "gardening": {
        slug: "gardening",
        schemaType: "LawnAndGardenService",
        title: "Gardening Services",
        metaTitle: "Professional Gardening Services South Surrey | Go Green Mowing",
        metaDescription: "Comprehensive garden maintenance, weeding, planting, and bed care in South Surrey. Keep your flower beds looking immaculate all season long.",
        heroHeadline: "Comprehensive Garden Maintenance",
        heroSubheadline: "Immaculate flower beds, precise edging, and weed-free gardens.",
        contentSections: [
            {
                heading: "Detailed Garden Bed Care",
                body: "A beautiful lawn is only half of the picture. Our gardening services in South Surrey cover everything your garden beds need: meticulous weeding, turning the soil, deep edging to separate the grass from the beds, and seasonal planting."
            },
            {
                heading: "Weeding and Mulch Installation",
                body: "The damp BC climate means weeds grow relentlessly. We provide regular weeding services and recommend bark mulch installation, which not only looks fantastic but retains moisture during dry summers and suppresses weed growth."
            }
        ],
        faqs: [
            {
                question: "Can you maintain my garden on a regular schedule?",
                answer: "Yes! Many of our clients combine their weekly lawn mowing with bi-weekly or monthly garden bed maintenance to ensure the entire property looks perfect."
            },
            {
                question: "Do you supply the mulch and soil?",
                answer: "Yes, we can procure, deliver, and install high-quality bark mulch, compost, and garden soil customized for your specific garden needs."
            }
        ],
        areasServed: ["South Surrey", "White Rock", "Langley", "Delta"]
    },
    "spring-fall-cleanup": {
        slug: "spring-fall-cleanup",
        schemaType: "LawnAndGardenService",
        title: "Spring & Fall Cleanup",
        metaTitle: "Spring & Fall Yard Cleanup Service South Surrey | Go Green",
        metaDescription: "Extensive seasonal yard cleanups in South Surrey. Leaf removal, garden prep, debris clearing, and winterization for a pristine property.",
        heroHeadline: "Complete Seasonal Yard Cleanups",
        heroSubheadline: "Preparing your yard for the changing BC seasons.",
        contentSections: [
            {
                heading: "Fall Leaf Removal & Winterization",
                body: "When the leaves drop in South Surrey, they can quickly smother your lawn, leading to moisture damage and disease. Our Fall Cleanups include extensive leaf blowing, raking, gutter clearing, and preparing your perennials for the cold winter months."
            },
            {
                heading: "Spring Garden Preparation",
                body: "As the weather warms, your yard needs a fresh start. Our Spring Cleanups involve clearing winter debris, cutting back dead perennial growth, redefining garden edges, and laying down fresh mulch to welcome the growing season."
            }
        ],
        faqs: [
            {
                question: "What is included in a Fall Cleanup?",
                answer: "We customize it to your property. Typically, it includes leaf blowing and removal from lawns, patios, and beds, cutting back specific perennials, and a final autumn mow."
            },
            {
                question: "Do you take the yard waste away?",
                answer: "Yes, all green waste collected during our cleanups is loaded up and composted off-site at a local facility."
            }
        ],
        areasServed: ["South Surrey", "White Rock", "Surrey", "Delta"]
    },
    "landscaping": {
        slug: "landscaping",
        schemaType: "LawnAndGardenService",
        title: "Landscaping",
        metaTitle: "Quality Landscaping Solutions South Surrey | Go Green Mowing",
        metaDescription: "Landscape design, sod installation, planting, and garden renovations in South Surrey. Transform your outdoor living space with Go Green Mowing.",
        heroHeadline: "Transformative Landscaping Solutions",
        heroSubheadline: "From fresh sod installations to complete garden renovations.",
        contentSections: [
            {
                heading: "Sod Installation and Lawn Renovation",
                body: "Need a brand new lawn instantly? We provide professional sod installation in South Surrey. We handle everything from tearing out the old, weed-infested grass, to grading the topsoil, to laying down premium West Coast-climate sod."
            },
            {
                heading: "Garden Design and Planting",
                body: "Whether you want to create a low-maintenance xeriscape, a lush privacy screen with cedars, or a vibrant perennial garden, our team can help design and execute a planting strategy that thrives in Metro Vancouver."
            }
        ],
        faqs: [
            {
                question: "Do you install hardscaping (patios, retaining walls)?",
                answer: "Our primary focus is softscaping (plants, soil, turf, mulch). However, we do undertake small-scale hardscaping projects and can recommend trusted partners for larger concrete or block wall jobs."
            },
            {
                question: "When is the best time to install new sod?",
                answer: "In South Surrey, spring and early fall are the absolute best times for sod installation, as the moderate temperatures and natural rainfall help the roots establish quickly."
            }
        ],
        areasServed: ["South Surrey", "White Rock", "Langley", "Delta"]
    },
    "gutter-cleaning": {
        slug: "gutter-cleaning",
        schemaType: "HomeAndConstructionBusiness",
        title: "Gutter Cleaning",
        metaTitle: "Professional Gutter Cleaning Service South Surrey | Go Green",
        metaDescription: "Protect your home from water damage with expert gutter cleaning in South Surrey. Safe, thorough removal of leaves, pine needles, and debris.",
        heroHeadline: "Professional Gutter Cleaning",
        heroSubheadline: "Protect your home from costly water damage this rainy season.",
        contentSections: [
            {
                heading: "Essential Maintenance for BC Homes",
                body: "With the heavy rainfall we experience in South Surrey and Metro Vancouver, functioning gutters are critical. Clogged gutters can lead to roof damage, fascia rot, and flooded basements. We safely and thoroughly remove leaves, pine needles, and dirt to ensure proper water flow."
            },
            {
                heading: "Safe and Meticulous Service",
                body: "We take safety and cleanliness seriously. We hand-scoop debris from the gutters to prevent a mess, bag the waste, and flush the downspouts to guarantee your eavestrough system is fully operational before the next big storm."
            }
        ],
        faqs: [
            {
                question: "How often should I have my gutters cleaned?",
                answer: "For most homes in South Surrey surrounded by trees, we recommend twice a year: once in late autumn after the leaves fall, and once in spring to clear out winter debris."
            },
            {
                question: "Can you clean the outside faces of the gutters too?",
                answer: "Yes! Along with interior clearing, we offer exterior gutter washing to remove the black streaks and algae, restoring the curb appeal of your home."
            }
        ],
        areasServed: ["South Surrey", "White Rock", "Surrey", "Langley"]
    },
    "power-washing": {
        slug: "power-washing",
        schemaType: "HomeAndConstructionBusiness",
        title: "Power Washing",
        metaTitle: "Pressure Washing & Power Washing South Surrey | Go Green",
        metaDescription: "Eco-friendly power washing for driveways, patios, and walkways in South Surrey. Instantly boost your curb appeal and remove slippery algae.",
        heroHeadline: "Eco-Friendly Power Washing",
        heroSubheadline: "Instantly rejuvenate your driveways, patios, and walkways.",
        contentSections: [
            {
                heading: "Clearing the West Coast Grime",
                body: "The damp climate in South Surrey inevitably leads to the buildup of green algae, moss, and black mildew on hard surfaces. Not only is this unsightly, but it can make walkways incredibly slippery and dangerous. Our power washing service cuts through the grime, restoring the original look of your concrete, pavers, and decks."
            },
            {
                heading: "Eco-Conscious Cleaning",
                body: "We focus on utilizing the power of high-pressure water combined with environmentally safe, biodegradable cleaners to lift dirt without harming your adjacent lawn, garden beds, or local waterways."
            }
        ],
        faqs: [
            {
                question: "Is high pressure safe for all surfaces?",
                answer: "No, which is why we adjust our methods. We use high pressure and surface cleaners for durable concrete and exposed aggregate, but we use a gentle soft-wash technique for siding, wood decks, and delicate stonework."
            },
            {
                question: "Do you re-sand paving stones after washing?",
                answer: "Yes, power washing often displaces the polymeric sand between pavers. If you have a interlocking stone driveway or patio, we offer re-sanding services to lock the stones back in place."
            }
        ],
        areasServed: ["South Surrey", "White Rock", "Delta"]
    },
    "green-waste-removal": {
        slug: "green-waste-removal",
        schemaType: "LawnAndGardenService",
        title: "Green Waste Removal",
        metaTitle: "Green Waste & Yard Debris Removal South Surrey | Go Green",
        metaDescription: "Got an overgrown pile of branches and yard clippings? We offer fast, eco-friendly green waste removal and hauling in South Surrey and White Rock.",
        heroHeadline: "Fast & Easy Green Waste Removal",
        heroSubheadline: "We haul away your yard debris so you don't have to.",
        contentSections: [
            {
                heading: "Clearing Out the Overgrowth",
                body: "Tackled a big weekend pruning project but don't know what to do with the massive pile of branches? Our green waste removal service in South Surrey handles the heavy lifting. We load up branches, leaves, grass clippings, and old soil, leaving your driveway spotless."
            },
            {
                heading: "Composted Locally",
                body: "Staying true to our eco-friendly mission, all collected green waste is taken to local Metro Vancouver composting facilities where it is recycled into nutrient-rich soil, rather than ending up in a landfill."
            }
        ],
        faqs: [
            {
                question: "Do I need to bag the waste beforehand?",
                answer: "Not at all. Whether it's in bags, bins, or just a giant pile on your driveway or lawn, our team will rake it up, load it into our trucks, and haul it away."
            },
            {
                question: "Do you take away construction debris or garbage?",
                answer: "No, our removal service is strictly for organic yard waste (green waste, branches, soil, sod). We do not haul household junk, drywall, or hazardous materials."
            }
        ],
        areasServed: ["South Surrey", "White Rock", "Surrey", "Langley", "Delta"]
    }
};
