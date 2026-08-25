const destinations = [
    {
        image: "images/imageV3.jpeg",
        location: "London, Uk",
        price: "$ 4.2k",
        trip: "12"
    },
    {
        image: "images/imagev2.png",
        location: "London, Uk",
        price: "$ 4.2k",
        trip: "12"
    },
    {
        image: "images/image3.png",
        location: "Full Europe",
        price: "$ 4.2k",
        trip: "28"
    },
]
const container = document.getElementById("destinations");

container.innerHTML = destinations
    .map(
        (dest) => `
        <div class="card">
            <img src="${dest.image}" alt="${dest.location}" class="card-image">
            <div class="card-body">
                <h3 class="card-location">${dest.location}</h3>
                <h3 class="card-price">${dest.price}</h3>
            </div>
            <p class="card-trip">
                <svg class="pin-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
                ${dest.trip} Days Trip
            </p>
        </div>
    `
    )
    .join("");