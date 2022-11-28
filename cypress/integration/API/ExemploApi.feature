Feature: Teste de api

Background: 
    Given que tenha conexão com a API

Scenario: Efetuar pesquisa com sucesso
    Then efetuo pesquisa de todos os comentarios

Scenario: Efetuar publicação de comentario com sucesso
    When preencho os campos obrigatorios para publicação de comentario
    Then envio comentario com sucesso

Scenario: Efetuar alteraçao de comentario inteiro
    When preencho todos os campos obrigatorios para alteraçao de comentario
    Then envio alteracao de todos os campos do comentario com sucesso

Scenario: Efetuar alteraçao parcial de comentario
    When altero algum campo do comentario
    Then envio alteracao do campo do comentario com sucesso

Scenario: Efetuar exclusão de um comentario
    When escolho o comentario a ser excluido
    Then o comentario é excluido com sucesso