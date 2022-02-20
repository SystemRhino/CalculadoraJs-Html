## Calucladora Em JS Implementadado ao HTML

You can use the [editor on GitHub](https://github.com/SystemRhino/CalculadoraJs/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
<!doctype html><html><head></head> 
 <body> 
  <h1>Multi Resultados em Js</h1> 
  <div> 
   <script>
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
    </script>
  </div> 
 
</body></html>

```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/SystemRhino/CalculadoraJs/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
