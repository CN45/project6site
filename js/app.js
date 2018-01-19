//Media Element PLayer settings with jquery
$('mejs__player').mediaelementplayer({
  stretching: 'responsive',
  features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen', 'time'],
});

const vid = document.querySelectorAll('video')[0];
const span = document.querySelectorAll('span');

/*-----------------------------------------------------------------
JavaScript change the color of the text when the currentTime of the embedded video is between the start and end tags.
-----------------------------------------------------------------*/

vid.addEventListener('timeupdate', () => {
  for (let i = 0; i < span.length; i += 1) {
    let spanStart = span[i].dataset.start;
    let spanEnd = span[i].dataset.end;
    let currentTime = vid.currentTime;
    if (currentTime >= spanStart && currentTime <= spanEnd) {
      span[i].classList.add('highlight');
    } else {
      span[i].classList.remove('highlight');
    }
  }
});
/*-----------------------------------------------------------------
event listener for clicking sentence, then it is highlighted
-----------------------------------------------------------------*/

for (let i = 0; i < span.length; i += 1) {
  span[i].addEventListener('click', () => {
    vid.currentTime = span[i].dataset.start;
    vid.play();
  });
}
