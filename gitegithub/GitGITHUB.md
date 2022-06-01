

#                   O que é Git e GITHUB?

![Design sem nome](C:\Users\640G2\Downloads\Design sem nome.png)

## GIT:

Apenas poder acessar o código dos outros colaboradores não é suficiente. Precisamos manter o **histórico** dos nossos arquivos. Mais: das nossas modificações, pois muitas vezes mudamos arquivos em grupo, num movimento único (um **commit**). Dessa forma, podemos voltar atrás e recuperar o estado do sistema como ele era ontem, ou no ano passado, e comparar as mudanças, para encontrar bug, para estudar otimizações.

Todos nossos arquivos, assim como seus históricos, ficam em um **repositório** e existiam vários sistemas que gerenciavam repositórios assim, como CVS e SVN. O Git é uma alternativa que tem um funcionamento mais interessante ainda: ele é distribuído e todo mundo tem uma cópia inteira do repositório, não apenas o "servidor principal". Isso trás grandes vantagens que você não precisa aprender nesse exato momento.

> **O Git é um sistema de controle de versão distribuído e amplamente adotado**. O Git nasceu e foi tomando espaço dos outros sistemas de controle. 
>
> > **Seu criador principal é o mesmo que o do Linux:** Linus Torvalds, e ganhou o coração das pessoas que trabalham com open source.



### Um pouco sobre o Criador do GIT

###  ![img](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/LinuxCon_Europe_Linus_Torvalds_03.jpg/150px-LinuxCon_Europe_Linus_Torvalds_03.jpg)

**Linus Benedict Torvalds**  é um engenheiro de software, nascido na finlandês e naturalizado americano em 2010, ele é o criador, e por muito tempo o desenvolvedor mais importante do núcleo Linux, sendo utilizado em importantes sistemas [Linux](https://pt.wikipedia.org/wiki/Linux), [Android](https://pt.wikipedia.org/wiki/Android) e [Chrome OS](https://pt.wikipedia.org/wiki/Chrome_OS). É também o criador do [Git](https://pt.wikipedia.org/wiki/Git), [sistema de controle de versão](https://pt.wikipedia.org/wiki/Sistema_de_controle_de_versão) amplamente utilizado, e o [aplicativo](https://pt.wikipedia.org/wiki/Programa_de_computador) para planejamento e registro de [mergulho](https://pt.wikipedia.org/wiki/Mergulho), [Subsurface](https://pt.wikipedia.org/w/index.php?title=Subsurface&action=edit&redlink=1).[[3\]](https://pt.wikipedia.org/wiki/Linus_Torvalds#cite_note-3)

É filho dos jornalistas Anna e Nils Torvalds, e neto do estatístico Leo Törnqvist e do poeta Ole Torvalds. Seus pais eram radicais do *campus* da Universidade de Helsínquia, na década de 1960. Sua família pertence à minoria de língua sueca (5,5 % da população da Finlândia). Seu interesse por computadores começou com um Commodore VIC-20. Nessa época, ele fica conhecido por ter escrito um clone do Pac-Man chamado Co

Junto ao médico [Shinya Yamanaka](https://pt.wikipedia.org/wiki/Shinya_Yamanaka), foi honrado pela Academia de Tecnologia da [Finlândia](https://pt.wikipedia.org/wiki/Finlândia), em 2012, com o [Prêmio de Tecnologia do Milênio](https://pt.wikipedia.org/wiki/Prêmio_de_Tecnologia_do_Milênio) “em reconhecimento à sua criação de um novo [núcleo de sistema operacional](https://pt.wikipedia.org/wiki/Núcleo_de_sistema_operacional) para computadores, que levou ao extensivamente utilizado, núcleo Linux”.[[4\]](https://pt.wikipedia.org/wiki/Linus_Torvalds#cite_note-4) Torvalds também notoriamente recebeu os prêmios: [Pioneiro da Computação](https://pt.wikipedia.org/wiki/Prêmio_Pioneiro_da_Computação) da [IEEE Computer Society](https://pt.wikipedia.org/wiki/IEEE_Computer_Society),[[5\]](https://pt.wikipedia.org/wiki/Linus_Torvalds#cite_note-5) e o IEEE Masaru Ibuka Consumer Electronics Award, patrocinado pela [Sony](https://pt.wikipedia.org/wiki/Sony).

## GITHUB:

O [Github](https://github.com/) tem sim muita relação com o Git. **GitHub é uma plataforma para gerenciar seu código e criar um ambiente de colaboração entre devs, utilizando o Git como sistema de controle**. Ele vai facilitar o uso do Git, escondendo alguns detalhes mais complicados de setup. É lá que você provavelmente vai ter seu repositório e usar no dia a dia.

Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou [Open Source](https://pt.wikipedia.org/wiki/Open-source) de qualquer lugar do mundo. GitHub é amplamente utilizado por programadores para divulgação de seus trabalhos ou para que outros programadores contribuam com o projeto, além de promover fácil comunicação através de recursos que relatam problemas ou mesclam [repositórios](https://pt.wikipedia.org/wiki/Repositório) remotos.



### Se Liga:

Pra nós iniciantes entendermos mais fácil: O GIT é a terra e o o GITHUB o CÉU. Se vc fizer tudo certinho na terra, você entra no CÉU podendo ajudar, ser ajudado e até ser beneficiado. :moneybag:

### Pra começar:

Vc precisa baixar o [GIT](https://gitforwindows.org/) e logo depois já baixe também o [GITHUB](https://desktop.github.com/) veja alguns vídeos explicativo no youtube (existem vários)  e se você estiver fazendo algum  curso aqui na dio.me, certamente você tera alguma aula sobre o assunto. vou logo te adiantar alguns comandos:

## Setar usuário

git config --global user.name "Fulano de Tall"

##### Setar email

git config --global user.email fulanodetall@gmail.com

##### Setar editor

git config --global core.editor vim

##### Setar ferramenta de merge

git config --global merge.tool vimdiff

##### Setar arquivos a serem ignorados

git config --global core.excludesfile ~/.gitignore

##### Listar configurações

git config --list

### Ignorar Arquivos

Os nomes de arquivos/diretórios ou extensões de arquivos listados no arquivo **.gitignore** não serão adicionados em um repositório. Existem dois arquivos .gitignore, são eles:

- Geral: Normalmente armazenado no diretório do usuário do Sistema Operacional. O arquivo que possui a lista dos arquivos/diretórios a serem ignorados por **todos os repositórios** deverá ser declarado conforme citado acima. O arquivo não precisa ter o nome de **.gitignore**.
- Por repositório: Deve ser armazenado no diretório do repositório e deve conter a lista dos arquivos/diretórios que devem ser ignorados apenas para o repositório específico.

## Repositório Local

### Criar novo repositório

git init

### Verificar estado dos arquivos/diretórios

git status

### Adicionar arquivo/diretório (staged area)

##### Adicionar um arquivo em específico

git add meu_arquivo.txt

##### Adicionar um diretório em específico

git add meu_diretorio

##### Adicionar todos os arquivos/diretórios

git add .	

##### Adicionar um arquivo que esta listado no .gitignore (geral ou do repositório)

git add -f arquivo_no_gitignore.txt

### Comitar arquivo/diretório

##### Comitar um arquivo

git commit meu_arquivo.txt

##### Comitar vários arquivos

git commit meu_arquivo.txt meu_outro_arquivo.txt

##### Comitar informando mensagem

git commit meuarquivo.txt -m "minha mensagem de commit"

### Remover arquivo/diretório

##### Remover arquivo

git rm meu_arquivo.txt

##### Remover diretório

git rm -r diretorio

> **Puts! Vai devagar gente, que conforme você for futucando, futucando e futucando isso tudo vai ficar no sangue e entra no automático.**

## Vamos dar uma Olhada na cara do GITHUB?

Essa é a entrada. Depois de alguns futucadas você vai se familiariazando. logo de cara você consegue ver suas criações, se tiver alguma, a esquerda, e na direita sua foto pequena e a seta pra abrir vários outros caminhos, do lado da sua foto tem um + que te dá outras opções, tal como: novo repositório, importar e etc.

![image-20220531222643621](C:\Users\640G2\AppData\Roaming\Typora\typora-user-images\image-20220531222643621.png)



**Essa já é a janela de postar seu repositório.**

![image-20220531224056249](C:\Users\640G2\AppData\Roaming\Typora\typora-user-images\image-20220531224056249.png)



O Segredo aqui é ser curioso, futucar, não ter medo de errar e de perguntar, pesquisar é preciso.

### Fontes:

Obs: Alguma fontes postadas aqui são pra facilitar o entendimento. Você pode e deve consultar a pág oficial para buscar mais conteúdo.

[GIT docs](https://git-scm.com/doc)

[GITHUB docs](https://docs.github.com/pt)

[GITHUP wikipédia](https://pt.wikipedia.org/wiki/GitHub)

[Linus Benedict Torvalds](https://pt.wikipedia.org/wiki/Linus_Torvalds)

[Principais comandos GIT](https://www.codigofonte.com.br/artigos/top-25-comandos-do-git)

[Guia GITHUB](https://jera.com.br/blog/6620/desenvolvimento/guia-do-dev-iniciante-introducao-ao-git)











