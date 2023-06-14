// 輪播圖
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 6,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2 // 在最大寬度為 768px 時，將項目數量變為 2
        },
        768: {
            items: 6 // 在寬度大於 768px 時，恢復項目數量為 6
        }
    }
});

$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
});

$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
});
// --------------------------------------------------------
// 關於我們，滾動時圖檔由小至大
window.addEventListener('scroll', function() {
  if (window.innerWidth > 768) { // 在螢幕寬度大於 768px 時應用特效
    var imageIDs = ['scrolling-image1', 'scrolling-image2', 'scrolling-image3'];
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    for (var i = 0; i < imageIDs.length; i++) {
      var imageID = imageIDs[i];
      var scrollingImage = document.getElementById(imageID);
      var imageTop = scrollingImage.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (imageTop < windowHeight) {
        var scaleFactor = 1 + (windowHeight - imageTop) * 0.005; // 调整数字以控制大小變化的速度
        var imageSize = 100 * scaleFactor; // 計算大小
        imageSize = Math.min(imageSize, 500); // 限制圖像的最大大小

        scrollingImage.style.width = imageSize + 'px';
      }
    }
  }
});
// --------------------------------------------------------
// chef-introduce,影片
document.addEventListener('DOMContentLoaded', function() {
  var image = document.getElementById('image');
  var videoContainer = document.getElementById('video-container');
  var video = document.getElementById('video');
  var closeButton = document.getElementById('close-button');
  var blurEffect = document.createElement('div');
  blurEffect.classList.add('blur-effect');

  image.addEventListener('click', function(event) {
    event.stopPropagation();
    videoContainer.style.display = 'block';
    video.play();
    document.body.appendChild(blurEffect);
  });

  closeButton.addEventListener('click', function(event) {
    event.stopPropagation();
    closeVideo();
  });

  document.addEventListener('click', function() {
    closeVideo();
  });

  blurEffect.addEventListener('click', function(event) {
    event.stopPropagation();
    if (event.target === blurEffect) {
      closeVideo();
    }
  });

  function closeVideo() {
    videoContainer.style.display = 'none';
    video.pause();
    document.body.removeChild(blurEffect);
  }
});
// --------------------------------------------------------
// TOP鍵
window.onscroll = scrollFunction;

function scrollFunction() { 
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("myBtn").style.display = "block";
} else {
    document.getElementById("myBtn").style.display = "none";
}
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
// --------------------------------------------------------
// 折疊式footer
document.addEventListener('DOMContentLoaded', function() {
  var toggles = document.querySelectorAll('.toggle');

  toggles.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        toggles.forEach(function(otherToggle) {
          if (otherToggle !== toggle) {
            otherToggle.classList.remove('active');
            var associatedLinks = otherToggle.parentNode.querySelectorAll('a');
            associatedLinks.forEach(function(link) {
              link.style.display = 'none';
            });
          }
        });

        toggle.classList.toggle('active');
        var associatedLinks = toggle.parentNode.querySelectorAll('a');
        associatedLinks.forEach(function(link) {
          link.style.display = toggle.classList.contains('active') ? 'block' : 'none';
        });
      }
    });

    // 初始隱藏超連結（僅在 max-width: 768px 時）
    if (window.innerWidth <= 768) {
      var associatedLinks = toggle.parentNode.querySelectorAll('a');
      associatedLinks.forEach(function(link) {
        link.style.display = 'none';
      });
    }
  });
});
// --------------------------------------------------------























