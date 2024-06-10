$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = `<li> ${novaTarefa} </li>`;

        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');
    })

    $('ul').on('click', 'li', function(e){
        $(e.target).addClass('feito')
    })

    $('#botao-apagar').click(function(){
        $('li').remove();
    })


})