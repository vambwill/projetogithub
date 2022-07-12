function calculadora() { 
    const operação = prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira(%)\n 6 - Potenciação (**)');

    let n1 = Number(prompt('Insira o primeiro valor'));
    let n2 = Number(prompt('Insira o segundo valor'));
    let resultado;

    function Soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperação();
    }

    function Subtração() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperação();
    }

    function Multiplicação() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperação();
    }

    function DivisãoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperação();
    }

    function DivisãoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperação();
    }

    function Potenciação() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2}ª é igual = ${resultado}`)
        novaOperação();
    }

    function novaOperação() {
        let opcao = prompt('Deseja fazer outra operação\n 1 - Sim\n 2 - Não');
        
        if (opcao == 1) {
            calculadora();
        } else if (opcao == 2) {
            alert('Até mais!')
        } else {
            alert('Digite uma opção válida.')
            novaOperação();
        }
    }

    if (operação == 1) {
        Soma();
    } else if (operação == 2) {
        Subtração();
    } else if (operação == 3) {
        Multiplicação();
    } else if (operação == 4) {
        DivisãoReal();
    } else if (operação == 5) {
        DivisãoInteira();
    } else if (operação == 6) {
        Potenciação();
    }
}

calculadora();
