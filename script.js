const layerCopy = {
  crust: "The crust is Earth's thin outer skin, broken into tectonic plates that slowly move.",
  mantle: "The mantle is a thick zone of hot, slowly flowing rock that powers plate tectonics.",
  "outer-core": "The outer core is liquid iron and nickel; its motion helps generate Earth's magnetic field.",
  "inner-core": "The inner core is a dense solid sphere of mostly iron, compressed by extreme pressure."
};

const layerButtons = document.querySelectorAll(".layer-btn");
const layerDescription = document.getElementById("layer-description");

layerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    layerButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const selected = button.dataset.layer;
    layerDescription.textContent = layerCopy[selected] || "";
  });
});

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;

        
      }

      entry.target.classList.add("visible");

      const staggerItems = entry.target.querySelectorAll(".stagger");
      staggerItems.forEach((item, index) => {
        const delay = 80 * index;
        setTimeout(() => {
          item.classList.add("visible");
        }, delay);
      });

      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((section) => revealObserver.observe(section));
