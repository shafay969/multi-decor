// Multi Decor - Realistic 3D Wall Studio Engine (True Architectural Renders Matrix)

const VISUALIZER_MATRIX = {
  living: {
    name: "Luxury Living Room",
    "fluted-walnut": {
      image: "assets/images/visualizer/renders/living_walnut.jpg",
      title: "1900 Series Smoked Walnut WPC Fluted Wall",
      code: "MD1900-10",
      depth: "24mm Deep Architectural Ribs",
      benefits: "Deep vertical flutes create dramatic shadow relief behind sofa. Zero drilling required."
    },
    "fluted-gold": {
      image: "assets/images/visualizer/renders/living_gold.jpg",
      title: "MM-8262 Brushed Gold Inlay Fluted Slat",
      code: "MM-8262",
      depth: "12\" Wide / Gold Inlay Pinstripes",
      benefits: "Combines 12-inch surface efficiency with brushed champagne gold inlays."
    },
    "pu-stone-volcanic": {
      image: "assets/images/visualizer/renders/living_stone.jpg",
      title: "Imported 3D PU Mountain Slate Stone",
      code: "PU-STN-50",
      depth: "50mm High-Relief 3D Rock Crags",
      benefits: "Ultra feather-light 2.5kg sheet. Sticks directly to walls without masonry load."
    },
    "pu-stone-backlit": {
      image: "assets/images/visualizer/renders/living_stone.jpg",
      title: "Monolithic Backlit PU Stone Slab",
      code: "PU-2X9.5-EXEC",
      depth: "2ft × 9.5ft Continuous Monolith",
      benefits: "Seamless floor-to-ceiling fit with warm edge cove illumination."
    },
    "french-moulding": {
      image: "assets/images/visualizer/renders/living_french.jpg",
      title: "Parisian Neoclassical French Wall Mouldings",
      code: "PU-FR-CORN",
      depth: "Carved Wainscoting & Floral Frames",
      benefits: "High-density crack-proof PU. Pre-primed satin white for paint or gold gilding."
    },
    "acoustic-oak": {
      image: "assets/images/visualizer/renders/living_acoustic.jpg",
      title: "Natural Oak Acoustic Wood Slat Wall",
      code: "MD-ACOUSTIC-PRO",
      depth: "22mm Real Timber + Acoustic Felt",
      benefits: "NRC 0.85 sound absorption. Eliminates echo while adding Scandinavian warmth."
    }
  },
  office: {
    name: "Executive Director Suite",
    "fluted-walnut": {
      image: "assets/images/visualizer/renders/office_walnut.jpg",
      title: "Executive Walnut Fluted Panelling",
      code: "MD1900-10",
      depth: "24mm Deep Ribs",
      benefits: "Commanding executive presence with warm dark timber tones."
    },
    "fluted-gold": {
      image: "assets/images/visualizer/renders/office_walnut.jpg",
      title: "MM-8262 Executive Gold Slat",
      code: "MM-8262",
      depth: "12\" Wide Gold Slat",
      benefits: "Modern corporate aesthetic with luxury metallic gold accents."
    },
    "pu-stone-volcanic": {
      image: "assets/images/visualizer/renders/office_stone.jpg",
      title: "Monolithic Natural PU Stone Wall",
      code: "PU-STN-50",
      depth: "50mm High-Relief Stone",
      benefits: "Creates a powerful monolithic rock backdrop behind the director desk."
    },
    "pu-stone-backlit": {
      image: "assets/images/visualizer/renders/office_stone.jpg",
      title: "Backlit Translucent PU Stone Monolith",
      code: "PU-2X9.5-EXEC",
      depth: "2ft × 9.5ft Continuous Slabs",
      benefits: "Illuminated stone monolithic panels for high-end corporate boardrooms."
    },
    "french-moulding": {
      image: "assets/images/visualizer/renders/office_french.jpg",
      title: "French Classical Library Wainscoting",
      code: "PU-FR-CORN",
      depth: "High-Density PU Beadings",
      benefits: "Timeless European study aesthetic with symmetrical framed wall boxes."
    },
    "acoustic-oak": {
      image: "assets/images/visualizer/renders/office_acoustic.jpg",
      title: "Scandinavian Acoustic Office Wall",
      code: "MD-ACOUSTIC-PRO",
      depth: "NRC 0.85 Acoustic Absorber",
      benefits: "Dampens conference call reverberations and adds organic timber warmth."
    }
  },
  bedroom: {
    name: "Master Suite",
    "fluted-walnut": {
      image: "assets/images/visualizer/renders/bedroom_walnut.jpg",
      title: "Smoked Walnut Fluted Headboard Wall",
      code: "MD1900-10",
      depth: "24mm Deep Louvers",
      benefits: "Transforms the headboard wall into a 5-star hotel suite backdrop."
    },
    "fluted-gold": {
      image: "assets/images/visualizer/renders/bedroom_walnut.jpg",
      title: "MM-8262 Gold Slat Headboard Wall",
      code: "MM-8262",
      depth: "12\" Width Gold Inlay",
      benefits: "Subtle reflective gold lines catching soft bedside lamp illumination."
    },
    "pu-stone-volcanic": {
      image: "assets/images/visualizer/renders/bedroom_stone.jpg",
      title: "Natural Rock PU Stone Bed Accent Wall",
      code: "PU-STN-50",
      depth: "50mm 3D Mountain Texture",
      benefits: "Rugged organic stone texture paired with soft bedroom linens."
    },
    "pu-stone-backlit": {
      image: "assets/images/visualizer/renders/bedroom_stone.jpg",
      title: "Warm Backlit PU Stone Headboard",
      code: "PU-2X9.5-EXEC",
      depth: "9.5ft Continuous Panel",
      benefits: "Warm ambient glow behind headboard eliminating harsh ceiling glare."
    },
    "french-moulding": {
      image: "assets/images/visualizer/renders/bedroom_french.jpg",
      title: "Parisian French Wainscoting Headboard Wall",
      code: "PU-FR-CORN",
      depth: "Classical Beaded Frames",
      benefits: "Romantic European bedroom styling with symmetrical picture moulding frames."
    },
    "acoustic-oak": {
      image: "assets/images/visualizer/renders/bedroom_acoustic.jpg",
      title: "Natural Oak Acoustic Wood Slat Wall",
      code: "MD-ACOUSTIC-PRO",
      depth: "22mm Real Timber Veneer",
      benefits: "Quiet, sound-softened bedroom sanctuary with authentic natural oak."
    }
  },
  tv_wall: {
    name: "TV Media Accent Wall",
    "fluted-walnut": {
      image: "assets/images/visualizer/renders/tv_walnut.jpg",
      title: "Fluted Smoked Walnut TV Media Wall",
      code: "MD1900-10",
      depth: "24mm Fluted Louvers",
      benefits: "The #1 choice in DHA Karachi for custom floating TV console backdrops."
    },
    "fluted-gold": {
      image: "assets/images/visualizer/renders/tv_gold.jpg",
      title: "MM-8262 Gold Slat TV Wall",
      code: "MM-8262",
      depth: "12\" Wide Gold Inlay",
      benefits: "Metallic gold pinstripes frame large OLED screens and LED backlight."
    },
    "pu-stone-volcanic": {
      image: "assets/images/visualizer/renders/tv_stone.jpg",
      title: "Rugged 3D PU Mountain Rock TV Alcove",
      code: "PU-STN-50",
      depth: "50mm High-Relief Slate",
      benefits: "Bold mountain slate texture with zero structural drilling required."
    },
    "pu-stone-backlit": {
      image: "assets/images/visualizer/renders/tv_backlit.jpg",
      title: "Backlit Amber Monolithic PU Stone TV Wall",
      code: "PU-2X9.5-EXEC",
      depth: "2ft × 9.5ft Continuous Slab",
      benefits: "Integrated rear LED illumination creates a glowing amber monolith."
    },
    "french-moulding": {
      image: "assets/images/visualizer/renders/tv_gold.jpg",
      title: "Neoclassical French Frame TV Wall",
      code: "PU-FR-CORN",
      depth: "Precision Cast Mouldings",
      benefits: "Framed wall panels create dedicated spaces for art and TV displays."
    },
    "acoustic-oak": {
      image: "assets/images/visualizer/renders/tv_walnut.jpg",
      title: "Acoustic Wood Slat TV Entertainment Wall",
      code: "MD-ACOUSTIC-PRO",
      depth: "NRC 0.85 Acoustic Sound Baffles",
      benefits: "Enhances home cinema surround sound acoustics by eliminating echo."
    }
  }
};

const LIGHTING_FILTERS = {
  warm: {
    name: "3000K Warm Cove Glow",
    filter: "sepia(18%) saturate(115%) brightness(102%)"
  },
  neutral: {
    name: "4000K Neutral Architectural",
    filter: "none"
  },
  backlit: {
    name: "LED Edge Backlit Glow",
    filter: "contrast(108%) brightness(105%) saturate(120%)"
  },
  daylight: {
    name: "Natural Daylight",
    filter: "brightness(106%) saturate(105%)"
  }
};

let currentVisualizerState = {
  room: "living",
  material: "fluted-walnut",
  lighting: "warm"
};

function initVisualizerStudio() {
  const roomButtons = document.querySelectorAll('.vis-room-btn');
  const materialButtons = document.querySelectorAll('.vis-material-btn');
  const lightingButtons = document.querySelectorAll('.vis-lighting-btn');
  const shareBtn = document.getElementById('visShareWhatsappBtn');

  function updatePreview() {
    const roomData = VISUALIZER_MATRIX[currentVisualizerState.room];
    const data = roomData[currentVisualizerState.material] || roomData["fluted-walnut"];
    const lighting = LIGHTING_FILTERS[currentVisualizerState.lighting];

    const baseImg = document.getElementById('visBaseImage');
    const titleEl = document.getElementById('visMaterialTitle');
    const codeEl = document.getElementById('visMaterialCode');
    const depthEl = document.getElementById('visMaterialDepth');
    const benefitsEl = document.getElementById('visMaterialBenefits');
    const roomLabelEl = document.getElementById('visRoomLabel');

    if (baseImg) {
      baseImg.style.opacity = '0.5';
      setTimeout(() => {
        baseImg.src = data.image;
        baseImg.style.filter = lighting.filter;
        baseImg.style.opacity = '1';
      }, 100);
    }

    if (titleEl) titleEl.textContent = data.title;
    if (codeEl) codeEl.textContent = `Model Code: ${data.code}`;
    if (depthEl) depthEl.textContent = data.depth;
    if (benefitsEl) benefitsEl.textContent = data.benefits;
    if (roomLabelEl) roomLabelEl.textContent = `${roomData.name} — Real 3D Panelling View`;

    // WhatsApp CTA Update
    if (shareBtn) {
      const msg = `Assalam-o-Alaikum Multi Decor! I configured a 3D wall design in your Room Studio:\n\n` +
                  `• Space: ${roomData.name}\n` +
                  `• Installed Wall Surface: ${data.title} (Code: ${data.code})\n` +
                  `• Lighting Atmosphere: ${lighting.name}\n\n` +
                  `Please provide required panel estimate & price for my room dimensions. (No drilling required)`;
      shareBtn.href = `https://wa.me/923323444567?text=${encodeURIComponent(msg)}`;
    }
  }

  // Room button handlers
  roomButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      roomButtons.forEach(b => {
        b.classList.remove('border-[#B8860B]', 'bg-[#FEF9EE]', 'text-[#8C6205]');
        b.classList.add('border-gray-200', 'bg-white', 'text-gray-600');
      });
      btn.classList.add('border-[#B8860B]', 'bg-[#FEF9EE]', 'text-[#8C6205]');
      btn.classList.remove('border-gray-200', 'bg-white', 'text-gray-600');
      currentVisualizerState.room = btn.dataset.room;
      updatePreview();
    });
  });

  // Material button handlers
  materialButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      materialButtons.forEach(b => b.classList.remove('border-[#B8860B]', 'ring-2', 'ring-[#B8860B]/40', 'bg-[#FEF9EE]'));
      btn.classList.add('border-[#B8860B]', 'ring-2', 'ring-[#B8860B]/40', 'bg-[#FEF9EE]');
      currentVisualizerState.material = btn.dataset.material;
      updatePreview();
    });
  });

  // Lighting button handlers
  lightingButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      lightingButtons.forEach(b => {
        b.classList.remove('btn-gold', 'active');
        b.classList.add('btn-outline');
      });
      btn.classList.add('btn-gold', 'active');
      btn.classList.remove('btn-outline');
      currentVisualizerState.lighting = btn.dataset.lighting;
      updatePreview();
    });
  });

  updatePreview();
}
