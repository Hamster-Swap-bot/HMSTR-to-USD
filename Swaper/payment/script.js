document.getElementById("submit").addEventListener("click", function(event) {
	event.preventDefault();
	var name = document.getElementById("name").value;
	var address = document.getElementById("address").value;
	var picture = document.getElementById("picture").files[0];

	if (name && address && picture) {
		document.getElementById("confirmation").style.display = "block";
		document.getElementById("form").style.display = "none";
	} else {
		alert("Please fill in all the fields!");
	}
});