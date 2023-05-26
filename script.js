$("#lista").addClass("fundoAzul fonteBranca");//Isso aqui é Jquery. Sempre quando você vir $ na frente, é porque está usando Jquery. Aqui é sem , . Seleção por id

// $(".item").css("font-style","italic");//Vai colocar em itálico. Seleção por classe

// $("li").attr("title","pais")//Aqui estamos colocando atributo, atributo é href, src da imagem, e essas coisas.

// $("li").hide();//aqui vai esconder os itens da lista. O chile acabou desaparecendo, porque tava com fonte branca, só por causa disso.

// $("li").show()//Aqui faz aparecer o que você escondeu

// $("button").click(function(){
//   $("#lista").animate({height:"300px"})
// })

// $("button").click(function(){
//   $("#lista").animate({opacity:"0"}3000)//aqui esse 3000 é em relação aos segundos. 
// $("#lista2").css("display","none")//Aqui ele faz sumir a lista 2
//ou
// $("#lista2").hide()//Aqui ele faz sumir a lista 2

// $("button").click(function(){
//   $("#lista").hide(3000)//Esse esconde o outro
//   $("#lista2").show(3000);//Esse faz com que apareça o outro.
// })





// $("#lista2").css("display", "none");

// $("button").click(function(){
//   if($("button").hasClass("clicado")){
//      $("#lista").hide(3000);
//   $("#lista2").show(3000);
//      $("button").removeClass("clicado");
//   }
//   else{
//     $("#lista2").hide(3000);
//   $("#lista").show(3000);
//   $("button").addClass("clicado");
//   }
 
// }); // Dá para fazer dessa forma para alternar um com o outro.

//ou usando toggle

// $("#lista2").css("display", "none");

// $("button").click(function(){
  
//      $("button").toggleClass("clicado");//toggle é para alternar. Ele adiciona e remove.Se ele tiver a classe clicado, ele remove. Caso ele não tenha, adiciona
  
//   if($("button").hasClass("clicado")){//Aqui está dizendo "se ele tiver fará isso"
//      $("#lista").hide(3000);
//     $("#lista2").show(3000);
//   }
//   else{
//     $("#lista2").hide(3000);
//     $("#lista").show(3000);
//   }
 
// });

// $(document).ready(function(){
//   $("#tel").mask('(00) 00000-0000', {placeholder: "(__) _____-____"})//Essa máscara ajuda muito a evitar erros pelo usuário.
  
// })




// $(document).ready(function(){
//   // $("#tel").mask('(00) 00000-0000', {placeholder: "(__) _____-____"}, {selectOnFocus: true})
//   // $("#tel").mask('00/00/0000')
// $.ajax({type: "GET",   
//          url: "https://pokeapi.co/api/v2/pokemon/51",   
//          async: false,
//         }).done(function(element) {

//   $( "#lista" ).append( `<li>${element.name}</li>` );
//   $( "#lista" ).append( `<li>${element.name}<img src='${element.sprites.front_default}'></li>` );
  
// });
  
// })

$("#voltar").click(function() {
  $("#container").show();
  $("#exemplo").hide();
});

$("#receber").click(function() {
  $("#progressBar").show();
  $("#container").hide();
  $("#exemplo").show();
  var numero = Math.ceil(Math.random() * 1000);

  $.ajax({
    type: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/" + numero,
    async: false,
  }).done(function(element) {
    $("#progressBar").hide();
    $("#pokemonRecebido").html(`<h2>${element.name}</h2>
    <img src=${element.sprites.front_default}>
  `)
  })

})

$(document).ready(function() {


  // $("#tel").mask('(00) 00000-0000', {placeholder: "(__) _____-____"}, {selectOnFocus: true})
  // $("#tel").mask('00/00/0000')
  // $.ajax({type: "GET",   
  //          url: "https://pokeapi.co/api/v2/pokemon/51",   
  //          async: false,
  //         }).done(function(element) {


})