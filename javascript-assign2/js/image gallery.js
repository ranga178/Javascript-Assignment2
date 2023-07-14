const images = [
    {
    url:'images/pic1.jpg',
    caption: 'Very Colourful Flowers!'
    },
    {
        url:'images/pic2.jpg',
        caption:'Purple Flowers!'
    },
    {
        url:'images/pic3.jpg',
        caption:'Red Flowers!'
    },
    {
        url:'images/pic4.jpg',
        caption:'White Flowers!'
    },
    {
        url:'images/pic5.jpg',
        caption:'Sunflower!'
    },
];


function generateImage() {
    const imageList = document.getElementById('imageList');

    images.forEach((image) =>{
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.classList.add('small');
        img.src = image.url;
        img.alt = '';
        img.width = 240;
        img.height= 160;
        img.onclick = () => changeImg(img, image.caption);

        li.appendChild(img);
        imageList.appendChild(li);
    });
}

generateImage();

function changeImg(thumbnail, caption) {
    const largeImage = document.getElementById('largeImage');
    const imageCaption = document.getElementById('imageCaption');
    largeImage.src= thumbnail.src;
    imageCaption.textContent = caption;

}
