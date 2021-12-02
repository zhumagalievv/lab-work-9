var showbox = document.getElementById('showbox');
var wrapper = document.getElementById('wrapper');
wrapper.style.display = 'none';
window.onload = function() {    
    setTimeout(function()
    {
        wrapper.style.display = 'block'
    }, 3000)
    setTimeout(function(){
        showbox.style.display = 'none'
    },3000)
}

    // import TypeIt from'typeit'
    // $('.jquery-anim').typeIt({
    //  whatToType: "Your Reflection",
    //  typeSpeed: 100
    // });