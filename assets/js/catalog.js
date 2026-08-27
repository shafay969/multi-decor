// Multi Decor - Luxury Interactive Catalog Engine

const PRODUCTS_DATA = [
  {
    id: "md-1900",
    name: "1900 Series Fluted WPC Louver",
    roman: "SERIES XIX",
    code: "MD1900-10",
    category: "wpc",
    categoryLabel: "WPC Wall Panels",
    image: "assets/images/catalog/items/wpc_1900_series_md1900_10.png",
    lifestyleImage: "assets/images/hero/hero_luxury_living.jpg",
    specs: {
      width: '160 mm (6.3")',
      length: '2900 mm (9.5 ft Floor-to-Ceiling)',
      thickness: '24 mm Deep Architectural Rib',
      material: 'Engineered Polymer & Hardwood Fibers (Virgin Grade)',
      finish: 'Matte Smoked Walnut & Teak Woodgrain',
      fireRating: 'B1 Class Flame Retardant'
    },
    features: ['Deep 3D Fluting', 'Termite & Water Proof', 'Zero VOC & Formaldehyde', 'Interlocking Tongue & Groove'],
    price: 'PKR 21 / unit (Wholesale)',
    originalPrice: 'PKR 23',
    description: 'Our premier MD1900 architectural series delivers bold 24mm deep fluted ribs designed for statement TV accent walls, luxury headboards, and corporate lobby panelling.',
    popular: true,
    swatches: [
      { name: "Smoked Walnut", color: "#3B271A", img: "assets/images/catalog/items/wpc_1900_series_md1900_10.png" },
      { name: "Natural Teak", color: "#8B5A2B", img: "assets/images/catalog/items/wpc_200_series_md200_02.png" },
      { name: "Ash Charcoal", color: "#222222", img: "assets/images/catalog/items/wpc_18_series_mm1804.png" }
    ]
  },
  {
    id: "md-pu-stone-50mm",
    name: "Feather-Light PU Stone 50mm Sheet",
    roman: "SERIES V",
    code: "PU-STN-50",
    category: "pu-stone",
    categoryLabel: "PU Stone Panels",
    image: "assets/images/catalog/items/pu_stone_sheet_50mm.png",
    lifestyleImage: "assets/images/categories/cat_pu_stone.jpg",
    specs: {
      width: '600 mm (2 ft)',
      length: '1200 mm (4 ft)',
      thickness: '50 mm High Relief 3D Crags',
      material: 'High-Density Structural Polyurethane Foam',
      finish: 'Natural Volcanic Rock & Mountain Slate',
      fireRating: 'Class B1 Fire Proof'
    },
    features: ['Only 2.5 kg/panel (Ultra Lightweight)', '100% Waterproof & Anti-Mould', 'Easy Screw / Adhesive Fixation', 'Authentic 3D Natural Rock Texture'],
    price: 'PKR 1,450 / sheet',
    originalPrice: 'PKR 1,650',
    description: 'Revolutionary imported high-density polyurethane faux rock panel offering the majestic appearance of massive mountain slate at a fraction of the weight.',
    popular: true,
    swatches: [
      { name: "Volcanic Dark", color: "#1F1F1F", img: "assets/images/catalog/items/pu_stone_sheet_50mm.png" },
      { name: "Desert Sandstone", color: "#8C7355", img: "assets/images/catalog/items/pu_stone_2x9_5ft_office.png" }
    ]
  },
  {
    id: "md-pu-stone-large",
    name: "Backlit Monolithic PU Stone 2ft × 9.5ft",
    roman: "SERIES MONOLITH",
    code: "PU-2X9.5-EXEC",
    category: "pu-stone",
    categoryLabel: "PU Stone Panels",
    image: "assets/images/catalog/items/pu_stone_2x9_5ft_office.png",
    lifestyleImage: "assets/images/hero/hero_executive_suite.jpg",
    specs: {
      width: '2 ft (600 mm)',
      length: '9.5 ft (2900 mm Continuous)',
      thickness: '35 mm 3D Texture',
      material: 'High-Density PU with Backlit Compatible Layer',
      finish: 'Statuario Sandstone & Rugged Cliff',
      fireRating: 'B1 Commercial Standard'
    },
    features: ['Continuous 9.5ft Floor-to-Ceiling Fit', 'LED Backlighting Compatible', 'Sound Dampening Thermal Barrier', 'Seamless Joint Interlock'],
    price: 'PKR 1,650 / sheet',
    originalPrice: 'PKR 1,850',
    description: 'Designed specifically for luxury corporate offices and grand foyer walls. Seamless 9.5ft height eliminates horizontal seams for an unbroken natural stone monolith look.',
    popular: true,
    swatches: [
      { name: "Translucent Amber", color: "#B8860B", img: "assets/images/catalog/items/pu_stone_2x9_5ft_office.png" },
      { name: "Onyx Black", color: "#111111", img: "assets/images/catalog/items/pu_stone_sheet_50mm.png" }
    ]
  },
  {
    id: "md-wpc-8262",
    name: "MM-8262 Gold Slat Fluted WPC 12\"",
    roman: "SERIES GOLD-VIII",
    code: "MM-8262",
    category: "wpc",
    categoryLabel: "WPC Wall Panels",
    image: "assets/images/catalog/items/wpc_mm_8262.png",
    lifestyleImage: "assets/images/hero/hero_modern_fluted.jpg",
    specs: {
      width: '12" (300 mm Extra Wide)',
      length: '114" (9.5 ft / 2900 mm)',
      thickness: '6 mm Heavy Duty Profile',
      material: 'Virgin Polymers & Wood Fibers',
      finish: 'Metallic Gold Inlay & Dark Walnut Slat',
      fireRating: 'B1 Class'
    },
    features: ['Extra Wide 12-inch Coverage', 'Dual Champagne Gold Inlay Lines', 'Ultra Slim 6mm Profile', 'Quick Click Lock System'],
    price: 'PKR 24 / unit',
    originalPrice: 'PKR 28',
    description: 'The MM-8262 combines wide 12-inch surface efficiency with luxurious brushed gold micro-inlays, making it a favorite for modern luxury boutique interiors.',
    popular: true,
    swatches: [
      { name: "Gold Walnut", color: "#D4AF37", img: "assets/images/catalog/items/wpc_mm_8262.png" },
      { name: "Gold Charcoal", color: "#2B2B2B", img: "assets/images/catalog/items/wpc_1300_series.png" }
    ]
  },
  {
    id: "md-pu-french",
    name: "Parisian French PU Wall Mouldings",
    roman: "SERIES VERSAILLES",
    code: "PU-FR-CORN",
    category: "french",
    categoryLabel: "French Panelling",
    image: "assets/images/catalog/items/pu_french_moulding.png",
    lifestyleImage: "assets/images/categories/cat_french_moulding.jpg",
    specs: {
      width: 'Various Carved Profiles',
      length: 'Corner Elements & 2.4m Beadings',
      thickness: '18 - 32 mm High Relief',
      material: 'Precision Cast Polyurethane',
      finish: 'Primed Satin Ready for Paint & Gold Leaf',
      fireRating: 'Class B1'
    },
    features: ['Exquisite Hand-Carved Baroque Aesthetic', 'Pre-Primed for Custom Enamel/Gold Gilding', 'Will Never Crack, Warp or Rot', 'Lightweight & Crack-Free'],
    price: 'PKR 10 - 20 / pc',
    originalPrice: 'PKR 25',
    description: 'Authentic classical French wainscoting and wall beading accents. Create royal Parisian drawing rooms, elegant bedroom frames, and neoclassical wall divisions.',
    popular: true,
    swatches: [
      { name: "Satin White Primed", color: "#F0F0F0", img: "assets/images/catalog/items/pu_french_moulding.png" },
      { name: "Gilded Gold", color: "#D4AF37", img: "assets/images/catalog/items/pu_french_moulding.png" }
    ]
  },
  {
    id: "md-ps-moulding",
    name: "PS Wall Trims (M-74 / M-24 / M-401)",
    roman: "SERIES PS-TRIM",
    code: "PS-TRIM-SERIES",
    category: "moulding",
    categoryLabel: "PS Mouldings & Trims",
    image: "assets/images/catalog/items/ps_moulding.png",
    lifestyleImage: "assets/images/categories/cat_ps_trims.jpg",
    specs: {
      width: '25 mm to 80 mm profile options',
      length: '2.9 Meters (9.5 ft)',
      thickness: '12 - 20 mm',
      material: 'High Impact Polystyrene (PS)',
      finish: 'Smooth Satin White & Gold-Tipped',
      fireRating: 'B1 Waterproof'
    },
    features: ['100% Water & Moisture Proof', 'Flexible & High Tensile Strength', 'Miter-Cut Seamless Corners', 'No Sanding Required'],
    price: 'PKR 14 / meter',
    originalPrice: 'PKR 18',
    description: 'Precision extruded polystyrene beadings and trims. Perfect for wall borders, picture frame wainscoting, ceiling cornices, and mirror borders.',
    popular: false,
    swatches: [
      { name: "Classic White", color: "#FFFFFF", img: "assets/images/catalog/items/ps_moulding.png" }
    ]
  },
  {
    id: "md-wpc-1800",
    name: "1800 Series Asymmetrical Fluted WPC",
    roman: "SERIES XVIII",
    code: "MM-1804",
    category: "wpc",
    categoryLabel: "WPC Wall Panels",
    image: "assets/images/catalog/items/wpc_18_series_mm1804.png",
    lifestyleImage: "assets/images/projects/dha_phase6_residence.jpg",
    specs: {
      width: '150 mm',
      length: '2900 mm (9.5 ft)',
      thickness: '18 mm Multi-Flute',
      material: 'Composite Polymer & Hardwood Fibre',
      finish: 'Matte Ash Grey & Charcoal',
      fireRating: 'B1 Standard'
    },
    features: ['Contemporary Asymmetrical Fluting', 'Scratch Resistant Surface', 'Zero Maintenance', 'Indoor & Semi-Outdoor Covered'],
    price: 'PKR 22 / unit',
    originalPrice: 'PKR 25',
    description: 'Modern cool-grey tone engineered fluted panels ideal for contemporary minimalist apartments and commercial workspaces.',
    popular: false,
    swatches: [
      { name: "Ash Grey", color: "#4A4A4A", img: "assets/images/catalog/items/wpc_18_series_mm1804.png" }
    ]
  },
  {
    id: "md-wpc-1700",
    name: "1700 Series Undulating Wave Flute",
    roman: "SERIES XVII",
    code: "MM-1704",
    category: "wpc",
    categoryLabel: "WPC Wall Panels",
    image: "assets/images/catalog/items/wpc_17_series_mm1704.png",
    lifestyleImage: "assets/images/projects/clifton_penthouse.jpg",
    specs: {
      width: '150 mm',
      length: '2900 mm',
      thickness: '17 mm Wave Profile',
      material: 'Composite Polymer',
      finish: 'Curved Wave Ripple Slat',
      fireRating: 'B1 Class'
    },
    features: ['Curvilinear Organic Wave Design', 'Acoustic Light Diffusion', 'Seamless Joint Fit', 'Anti-Fade UV Film'],
    price: 'PKR 23 / unit',
    originalPrice: 'PKR 26',
    description: 'A distinctive undulating wave profile that casts dynamic light gradients throughout the day.',
    popular: false,
    swatches: [
      { name: "Wave Slate", color: "#333333", img: "assets/images/catalog/items/wpc_17_series_mm1704.png" }
    ]
  },
  {
    id: "md-wpc-1300",
    name: "1300 Series Micro-Grid & Gold Pinstripe",
    roman: "SERIES XIII",
    code: "MM-1300",
    category: "wpc",
    categoryLabel: "WPC Wall Panels",
    image: "assets/images/catalog/items/wpc_1300_series.png",
    lifestyleImage: "assets/images/projects/bukhari_corporate.jpg",
    specs: {
      width: '160 mm',
      length: '2900 mm',
      thickness: '15 mm Diamond Textured Rib',
      material: 'Reinforced Polymer Composite',
      finish: 'Gunmetal Charcoal & Gold Pinstripe',
      fireRating: 'B1 Standard'
    },
    features: ['Micro-Textured Diamond Slat Grid', 'Metallic Gold Accent Stripes', 'High Impact Core', 'Stain Resistant'],
    price: 'PKR 23 / unit',
    originalPrice: 'PKR 27',
    description: 'Features a precision micro-grid tactile pattern paired with sleek gold highlight strips for executive boardrooms.',
    popular: false,
    swatches: [
      { name: "Gunmetal Gold", color: "#222", img: "assets/images/catalog/items/wpc_1300_series.png" }
    ]
  },
  {
    id: "md-wpc-1000",
    name: "1000 Series Scandinavian Warm Oak",
    roman: "SERIES X",
    code: "MM-1000",
    category: "wpc",
    categoryLabel: "WPC Wall Panels",
    image: "assets/images/catalog/items/wpc_1000_series.png",
    lifestyleImage: "assets/images/projects/bahria_luxury_villa.jpg",
    specs: {
      width: '150 mm',
      length: '2900 mm',
      thickness: '12 mm Slat Profile',
      material: 'Composite Wood Fiber',
      finish: 'Deep Grain Natural Warm Oak',
      fireRating: 'B1 Class'
    },
    features: ['Warm Scandinavian Natural Oak Texture', 'Embossed Natural Woodgrain', 'Thermal Insulation', 'Hygienic Surface'],
    price: 'PKR 20 / unit',
    originalPrice: 'PKR 24',
    description: 'Warm natural timber tone panel bringing the organic warmth of authentic oak slats with none of the rotting or maintenance of raw wood.',
    popular: false,
    swatches: [
      { name: "Warm Oak", color: "#A07040", img: "assets/images/catalog/items/wpc_1000_series.png" }
    ]
  },
  {
    id: "md-wpc-200",
    name: "200 Series Double-Rib Gloss Walnut",
    roman: "SERIES II",
    code: "MD200-02",
    category: "wpc",
    categoryLabel: "WPC Wall Panels",
    image: "assets/images/catalog/items/wpc_200_series_md200_02.png",
    lifestyleImage: "assets/images/projects/islamabad_hotel_lobby.jpg",
    specs: {
      width: '150 mm',
      length: '2900 mm',
      thickness: '16 mm Double Slat',
      material: 'High-Strength Polymer Composite',
      finish: 'Rich Gloss Golden Walnut',
      fireRating: 'B1 Flame Resistant'
    },
    features: ['High gloss varnish finish', 'Special contractor bulk pack rate', 'High density core', 'Fast delivery in Karachi'],
    price: 'PKR 22 / unit',
    originalPrice: 'PKR 24',
    description: 'High volume favorite for multi-room developments and commercial renovation projects across Karachi and Pakistan.',
    popular: true,
    swatches: [
      { name: "Gloss Walnut", color: "#6E4720", img: "assets/images/catalog/items/wpc_200_series_md200_02.png" }
    ]
  },
  {
    id: "md-acoustic-slat",
    name: "Acoustic Natural Timber Sound Slat",
    roman: "SERIES ACOUSTIC",
    code: "MD-ACOUSTIC-PRO",
    category: "acoustic",
    categoryLabel: "Acoustic Panels",
    image: "assets/images/categories/cat_acoustic.jpg",
    lifestyleImage: "assets/images/categories/cat_acoustic.jpg",
    specs: {
      width: '600 mm (2 ft)',
      length: '2400 mm (8 ft)',
      thickness: '22 mm (Felt + Slat)',
      material: 'MDF Slat with Recycled Acoustic PET Felt',
      finish: 'Natural American Walnut / Smoked Oak Veneer',
      fireRating: 'NRC 0.85 Sound Absorption'
    },
    features: ['NRC 0.85 Sound Absorption Rating', 'Eliminates Room Echo & Reverb', 'Premium Real Timber Veneer', 'Architectural Modern Vibe'],
    price: 'PKR 3,200 / sheet',
    originalPrice: 'PKR 3,600',
    description: 'High-performance acoustic wood slat panels with sound-absorbing backing felt. Transforms home theatres, podcasts, conference rooms, and living areas.',
    popular: true,
    swatches: [
      { name: "American Walnut", color: "#503828", img: "assets/images/categories/cat_acoustic.jpg" }
    ]
  }
];

function getWhatsAppLink(productName, productCode, phone = "923323444567") {
  const text = `Assalam-o-Alaikum Multi Decor! I would like to inquire regarding wholesale orders for:\n` +
               `• Product: ${productName}\n` +
               `• Model Code: ${productCode}\n` +
               `Please share current stock availability, trade rate card & sample availability in DHA Karachi.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

function renderProducts(items, containerId = 'productsGrid') {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-20 bg-[#0D1017] rounded-3xl border border-[rgba(212,175,55,0.15)] p-8">
        <i class="fa-solid fa-gem text-4xl text-[#D4AF37] mb-4"></i>
        <h3 class="text-2xl font-bold text-white font-editorial mb-2">No Matching Profiles Found</h3>
        <p class="text-gray-400 text-xs max-w-md mx-auto">Try searching for specific model numbers like "1900", "PU", "8262", "French", or select another collection category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(product => `
    <div class="glass-panel p-6 flex flex-col justify-between group" data-category="${product.category}">
      <div>
        <!-- Image Box with Roman Badge -->
        <div class="relative overflow-hidden bg-[#07090D] h-64 rounded-2xl mb-5 cursor-pointer border border-gray-800/80 group-hover:border-[#D4AF37]/50 transition-colors" onclick="openProductModal('${product.id}')">
          <img id="card-img-${product.id}" src="${product.image}" alt="${product.name}" class="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700">
          
          <!-- Category & Roman Badge -->
          <div class="absolute top-3 left-3 bg-[#07090D]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#ECC97D] border border-[#D4AF37]/30 tracking-wider">
            ${product.roman || product.categoryLabel}
          </div>

          <div class="absolute top-3 right-3 bg-[#D4AF37] text-black px-2.5 py-0.5 rounded text-[10px] font-black shadow-md">
            ${product.code}
          </div>

          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span class="btn-gold-luxury px-4 py-2 text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-2xl">
              <i class="fa-solid fa-eye"></i> View Blueprint Specs
            </span>
          </div>
        </div>

        <!-- Swatches Preview -->
        ${product.swatches && product.swatches.length > 1 ? `
          <div class="flex items-center gap-1.5 mb-3">
            <span class="text-[9px] text-gray-500 uppercase tracking-widest mr-1">Finishes:</span>
            ${product.swatches.map(s => `
              <button onclick="event.stopPropagation(); document.getElementById('card-img-${product.id}').src='${s.img}'" title="${s.name}" class="w-4 h-4 rounded-full border border-gray-700 hover:border-[#D4AF37] transition-all hover:scale-125" style="background-color: ${s.color};"></button>
            `).join('')}
          </div>
        ` : ''}

        <!-- Details -->
        <div>
          <span class="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.2em] block mb-1">${product.categoryLabel}</span>
          <h3 class="text-lg font-bold text-white group-hover:text-[#ECC97D] transition-colors leading-snug cursor-pointer font-modern mb-2" onclick="openProductModal('${product.id}')">
            ${product.name}
          </h3>
          <p class="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed font-light">
            ${product.description}
          </p>

          <!-- Micro Spec Pills -->
          <div class="grid grid-cols-2 gap-2 text-[11px] bg-[#07090D] p-3 rounded-xl border border-gray-800/80 mb-5">
            <div>
              <span class="text-gray-500 block text-[9px] uppercase tracking-wider">Depth:</span>
              <strong class="text-gray-200">${product.specs.thickness.split(' ')[0]} ${product.specs.thickness.split(' ')[1] || ''}</strong>
            </div>
            <div>
              <span class="text-gray-500 block text-[9px] uppercase tracking-wider">Height:</span>
              <strong class="text-gray-200">${product.specs.length.split('(')[0]}</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Buttons -->
      <div class="pt-2 flex items-center gap-2">
        <button onclick="openProductModal('${product.id}')" class="flex-1 py-2.5 px-3 rounded-xl btn-glass-luxury text-[11px] text-center uppercase tracking-wider">
          Specs
        </button>
        <a href="${getWhatsAppLink(product.name, product.code)}" target="_blank" rel="noopener" class="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg transition-all">
          <i class="fa-brands fa-whatsapp text-sm"></i> Order
        </a>
      </div>
    </div>
  `).join('');
}

function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productDetailModal');
  const modalContent = document.getElementById('productDetailModalContent');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
      
      <!-- Left: Visuals -->
      <div class="space-y-4">
        <div class="rounded-2xl overflow-hidden bg-[#07090D] border border-[rgba(212,175,55,0.3)] h-80 flex items-center justify-center relative p-6">
          <img id="modalMainImg" src="${product.image}" alt="${product.name}" class="max-h-full max-w-full object-contain">
          <span class="absolute top-4 left-4 bg-[#D4AF37] text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
            ${product.code}
          </span>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div onclick="document.getElementById('modalMainImg').src='${product.image}'" class="cursor-pointer rounded-xl overflow-hidden border-2 border-[#D4AF37] h-20 bg-[#07090D] p-2 flex items-center justify-center">
            <img src="${product.image}" class="max-h-full object-contain">
          </div>
          <div onclick="document.getElementById('modalMainImg').src='${product.lifestyleImage}'" class="cursor-pointer rounded-xl overflow-hidden border border-gray-800 hover:border-[#D4AF37] h-20 bg-[#07090D]">
            <img src="${product.lifestyleImage}" class="w-full h-full object-cover">
          </div>
        </div>
      </div>

      <!-- Right: Detailed Specs & Blueprint -->
      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="text-[10px] font-bold px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#ECC97D] border border-[#D4AF37]/30 uppercase tracking-widest">
              ${product.categoryLabel}
            </span>
            <span class="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <i class="fa-solid fa-circle-check text-[10px]"></i> DHA Karachi Stock Ready
            </span>
          </div>

          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight font-editorial">${product.name}</h2>
          <p class="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed font-light">${product.description}</p>

          <!-- Specifications Table -->
          <div class="space-y-3 mb-6">
            <h4 class="text-[10px] font-bold text-[#ECC97D] uppercase tracking-[0.25em]">Technical Blueprint:</h4>
            <div class="grid grid-cols-2 gap-3 text-xs bg-[#07090D] p-4 rounded-xl border border-gray-800">
              <div><span class="text-gray-500 block text-[10px] uppercase">Dimensions:</span> <strong class="text-white">${product.specs.length} × ${product.specs.width}</strong></div>
              <div><span class="text-gray-500 block text-[10px] uppercase">Depth Profile:</span> <strong class="text-white">${product.specs.thickness}</strong></div>
              <div><span class="text-gray-500 block text-[10px] uppercase">Core Polymer:</span> <strong class="text-white">${product.specs.material}</strong></div>
              <div><span class="text-gray-500 block text-[10px] uppercase">Surface Finish:</span> <strong class="text-white">${product.specs.finish}</strong></div>
              <div class="col-span-2"><span class="text-gray-500 block text-[10px] uppercase">Fire Rating:</span> <strong class="text-white">${product.specs.fireRating}</strong></div>
            </div>
          </div>
        </div>

        <!-- Action CTAs -->
        <div class="space-y-3 pt-4 border-t border-gray-800">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="${getWhatsAppLink(product.name, product.code, '923323444567')}" target="_blank" rel="noopener" class="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all">
              <i class="fa-brands fa-whatsapp text-base"></i> Order on WhatsApp
            </a>
            <a href="visualizer.html" class="py-3.5 px-4 rounded-xl btn-glass-luxury text-xs uppercase tracking-wider flex items-center justify-center gap-2">
              <i class="fa-solid fa-wand-magic-sparkles text-[#D4AF37]"></i> Test in 3D Studio
            </a>
          </div>
        </div>

      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeProductModal() {
  const modal = document.getElementById('productDetailModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

function initCatalogFilters() {
  const searchInput = document.getElementById('catalogSearch');
  const filterPills = document.querySelectorAll('.category-filter-btn');

  let activeCategory = 'all';
  let searchTerm = '';

  function applyFilters() {
    let filtered = PRODUCTS_DATA;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(term) ||
        p.code.toLowerCase().includes(term) ||
        p.categoryLabel.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.specs.finish.toLowerCase().includes(term)
      );
    }

    renderProducts(filtered);

    const countBadge = document.getElementById('productCountBadge');
    if (countBadge) {
      countBadge.textContent = `${filtered.length} Profiles`;
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      applyFilters();
    });
  }

  filterPills.forEach(btn => {
    btn.addEventListener('click', () => {
      filterPills.forEach(b => {
        b.classList.remove('btn-gold-luxury', 'active');
        b.classList.add('btn-glass-luxury');
      });
      btn.classList.add('btn-gold-luxury', 'active');
      btn.classList.remove('btn-glass-luxury');
      activeCategory = btn.dataset.category || 'all';
      applyFilters();
    });
  });

  applyFilters();
}
