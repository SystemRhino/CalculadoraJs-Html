     // Declaração das variáveis
        help = 0;
        soma = 0;
        media = 0;
        vetor = [];
        do{
            num1 = 0;
            num1 = parseInt(prompt("Digite um numero e digite 0 caso queira parar"));
            if(num1 != 0){
                vetor.push(num1);
            }
        }while(num1 != 0);

        document.write("Sequência original: ");

        for (let i = 0; i < vetor.length; i++) {
            document.write(vetor[i] + ", ");
        }

        document.write("<br/> Ordem decrescente: ");

        for (let i = vetor.length - 1; i >= 0; i--) {
            document.write(vetor[i] + ", ");
        }

        for (let i = 0; i < vetor.length; i++) {
            soma = soma + vetor[i];
        }
        
        media = soma / vetor.length;

        document.write("<br/> Soma: " + soma + "<br/>");
        document.write("Média Aritmética: " + media + "<br/>");

        for (let i = 0; i < vetor.length; i++) {
            for (let x1 = 0; x1 < vetor.length - 1; x1++) {
                if(vetor[x1] > vetor[x1 + 1]){
                    help = vetor[x1];
                    vetor[x1] = vetor[x1 + 1];
                    vetor[x1 + 1] = help;
                }
            }
        }
        document.write("Ordem crescente: ");
        for (let i = 0; i < vetor.length; i++) {
            document.write(vetor[i] + ", ");
        }