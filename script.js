// Room Data - 10 Different Rooms
const rooms = [
    {
        id: 1,
        name: "Classic Single",
        type: "Single",
        images: [
            "https://images.pexels.com/photos/16197244/pexels-photo-16197244.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/32478555/pexels-photo-32478555.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        price: 79,
        capacity: 1,
        description: "Cozy single room perfect for solo travelers",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Private Bathroom", "32\" TV", "Work Desk"]
    },
    {
        id: 2,
        name: "Comfort Double",
        type: "Double",
        images: [
            "https://images.pexels.com/photos/5461582/pexels-photo-5461582.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/16641319/pexels-photo-16641319.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/36852529/pexels-photo-36852529.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        price: 129,
        capacity: 2,
        description: "Spacious double room with modern amenities",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Queen Bed", "Private Bathroom", "Nature View"]
    },
    {
        id: 3,
        name: "Family Room",
        type: "Suite",
        images: [
            "https://images.pexels.com/photos/5825527/pexels-photo-5825527.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/36916378/pexels-photo-36916378.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/14580368/pexels-photo-14580368.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        price: 179,
        capacity: 4,
        description: "Perfect for families with separate living area",
        amenities: ["Free Wi-Fi", "2 Bedrooms", "Kitchen", "Living Area", "Private Bathroom", "Kids Welcome"]
    },
    {
        id: 4,
        name: "Deluxe Suite",
        type: "Suite",
        images: [
            "https://images.pexels.com/photos/34672504/pexels-photo-34672504.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/18651505/pexels-photo-18651505.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        price: 249,
        capacity: 2,
        description: "Luxurious suite with premium furnishings",
        amenities: ["Free Wi-Fi", "King Bed", "Jacuzzi Tub", "Separate Sitting Area", "Rain Shower", "Premium Toiletries"]
    },
    {
        id: 5,
        name: "Ocean View Room",
        type: "Double",
        images: [
            "https://images.pexels.com/photos/14746032/pexels-photo-14746032.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/12652920/pexels-photo-12652920.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        price: 399,
        capacity: 2,
        description: "Beautiful room with stunning ocean views",
        amenities: ["Free Wi-Fi", "Ocean View Balcony", "Queen Bed", "Marble Bathroom", "Telescope", "Spa Access"]
    },
    {
        id: 6,
        name: "Executive Suite",
        type: "Suite",
        images: [
            "https://images.pexels.com/photos/9494898/pexels-photo-9494898.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/27901676/pexels-photo-27901676.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
        price: 299,
        capacity: 2,
        description: "Business-focused suite with full office setup",
        amenities: ["Free Wi-Fi", "Conference Phone", "55 inch TV", "Executive Lounge Access", "Premium Bedding"]
    },
    {
        id: 7,
        name: "Penthouse Deluxe",
        type: "Penthouse",
        images: [
            "https://images.pexels.com/photos/15087271/pexels-photo-15087271.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/7045920/pexels-photo-7045920.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/32372036/pexels-photo-32372036.png?auto=compress&cs=tinysrgb&w=800"
        ],
        price: 499,
        capacity: 4,
        description: "Top-floor penthouse with panoramic city views",
        amenities: ["Free Wi-Fi", "360° City View", "Private Hot Tub", "2 Bedrooms", "Home Theater", "Chef's Kitchen"]
    },
    {
        id: 8,
        name: "Romance Suite",
        type: "Suite",
        images: [
            "https://images.pexels.com/photos/32334227/pexels-photo-32334227.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/18824137/pexels-photo-18824137.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/30655488/pexels-photo-30655488.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        price: 279,
        capacity: 2,
        description: "Perfect for honeymoons and romantic getaways",
        amenities: ["Free Wi-Fi", "Champagne Included", "Rose Petals", "Couple's Massage Available", "Candlelit Dinner", "Fireplace"]
    },
    {
        id: 9,
        name: "Garden View Room",
        type: "Double",
        images: [
            "https://images.pexels.com/photos/14024973/pexels-photo-14024973.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/3255245/pexels-photo-3255245.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/37658587/pexels-photo-37658587.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        price: 429,
        capacity: 5,
        description: "Peaceful room overlooking lush gardens",
        amenities: ["Free Wi-Fi", "Garden View", "Queen Bed", "Private Patio", "Hammock", "Bird Watching Area", "Quiet Floor"]
    },
    {
        id: 10,
        name: "Tropical Bungalow",
        type: "Suite",
        images: [
            "https://images.pexels.com/photos/5805952/pexels-photo-5805952.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/10761017/pexels-photo-10761017.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/14025907/pexels-photo-14025907.jpeg?auto=compress&cs=tinysrgb&w=800"

        ],
        price: 349,
        capacity: 3,
        description: "Island-style bungalow with direct beach access",
        amenities: ["Free Wi-Fi", "Beach Access", "Outdoor Shower", "Mini Kitchen", "Tropical Garden", "Hammock & Lounge"]
    }
];

// Fallback image if a room photo fails to load
const FALLBACK_IMAGE = "https://images.pexels.com/photos/16641319/pexels-photo-16641319.jpeg?auto=compress&cs=tinysrgb&w=800";

// Bookings storage
let bookings = JSON.parse(localStorage.getItem('hotelBookings')) || [];

// Initialize page
document.addEventListener('DOMContentLoaded', function () {
    setMinDates();
    renderRooms(rooms);
    attachDateChangeListeners();
});

// Set minimum dates for date inputs
function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('checkInDate').min = today;
    document.getElementById('checkOutDate').min = today;
    document.getElementById('bookingCheckIn').min = today;
    document.getElementById('bookingCheckOut').min = today;
}

// Attach date change listeners for price calculation
function attachDateChangeListeners() {
    document.getElementById('bookingCheckIn').addEventListener('change', updateTotalPrice);
    document.getElementById('bookingCheckOut').addEventListener('change', updateTotalPrice);
}

// Render rooms on page
function renderRooms(roomsToRender) {
    const roomsGrid = document.getElementById('roomsGrid');
    roomsGrid.innerHTML = '';

    if (roomsToRender.length === 0) {
        roomsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 20px;">No rooms found matching your criteria.</p>';
        return;
    }

    roomsToRender.forEach(room => {
        const roomCard = document.createElement('div');
        roomCard.className = 'room-card';
        roomCard.innerHTML = `
            <div class="room-image-carousel" data-room-id="${room.id}" data-current="0">
                <div class="carousel-track">
                    ${room.images.map((img, i) => `
                        <img src="${img}" alt="${room.name}" loading="lazy"
                             class="${i === 0 ? 'active' : ''}"
                             onclick="openLightbox(event, ${room.id})"
                             onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';">
                    `).join('')}
                </div>
                ${room.images.length > 1 ? `
                    <button class="carousel-arrow left" onclick="changeCarouselImage(event, ${room.id}, -1)">&#10094;</button>
                    <button class="carousel-arrow right" onclick="changeCarouselImage(event, ${room.id}, 1)">&#10095;</button>
                    <div class="carousel-dots">
                        ${room.images.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}" onclick="goToCarouselImage(event, ${room.id}, ${i})"></span>`).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="room-info">
                <span class="room-type">${room.type}</span>
                <h3 class="room-name">${room.name}</h3>
                <p class="room-description">${room.description}</p>
                <div class="room-amenities">
                    <strong>Amenities:</strong>
                    ${room.amenities.map(a => `<span>✓ ${a}</span>`).join('')}
                </div>
                <div class="room-footer">
                    <div class="room-price">
                        $${room.price}
                        <small>per night</small>
                    </div>
                    <button class="btn-book" onclick="openBookingModal(${room.id})">Book Now</button>
                </div>
            </div>
        `;
        roomsGrid.appendChild(roomCard);
    });
}

// Update which image is shown in a room card's carousel
function updateCarouselDisplay(roomId, index) {
    const carousel = document.querySelector(`.room-image-carousel[data-room-id="${roomId}"]`);
    if (!carousel) return;
    carousel.dataset.current = index;

    carousel.querySelectorAll('.carousel-track img').forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    carousel.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Move to next/previous image in a room card's carousel
function changeCarouselImage(event, roomId, direction) {
    event.stopPropagation();
    const room = rooms.find(r => r.id === roomId);
    const carousel = document.querySelector(`.room-image-carousel[data-room-id="${roomId}"]`);
    const total = room.images.length;
    let current = (parseInt(carousel.dataset.current) + direction + total) % total;
    updateCarouselDisplay(roomId, current);
}

// Jump to a specific image via the dots
function goToCarouselImage(event, roomId, index) {
    event.stopPropagation();
    updateCarouselDisplay(roomId, index);
}

// Track which room's lightbox is currently open
let lightboxRoomId = null;

// Open the full-size image viewer
function openLightbox(event, roomId) {
    event.stopPropagation();
    lightboxRoomId = roomId;
    const carousel = document.querySelector(`.room-image-carousel[data-room-id="${roomId}"]`);
    const current = parseInt(carousel.dataset.current);
    showLightboxImage(current);
    document.getElementById('imageLightbox').classList.add('show');
}

// Show a given image index inside the lightbox (and keep the card carousel in sync)
function showLightboxImage(index) {
    const room = rooms.find(r => r.id === lightboxRoomId);
    document.getElementById('lightboxImage').src = room.images[index];
    updateCarouselDisplay(lightboxRoomId, index);
}

// Move to next/previous image while the lightbox is open
function lightboxChange(direction) {
    const room = rooms.find(r => r.id === lightboxRoomId);
    const carousel = document.querySelector(`.room-image-carousel[data-room-id="${lightboxRoomId}"]`);
    const total = room.images.length;
    let current = (parseInt(carousel.dataset.current) + direction + total) % total;
    showLightboxImage(current);
}

// Close the full-size image viewer
function closeLightbox() {
    document.getElementById('imageLightbox').classList.remove('show');
    lightboxRoomId = null;
}

// Filter rooms based on search criteria
function filterRooms() {
    const checkIn = document.getElementById('checkInDate').value;
    const checkOut = document.getElementById('checkOutDate').value;
    const guests = document.getElementById('guests').value;
    const roomType = document.getElementById('roomType').value;

    if (!checkIn || !checkOut) {
        alert('Please select both check-in and check-out dates');
        return;
    }

    if (new Date(checkIn) >= new Date(checkOut)) {
        alert('Check-out date must be after check-in date');
        return;
    }

    let filtered = rooms;

    if (guests) {
        filtered = filtered.filter(room => room.capacity >= parseInt(guests));
    }

    if (roomType) {
        filtered = filtered.filter(room => room.type === roomType);
    }

    renderRooms(filtered);
    document.getElementById('roomsGrid').scrollIntoView({ behavior: 'smooth' });
}

// Open booking modal
function openBookingModal(roomId) {
    const room = rooms.find(r => r.id === roomId);
    if (!room) return;

    // Set room info in modal
    const roomInfo = document.getElementById('selectedRoomInfo');
    roomInfo.innerHTML = `
        <img src="${room.images[0]}" alt="${room.name}"
             style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px;"
             onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';">
        <strong>${room.name}</strong> - $${room.price} per night<br>
        Capacity: ${room.capacity} guests
    `;

    // Store current room ID for booking
    document.getElementById('bookingForm').dataset.roomId = roomId;

    // Populate dates from search if available
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;

    if (checkInDate) document.getElementById('bookingCheckIn').value = checkInDate;
    if (checkOutDate) document.getElementById('bookingCheckOut').value = checkOutDate;

    // Show modal
    document.getElementById('bookingModal').classList.add('show');

    // Calculate initial price
    updateTotalPrice();
}

// Close booking modal
function closeBookingModal() {
    document.getElementById('bookingModal').classList.remove('show');
    document.getElementById('bookingForm').reset();
}

// Close bookings modal
function closeBookingsModal() {
    document.getElementById('bookingsModal').classList.remove('show');
}

// Update total price based on dates
function updateTotalPrice() {
    const roomId = parseInt(document.getElementById('bookingForm').dataset.roomId);
    const room = rooms.find(r => r.id === roomId);
    if (!room) return;

    const checkIn = new Date(document.getElementById('bookingCheckIn').value);
    const checkOut = new Date(document.getElementById('bookingCheckOut').value);

    if (checkIn && checkOut && checkIn < checkOut) {
        const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
        const totalPrice = nights * room.price;
        document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
    }
}

// Submit booking
function submitBooking() {
    const roomId = parseInt(document.getElementById('bookingForm').dataset.roomId);
    const room = rooms.find(r => r.id === roomId);

    const name = document.getElementById('guestName').value.trim();
    const email = document.getElementById('guestEmail').value.trim();
    const phone = document.getElementById('guestPhone').value.trim();
    const checkIn = document.getElementById('bookingCheckIn').value;
    const checkOut = document.getElementById('bookingCheckOut').value;
    const guests = parseInt(document.getElementById('bookingGuests').value);
    const specialRequests = document.getElementById('specialRequests').value.trim();

    // Validation
    if (!name || !email || !phone || !checkIn || !checkOut) {
        alert('Please fill in all required fields');
        return;
    }

    if (new Date(checkIn) >= new Date(checkOut)) {
        alert('Check-out date must be after check-in date');
        return;
    }

    if (guests > room.capacity) {
        alert(`This room can only accommodate ${room.capacity} guests`);
        return;
    }

    // Calculate total price
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    const totalPrice = nights * room.price;

    // Create booking object
    const booking = {
        id: Date.now(),
        roomId: roomId,
        roomName: room.name,
        roomImage: room.images[0],
        guestName: name,
        guestEmail: email,
        guestPhone: phone,
        checkIn: checkIn,
        checkOut: checkOut,
        guests: guests,
        nights: nights,
        totalPrice: totalPrice,
        specialRequests: specialRequests,
        bookingDate: new Date().toLocaleDateString(),
        status: 'Confirmed'
    };

    // Save booking
    bookings.push(booking);
    localStorage.setItem('hotelBookings', JSON.stringify(bookings));

    // Show success message
    alert(`Booking Confirmed! \n\nRoom: ${room.name}\nGuest: ${name}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nTotal: $${totalPrice.toFixed(2)}\n\nConfirmation details have been saved.`);

    // Close modal and reset form
    closeBookingModal();
}

// View bookings
function viewBookings() {
    const bookingsList = document.getElementById('bookingsList');

    if (bookings.length === 0) {
        bookingsList.innerHTML = '<div class="no-bookings">You have no bookings yet. <a href="#rooms" onclick="scrollToRooms()" style="color: #667eea;">Book a room now!</a></div>';
    } else {
        bookingsList.innerHTML = bookings.map((booking, index) => `
            <div class="booking-item">
                <h4>${booking.roomName}</h4>
                <p><strong>Guest Name:</strong> ${booking.guestName}</p>
                <p><strong>Email:</strong> ${booking.guestEmail}</p>
                <p><strong>Phone:</strong> ${booking.guestPhone}</p>
                <p><strong>Check-in:</strong> ${booking.checkIn}</p>
                <p><strong>Check-out:</strong> ${booking.checkOut}</p>
                <p><strong>Number of Guests:</strong> ${booking.guests}</p>
                <p><strong>Number of Nights:</strong> ${booking.nights}</p>
                <p><strong>Total Price:</strong> $${booking.totalPrice.toFixed(2)}</p>
                ${booking.specialRequests ? `<p><strong>Special Requests:</strong> ${booking.specialRequests}</p>` : ''}
                <p><strong>Booking Date:</strong> ${booking.bookingDate}</p>
                <span class="booking-status">${booking.status}</span>
                <br><br>
                <button class="btn btn-secondary" onclick="cancelBooking(${index})">Cancel Booking</button>
            </div>
        `).join('');
    }

    document.getElementById('bookingsModal').classList.add('show');
}

// Cancel booking
function cancelBooking(index) {
    if (confirm('Are you sure you want to cancel this booking?')) {
        bookings.splice(index, 1);
        localStorage.setItem('hotelBookings', JSON.stringify(bookings));
        viewBookings(); // Refresh the list
        alert('Booking cancelled successfully.');
    }
}

// Scroll to rooms section
function scrollToRooms() {
    document.getElementById('rooms').scrollIntoView({ behavior: 'smooth' });
}

// Close modals when clicking outside
window.onclick = function (event) {
    const bookingModal = document.getElementById('bookingModal');
    const bookingsModal = document.getElementById('bookingsModal');

    if (event.target === bookingModal) {
        closeBookingModal();
    }
    if (event.target === bookingsModal) {
        closeBookingsModal();
    }

    const imageLightbox = document.getElementById('imageLightbox');
    if (event.target === imageLightbox) {
        closeLightbox();
    }
}

// Set default dates for search
window.addEventListener('load', function () {
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

    document.getElementById('checkInDate').valueAsDate = today;
    document.getElementById('checkOutDate').valueAsDate = tomorrow;
});