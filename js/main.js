$(document).ready(function () {

    $('#telefone').mask('(00) 00000-0000'), {
        placeholder: '(00) 00000-0000'
    }
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00.000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereço: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'insira seu nome',
            email: 'insira seu e-mail',
            telefone: 'insira seu telefone',
            cpf: 'insira seu cpf',
            endereço: 'insira seu endereço',
            cep: 'insira seu cep'
        }
    })
})