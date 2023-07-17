Feature: Efetuar pesquisa de tenis


Background: Acessar site do google
    Given que acesso o site da google

    Scenario: Verificar acesso a pagina de pesquisa do google
        Then visualizo o site com barra de pesquisa

    Scenario: Efetuar pesquisa de tenis
        When efetuo pesquisa de um tenis nike 
        Then é apresentado lista com resultado pesquisa

