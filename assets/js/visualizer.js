// Multi Decor - Interactive Room & Wall Visualizer Studio Engine

const ROOM_PRESETS = {
  living: {
    name: "Luxury Living Room Accent Wall",
    image: "assets/images/visualizer/room_living.jpg",
    description: "Spacious contemporary salon with ambient cove lighting and open-concept seating."
  },
  office: {
    name: "Executive Director Suite",
    image: "assets/images/visualizer/room_office.jpg",
    description: "High-end corporate office backdrop suited for rugged PU stone or fluted panels."
  },
  bedroom: {
    name: "Master Suite Headboard Wall",
    image: "assets/images/visualizer/room_bedroom.jpg",
    description: "Serene bedroom space ideal for French panelling or warm acoustic wood slats."
  },
  tv_wall: {
    name: "Modern Media & TV Console Wall",
    image: "assets/images/visualizer/room_tv_wall.jpg",
    description: "Floor-to-ceiling media backdrop with integrated shelving and recessed LED channels."
  }
};

const MATERIAL_FINISHES = {
  "fluted-walnut": {
    name: "1900 Series Smoked Walnut WPC",
    code: "MD1900-10",
    category: "WPC Fluted Panel",
    textureStyle: "repeating-linear-gradient(90deg, #2b1d14 0px, #2b1d14 14px, #1a110a 14px, #1a110a 20px, #422d1f 20px, #422d1f 24px)",
    blendMode: "multiply",
    opacity: 0.85,
    lightingReflectance: "warm",
    depth3d: "24mm Deep Ribs",
    benefits: "Zero maintenance, anti-termite, authentic timber grain texture."
  },
  "fluted-gold": {
    name: "MM-8262 Gold Slat Fluted WPC",
    code: "MM-8262",
    category: "WPC Gold Inlay",
    textureStyle: "repeating-linear-gradient(90deg, #1b1b1b 0px, #1b1b1b 18px, #D4AF37 18px, #D4AF37 22px, #2a2a2a 22px, #2a2a2a 32px)",
    blendMode: "screen",
    opacity: 0.75,
    lightingReflectance: "metallic",
    depth3d: "12-inch Wide / Gold Line",
    benefits: "Modern metallic shimmer with 6mm ultra-slim structural profile."
  },
  "pu-stone-volcanic": {
    name: "Imported PU Stone 50mm Slate",
    code: "PU-STN-50",
    category: "PU Faux Rock",
    textureStyle: "radial-gradient(circle at 50% 50%, rgba(60,60,60,0.6), rgba(20,20,20,0.9)), repeating-linear-gradient(45deg, #222 0px, #333 30px, #111 60px)",
    blendMode: "overlay",
    opacity: 0.9,
    lightingReflectance: "rugged",
    depth3d: "50mm High 3D Relief",
    benefits: "Ultra featherweight polyurethane, waterproof, effortless wall screw-mount."
  },
  "pu-stone-backlit": {
    name: "Backlit Translucent PU Stone 2x9.5ft",
    code: "PU-2X9.5-EXEC",
    category: "Translucent Stone Slab",
    textureStyle: "radial-gradient(circle at 60% 40%, rgba(240, 200, 120, 0.4) 0%, rgba(40, 30, 20, 0.8) 70%), repeating-linear-gradient(135deg, rgba(200,160,100,0.2) 0px, rgba(100,70,40,0.5) 40px)",
    blendMode: "hard-light",
    opacity: 0.8,
    lightingReflectance: "glowing",
    depth3d: "Seamless 9.5ft Monolith",
    benefits: "LED rear pass-through creates breathtaking halo glow behind TV or desk."
  },
  "french-moulding": {
    name: "Parisian Classical French Moulding",
    code: "PU-FR-CORN",
    category: "French Panelling",
    textureStyle: "linear-gradient(135deg, rgba(245,245,240,0.15) 0%, rgba(220,220,215,0.05) 100%)",
    blendMode: "soft-light",
    opacity: 0.85,
    lightingReflectance: "satin",
    depth3d: "Custom Beaded Box Frames",
    benefits: "Royal neoclassical European elegance, ready for luxury enamel or gold leaf."
  },
  "acoustic-oak": {
    name: "Natural Oak Acoustic Slat Panel",
    code: "MD-ACOUSTIC-PRO",
    category: "Acoustic Wood Panel",
    textureStyle: "repeating-linear-gradient(90deg, #111 0px, #111 12px, #b08d57 12px, #b08d57 32px)",
    blendMode: "multiply",
    opacity: 0.88,
    lightingReflectance: "organic",
    depth3d: "Sound Absorbing Slat",
    benefits: "NRC 0.85 sound absorption with authentic warm Scandinavian oak wood veneer."
  }
};

const LIGHTING_MODES = {
  warm: {
    name: "3000K Warm Cove Glow",
    overlay: "radial-gradient(circle at 50% 10%, rgba(255, 180, 80, 0.35) 0%, rgba(0, 0, 0, 0.2) 70%)",
    glowClass: "shadow-[0_0_50px_rgba(255,180,80,0.4)]"
  },
  neutral: {
    name: "4000K Architectural Neutral",
    overlay: "radial-gradient(circle at 50% 15%, rgba(240, 240, 255, 0.25) 0%, rgba(0, 0, 0, 0.15) 75%)",
    glowClass: "shadow-[0_0_50px_rgba(240,240,255,0.3)]"
  },
  backlit: {
    name: "LED Edge Halo Backlight",
    overlay: "radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.5) 0%, rgba(0, 0, 0, 0.6) 85%)",
    glowClass: "shadow-[0_0_70px_rgba(212,175,55,0.6)]"
  },
  night: {
    name: "Moody Evening Ambience",
    overlay: "linear-gradient(180deg, rgba(5, 8, 15, 0.4) 0%, rgba(10, 15, 25, 0.8) 100%)",
    glowClass: "shadow-[0_0_30px_rgba(10,15,25,0.9)]"
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
      const msg = `Hello Multi Decor! I designed a wall on your Studio Visualizer:\n` +
                  `• Room: ${room.name}\n` +
                  `• Selected Material: ${material.name} (Code: ${material.code})\n` +
                  `• Lighting Mood: ${lighting.name}\n` +
                  `Please provide quotation & required panel quantity for my wall dimensions.`;
      shareBtn.href = `https://wa.me/923323444567?text=${encodeURIComponent(msg)}`;
    }
  }

  // Event Listeners for Rooms
  roomButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      roomButtons.forEach(b => {
        b.classList.remove('border-[#D4AF37]', 'bg-[#1A2230]', 'text-[#ECC97D]');
        b.classList.add('border-gray-800', 'bg-[#0D1117]', 'text-gray-400');
      });
      btn.classList.add('border-[#D4AF37]', 'bg-[#1A2230]', 'text-[#ECC97D]');
      btn.classList.remove('border-gray-800', 'bg-[#0D1117]', 'text-gray-400');
      currentVisualizerState.room = btn.dataset.room;
      updatePreview();
    });
  });

  // Event Listeners for Materials
  materialButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      materialButtons.forEach(b => b.classList.remove('swatch-active', 'border-[#D4AF37]', 'ring-2', 'ring-[#D4AF37]/50'));
      btn.classList.add('swatch-active', 'border-[#D4AF37]', 'ring-2', 'ring-[#D4AF37]/50');
      currentVisualizerState.material = btn.dataset.material;
      updatePreview();
    });
  });

  // Event Listeners for Lighting
  lightingButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      lightingButtons.forEach(b => {
        b.classList.remove('bg-[#D4AF37]', 'text-black', 'active');
        b.classList.add('bg-[#141A24]', 'text-gray-300');
      });
      btn.classList.add('bg-[#D4AF37]', 'text-black', 'active');
      btn.classList.remove('bg-[#141A24]', 'text-gray-300');
      currentVisualizerState.lighting = btn.dataset.lighting;
      updatePreview();
    });
  });

  // Initialize
  updatePreview();
}
