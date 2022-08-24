Feature: Efetuar pesquisa de tenis

    Scenario: Acessar pagina de compra netshoes
        Given que acesso o site da netshoes
        Then visualizo o site com barra de pesquisa

    Scenario: Pesquisar tenis
        Given que acesso o site da netshoes
        When preencho o campo de pesquisa
        Then é apresentado resultado de pesquisa contendo os tenis