//scroll sections
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');



window.onscroll= () =>{

    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset= sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top<offset +height ){
            // active navbar links 
            navLinks.forEach(Links=>{
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            })

        }
    });
    //sticky header
    let header= document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}



//  Button download
document.getElementById("downloadButton").addEventListener("click", function() {
    var cvUrl = "Fiza's Resume (1).pdf";
    
    fetch(cvUrl).then(function(response) {
        return response.blob();
    }).then(function(blob) {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = "Fiza's Resume (1).pdf"; 
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    });
});