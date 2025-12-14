
const photos = [
    { src: "images/Photo 1.jpg", text: "Caption for photo 1" },
    { src: "images/Photo 2.jpg", text: "Caption for photo 2" },
    { src: "images/Photo 4.jpg", text: "Caption for photo 3" },
    { src: "images/Photo 5.jpg", text: "Caption for photo 3" },
    { src: "images/Photo 6.jpg", text: "Caption for photo 3" },
    { src: "images/Photo 7.jpg", text: "Caption for photo 3" },
    { src: "images/Photo 8.jpg", text: "Caption for photo 3" },
    { src: "images/Photo 9.jpg", text: "Caption for photo 3" },
    { src: "images/Photo 10.jpg", text: "Caption for photo 3" }
];

let index = 0;
function changeImage(direction) {
    index += direction;

    if (index >= photos.length) index = 0;
    if (index < 0) index = photos.length - 1;


    document.getElementById("current-image").src = photos[index].src;
    document.getElementById("image-caption").textContent = photos[index].text;
}