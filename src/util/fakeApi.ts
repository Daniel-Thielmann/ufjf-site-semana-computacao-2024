import { EventDetail, EventType } from "@/types/event";

const fakeEventApi = () => {
  const events: EventDetail[] = [
    {
      id: "1",
      title: "Palestra sobre Inteligência Artificial",
      description: {
        raw: "Palestra sobre redes neurais.",
      },
      event_type: EventType.palestra,
      presenters: [
        {
          id: "1",
          name: "Luciana",
          description: "Descrição da Luciana", // Adicione as propriedades necessárias
          participation: "Participante",
          bond: "Vínculo",
          pictureURL: "URL da Imagem",
        },
        {
          id: "2",
          name: "Carlos Cristiano",
          description: "Descrição do Carlos Cristiano", // Adicione as propriedades necessárias
          participation: "Participante",
          bond: "Vínculo",
          pictureURL: "URL da Imagem",
        },
      ],
      schedule: new Date("2024-11-26T10:00:00Z"),
      location: "Auditório DCC",
    },
    {
      id: "2",
      title: "Minicurso de React",
      description: {
        raw: "Aprenda React com um jogo iddle clicker.",
      },
      event_type: EventType.minicurso,
      presenters: [
        {
          id: "3",
          name: "Gabriel",
          description: "Descrição do Gabriel", // Adicione as propriedades necessárias
          participation: "Participante",
          bond: "Vínculo",
          pictureURL: "URL da Imagem",
        },
      ],
      schedule: new Date("2024-11-27T14:00:00Z"),
      location: "Lab 205",
    },
    {
      id: "3",
      title: "Competição de Programação",
      description: {
        raw: "Competição de lógica de programação.",
      },
      event_type: EventType.competicao,
      presenters: [
        {
          id: "4",
          name: "Caniato",
          description: "Descrição do Caniato", // Adicione as propriedades necessárias
          participation: "Participante",
          bond: "Vínculo",
          pictureURL: "URL da Imagem",
        },
      ],
      schedule: new Date("2024-11-28T09:00:00Z"),
      location: "Lab 205",
    },
    {
      id: "4",
      title: "Palestra sobre Computação Evolucionista",
      description: {
        raw: "Palestra PSO e ACO.",
      },
      event_type: EventType.palestra,
      presenters: [
        {
          id: "1",
          name: "Luciana",
          description: "Descrição da Luciana", // Adicione as propriedades necessárias
          participation: "Participante",
          bond: "Vínculo",
          pictureURL: "URL da Imagem",
        },
        {
          id: "2",
          name: "Carlos Cristiano",
          description: "Descrição do Carlos Cristiano", // Adicione as propriedades necessárias
          participation: "Participante",
          bond: "Vínculo",
          pictureURL: "URL da Imagem",
        },
      ],
      schedule: new Date("2024-11-26T12:00:00Z"),
      location: "Auditório DCC",
    },
  ];

  return events;
};

export { fakeEventApi };
