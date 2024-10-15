var typed= new Typed(".text" , 
{   strings :["VFX designer .","Editor .","Photographer .","Videographer .","Cinemotographer ."],
	typeSpeed:100,
	backSpeed:50,
	backDelay:1000,
	loop:true
});

document.getElementById('pdfImage').addEventListener('click',function() {
	window.open('sumu.pdf','_blank');
	// body...
});


function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}
