const churchesIndex = {
  researchers: [
  {
    id: 'nkcqkdnuii90iy7g4g69',
    firstName: 'Bruno',
    surname: 'Leonardo Nogueira',
    responsableFor: [

    ]
  },
  {
    id: 'rjhcpn3iz309bl017ebv',
    firstName: 'Dominique',
    surname: 'Silva Blasechi',
    responsableFor: [
      
    ]
  },
  {
    id: '6jxa6zlrrqujej4ddors',
    firstName: 'Elias',
    surname: 'da Silva Santana',
    responsableFor: [
      
    ]
  },
  {
    id: 'n4f9ymo2lpy5ktkbu98s',
    firstName: 'Samuel',
    surname: 'Natan de Souza Martins',
    responsableFor: [
      'frhk2kso1zeta52amwb3', '74wb4y7e22tk3ir1o0qt', 'yvn1uoy5ttkat9hreqhj', '1trn0yetaebjlwabipl6',
      'gt7lh9v2214upufooz13', 'xfpk9xycwz9gv4vm4kj3', 'q2svdv3zb9p4lgdlx7md',
    ]
  }],

  churches: [
    {
      id: 'frhk2kso1zeta52amwb3',
      name: 'Igreja Assembleia de Deus Bom Retiro',
      address: { street: 'Rua Dib Buchalla', number: 90, region: 'Vila Marcondes' },
      location: [-22.121973897854737, -51.381034680985515],
      schedule: {
        sunday: { hour: 19, title: 'Culto da Família' },
        tuesday: { hour: 20, title: 'Culto da Vitória' },
        friday: { hour: 20, title: 'Causas Impossíveis' },
      },
      date: { fieldResearch: '08/06/2020', analysis: '08/06/2020' },
    },
    {
      id: '74wb4y7e22tk3ir1o0qt',
      name: 'Salão do Reino das Testemunhas de Jeová - Congregação Central Paulista e Língua de Sinais',
      address: { street: 'Rua Maria Glória', number: 465, region: 'Vila Santa Helena' },
      location: [-22.11994433372235, -51.401058542355464],
      images: {
        first: { path: `/churches/vl-stahelena_1a.jpeg` },
        second: { path: `/churches/vl-stahelena_1b.jpeg`, caption: 'Anexo da igreja' },
      },
      date: { fieldResearch: '08/06/2020', analysis: '08/06/2020' },
    },
    {
      id: 'yvn1uoy5ttkat9hreqhj',
      name: 'Igreja Evangélica Casa do Senhor Jesus',
      address: { street: 'Rua Marechal Floriano Peixoto', number: 218, region: 'Vila Marcondes' },
      location: [-22.121379666326302, -51.38204748098472],
      images: {
        first: { path: `/churches/vl-marcondes_1a.jpeg` },
        second: { path: `/churches/vl-marcondes_1a.jpeg`, caption: 'Horário dos cultos' },
      },
      schedule: {
        sunday: { hour: 20 },
        wednesday: { hour: 19.3 },
      },
      date: { fieldResearch: '08/06/2020', analysis: '08/06/2020' },
    },
    {
      id: '1trn0yetaebjlwabipl6',
      name: 'Igreja Nova Jerusalém',
      address: { street: 'Rua Marechal Floriano Peixoto', number: 544, region: 'Vila Marcondes' },
      location: [-22.119008958183883, -51.38096450371862],
      images: {
        first: { path: `/churches/vl-marcondes_2a.jpeg` },
      },
      schedule: {
        sunday: { hour: 19 },
        thursday: { hour: 20 },
      },
      date: { fieldResearch: '08/06/2020', analysis: '08/06/2020' },
    },
    {
      id: 'gt7lh9v2214upufooz13',
      name: 'Igreja Evangélica Avivamento Bíblico',
      address: { street: 'Avenida Brasil', number: 35, region: 'Centro' },
      location: [-22.11864418095041, -51.38131754235834],
      images: {
        first: {
          path: `/churches/centro_1a.jpeg`,
          caption: `OBS.: Devido à problemas com as imagens originais da fachada, a Igreja está
           atualizada incorretamente, sendo que agora é a IGREJA BATISTA LAGOINHA que utiliza o prédio.`
        },
        second: { path: `/images/centro_1b.jpeg`, caption: 'Estacionamento' },
      },
      schedule: {
        sunday: [
          { hour: 9, title: '(Oficina de Vida) “Conheça o significado e proposito de vida”' },
          { hour: 19, title: '(Celebração da Família) “Família um valor a ser preservado” ' },
        ],
        thursday: { hour: 20, title: '(Noite da Solução) “Há solução e esperança para você” ' },
      },
      date: { fieldResearch: '08/06/2020', analysis: '08/06/2020' },
    },
    {
      id: 'xfpk9xycwz9gv4vm4kj3',
      name: 'Igreja Nova Vida Firmada em Cristo',
      address: { street: 'Rua Raposo Tavares', number: 40, region: 'Vila Tazitsu' },
      location: [-22.107756871680987, -51.393375058297735],
      images: {
        first: { path: `/churches/vl-tazitsu_1a.jpeg` },
      },
      schedule: {
        sunday: { hour: 19, title: 'Culto da Família' },
        tuesday: { hour: 20, title: 'Oração' },
        thursday: { hour: 19.3, title: 'Cura e Libertação' },
      },
      date: { fieldResearch: '08/06/2020', analysis: '08/06/2020' },
    },
    {
      id: 'q2svdv3zb9p4lgdlx7md',
      name: 'Igreja Assembleia de Deus Ministério Vivendo em União',
      address: { street: 'Rua Pastor Jorge', number: 890, region: 'Jardim Bongiovani' },
      location: [-22.136306654839426, -51.4025304809446],
      images: {
        first: { path: `/churches/jd-bongiovani_1a.jpeg` },
      },
      schedule: {
        sunday: { hour: 19.15 },
        wednesday: { hour: 19.3 },
        friday: { hour: 19.3 },
      },
      date: { fieldResearch: '08/06/2020', analysis: '08/06/2020' },
    },
  ],
};

export default churchesIndex;
