const destinations = [
    {
        image:"images/image1.png",
        location:"London, Uk",
        price:"$ 4.2k",
        trip:"12"
    },
        {
        image:"images/image2.jpg",
        location:"London, Uk",
        price:"$ 4.2k",
        trip:"12"
    },
        {
        image:"images/image3.png",
        location:"Full Europe",
        price:"$ 4.2k",
        trip:"28"
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
                <h3 class="card-price">${dest.price}</3>
                </div>
                <p class="card-trip" >${dest.trip} Trip</p>
        </div>
    `
    )
    .join("");