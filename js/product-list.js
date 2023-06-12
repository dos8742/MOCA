// 產品項目
const quantityElements = document.querySelectorAll('.quantity-value');
    
document.querySelectorAll('.minus').forEach((button, index) => {
    button.addEventListener('click', () => {
        decrementQuantity(index);
    });
});

document.querySelectorAll('.plus').forEach((button, index) => {
    button.addEventListener('click', () => {
        incrementQuantity(index);
    });
});

document.querySelectorAll('.car').forEach((button) => {
    button.addEventListener('click', () => {
        addToCart();
    });
});

function decrementQuantity(index) {
    let quantity = parseInt(quantityElements[index].textContent);
    if (quantity > 0) {
        quantity--;
        quantityElements[index].textContent = quantity;
    }
}

function incrementQuantity(index) {
    let quantity = parseInt(quantityElements[index].textContent);
        quantity++;
        quantityElements[index].textContent = quantity;
}

function addToCart() {
    console.log('商品已加入購物車');
}

document.querySelector('form').addEventListener('submit', (event) => { // 防止表單提交
    event.preventDefault();
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
//產品資訊 
// 顯示產品介紹
function showProductIntro() {
// 獲取被點擊的產品區塊
const productBlock = event.target.closest('.shopping_product');

// 顯示產品介紹
const productIntro = productBlock.querySelector('.product_intro');
productIntro.style.display = 'block';

// 添加背景模糊效果
const backgroundLayer = productBlock.querySelector('.background-layer');
backgroundLayer.style.display = 'block';
}

// 隱藏產品介紹
function hideProductIntro() {
// 獲取被點擊的關閉按鈕所在的產品區塊
const productBlock = event.target.closest('.shopping_product');

// 隱藏產品介紹
const productIntro = productBlock.querySelector('.product_intro');
productIntro.style.display = 'none';

// 移除背景模糊效果
const backgroundLayer = productBlock.querySelector('.background-layer');
backgroundLayer.style.display = 'none';
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



