$(document).ready(function(){
  // sidebar add class
  $(".side_menu").click(function() {
    $(".leftSideBar").toggleClass("active");
  })
  $(".box_menu").click(function(){
    $(".app_grid").toggleClass("active");
  })
  $(".services_wrap_head").click(function(){
    $(".services_wrap_body").toggleClass("expand");
  })
  $(".notification_bell").click(function(){
    $(".notification_wrap").toggleClass("active");
  })
  $(".open_pop").click(function(){
    $(this).children(".pop_over").toggleClass("active");
  })
  $(".notification_bell a").click(function(e){
    e.preventDefault();
  });
  $(".more_opt, .org_select").click(function(){
    $(this).children(".org_dropdown").toggleClass("active");
  })
  $(".advance_search").click(function(){
    $(".advance_search_wrap").toggleClass("active");
  })
  $(".advance_search_close").click(function(){
    $(".advance_search_wrap").removeClass("active");
  })
})

