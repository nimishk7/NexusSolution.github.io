/**
 * Product Specification Data
 * 
 * - DWC Pipes (id: 1) has tabs: 'drainage' and 'cable'.
 * - Other products have a single details object.
 */
export const productDetails = {
  1: {
    hasTabs: true,
    tabs: [
      {
        id: 'drainage',
        label: 'DWC Drainage',
        title: 'DWC Pipes for Non-Pressure Underground Drainage and Sewerage Applications',
        description: 'These structured-wall Double Walled Corrugated (DWC) pipes are manufactured from PE/PP, featuring a smooth internal surface fused with a corrugated external profile. Designed for non-pressure underground drainage and sewerage, the corrugated exterior provides excellent ring stiffness and load-bearing capacity, preventing deformation under vehicular traffic. The smooth inner wall facilitates laminar flow, significantly reducing the chances of clogging or debris deposition.',
        specs: [
          { label: 'Standards', value: 'Conforms to IS-16098 PART II and ISO 21138 Part III (Stiffness Classes SN 4, SN 8, and SN 16).' },
          { label: 'Available Diameters', value: 'Inner diameters ranging from 75 mm up to 800 mm.' },
          { label: 'Lengths', value: 'Provided in 6-meter straight bars.' },
          { label: 'Standard Colors', value: 'Outer Black with an Inner Orange surface.' }
        ],
        features: [
          { title: 'Hydraulic Efficiency', desc: "Features a low Manning's Roughness Coefficient ('n' = 0.009) and a high Hazen William's Coefficient ('c' = 150)." },
          { title: 'Strength', desc: 'Excellent load-bearing capacity (SN4/8/16), flexible, and fatigue-resistant.' },
          { title: 'Durability', desc: 'Chemically inert, abrasion-resistant, and boasts excellent anti-corrosive properties suitable for aggressive climatic conditions.' },
          { title: 'Protection', desc: 'Rodent repellency is available on demand to avoid rodent attacks.' }
        ],
        advantages: [
          'Lightweight construction makes them easy to handle without the need for heavy machinery during installation.',
          'Allows for telescopic transportation and provides excellent connectivity with manholes and inspection chambers.',
          'Jointing Integrity: Features advanced jointing methods including in-line socket molded couplers, snap-fit couplers with rubber rings, and socket-spigot arrangements.',
          'In-line socket couplers offer a leak-proof, foolproof sewerage connection that avoids deformation during transport and provides a load-bearing strength of SN4.'
        ],
        applications: [
          'Sewerage and drainage systems, as well as culvert and highway drainage.',
          'Collectors for sub-surface drainage.',
          'Effluent and wastewater transport networks.',
          'Rainwater, stormwater collection, drainage networks, and house connections.'
        ]
      },
      {
        id: 'cable',
        label: 'DWC Cable Protection',
        title: 'DWC Pipes for Signalling, Telecommunication, and Power Cable Protection',
        description: 'These Double Walled Corrugated (DWC) High-Density Polyethylene (HDPE) pipes are engineered specifically for underground cable ducting. Featuring a corrugated outer wall for exceptional diametrical stiffness and a smooth inner wall, they facilitate seamless cable insertion. They can be laid in a single layer or utilizing spacers for multilayer installations.',
        specs: [
          { label: 'Standards', value: 'Conforms to IS-16025 PART-24 and RDSO specifications.' },
          { label: 'Available Diameters', value: 'Nominal sizes/Outer diameters ranging from 40 mm up to 315 mm.' },
          { label: 'Lengths', value: 'Available in coils of 50, 100, or 200 meters (for sizes up to 63 mm OD) and in 6-meter straight bars (for sizes 75 mm to 315 mm).' },
          { label: 'Standard Colors', value: 'Black/Yellow and Orange/Orange.' }
        ],
        features: [
          { title: 'Protection', desc: 'Features anti-rodent properties to prevent rodent attacks and anti-termite characteristics.' },
          { title: 'Safety', desc: 'Non-flame propagating, offering strong resistance to flame spread.' },
          { title: 'Insertion Ease', desc: 'Equipped with a permanently lubricated silicore inner layer for smooth cable insertion.' },
          { title: 'Durability', desc: 'Chemically inert, abrasion-resistant, and features excellent anti-corrosive properties.' },
          { title: 'Strength', desc: 'Excellent load-bearing capacity and ring stiffness, with a corrugated profile that ensures strong soil bonding.' }
        ],
        advantages: [
          'Lightweight and easy to handle, allowing for telescopic transportation.',
          'Retains its roundness even when bent, and its moderate flexibility accommodates potential soil settlement.',
          'Capable of taking heavy earth loads while ensuring minimal friction loss due to the smooth inner wall.',
          'Easy to join using snap-fit couplers with rubber rings.'
        ],
        applications: [
          'Signalling cable management for railways and airports.',
          'Solar power cable protection and optical fibre cable networks.',
          'Level crossings, platforms, home signals, and CCTV installations.'
        ]
      }
    ]
  },
  2: {
    hasTabs: false,
    title: 'HDPE Pipes for Water and Wastewater Infrastructure',
    description: 'Strong high-density polyethylene pipelines suitable for road, stormwater, and sewerage networks. Offering reliable long-term service and leak-proof fusion joints.',
    specs: [
      { label: 'Standards', value: 'Conforms to IS 4984 / IS 14333 specifications.' },
      { label: 'Available Diameters', value: 'Outer diameters ranging from 20 mm up to 630 mm.' },
      { label: 'Lengths', value: 'Available in coils and 6-meter straight bars.' },
      { label: 'Standard Colors', value: 'Black with Blue stripes (Water) or Black with Orange/Red stripes (Sewerage).' }
    ],
    features: [
      { title: 'Better soil grip', desc: 'Specially engineered outer profile for high stability in underground environments.' },
      { title: 'Rodent repellent (optional)', desc: 'Specially treated compounds block rodent bites and structural damage.' },
      { title: 'SN 4 & SN 8 Rating', desc: 'Designed for heavy-duty earth loads and pressure application classes.' }
    ],
    advantages: [
      'Extremely high tensile strength and impact resistance.',
      'Corrosion resistant, ensuring rust-free transmission of water and chemical waste.',
      'Flexible construction allows for easy detours without excess fittings.',
      'Butt-fusion jointing creates a monolithic, leak-proof piping system.'
    ],
    applications: [
      'Municipal water distribution networks.',
      'Gravity and pressure sewerage mains.',
      'Industrial effluent disposal and chemical pipelines.',
      "Sub-soil stormwater drainage systems."
    ]
  },
  3: {
    hasTabs: false,
    title: 'Couplers & Fittings for Leakproof Pipe Connections',
    description: 'Economical and reliable molded bends, tees, and cross fittings for 40mm OD to 300mm ID. Designed to provide watertight joints and seamless transition points.',
    specs: [
      { label: 'Standards', value: 'Custom manufactured to meet specifications matching DWC and HDPE pipe standards.' },
      { label: 'Available Diameters', value: 'Ranging from 40 mm OD to 300 mm ID.' },
      { label: 'Lengths/Dimensions', value: 'Custom shapes and custom site sizes available.' },
      { label: 'Standard Colors', value: 'Orange, Black.' }
    ],
    features: [
      { title: 'Flexible grip', desc: 'Provides perfect seating of rubber seals to prevent any leakages.' },
      { title: 'Non-flame propagation', desc: 'Self-extinguishing materials ensuring safety in power cable jointing.' },
      { title: 'Color Coded Systems', desc: 'Available in distinct colors to match DWC drainage and cable conduit lines.' }
    ],
    advantages: [
      'Quick snap-fit connection speeds up installation work.',
      'Ensures continuous flow without inside necking or structural blockage.',
      'Resistant to soil shifting and mechanical settlements.',
      'Low cost compared to metal or concrete fittings.'
    ],
    applications: [
      'Connecting DWC and HDPE pipeline routes.',
      'Industrial Wastewater and cable network junction boxes.',
      'Inspection chambers and storm collection chambers.'
    ]
  },
  4: {
    hasTabs: false,
    title: 'Spacer Products for organized Cable Conduit Management',
    description: 'Tailor-made spacing solutions for organized conduit management and underground wiring. Prevents cable friction and organizes layout spacing under roads and railways.',
    specs: [
      { label: 'Standards', value: 'Manufactured as per utility standards and site layout specifications.' },
      { label: 'Available Diameters', value: 'Custom sized to securely fit conduit diameters from 50 mm to 250 mm.' },
      { label: 'Lengths/Thickness', value: 'Sized according to required concrete encasement and utility spacing.' },
      { label: 'Standard Colors', value: 'Industrial Grey and Black.' }
    ],
    features: [
      { title: 'Multi-conduit support', desc: 'Houses multiple pipe lines in a neat matrix (e.g. 2x2, 4x4 stacks).' },
      { title: 'High rigid strength', desc: 'Withstands extreme compressive force during concrete pouring.' },
      { title: 'Custom site dimensions', desc: 'Fully tailored sizes according to project duct bank drawings.' }
    ],
    advantages: [
      'Maintains clean spacing, preventing power line heating and magnetic interface.',
      'Quick interlocking grid simplifies installation of multiple ducts.',
      'Durable material, resistant to chemical erosion from soil.',
      'Reduces the risk of utility damage during future excavations.'
    ],
    applications: [
      'Power utility duct banks and substations.',
      'Telecommunication and Fiber Optic Cable crossings.',
      'Metro Rail, railways, and highway under-crossings.'
    ]
  },
  5: {
    hasTabs: false,
    title: 'Moving Bed Biofilm Reactor (MBBR) Media for Wastewater Treatment',
    description: 'High-performance bio-carriers designed to maximize active surface area and biological growth in sewage treatment plants (STP) and effluent treatment plants (ETP). Manufactured from high-grade virgin HDPE/PP, they remain suspended in aeration tanks to facilitate highly efficient organic and nitrogen removal.',
    specs: [
      { label: 'Material', value: '100% Virgin High-Density Polyethylene (HDPE) or Polypropylene (PP).' },
      { label: 'Specific Surface Area', value: 'Greater than 800 to 1200 m²/m³ for high active biomass growth.' },
      { label: 'Dimensions / Diameter', value: 'Diameter options of 12 mm to 25 mm with high structural stability.' },
      { label: 'Specific Gravity & Density', value: 'Designed at 0.95 - 0.98 g/cm³ for optimal suspension in water.' }
    ],
    features: [
      { title: 'High specific surface area', desc: 'Provides massive active protected colonization area for microorganisms, enhancing digestion efficiency.' },
      { title: 'Self-cleaning design', desc: 'Fluidized movement in the aeration tank prevents clogging and ensures continuous self-cleaning.' },
      { title: 'Virgin HDPE material', desc: 'Highly resistant to chemical degradation, temperature fluctuations, and mechanical wear over 10+ years.' }
    ],
    advantages: [
      'Reduces reactor footprint significantly compared to traditional activated sludge processes.',
      'Excellent resistance to organic shock loads and sudden flow fluctuations.',
      'Low maintenance system with no recycling or return activated sludge (RAS) requirements.',
      'Scales easily by simply increasing the media filling fraction in the aeration tank.'
    ],
    applications: [
      'Municipal Sewage Treatment Plants (STP).',
      'Industrial Effluent Treatment Plants (ETP) (Food, Dairy, Pharma, Textile, Paper).',
      'Upgrading and expanding capacity of existing overloaded treatment plants.',
      'Recirculating Aquaculture Systems (RAS) for ammonia removal in fish farming.'
    ]
  }
};
