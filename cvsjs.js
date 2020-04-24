function readCsv(data) {
    var target00 = '#csv-body00';
    var target01 = '#csv-body01';
    var target02 = '#csv-body02';
    var target03 = '#csv-body03';
    var csv = $.csv.toArrays(data);
    var insert00 = '';
    var insert01 = '';
    var insert02 = '';
    var insert03 = '';
    for(var i = 0; i<3; i++) {
	if(csv[i][9] == 1){
	    insert00 +="<tr><td >マリー</td><td><B>" + csv[i][4]*20 + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][6]+"  Gold</td></tr>"
	}else if(csv[i][9] == 2){
	    insert00 +="<tr><td>タルラーク</td><td><B>" + csv[i][4]*20 + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][6]+"  Gold</td></tr>"
	}else if(csv[i][9] == 3){
	    insert00 +="<tr><td>ルエリ</td><td ><B>" + csv[i][4]*20 + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][6]+"  Gold</td></tr>"
	}
    }
    for(var i = 0; i<3; i++){
	if(csv[i][9] == 1){
	    insert01 += "<tr><td>"+csv[i][8]+"</td><td><B>" + csv[i][4]*20 + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][6]+"  Gold</td></tr>"
	}
	if(csv[i][9] == 2){
	    insert02 += "<tr><td>"+csv[i][8]+"</td><td><B>" + csv[i][4]*20 + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][6]+"  Gold</td></tr>"
	}
	if(csv[i][9] == 3){
	    insert03 += "<tr><td>"+csv[i][8]+"</td><td><B>" + csv[i][4]*20 + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][6]+"  Gold</td></tr>"
	}
    }
    $(target00).append(insert00);
    $(target01).append(insert01);
    $(target02).append(insert02);
    $(target03).append(insert03);
}
var csvfile = 'sample.csv';
$(function(){
    $.get(csvfile, readCsv, 'text');
});

