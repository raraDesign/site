
// 스팟 클릭시 설명창 생성
$(function () {
    $(".left").click(function () {
        $(".left").toggleClass("on");
    });
});
//tab 스크립트
$(document).ready(function () {

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

});

//json 데이터 불러오기
$(document).ready(function() {
    // $(".map>div").click(function() {
    $.ajax({
        url: "../js/place.json", // 어디로 갈거니? // 갈 때 데이터
        type: "get", // 타입은 뭘 쓸거니?
        datatype: "json",
        success: function(data) { // 갔다온 다음 결과값
			$(".map>div").each(function(index) {

				$(this).click(function() {
					$(".left").addClass("on");
					let i = $(this).index() - 2; //앞에 index번호 없앰 svg등 추가로 생겨서
					console.log(i);
					console.log(data[i].name);
					$("#name").text(data[i].name); //배열맞춰서 불러오기
					$("#text").text(data[i].text);
					$("#img").attr("src", data[i].img);
				})
			})
        },
        error: function() {
            alert('error');
        }
    });
});

//코스 애니메이션
$(function(){
    $('#btN1').click(function(){ 
        $('#n1-1').css('animation-name','Cn1');
        $('#n1-2').css('animation-name','Cn1');
        $('#n1-3').css('animation-name','Cn1');
        $('#n1-4').css('animation-name','Cn1-1');
        $('#n1-5').css('animation-name','Cn1');
    });
  });