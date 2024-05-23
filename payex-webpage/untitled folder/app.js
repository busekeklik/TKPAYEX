document.addEventListener('DOMContentLoaded', function() {
    fetchWalletDetails();
    fetchOffers();
});

function fetchWalletDetails() {
    fetch('/wallet/123') // Adjust the user ID as needed
        .then(response => response.json())
        .then(data => {
            document.getElementById('totalBalance').innerText = `${data.balance} TRY`;
            document.getElementById('tkPoints').innerText = `${data.tkPoints} TRY`;
        })
        .catch(error => console.error('Error fetching wallet details:', error));
}

function fetchOffers() {
    fetch('/offers')
        .then(response => response.json())
        .then(offers => {
            const offersContainer = document.getElementById('offersContainer');
            offersContainer.innerHTML = ''; // Clear existing offers
            offers.forEach(offer => {
                const offerElem = document.createElement('div');
                offerElem.className = 'col-md-4 mb-3';
                offerElem.innerHTML = `
                    <div class="card">
                        <img src="${offer.imageUrl}" class="card-img-top" alt="${offer.hotelName}">
                        <div class="card-body">
                            <h5 class="card-title">${offer.hotelName}</h5>
                            <p class="card-text">${offer.price} TL</p>
                            <a href="#" class="btn btn-primary">See Details</a>
                        </div>
                    </div>
                `;
                offersContainer.appendChild(offerElem);
            });
        })
        .catch(error => console.error('Error fetching offers:', error));
}

function addFunds() {
    // Implement fund addition logic
    console.log('Add funds clicked');
}
