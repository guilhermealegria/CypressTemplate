Feature: Teste de api

Background: 
    Given crio um usuario

Scenario: Efetuar pesquisa de usuarios com sucesso
    Then efetuo pesquisa de todos os usuarios

Scenario: Efetuar publicação de usuario com sucesso
    Then envio os campos obrigatorios de usuario preenchidos com sucesso

Scenario: Efetuar alteraçao de usuario inteiro com sucesso
    Then envio da alteracao de todos os campos do usuario com sucesso

Scenario: Efetuar alteraçao parcial de usuario com sucesso
    Then envio alteracao do campo "name" do usuario com sucesso

Scenario: Efetuar exclusão de usuario com sucesso
    Then excluo o usuario escolhido com sucesso