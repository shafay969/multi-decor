// Multi Decor - Main Navigation, Global WhatsApp Modal, & Interactive Controls

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerOverlay = document.getElementById('drawerOverlay');

  function openDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('translate-x-full');
      if (drawerOverlay) drawerOverlay.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
  }

  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.add('translate-x-full');
      if (drawerOverlay) drawerOverlay.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  // 2. Sticky Glass Navbar Elevation on Scroll
  const mainHeader = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (mainHeader) {
      if (window.scrollY > 40) {
        mainHeader.classList.add('py-2', 'shadow-2xl', 'border-opacity-100');
        mainHeader.classList.remove('py-4');
      } else {
        mainHeader.classList.remove('py-2', 'shadow-2xl');
        mainHeader.classList.add('py-4');
      }
    }
  });

  // 3. Floating WhatsApp Multi-Contact Modal
  const whatsappFloatingBtn = document.getElementById('whatsappFloatingBtn');
  const whatsappModal = document.getElementById('whatsappModal');
  const closeWhatsappModal = document.getElementById('closeWhatsappModal');

  if (whatsappFloatingBtn && whatsappModal) {
    whatsappFloatingBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      whatsappModal.classList.toggle('hidden');
    });
  }

  if (closeWhatsappModal && whatsappModal) {
    closeWhatsappModal.addEventListener('click', () => {
      whatsappModal.classList.add('hidden');
    });
  }

  document.addEventListener('click', (e) => {
    if (whatsappModal && !whatsappModal.classList.contains('hidden')) {
      if (!whatsappModal.contains(e.target) && e.target !== whatsappFloatingBtn) {
        whatsappModal.classList.add('hidden');
      }
    }
  });

  // 4. Before & After Slider Handler
  initBeforeAfterSliders();

  // 5. Toast Notification Helper
  window.showToast = function(message, type = 'success') {
    let toast = document.getElementById('globalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalToast';
      toast.className = 'fixed bottom-20 right-6 z-50 px-5 py-3 rounded-xl border font-medium text-sm flex items-center gap-3 shadow-2xl transition-all duration-300 transform translate-y-10 opacity-0 pointer-events-none';
      document.body.appendChild(toast);
    }
    
    toast.className = `fixed bottom-20 right-6 z-50 px-5 py-3 rounded-xl border font-medium text-sm flex items-center gap-3 shadow-2xl transition-all duration-300 transform translate-y-0 opacity-100 ${
      type === 'success' 
        ? 'bg-[#141A24] border-[#D4AF37] text-[#ECC97D]' 
        : 'bg-red-950 border-red-500 text-red-200'
    }`;
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-[#D4AF37]"></i> <span>${message}</span>`;

    setTimeout(() => {
      toast.classList.add('translate-y-10', 'opacity-0');
    }, 3500);
  };
});

// Before & After Interactive Slider Engine
function initBeforeAfterSliders() {
  const containers = document.querySelectorAll('.ba-slider-container');
  containers.forEach(container => {
    const overlay = container.querySelector('.ba-slider-overlay');
    const handle = container.querySelector('.ba-slider-handle');
    let isDragging = false;

    if (!overlay || !handle) return;

    function setPosition(x) {
      const rect = container.getBoundingClientRect();
      let offsetX = x - rect.left;
      if (offsetX < 0) offsetX = 0;
      if (offsetX > rect.width) offsetX = rect.width;
      const percentage = (offsetX / rect.width) * 100;
      overlay.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      if (clientX !== undefined) {
        setPosition(clientX);
      }
    }

    function onPointerUp() {
      isDragging = false;
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
    }

    function onPointerDown(e) {
      isDragging = true;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      if (clientX !== undefined) setPosition(clientX);
      window.addEventListener('mousemove', onPointerMove);
      window.addEventListener('mouseup', onPointerUp);
      window.addEventListener('touchmove', onPointerMove);
      window.addEventListener('touchend', onPointerUp);
    }

    handle.addEventListener('mousedown', onPointerDown);
    handle.addEventListener('touchstart', onPointerDown, { passive: true });
    container.addEventListener('click', (e) => {
      setPosition(e.clientX);
    });
  });
}
