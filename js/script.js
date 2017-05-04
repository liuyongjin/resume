var lineChartData = {
	//X������
	labels : ["周一","4","6","8","10","12","14","16","18","20","22","24"],
	datasets : [
		{	
			//ͳ�Ʊ�ı�����ɫ
			fillColor : "rgba(255,255,255,0)",
			//ͳ�Ʊ?����ɫ
			strokeColor : "rgba(0, 0,0, 1)",
			//�����ɫ
			pointColor : "rgba(155, 39, 39, 1);",
			//��߿����ɫ
			pointStrokeColor : "#fff",
			//��괥��ʱ�����ɫ
			pointHighlightFill : "#fff",
			//��괥��ʱ��߿����ɫ
			pointHighlightStroke : "rgba(220,220,220,1)",
			//Y������
			data : [1,2,3,4,5,5,6,7,8,8,9,9]
		},
		{
			fillColor : "rgba(255,255,255,0)",
			strokeColor : "rgba(92, 184, 92, 1)",
			pointColor : "rgba(23, 126, 23, 1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,1)",
			data : [2,2,1,4,2,4,5,7,8,8,4,3]
		}
	]

}

window.onload = function(){
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true
	});
}