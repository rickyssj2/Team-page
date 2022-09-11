$(document).ready(function(){
	$(".flip-card").mouseover(function(event){
		console.log($(event.currentTarget.children[0].children[0]));
		$(event.currentTarget.children[0].children[0]).addClass("rotate");
		$(event.currentTarget.children[0].children[1]).addClass('visible');
	});

	$(".flip-card").mouseout(function(event){
		$(event.currentTarget.children[0].children[0]).removeClass("rotate");
		$(event.currentTarget.children[0].children[1]).removeClass('visible');
	})
})