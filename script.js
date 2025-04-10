// Room Data
const rooms = [
  { number: '101', booked: false },
  { number: '102', booked: true },
  { number: '103', booked: false },
  { number: '104', booked: false },
  { number: '105', booked: true },
  { number: '201', booked: false },
  { number: '202', booked: false },
  { number: '203', booked: true },
  { number: '204', booked: false },
  { number: '205', booked: false },
  { number: '301', booked: false },
  { number: '302', booked: true },
  { number: '303', booked: false },
  { number: '304', booked: false },
  { number: '305', booked: true },
];

// Generate Room List
const roomList = document.getElementById('room-list');
rooms.forEach(room => {
  const roomDiv = document.createElement('div');
  roomDiv.className = `room ${room.booked ? 'booked' : 'available'}`;
  roomDiv.textContent = room.number;
  roomDiv.addEventListener('click', () => selectRoom(room));
  roomList.appendChild(roomDiv);
});

// Selected Rooms
let selectedRooms = [];

// Select Room Function
function selectRoom(room) {
  if (!room.booked) {
    if (selectedRooms.includes(room.number)) {
      selectedRooms = selectedRooms.filter(r => r !== room.number);
    } else {
      selectedRooms.push(room.number);
    }
    updatePrice();
  }
}

// Update Price Function
function updatePrice() {
  const priceDisplay = document.getElementById('price-display');
  const price = selectedRooms.length * 3000;
  priceDisplay.textContent = `${price} Rs`;
}

// Generate Bill Function
function generateBill() {
  const customerName = document.getElementById('customer-name').value;
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const persons = document.getElementById('persons').value;
  const idProof = document.getElementById('id-proof').value;
  const idNumber = document.getElementById('id-number').value;
  const price = selectedRooms.length * 3000;

  const billContent = `
    <h2>Altaj Rooms and Hotels</h2>
    <p>Customer Name: ${customerName}</p>
    <p>Check-in: ${checkin}</p>
    <p>Check-out: ${checkout}</p>
    <p>Number of Persons: ${persons}</p>
    <p>ID Proof: ${idProof}</p>
    <p>ID Number: ${idNumber}</p>
    <p>Rooms Selected: ${selectedRooms.join(', ')}</p>
    <p>Total Price: ${price} Rs</p>
  `;

  const printWindow = window.open('', '', 'height=600,width=800');
  printWindow.document.write('<html><head><title>Bill</title></head><body>');
  printWindow.document.write(billContent);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}