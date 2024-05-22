# language: pt
Funcionalidade: Realizar login

Contexto: Acessou a página de login
    Dado que foi acessada a tela de login

Cenário: Inputs devem estar habilitados e instruções visíveis
    Quando visualizar o formulário de login
    Então as instruções estão visíveis e inputs habilitados

@createUser @deleteUser
Cenário: Deve ser possível realizar login
    Quando informar email válido
    E informar senha válida
    E selecionar botão login
    Então o login é realizado

@createUser @deleteUser
    Cenário: Erro ao tentar realizar login com senha incorreta
    Quando informar email válido
    E informar senha inválida
    E selecionar botão login
    Então o login não é realizado

@createUser @deleteUser
Cenário: Erro ao tentar realizar login com email incorreto
    Quando informar email inválido
    E informar senha válida
    E selecionar botão login
    Então o login não é realizado

Cenário: Erro ao tentar realizar login sem informar email
    Quando informar senha válida
    E selecionar botão login
    Então retorna mensagem informando que é necessário informar email

Cenário: Erro ao tentar realizar login sem informar senha
    Quando informar email válido
    E selecionar botão login
    Então retorna mensagem informando que é necessário informar senha

Cenário: Erro ao tentar realizar login sem informar email e senha
    Quando selecionar botão login
    Então retorna mensagem informando que é necessário informar email e senha