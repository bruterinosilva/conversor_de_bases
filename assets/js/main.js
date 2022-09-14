    var decimal = 0
    function converter_binario() {
        decimal = Number (input_numero.value); 
        var binario = decimal.toString(2)
        resposta.innerHTML = `O resultado da conversão de ${decimal} Decimal para Binário é ${binario}`;
    }

    function converter_octal() {
        decimal = Number (input_numero.value); 
        var octal = decimal.toString(8)
        resposta.innerHTML = `O resultado da conversão de ${decimal} Decimal para Octal é ${octal}`;
    }

    function converter_hexadecimal() {
        decimal = Number (input_numero.value); 
        var hexadecimal = decimal.toString(16)
        resposta.innerHTML = `O resultado da conversão de ${decimal} Decimal para Hexadecimal é ${hexadecimal}`;
    }
    