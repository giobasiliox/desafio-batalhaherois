CREATE TABLE herois(
   id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nivel INT NOT NULL,
    hp INT NOT NULL,
    ataque INT NOT NULL,
    defesa INT NOT NULL,
    poder VARCHAR(100) NOT NULL
);

CREATE TABLE batalha(
    id SERIAL PRIMARY KEY,
    id_heroi1 INT NOT NULL,
    id_heroi2 INT NOT NULL,
    vencedor INT NOT NULL,
    FOREIGN KEY (id_heroi1) REFERENCES herois(id),
    FOREIGN KEY (id_heroi2) REFERENCES herois(id),
    FOREIGN KEY (vencedor) REFERENCES herois(id)
);


INSERT INTO herois (nome, nivel, hp, ataque, defesa, poder) VALUES ('Wonder Woman', 15, 150, 50, 40, 'Força e Sabedoria');
INSERT INTO herois (nome, nivel, hp, ataque, defesa, poder) VALUES ('Supergirl', 14, 140, 45, 35, 'Super Força e Voo');
INSERT INTO herois (nome, nivel, hp, ataque, defesa, poder) VALUES ('Black Widow', 12, 120, 40, 30, 'Artes Marciais e Espionagem');
INSERT INTO herois (nome, nivel, hp, ataque, defesa, poder) VALUES ('Captain Marvel', 13, 130, 45, 35, 'Voo e Energia Cósmica');
INSERT INTO herois (nome, nivel, hp, ataque, defesa, poder) VALUES ('Storm', 12, 120, 40, 30, 'Controle do Clima e Eletricidade');
INSERT INTO herois (nome, nivel, hp, ataque, defesa, poder) VALUES ('Batgirl', 11, 110, 40, 25, 'Habilidades de Combate e Inteligência');
INSERT INTO herois (nome, nivel, hp, ataque, defesa, poder) VALUES ('Hawkeye (Kate Bishop)', 10, 100, 35, 20, 'Precisão com Arco e Flecha');
INSERT INTO herois (nome, nivel, hp, ataque, defesa, poder) VALUES ('Gamora', 12, 120, 45, 30, 'Mestre em Combate e Resistência Física');
INSERT INTO herois (nome, nivel, hp, ataque, defesa, poder) VALUES ('Scarlet Witch', 13, 130, 50, 35, 'Manipulação da Realidade e Feitiçaria');
INSERT INTO herois (nome, nivel, hp, ataque, defesa, poder) VALUES ('She-Hulk', 14, 140, 55, 40, 'Super Força e Durabilidade');
INSERT INTO herois (nome, nivel, hp, ataque, defesa, poder) VALUES ('Rogue', 11, 110, 40, 25, 'Absorção de Poderes e Força Sobre-Humana');
INSERT INTO herois (nome, nivel, hp, ataque, defesa, poder) VALUES ('Jean Grey (Phoenix)', 15, 150, 55, 45, 'Telepatia e Manipulação de Energia');
INSERT INTO herois (nome, nivel, hp, ataque, defesa, poder) VALUES ('Sue Storm (Invisible Woman)', 13, 130, 50, 40, 'Invisibilidade e Campo de Força');
INSERT INTO herois (nome, nivel, hp, ataque, defesa, poder) VALUES ('Black Canary', 12, 120, 45, 30, 'Grito Sônico e Habilidades de Combate');
INSERT INTO herois (nome, nivel, hp, ataque, defesa, poder) VALUES ('Valkyrie', 14, 140, 50, 35, 'Habilidades de Combate e Imortalidade');


 {
      "nome": "Wonder Woman",
      "nivel": 15,
      "hp": 150,
      "ataque": 50,
      "defesa": 40,
      "poder": "Força e Sabedoria"
    },

    {
      "nome": "Supergirl",
      "nivel": 14,
      "hp": 140,
      "ataque": 45,
      "defesa": 35,
      "poder": "Super Força e Voo"
    },

    {
      "nome": "Black Widow",
      "nivel": 12,
      "hp": 120,
      "ataque": 40,
      "defesa": 30,
      "poder": "Artes Marciais e Espionagem"
    },

    {
      "nome": "Captain Marvel",
      "nivel": 13,
      "hp": 130,
      "ataque": 45,
      "defesa": 35,
      "poder": "Voo e Energia Cósmica"
    },

    {
      "nome": "Storm",
      "nivel": 12,
      "hp": 120,
      "ataque": 40,
      "defesa": 30,
      "poder": "Controle do Clima e Eletricidade"
    },

    {
      "nome": "Batgirl",
      "nivel": 11,
      "hp": 110,
      "ataque": 40,
      "defesa": 25,
      "poder": "Habilidades de Combate e Inteligência"
    },

    {
      "nome": "Hawkeye (Kate Bishop)",
      "nivel": 10,
      "hp": 100,
      "ataque": 35,
      "defesa": 20,
      "poder": "Precisão com Arco e Flecha"
    },

    {
      "nome": "Gamora",
      "nivel": 12,
      "hp": 120,
      "ataque": 45,
      "defesa": 30,
      "poder": "Mestre em Combate e Resistência Física"
    },

    {
      "nome": "Scarlet Witch",
      "nivel": 13,
      "hp": 130,
      "ataque": 50,
      "defesa": 35,
      "poder": "Manipulação da Realidade e Feitiçaria"
    },

    {
      "nome": "She-Hulk",
      "nivel": 14,
      "hp": 140,
      "ataque": 55,
      "defesa": 40,
      "poder": "Super Força e Durabilidade"
    },

    {
      "nome": "Rogue",
      "nivel": 11,
      "hp": 110,
      "ataque": 40,
      "defesa": 25,
      "poder": "Absorção de Poderes e Força Sobre-Humana"
    },

    {
      "nome": "Jean Grey (Phoenix)",
      "nivel": 15,
      "hp": 150,
      "ataque": 55,
      "defesa": 45,
      "poder": "Telepatia e Manipulação de Energia"
    },

    {
      "nome": "Sue Storm (Invisible Woman)",
      "nivel": 13,
      "hp": 130,
      "ataque": 50,
      "defesa": 40,
      "poder": "Invisibilidade e Campo de Força"
    }

    {
      "nome": "Black Canary",
      "nivel": 12,
      "hp": 120,
      "ataque": 45,
      "defesa": 30,
      "poder": "Grito Sônico e Habilidades de Combate"
    },

    {
      "nome": "Valkyrie",
      "nivel": 14,
      "hp": 140,
      "ataque": 50,
      "defesa": 35,
      "poder": "Habilidades de Combate e Imortalidade"
    }

    {
      "nome": "Valkyrie 2",
      "nivel": 14,
      "hp": 140,
      "ataque": 50,
      "defesa": 35,
      "poder": "Habilidades de Combate e Imortalidade"
    }

