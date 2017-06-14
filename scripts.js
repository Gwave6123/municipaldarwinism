
function loadcheck(){
	if (document.cookie.indexOf("username=") >= 0){
		window.alert("Found Cookies");
		
		return 1;

	}
	else {
		window.alert("No Cookies");
		return 0;
	}
}

function newgame(){
	var expire = new Date;
	expire.setDate(expire.getDate()+14);
	document.cookie = "username=municipaldarwinism; expires=" + expire + "; path=/";

}
function main(){
	if (loadcheck() == 0){
		newgame();
		
	}
	else {
		
	}

	
}
