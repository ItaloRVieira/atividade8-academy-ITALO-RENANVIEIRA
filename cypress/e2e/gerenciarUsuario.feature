# language: pt

@createUser @deleteUser
Funcionalidade: Gerenciar conta

Cenário: Visualizando formulário com usuário do tipo comum
    Dado que usuário do tipo comum acessa gerenciamento de conta
    Quando visualizar formulário de edição de usuário
    Então O select de perfil, campos email, senha e confirmar senha estão visíveis e desabilitados
    E botão Alterar senha e campo nome estão visíveis e habilitados

Cenário: É possível alterar o próprio nome com usuário do tipo comum
    Dado que usuário do tipo comum acessa gerenciamento de conta
    Quando informar um novo nome
    E selecionar o botão salvar
    Então o nome é alterado

Cenário: Não é possível alterar nome informando nome vazio com usuário do tipo comum
    Dado que usuário do tipo comum acessa gerenciamento de conta
    Quando informar um nome vazio
    E selecionar o botão salvar
    Então o nome não será alterado

Esquema do Cenário: Validando alteração de senha com usuário do tipo comum
    Dado que usuário do tipo comum acessa gerenciamento de conta
    Quando selecionar botão de alteração de senha
    E informar uma nova senha "<senha>"
    E confirmar a nova senha "<confirmarSenha>"
    E selecionar o botão salvar
    Então retorna mensagens de erro no formulário "<mensagem>"
Exemplos:    
    | senha         | confirmarSenha | mensagem                               |
    | 1234567891234 | 1234567891234  | A senha deve ter no máximo 12 dígitos. |
    | acsfe         | acsfe          | A senha deve ter pelo menos 6 dígitos. |
    | asdfgh        | 12644568       | As senhas devem ser iguais.            |

Cenário: Deixando campos alteração de senha sem preencher com usuário do tipo comum
    Dado que usuário do tipo comum acessa gerenciamento de conta
    Quando selecionar botão de alteração de senha
    E selecionar o botão salvar
    Então retorna mensagens de erro nos campos alteração de senha

Cenário: Deixando o campo confirmar senha sem preencher com usuário do tipo comum
    Dado que usuário do tipo comum acessa gerenciamento de conta
    Quando selecionar botão de alteração de senha
    E informar uma nova senha válida
    E selecionar o botão salvar
    Então retornará erro na confirmação de alteração de senha

Cenário: Deixando somente o campo senha sem preencher com usuário do tipo comum
    Dado que usuário do tipo comum acessa gerenciamento de conta
    Quando selecionar botão de alteração de senha
    E informar uma confirmação de senha
    E selecionar o botão salvar
    Então retornará erro no campo nova senha
        
Cenário: É possível alterar o próprio nome com usuário do tipo crítico
    Dado que usuário do tipo crítico acessa gerenciamento de conta
    Quando informar um novo nome
    E selecionar o botão salvar
    Então o nome é alterado

Cenário: Não é possível alterar nome informando nome vazio com usuário do tipo crítico
    Dado que usuário do tipo crítico acessa gerenciamento de conta
    Quando informar um nome vazio
    E selecionar o botão salvar
    Então o nome não será alterado

Esquema do Cenário: Validando alteração de senha com usuário do tipo crítico
    Dado que usuário do tipo crítico acessa gerenciamento de conta
    Quando selecionar botão de alteração de senha
    E informar uma nova senha "<senha>"
    E confirmar a nova senha "<confirmarSenha>"
    E selecionar o botão salvar
    Então retorna mensagens de erro no formulário "<mensagem>"
Exemplos:    
    | senha         | confirmarSenha | mensagem                               |
    | 1234567891234 | 1234567891234  | A senha deve ter no máximo 12 dígitos. |
    | acsfe         | acsfe          | A senha deve ter pelo menos 6 dígitos. |
    | asdfgh        | 12644568       | As senhas devem ser iguais.            |

Cenário: Deixando campos alteração de senha sem preencher com usuário do tipo crítico
    Dado que usuário do tipo crítico acessa gerenciamento de conta
    Quando selecionar botão de alteração de senha
    E selecionar o botão salvar
    Então retorna mensagens de erro nos campos alteração de senha

Cenário: Deixando o campo confirmar senha sem preencher com usuário do tipo crítico
    Dado que usuário do tipo crítico acessa gerenciamento de conta
    Quando selecionar botão de alteração de senha
    E informar uma nova senha válida
    E selecionar o botão salvar
    Então retornará erro na confirmação de alteração de senha

Cenário: Deixando somente o campo senha sem preencher com usuário do tipo crítico
    Dado que usuário do tipo crítico acessa gerenciamento de conta
    Quando selecionar botão de alteração de senha
    E informar uma confirmação de senha
    E selecionar o botão salvar
    Então retornará erro no campo nova senha

Cenário: É possível alterar o próprio nome com usuário do tipo admin
    Dado que usuário do tipo admin acessa gerenciamento de conta
    Quando informar um novo nome
    E selecionar o botão salvar
    Então o nome é alterado

Cenário: Não é possível alterar nome informando nome vazio com usuário do tipo crítico
    Dado que usuário do tipo admin acessa gerenciamento de conta
    Quando informar um nome vazio
    E selecionar o botão salvar
    Então o nome não será alterado

Esquema do Cenário: Validando alteração de senha com usuário do tipo crítico
    Dado que usuário do tipo admin acessa gerenciamento de conta
    Quando selecionar botão de alteração de senha
    E informar uma nova senha "<senha>"
    E confirmar a nova senha "<confirmarSenha>"
    E selecionar o botão salvar
    Então retorna mensagens de erro no formulário "<mensagem>"
Exemplos:    
    | senha         | confirmarSenha | mensagem                               |
    | 1234567891234 | 1234567891234  | A senha deve ter no máximo 12 dígitos. |
    | acsfe         | acsfe          | A senha deve ter pelo menos 6 dígitos. |
    | asdfgh        | 12644568       | As senhas devem ser iguais.            |

Cenário: Deixando campos alteração de senha sem preencher com usuário do tipo crítico
    Dado que usuário do tipo admin acessa gerenciamento de conta
    Quando selecionar botão de alteração de senha
    E selecionar o botão salvar
    Então retorna mensagens de erro nos campos alteração de senha

Cenário: Deixando o campo confirmar senha sem preencher com usuário do tipo crítico
    Dado que usuário do tipo admin acessa gerenciamento de conta
    Quando selecionar botão de alteração de senha
    E informar uma nova senha válida
    E selecionar o botão salvar
    Então retornará erro na confirmação de alteração de senha

Cenário: Deixando somente o campo senha sem preencher com usuário do tipo crítico
    Dado que usuário do tipo admin acessa gerenciamento de conta
    Quando selecionar botão de alteração de senha
    E informar uma confirmação de senha
    E selecionar o botão salvar
    Então retornará erro no campo nova senha
