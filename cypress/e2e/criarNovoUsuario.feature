# language: pt

Funcionalidade: Cadastrar usuário
Contexto: Deve ter acessado a pagina de criação de usuário
Dado que foi acessada a tela de criação de usuário

Cenário: Deve estar visível as intruções da página e inputs habilitados
    Quando visualizo a pagina de criação
    Então os inputs estão habilitados e instruções visíveis

@deleteUser
Esquema do Cenário: Ao criar nova conta deve gerar usuário do tipo comum
    Quando informar um nome "<name>"
    E informar um email "<email>"
    E informar uma senha "<senha>"
    E confirmar a senha "<confirmarSenha>"
    E clicar para cadastrar
    Então um usuário do tipo comum será gerado
    Exemplos:
    | name |     email            | senha  | confirmarSenha |
    | A.#  | qacontratadoraro@dev.com | 123456 | 123456         |

@createUser @deleteUser
Cenário: Não é possível cadastrar usuário informando email já cadastrado
    Quando informar dados válidos com email já cadastrado
    E clicar para cadastrar
    Então usuário não é criado

Esquema do Cenário: Validando senha e confirmação de senha
    Quando informar um nome válido
    E informar um email válido
    E informar uma senha "<senha>"
    E confirmar a senha "<confirmarSenha>"
    E clicar para cadastrar
    Então retornará erro no formulário "<mensagem>"
    Exemplos:    
    | senha         | confirmarSenha | mensagem                               |
    | 1234567891234 | 1234567891234  | A senha deve ter no máximo 12 dígitos. |
    | acsfe         | acsfe          | A senha deve ter pelo menos 6 dígitos. |
    | asdfgh        | 12644568       | As senhas devem ser iguais.            |  

Cenário: Deixando campos de senha sem preencher
    Quando informar um nome válido
    E informar um email válido
    E clicar para cadastrar
    Então retornará erro nos campos senha

Cenário: Deixando somente o campo confirmar senha sem preencher
    Quando informar um nome válido
    E informar um email válido
    E informar uma senha válida
    E clicar para cadastrar
    Então retornará erro no campo de confirmação de senha

Cenário: Deixando somente o campo senha sem preencher    
    Quando informar um nome válido
    E informar um email válido
    E informar uma senha válida no campo de confirmação de senha
    E clicar para cadastrar
    Então retornará erro no campo senha

Cenário: Deixando campo nome sem preencher
    Quando informar um email válido
    E informar uma senha válida
    E informar uma senha válida no campo de confirmação de senha
    E clicar para cadastrar
    Então retorna erro no campo nome

Cenário: Deixando o campo email sem preencher
    Quando informar um nome válido
    E informar uma senha válida
    E informar uma senha válida no campo de confirmação de senha
    E clicar para cadastrar
    Então retorna erro no campo email