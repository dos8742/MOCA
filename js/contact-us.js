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
