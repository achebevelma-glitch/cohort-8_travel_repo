function renderCards({ containerId, data, template }) {
  const container = document.getElementById(containerId);
 
  if (!container) {
    console.warn(`renderCards: no element found with id "${containerId}"`);
    return;
  }
 
  if (!Array.isArray(data) || data.length === 0) {
    console.warn(`renderCards: "${containerId}" has no data to render`);
    return;
  }
 
  container.innerHTML = data.map(template).join("");
}