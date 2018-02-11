// JavaScript Document
function getMapAddress(){
	var geocoder = new google.maps.Geocoder(); //Geocoder = 지명을 주면 지명에 대한 위치값 -> 맵 (메소드)
	var myaddress = $('#addSearch').val();
	
	geocoder.geocode({'address':myaddress}, function(results, status){
		if(status == google.maps.GeocoderStatus.OK){
			var latlng = results[0].geometry.location;
			$('#mapArea2').gmap('destroy'); // 기존 지도 삭제
    		$('#mapArea2').gmap({'center': latlng, 'zoom': 15}); // 새지도 생성(제이슨표기법)
    		$('#mapArea2').gmap('addMarker', {'position': latlng}).click(function() { // 마커찍기
        		$('#mapArea2').gmap('openInfoWindow', {'content': results[0].formatted_address + '위치'}, this);
    });
		}else{
			alert('실패:' + status);
			}
	});
}