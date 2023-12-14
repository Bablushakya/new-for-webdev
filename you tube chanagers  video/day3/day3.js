
// Flower data (you can replace this with your own images)
var flowerImages = [
    'flower1.jpg',
    'flower2.jpg',
    'flower3.jpg',
    // Add more image URLs as needed
];

// Function to change background color
function changeBackgroundColor() {
    var body = document.body;
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = randomColor;
}

// Function to display flowers
function displayFlowers() {
    var flowersContainer = document.getElementById('flowers');
    flowersContainer.innerHTML = '';

    flowerImages.forEach(image => {
        var flowerDiv = document.createElement('div');
        flowerDiv.className = 'flower';
        var img = document.createElement('img');
        img.src =image;
        img.alt = 'Beautiful Flower';
        flowerDiv.appendChild(img);
        flowersContainer.appendChild(flowerDiv);
    });
}

// Initial display of flowers
displayFlowers();
