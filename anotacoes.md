AULA 1:

USANDO O TERMINAL DO VS CODE:

O terminal do vscode é semelhante ao cmd ou power shell.
Isso quer dizer que os comandos do cmd e power shell, rodam também no terminal do vscode.

COMANDOS BÁSICOS:

NAVEGAR ATÉ UMA DETERMINADA PASTA: cd
VOLTAR A PASTA ANTERIOR: acrescenta-se dois pontos: cd..
TAMBÉM É POSSÍVEL PASSAR UM CAMINHO COMPLETO: cd pasta1/arquivos/imagens

CAMINHO RELATIVO E CAMINHO ABSOLUTO:

--------------------------------------------------------------------------------
1- CAMINHO RELATIVO:

É o caminho que depende de outras pastas para se localizar.

Imagine o seguinte diretório:

pasta raiz: main

dentro da pasta raiz tenho as seguintes pastas:

imagens - minhasimagens(pasta dentro de imagens)
videos - meusvideos(pasta dentro de videos)
audios - meusaudios(pasta dentro de audios)

imagine que vc queira entrar na pasta meusadios dentro da pasta imagens, então o comando seria:

" cd imagens/minhasimagens "

A idéia do caminho relativo é que você possa ir e voltar a partir de qualquer ponto, desde que passe o caminho correto.

--------------------------------------------------------------------------------

2- CAMINHO ABSOLUTO:

O caminho absoluto, segue as pastas do sistema desde a raiz. Exemplo:

C:/Usuarios/Desktop/aulas_yes/main

A principal diferença é a referência absoluta, ou seja, o caminho precisa existir em todos os sistemas que estiver rodando a aplicação.

--------------------------------------------------------------------------------

CRIANDO PASTAS:

PARA CRIAR UMA NOVA PASTA: " mkdir "

--------------------------------------------------------------------------------