Feature: Teste de api

Background: 
    Given que tenha conexão com a API

Scenario: Efetuar pesquisa de albums com sucesso
    Then efetuo pesquisa de todos os albums

Scenario: Efetuar publicação de album com sucesso
    When preencho os campos obrigatorios para publicação de album
    Then envio album com sucesso

Scenario: Efetuar alteraçao de album inteiro
    When preencho todos os campos obrigatorios para alteraçao de album
    Then envio alteracao de todos os campos do album com sucesso

Scenario: Efetuar alteraçao parcial de album
    When altero algum campo do album
    Then envio alteracao do campo do album com sucesso

Scenario: Efetuar exclusão de um album
    When escolho o album a ser excluido
    Then o album é excluido com sucesso