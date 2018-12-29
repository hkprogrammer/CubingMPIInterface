//original personalized data
var data = user;
var interval = 0;

//index.html id
var tab1 = document.getElementById("tabone");
var tab2 = document.getElementById("tabtwo");
var tab3 = document.getElementById("tabthree");

//define the displyed numbers
var newuser = [[0,0,0,0],[0,0,0,0],[0,0,0,0]];

var keypass = [
[
0,0,0,0,
0,0,0,0,
0,0,0,0,
0,0,0,0
],[
0,0,0,0,
0,0,0,0,
0,0,0,0,
0,0,0,0
],[
0,0,0,0,
0,0,0,0,
0,0,0,0,
0,0,0,0
]
];

var userkeypass = [
[
0,0,0,0,
0,0,0,0,
0,0,0,0,
0,0,0,0
],[
0,0,0,0,
0,0,0,0,
0,0,0,0,
0,0,0,0
],[
0,0,0,0,
0,0,0,0,
0,0,0,0,
0,0,0,0
]
];

// var keypass0 = keypass[0];
// var keypass1 = keypass[1];
// var keypass2 = keypass[2];
var format = "";
var format1 = "";
var format2 = "";
for(var i = 0;i<keypass.length;i++){

	for(var i2 = 0;i2 < keypass[i].length;i2++){

		keypass[i][i2] = Rand(10);




	}


}



// var data_obJK = Object.keys(data);
var data0 = data[0];

var n = 0;
for(var i = 0;i<keypass[0].length;i++){
	n++;
	format += keypass[0][i];

	if(n == 4){
		format += "<br>";
		n=0;
	}



}
n=0;
for(var i = 0;i<keypass[1].length;i++){
	n++;
	format1 += keypass[1][i];

	if(n == 4){
		format1 += "<br>";
		n=0;
	}



}
n=0;
for(var i = 0;i<keypass[2].length;i++){
	n++;
	format2 += keypass[2][i];

	if(n == 4){
		format2 += "<br>";
		n=0;
	}



}


tab1.innerHTML = format;
tab2.innerHTML = format1;
tab3.innerHTML = format2;


var input;
function submit(){
	// for (var i = 0; i < Things.length; i++) {
	// 	Things[i]
	// }
	input = document.getElementById("input").value;
	var userinput = [[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	var inarray = input.split('');
	var n = 0;
	for(var i = 0; i<userinput.length;i++){
		for(var i2 = 0;i2 < 4;i2++){
			
			userinput[i][i2] = parseInt(inarray[n]);
			n++;
		}
	}
	//console.log(userinput,inarray);

	// for(var i = 0;i<keypass.length;i++){
		
	// 	for(var i2 = 0;i2<keypass[i].length;i2++){
			
	// 		if(inarray[] == keypass[i][i2]){
	// 			userkeypass[i][i2] = 1;
	// 		}
			
	// 	}
	// }
	var n = 0;
	for(var i = 0;i<keypass.length;i++){
		
		for(var i2 = 0;i2<keypass[i].length;i2++){
			
			if(userinput[i][n] == keypass[i][i2]){
				userkeypass[i][i2] = 1;
				n++;
			}
			
		}
	}
	
	for(var i = 0;i<user.length;i++){
		var n = 0;
		for(var i2 = 0; i2<user[i].length;i2++){
			if(user[i][i2] == 1){
				newuser[i][n] = keypass[i][i2];
				n++;
			}
		}
	}
	var finalkeypass = [[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	var finalkeypasstf = false;
	console.log(newuser);
	console.log(userinput);
	for(var i0 = 0; i0 < newuser.length; i0++){
		for(var i = 0; i<newuser[i0].length;i++){
			if(userinput[i0][i] == newuser[i0][i]){
				finalkeypass[i0][i] = 1;
				finalkeypasstf = true;
			}
			else if(userinput[i0][i] != newuser[i0][i]){
				finalkeypass[i0][i] = 0;
				finalkeypasstf = false;
			}
		}
	}
	

	console.log(finalkeypass);




	if(finalkeypasstf){
		alert("access granted");
	}
	else if(!finalkeypasstf){
		alert("Invalid Password");
	}
	// console.log(userkeypass);
	// console.log(user);

}






function Rand(max) {
    return Math.floor(Math.random() * Math.floor(max));
}





// alert("running");