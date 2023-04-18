// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


//event on Jquery
$(".btn-correo").click(function(){
    alert("Correo enviado con exito!")
})
$(".btn-fav").click(function(){
    alert("Agregado a favoritos!")
})

//Selector de etiqueta
$(document).dblclick(function(){
    $("#list-prep-ingre .card-title").css("color","red")
})
// toggle img & card text
$("#rec-rel .card-title").click(function(){
    $("#rec-rel img ").toggle("slow");
    $("#rec-rel .card-text ").toggle("slow");
})