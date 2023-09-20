const listVideo = document.querySelectorAll('.list-video')
const recipeVideo = document.getElementById('recipe-video')

listVideo.forEach(video => {
    video.addEventListener('click', fetchVideo);
});

async function fetchVideo(event) {
    event.preventDefault()
    
    const embedUrl = `${event.target.href}`;
    // console.log(`Embed URL is ${thumbnailUrl1}`)
    // const videoUrl2 = `https://www.youtube.com/watch?v=${videoID2}`
    // console.log(`The Video URL is ${videoUrl2}`)
    
    const iframeHtml = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" style='border-radius:15px' allowfullscreen></iframe>`;
    console.log(`iFrameHtml is ${iframeHtml}`)
    
    recipeVideo.innerHTML = iframeHtml
}
