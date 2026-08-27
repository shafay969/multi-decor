// Multi Decor - Luxury Interactive Catalog Engine (Light Theme)

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
    features: ['No Drilling Needed (Direct Adhesive)', 'Deep 3D Fluting', 'Termite & 100% Water Proof', 'Interlocking Tongue & Groove'],
    price: 'Wholesale Trade Rate',
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
    features: ['Only 2.5 kg/panel (Ultra Lightweight)', 'Stick with Adhesive / No Heavy Anchors', '100% Waterproof & Anti-Mould', 'Authentic 3D Natural Rock Texture'],
    price: 'Wholesale Trade Rate',
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
    price: 'Wholesale Trade Rate',
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
    price: 'Wholesale Trade Rate',
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
    lifestyleImage: "assets/images/french/french_wainscoting_room.jpg",
    specs: {
      width: 'Various Carved Profiles',
      length: 'Corner Elements & 2.4m Beadings',
      thickness: '18 - 32 mm High Relief',
      material: 'Precision Cast Polyurethane',
      finish: 'Primed Satin Ready for Paint & Gold Leaf',
      fireRating: 'Class B1'
    },
    features: ['Exquisite Hand-Carved Baroque Aesthetic', 'Pre-Primed for Custom Enamel/Gold Gilding', 'Will Never Crack, Warp or Rot', 'Lightweight & Crack-Free'],
    price: 'Wholesale Trade Rate',
    description: 'Authentic classical French wainscoting and wall beading accents. Create royal Parisian drawing rooms, elegant bedroom frames, and neoclassical wall divisions.',
    popular: true,
    swatches: [
      { name: "Satin White Primed", color: "#F0F0F0", img: "assets/images/catalog/items/pu_french_moulding.png" }
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
    price: 'Wholesale Trade Rate',
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
    price: 'Wholesale Trade Rate',
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
    price: 'Wholesale Trade Rate',
    description: 'A distinctive undulating wave profile that casts dynamic light gradients throughout the day.',
    popular: false,
    swatches: [
      { name: "Wave Slate", color: "#333333", img: "assets/images/catalog/items/wpc_17_series_mm1704.png" }
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
    price: 'Wholesale Trade Rate',
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
               `Please share stock availability & wholesale rate card in DHA Karachi. (No drilling required)`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

function renderProducts(items, containerId = 'productsGrid') {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        <i class="fa-solid fa-layer-group text-4xl text-[#B8860B] mb-3"></i>
        <h3 class="text-xl font-bold text-[#0F172A] mb-1">No Matching Profiles Found</h3>
        <p class="text-gray-500 text-xs max-w-md mx-auto">Try searching for model numbers like "1900", "PU", "8262", or select another category filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(product => `
    <div class="clean-card p-5 flex flex-col justify-between group" data-category="${product.category}">
      <div>
        <!-- Image Box -->
        <div class="relative overflow-hidden bg-[#F8F9FA] h-56 rounded-xl mb-4 cursor-pointer border border-gray-100 group-hover:border-[#B8860B]/40 transition-colors" onclick="openProductModal('${product.id}')">
          <img id="card-img-${product.id}" src="${product.image}" alt="${product.name}" class="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async">
          
          <!-- Roman Badge -->
          <div class="absolute top-2.5 left-2.5 bg-white/90 px-2.5 py-0.5 rounded text-[9px] font-bold text-[#8C6205] border border-gray-200 shadow-sm">
            ${product.roman || product.categoryLabel}
          </div>

          <div class="absolute top-2.5 right-2.5 bg-[#B8860B] text-white px-2 py-0.5 rounded text-[9px] font-bold shadow-sm">
            ${product.code}
          </div>
        </div>

        <!-- Swatches -->
        ${product.swatches && product.swatches.length > 1 ? `
          <div class="flex items-center gap-1.5 mb-2.5">
            <span class="text-[9px] text-gray-400 uppercase tracking-wider mr-0.5">Finishes:</span>
            ${product.swatches.map(s => `
              <button onclick="event.stopPropagation(); document.getElementById('card-img-${product.id}').src='${s.img}'" title="${s.name}" class="w-3.5 h-3.5 rounded-full border border-gray-300 hover:scale-125 transition-transform" style="background-color: ${s.color};"></button>
            `).join('')}
          </div>
        ` : ''}

        <!-- Details -->
        <div>
          <span class="text-[9px] font-bold text-[#B8860B] uppercase tracking-wider block mb-1">${product.categoryLabel}</span>
          <h3 class="text-base font-bold text-[#0F172A] group-hover:text-[#B8860B] transition-colors leading-snug cursor-pointer mb-1.5" onclick="openProductModal('${product.id}')">
            ${product.name}
          </h3>
          <p class="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">
            ${product.description}
          </p>

          <!-- Micro Spec Pills -->
          <div class="grid grid-cols-2 gap-2 text-[11px] bg-[#F8F9FA] p-2.5 rounded-lg border border-gray-100 mb-4">
            <div>
              <span class="text-gray-400 block text-[9px] uppercase">Depth:</span>
              <strong class="text-gray-800">${product.specs.thickness.split(' ')[0]} ${product.specs.thickness.split(' ')[1] || ''}</strong>
            </div>
            <div>
              <span class="text-gray-400 block text-[9px] uppercase">Height:</span>
              <strong class="text-gray-800">${product.specs.length.split('(')[0]}</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Buttons -->
      <div class="pt-2 flex items-center gap-2">
        <button onclick="openProductModal('${product.id}')" class="flex-1 py-2 rounded-lg btn-outline text-xs text-center font-bold">
          Specs
        </button>
        <a href="${getWhatsAppLink(product.name, product.code)}" target="_blank" rel="noopener" class="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-sm transition-all">
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
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
      
      <!-- Visuals -->
      <div class="space-y-3">
        <div class="rounded-xl overflow-hidden bg-[#F8F9FA] border border-gray-200 h-72 flex items-center justify-center relative p-4">
          <img id="modalMainImg" src="${product.image}" alt="${product.name}" class="max-h-full max-w-full object-contain">
          <span class="absolute top-3 left-3 bg-[#B8860B] text-white text-[10px] font-bold px-2.5 py-1 rounded">
            ${product.code}
          </span>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div onclick="document.getElementById('modalMainImg').src='${product.image}'" class="cursor-pointer rounded-lg overflow-hidden border-2 border-[#B8860B] h-16 bg-[#F8F9FA] p-1.5 flex items-center justify-center">
            <img src="${product.image}" class="max-h-full object-contain">
          </div>
          <div onclick="document.getElementById('modalMainImg').src='${product.lifestyleImage}'" class="cursor-pointer rounded-lg overflow-hidden border border-gray-200 hover:border-[#B8860B] h-16 bg-gray-100">
            <img src="${product.lifestyleImage}" class="w-full h-full object-cover">
          </div>
        </div>
      </div>

      <!-- Specs -->
      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#FEF9EE] text-[#8C6205] border border-[#F3DFB0]">
              ${product.categoryLabel}
            </span>
            <span class="text-xs text-emerald-700 font-semibold flex items-center gap-1">
              <i class="fa-solid fa-circle-check text-[10px]"></i> DHA Karachi Stock Ready
            </span>
          </div>

          <h2 class="text-2xl font-bold text-[#0F172A] mb-1 font-luxury">${product.name}</h2>
          <p class="text-xs text-gray-600 mb-4 leading-relaxed">${product.description}</p>

          <!-- Specifications Table -->
          <div class="space-y-2 mb-4">
            <h4 class="text-[10px] font-bold text-[#8C6205] uppercase tracking-wider">Technical Blueprint:</h4>
            <div class="grid grid-cols-2 gap-2 text-xs bg-[#F8F9FA] p-3 rounded-xl border border-gray-200">
              <div><span class="text-gray-400 block text-[9px] uppercase">Dimensions:</span> <strong class="text-[#0F172A]">${product.specs.length} × ${product.specs.width}</strong></div>
              <div><span class="text-gray-400 block text-[9px] uppercase">Depth Profile:</span> <strong class="text-[#0F172A]">${product.specs.thickness}</strong></div>
              <div><span class="text-gray-400 block text-[9px] uppercase">Core Material:</span> <strong class="text-[#0F172A]">${product.specs.material}</strong></div>
              <div><span class="text-gray-400 block text-[9px] uppercase">Surface Finish:</span> <strong class="text-[#0F172A]">${product.specs.finish}</strong></div>
              <div class="col-span-2"><span class="text-gray-400 block text-[9px] uppercase">Installation:</span> <strong class="text-emerald-800">Direct Adhesive / Zero Drilling Required</strong></div>
            </div>
          </div>
        </div>

        <!-- Action CTAs -->
        <div class="space-y-2 pt-3 border-t border-gray-200">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a href="${getWhatsAppLink(product.name, product.code)}" target="_blank" rel="noopener" class="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all">
              <i class="fa-brands fa-whatsapp text-base"></i> Order on WhatsApp
            </a>
            <a href="visualizer.html" class="py-3 px-4 rounded-xl btn-outline text-xs uppercase tracking-wider flex items-center justify-center gap-2 font-bold">
              <i class="fa-solid fa-wand-magic-sparkles text-[#B8860B]"></i> Test in 3D Studio
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
        b.classList.remove('btn-gold', 'active');
        b.classList.add('btn-outline');
      });
      btn.classList.add('btn-gold', 'active');
      btn.classList.remove('btn-outline');
      activeCategory = btn.dataset.category || 'all';
      applyFilters();
    });
  });

  applyFilters();
}
