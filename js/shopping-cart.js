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
// 商品
// 計算小計和總計的函數
function calculateTotal() {
  let productItems = document.getElementsByClassName('product_items');
  let subtotal = 0;

  for (let i = 0; i < productItems.length; i++) {
    let quantity = parseInt(productItems[i].querySelector('.product_quantity span').textContent);
    let price = parseInt(productItems[i].querySelector('.product_pirce span').textContent.replace('NTD ', ''));
    let amount = quantity * price;
    productItems[i].querySelector('.product_amount span').textContent = 'NTD ' + amount;
    subtotal += amount;
  }

  let shipping = 80; // 將此值更改為所需的運費金額
  let total = subtotal + shipping;

  document.querySelector('.order_info div:nth-child(1) span:nth-child(2)').textContent = 'NTD ' + subtotal;
  document.querySelector('.order_info div:nth-child(2) span:nth-child(2)').textContent = 'NTD ' + shipping;
  document.querySelector('.order_info div:nth-child(3) span:nth-child(2)').textContent = 'NTD ' + total;
}

// 處理數量變更的函數
function handleQuantityChange(element, increment) {
  let quantitySpan = element.parentElement.querySelector('span');
  let quantity = parseInt(quantitySpan.textContent);
  
  if (increment) {
    quantity++;
  } else {
    if (quantity > 1) {
      quantity--;
    }
  }
  
  quantitySpan.textContent = quantity;
  calculateTotal();
}

// 處理產品刪除的函數
function handleProductDeletion(element) {
  let productItem = element.closest('.product_items');
  productItem.remove();
  calculateTotal();
}

// 新增事件監聽器至數量按鈕和刪除按鈕
let quantityButtons = document.querySelectorAll('.quantity_button button');
let deleteButtons = document.querySelectorAll('.product_cancel button');

for (let i = 0; i < quantityButtons.length; i++) {
  quantityButtons[i].addEventListener('click', function (event) {
    event.preventDefault();
    let increment = this.querySelector('i').classList.contains('fa-plus');
    handleQuantityChange(this, increment);
  });
}

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener('click', function (event) {
    event.preventDefault();
    handleProductDeletion(this);
  });
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