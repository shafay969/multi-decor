// Multi Decor - Interactive 3D Wall Studio Engine (True Renders + Dynamic Lighting + French Moulding Customizer)

const VISUALIZER_MATRIX = {
  living: {
    name: "Luxury Living Room",
    "fluted-walnut": {
      image: "assets/images/visualizer/renders/living_walnut.jpg",
      title: "1900 Series Smoked Walnut WPC Fluted Wall",
      code: "MD1900-10",
      depth: "24mm Deep Architectural Ribs",
      benefits: "Deep vertical flutes create bold architectural shadow lines behind the sofa. Zero drilling required."
    },
    "fluted-gold": {
      image: "assets/images/visualizer/renders/living_gold.jpg",
      title: "MM-8262 Brushed Gold Inlay Fluted Slat",
      code: "MM-8262",
      depth: "12\" Wide / Gold Inlay Pinstripes",
      benefits: "Extra-wide 12-inch surface efficiency with luxurious brushed champagne gold inlays."
    },
    "pu-stone-volcanic": {
      image: "assets/images/visualizer/renders/living_stone.jpg",
      title: "Imported 3D PU Mountain Slate Stone",
      code: "PU-STN-50",
      depth: "50mm High-Relief 3D Rock Crags",
      benefits: "Ultra feather-light 2.5kg sheet. Sticks directly to walls without structural masonry load."
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
      benefits: "NRC 0.85 sound absorption. Eliminates room echo while adding Scandinavian warmth."
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
      image: "assets/images/visualizer/renders/office_gold.jpg",
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
      image: "assets/images/visualizer/renders/tv_french.jpg",
      title: "Parisian Classical French Moulding TV Wall",
      code: "PU-FR-CORN",
      depth: "Precision Cast Wainscoting Frames",
      benefits: "Elegant picture-frame wall mouldings create balanced classical symmetry around media displays."
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

const LIGHTING_CONFIG = {
  warm: {
    name: "3000K Warm Golden Cove",
    cctColor: "#FFA733",
    overlayGradient: "radial-gradient(ellipse at 50% 15%, rgba(255, 160, 40, 0.42) 0%, rgba(255, 110, 0, 0.18) 60%, rgba(0,0,0,0.15) 100%)",
    imgFilter: "sepia(25%) saturate(120%) brightness(103%)"
  },
  neutral: {
    name: "4000K Neutral Architectural",
    cctColor: "#FFFFFF",
    overlayGradient: "radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.3) 0%, rgba(240, 245, 255, 0.1) 60%, transparent 100%)",
    imgFilter: "contrast(102%) brightness(102%)"
  },
  backlit: {
    name: "LED Edge Halo Backlight",
    cctColor: "#D4AF37",
    overlayGradient: "radial-gradient(ellipse at 50% 45%, rgba(212, 175, 55, 0.5) 0%, rgba(20, 15, 5, 0.3) 70%, rgba(0,0,0,0.3) 100%)",
    imgFilter: "contrast(112%) brightness(106%) saturate(125%)"
  },
  daylight: {
    name: "5500K Natural Daylight Sunbeam",
    cctColor: "#E0F2FE",
    overlayGradient: "linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(224, 242, 254, 0.15) 50%, transparent 100%)",
    imgFilter: "brightness(108%) saturate(108%)"
  }
};

let currentVisualizerState = {
  room: "living",
  material: "fluted-walnut",
  lighting: "warm",
  dimmer: 80,
  frenchOverlay: false,
  frenchStyle: "dual-box",
  frenchColor: "gold"
};

function initVisualizerStudio() {
  const roomButtons = document.querySelectorAll('.vis-room-btn');
  const materialButtons = document.querySelectorAll('.vis-material-btn');
  const lightingButtons = document.querySelectorAll('.vis-lighting-btn');
  const dimmerSlider = document.getElementById('visDimmerSlider');
  const dimmerValueLabel = document.getElementById('visDimmerValue');
  const frenchToggleBtn = document.getElementById('visToggleFrenchOverlay');
  const frenchStyleSelect = document.getElementById('visFrenchStyleSelect');
  const frenchColorSelect = document.getElementById('visFrenchColorSelect');
  const shareBtn = document.getElementById('visShareWhatsappBtn');

  function updatePreview() {
    const roomData = VISUALIZER_MATRIX[currentVisualizerState.room];
    const data = roomData[currentVisualizerState.material] || roomData["fluted-walnut"];
    const light = LIGHTING_CONFIG[currentVisualizerState.lighting];

    const baseImg = document.getElementById('visBaseImage');
    const lightOverlay = document.getElementById('visLightingOverlay');
    const frenchFrames = document.getElementById('visFrenchFramesOverlay');

    const titleEl = document.getElementById('visMaterialTitle');
    const codeEl = document.getElementById('visMaterialCode');
    const depthEl = document.getElementById('visMaterialDepth');
    const benefitsEl = document.getElementById('visMaterialBenefits');
    const roomLabelEl = document.getElementById('visRoomLabel');

    // 1. Update 3D Architectural Image
    if (baseImg) {
      baseImg.src = data.image;
      baseImg.style.filter = light.imgFilter;
    }

    // 2. Update Dynamic Lighting Layer with Dimmer Intensity
    if (lightOverlay) {
      const opacity = (currentVisualizerState.dimmer / 100);
      lightOverlay.style.background = light.overlayGradient;
      lightOverlay.style.opacity = opacity.toString();
    }

    // 3. Update French Mouldings Frame Customizer Overlay
    if (frenchFrames) {
      if (currentVisualizerState.frenchOverlay || currentVisualizerState.material === 'french-moulding') {
        frenchFrames.classList.remove('hidden');
        renderFrenchMouldingFrames(frenchFrames, currentVisualizerState.frenchStyle, currentVisualizerState.frenchColor);
      } else {
        frenchFrames.classList.add('hidden');
      }
    }

    // 4. Update HUD Specs
    if (titleEl) titleEl.textContent = data.title;
    if (codeEl) codeEl.textContent = `Model Code: ${data.code}`;
    if (depthEl) depthEl.textContent = data.depth;
    if (benefitsEl) benefitsEl.textContent = data.benefits;
    if (roomLabelEl) roomLabelEl.textContent = `${roomData.name} — 3D Panelling Studio`;

    // 5. Update WhatsApp Quote URL
    if (shareBtn) {
      const msg = `Assalam-o-Alaikum Multi Decor! I configured a wall design in your 3D Room Studio:\n\n` +
                  `• Space: ${roomData.name}\n` +
                  `• Wall Surface: ${data.title} (Code: ${data.code})\n` +
                  `• Lighting Mood: ${light.name} (Intensity: ${currentVisualizerState.dimmer}%)\n` +
                  (currentVisualizerState.frenchOverlay ? `• Added French Wainscoting Trim: Yes (${currentVisualizerState.frenchStyle}, ${currentVisualizerState.frenchColor})\n` : '') +
                  `\nPlease share required panel calculation, rate sheet & sample availability in DHA Karachi. (No drilling required)`;
      shareBtn.href = `https://wa.me/923323444567?text=${encodeURIComponent(msg)}`;
    }
  }

  function renderFrenchMouldingFrames(container, style, color) {
    const borderColor = color === 'gold' ? 'border-[#B8860B]' : (color === 'white' ? 'border-white' : 'border-gray-800');
    const shadowColor = color === 'gold' ? 'shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'shadow-md';
    const innerBorder = color === 'gold' ? 'border-[#D4AF37]/60' : 'border-white/50';

    if (style === 'dual-box') {
      container.innerHTML = `
        <div class="w-full h-full flex items-center justify-around p-6 sm:p-10 pointer-events-none">
          <div class="w-[42%] h-[85%] border-4 ${borderColor} ${shadowColor} rounded-sm relative bg-white/5 backdrop-blur-[0.5px]">
            <div class="absolute inset-3 border-2 ${innerBorder}"></div>
            <div class="absolute top-2 left-2 text-[8px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-[#ECC97D]">PU-FR-01</div>
          </div>
          <div class="w-[42%] h-[85%] border-4 ${borderColor} ${shadowColor} rounded-sm relative bg-white/5 backdrop-blur-[0.5px]">
            <div class="absolute inset-3 border-2 ${innerBorder}"></div>
            <div class="absolute top-2 right-2 text-[8px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-[#ECC97D]">PU-FR-02</div>
          </div>
        </div>
      `;
    } else if (style === 'chair-rail') {
      container.innerHTML = `
        <div class="w-full h-full flex flex-col justify-between p-6 sm:p-10 pointer-events-none">
          <div class="w-full h-[55%] border-4 ${borderColor} ${shadowColor} rounded-sm relative bg-white/5">
            <div class="absolute inset-3 border-2 ${innerBorder}"></div>
          </div>
          <div class="w-full h-3.5 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-700 rounded my-2 shadow-lg flex items-center justify-center">
            <span class="text-[7px] text-black font-black uppercase tracking-widest">Chair Rail Moulding M-74</span>
          </div>
          <div class="w-full h-[30%] border-4 ${borderColor} ${shadowColor} rounded-sm relative bg-white/5">
            <div class="absolute inset-2 border-2 ${innerBorder}"></div>
          </div>
        </div>
      `;
    } else {
      // Triple Gallery Box
      container.innerHTML = `
        <div class="w-full h-full flex items-center justify-around p-6 sm:p-8 pointer-events-none">
          <div class="w-[28%] h-[80%] border-3 ${borderColor} ${shadowColor} rounded-sm relative bg-white/5">
            <div class="absolute inset-2 border ${innerBorder}"></div>
          </div>
          <div class="w-[34%] h-[88%] border-4 ${borderColor} ${shadowColor} rounded-sm relative bg-white/5">
            <div class="absolute inset-3 border-2 ${innerBorder}"></div>
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B8860B] text-white text-[8px] font-bold px-2 py-0.5 rounded-full shadow">Floral Crown</div>
          </div>
          <div class="w-[28%] h-[80%] border-3 ${borderColor} ${shadowColor} rounded-sm relative bg-white/5">
            <div class="absolute inset-2 border ${innerBorder}"></div>
          </div>
        </div>
      `;
    }
  }

  // 1. Room Switcher Listeners
  roomButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      roomButtons.forEach(b => {
        b.classList.remove('border-[#B8860B]', 'bg-[#FEF9EE]', 'text-[#8C6205]', 'shadow-sm');
        b.classList.add('border-gray-200', 'bg-white', 'text-gray-600');
      });
      btn.classList.add('border-[#B8860B]', 'bg-[#FEF9EE]', 'text-[#8C6205]', 'shadow-sm');
      btn.classList.remove('border-gray-200', 'bg-white', 'text-gray-600');
      currentVisualizerState.room = btn.dataset.room;
      updatePreview();
    });
  });

  // 2. Material Swatch Listeners
  materialButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      materialButtons.forEach(b => b.classList.remove('border-[#B8860B]', 'ring-2', 'ring-[#B8860B]/40', 'bg-[#FEF9EE]'));
      btn.classList.add('border-[#B8860B]', 'ring-2', 'ring-[#B8860B]/40', 'bg-[#FEF9EE]');
      currentVisualizerState.material = btn.dataset.material;
      updatePreview();
    });
  });

  // 3. Lighting Mode Listeners
  lightingButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
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

  // 4. Dimmer Slider Listener
  if (dimmerSlider) {
    dimmerSlider.addEventListener('input', (e) => {
      currentVisualizerState.dimmer = parseInt(e.target.value);
      if (dimmerValueLabel) dimmerValueLabel.textContent = `${currentVisualizerState.dimmer}%`;
      const lightOverlay = document.getElementById('visLightingOverlay');
      if (lightOverlay) {
        lightOverlay.style.opacity = (currentVisualizerState.dimmer / 100).toString();
      }
    });
  }

  // 5. French Moulding Overlay Toggle
  if (frenchToggleBtn) {
    frenchToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentVisualizerState.frenchOverlay = !currentVisualizerState.frenchOverlay;
      if (currentVisualizerState.frenchOverlay) {
        frenchToggleBtn.classList.add('btn-gold');
        frenchToggleBtn.classList.remove('btn-outline');
        frenchToggleBtn.innerHTML = '<i class="fa-solid fa-crown text-xs"></i> French Mouldings ON';
      } else {
        frenchToggleBtn.classList.remove('btn-gold');
        frenchToggleBtn.classList.add('btn-outline');
        frenchToggleBtn.innerHTML = '<i class="fa-solid fa-crown text-xs"></i> Add French Mouldings';
      }
      updatePreview();
    });
  }

  // 6. French Style & Color Listeners
  if (frenchStyleSelect) {
    frenchStyleSelect.addEventListener('change', (e) => {
      currentVisualizerState.frenchStyle = e.target.value;
      updatePreview();
    });
  }
  if (frenchColorSelect) {
    frenchColorSelect.addEventListener('change', (e) => {
      currentVisualizerState.frenchColor = e.target.value;
      updatePreview();
    });
  }

  // Initial Run
  updatePreview();
}

document.addEventListener('DOMContentLoaded', () => {
  initVisualizerStudio();
});
