// 滾動時圖檔由小至大
window.addEventListener('scroll', function() {
  if (window.innerWidth > 768) {
    var imageIDs = ['scrolling-image1', 'scrolling-image2', 'scrolling-image3'];
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
  
    for (var i = 0; i < imageIDs.length; i++) {
      var imageID = imageIDs[i];
      var scrollingImage = document.getElementById(imageID);
      var imageTop = scrollingImage.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
  
      if (imageTop < windowHeight) {
        var scaleFactor = 1 + (windowHeight - imageTop) * 0.009; // 調整數字以控制大小變化的速度
        var imageSize = 100 * scaleFactor; // 計算大小
        imageSize = Math.min(imageSize, 642); // 限制圖像的最大大小
  
        scrollingImage.style.width = imageSize + 'px';
      }
    }
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

