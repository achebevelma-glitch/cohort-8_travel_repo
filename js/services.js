const services = [
  {
    icon: "assets/icons/satellite.png",
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it."
  },
  {
    icon: "assets/icons/flight.png",
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the."
  },
  {
    icon: "assets/icons/settings.png",
    title: "Customization",
    description: "We deliver outsourced aviation services for military customers."
  },
  {
    icon: "assets/icons/microphone.png",
    title: "Local Events",
    description: "Barton vanity itself do in it. Preferd to men it engrossed listening."
  }
];
function createServiceCard(service) {
  return `
    <div class="service-card">
      <img class="service-icon" src="${service.icon}" alt="${service.title}">
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </div>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderCards({
    containerId: "servicesGrid",
    data: services,
    template: createServiceCard
  });
});