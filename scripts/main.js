const hueSlider = document.getElementById("hue-slider");
const hueValueSpan = document.getElementById("hue-value");
const root = document.documentElement;

const cssBrandValue = getComputedStyle(root).getPropertyValue("--brand-hue");
hueSlider.value = cssBrandValue || 0;
hueValueSpan.textContent = cssBrandValue || 0;

hueSlider.addEventListener("input", (event) => {
  root.style.setProperty("--brand-hue", event.target.value);
  hueValueSpan.textContent = event.target.value;
});
