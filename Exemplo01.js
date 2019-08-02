/*Http status code tabela de erros*/

$(function () {
    $.nome = '';
    $.ajax({
        url: 'http://viacep.com.br/ws/89062270/json/',
        method: 'get',
        success: function (data) {
            $localidade = data.localidade;
            $logradouro = data.logradouro;

            $("#localidade").val($localidade); //# serve para o id do html
            $("#logradouro").val($logradouro);
         },
        error: function (err) { }
    })
});