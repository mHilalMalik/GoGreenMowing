export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string[];
    date: string;
    dateISO: string;
    /** Last substantive edit — feeds dateModified in schema and sitemap lastmod. */
    updatedISO?: string;
    author: string;
    category: string;
    readTime: string;
    tags: string[];
    /** Hero image path under /public. */
    image?: string;
    imageAlt?: string;
    faq: { q: string; a: string }[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "eco-friendly-lawn-care-south-surrey",
        title: "Why Eco-Friendly Lawn Care Matters in South Surrey",
        excerpt:
            "Discover how sustainable lawn care practices protect South Surrey's natural beauty while keeping your property looking stunning year-round.",
        content: [
            "South Surrey is home to some of the most beautiful residential properties in Metro Vancouver. From the tree-lined streets of Grandview Heights to the waterfront estates near Crescent Beach, our community takes pride in lush, well-maintained lawns. But here's the question every homeowner should be asking: at what cost to the environment?",
            "At Go Green Mowing, we've been providing eco-friendly lawn care in South Surrey since 2023, and we've seen firsthand how sustainable practices can deliver equal — or better — results than traditional chemical-heavy methods.",
            "## What Makes Lawn Care 'Eco-Friendly'?\n\nEco-friendly lawn care means using organic fertilizers, biodegradable products, and sustainable equipment practices. Here's what that looks like in practice:\n\n- **Organic fertilizers** that feed the soil ecosystem, not just the grass blades\n- **Natural pest control** methods that don't harm beneficial insects, birds, or pets\n- **Electric and low-emission equipment** that reduces noise and air pollution\n- **Water-smart practices** including proper mowing height to reduce water needs\n- **Composting and mulching** grass clippings back into the lawn as natural fertilizer",
            "## The South Surrey Advantage\n\nOur mild Pacific Northwest climate in South Surrey makes it ideal for organic lawn care. The moderate temperatures and regular rainfall mean lawns here respond exceptionally well to natural treatments. We've maintained over 100 properties across South Surrey, White Rock, and the broader Metro Vancouver area — all with 100% eco-friendly products.",
            "## Results You Can See and Feel\n\nOur clients consistently report that their lawns are thicker, greener, and more resilient after switching to our eco-friendly program. Plus, they can let their kids and pets play on the lawn immediately after treatment — no waiting period, no chemical warnings.",
        ],
        date: "February 15, 2026",
        dateISO: "2026-02-15",
        author: "Go Green Mowing",
        category: "Eco-Friendly",
        readTime: "5 min read",
        tags: ["eco-friendly", "south surrey", "lawn care", "organic"],
        image: "/images/services/lawn_mowing_service.png",
        imageAlt:
            "Go Green Mowing crew mowing an eco-friendly lawn in South Surrey, BC",
        faq: [
            {
                q: "Is eco-friendly lawn care as effective as traditional methods?",
                a: "Yes! Organic fertilizers and natural treatments deliver results that are equal to or better than chemical alternatives. Across 100+ South Surrey properties we maintain, clients consistently report thicker, more resilient turf after switching to an organic program.",
            },
            {
                q: "Is it safe for pets and children?",
                a: "Absolutely. All our products are 100% pet and child-safe. There's no waiting period after treatment — your family can enjoy the lawn immediately.",
            },
        ],
    },
    {
        slug: "spring-lawn-care-tips-metro-vancouver",
        title: "Spring Lawn Care Tips for Metro Vancouver Homeowners",
        excerpt:
            "Your complete guide to preparing your Metro Vancouver lawn for spring. From power raking to first mowing, here's everything you need to know.",
        content: [
            "Spring in Metro Vancouver is an exciting time for homeowners. After months of rain and cool temperatures, your lawn is ready to wake up and grow. But the transition from winter dormancy to spring growth requires the right care at the right time.",
            "As South Surrey's most trusted lawn care professionals, we've compiled our top spring lawn care tips specifically for the Metro Vancouver climate.",
            "## When to Start Spring Lawn Care in Metro Vancouver\n\nIn the Metro Vancouver area, spring lawn care typically begins in late February to mid-March, depending on weather conditions. Here in South Surrey, we start seeing grass growth when daytime temperatures consistently reach 8-10°C. Key signs your lawn is ready:\n\n- Grass begins showing new green growth\n- The ground is firm enough to walk on without sinking\n- Daytime temperatures are consistently above 8°C\n- The worst of the winter rainfall has passed",
            "## Step-by-Step Spring Lawn Care\n\n### 1. Power Raking (Dethatching)\nAfter a wet Metro Vancouver winter, thatch buildup can suffocate your lawn. Power raking removes dead grass, moss, and debris that accumulated over winter. This is one of the most impactful things you can do for your lawn.\n\n### 2. Aeration\nBC's heavy winter rain can compact soil significantly. Core aeration creates small holes that allow air, water, and nutrients to reach grass roots. We recommend aerating every spring for Metro Vancouver properties.\n\n### 3. Overseeding\nSpring is the perfect time to fill in bare patches. We select grass seed varieties specifically suited to the Pacific Northwest climate — typically a mix of perennial ryegrass and fine fescue.\n\n### 4. First Mowing\nDon't mow too short on the first cut! Set your mower to the highest setting (about 3-3.5 inches) for the first spring mowing. This encourages deep root development.",
            "## Metro Vancouver Spring Lawn Care Schedule\n\n| Month | Task |\n|-------|------|\n| Late Feb – Mar | Clean debris, first inspection |\n| March | Power raking and dethatching |\n| March – April | Core aeration |\n| April | First mowing (high setting) |\n| April – May | Organic fertilizer application |\n| May | Begin regular mowing schedule |",
        ],
        date: "February 28, 2026",
        dateISO: "2026-02-28",
        author: "Go Green Mowing",
        category: "Seasonal Tips",
        readTime: "7 min read",
        tags: ["spring", "metro vancouver", "lawn care tips", "seasonal"],
        image: "/images/services/power_raking_service.png",
        imageAlt:
            "Power raking a Metro Vancouver lawn during spring cleanup",
        faq: [
            {
                q: "When should I start spring lawn care in Metro Vancouver?",
                a: "In Metro Vancouver and South Surrey, spring lawn care typically begins in late February to mid-March, when daytime temperatures consistently reach 8-10°C and the ground is firm enough to walk on.",
            },
            {
                q: "How much does spring cleanup cost in South Surrey?",
                a: "Spring cleanup costs vary by property size. Contact Go Green Mowing at 778-558-0447 for a free estimate. Most residential properties in South Surrey range from $150-$400 for a comprehensive spring package.",
            },
        ],
    },
    {
        slug: "best-lawn-mowing-practices-bc",
        title: "Best Lawn Mowing Practices for BC's Climate",
        excerpt:
            "Learn the optimal mowing height, frequency, and techniques for maintaining a healthy lawn in British Columbia's unique Pacific Northwest climate.",
        content: [
            "British Columbia's Pacific Northwest climate creates unique challenges and opportunities for lawn care. With wet winters, warm summers, and everything in between, knowing how to mow properly throughout the year is essential for a healthy, beautiful lawn.",
            "After maintaining over 100 properties across South Surrey and Metro Vancouver, here are the mowing practices we swear by.",
            "## The One-Third Rule\n\nNever cut more than one-third of the grass blade at any single mowing. This is the single most important mowing practice. Cutting too short stresses the grass, weakens roots, and invites weeds and disease.\n\n**Example:** If your ideal grass height is 3 inches, mow when it reaches 4-4.5 inches.",
            "## Optimal Mowing Heights for BC\n\nDifferent seasons call for different mowing heights in the Pacific Northwest:\n\n- **Spring (March-May):** 3-3.5 inches — Encourages deep root development\n- **Summer (June-August):** 3.5-4 inches — Taller grass shades roots and retains moisture\n- **Fall (September-November):** 2.5-3 inches — Gradually lower for winter preparation\n- **Winter:** No mowing needed in most BC climates",
            "## Mowing Frequency in Metro Vancouver\n\nIn the Metro Vancouver area, mowing frequency changes throughout the year:\n\n- **Peak growing season (May-June):** Every 5-7 days\n- **Summer (July-August):** Every 7-10 days (growth slows in heat)\n- **Fall (September-October):** Every 10-14 days\n- **November-February:** Rarely needed; occasional cut if weather is mild\n\n## Pro Tips From Our Team\n\n1. **Alternate mowing patterns** each time to prevent soil compaction and grass grain\n2. **Keep blades sharp** — dull blades tear grass, causing brown tips and disease\n3. **Don't mow wet grass** — wait for the morning dew to dry (which can be challenging in BC!)\n4. **Mulch your clippings** — they return valuable nitrogen to the soil\n5. **Edge your lawn** regularly for that crisp, professional look",
        ],
        date: "March 1, 2026",
        dateISO: "2026-03-01",
        author: "Go Green Mowing",
        category: "Lawn Care Guide",
        readTime: "6 min read",
        tags: ["lawn mowing", "BC", "best practices", "tips"],
        image: "/images/services/lawn-mowing.png",
        imageAlt:
            "Freshly mowed lawn with clean stripes at a BC residential property",
        faq: [
            {
                q: "How often should I mow my lawn in Metro Vancouver?",
                a: "During peak growing season (May-June), mow every 5-7 days. In summer, every 7-10 days. In fall, every 10-14 days. Winter mowing is rarely needed in Metro Vancouver.",
            },
            {
                q: "What is the best mowing height for lawns in BC?",
                a: "For BC's climate, maintain 3-3.5 inches in spring, 3.5-4 inches in summer (to retain moisture), and 2.5-3 inches in fall. Never cut more than one-third of the blade at once.",
            },
        ],
    },
    {
        slug: "when-to-aerate-lawn-south-surrey",
        title: "When to Aerate Your Lawn in South Surrey: A Complete Guide",
        excerpt:
            "Timing is everything when it comes to lawn aeration in South Surrey. Learn when, why, and how aeration transforms your lawn.",
        content: [
            "If your South Surrey lawn feels spongy, has poor drainage, or just doesn't look as lush as it should, chances are it needs aeration. Core aeration is one of the most beneficial — yet often overlooked — lawn care services for properties in the Metro Vancouver area.",
            "## What Is Lawn Aeration?\n\nCore aeration involves using a machine to remove small plugs of soil from your lawn. These small holes allow air, water, and nutrients to penetrate deep into the root zone. Think of it as letting your lawn breathe.\n\nFor South Surrey properties, aeration is especially important because our heavy winter rains compact the clay-heavy soil common in the area.",
            "## Best Time to Aerate in South Surrey\n\nThe ideal time to aerate your lawn in South Surrey is:\n\n- **Spring (March-April):** Best time! The soil is moist but not waterlogged, and grass is entering its active growing period\n- **Fall (September-October):** Second-best option, especially if you missed spring\n\n**Avoid aerating in:**\n- Summer — The heat and dry conditions stress the lawn\n- Winter — The waterlogged soil can cause more harm than good\n- During drought conditions — Water stress + aeration = lawn damage",
            "## Signs Your South Surrey Lawn Needs Aeration\n\n1. **Water pools on the surface** after rain instead of soaking in\n2. **Thatch layer thicker than ½ inch** (the spongy layer between grass and soil)\n3. **Soil feels hard** when you push a screwdriver into it\n4. **Grass thins out** despite adequate watering and fertilizing\n5. **Your property gets heavy foot traffic** (kids, pets, entertaining)\n6. **Your lawn was established with sod** (sod creates soil layering that benefits from aeration)",
            "## Professional vs. DIY Aeration\n\nWhile you can rent an aerator from a local Surrey garden center, professional aeration in South Surrey offers significant advantages:\n\n- **Commercial-grade equipment** pulls deeper, more effective plugs\n- **Experienced operators** know the right depth and spacing for our soil type\n- **Time savings** — a professional can aerate a typical South Surrey residential lawn in 30-45 minutes\n- **Combined services** — we can aerate, overseed, and fertilize in one visit\n\nAt Go Green Mowing, aeration is one of our most popular spring services. Contact us at 778-558-0447 for a free estimate.",
        ],
        date: "March 3, 2026",
        dateISO: "2026-03-03",
        author: "Go Green Mowing",
        category: "Lawn Care Guide",
        readTime: "6 min read",
        tags: ["aeration", "south surrey", "lawn care", "spring"],
        image: "/images/services/aeration_service.png",
        imageAlt:
            "Core aeration machine pulling soil plugs from a South Surrey lawn",
        faq: [
            {
                q: "When is the best time to aerate lawns in South Surrey?",
                a: "The best time is spring (March-April) when the soil is moist but not waterlogged. Fall (September-October) is the second-best option. Avoid aerating in summer heat or during Vancouver's wet winter months.",
            },
            {
                q: "How much does lawn aeration cost in South Surrey?",
                a: "Professional lawn aeration in South Surrey typically costs between $100-$250 for a standard residential property. Contact Go Green Mowing at 778-558-0447 for a free, no-obligation estimate.",
            },
        ],
    },
    {
        slug: "power-washing-tips-vancouver-homeowners",
        title: "Power Washing Tips for Vancouver Homeowners: Remove Moss & Algae",
        excerpt:
            "Metro Vancouver's wet climate means moss and algae buildup. Learn how professional power washing restores driveways, patios, and walkways.",
        content: [
            "If you live in Metro Vancouver, you know the struggle: green algae on your driveway, black moss on your walkways, and a general layer of grime that builds up over our wet winter months. Power washing is the most effective way to restore your outdoor surfaces — and when done properly, the results are dramatic.",
            "## Why Power Washing Is Essential in Metro Vancouver\n\nVancouver's climate — with over 160 days of rain per year — creates the perfect conditions for moss, algae, and mildew growth on outdoor surfaces. Beyond being unsightly, these growths can:\n\n- **Create slip hazards** on walkways and driveways\n- **Damage concrete and pavers** by trapping moisture underneath\n- **Reduce property value** with a neglected appearance\n- **Spread to your lawn** and garden areas",
            "## What Can Be Power Washed?\n\n- **Driveways** — Remove oil stains, tire marks, moss, and algae\n- **Patios and decks** — Restore wood and composite decking to original beauty\n- **Walkways and sidewalks** — Eliminate slip hazards from moss growth\n- **Fences** — Clean cedar and vinyl fences of green growth\n- **Retaining walls** — Remove years of grime and organic buildup\n- **Garage floors** — Clean oil, grease, and debris",
            "## Eco-Friendly Power Washing\n\nAt Go Green Mowing, our power washing service uses:\n\n- **Biodegradable cleaning solutions** that won't harm your garden or lawn\n- **Controlled water pressure** tailored to each surface type (concrete vs. wood vs. pavers)\n- **Water reclamation practices** to minimize runoff into storm drains\n- **No harsh chemicals** that could damage plants or contaminate soil\n\nThis is especially important in South Surrey and White Rock, where many properties are close to Semiahmoo Bay and other sensitive waterways.",
            "## Best Time for Power Washing in Vancouver\n\n- **Spring (March-May):** Ideal! Remove winter buildup before the outdoor season\n- **Early Fall (September):** Great for preparing surfaces before wet weather returns\n- **Before events or selling:** A power-washed property can add thousands to curb appeal\n\nReady to transform your outdoor surfaces? Call Go Green Mowing at 778-558-0447 for a free estimate. We serve South Surrey, White Rock, Langley, Delta, and the greater Metro Vancouver area.",
        ],
        date: "March 5, 2026",
        dateISO: "2026-03-05",
        author: "Go Green Mowing",
        category: "Power Washing",
        readTime: "5 min read",
        tags: ["power washing", "vancouver", "moss removal", "pressure washing"],
        image: "/images/services/power_washing_service.png",
        imageAlt:
            "Power washing moss and algae off a Metro Vancouver driveway",
        faq: [
            {
                q: "How much does power washing cost in South Surrey?",
                a: "Power washing costs in South Surrey typically range from $150-$500 depending on the area size and surface type. Driveways average $200-$350. Call Go Green Mowing at 778-558-0447 for a free estimate.",
            },
            {
                q: "Is power washing safe for my plants and garden?",
                a: "Yes! Go Green Mowing uses eco-friendly, biodegradable cleaning solutions that won't harm your plants, lawn, or garden. We take extra care to protect landscaping during the cleaning process.",
            },
        ],
    },
    {
        slug: "hedge-trimming-guide-south-surrey",
        title: "When to Trim Hedges in South Surrey: Cedar, Laurel & Boxwood",
        excerpt:
            "Cedar, laurel and boxwood each want the shears at a different time of year. Here is the South Surrey hedge trimming calendar we work to.",
        content: [
            "The single most common hedge mistake we see in South Surrey is good timing on the wrong species. Cedar, laurel and boxwood dominate property lines from Grandview Heights to Ocean Park, and each one responds differently to the same cut. Trim a cedar too hard in August and you are left with brown panels that never fill back in.",
            "## When should you trim hedges in South Surrey?\n\nFor most South Surrey properties, the main hedge trim happens in late June or early July, after the spring flush has hardened off, with a lighter tidy-up in early September. That window works because the plant has finished its fastest growth but still has six to eight weeks of mild weather to seal the cuts before the fall rain arrives. Trimming later than mid-September pushes out tender new growth that gets burned by the first frost, and trimming during the March–May nesting season risks disturbing active bird nests, which is prohibited under the BC Wildlife Act.",
            "## Species-by-species timing\n\n### Cedar (Emerald, Excelsa, Pyramidalis)\nOne main trim in late June to early July, optional light shaping in September. **Never cut back into bare wood.** Cedar has no dormant buds on old brown growth, so anything cut past the green fringe stays bare permanently. If your cedar hedge has outgrown its space, the fix is gradual reduction over three seasons, not one hard cut.\n\n### English and Portuguese laurel\nLaurel is the fastest grower on most South Surrey properties and usually needs two to three cuts a season — late May, mid-July, and early September. Unlike cedar, laurel regenerates readily from old wood, so a hard renovation cut in early spring is survivable. Use hand pruners or loppers rather than a hedge trimmer where you can: shearing large laurel leaves in half leaves ragged brown edges that stay visible for weeks.\n\n### Boxwood\nTrim boxwood after the first flush in late May or early June, then again in late August if you want crisp lines. Boxwood is the one hedge where cutting in damp weather genuinely matters — the open cuts are an entry point for boxwood blight, which has been spreading through Lower Mainland gardens. We only cut boxwood on dry days and sanitize blades between properties.",
            "## Why hedge timing is different on the coast\n\nSouth Surrey and White Rock sit in one of the mildest pockets in Canada, which means hedges here push growth for a longer stretch than the BC Interior calendar in most gardening books assumes. Our growing season commonly runs from early March into late October. Practically, that means a cedar hedge in Morgan Creek puts on noticeably more growth per year than the same hedge in Kamloops, and a once-a-year trim that would hold shape elsewhere will look shaggy here by August.\n\nThe second coastal factor is moisture. Persistent damp encourages fungal issues on freshly cut surfaces, so we favour trimming in the drier late-June-to-early-September stretch and avoid shearing during the November-to-February rain.",
            "## How much should you take off?\n\nThe working rule is to remove no more than one third of the current season's growth in a single cut, and to keep the hedge slightly wider at the base than at the top. That taper — a few degrees is enough — lets light reach the lower branches. Hedges sheared into a perfect vertical box, or worse, wider at the top, reliably go thin and brown at the bottom within a few years, and on cedar that thinning is not reversible.",
            "## Signs your hedge needs professional attention\n\n- Brown or bare panels appearing on the sides or base\n- The hedge has grown past the height you can safely reach from the ground\n- Branches encroaching on a neighbour's property, sidewalk, or sightlines at a driveway\n- Dieback of individual cedars within a run (often root or drainage related, not a trimming problem)\n- A strata or municipal bylaw height limit you need to bring the hedge back under\n\nGo Green Mowing trims hedges across South Surrey, White Rock, Surrey, Delta and Langley, and we haul every scrap of the green waste away as part of the job. Call 778-558-0447 for a free estimate.",
        ],
        date: "March 18, 2026",
        dateISO: "2026-03-18",
        author: "Go Green Mowing",
        category: "Hedge Trimming",
        readTime: "7 min read",
        tags: ["hedge trimming", "cedar hedge", "south surrey", "pruning"],
        image: "/images/services/hedge_trimming_service.png",
        imageAlt:
            "Cedar hedge being trimmed to a clean straight line at a South Surrey property",
        faq: [
            {
                q: "When is the best time to trim a cedar hedge in South Surrey?",
                a: "Late June to early July is the best time to trim cedar hedges in South Surrey, once the spring growth flush has hardened off. A light shaping cut in early September is optional. Avoid trimming after mid-September, and never cut cedar back into bare brown wood — it has no dormant buds there and will not regrow.",
            },
            {
                q: "How often do laurel hedges need trimming in Metro Vancouver?",
                a: "Laurel is the fastest-growing common hedge in Metro Vancouver and typically needs two to three trims per season: late May, mid-July, and early September. Properties in South Surrey and White Rock often need the full three cuts because the coastal growing season runs from March into late October.",
            },
            {
                q: "Can I trim my hedge in spring?",
                a: "Light shaping in early spring is fine, but avoid major hedge work between March and May. That is peak bird nesting season, and disturbing an active nest is prohibited under the BC Wildlife Act. If a hedge must be cut during that window, it should be inspected for nests first.",
            },
        ],
    },
    {
        slug: "how-to-get-rid-of-lawn-moss-south-surrey",
        title: "How to Get Rid of Lawn Moss in South Surrey (and Keep It Gone)",
        excerpt:
            "Moss is a symptom, not the disease. Here is why South Surrey lawns grow moss every winter and what actually fixes it long term.",
        content: [
            "If your lawn is more green velvet than green grass by February, you are in good company. Moss is the number one lawn complaint we hear across South Surrey, White Rock and Ocean Park, and it comes back every single year for most homeowners — because almost everyone treats the moss instead of the reason it is winning.",
            "## Why does moss grow in South Surrey lawns?\n\nMoss takes over South Surrey lawns because our conditions favour it over grass for roughly five months of the year. We get well over 1,000 mm of rain annually, most of it between October and March, on soils that are frequently clay-heavy and slow-draining. Add short winter days, mature trees casting shade, and slightly acidic Pacific Northwest soil, and you have an environment where moss thrives and turfgrass essentially stops competing. Moss does not kill your grass. It moves into space the grass has already given up.",
            "## The four conditions you have to fix\n\n### 1. Compaction and poor drainage\nThis is the biggest one on the coast. Clay soil plus months of saturating rain plus foot traffic equals soil so dense that grass roots cannot get oxygen. Core aeration in spring is the direct fix — it pulls plugs out and lets air and water move through the root zone.\n\n### 2. Shade\nMost lawn grasses want at least four to six hours of direct sun. Under a mature cedar or on the north side of a house, no amount of moss killer will produce a thick lawn. The honest options are thinning tree canopy to let light through, overseeding with a shade-tolerant fine fescue blend, or converting the area to a shade planting or mulch bed.\n\n### 3. Soil acidity\nCoastal BC soils commonly sit around pH 5.0–5.5, and grass prefers 6.0–6.5. A soil test costs very little and tells you whether a lime application is genuinely needed. Lime is not a moss killer — it is a grass helper, and it works slowly over months.\n\n### 4. Thin, underfed turf\nBare soil is an open invitation. A dense, well-fed lawn crowds moss out on its own.",
            "## The order of operations that actually works\n\nDoing these in the wrong order wastes the whole effort. The sequence we use on South Surrey properties runs across a single spring:\n\n1. **Late February – March:** Apply moss control and let it work. The moss blackens in about a week.\n2. **March:** Power rake to physically pull the dead moss and thatch out. Skipping this step leaves a mat that blocks seed contact.\n3. **March – April:** Core aerate to relieve the winter compaction underneath.\n4. **Immediately after aerating:** Overseed with a Pacific Northwest blend — typically perennial ryegrass with fine fescue for the shadier sections. Seed dropped right after aeration falls into the holes, which is the best seed-to-soil contact you will get.\n5. **April – May:** Apply an organic slow-release fertilizer to push the new seedlings.\n6. **Ongoing:** Mow high, at 3 to 3.5 inches. Taller grass shades the soil surface and suppresses moss germination better than any product.",
            "## What does not work\n\nRaking moss out without addressing drainage, light and soil just clears space for next winter's crop. Iron-based moss killers on their own do the same. And piling on lime without a soil test is a common and expensive miss — plenty of South Surrey lawns are already close to the right pH, and over-liming causes its own nutrient lockout problems.",
            "## Realistically, can you eliminate moss completely?\n\nIn a deeply shaded, poorly drained yard, no — and any company that promises otherwise is overselling. What is achievable on most South Surrey properties is knocking moss back from dominant to incidental, and holding it there with an annual spring power rake, aeration and overseed. Go Green Mowing bundles those three into a single spring visit. Call 778-558-0447 for a free estimate.",
        ],
        date: "April 2, 2026",
        dateISO: "2026-04-02",
        author: "Go Green Mowing",
        category: "Lawn Care Guide",
        readTime: "8 min read",
        tags: ["moss control", "power raking", "south surrey", "lawn care"],
        image: "/images/services/power_raking_service.png",
        imageAlt:
            "Power rake removing moss and thatch from a mossy South Surrey lawn",
        faq: [
            {
                q: "Why is my South Surrey lawn full of moss?",
                a: "Moss takes over South Surrey lawns because local conditions favour it over grass for much of the year: over 1,000 mm of annual rainfall concentrated in winter, clay-heavy slow-draining soil, low winter light, shade from mature trees, and acidic soil around pH 5.0–5.5 when grass prefers 6.0–6.5. Moss does not kill grass — it fills space that thin, stressed turf has already surrendered.",
            },
            {
                q: "What is the best way to remove moss from a lawn in Metro Vancouver?",
                a: "Apply moss control in late February or March, power rake to pull out the dead moss and thatch, core aerate to relieve winter compaction, then overseed immediately with a Pacific Northwest ryegrass and fine fescue blend and follow with organic fertilizer. Doing these steps in that order matters — power raking without overseeding just leaves bare soil for moss to reclaim.",
            },
            {
                q: "Does lime get rid of lawn moss?",
                a: "No. Lime does not kill moss. It slowly raises soil pH so grass can compete better, which helps indirectly over months. Get a soil test first — many South Surrey lawns are already near the right pH, and over-liming causes nutrient lockout.",
            },
        ],
    },
    {
        slug: "lawn-mowing-cost-south-surrey",
        title: "How Much Does Lawn Mowing Cost in South Surrey? (2026 Pricing)",
        excerpt:
            "Real 2026 price ranges for lawn mowing in South Surrey and White Rock, what drives the number up or down, and why the cheapest quote often costs more.",
        content: [
            "Pricing is the question we get before any other, and most lawn care websites dodge it. Here is a straight answer, with the reasoning behind it.",
            "## How much does lawn mowing cost in South Surrey?\n\nFor a typical South Surrey residential property, professional lawn mowing costs roughly $45 to $85 per visit in 2026. Small townhouse or patio lots generally land between $40 and $55, standard detached lots between $55 and $75, and larger properties over a quarter acre between $85 and $150 or more. Those figures cover mowing, line trimming the edges, blowing off hard surfaces, and hauling the clippings. Most South Surrey homeowners on a weekly schedule through the growing season spend between $900 and $1,700 across a full year.",
            "## What actually drives the price\n\n- **Lot size and mowable area.** Not total lot size — the grass area. A large lot that is mostly driveway and beds mows faster than a smaller one that is all turf.\n- **Obstacles.** Trees, play structures, garden beds, and tight side yards all mean more line trimming and less time on the mower. Trimming is the slowest part of the job.\n- **Slope.** Anything steep enough to need a push mower instead of a rider changes the time significantly.\n- **Frequency.** Weekly service is cheaper per visit than bi-weekly, because bi-weekly grass is longer and takes longer to cut cleanly. Counterintuitive, but consistent.\n- **Gate access.** A 30-inch side gate means smaller equipment and more passes.\n- **Clipping disposal.** We grasscycle by default, which returns nutrients to the lawn at no cost. Bagging and hauling adds to the price.\n- **Bundling.** Adding hedge trimming, aeration or cleanups to a recurring mowing contract almost always lowers the per-service rate, because the trip is already made.",
            "## Weekly or bi-weekly?\n\nDuring the May and June peak in South Surrey, grass can put on more than an inch a week. The one-third rule — never remove more than a third of the blade in a single cut — means a bi-weekly schedule in peak season either scalps the lawn or leaves clumps of cut grass smothering the turf underneath. We recommend weekly from May through June, and bi-weekly is genuinely fine for July through August when growth slows, and again in the fall.",
            "## Why the cheapest quote is often the expensive one\n\nThe lowballs in this market usually come from operators cutting one of three corners. The first is insurance: an uninsured contractor who puts a rock through your window, or gets hurt on your property, becomes your problem. Ask for proof of liability coverage and WorkSafe BC clearance, and actually look at it. The second is dull blades — a dull mower tears grass instead of cutting it, leaving frayed white tips that brown out and open the plant to disease. The third is speed: mowing too fast and too short to fit more stops into a day is what produces the scalped, patchy lawns you see by August.\n\nGo Green Mowing is fully insured and WorkSafe BC compliant, and we sharpen blades on a fixed schedule rather than when someone notices.",
            "## Getting an accurate quote\n\nAny quote given without seeing the property is a guess. We measure the mowable area, look at gate access and slope, and give a fixed per-visit price with no trip charges or fuel surcharges. Estimates are free and there is no obligation. Call 778-558-0447 or use the contact form.",
        ],
        date: "April 21, 2026",
        dateISO: "2026-04-21",
        author: "Go Green Mowing",
        category: "Lawn Mowing",
        readTime: "6 min read",
        tags: ["lawn mowing", "pricing", "south surrey", "white rock"],
        image: "/images/services/lawn_mowing_service.png",
        imageAlt:
            "Professional lawn mower cutting a residential lawn in South Surrey, BC",
        faq: [
            {
                q: "How much does lawn mowing cost in South Surrey?",
                a: "Professional lawn mowing in South Surrey costs roughly $45 to $85 per visit in 2026 for a typical residential property. Small townhouse lots run $40–$55, standard detached lots $55–$75, and properties over a quarter acre $85–$150 or more. That includes mowing, line trimming, blowing off hard surfaces, and clipping disposal.",
            },
            {
                q: "Is weekly or bi-weekly mowing better in Metro Vancouver?",
                a: "Weekly mowing is better from May through June, when Metro Vancouver lawns can grow over an inch a week. Cutting bi-weekly during peak growth forces you to remove more than a third of the blade at once, which stresses the grass and leaves clippings heavy enough to smother the turf. Bi-weekly works well in July and August when growth slows, and again in fall.",
            },
            {
                q: "Do you charge extra to haul away grass clippings?",
                a: "We grasscycle by default, which means clippings are mulched back into the lawn as free organic fertilizer and there is no extra charge. Bagging and hauling clippings off site is available for an additional fee if you prefer it.",
            },
        ],
    },
    {
        slug: "how-often-to-mow-lawn-metro-vancouver",
        title: "How Often Should You Mow Your Lawn in Metro Vancouver?",
        excerpt:
            "A month-by-month mowing frequency and height schedule built around the Metro Vancouver growing season — not a generic North American calendar.",
        content: [
            "Mowing frequency advice written for Ontario or the US Midwest does not transfer to the coast. Metro Vancouver has one of the longest growing seasons in Canada and a rainfall pattern that pushes growth hard in spring and stalls it in late summer. Here is the schedule that actually matches our conditions.",
            "## How often should you mow in Metro Vancouver?\n\nMow every 5 to 7 days from May through June, every 7 to 10 days in July and August, every 10 to 14 days in September and October, and roughly monthly or not at all from November through February. The reason frequency changes is the one-third rule: never remove more than a third of the grass blade in a single cut. During the May–June peak, Metro Vancouver lawns can add more than an inch a week, so a two-week gap forces you to violate that rule and stress the plant.",
            "## Month-by-month schedule\n\n| Period | Frequency | Mowing height |\n|--------|-----------|---------------|\n| Nov – Feb | Rarely; only if growth continues | 3 in, dry days only |\n| March | Every 10–14 days (first cut) | 3.5 in |\n| April | Every 7–10 days | 3 – 3.5 in |\n| May – June | Every 5–7 days (peak) | 3 – 3.5 in |\n| July – Aug | Every 7–10 days | 3.5 – 4 in |\n| September | Every 7–10 days | 3 – 3.5 in |\n| October | Every 10–14 days (final cut low) | 2.5 – 3 in |",
            "## Why you should mow higher than you think\n\nThe most common self-inflicted lawn problem in South Surrey is cutting too short. Taller grass grows proportionally deeper roots, which means better drought tolerance in our increasingly dry Augusts. It also shades the soil surface, which suppresses both weed seeds and the moss spores that would otherwise get a foothold. Three to three and a half inches is the working range for most of the year, and raising to a full four inches through the summer heat is one of the cheapest ways to keep a lawn green without extra watering.\n\nThe exception is the final cut of the season, around late October. Dropping to two and a half inches going into winter reduces the matted, damp growth that snow mould and winter fungus feed on.",
            "## Should you mow when the grass is wet?\n\nIn Metro Vancouver you sometimes have no choice, but avoid it where you can. Wet grass bends away from the blade instead of standing up to it, producing an uneven cut. It also clumps, and those clumps smother the turf underneath and leave yellow patches. Wet clippings pack into the mower deck and around the blade, and mowing wet soil compacts it — the same compaction that drives our moss problems. If you must cut wet grass, raise the deck a notch, slow down, and take narrower passes.",
            "## Other things that matter more than frequency\n\n**Sharp blades.** A dull blade tears rather than slices. Torn tips turn white, then brown, and the open wounds invite disease. Sharpen every 20 to 25 hours of mowing.\n\n**Change direction.** Mowing the same pattern every week trains the grass to lean and compacts wheel tracks. Alternate direction each visit.\n\n**Grasscycle.** Leaving mulched clippings on the lawn returns up to a quarter of your lawn's annual nitrogen needs for free. Clippings do not cause thatch — that is a persistent myth. Thatch comes from roots and stems, not leaf blades.\n\nGo Green Mowing runs weekly and bi-weekly schedules across South Surrey, White Rock, Surrey, Delta and Langley, adjusted seasonally rather than fixed year-round. Call 778-558-0447 for a free estimate.",
        ],
        date: "May 12, 2026",
        dateISO: "2026-05-12",
        author: "Go Green Mowing",
        category: "Lawn Mowing",
        readTime: "6 min read",
        tags: ["lawn mowing", "mowing frequency", "metro vancouver", "lawn care tips"],
        image: "/images/services/lawn-mowing.png",
        imageAlt:
            "Striped freshly cut lawn showing correct mowing height in Metro Vancouver",
        faq: [
            {
                q: "How often should I mow my lawn in Metro Vancouver?",
                a: "Mow every 5 to 7 days from May through June, every 7 to 10 days in July and August, every 10 to 14 days in September and October, and rarely from November through February. Frequency follows growth rate so you never remove more than one third of the grass blade in a single cut.",
            },
            {
                q: "What height should I cut my grass in BC?",
                a: "Keep grass at 3 to 3.5 inches for most of the year in BC, raise to 3.5 to 4 inches through summer heat to conserve soil moisture, and drop to 2.5 to 3 inches for the final cut in late October to reduce winter snow mould. Cutting shorter than 2.5 inches encourages moss and weeds by exposing the soil surface.",
            },
            {
                q: "Should I bag or mulch my grass clippings?",
                a: "Mulch them. Returning clippings to the lawn supplies up to a quarter of its annual nitrogen for free. Clippings do not cause thatch — thatch is built from roots and stems, not leaf blades. Bag only when the grass is very long, wet enough to clump, or diseased.",
            },
        ],
    },
    {
        slug: "pruning-vs-trimming-difference",
        title: "Pruning vs Trimming: What's the Difference (And Why It Matters)?",
        excerpt:
            "The two words get used interchangeably, but they are different jobs with different tools, timing and goals. Getting them mixed up is how shrubs get ruined.",
        content: [
            "Homeowners use pruning and trimming to mean the same thing. In practice they are separate operations, and quoting the wrong one is a frequent source of disappointment when a crew shows up expecting a two-hour shear and finds an overgrown magnolia that needs structural work.",
            "## What is the difference between pruning and trimming?\n\nTrimming is shaping the outer surface of a plant for appearance — shearing a hedge flat, tidying a shrub's silhouette, cutting back growth that has crossed a boundary. Pruning is the selective removal of specific branches for the health and structure of the plant — taking out dead, diseased or crossing limbs, opening the canopy to light and air, and directing future growth. Trimming works on the outside and is largely cosmetic; pruning works on the inside and is horticultural. Most established gardens need both, on different schedules.",
            "## Trimming in practice\n\nTrimming uses hedge shears or a powered hedge trimmer and treats the plant as a surface. It is what you want for cedar, laurel and boxwood hedges, formal shrub shapes, and keeping growth off a walkway or driveway sightline. On South Surrey properties, formal hedges typically need two to three trims per season and informal shrubs one or two.\n\nThe limitation is that shearing only ever cuts the outermost growth. Over years, that builds a dense outer shell that blocks light from reaching the interior, and the inside of the shrub hollows out. This is why old sheared hedges look solid from outside and are bare sticks within.",
            "## Pruning in practice\n\nPruning uses hand pruners, loppers and a pruning saw, and every cut is a decision. The standard starting point is the three Ds — remove anything dead, diseased or damaged — followed by branches that cross and rub, water sprouts, suckers from the rootstock, and enough interior growth to let light and air move through the canopy. Cuts are made just outside the branch collar so the plant can seal them properly.\n\nProper pruning is what prevents the hollowed-out interior that shearing alone produces, and it is the only way to genuinely reduce the size of an overgrown shrub without leaving it looking amputated.",
            "## When to do each in South Surrey\n\n**Trimming:** Main hedge trim in late June to early July, light shaping in early September. Avoid the March-to-May bird nesting window for anything substantial.\n\n**Pruning:** Most deciduous shrubs and trees are pruned in the dormant season, roughly November through February, when the structure is visible and the plant is not actively growing. The important exception is spring-flowering shrubs — rhododendrons, lilac, forsythia, camellia — which set next year's buds shortly after they finish blooming. Prune those within a few weeks of flowering or you cut off next spring's display. Dead and diseased wood can and should be removed at any time of year.",
            "## Which does your property need?\n\nIf the plant looks shaggy but healthy, you need trimming. If it is thin in the middle, has dead wood, is not flowering as it used to, has branches rubbing each other, or has simply outgrown its space, you need pruning. Shearing an overgrown shrub that needs structural pruning makes the problem worse — it adds another layer of dense outer growth over an already starved interior.\n\nGo Green Mowing does both across South Surrey, White Rock, Surrey, Delta and Langley, and we will tell you honestly which one your garden actually needs. Call 778-558-0447 for a free assessment.",
        ],
        date: "May 28, 2026",
        dateISO: "2026-05-28",
        author: "Go Green Mowing",
        category: "Pruning",
        readTime: "6 min read",
        tags: ["pruning", "hedge trimming", "garden maintenance", "south surrey"],
        image: "/images/services/pruning_service.png",
        imageAlt:
            "Hand pruners making a selective pruning cut on a garden shrub",
        faq: [
            {
                q: "What is the difference between pruning and trimming?",
                a: "Trimming shapes the outer surface of a plant for appearance, usually with hedge shears, and is largely cosmetic. Pruning selectively removes specific branches — dead, diseased, damaged, crossing or crowded ones — for the health and structure of the plant, using hand pruners, loppers and a saw. Trimming works on the outside; pruning works on the inside.",
            },
            {
                q: "When should I prune shrubs in South Surrey?",
                a: "Prune most deciduous shrubs and trees during dormancy, roughly November through February, when the branch structure is visible. The exception is spring-flowering shrubs such as rhododendron, lilac, forsythia and camellia — prune those within a few weeks of flowering, because they set next year's buds soon after blooming. Dead or diseased wood can be removed any time of year.",
            },
            {
                q: "Why is my hedge bare in the middle?",
                a: "Repeated shearing without any structural pruning builds a dense outer shell that blocks light from reaching the interior, so inner growth dies back and the shrub hollows out. The fix is selective pruning to open the canopy — and on cedar, prevention is the only option, since cedar will not regenerate from bare brown wood.",
            },
        ],
    },
    {
        slug: "fall-yard-cleanup-checklist-south-surrey",
        title: "Fall Yard Cleanup Checklist for South Surrey Homeowners",
        excerpt:
            "What to do between September and November so your South Surrey lawn survives the wet season and comes back strong in March.",
        content: [
            "Fall is the highest-leverage season for lawn care in South Surrey, and the most commonly skipped. What you do between September and November determines how much moss, compaction and bare patch repair you are dealing with in spring.",
            "## What should you do for fall yard cleanup in South Surrey?\n\nA complete South Surrey fall cleanup covers six things: clear fallen leaves before they mat down, apply a fall fertilizer in September, overseed any thin areas, cut the lawn slightly shorter for the final mow in late October, clean gutters after the leaves finish dropping, and cut back perennials while leaving beneficial habitat. The driving constraint is our rain — the wet season starts in earnest in October, and anything left on the lawn when the sustained rain arrives becomes a mat that suffocates grass and seeds moss for spring.",
            "## The checklist, in order\n\n### September\n- **Apply fall fertilizer.** This is the single most valuable feeding of the year. Grass shifts energy into root development in fall, and a slow-release organic feed in September builds the root mass that carries the lawn through winter and greens it up early in spring.\n- **Overseed thin areas.** Early September soil is still warm and the rain is arriving — ideal germination conditions. Seed put down now establishes before cold weather.\n- **Aerate if you did not in spring.** September aeration relieves summer compaction before the winter rain saturates everything.\n- **Final hedge shaping.** Early September is the last safe window; later cuts push tender growth into frost.\n\n### October\n- **Stay ahead of the leaves.** Clearing weekly is far less work than one massive removal, and it prevents matting. A thin scatter of leaves can be mulch-mowed into the lawn, which is genuinely good for it — but a full layer must come off.\n- **Final mow, slightly lower.** Around late October, drop to about 2.5 inches. Long, damp grass going into winter is what snow mould feeds on.\n- **Cut back spent perennials,** but leave seed heads on coneflower, rudbeckia and ornamental grasses. They feed birds through winter and look good under frost.\n\n### November\n- **Clean gutters — after the leaves have finished falling.** Doing it in early October means doing it twice. Blocked gutters in a South Surrey November overflow against the foundation and ice up in cold snaps.\n- **Clear drains and catch basins** of leaf litter.\n- **Drain and store hoses,** shut off and insulate exterior taps before the first hard frost.\n- **Move frost-sensitive containers** against the house or into shelter.",
            "## Why leaves cannot just be left\n\nA layer of wet leaves on a lawn blocks light and traps moisture against the crown of the grass. Within a few weeks in coastal conditions you get yellowing, then dieback, then bare soil. Bare soil in a South Surrey winter is the perfect moss nursery. This is the direct mechanism behind most of the moss homeowners find in February and blame on the weather.\n\nThe nuance is that a *light* scattering is beneficial. Mulch-mowing a thin layer of leaves shreds them into the turf where they break down and feed the soil. The rule of thumb: if you can still clearly see grass through the leaves, mulch them in. If you cannot, remove them.",
            "## What a professional fall cleanup includes\n\nOur fall cleanup service in South Surrey covers full leaf removal, garden bed clearing, perennial cutback, final mow and edge, gutter clearing, and hauling every bag of green waste to a composting facility rather than the landfill. Most South Surrey properties fall between $250 and $600 depending on tree cover and lot size — properties in the older, heavily treed parts of Ocean Park and Crescent Beach sit at the higher end. Call 778-558-0447 for a free estimate.",
        ],
        date: "June 16, 2026",
        dateISO: "2026-06-16",
        author: "Go Green Mowing",
        category: "Seasonal Tips",
        readTime: "7 min read",
        tags: ["fall cleanup", "leaf removal", "south surrey", "seasonal"],
        image: "/images/services/seasonal_cleanup_service.png",
        imageAlt:
            "Fall leaf removal and yard cleanup at a South Surrey home",
        faq: [
            {
                q: "When should I do fall yard cleanup in South Surrey?",
                a: "Spread it across three months. September is for fall fertilizer, overseeding and aeration. October is for staying ahead of falling leaves and the final mow at about 2.5 inches. November is for gutter cleaning once the leaves have finished dropping, plus draining hoses and shutting off exterior taps before frost.",
            },
            {
                q: "Do I really need to rake leaves off my lawn?",
                a: "If you can still see grass through them, no — mulch-mow them in and they feed the soil. If the leaves form a solid layer, yes. Wet matted leaves block light and trap moisture against the grass crown, causing dieback within weeks in coastal BC, and the resulting bare soil is where next spring's moss establishes.",
            },
            {
                q: "How much does a fall cleanup cost in South Surrey?",
                a: "Most South Surrey properties run $250 to $600 for a full fall cleanup including leaf removal, bed clearing, perennial cutback, final mow and green waste hauling. Heavily treed properties in areas like Ocean Park and Crescent Beach sit at the higher end of that range.",
            },
        ],
    },
    {
        slug: "organic-lawn-fertilizing-schedule-bc",
        title: "Organic Lawn Fertilizing Schedule for BC Lawns",
        excerpt:
            "When to feed, what the numbers on the bag mean, and why organic fertilizer works differently — and better — in the Pacific Northwest.",
        content: [
            "Fertilizer is where most homeowners either do nothing or do too much at the wrong time. Neither produces a good lawn. Here is a straightforward organic feeding schedule for coastal BC conditions.",
            "## When should you fertilize a lawn in BC?\n\nFeed a coastal BC lawn three times a year: April, late June, and September. April supports the spring growth flush after winter dormancy, late June carries the lawn into summer stress, and September — the most important application of the three — drives root development before dormancy and produces a noticeably earlier green-up the following spring. Skip fertilizing in the heat of late July and August, when the lawn is conserving rather than growing, and skip winter entirely, when nutrients simply wash through to the storm drains.",
            "## What the numbers on the bag mean\n\nEvery fertilizer is labelled with three numbers — nitrogen, phosphorus, potassium (N-P-K).\n\n- **Nitrogen (N)** drives green leaf growth. It is what makes a lawn look lush and what it uses most of.\n- **Phosphorus (P)** supports root establishment. Most established BC lawns already have enough, and several BC municipalities restrict phosphorus fertilizer because runoff feeds algae blooms in local waterways. Unless a soil test says otherwise, or you are establishing new turf, you want a low or zero middle number.\n- **Potassium (K)** builds stress tolerance — cold hardiness and disease resistance. It matters most in the fall application.\n\nA spring or summer feed wants high N, low P, moderate K. A fall feed wants moderate N with noticeably higher K.",
            "## Why organic works particularly well here\n\nSynthetic fertilizer delivers a fast, soluble nitrogen hit. The lawn greens up within days, then fades in a few weeks, and much of what you applied leaches away — a real issue in South Surrey and White Rock, where properties drain toward Semiahmoo Bay and the Nicomekl and Serpentine rivers.\n\nOrganic fertilizers release nutrients as soil microbes break them down. That is slower and less dramatic, but in our mild, damp climate the soil biology stays active for most of the year, so the release is steady rather than stalled. Over two or three seasons an organic program builds soil organic matter and structure, which improves the water-holding capacity and drainage that our clay-heavy soils genuinely lack. The lawn also becomes less dependent on the next application, rather than more.\n\nThe practical advantages: no burn risk from over-application, no re-entry period so kids and pets can use the lawn immediately, and no synthetic runoff into local watersheds.",
            "## The schedule\n\n| Timing | Purpose | Profile |\n|--------|---------|---------|\n| April | Spring growth after dormancy | Higher N, low P |\n| Late June | Carry through summer stress | Moderate N, moderate K |\n| September | Root development, winter hardiness | Moderate N, higher K |\n\nApply to a dry lawn and water in afterward, or time it to light rain — which in coastal BC is rarely a long wait. Never fertilize a drought-stressed or dormant summer lawn; feeding grass that cannot grow just stresses it further.",
            "## Fertilizer alone is not a program\n\nFeeding a compacted, moss-covered lawn will not fix it. Nutrients cannot reach roots through compacted clay, and a thick thatch layer intercepts the fertilizer before it reaches the soil. On most South Surrey properties, the sequence that works is power rake, then aerate, then overseed, then fertilize — in that order, in a single spring visit. Go Green Mowing uses organic, pet- and child-safe products on every property we maintain. Call 778-558-0447 for a free estimate.",
        ],
        date: "July 7, 2026",
        dateISO: "2026-07-07",
        author: "Go Green Mowing",
        category: "Fertilizing",
        readTime: "6 min read",
        tags: ["fertilizing", "organic", "lawn care", "british columbia"],
        image: "/images/services/fertilizing_service.png",
        imageAlt:
            "Applying organic slow-release fertilizer to a green BC lawn",
        faq: [
            {
                q: "When should I fertilize my lawn in BC?",
                a: "Fertilize three times a year in coastal BC: April for spring growth, late June to carry the lawn through summer, and September for root development and winter hardiness. September is the most important of the three. Avoid fertilizing during late July and August heat, and skip winter entirely — nutrients applied then wash away before the lawn can use them.",
            },
            {
                q: "Is organic lawn fertilizer as effective as synthetic?",
                a: "For long-term lawn health, yes. Synthetic fertilizer gives a fast green-up that fades in weeks and leaches away. Organic fertilizer releases as soil microbes break it down, which suits coastal BC's mild, damp climate where soil biology stays active most of the year. Over two to three seasons it builds soil organic matter and structure, improving the drainage and water retention that clay-heavy Lower Mainland soils lack.",
            },
            {
                q: "What do the numbers on fertilizer mean?",
                a: "They are nitrogen, phosphorus and potassium (N-P-K). Nitrogen drives green leaf growth, phosphorus supports roots, and potassium builds cold and disease tolerance. Most established BC lawns need little or no phosphorus, and several BC municipalities restrict it because runoff feeds algae blooms — so look for a low or zero middle number unless a soil test says otherwise.",
            },
        ],
    },
    {
        slug: "gutter-cleaning-guide-metro-vancouver",
        title: "Gutter Cleaning in Metro Vancouver: How Often and When",
        excerpt:
            "With over 1,000 mm of annual rainfall, gutters are not a minor chore here. When to clean them, how often, and what blocked gutters actually cost.",
        content: [
            "In a dry climate, gutter cleaning is housekeeping. In Metro Vancouver, where we get more than 1,000 mm of rain a year concentrated into the fall and winter months, it is one of the few maintenance tasks that directly protects your foundation.",
            "## How often should you clean gutters in Metro Vancouver?\n\nMost Metro Vancouver homes need gutters cleaned twice a year: once in late November after the leaves have finished dropping, and once in spring around March or April to clear moss, needles and winter debris. Properties surrounded by mature trees — common in Ocean Park, Crescent Beach and the older parts of South Surrey — often need three or four cleanings a year. Homes under conifers are the toughest case, because cedar and fir shed needles continuously rather than in one autumn burst.",
            "## Why timing matters more than frequency\n\nThe most common mistake is cleaning gutters in early October, before the deciduous trees have finished. You get a clean gutter for three weeks and a fully blocked one by the time the November rain arrives. Wait until the leaves are genuinely down — late November in most of South Surrey — and you get one cleaning that holds through the wettest stretch of the year.\n\nThe spring cleaning matters for a different reason. Over the winter, moss establishes in gutters and downspouts, and in our climate it grows well enough to form a dense plug. Clearing it in March means the system runs freely through the spring rain.",
            "## What blocked gutters actually do\n\n- **Foundation damage.** Overflow drops water directly against the foundation instead of routing it away. In an area with clay soil and a high water table, that is the direct path to a wet basement or crawlspace.\n- **Fascia and soffit rot.** Standing water in a blocked gutter sits against the wooden fascia board. Replacing rotted fascia costs many times what a cleaning does.\n- **Ice damming.** Metro Vancouver cold snaps freeze standing gutter water, and the ice backs up under the roof edge and forces water beneath the shingles.\n- **Pest habitat.** Wet leaf debris in a gutter is ideal for rodents, wasps and carpenter ants, and it is directly against the roofline.\n- **Landscape erosion.** Concentrated overflow washes out garden beds and undermines walkways below.\n- **Gutter failure.** A 12-metre run of gutter packed with wet debris carries a surprising amount of weight and eventually pulls its fasteners out of the fascia.",
            "## Do gutter guards mean you never clean again?\n\nNo. Gutter guards reduce how much leaf litter gets in and can genuinely stretch the interval, but they do not eliminate maintenance. Fine debris — cedar needles, seeds, roof grit, and the moss that thrives here — passes through or accumulates on top of the guard, and a guard covered in a mat of wet needles sheds water off the roof edge entirely. Guarded gutters on a treed Metro Vancouver property still want inspecting once a year.",
            "## Safety\n\nMost gutter-cleaning injuries are ladder falls, and wet moss-covered roofs in the Lower Mainland are genuinely hazardous. If your home is more than a single storey, or the roof pitch is steep, or the ground under the ladder is soft and wet, this is not a good DIY job.\n\nGo Green Mowing cleans gutters across South Surrey, White Rock, Surrey, Delta and Langley — we clear the gutters and downspouts, flush the system, check that water is running out where it should, and take the debris with us. We are fully insured and WorkSafe BC compliant. Call 778-558-0447 for a free estimate.",
        ],
        date: "July 24, 2026",
        dateISO: "2026-07-24",
        author: "Go Green Mowing",
        category: "Property Maintenance",
        readTime: "6 min read",
        tags: ["gutter cleaning", "metro vancouver", "property maintenance", "fall"],
        image: "/images/services/gutter_cleaning_service.png",
        imageAlt:
            "Clearing leaf debris from a residential gutter in Metro Vancouver",
        faq: [
            {
                q: "How often should gutters be cleaned in Metro Vancouver?",
                a: "Twice a year for most homes: late November once the leaves have finished dropping, and again in March or April to clear winter moss and needles. Properties surrounded by mature trees — common in Ocean Park, Crescent Beach and older parts of South Surrey — often need three or four cleanings, and homes under cedar or fir need the most, because conifers shed needles year round.",
            },
            {
                q: "What happens if you never clean your gutters in BC?",
                a: "Overflow drops water against the foundation, which in clay soil with a high water table leads to wet basements and crawlspaces. Standing water rots the fascia and soffit, freezes into ice dams during cold snaps, attracts rodents and wasps, erodes garden beds below, and can eventually pull the gutter off the fascia under the weight of saturated debris.",
            },
            {
                q: "Do gutter guards eliminate the need for cleaning?",
                a: "No. Guards reduce leaf intake and lengthen the interval, but fine debris — cedar needles, seeds, roof grit and moss — still gets through or mats on top. A guard buried under wet needles sheds water off the roof edge entirely. Guarded gutters on a treed Metro Vancouver property should still be inspected annually.",
            },
        ],
    },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((p) => p.slug === slug);
}
