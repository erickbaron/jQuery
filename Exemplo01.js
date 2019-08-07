/*Http status code tabela de erros*/

$(function () {
    $.nome = '';

    /*$('#cep').on('blur', function(){ //Quando ocorrer no #cep o evento on blur, ocoree a funcao buscarCep 
        buscarCEP()
    })*/

    $('#cep').on("keypress", function(evt){ //através do evt identifica o cód da tecla pressionada
        if(evt.keyCode == 13){
            buscarCEP();
        }
    }) 
    

    function buscarCEP() {
        // document.getElementById("cep").value
        $cep = $('#cep').val().replace('-','').replace('.', '');
        if($cep.length != 8){
            alert('Tamanho do CEP inválido')
            $("#cep").focus();
            return
        }

        $.ajax({
            url: 'http://viacep.com.br/ws/' + $cep + '/json/',
            method: 'get',
            success: function (data) {
                $localidade = data.localidade;
                $logradouro = data.logradouro;
                $unidadeFederativa = data.uf;

                $("#localidade").val($localidade); //# serve para buscar o id do html
                $("#logradouro").val($logradouro);
                $("#unidade-federativa").val($unidadeFederativa);
                $("#numero").focus();
            },
            error: function (err) {
                alert('CEP inválido');
                $("#cep").focus();
             }
        })
    }
});