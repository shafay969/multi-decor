// Multi Decor - Interactive Wall Panel & Quantity Estimator Engine

function initEstimatorCalculator() {
  const widthInput = document.getElementById('calcWallWidth');
  const heightInput = document.getElementById('calcWallHeight');
  const productSelect = document.getElementById('calcProductType');
  const calcBtn = document.getElementById('calcCalculateBtn');
  const whatsappQuoteBtn = document.getElementById('calcWhatsappQuoteBtn');

  const PRODUCT_SPECS_MAP = {
    'wpc-6inch': {
      name: "Fluted WPC Panel (6\" Width × 9.5ft Height)",
      widthFt: 0.52,
      heightFt: 9.5,
      areaPerUnit: 4.94,
      approxPrice: 22
    },
    'wpc-12inch': {
      name: "WPC Gold Series MM-8262 (12\" Width × 9.5ft Height)",
      widthFt: 1.0,
      heightFt: 9.5,
      areaPerUnit: 9.5,
      approxPrice: 25
    },
    'pu-stone-50mm': {
      name: "PU Stone Sheet 50mm (2ft × 4ft)",
      widthFt: 2.0,
      heightFt: 4.0,
      areaPerUnit: 8.0,
      approxPrice: 1450
    },
    'pu-stone-slab': {
      name: "PU Stone Large Format (2ft × 9.5ft Continuous)",
      widthFt: 2.0,
      heightFt: 9.5,
      areaPerUnit: 19.0,
      approxPrice: 1650
    },
    'acoustic-slat': {
      name: "Acoustic Wood Slat Panel (2ft × 8ft)",
      widthFt: 2.0,
      heightFt: 8.0,
      areaPerUnit: 16.0,
      approxPrice: 3200
    }
  };

  function calculate() {
    const width = parseFloat(widthInput?.value) || 0;
    const height = parseFloat(heightInput?.value) || 0;
    const selectedKey = productSelect?.value || 'wpc-6inch';
    const product = PRODUCT_SPECS_MAP[selectedKey];

    if (width <= 0 || height <= 0) {
      if (window.showToast) window.showToast('Please enter valid wall width and height.', 'error');
      return;
    }

    const totalAreaSqFt = width * height;
    
    // Calculate panels needed based on width coverage
    let exactPanels = Math.ceil(width / product.widthFt);
    
    // Check if height exceeds 9.5ft
    if (height > product.heightFt) {
      const heightMultiplier = Math.ceil(height / product.heightFt);
      exactPanels = exactPanels * heightMultiplier;
    }

    const recommendedWithWaste = Math.ceil(exactPanels * 1.10); // +10% buffer
    const perimeterTrimsFt = Math.ceil((width * 2) + (height * 2));

    // Update UI elements
    const areaEl = document.getElementById('calcResultArea');
    const exactPanelsEl = document.getElementById('calcResultExact');
    const recPanelsEl = document.getElementById('calcResultRec');
    const trimsEl = document.getElementById('calcResultTrims');
    const summaryBox = document.getElementById('calcSummaryBox');

    if (areaEl) areaEl.textContent = `${totalAreaSqFt.toFixed(1)} sq. ft`;
    if (exactPanelsEl) exactPanelsEl.textContent = `${exactPanels} panels`;
    if (recPanelsEl) recPanelsEl.textContent = `${recommendedWithWaste} panels (+10% cut buffer)`;
    if (trimsEl) trimsEl.textContent = `${perimeterTrimsFt} ft`;
    if (summaryBox) summaryBox.classList.remove('hidden');

    // Update WhatsApp Quote Link
    if (whatsappQuoteBtn) {
      const msg = `Assalam-o-Alaikum Multi Decor! I used your Wall Calculator for my project:\n` +
                  `• Wall Dimensions: ${width} ft (Width) × ${height} ft (Height) = ${totalAreaSqFt.toFixed(1)} sq ft\n` +
                  `• Selected Product: ${product.name}\n` +
                  `• Calculated Requirement: ${recommendedWithWaste} units\n` +
                  `• Perimeter Trim Needed: ~${perimeterTrimsFt} ft\n` +
                  `Please confirm wholesale stock availability & total cost including delivery in Karachi / Pakistan.`;
      whatsappQuoteBtn.href = `https://wa.me/923323444567?text=${encodeURIComponent(msg)}`;
    }

    if (window.showToast) window.showToast('Calculation complete! Ready for WhatsApp quote.');
  }

  if (calcBtn) {
    calcBtn.addEventListener('click', calculate);
  }

  // Also auto recalculate on input change if results are visible
  [widthInput, heightInput, productSelect].forEach(el => {
    if (el) el.addEventListener('change', () => {
      const summaryBox = document.getElementById('calcSummaryBox');
      if (summaryBox && !summaryBox.classList.contains('hidden')) {
        calculate();
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initEstimatorCalculator();
});
