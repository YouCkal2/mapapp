// JavaScript Document
// 현재위치 좌표 얻어오기
function getMyLocation() {
    var posOption = {maximumAge: 3000, timeout: 50000, enableHighAccuracy: true };
    navigator.geolocation.getCurrentPosition(onSuccess, onError, posOption);
}
//getCurrentPosition() 성공 콜백 함수
function onSuccess(position) {
    $('#box1').html("위도 : " 
        + position.coords.latitude + "<br/>"
        + "경도 : " + position.coords.longitude);
    loadGoogleMap(position.coords.latitude, position.coords.longitude);
}

function onError(posError) {
    alert('Error Code:' + posError.code + ' / Error Message:' + posError.message);// 에러창과 메시지(경고창)띄움
}

function loadGoogleMap(lat, lng) {
	// 위치 좌표 객체 생성
    var latlng = new google.maps.LatLng(lat, lng);
    $('#mapArea1').gmap('destroy'); // 기존 지도 삭제
    $('#mapArea1').gmap({'center': latlng, 'zoom': 15}); // 새지도 생성(제이슨표기법)
    $('#mapArea1').gmap('addMarker', {'position': latlng}).click(function() { // 마커찍기
        $('#mapArea1').gmap('openInfoWindow', {'content': '현재 위치'}, this); // 풍선도움말(정보창열기)
    });
}


