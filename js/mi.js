window.onload=function(){
	$(".car").mouseover(function(){
		$(".car-box").stop().slideDown(200)
	}).mouseleave(function(){
		$(".car-box").stop().slideUp(200)
	});
	
	var mySwiper = new Swiper('.swiper-container',{
            loop: true,
            autoplay: 1000,
		    pagination: '.swiper-pagination',
            paginationClickable :true,
            autoplayDisableOnInteraction : false,
            effect : 'fade',
            speed:1000
       });
       
       $(".tab-ul>li").mouseover(function(){
       		$(".tab-list").stop().slideDown(200)
       })
       $("#tab").mouseleave(function(){
       		$(".tab-list").stop().slideUp(200)
       });
       
		
}
