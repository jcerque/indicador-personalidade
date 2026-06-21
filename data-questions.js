// Gerado automaticamente a partir do Formulário Zoho + chave de correção do Excel.
// part: 1/3 = frases (Parte I/III); 2/4 = pares de palavras (Parte II/IV).
// pa/pb = polo para o qual a opção a/b soma.
const QUESTIONS = [
{
"n": 1,
"part": 1,
"prompt": "Quando você vai visitar algum lugar por apenas um dia, você prefere:",
"a": "Planejar o que (e quando) você vai fazer cada coisa",
"b": "Apenas ir sem nenhuma agenda definida",
"pa": "J",
"pb": "P"
},
{
"n": 2,
"part": 1,
"prompt": "Você se considera:",
"a": "Uma pessoa mais espontânea",
"b": "Uma pessoa mais organizada",
"pa": "P",
"pb": "J"
},
{
"n": 3,
"part": 1,
"prompt": "Se você fosse um professor, você preferia ensinar:",
"a": "Cursos envolvendo coisas práticas",
"b": "Cursos envolvendo teoria",
"pa": "S",
"pb": "N"
},
{
"n": 4,
"part": 1,
"prompt": "Geralmente, você é:",
"a": "Uma pessoa que se mistura bem com todos",
"b": "Uma pessoa bastante tranquila e reservada",
"pa": "E",
"pb": "I"
},
{
"n": 5,
"part": 1,
"prompt": "Geralmente, você se dá melhor com:",
"a": "Pessoas de bastante imaginação",
"b": "Pessoas mais realistas",
"pa": "N",
"pb": "S"
},
{
"n": 6,
"part": 1,
"prompt": "Você mais frequentemente deixa que:",
"a": "O seu coração governe a sua cabeça",
"b": "A sua cabeça governe seu coração",
"pa": "F",
"pb": "T"
},
{
"n": 7,
"part": 1,
"prompt": "Você tem mais sucesso quando:",
"a": "Lida com o inesperado e percebe rapidamente o que deve ser feito",
"b": "Quando segue cuidadosamente um plano de trabalho",
"pa": "P",
"pb": "J"
},
{
"n": 8,
"part": 1,
"prompt": "Você é uma pessoa:",
"a": "Fácil de se conhecer",
"b": "Difícil de se conhecer",
"pa": "E",
"pb": "I"
},
{
"n": 9,
"part": 1,
"prompt": "Seguir um cronograma é algo que:",
"a": "Empolga você",
"b": "Paralisa você",
"pa": "J",
"pb": "P"
},
{
"n": 10,
"part": 1,
"prompt": "Quando você tem um trabalho especial para fazer, você prefere:",
"a": "Organizá-lo cuidadosamente antes de começar a fazer",
"b": "Ir descobrindo o que é necessário ser feito à medida que você vai avançando",
"pa": "J",
"pb": "P"
},
{
"n": 11,
"part": 1,
"prompt": "Na maioria dos casos, você prefere:",
"a": "Ir executando as tarefas do dia seguindo o fluxo",
"b": "Seguir um cronograma ou uma agenda pré-definidos",
"pa": "P",
"pb": "J"
},
{
"n": 12,
"part": 1,
"prompt": "A maioria das pessoas diria que você é:",
"a": "Uma pessoa mais reservada",
"b": "Uma pessoa muito aberta e expansiva",
"pa": "I",
"pb": "E"
},
{
"n": 13,
"part": 1,
"prompt": "Você prefere ser considerado:",
"a": "Uma pessoa mais prática",
"b": "Uma pessoa mais engenhosa",
"pa": "S",
"pb": "N"
},
{
"n": 14,
"part": 1,
"prompt": "Em um grande grupo você mais frequentemente:",
"a": "É a pessoa que procura introduzir as pessoas uma às outras",
"b": "Prefere aguardar ser apresentado por alguém ao grupo",
"pa": "E",
"pb": "I"
},
{
"n": 15,
"part": 1,
"prompt": "Você prefere ter como um amigo alguém que:",
"a": "Está sempre chegando com novas ideias",
"b": "Tem os pés firmes no chão",
"pa": "N",
"pb": "S"
},
{
"n": 16,
"part": 1,
"prompt": "Você está inclinado a:",
"a": "Valorizar o sentimento mais do que a lógica",
"b": "Valorizar a lógica mais do que o sentimento",
"pa": "F",
"pb": "T"
},
{
"n": 17,
"part": 1,
"prompt": "Você prefere:",
"a": "Esperar e ver o que acontece e depois fazer planos",
"b": "Planejar as coisas com muita antecedência",
"pa": "P",
"pb": "J"
},
{
"n": 18,
"part": 1,
"prompt": "Você tende a:",
"a": "Passar muito tempo sozinho",
"b": "Passar muito tempo com os outros",
"pa": "I",
"pb": "E"
},
{
"n": 19,
"part": 1,
"prompt": "Você acha que estar perto de um monte de gente:",
"a": "Lhe dá mais energia",
"b": "Em geral, suga a sua energia",
"pa": "E",
"pb": "I"
},
{
"n": 20,
"part": 1,
"prompt": "Você prefere:",
"a": "Organizar com antecedência encontros, reuniões de amigos, jantares etc.",
"b": "Deixar livre tais eventos para fazer o que parecer ser divertido quando chegar a hora",
"pa": "J",
"pb": "P"
},
{
"n": 21,
"part": 1,
"prompt": "Ao planejar uma viagem, você prefere:",
"a": "Deixar livre a maior parte do tempo para fazer o que tiver vontade a cada dia",
"b": "Planejar com antecedência o que você vai fazer na maior parte dos dias",
"pa": "P",
"pb": "J"
},
{
"n": 22,
"part": 1,
"prompt": "Em festas, você:",
"a": "Às vezes fica entediado",
"b": "Se diverte o tempo todo",
"pa": "I",
"pb": "E"
},
{
"n": 23,
"part": 1,
"prompt": "Você geralmente:",
"a": "Interage bem com os outros",
"b": "Tende a ficar mais na sua",
"pa": "E",
"pb": "I"
},
{
"n": 24,
"part": 1,
"prompt": "O tipo de pessoa que desperta mais o seu interesse é:",
"a": "Uma pessoa com uma mente rápida e brilhante",
"b": "Uma pessoa prática com muito bom senso",
"pa": "N",
"pb": "S"
},
{
"n": 25,
"part": 1,
"prompt": "Em suas atividades diárias, você:",
"a": "Prefere aproveitar uma emergência que faça você trabalhar contra o tempo",
"b": "Geralmente planeja o seu trabalho para que não precise trabalhar sob pressão",
"pa": "P",
"pb": "J"
},
{
"n": 26,
"part": 1,
"prompt": "Você diria que geralmente outros precisam de:",
"a": "Muito tempo para te conhecer",
"b": "Pouco tempo para te conhecer",
"pa": "I",
"pb": "E"
},
{
"n": 27,
"part": 2,
"prompt": "",
"a": "Privado",
"b": "Compartilhado",
"pa": "I",
"pb": "E"
},
{
"n": 28,
"part": 2,
"prompt": "",
"a": "Agendado",
"b": "Não-planejado",
"pa": "J",
"pb": "P"
},
{
"n": 29,
"part": 2,
"prompt": "",
"a": "Abstrato",
"b": "Sólido",
"pa": "N",
"pb": "S"
},
{
"n": 30,
"part": 2,
"prompt": "",
"a": "Gentil",
"b": "Firme",
"pa": "F",
"pb": "T"
},
{
"n": 31,
"part": 2,
"prompt": "",
"a": "Pensar",
"b": "Sentir",
"pa": "T",
"pb": "F"
},
{
"n": 32,
"part": 2,
"prompt": "",
"a": "Fatos",
"b": "Ideias",
"pa": "S",
"pb": "N"
},
{
"n": 33,
"part": 2,
"prompt": "",
"a": "Impulso",
"b": "Decisão",
"pa": "P",
"pb": "J"
},
{
"n": 34,
"part": 2,
"prompt": "",
"a": "Caloroso",
"b": "Reservado",
"pa": "E",
"pb": "I"
},
{
"n": 35,
"part": 2,
"prompt": "",
"a": "Inteligente",
"b": "Extrovertido",
"pa": "I",
"pb": "E"
},
{
"n": 36,
"part": 2,
"prompt": "",
"a": "Sistemático",
"b": "Informal",
"pa": "J",
"pb": "P"
},
{
"n": 37,
"part": 2,
"prompt": "",
"a": "Hipótese",
"b": "Certeza",
"pa": "N",
"pb": "S"
},
{
"n": 38,
"part": 2,
"prompt": "",
"a": "Sensível",
"b": "Justo",
"pa": "F",
"pb": "T"
},
{
"n": 39,
"part": 2,
"prompt": "",
"a": "Convincente",
"b": "Impressionante",
"pa": "T",
"pb": "F"
},
{
"n": 40,
"part": 2,
"prompt": "",
"a": "Fato",
"b": "Conceito",
"pa": "S",
"pb": "N"
},
{
"n": 41,
"part": 2,
"prompt": "",
"a": "Irrestrito",
"b": "Organizado",
"pa": "P",
"pb": "J"
},
{
"n": 42,
"part": 2,
"prompt": "",
"a": "Reservado",
"b": "Falante",
"pa": "I",
"pb": "E"
},
{
"n": 43,
"part": 2,
"prompt": "",
"a": "Organizado",
"b": "Relaxado",
"pa": "J",
"pb": "P"
},
{
"n": 44,
"part": 2,
"prompt": "",
"a": "Ideia",
"b": "Realidade",
"pa": "N",
"pb": "S"
},
{
"n": 45,
"part": 2,
"prompt": "",
"a": "Compaixão",
"b": "Precaução",
"pa": "F",
"pb": "T"
},
{
"n": 46,
"part": 2,
"prompt": "",
"a": "Benefícios",
"b": "Bênçãos",
"pa": "T",
"pb": "F"
},
{
"n": 47,
"part": 2,
"prompt": "",
"a": "Prático",
"b": "Teórico",
"pa": "S",
"pb": "N"
},
{
"n": 48,
"part": 2,
"prompt": "",
"a": "Poucos Amigos",
"b": "Muitos Amigos",
"pa": "I",
"pb": "E"
},
{
"n": 49,
"part": 2,
"prompt": "",
"a": "Sistemático",
"b": "Espontâneo",
"pa": "J",
"pb": "P"
},
{
"n": 50,
"part": 2,
"prompt": "",
"a": "Imaginativo",
"b": "Realístico",
"pa": "N",
"pb": "S"
},
{
"n": 51,
"part": 2,
"prompt": "",
"a": "Amigável",
"b": "Objetivo",
"pa": "F",
"pb": "T"
},
{
"n": 52,
"part": 2,
"prompt": "",
"a": "Objetivo",
"b": "Entusiasta",
"pa": "T",
"pb": "F"
},
{
"n": 53,
"part": 2,
"prompt": "",
"a": "Construir",
"b": "Inventar",
"pa": "S",
"pb": "N"
},
{
"n": 54,
"part": 2,
"prompt": "",
"a": "Quieto",
"b": "Agregador",
"pa": "I",
"pb": "E"
},
{
"n": 55,
"part": 2,
"prompt": "",
"a": "Teórico",
"b": "Factual",
"pa": "N",
"pb": "S"
},
{
"n": 56,
"part": 2,
"prompt": "",
"a": "Compassivo",
"b": "Lógico",
"pa": "F",
"pb": "T"
},
{
"n": 57,
"part": 2,
"prompt": "",
"a": "Analítico",
"b": "Sentimental",
"pa": "T",
"pb": "F"
},
{
"n": 58,
"part": 2,
"prompt": "",
"a": "Razoável",
"b": "Empolgado",
"pa": "S",
"pb": "N"
},
{
"n": 59,
"part": 3,
"prompt": "Quando você começa um grande projeto que deve ser concluído em apenas uma semana, você:",
"a": "Tira um tempo para listar cada coisa a ser feita e a sequência para completá-las",
"b": "Mergulha direto nas tarefas e começa a executá-las",
"pa": "J",
"pb": "P"
},
{
"n": 60,
"part": 3,
"prompt": "Em situações sociais você geralmente se percebe como:",
"a": "Em dificuldades para começar e manter uma conversa com algumas pessoas",
"b": "Alguém que é fácil de falar com a maioria das pessoas por longos períodos",
"pa": "I",
"pb": "E"
},
{
"n": 61,
"part": 3,
"prompt": "Ao fazer algo que muitas outras pessoas já fazem, o que agrada mais a você:",
"a": "Fazê-lo da maneira comumente aceita",
"b": "Inventar um jeito seu de fazê-lo",
"pa": "S",
"pb": "N"
},
{
"n": 62,
"part": 3,
"prompt": "As novas pessoas que você conhece podem dizer o que você tem interesse em:",
"a": "Imediatamente",
"b": "Só depois que elas realmente te conhecerem",
"pa": "E",
"pb": "I"
},
{
"n": 63,
"part": 3,
"prompt": "Você geralmente prefere cursos que ensinam:",
"a": "Conceitos e princípios",
"b": "Fatos e números",
"pa": "N",
"pb": "S"
},
{
"n": 64,
"part": 3,
"prompt": "Um elogio maior para você é ser chamado de:",
"a": "Uma pessoa de sentimentos verdadeiros",
"b": "Uma pessoa consistentemente razoável",
"pa": "F",
"pb": "T"
},
{
"n": 65,
"part": 3,
"prompt": "Você considera que se orientar por um cronograma é:",
"a": "Necessário às vezes, mas geralmente desfavorável",
"b": "Útil e favorável na maioria das vezes",
"pa": "P",
"pb": "J"
},
{
"n": 66,
"part": 3,
"prompt": "Quando você está com um grupo de pessoas, você geralmente prefere:",
"a": "Falar individualmente com pessoas que você conhece bem",
"b": "Participar da conversa do grupo",
"pa": "I",
"pb": "E"
},
{
"n": 67,
"part": 3,
"prompt": "Em festas e eventos sociais, você:",
"a": "Domina a maior parte da conversa",
"b": "Deixa os outros dominarem a maior parte da conversa",
"pa": "E",
"pb": "I"
},
{
"n": 68,
"part": 3,
"prompt": "A ideia de fazer uma lista do que você deve fazer durante um fim de semana:",
"a": "Te agrada",
"b": "Não desperta o seu interesse",
"pa": "J",
"pb": "P"
},
{
"n": 69,
"part": 3,
"prompt": "Um elogio maior para você é ser chamado de:",
"a": "Competente",
"b": "Solidário",
"pa": "T",
"pb": "F"
},
{
"n": 70,
"part": 3,
"prompt": "Em geral, você prefere:",
"a": "Assumir os seus compromissos sociais com certa antecedência",
"b": "Ficar livre para fazer as coisas no impulso do momento",
"pa": "J",
"pb": "P"
},
{
"n": 71,
"part": 3,
"prompt": "No geral, ao trabalhar em uma grande tarefa, você tende a:",
"a": "Descobrir o que precisa ser feito à medida que você avança",
"b": "Começar dividindo-a em etapas/passos",
"pa": "P",
"pb": "J"
},
{
"n": 72,
"part": 3,
"prompt": "Você pode manter uma conversa por tempo indeterminado:",
"a": "Somente com pessoas que compartilham algum interesse seu",
"b": "Com quase todos",
"pa": "I",
"pb": "E"
},
{
"n": 73,
"part": 3,
"prompt": "Você prefere:",
"a": "Apoiar os métodos estabelecidos para dar uma contribuição útil a uma situação",
"b": "Analisar o que ainda está errado e atacar problemas não resolvidos",
"pa": "S",
"pb": "N"
},
{
"n": 74,
"part": 3,
"prompt": "Na sua leitura por prazer, você:",
"a": "Gosta de escritores que usam formas diferentes ou originais para dizer as coisas",
"b": "Gosta de escritores que expressam exatamente o que querem dizer",
"pa": "N",
"pb": "S"
},
{
"n": 75,
"part": 3,
"prompt": "Você prefere trabalhar sob um chefe (ou ter um professor) que é:",
"a": "Bem-humorado, mas muitas vezes inconsistente",
"b": "De língua afiada, mas sempre lógico",
"pa": "F",
"pb": "T"
},
{
"n": 76,
"part": 3,
"prompt": "Você prefere fazer a maioria das coisas de acordo com:",
"a": "O que você sente que vai ser mais agradável naquele dia em particular",
"b": "As tarefas de um cronograma definido",
"pa": "P",
"pb": "J"
},
{
"n": 77,
"part": 3,
"prompt": "Você consegue:",
"a": "Falar facilmente com quase qualquer um pelo tempo que precisar",
"b": "Encontrar muito a dizer apenas para certas pessoas ou sob certas condições",
"pa": "E",
"pb": "I"
},
{
"n": 78,
"part": 3,
"prompt": "Ao tomar uma decisão, é mais importante para você:",
"a": "Pesar os fatos",
"b": "Considerar os sentimentos e opiniões das pessoas",
"pa": "T",
"pb": "F"
},
{
"n": 79,
"part": 4,
"prompt": "",
"a": "Imaginativo",
"b": "Realista",
"pa": "N",
"pb": "S"
},
{
"n": 80,
"part": 4,
"prompt": "",
"a": "Coração grande",
"b": "Determinação",
"pa": "F",
"pb": "T"
},
{
"n": 81,
"part": 4,
"prompt": "",
"a": "Imparcial",
"b": "Gentil",
"pa": "T",
"pb": "F"
},
{
"n": 82,
"part": 4,
"prompt": "",
"a": "Realização",
"b": "Planejamento",
"pa": "S",
"pb": "N"
},
{
"n": 83,
"part": 4,
"prompt": "",
"a": "Possibilidades",
"b": "Certezas",
"pa": "N",
"pb": "S"
},
{
"n": 84,
"part": 4,
"prompt": "",
"a": "Ternura",
"b": "Força",
"pa": "F",
"pb": "T"
},
{
"n": 85,
"part": 4,
"prompt": "",
"a": "Prático",
"b": "Sentimental",
"pa": "T",
"pb": "F"
},
{
"n": 86,
"part": 4,
"prompt": "",
"a": "Fazer",
"b": "Criar",
"pa": "S",
"pb": "N"
},
{
"n": 87,
"part": 4,
"prompt": "",
"a": "Novidade",
"b": "Já conhecido",
"pa": "N",
"pb": "S"
},
{
"n": 88,
"part": 4,
"prompt": "",
"a": "Apoiar",
"b": "Analisar",
"pa": "F",
"pb": "T"
},
{
"n": 89,
"part": 4,
"prompt": "",
"a": "Com vontade forte",
"b": "Com coração terno",
"pa": "T",
"pb": "F"
},
{
"n": 90,
"part": 4,
"prompt": "",
"a": "Concreto",
"b": "Abstrato",
"pa": "S",
"pb": "N"
},
{
"n": 91,
"part": 4,
"prompt": "",
"a": "Dedicado",
"b": "Determinado",
"pa": "F",
"pb": "T"
},
{
"n": 92,
"part": 4,
"prompt": "",
"a": "Competente",
"b": "Coração bondoso",
"pa": "T",
"pb": "F"
},
{
"n": 93,
"part": 4,
"prompt": "",
"a": "Prático",
"b": "Inovador",
"pa": "S",
"pb": "N"
}
];
const PART_INTRO = {1:'Parte I — Qual resposta chega mais perto de como você geralmente se sente ou age?',2:'Parte II — Que palavra em cada par lhe agrada mais? (pense no significado, não no som)',3:'Parte III — Qual resposta chega mais perto de como você geralmente se sente ou age?',4:'Parte IV — Que palavra em cada par lhe agrada mais?'};
const CLARITY = {EI:[13,16,19,21],SN:[15,20,24,26],TF:[14,18,22,24],JP:[13,16,20,22]};
