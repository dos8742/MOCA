// 下拉式選單
function showAddress() {
    var dropdown = document.getElementById("choose_address");
    var selectedOption = dropdown.value;

    var addressesContainer = document.getElementsByClassName("address_sort")[0];
    var addresses = addressesContainer.getElementsByTagName("li");

    // 隱藏所有地址
    for (var i = 0; i < addresses.length; i++) {
        addresses[i].style.display = "none";
    }

    if (selectedOption === "taipei") {
        showSelectedAddresses("address_110", "address_104", "address_103");
    } else if (selectedOption === "newtaipei") {
        showSelectedAddresses("address_241", "address_236");
    } else if (selectedOption === "yilian") {
        showSelectedAddresses("address_260");
    } else if (selectedOption === "taichung") {
        showSelectedAddresses("address_406", "address_408");
    }else {
        showSelectedAddresses("address_110", "address_104", "address_103","address_241", "address_236","address_260","address_406", "address_408");
    }
}

function showSelectedAddresses(...addressClasses) {
    for (var i = 0; i < addressClasses.length; i++) {
        var addressElements = document.getElementsByClassName(addressClasses[i]);
        if (addressElements.length > 0) {
            addressElements[0].parentNode.style.display = "block";
        }
    }
}
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





