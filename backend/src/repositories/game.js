import prisma from "../services/prisma.js";

export const create = await prisma.game.createMany({
  data: [
    {
      name: 'Robô',
      description: 'Os robôs podem ser uma ajuda valiosa para as crianças com autismo a desenvolverem várias áreas, desde a comunicação, interação social até o desenvolvimento de habilidades sociais e emocionais, além de alguns robôs possuírem a capacidade de emitir luzes coloridas e sons suaves, estimulando a criança autista a interagir.',
      category: 'Comunicação, Interação social Habilidades sociais e emocionais Sons Imaginação Coordenação motora Luzes Músicas ',
      link: ''
    },
    {
      name: 'Robô',
      description: 'Os robôs podem ser uma ajuda valiosa para as crianças com autismo a desenvolverem várias áreas, desde a comunicação, interação social até o desenvolvimento de habilidades sociais e emocionais, além de alguns robôs possuírem a capacidade de emitir luzes coloridas e sons suaves, estimulando a criança autista a interagir.',
      category: '',
      link: ''
    },

  ]
})

