particlesJS("particles-js", {
  particles: {
    number: {
      value: window.innerWidth < 768 ? 30 : 60,
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#00e0ff" },
    shape: { type: "circle" },
    opacity: { value: 0.7, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00e0ff",
      opacity: 0.6,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
    shadow: {
      enable: true,
      color: "#00e0ff",
      blur: 5,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 180, line_linked: { opacity: 0.9 } },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});
