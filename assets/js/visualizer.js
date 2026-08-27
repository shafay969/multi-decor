// Multi Decor - Realistic 3D Room & Wall Studio Engine (Wall-Only Texture Masking)

const ROOM_PRESETS = {
  living: {
    name: "Luxury Living Room Accent Wall",
    image: "assets/images/visualizer/room_living.jpg",
    clipClass: "wall-clipped-living",
    description: "Living room wall backdrop behind sectional sofa."
  },
  office: {
    name: "Executive Director Suite",
    image: "assets/images/visualizer/room_office.jpg",
    clipClass: "wall-clipped-office",
    description: "Office wall backdrop behind executive desk."
  },
  bedroom: {
    name: "Master Suite Headboard Wall",
    image: "assets/images/visualizer/room_bedroom.jpg",
    clipClass: "wall-clipped-bedroom",
    description: "Bedroom wall backdrop behind luxury headboard."
  },
  tv_wall: {
    name: "Modern Media & TV Console Wall",
    image: "assets/images/visualizer/room_tv_wall.jpg",
    clipClass: "wall-clipped-tv_wall",
    description: "Media wall alcove behind low console."
  }
};

const MATERIAL_FINISHES = {
  "fluted-walnut": {
    name: "1900 Series Smoked Walnut WPC",
    code: "MD1900-10",
    category: "WPC Fluted Louver",
    textureStyle: "repeating-linear-gradient(90deg, #2b1d14 0px, #2b1d14 14px, #150e08 14px, #150e08 20px, #3d291c 20px, #3d291c 24px)",
    blendMode: "multiply",
    opacity: 0.88,
    depth3d: "24mm Deep Architectural Ribs",
    benefits: "No drilling required. Direct adhesive mount over painted or bare walls."
  },
  "fluted-gold": {
    name: "MM-8262 Gold Slat Fluted WPC",
    code: "MM-8262",
    category: "WPC Gold Inlay",
    textureStyle: "repeating-linear-gradient(90deg, #1b1b1b 0px, #1b1b1b 18px, #D4AF37 18px, #D4AF37 22px, #2a2a2a 22px, #2a2a2a 32px)",
    blendMode: "multiply",
    opacity: 0.82,
    depth3d: "12\" Wide / Brushed Gold Inlay",
    benefits: "Combines 12-inch surface efficiency with brushed champagne gold inlays."
  },
  "pu-stone-volcanic": {
    name: "Imported PU Stone 50mm Slate",
    code: "PU-STN-50",
    category: "PU Faux Rock Sheet",
    textureStyle: "radial-gradient(circle at 50% 50%, rgba(60,60,60,0.7), rgba(15,15,15,0.9)), repeating-linear-gradient(45deg, #2a2a2a 0px, #3a3a3a 30px, #1a1a1a 60px)",
    blendMode: "multiply",
    opacity: 0.9,
    depth3d: "50mm High 3D Relief Crags",
    benefits: "Only 2.5kg per sheet. Sticks directly to walls without structural weight load."
  },
  "pu-stone-backlit": {
    name: "Backlit Translucent PU Stone 2x9.5ft",
    code: "PU-2X9.5-EXEC",
    category: "Translucent Stone Monolith",
    textureStyle: "radial-gradient(circle at 50% 40%, rgba(240, 190, 100, 0.55) 0%, rgba(40, 30, 20, 0.85) 75%), repeating-linear-gradient(135deg, rgba(200,160,100,0.3) 0px, rgba(100,70,40,0.6) 40px)",
    blendMode: "hard-light",
    opacity: 0.85,
    depth3d: "Continuous 9.5ft Floor-to-Ceiling",
    benefits: "Allows integrated rear LED channels for dramatic glowing TV accent walls."
  },
  "french-moulding": {
    name: "Parisian French PU Wall Moulding",
    code: "PU-FR-CORN",
    category: "French Wainscoting",
    textureStyle: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(240,240,235,0.1) 100%)",
    blendMode: "soft-light",
    opacity: 0.9,
    depth3d: "Custom Picture-Frame Beadings",
    benefits: "Neoclassical European wall framing. Lightweight, crack-proof, pre-primed."
  },
  "acoustic-oak": {
    name: "Natural Oak Acoustic Slat Panel",
    code: "MD-ACOUSTIC-PRO",
    category: "Acoustic Wood Slat",
    textureStyle: "repeating-linear-gradient(90deg, #111 0px, #111 12px, #b08d57 12px, #b08d57 32px)",
    blendMode: "multiply",
    opacity: 0.88,
    depth3d: "NRC 0.85 Sound Absorbing",
    benefits: "Real oak timber veneer with acoustic sound-dampening recycled felt."
  }
};

const LIGHTING_MODES = {
  warm: {
    name: "3000K Warm Cove Glow",
    overlay: "radial-gradient(circle at 50% 15%, rgba(255, 190, 100, 0.25) 0%, transparent 70%)"
  },
  neutral: {
    name: "4000K Neutral Architectural",
    overlay: "radial-gradient(circle at 50% 20%, rgba(240, 240, 255, 0.15) 0%, transparent 75%)"
  },
  backlit: {
    name: "LED Edge Halo Glow",
    overlay: "radial-gradient(ellipse at 50% 40%, rgba(212, 175, 55, 0.35) 0%, transparent 80%)"
  },
  daylight: {
    name: "Natural Daylight",
    overlay: "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, transparent 100%)"
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
    const room = ROOM_PRESETS[currentVisualizerState.room];
    const material = MATERIAL_FINISHES[currentVisualizerState.material];
    const lighting = LIGHTING_MODES[currentVisualizerState.lighting];

    const baseImg = document.getElementById('visBaseImage');
    const wallOverlay = document.getElementById('visWallOverlay');
    const lightingOverlay = document.getElementById('visLightingOverlay');
    const frenchFrames = document.getElementById('visFrenchFramesOverlay');

    if (baseImg) baseImg.src = room.image;
    
    if (wallOverlay) {
      // Remove all previous clip classes
      wallOverlay.className = `absolute inset-0 pointer-events-none transition-all duration-300 ${room.clipClass}`;
      wallOverlay.style.background = material.textureStyle;
      wallOverlay.style.mixBlendMode = material.blendMode;
      wallOverlay.style.opacity = material.opacity;
    }

    if (lightingOverlay) {
      lightingOverlay.style.background = lighting.overlay;
    }

    if (frenchFrames) {
      if (currentVisualizerState.material === 'french-moulding') {
        frenchFrames.classList.remove('hidden');
        frenchFrames.className = `absolute inset-0 pointer-events-none flex items-center justify-around p-8 ${room.clipClass}`;
      } else {
        frenchFrames.classList.add('hidden');
      }
    }

    // Update specs card
    const titleEl = document.getElementById('visMaterialTitle');
    const codeEl = document.getElementById('visMaterialCode');
    const depthEl = document.getElementById('visMaterialDepth');
    const benefitsEl = document.getElementById('visMaterialBenefits');
    const roomLabelEl = document.getElementById('visRoomLabel');

    if (titleEl) titleEl.textContent = material.name;
    if (codeEl) codeEl.textContent = `Model Code: ${material.code}`;
    if (depthEl) depthEl.textContent = material.depth3d;
    if (benefitsEl) benefitsEl.textContent = material.benefits;
    if (roomLabelEl) roomLabelEl.textContent = room.name;

    // Update WhatsApp Button Link
    if (shareBtn) {
      const msg = `Assalam-o-Alaikum Multi Decor! I configured a wall design in your 3D Studio:\n\n` +
                  `• Space: ${room.name}\n` +
                  `• Selected Wall Material: ${material.name} (Code: ${material.code})\n` +
                  `• Lighting Mood: ${lighting.name}\n\n` +
                  `Please provide required panel estimate & price for my room dimensions. (No drilling required)`;
      shareBtn.href = `https://wa.me/923323444567?text=${encodeURIComponent(msg)}`;
    }
  }

  // Room listeners
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

  // Material listeners
  materialButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      materialButtons.forEach(b => b.classList.remove('border-[#B8860B]', 'ring-2', 'ring-[#B8860B]/40', 'bg-[#FEF9EE]'));
      btn.classList.add('border-[#B8860B]', 'ring-2', 'ring-[#B8860B]/40', 'bg-[#FEF9EE]');
      currentVisualizerState.material = btn.dataset.material;
      updatePreview();
    });
  });

  // Lighting listeners
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
