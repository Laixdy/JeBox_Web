var ver = navigator.appVersion;
var os = ver.substr(21,10);

if (os == "Win64; x64") {
	document.getElementById("bt_ds").innerHTML = "Descargar Para Windows 64-bit";
}