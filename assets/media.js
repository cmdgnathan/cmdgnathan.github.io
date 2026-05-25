// Lite YouTube embed: click the poster to swap in the iframe.
// Saves bandwidth + privacy on pageload vs. native embeds.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.lite-yt').forEach(function (el) {
    el.addEventListener('click', function () {
      if (el.classList.contains('playing')) return;
      const id = el.dataset.id;
      const start = el.dataset.start ? '&start=' + el.dataset.start : '';
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id +
                   '?autoplay=1&rel=0' + start;
      iframe.title = el.getAttribute('aria-label') || 'YouTube video';
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      el.appendChild(iframe);
      el.classList.add('playing');
    });
  });
});
