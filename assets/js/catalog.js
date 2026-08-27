// Multi Decor - Interactive Catalog Data & Dynamic Engine

const PRODUCTS_DATA = [
  {
    id: "md-1900",
    name: "Imported 1900 Series Fluted WPC Panel",
    code: "MD1900-10",
    category: "wpc",
    categoryLabel: "WPC Wall Panels",
    image: "assets/images/catalog/items/wpc_1900_series_md1900_10.png",
    lifestyleImage: "assets/images/hero/hero_luxury_living.jpg",
    specs: {
      width: '160 mm (6.3")',
      length: '2900 mm (9.5 ft)',
      thickness: '24 mm Deep Flute',
      material: 'Engineered Wood-Plastic Composite (Eco Polymer)',
      finish: 'Matte Smoked Walnut & Teak Woodgrain',
      fireRating: 'B1 Class Flame Retardant'
    },
    features: ['Deep 3D Fluting', 'Termite & Water Proof', 'Zero VOC & Formaldehyde', 'Interlocking Tongue & Groove'],
    price: 'PKR 21 / unit (Wholesale)',
    originalPrice: 'PKR 23',
    description: 'Our premier MD1900 architectural series delivers bold 24mm deep fluted ribs designed for statement TV accent walls, luxury headboards, and corporate lobby panelling.',
    popular: true
  },
  {
    id: "md-pu-stone-50mm",
    name: "Imported PU Stone Sheet 50mm (Feather-Light)",
    code: "PU-STN-50",
    category: "pu-stone",
    categoryLabel: "PU Stone Panels",
    image: "assets/images/catalog/items/pu_stone_sheet_50mm.png",
    lifestyleImage: "assets/images/categories/cat_pu_stone.jpg",
    specs: {
      width: '600 mm (2 ft)',
      length: '1200 mm (4 ft)',
      thickness: '50 mm High Relief 3D',
      material: 'High-Density Polyurethane Lightweight Foam',
      finish: 'Natural Rough Volcanic Rock & Slate',
      fireRating: 'Class B1 Fire Proof'
    },
    features: ['Only 2.5 kg/panel (Feather Light)', '100% Waterproof & Anti-Mould', 'Easy Screw / Adhesive Fixation', 'Authentic 3D Natural Rock Texture'],
    price: 'PKR 1,450 / sheet',
    originalPrice: 'PKR 1,650',
    description: 'Revolutionary imported high-density polyurethane faux rock panel offering the majestic appearance of massive mountain slate at a fraction of the weight.',
    popular: true
  },
  {
    id: "md-pu-stone-large",
    name: "Imported PU Stone Large Format 2ft × 9.5ft",
    code: "PU-2X9.5-EXEC",
    category: "pu-stone",
    categoryLabel: "PU Stone Panels",
    image: "assets/images/catalog/items/pu_stone_2x9_5ft_office.png",
    lifestyleImage: "assets/images/hero/hero_executive_suite.jpg",
    specs: {
      width: '2 ft (600 mm)',
      length: '9.5 ft (2900 mm continuous floor-to-ceiling)',
      thickness: '35 mm 3D Texture',
      material: 'High-Density PU with Backlit Compatible Layer',
      finish: 'Statuario Sandstone & Rugged Cliff',
      fireRating: 'B1 Commercial Standard'
    },
    features: ['Continuous 9.5ft Floor-to-Ceiling Fit', 'LED Backlighting Compatible', 'Sound Dampening Thermal Barrier', 'Seamless Joint Interlock'],
    price: 'PKR 1,650 / sheet',
    originalPrice: 'PKR 1,850',
    description: 'Designed specifically for luxury corporate offices and grand foyer walls. Seamless 9.5ft height eliminates horizontal seams for an unbroken natural stone monolith look.',
    popular: true
  },
  {
    id: "md-wpc-8262",
    name: "Imported WPC Panel 12\" Width Gold Series",
    code: "MM-8262",
    category: "wpc",
    categoryLabel: "WPC Wall Panels",
    image: "assets/images/catalog/items/wpc_mm_8262.png",
    lifestyleImage: "assets/images/hero/hero_modern_fluted.jpg",
    specs: {
      width: '12" (300 mm)',
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
    popular: true
  },
  {
    id: "md-pu-french",
    name: "Imported PU French Moulding & Floral Corners",
    code: "PU-FR-CORN",
    category: "french",
    categoryLabel: "French Panelling",
    image: "assets/images/catalog/items/pu_french_moulding.png",
    lifestyleImage: "assets/images/categories/cat_french_moulding.jpg",
    specs: {
      width: 'Various (Custom Floral Motifs & Frames)',
      length: 'Corner elements + 2.4m Beading Strips',
      thickness: '18 - 32 mm High Relief',
      material: 'Precision Cast Polyurethane',
      finish: 'Primed Ready for Paint & Gold Leafing',
      fireRating: 'Class B1'
    },
    features: ['Exquisite Hand-Carved Baroque Aesthetic', 'Pre-Primed for Custom Enamel/Gold Gilding', 'Will Never Crack, Warp or Rot', 'Lightweight & Crack-Free'],
    price: 'PKR 10 - 20 / pc',
    originalPrice: 'PKR 25',
    description: 'Authentic classical French wainscoting and wall beading accents. Create royal Parisian drawing rooms, elegant bedroom frames, and neoclassical wall divisions.',
    popular: true
  },
  {
    id: "md-ps-moulding",
    name: "Imported PS Moulding & Trims (M-74 / M-24 / M-401)",
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
    popular: false
  },
  {
    id: "md-wpc-1800",
    name: "Imported WPC Panel 18 Series",
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
    popular: false
  },
  {
    id: "md-wpc-1700",
    name: "Imported Panel 17 Series Wave Flute",
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
    popular: false
  },
  {
    id: "md-wpc-1300",
    name: "Imported WPC Panel 1300 Series Micro-Grid",
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
    popular: false
  },
  {
    id: "md-wpc-1000",
    name: "Imported WPC Panel 1000 Series Rustic Oak",
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
    popular: false
  },
  {
    id: "md-wpc-200",
    name: "Imported 200 Series Wholesale Special",
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
    popular: true
  },
  {
    id: "md-acoustic-slat",
    name: "Acoustic Natural Wood Slat Sound Panel",
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
    popular: true
  }
];

// WhatsApp Quick Pre-fill Generator
function getWhatsAppLink(productName, productCode, phone = "923323444567") {
  const text = `Assalam-o-Alaikum Multi Decor! I am interested in ordering/inquiring about: ${productName} (Code: ${productCode}). Please share wholesale rates, availability & sample catalog.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

// Render Products Grid
function renderProducts(items, containerId = 'productsGrid') {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 bg-[#131822] rounded-2xl border border-[rgba(212,175,55,0.15)]">
        <i class="fa-solid fa-box-open text-4xl text-[#D4AF37] mb-3"></i>
        <h3 class="text-xl font-bold text-white mb-1">No products found</h3>
        <p class="text-gray-400 text-sm">Try selecting another category or searching for series codes like "1900", "PU", "8262".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(product => `
    <div class="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between" data-category="${product.category}">
      <div>
        <!-- Image Box -->
        <div class="relative overflow-hidden bg-[#0D1117] h-64 cursor-pointer" onclick="openProductModal('${product.id}')">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500">
          
          <!-- Category Badge -->
          <div class="absolute top-3 left-3 bg-[#0B0E14]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#ECC97D] border border-[rgba(212,175,55,0.3)]">
            ${product.categoryLabel}
          </div>

          <!-- Code Badge -->
          <div class="absolute top-3 right-3 bg-[#D4AF37] text-[#0B0E14] px-2.5 py-0.5 rounded-md text-xs font-bold shadow-md">
            ${product.code}
          </div>

          <!-- Quick view overlay -->
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button class="bg-[#D4AF37] text-black px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <i class="fa-solid fa-eye"></i> Quick View Specs
            </button>
          </div>
        </div>

        <!-- Content -->
        <div class="p-5">
          <div class="flex items-baseline justify-between gap-2 mb-2">
            <h3 class="text-lg font-bold text-white group-hover:text-[#ECC97D] transition-colors leading-snug cursor-pointer" onclick="openProductModal('${product.id}')">
              ${product.name}
            </h3>
          </div>
          
          <p class="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed">
            ${product.description}
          </p>

          <!-- Quick Specs List -->
          <div class="grid grid-cols-2 gap-2 text-[11px] bg-[#0D1117] p-3 rounded-xl border border-[rgba(212,175,55,0.1)] mb-4">
            <div>
              <span class="text-gray-400 block">Thickness:</span>
              <span class="text-white font-medium">${product.specs.thickness}</span>
            </div>
            <div>
              <span class="text-gray-400 block">Length:</span>
              <span class="text-white font-medium">${product.specs.length}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="p-5 pt-0 flex items-center gap-2">
        <button onclick="openProductModal('${product.id}')" class="flex-1 py-2.5 px-3 rounded-xl border border-[rgba(212,175,55,0.3)] text-[#ECC97D] hover:bg-[#D4AF37] hover:text-black transition-all text-xs font-bold text-center">
          Specs & Details
        </button>
        <a href="${getWhatsAppLink(product.name, product.code)}" target="_blank" rel="noopener" class="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg transition-all">
          <i class="fa-brands fa-whatsapp text-sm"></i> WhatsApp
        </a>
      </div>
    </div>
  `).join('');
}

// Quick View Modal
function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productDetailModal');
  const modalContent = document.getElementById('productDetailModalContent');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <!-- Left: Images -->
      <div class="space-y-4">
        <div class="rounded-2xl overflow-hidden bg-[#0D1117] border border-[rgba(212,175,55,0.2)] h-72 flex items-center justify-center relative">
          <img id="modalMainImg" src="${product.image}" alt="${product.name}" class="max-h-full max-w-full object-contain p-4">
          <span class="absolute top-3 left-3 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full">
            Model: ${product.code}
          </span>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div onclick="document.getElementById('modalMainImg').src='${product.image}'" class="cursor-pointer rounded-xl overflow-hidden border-2 border-[#D4AF37] h-20 bg-[#0D1117] p-1 flex items-center justify-center">
            <img src="${product.image}" class="max-h-full object-contain">
          </div>
          <div onclick="document.getElementById('modalMainImg').src='${product.lifestyleImage}'" class="cursor-pointer rounded-xl overflow-hidden border border-gray-700 hover:border-[#D4AF37] h-20 bg-[#0D1117]">
            <img src="${product.lifestyleImage}" class="w-full h-full object-cover">
          </div>
        </div>
      </div>

      <!-- Right: Detailed Specs & Actions -->
      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#ECC97D] border border-[#D4AF37]/30">
              ${product.categoryLabel}
            </span>
            <span class="text-xs text-emerald-400 font-medium flex items-center gap-1">
              <i class="fa-solid fa-circle-check text-[10px]"></i> In Stock (DHA Karachi Warehouse)
            </span>
          </div>

          <h2 class="text-2xl font-bold text-white mb-2 leading-tight">${product.name}</h2>
          <p class="text-sm text-gray-300 mb-4 leading-relaxed">${product.description}</p>

          <!-- Specifications Table -->
          <div class="space-y-2 mb-5">
            <h4 class="text-xs font-bold text-[#ECC97D] uppercase tracking-wider">Technical Specifications:</h4>
            <div class="grid grid-cols-2 gap-2 text-xs bg-[#0D1117] p-3 rounded-xl border border-[rgba(212,175,55,0.15)]">
              <div><span class="text-gray-400">Dimensions:</span> <strong class="text-white block">${product.specs.length} × ${product.specs.width}</strong></div>
              <div><span class="text-gray-400">Profile Depth:</span> <strong class="text-white block">${product.specs.thickness}</strong></div>
              <div><span class="text-gray-400">Material Core:</span> <strong class="text-white block">${product.specs.material}</strong></div>
              <div><span class="text-gray-400">Finish:</span> <strong class="text-white block">${product.specs.finish}</strong></div>
              <div class="col-span-2"><span class="text-gray-400">Fire & Safety:</span> <strong class="text-white block">${product.specs.fireRating}</strong></div>
            </div>
          </div>

          <!-- Feature Bullets -->
          <div class="mb-5">
            <h4 class="text-xs font-bold text-[#ECC97D] uppercase tracking-wider mb-2">Key Advantages:</h4>
            <ul class="grid grid-cols-2 gap-1.5 text-xs text-gray-300">
              ${product.features.map(f => `<li class="flex items-center gap-1.5"><i class="fa-solid fa-check text-xs text-[#D4AF37]"></i> ${f}</li>`).join('')}
            </ul>
          </div>
        </div>

        <!-- Action CTAs -->
        <div class="space-y-3 pt-4 border-t border-gray-800">
          <div class="flex items-center justify-between">
            <div>
              <span class="text-xs text-gray-400 block">Wholesale Trade Price:</span>
              <span class="text-xl font-extrabold text-[#ECC97D]">${product.price}</span>
            </div>
            <a href="tel:03323444567" class="text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-1">
              <i class="fa-solid fa-phone text-[#D4AF37]"></i> Call 0332-3444567
            </a>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="${getWhatsAppLink(product.name, product.code, '923323444567')}" target="_blank" rel="noopener" class="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all">
              <i class="fa-brands fa-whatsapp text-base"></i> Order on WhatsApp
            </a>
            <a href="visualizer.html" class="py-3 px-4 rounded-xl border border-[#D4AF37] text-[#ECC97D] hover:bg-[#D4AF37] hover:text-black font-bold text-xs flex items-center justify-center gap-2 transition-all">
              <i class="fa-solid fa-wand-magic-sparkles"></i> Try in Room Studio
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

// Catalog Filter & Search Setup
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

    // Update count badge if present
    const countBadge = document.getElementById('productCountBadge');
    if (countBadge) {
      countBadge.textContent = `${filtered.length} Products`;
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
        b.classList.remove('bg-[#D4AF37]', 'text-black', 'active');
        b.classList.add('bg-[#141A24]', 'text-gray-300');
      });
      btn.classList.add('bg-[#D4AF37]', 'text-black', 'active');
      btn.classList.remove('bg-[#141A24]', 'text-gray-300');
      activeCategory = btn.dataset.category || 'all';
      applyFilters();
    });
  });

  // Initial render
  applyFilters();
}

// Global modal close on click outside
window.addEventListener('click', (e) => {
  const modal = document.getElementById('productDetailModal');
  if (modal && e.target === modal) {
    closeProductModal();
  }
});
