function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function loadcheck(){
	var data = getCookie("municipaldarwinism");
	if (data != ""){
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
	document.cookie = "municipaldarwinism=0; expires=" + expire + "; path=/";

}
function main(){
	if (loadcheck() == 0){
		newgame();
		
	}
	else {
		
	}

	
}
