$( document ).ready(function() {
	//Waypoints
	$('.under-inner').each(function(){
		var $this = $(this);
		$this.waypoint(function(direction) {
			if (direction === 'down') {	
			  $this.children(".fixed").addClass('locked');
			}else{
			  $this.children(".fixed").removeClass('locked');
			}
		}, { offset: '60%' });
	});
	//End Waypoints
});

