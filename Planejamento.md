# Planejamento Jogo Genius

## Paleta de Cores / Tema
> Sugestão:
- #FFADAD
- #FFD6A5
- #FDFFB6
- #CAFFBF
- #9BF6FF
- #A0C4FF
- #BDB2FF
- #FFC6FF

## Fluxo da Aplicação
> Página foi acessada
- Carregar:
  - Painel de interação com:
    - Níveis de dificuldade
    - Botão apra iniciar a partida
    - Botão Zerar placar
    - Placar
  - Interface do jogo:
    - Variável de acordo com a dificuldade:
      - 4 cores: normal
      - 6 cores: médio *<-*
      - 8 cores: difícl *<-*
      - 4 cores: extremo (cores trocam de lugar) *<-*

> “Gameplay”
- Preencher lista de possibilidades de acordo com a dificuldade
- Sortear cores (Simultaneo com criar botões):
  - Sortear e enviar para uma lista a quantidade de cores de acordo com a rodada e.g. 1ª rodada uma cor, 2ª rodada duas cores, etc...
- Criar botões coloridos (Simultaneo c/ sorteio):
  - Criar tags
  - Atribuir classes
    - classe do formato: varia de acordo com a quantidade de cores
    - classe de cor: fixa (sempre a mesma, e só vamos acrescentando com as dificuldade) ou aleatória (cada partida vai ter botões coloridos com cores aleatórias da nossa paleta).
  - Adicionar “eventListener” para a funcão que verificará cor(es) + ordem sorteada e exibida
  - “Pendurar” na página
- Exibir cores sorteadas
  - SE a pessoa acertar tudo:
    - Incrementar rodada
    - Repetir sorteio
    - Repetir Exibir cores sorteadas
  - SE a pessoa errar:
    - Mostar resumo da partida:
    - Somar pontos ao placar
    - Botão nova partida
    - Botão zerar placar

*adicionar se der tempo*