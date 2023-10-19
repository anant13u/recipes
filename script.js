const listVideo = document.querySelectorAll('.list-item')
const recipeVideo = document.getElementById('recipe-video')

listVideo.forEach(video => {
    video.addEventListener('click', fetchVideo);
});

async function fetchVideo(event) {
    event.preventDefault()

    const videoID = getVideoID(event.target.href);
    const embedUrl = `https://www.youtube.com/embed/${videoID}?autoplay=1`;
    // console.log('embedUrl is: ' + event.target.href)
    
    const iframeHtml = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" style='border-radius:15px' allowfullscreen></iframe>`;
    console.log(`iFrameHtml is ${iframeHtml}`)
    recipeVideo.innerHTML = iframeHtml
}

function getVideoID(url) {
    // Create a new URLSearchParams object by passing the search portion of the URL as an argument
    const urlParams = new URLSearchParams(new URL(url).search);
    console.log(urlParams)
    // Use the get method of URLSearchParams to retrieve the value associated with the key 'v'
    // In the context of YouTube URLs, 'v' typically represents the video ID
    return urlParams.get('v');
}
