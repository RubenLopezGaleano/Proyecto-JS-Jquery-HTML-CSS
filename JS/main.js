$(document).ready(function(){
    //Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
    });

     //post
    var post =[
        {
            title:'prueba de titulo 1',
            date:"Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del "  + moment().format("YYYY"),
            content:"Lorem Ipsum es simplemente un texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la mezcló para hacer un libro de muestras. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de publicación de escritorio como Aldus PageMaker, incluidas las versiones de Lorem Ipsum."
        },
        {
            title:"prueba de titulo 2",
            date:"Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del "  + moment().format("YYYY"),
            content:"Lorem Ipsum es simplemente un texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la mezcló para hacer un libro de muestras. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de publicación de escritorio como Aldus PageMaker, incluidas las versiones de Lorem Ipsum."
        },
        {
            title:"prueba de titulo 3",
            date:"Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del "  + moment().format("YYYY"),
            content:"Lorem Ipsum es simplemente un texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la mezcló para hacer un libro de muestras. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de publicación de escritorio como Aldus PageMaker, incluidas las versiones de Lorem Ipsum."
        },
        {
            title:"prueba de titulo 4",
            date:"Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del "  + moment().format("YYYY"),
            content:"Lorem Ipsum es simplemente un texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la mezcló para hacer un libro de muestras. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de publicación de escritorio como Aldus PageMaker, incluidas las versiones de Lorem Ipsum."
        },
        {
            title:"prueba de titulo 5",
            date:"Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del "  + moment().format("YYYY"),
            content:"Lorem Ipsum es simplemente un texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la mezcló para hacer un libro de muestras. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de publicación de escritorio como Aldus PageMaker, incluidas las versiones de Lorem Ipsum."
        },
        {
            title:"prueba de titulo 6",
            date:"Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del "  + moment().format("YYYY"),
            content:"Lorem Ipsum es simplemente un texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la mezcló para hacer un libro de muestras. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de publicación de escritorio como Aldus PageMaker, incluidas las versiones de Lorem Ipsum."
        },
  
    ];

    post.forEach((item,index) => {
        var post=`
        <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer mas</a>
                 </article>
        `;
        
        $("#posts").append(post);
                
    });

    //selector de tema
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css")
    })
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css")
    })
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css")
    });

    //scroll hacia arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    })
    //login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
        
    });    
    var form_name = localStorage.getItem("form_name")

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $(".about p");

        about_parrafo.html("<br><strong>Bienvendido, "+form_name+"<strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");

        $("#login").hide();
        $("#logout").click(function(){
            localStorage.clear();
            location.reload(); 
        });

    }
    //Validacion de formulario mediante plugin
    if (window.location.href.indexOf('contact')> -1){
        $.validar ({
            lang:'es' 
          });
    }
});

 