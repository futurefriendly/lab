$(function(){

//Chart1
var dataArr = [90,30,50,70,90];// 数据数组，百分比单位，有多少数据写多少个
var dataClr = ['#31401B','#9AA63F','#D9BB62','#F2C6A0','#F27D72'];// 书桌台灯

if(dataClr.length - dataArr.length < 0){
	for(j=dataClr.length;j<dataArr.length;j++){
		dataClr[j] = '#fff'; // 默认颜色
	}
}

for(i=0;i<dataArr.length;i++){
	$('.center').wrap('<div class="c"></div>');
	$('.c:eq('+ i +')').addClass('c' + i);
	if(dataArr[i]>=50){
		$('body').append('<style>.c'+i+':after{-webkit-animation-name:mask'+i+';animation-name:mask'+i+';}@-webkit-keyframes mask'+i+'{0%{-webkit-transform:rotate(0deg)}100%{border-color:'+dataClr[i]+'; -webkit-transform:rotate(180deg)}}@keyframes mask'+i+'{0%{transform:rotate(0deg)}100%{border-color:'+dataClr[i]+';transform:rotate(180deg)}}</style>');
	}
	$('body').append('<style>.c'+i+'{z-index:'+i+';}.c'+i+':before{border-color:'+dataClr[i]+';-webkit-animation-name:round'+i+';animation-name:round'+i+';-webkit-animation-duration:'+dataArr[i]/100*1+'s;animation-duration:'+dataArr[i]/100*1+'s;}@-webkit-keyframes round'+i+'{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate('+360/100*dataArr[i]+'deg)}}@keyframes round'+i+'{0%{transform:rotate(0deg)}100%{transform:rotate('+360/100*dataArr[i]+'deg)}}</style>');
}

$('.chart1').css('visibility','visible');

});