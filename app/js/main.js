$(document).ready(function(){
    $('.header__right-slider').slick({
      arrows:false,
      dots: true,
      autoplay: true,
    });
    $( function() {
      $( "#tabs" ).tabs();
    } );
  });

  const tabsBtn = document.querySelectorAll('.tabs__item');
  const tabsItem = document.querySelectorAll('.tabs__block');


  tabsBtn.forEach(onTabClick);
  
  function onTabClick(item) {
    item.addEventListener('click', function(){
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (! currentBtn.classList.contains('active') ){
        tabsBtn.forEach(function(item){
          item.classList.remove('active')
        });
  
        tabsItem.forEach(function(item){
          item.classList.remove('active')
        });
  
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
      }
     
    });
  }

  document.querySelector('.tabs__item').click();