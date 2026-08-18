# 🏨 Luxe Hotels - Hotel Booking Website

A modern, fully functional hotel booking website with **10 different room types**, booking management, and local storage for bookings.

## ✨ Features

### 🛏️ 10 Different Room Types:
1. **Classic Single** - $79/night (1 guest)
2. **Comfort Double** - $129/night (2 guests)
3. **Family Room** - $179/night (4 guests)
4. **Deluxe Suite** - $249/night (2 guests)
5. **Ocean View Room** - $199/night (2 guests)
6. **Executive Suite** - $299/night (2 guests)
7. **Penthouse Deluxe** - $499/night (4 guests)
8. **Romance Suite** - $279/night (2 guests)
9. **Garden View Room** - $149/night (2 guests)
10. **Tropical Bungalow** - $349/night (3 guests)

### 🎯 Core Functionality:
- ✅ **Room Search & Filter** - Search by dates, guest count, and room type
- ✅ **Booking System** - Complete booking form with guest information
- ✅ **Dynamic Price Calculation** - Automatically calculates total based on nights
- ✅ **Booking Management** - View, track, and cancel bookings
- ✅ **Local Storage** - Bookings saved in browser (no database needed yet)
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Modern UI** - Beautiful gradient design with smooth animations

## 📁 File Structure

```
Hotelpage/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling
├── script.js           # All JavaScript functionality
└── README.md           # This file
```

## 🚀 How to Use

### 1. **Open the Website**
- Simply open `index.html` in any modern web browser
- Or run with a local server: `python -m http.server 8000`

### 2. **Search for Rooms**
- Set Check-in and Check-out dates
- Select number of guests
- Choose room type (optional)
- Click "Search Rooms"

### 3. **Book a Room**
- Click "Book Now" on any room card
- Fill in guest details (name, email, phone)
- Review total price
- Click "Confirm Booking"
- Booking is saved instantly!

### 4. **View Your Bookings**
- Click "My Bookings" in navigation
- See all your confirmed bookings
- Cancel bookings if needed

## 💾 Data Storage

Bookings are stored in **browser's localStorage**, which means:
- ✅ Bookings persist even after closing the browser
- ✅ No database setup needed
- ✅ No server required
- ⚠️ Clearing browser data will delete bookings

## 🔧 Easy Integration Points

When you're ready to add third-party integrations, you can easily add:

### Payment Gateway (Stripe, PayPal, etc.)
- Add payment processing in the `submitBooking()` function
- Capture payment before confirming booking

### Email Notifications
- Add email service (SendGrid, Mailgun, etc.)
- Send confirmation email to `booking.guestEmail`

### SMS Notifications
- Add SMS service (Twilio, etc.)
- Send confirmation to `booking.guestPhone`

### Database Backend
- Connect to Firebase, MongoDB, or any backend
- Replace localStorage with API calls
- Add user authentication

### Calendar Integration
- Connect to Google Calendar or iCal
- Show room availability in real-time

## 🎨 Customization

### Change Hotel Name
Edit in `index.html`:
```html
<h1>🏨 Your Hotel Name</h1>
```

### Add/Modify Rooms
Edit `script.js` in the `rooms` array:
```javascript
{
    id: 11,
    name: "Your Room Name",
    type: "Suite",
    emoji: "🎯",
    price: 199,
    capacity: 2,
    description: "Room description",
    amenities: ["Wi-Fi", "TV", "etc"]
}
```

### Change Colors
Edit `styles.css`:
- Primary: `#667eea` (purple-blue)
- Accent: `#f39c12` (orange)
- Dark: `#2c3e50` (dark blue)

## 📱 Browser Compatibility

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Next Steps for Production

1. **Set up a backend** (Node.js, Python, etc.)
2. **Add database** (MongoDB, PostgreSQL, etc.)
3. **Integrate payment** (Stripe, PayPal)
4. **Add authentication** (Login/signup)
5. **Email notifications** (SendGrid, Mailgun)
6. **Deployment** (Heroku, Vercel, AWS, etc.)

## 📧 Support

For help with modifications or integration, feel free to reach out!

---

**Enjoy your hotel booking website! 🎉**
