// JavaScript Document

function getMyRoute(){
	var start = $('#strSearch').val();
	var end = $('#endSearch').val();
	var mode = 'TRANSIT'
	var request = {
		origin:start,
		destination:end,
		travelMode: eval('google.maps.DirectionsTravelMode.' + mode)
	};
	//경로 생성 및 지도표시
	$('#mapArea3').gmap('displayDirections', request, function(result, status){
		if(status == 'OK'){
			alert('성공');
		}else{
			alert('실패:' + status);
		}
	});		
}