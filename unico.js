        // PAGINA PRINCIPAL


        function adicionarProduto(nome, preco,imagem,editora,pagina,idade,descriçao) {
            // Armazena os dados do produto na sessão do navegador
            sessionStorage.setItem('produto_nome', nome);
            sessionStorage.setItem('produto_preco', preco);
            sessionStorage.setItem('produto_imagem', imagem);
            sessionStorage.setItem('produto-marca', editora);
            sessionStorage.setItem('produto-infor', pagina);
            sessionStorage.setItem('produto-idade', idade);
            sessionStorage.setItem('descriçao', descriçao);
          
         

         
            // Redireciona para a página de detalhes do produto
            window.location.href = 'unico.html';
        }




        // Recupera os dados do produto da sessão
        const nome = sessionStorage.getItem('produto_nome');
        const preco = sessionStorage.getItem('produto_preco');
        const imagem = sessionStorage.getItem('produto_imagem');
        const editora = sessionStorage.getItem('produto-marca');
        const pagina = sessionStorage.getItem('produto-infor');
        const idade = sessionStorage.getItem('produto-idade');
        const descriçao = sessionStorage.getItem('descriçao');
      

       
        // Atualiza os elementos HTML com os dados do produto
        document.querySelector('.produto-detalhes .product-name').innerText = nome;
        document.querySelector('.produto-detalhes .product-price').innerText = `R$${preco}`;
        document.querySelector('.produto-detalhes .imagem-produto').src = imagem;
        document.querySelector('.produto-detalhes .produto-marca').innerText = editora;
        document.querySelector('.produto-detalhes .produto-infor').innerText = pagina; 
        document.querySelector('.produto-detalhes .produto-idade').innerText = idade; 
        document.querySelector('.produto-detalhes .descriçao').innerText = descriçao; 


    


///////////////////////////////////////////////////////////////////////////////////////////////////////




