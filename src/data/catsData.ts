import { Kitten, BreedInfo, Litter, Testimonial, FAQItem, SiteSettings } from '../types';

export const KITTENS_DATA: Kitten[] = [
  {
    id: "aswad-maine-coon",
    name: "Aswad",
    pedigreeName: "Aswad de Gracia Divina (ID: GE001)",
    breed: "Maine Coon",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 10,
    colorManto: "Maine Coon Estándar Oficial de Raza",
    eyeColor: "Verde Esmeralda",
    status: 'Disponible',
    price: '600 €',
    featured: true,
    images: [
      "/photos/aswad-En47OetX.jpg"
    ],
    description: "Aswad es un gatito de pelaje negro azabache y mirada dorada. Tranquilo y seguro de sí mismo, le encanta descansar sobre mantas suaves y observar todo lo que ocurre a su alrededor. Un pequeño caballero con mucha presencia.",
    temperament: ["Afectuoso","Juguetón","Sociable con niños","Criado en familia"],
    sire: {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke"
},
    dam: {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "benny-maine-coon",
    name: "Benny",
    pedigreeName: "Benny de Gracia Divina (ID: GE002)",
    breed: "Maine Coon",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 11,
    colorManto: "Maine Coon Estándar Oficial de Raza",
    eyeColor: "Verde Esmeralda",
    status: 'Disponible',
    price: '600 €',
    featured: true,
    images: [
      "/photos/benny-DMYmKlDG.jpg"
    ],
    description: "Benny luce un precioso pelaje blanco y esponjoso, digno de un auténtico Maine Coon. Es sereno, paciente y muy cariñoso; disfruta sentándose junto a sus humanos y recibiendo caricias detrás de las orejas.",
    temperament: ["Tranquilo","Muy mimoso","Dócil","Acostumbrado al hogar"],
    sire: {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke"
},
    dam: {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "jarvis-maine-coon",
    name: "Jarvis",
    pedigreeName: "Jarvis de Gracia Divina (ID: GE003)",
    breed: "Maine Coon",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 12,
    colorManto: "Maine Coon Estándar Oficial de Raza",
    eyeColor: "Verde Esmeralda",
    status: 'Disponible',
    price: '600 €',
    featured: true,
    images: [
      "/photos/jarvis-CX7S9FRG.jpg"
    ],
    description: "Jarvis tiene un pelaje ahumado espectacular y los típicos pinceles en las orejas. Es inteligente, curioso y muy atento, siempre dispuesto a investigar cada rincón de la casa.",
    temperament: ["Curioso","Inteligente","Noble","Compañero leal"],
    sire: {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke"
},
    dam: {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "krump-maine-coon",
    name: "Krump",
    pedigreeName: "Krump de Gracia Divina (ID: GE004)",
    breed: "Maine Coon",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 13,
    colorManto: "Maine Coon Estándar Oficial de Raza",
    eyeColor: "Verde Esmeralda",
    status: 'Disponible',
    price: '600 €',
    featured: true,
    images: [
      "/photos/krump-Dy1y7Px5.jpg"
    ],
    description: "Krump es un gatito atigrado con porte de pequeño león y patitas blancas. Juguetón y valiente, se lleva de maravilla con niños y con otras mascotas.",
    temperament: ["Dulce","Extremadamente cariñoso","Sociable","Equilibrado"],
    sire: {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke"
},
    dam: {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "lion-maine-coon",
    name: "Lion",
    pedigreeName: "Lion de Gracia Divina (ID: GE005)",
    breed: "Maine Coon",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 14,
    colorManto: "Maine Coon Estándar Oficial de Raza",
    eyeColor: "Verde Esmeralda",
    status: 'Disponible',
    price: '600 €',
    featured: true,
    images: [
      "/photos/lion-DFSPOmjQ.jpg"
    ],
    description: "Lion hace honor a su nombre: pelaje rojizo, melena incipiente y una mirada que enamora. Es sociable, activo y muy fiel, el típico \"perro de los gatos\".",
    temperament: ["Afectuoso","Juguetón","Sociable con niños","Criado en familia"],
    sire: {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke"
},
    dam: {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "monti-maine-coon",
    name: "Monti",
    pedigreeName: "Monti de Gracia Divina (ID: GE006)",
    breed: "Maine Coon",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 10,
    colorManto: "Maine Coon Estándar Oficial de Raza",
    eyeColor: "Verde Esmeralda",
    status: 'Disponible',
    price: '600 €',
    featured: true,
    images: [
      "/photos/monti-CsHpD3kh.jpg"
    ],
    description: "Monti combina un pelaje atigrado plateado con un pecho blanco impecable. Es alegre, parlanchín y le encanta jugar con plumas y pelotas.",
    temperament: ["Tranquilo","Muy mimoso","Dócil","Acostumbrado al hogar"],
    sire: {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke"
},
    dam: {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "ori-maine-coon",
    name: "Ori",
    pedigreeName: "Ori de Gracia Divina (ID: GE007)",
    breed: "Maine Coon",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 11,
    colorManto: "Maine Coon Estándar Oficial de Raza",
    eyeColor: "Verde Esmeralda",
    status: 'Disponible',
    price: '600 €',
    featured: true,
    images: [
      "/photos/ori-DL-feDzZ.jpg"
    ],
    description: "Ori es una gatita elegante de pelaje plateado atigrado y cola frondosa. Dulce y observadora, adora los rascadores altos y las siestas al sol.",
    temperament: ["Curioso","Inteligente","Noble","Compañero leal"],
    sire: {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke"
},
    dam: {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "romeo-maine-coon",
    name: "Romeo",
    pedigreeName: "Romeo de Gracia Divina (ID: GE008)",
    breed: "Maine Coon",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 12,
    colorManto: "Maine Coon Estándar Oficial de Raza",
    eyeColor: "Verde Esmeralda",
    status: 'Disponible',
    price: '600 €',
    featured: true,
    images: [
      "/photos/romeo-D0jFAAXt.jpg"
    ],
    description: "Romeo es un gatito blanco de ojos claros, orejas largas y porte majestuoso. Cariñoso y tranquilo, es el compañero ideal para un hogar sereno.",
    temperament: ["Dulce","Extremadamente cariñoso","Sociable","Equilibrado"],
    sire: {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke"
},
    dam: {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "stefi-maine-coon",
    name: "Stefi",
    pedigreeName: "Stefi de Gracia Divina (ID: GE009)",
    breed: "Maine Coon",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 13,
    colorManto: "Maine Coon Estándar Oficial de Raza",
    eyeColor: "Verde Esmeralda",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/stefi-BZtomXzP.jpg"
    ],
    description: "Stefi es una gatita de pelaje rojo y blanco con una expresión dulcísima. Es muy mimosa, adora el regazo y ronronea en cuanto la coges en brazos.",
    temperament: ["Afectuoso","Juguetón","Sociable con niños","Criado en familia"],
    sire: {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke"
},
    dam: {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "yola-maine-coon",
    name: "Yola",
    pedigreeName: "Yola de Gracia Divina (ID: GE010)",
    breed: "Maine Coon",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 14,
    colorManto: "Maine Coon Estándar Oficial de Raza",
    eyeColor: "Verde Esmeralda",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/yola-Cb_YdAZz.jpg"
    ],
    description: "Yola es una gatita atigrada marrón con pinceles en las orejas y un carácter encantador. Juguetona por la mañana y mimosa por la noche, se adapta a cualquier familia.",
    temperament: ["Tranquilo","Muy mimoso","Dócil","Acostumbrado al hogar"],
    sire: {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke"
},
    dam: {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "bear-bengali",
    name: "Bear",
    pedigreeName: "Bear de Gracia Divina (ID: GE011)",
    breed: "Bengalí",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 10,
    colorManto: "Bengalí Estándar Oficial de Raza",
    eyeColor: "Ámbar Dorado",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/bear-ngunYmJJ.jpg"
    ],
    description: "Bear luce un espectacular manto dorado con rosetas bien definidas, como un auténtico leopardo en miniatura. Es energético, inteligente y muy juguetón.",
    temperament: ["Curioso","Inteligente","Noble","Compañero leal"],
    sire: {
      "name": "G.Ch. Thorin Leopard Heritage",
      "title": "Gran Campeón TICA",
      "breed": "Bengalí",
      "color": "Brown Spotted Tabby"
},
    dam: {
      "name": "Ch. Sahara Amber Glow",
      "title": "Campeona Internacional",
      "breed": "Bengalí",
      "color": "Snow Bengal Seal Lynx"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "caro-bengali",
    name: "Caro",
    pedigreeName: "Caro de Gracia Divina (ID: GE012)",
    breed: "Bengalí",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 11,
    colorManto: "Bengalí Estándar Oficial de Raza",
    eyeColor: "Ámbar Dorado",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/caro-Bzw1RCZX.jpg"
    ],
    description: "Caro es una gatita de tonos claros con un marmoleado delicado. Es activa, divertida y muy comunicativa; le encanta jugar con el agua.",
    temperament: ["Dulce","Extremadamente cariñoso","Sociable","Equilibrado"],
    sire: {
      "name": "G.Ch. Thorin Leopard Heritage",
      "title": "Gran Campeón TICA",
      "breed": "Bengalí",
      "color": "Brown Spotted Tabby"
},
    dam: {
      "name": "Ch. Sahara Amber Glow",
      "title": "Campeona Internacional",
      "breed": "Bengalí",
      "color": "Snow Bengal Seal Lynx"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "cezar-bengali",
    name: "Cezar",
    pedigreeName: "Cezar de Gracia Divina (ID: GE013)",
    breed: "Bengalí",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 12,
    colorManto: "Bengalí Estándar Oficial de Raza",
    eyeColor: "Ámbar Dorado",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/cezar-BrsQqhQT.jpg"
    ],
    description: "Cezar tiene un pelaje dorado brillante con rosetas oscuras y una intensa mirada verde. Atlético y sociable, necesita juego diario y mucho cariño.",
    temperament: ["Afectuoso","Juguetón","Sociable con niños","Criado en familia"],
    sire: {
      "name": "G.Ch. Thorin Leopard Heritage",
      "title": "Gran Campeón TICA",
      "breed": "Bengalí",
      "color": "Brown Spotted Tabby"
},
    dam: {
      "name": "Ch. Sahara Amber Glow",
      "title": "Campeona Internacional",
      "breed": "Bengalí",
      "color": "Snow Bengal Seal Lynx"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "michu-bengali",
    name: "Michu",
    pedigreeName: "Michu de Gracia Divina (ID: GE014)",
    breed: "Bengalí",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 13,
    colorManto: "Bengalí Estándar Oficial de Raza",
    eyeColor: "Ámbar Dorado",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/michu-DIVrJ-Lj.jpg"
    ],
    description: "Michu es una gatita moteada de grandes ojos y orejas atentas. Traviesa y cariñosa, se convierte enseguida en la sombra de sus humanos.",
    temperament: ["Tranquilo","Muy mimoso","Dócil","Acostumbrado al hogar"],
    sire: {
      "name": "G.Ch. Thorin Leopard Heritage",
      "title": "Gran Campeón TICA",
      "breed": "Bengalí",
      "color": "Brown Spotted Tabby"
},
    dam: {
      "name": "Ch. Sahara Amber Glow",
      "title": "Campeona Internacional",
      "breed": "Bengalí",
      "color": "Snow Bengal Seal Lynx"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "snow-bengali",
    name: "Snow",
    pedigreeName: "Snow de Gracia Divina (ID: GE015)",
    breed: "Bengalí",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 14,
    colorManto: "Bengalí Estándar Oficial de Raza",
    eyeColor: "Ámbar Dorado",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/snow-CMsFLY-e.jpg"
    ],
    description: "Snow luce un elegante manto plateado marmoleado. Es tranquilo para ser un Bengalí, pero siempre está listo para una buena sesión de juego.",
    temperament: ["Curioso","Inteligente","Noble","Compañero leal"],
    sire: {
      "name": "G.Ch. Thorin Leopard Heritage",
      "title": "Gran Campeón TICA",
      "breed": "Bengalí",
      "color": "Brown Spotted Tabby"
},
    dam: {
      "name": "Ch. Sahara Amber Glow",
      "title": "Campeona Internacional",
      "breed": "Bengalí",
      "color": "Snow Bengal Seal Lynx"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "tyrion-bengali",
    name: "Tyrion",
    pedigreeName: "Tyrion de Gracia Divina (ID: GE016)",
    breed: "Bengalí",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 10,
    colorManto: "Bengalí Estándar Oficial de Raza",
    eyeColor: "Ámbar Dorado",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/tyrion-B1Z9EZVz.webp"
    ],
    description: "Tyrion es un gatito plateado de rayas marcadas y ojos verdes cautivadores. Listo, curioso y muy sociable, aprende trucos con facilidad.",
    temperament: ["Dulce","Extremadamente cariñoso","Sociable","Equilibrado"],
    sire: {
      "name": "G.Ch. Thorin Leopard Heritage",
      "title": "Gran Campeón TICA",
      "breed": "Bengalí",
      "color": "Brown Spotted Tabby"
},
    dam: {
      "name": "Ch. Sahara Amber Glow",
      "title": "Campeona Internacional",
      "breed": "Bengalí",
      "color": "Snow Bengal Seal Lynx"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "galaxy-siberiano",
    name: "Galaxy",
    pedigreeName: "Galaxy de Gracia Divina (ID: GE017)",
    breed: "Siberiano",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 11,
    colorManto: "Siberiano Estándar Oficial de Raza",
    eyeColor: "Azul Zafiro / Verde",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/galaxy-DhnWnkmZ.jpg"
    ],
    description: "Galaxy es un gatito de pelaje semilargo en tonos crema con unos preciosos ojos azules. Tranquilo y afectuoso, disfruta de los mimos y de las siestas en la cama.",
    temperament: ["Afectuoso","Juguetón","Sociable con niños","Criado en familia"],
    sire: {
      "name": "World Ch. Boris Siberian Frost",
      "title": "Campeón Mundial WCF",
      "breed": "Siberiano",
      "color": "Neva Masquerade Blue Tabby"
},
    dam: {
      "name": "Ch. Taiga Winter Whisper",
      "title": "Campeona Nacional",
      "breed": "Siberiano",
      "color": "Silver Classic Torbie"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "jackie-siberiano",
    name: "Jackie",
    pedigreeName: "Jackie de Gracia Divina (ID: GE018)",
    breed: "Siberiano",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 12,
    colorManto: "Siberiano Estándar Oficial de Raza",
    eyeColor: "Azul Zafiro / Verde",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/jackie-B4k2ui5R.jpg"
    ],
    description: "Jackie es una gatita de pelaje blanco y gris azulado con unos ojos azules de ensueño. Elegante, dulce y muy tranquila.",
    temperament: ["Tranquilo","Muy mimoso","Dócil","Acostumbrado al hogar"],
    sire: {
      "name": "World Ch. Boris Siberian Frost",
      "title": "Campeón Mundial WCF",
      "breed": "Siberiano",
      "color": "Neva Masquerade Blue Tabby"
},
    dam: {
      "name": "Ch. Taiga Winter Whisper",
      "title": "Campeona Nacional",
      "breed": "Siberiano",
      "color": "Silver Classic Torbie"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "luna-siberiano",
    name: "Luna",
    pedigreeName: "Luna de Gracia Divina (ID: GE019)",
    breed: "Siberiano",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 13,
    colorManto: "Siberiano Estándar Oficial de Raza",
    eyeColor: "Azul Zafiro / Verde",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/luna-DAByMT34.jpg"
    ],
    description: "Luna es una gatita atigrada de pelaje suave y cálido. Juguetona y valiente, le encanta subir a los rascadores y vigilar la casa desde lo alto.",
    temperament: ["Curioso","Inteligente","Noble","Compañero leal"],
    sire: {
      "name": "World Ch. Boris Siberian Frost",
      "title": "Campeón Mundial WCF",
      "breed": "Siberiano",
      "color": "Neva Masquerade Blue Tabby"
},
    dam: {
      "name": "Ch. Taiga Winter Whisper",
      "title": "Campeona Nacional",
      "breed": "Siberiano",
      "color": "Silver Classic Torbie"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "pierogi-siberiano",
    name: "Pierogi",
    pedigreeName: "Pierogi de Gracia Divina (ID: GE020)",
    breed: "Siberiano",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 14,
    colorManto: "Siberiano Estándar Oficial de Raza",
    eyeColor: "Azul Zafiro / Verde",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/pierogi-DorihDDm.jpg"
    ],
    description: "Pierogi es un pequeño peluche atigrado de mofletes redondos y pelaje espeso. Simpático, glotón y muy sociable con todo el mundo.",
    temperament: ["Dulce","Extremadamente cariñoso","Sociable","Equilibrado"],
    sire: {
      "name": "World Ch. Boris Siberian Frost",
      "title": "Campeón Mundial WCF",
      "breed": "Siberiano",
      "color": "Neva Masquerade Blue Tabby"
},
    dam: {
      "name": "Ch. Taiga Winter Whisper",
      "title": "Campeona Nacional",
      "breed": "Siberiano",
      "color": "Silver Classic Torbie"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "rufina-siberiano",
    name: "Rufina",
    pedigreeName: "Rufina de Gracia Divina (ID: GE021)",
    breed: "Siberiano",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 10,
    colorManto: "Siberiano Estándar Oficial de Raza",
    eyeColor: "Azul Zafiro / Verde",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/rufina-DFIB4UX4.jpg"
    ],
    description: "Rufina es una gatita de pelaje crema esponjoso y ojos azul cielo. Dulce, curiosa y muy mimosa con toda la familia.",
    temperament: ["Afectuoso","Juguetón","Sociable con niños","Criado en familia"],
    sire: {
      "name": "World Ch. Boris Siberian Frost",
      "title": "Campeón Mundial WCF",
      "breed": "Siberiano",
      "color": "Neva Masquerade Blue Tabby"
},
    dam: {
      "name": "Ch. Taiga Winter Whisper",
      "title": "Campeona Nacional",
      "breed": "Siberiano",
      "color": "Silver Classic Torbie"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "bella-siberiano",
    name: "Bella",
    pedigreeName: "Bella de Gracia Divina (ID: GE022)",
    breed: "Siberiano",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 11,
    colorManto: "Siberiano Estándar Oficial de Raza",
    eyeColor: "Azul Zafiro / Verde",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/bella-CQcdKxbd.jpg"
    ],
    description: "Bella es una gatita siberiana atigrada de pelaje largo y esponjoso, con orejas con pinceles y unos ojos verdes muy expresivos. Curiosa, juguetona y cariñosa, se lleva genial con niños.",
    temperament: ["Tranquilo","Muy mimoso","Dócil","Acostumbrado al hogar"],
    sire: {
      "name": "World Ch. Boris Siberian Frost",
      "title": "Campeón Mundial WCF",
      "breed": "Siberiano",
      "color": "Neva Masquerade Blue Tabby"
},
    dam: {
      "name": "Ch. Taiga Winter Whisper",
      "title": "Campeona Nacional",
      "breed": "Siberiano",
      "color": "Silver Classic Torbie"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "alfie-ragdoll",
    name: "Alfie",
    pedigreeName: "Alfie de Gracia Divina (ID: GE023)",
    breed: "Ragdoll",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 12,
    colorManto: "Ragdoll Estándar Oficial de Raza",
    eyeColor: "Azul Zafiro Profundo",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/alfie-DT3d13Jo.jpg"
    ],
    description: "Alfie es una gatita de pelaje claro con puntos suaves y ojos azules. Tranquila y dulce, adora jugar con varitas y plumas.",
    temperament: ["Curioso","Inteligente","Noble","Compañero leal"],
    sire: {
      "name": "W.Ch. Cloud Mirage of Avalon",
      "title": "Campeón Mundial WCF",
      "breed": "Ragdoll",
      "color": "Seal Bicolor"
},
    dam: {
      "name": "Ch. Bellissima Fiorella",
      "title": "Campeona Internacional",
      "breed": "Ragdoll",
      "color": "Blue Point Mitted"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "norman-ragdoll",
    name: "Norman",
    pedigreeName: "Norman de Gracia Divina (ID: GE024)",
    breed: "Ragdoll",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 13,
    colorManto: "Ragdoll Estándar Oficial de Raza",
    eyeColor: "Azul Zafiro Profundo",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/norman-DKKWwGPS.jpg"
    ],
    description: "Norman es un gatito de pelaje blanco nieve y ojos azules intensos. Dócil y cariñoso, se relaja por completo en cuanto lo coges en brazos.",
    temperament: ["Dulce","Extremadamente cariñoso","Sociable","Equilibrado"],
    sire: {
      "name": "W.Ch. Cloud Mirage of Avalon",
      "title": "Campeón Mundial WCF",
      "breed": "Ragdoll",
      "color": "Seal Bicolor"
},
    dam: {
      "name": "Ch. Bellissima Fiorella",
      "title": "Campeona Internacional",
      "breed": "Ragdoll",
      "color": "Blue Point Mitted"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "pan-ragdoll",
    name: "Pan",
    pedigreeName: "Pan de Gracia Divina (ID: GE025)",
    breed: "Ragdoll",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 14,
    colorManto: "Ragdoll Estándar Oficial de Raza",
    eyeColor: "Azul Zafiro Profundo",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/pan-Ckny2-_E.jpg"
    ],
    description: "Pan es un gatito de pelaje sedoso con máscara y orejas más oscuras. Mimoso y tranquilo, le encanta dormir acurrucado junto a sus humanos.",
    temperament: ["Afectuoso","Juguetón","Sociable con niños","Criado en familia"],
    sire: {
      "name": "W.Ch. Cloud Mirage of Avalon",
      "title": "Campeón Mundial WCF",
      "breed": "Ragdoll",
      "color": "Seal Bicolor"
},
    dam: {
      "name": "Ch. Bellissima Fiorella",
      "title": "Campeona Internacional",
      "breed": "Ragdoll",
      "color": "Blue Point Mitted"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "saga-ragdoll",
    name: "Saga",
    pedigreeName: "Saga de Gracia Divina (ID: GE026)",
    breed: "Ragdoll",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 10,
    colorManto: "Ragdoll Estándar Oficial de Raza",
    eyeColor: "Azul Zafiro Profundo",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/saga-Dkfun9_6.jpg"
    ],
    description: "Saga es una gatita blue point de ojos azules y pelaje semilargo. Serena y elegante, es perfecta para familias con niños.",
    temperament: ["Tranquilo","Muy mimoso","Dócil","Acostumbrado al hogar"],
    sire: {
      "name": "W.Ch. Cloud Mirage of Avalon",
      "title": "Campeón Mundial WCF",
      "breed": "Ragdoll",
      "color": "Seal Bicolor"
},
    dam: {
      "name": "Ch. Bellissima Fiorella",
      "title": "Campeona Internacional",
      "breed": "Ragdoll",
      "color": "Blue Point Mitted"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "willow-ragdoll",
    name: "Willow",
    pedigreeName: "Willow de Gracia Divina (ID: GE027)",
    breed: "Ragdoll",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 11,
    colorManto: "Ragdoll Estándar Oficial de Raza",
    eyeColor: "Azul Zafiro Profundo",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/willow-DPEUbROo.jpg"
    ],
    description: "Willow es un gatito de pelaje claro con puntos suaves y mirada azul. Es muy sociable y le encanta seguir a sus humanos por toda la casa.",
    temperament: ["Curioso","Inteligente","Noble","Compañero leal"],
    sire: {
      "name": "W.Ch. Cloud Mirage of Avalon",
      "title": "Campeón Mundial WCF",
      "breed": "Ragdoll",
      "color": "Seal Bicolor"
},
    dam: {
      "name": "Ch. Bellissima Fiorella",
      "title": "Campeona Internacional",
      "breed": "Ragdoll",
      "color": "Blue Point Mitted"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "dana-british-shorthair",
    name: "Dana",
    pedigreeName: "Dana de Gracia Divina (ID: GE028)",
    breed: "British Shorthair",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 12,
    colorManto: "British Shorthair Estándar Oficial de Raza",
    eyeColor: "Cobre Brillante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/dana-eevqkUX5.jpg"
    ],
    description: "Dana es una gatita British Shorthair de color canela, un tono cálido y poco común, con unos ojos cobrizos enormes. Dulce, tranquila y muy cariñosa, le encanta vigilar el mundo desde la ventana.",
    temperament: ["Dulce","Extremadamente cariñoso","Sociable","Equilibrado"],
    sire: {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional",
      "breed": "British Shorthair",
      "color": "Blue Solid"
},
    dam: {
      "name": "Lady Penelope Velvet Rose",
      "title": "Campeona de Belleza",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "sisi-british-shorthair",
    name: "Sisi",
    pedigreeName: "Sisi de Gracia Divina (ID: GE029)",
    breed: "British Shorthair",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 13,
    colorManto: "British Shorthair Estándar Oficial de Raza",
    eyeColor: "Cobre Brillante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/sisi-BZa7HwKU.jpg"
    ],
    description: "Sisi es una gatita British Shorthair azul y blanca, con pechera blanca, patitas blancas y ojos color miel. Su carita redonda y su pelaje de peluche enamoran; es serena, sociable y muy mimosa.",
    temperament: ["Afectuoso","Juguetón","Sociable con niños","Criado en familia"],
    sire: {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional",
      "breed": "British Shorthair",
      "color": "Blue Solid"
},
    dam: {
      "name": "Lady Penelope Velvet Rose",
      "title": "Campeona de Belleza",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "aris-british-shorthair",
    name: "Aris",
    pedigreeName: "Aris de Gracia Divina (ID: GE030)",
    breed: "British Shorthair",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 14,
    colorManto: "British Shorthair Estándar Oficial de Raza",
    eyeColor: "Cobre Brillante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/aris-CRnJI5yL.jpg"
    ],
    description: "Aris es una gatita British Shorthair atigrada plateada, con un pelaje denso y aterciopelado y una cola anillada preciosa. Tranquila y curiosa, le encanta observarlo todo y acurrucarse en los lugares más cómodos de la casa.",
    temperament: ["Tranquilo","Muy mimoso","Dócil","Acostumbrado al hogar"],
    sire: {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional",
      "breed": "British Shorthair",
      "color": "Blue Solid"
},
    dam: {
      "name": "Lady Penelope Velvet Rose",
      "title": "Campeona de Belleza",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "ani-british-shorthair",
    name: "Ani",
    pedigreeName: "Ani de Gracia Divina (ID: GE031)",
    breed: "British Shorthair",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 10,
    colorManto: "British Shorthair Estándar Oficial de Raza",
    eyeColor: "Cobre Brillante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/ani-BfRiY8Td.jpg"
    ],
    description: "Ani es una gatita de pelaje crema aterciopelado y carita redonda. Tranquila, dulce y muy limpia, es una compañera encantadora.",
    temperament: ["Curioso","Inteligente","Noble","Compañero leal"],
    sire: {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional",
      "breed": "British Shorthair",
      "color": "Blue Solid"
},
    dam: {
      "name": "Lady Penelope Velvet Rose",
      "title": "Campeona de Belleza",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "freddie-british-shorthair",
    name: "Freddie",
    pedigreeName: "Freddie de Gracia Divina (ID: GE032)",
    breed: "British Shorthair",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 11,
    colorManto: "British Shorthair Estándar Oficial de Raza",
    eyeColor: "Cobre Brillante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/freddie-B1SgnCoi.jpg"
    ],
    description: "Freddie es un gatito blanco de ojos grandes y expresión tierna. Es calmado, afectuoso y le encanta observarlo todo desde el sofá.",
    temperament: ["Dulce","Extremadamente cariñoso","Sociable","Equilibrado"],
    sire: {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional",
      "breed": "British Shorthair",
      "color": "Blue Solid"
},
    dam: {
      "name": "Lady Penelope Velvet Rose",
      "title": "Campeona de Belleza",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "lilo-british-shorthair",
    name: "Lilo",
    pedigreeName: "Lilo de Gracia Divina (ID: GE033)",
    breed: "British Shorthair",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 12,
    colorManto: "British Shorthair Estándar Oficial de Raza",
    eyeColor: "Cobre Brillante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/lilo-CvmqhNcH.jpg"
    ],
    description: "Lilo luce el clásico color azul británico y unos ojos cobrizos preciosos. Tranquilo, independiente y muy cariñoso a su manera.",
    temperament: ["Afectuoso","Juguetón","Sociable con niños","Criado en familia"],
    sire: {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional",
      "breed": "British Shorthair",
      "color": "Blue Solid"
},
    dam: {
      "name": "Lady Penelope Velvet Rose",
      "title": "Campeona de Belleza",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "moose-british-shorthair",
    name: "Moose",
    pedigreeName: "Moose de Gracia Divina (ID: GE034)",
    breed: "British Shorthair",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 13,
    colorManto: "British Shorthair Estándar Oficial de Raza",
    eyeColor: "Cobre Brillante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/moose-Clv489NG.jpg"
    ],
    description: "Moose tiene un precioso pelaje chocolate, poco común, y ojos ámbar. Es un osito de peluche tranquilo y muy sociable.",
    temperament: ["Tranquilo","Muy mimoso","Dócil","Acostumbrado al hogar"],
    sire: {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional",
      "breed": "British Shorthair",
      "color": "Blue Solid"
},
    dam: {
      "name": "Lady Penelope Velvet Rose",
      "title": "Campeona de Belleza",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "teddy-british-shorthair",
    name: "Teddy",
    pedigreeName: "Teddy de Gracia Divina (ID: GE035)",
    breed: "British Shorthair",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 14,
    colorManto: "British Shorthair Estándar Oficial de Raza",
    eyeColor: "Cobre Brillante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/teddy-DqzhuZqD.jpg"
    ],
    description: "Teddy es un gatito gris azulado de pelaje denso, tan suave como un peluche. Curioso y juguetón, se lleva bien con todo el mundo.",
    temperament: ["Curioso","Inteligente","Noble","Compañero leal"],
    sire: {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional",
      "breed": "British Shorthair",
      "color": "Blue Solid"
},
    dam: {
      "name": "Lady Penelope Velvet Rose",
      "title": "Campeona de Belleza",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "benise-persa",
    name: "Benise",
    pedigreeName: "Benise de Gracia Divina (ID: GE036)",
    breed: "Persa",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 10,
    colorManto: "Persa Estándar Oficial de Raza",
    eyeColor: "Cobre / Aguamarina",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/benise-D_5fyX-A.jpg"
    ],
    description: "Benise es una gatita persa de pelaje rojo, largo y abundante. Tranquila y majestuosa, disfruta de un hogar sereno y de los mimos diarios.",
    temperament: ["Dulce","Extremadamente cariñoso","Sociable","Equilibrado"],
    sire: {
      "name": "Ch. Lord Balthazar of Snow",
      "title": "Campeón Internacional FIFe",
      "breed": "Persa",
      "color": "Pure White Solid"
},
    dam: {
      "name": "Duchess Fiona Silk Whisper",
      "title": "Campeona Nacional",
      "breed": "Persa",
      "color": "Chinchilla Silver"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "gus-persa",
    name: "Gus",
    pedigreeName: "Gus de Gracia Divina (ID: GE037)",
    breed: "Persa",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 11,
    colorManto: "Persa Estándar Oficial de Raza",
    eyeColor: "Cobre / Aguamarina",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/gus-BN3dxQOU.jpg"
    ],
    description: "Gus es un gatito de pelaje rojo y blanco con la carita redondeada típica de la raza. Dulce, sosegado y muy mimoso.",
    temperament: ["Afectuoso","Juguetón","Sociable con niños","Criado en familia"],
    sire: {
      "name": "Ch. Lord Balthazar of Snow",
      "title": "Campeón Internacional FIFe",
      "breed": "Persa",
      "color": "Pure White Solid"
},
    dam: {
      "name": "Duchess Fiona Silk Whisper",
      "title": "Campeona Nacional",
      "breed": "Persa",
      "color": "Chinchilla Silver"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "pickle-persa",
    name: "Pickle",
    pedigreeName: "Pickle de Gracia Divina (ID: GE038)",
    breed: "Persa",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 12,
    colorManto: "Persa Estándar Oficial de Raza",
    eyeColor: "Cobre / Aguamarina",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/pickle-CuGQQESj.jpg"
    ],
    description: "Pickle es una gatita blanca con manchas negras y una carita chata adorable. Tiene una personalidad simpática y tranquila.",
    temperament: ["Tranquilo","Muy mimoso","Dócil","Acostumbrado al hogar"],
    sire: {
      "name": "Ch. Lord Balthazar of Snow",
      "title": "Campeón Internacional FIFe",
      "breed": "Persa",
      "color": "Pure White Solid"
},
    dam: {
      "name": "Duchess Fiona Silk Whisper",
      "title": "Campeona Nacional",
      "breed": "Persa",
      "color": "Chinchilla Silver"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "ralph-persa",
    name: "Ralph",
    pedigreeName: "Ralph de Gracia Divina (ID: GE039)",
    breed: "Persa",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 13,
    colorManto: "Persa Estándar Oficial de Raza",
    eyeColor: "Cobre / Aguamarina",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/ralph-7cG_QflY.jpg"
    ],
    description: "Ralph es un gatito de pelaje largo gris con reflejos crema. Calmado y cariñoso, es ideal para la vida en piso.",
    temperament: ["Curioso","Inteligente","Noble","Compañero leal"],
    sire: {
      "name": "Ch. Lord Balthazar of Snow",
      "title": "Campeón Internacional FIFe",
      "breed": "Persa",
      "color": "Pure White Solid"
},
    dam: {
      "name": "Duchess Fiona Silk Whisper",
      "title": "Campeona Nacional",
      "breed": "Persa",
      "color": "Chinchilla Silver"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "tiago-persa",
    name: "Tiago",
    pedigreeName: "Tiago de Gracia Divina (ID: GE040)",
    breed: "Persa",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 14,
    colorManto: "Persa Estándar Oficial de Raza",
    eyeColor: "Cobre / Aguamarina",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/tiago-BnN5kHMR.jpg"
    ],
    description: "Tiago es un gatito de pelaje largo y claro con tonos dorados y ojos verdes. Elegante, tranquilo y muy dulce.",
    temperament: ["Dulce","Extremadamente cariñoso","Sociable","Equilibrado"],
    sire: {
      "name": "Ch. Lord Balthazar of Snow",
      "title": "Campeón Internacional FIFe",
      "breed": "Persa",
      "color": "Pure White Solid"
},
    dam: {
      "name": "Duchess Fiona Silk Whisper",
      "title": "Campeona Nacional",
      "breed": "Persa",
      "color": "Chinchilla Silver"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "dobby-sphynx",
    name: "Dobby",
    pedigreeName: "Dobby de Gracia Divina (ID: GE041)",
    breed: "Sphynx",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 10,
    colorManto: "Sphynx Estándar Oficial de Raza",
    eyeColor: "Azul Zafiro Brillante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/dobby-IgEkiQXu.jpg"
    ],
    description: "Dobby es un Sphynx rosado de grandes orejas y ojos azules. Cariñoso y juguetón, siempre busca el calor de sus humanos.",
    temperament: ["Afectuoso","Juguetón","Sociable con niños","Criado en familia"],
    sire: {
      "name": "Ch. Ramses el Grande de Tebas",
      "title": "Campeón Nacional TICA",
      "breed": "Sphynx",
      "color": "Cream Mink Point"
},
    dam: {
      "name": "Nefertiti Pearl of Egypt",
      "title": "Excelente 1ª WCF",
      "breed": "Sphynx",
      "color": "Blue Solid Velvet"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "fig-sphynx",
    name: "Fig",
    pedigreeName: "Fig de Gracia Divina (ID: GE042)",
    breed: "Sphynx",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 11,
    colorManto: "Sphynx Estándar Oficial de Raza",
    eyeColor: "Azul Zafiro Brillante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/fig-EgKue146.jpg"
    ],
    description: "Fig es un gatito Sphynx de piel suave y arrugadita. Extrovertido y curioso, le encanta ser el centro de atención.",
    temperament: ["Tranquilo","Muy mimoso","Dócil","Acostumbrado al hogar"],
    sire: {
      "name": "Ch. Ramses el Grande de Tebas",
      "title": "Campeón Nacional TICA",
      "breed": "Sphynx",
      "color": "Cream Mink Point"
},
    dam: {
      "name": "Nefertiti Pearl of Egypt",
      "title": "Excelente 1ª WCF",
      "breed": "Sphynx",
      "color": "Blue Solid Velvet"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "nalita-sphynx",
    name: "Nalita",
    pedigreeName: "Nalita de Gracia Divina (ID: GE043)",
    breed: "Sphynx",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 12,
    colorManto: "Sphynx Estándar Oficial de Raza",
    eyeColor: "Azul Zafiro Brillante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/nalita-BcyUmxzV.jpg"
    ],
    description: "Nalita es una gatita Sphynx de piel gris azulada y ojos dorados. Dulce, sociable y muy apegada a sus humanos.",
    temperament: ["Curioso","Inteligente","Noble","Compañero leal"],
    sire: {
      "name": "Ch. Ramses el Grande de Tebas",
      "title": "Campeón Nacional TICA",
      "breed": "Sphynx",
      "color": "Cream Mink Point"
},
    dam: {
      "name": "Nefertiti Pearl of Egypt",
      "title": "Excelente 1ª WCF",
      "breed": "Sphynx",
      "color": "Blue Solid Velvet"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "olivia-sphynx",
    name: "Olivia",
    pedigreeName: "Olivia de Gracia Divina (ID: GE044)",
    breed: "Sphynx",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 13,
    colorManto: "Sphynx Estándar Oficial de Raza",
    eyeColor: "Azul Zafiro Brillante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/olivia-OwZuSTa-.jpg"
    ],
    description: "Olivia es una Sphynx de piel rosada y gran personalidad. Le encanta ir abrigadita y dormir bajo las mantas.",
    temperament: ["Dulce","Extremadamente cariñoso","Sociable","Equilibrado"],
    sire: {
      "name": "Ch. Ramses el Grande de Tebas",
      "title": "Campeón Nacional TICA",
      "breed": "Sphynx",
      "color": "Cream Mink Point"
},
    dam: {
      "name": "Nefertiti Pearl of Egypt",
      "title": "Excelente 1ª WCF",
      "breed": "Sphynx",
      "color": "Blue Solid Velvet"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "oscar-sphynx",
    name: "Oscar",
    pedigreeName: "Oscar de Gracia Divina (ID: GE045)",
    breed: "Sphynx",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 14,
    colorManto: "Sphynx Estándar Oficial de Raza",
    eyeColor: "Azul Zafiro Brillante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/oscar-BFhuhZo2.jpg"
    ],
    description: "Oscar es un Sphynx de piel lavanda y orejas enormes. Juguetón, divertido y tremendamente cariñoso.",
    temperament: ["Afectuoso","Juguetón","Sociable con niños","Criado en familia"],
    sire: {
      "name": "Ch. Ramses el Grande de Tebas",
      "title": "Campeón Nacional TICA",
      "breed": "Sphynx",
      "color": "Cream Mink Point"
},
    dam: {
      "name": "Nefertiti Pearl of Egypt",
      "title": "Excelente 1ª WCF",
      "breed": "Sphynx",
      "color": "Blue Solid Velvet"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "grace-azul-ruso",
    name: "Grace",
    pedigreeName: "Grace de Gracia Divina (ID: GE046)",
    breed: "Azul Ruso",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 10,
    colorManto: "Azul Ruso Estándar Oficial de Raza",
    eyeColor: "Verde Esmeralda Radiante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/grace-DKHjgcjD.jpg"
    ],
    description: "Grace es una gatita Azul Ruso de ojos verde esmeralda. Elegante, algo reservada al principio y profundamente leal.",
    temperament: ["Tranquilo","Muy mimoso","Dócil","Acostumbrado al hogar"],
    sire: {
      "name": "G.Ch. Nicholas Silver Emperor",
      "title": "Gran Campeón ASFE/FIFe",
      "breed": "Azul Ruso",
      "color": "Blue Shimmer Solid"
},
    dam: {
      "name": "Lady Anastasia Emerald Star",
      "title": "Campeona Internacional",
      "breed": "Azul Ruso",
      "color": "Russian Blue"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "lunna-azul-ruso",
    name: "Lunna",
    pedigreeName: "Lunna de Gracia Divina (ID: GE047)",
    breed: "Azul Ruso",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 11,
    colorManto: "Azul Ruso Estándar Oficial de Raza",
    eyeColor: "Verde Esmeralda Radiante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/lunna-jJBFDrZh.jpg"
    ],
    description: "Lunna tiene un pelaje azul plateado y una mirada verde muy expresiva. Tranquila, limpia y cariñosa.",
    temperament: ["Curioso","Inteligente","Noble","Compañero leal"],
    sire: {
      "name": "G.Ch. Nicholas Silver Emperor",
      "title": "Gran Campeón ASFE/FIFe",
      "breed": "Azul Ruso",
      "color": "Blue Shimmer Solid"
},
    dam: {
      "name": "Lady Anastasia Emerald Star",
      "title": "Campeona Internacional",
      "breed": "Azul Ruso",
      "color": "Russian Blue"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "merlin-azul-ruso",
    name: "Merlin",
    pedigreeName: "Merlin de Gracia Divina (ID: GE048)",
    breed: "Azul Ruso",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 12,
    colorManto: "Azul Ruso Estándar Oficial de Raza",
    eyeColor: "Verde Esmeralda Radiante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/merlin-DcUMtdgP.jpg"
    ],
    description: "Merlin es un gatito de pelaje azul claro y brillante. Inteligente, curioso y muy juguetón.",
    temperament: ["Dulce","Extremadamente cariñoso","Sociable","Equilibrado"],
    sire: {
      "name": "G.Ch. Nicholas Silver Emperor",
      "title": "Gran Campeón ASFE/FIFe",
      "breed": "Azul Ruso",
      "color": "Blue Shimmer Solid"
},
    dam: {
      "name": "Lady Anastasia Emerald Star",
      "title": "Campeona Internacional",
      "breed": "Azul Ruso",
      "color": "Russian Blue"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "sterling-azul-ruso",
    name: "Sterling",
    pedigreeName: "Sterling de Gracia Divina (ID: GE049)",
    breed: "Azul Ruso",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 13,
    colorManto: "Azul Ruso Estándar Oficial de Raza",
    eyeColor: "Verde Esmeralda Radiante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/sterling-pkpiaEyI.webp"
    ],
    description: "Sterling es un gatito gris plata de ojos grandes y orejas atentas. Sociable y dulce, se adapta enseguida a su nuevo hogar.",
    temperament: ["Afectuoso","Juguetón","Sociable con niños","Criado en familia"],
    sire: {
      "name": "G.Ch. Nicholas Silver Emperor",
      "title": "Gran Campeón ASFE/FIFe",
      "breed": "Azul Ruso",
      "color": "Blue Shimmer Solid"
},
    dam: {
      "name": "Lady Anastasia Emerald Star",
      "title": "Campeona Internacional",
      "breed": "Azul Ruso",
      "color": "Russian Blue"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "zeke-azul-ruso",
    name: "Zeke",
    pedigreeName: "Zeke de Gracia Divina (ID: GE050)",
    breed: "Azul Ruso",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 14,
    colorManto: "Azul Ruso Estándar Oficial de Raza",
    eyeColor: "Verde Esmeralda Radiante",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/zeke-iqpLOsab.jpg"
    ],
    description: "Zeke luce un pelaje azul denso y unos ojos verdes preciosos. Tranquilo y afectuoso, es perfecto para la vida en piso.",
    temperament: ["Tranquilo","Muy mimoso","Dócil","Acostumbrado al hogar"],
    sire: {
      "name": "G.Ch. Nicholas Silver Emperor",
      "title": "Gran Campeón ASFE/FIFe",
      "breed": "Azul Ruso",
      "color": "Blue Shimmer Solid"
},
    dam: {
      "name": "Lady Anastasia Emerald Star",
      "title": "Campeona Internacional",
      "breed": "Azul Ruso",
      "color": "Russian Blue"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "leo-siames",
    name: "Leo",
    pedigreeName: "Leo de Gracia Divina (ID: GE051)",
    breed: "Siamés",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 10,
    colorManto: "Siamés Estándar Oficial de Raza",
    eyeColor: "Azul Índigo Profundo",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/leo-DFLBAktV.jpg"
    ],
    description: "Leo es un siamés seal point de ojos azules intensos. Hablador, cariñoso y muy apegado a su familia.",
    temperament: ["Curioso","Inteligente","Noble","Compañero leal"],
    sire: {
      "name": "Ch. Lotus Siam Star",
      "title": "Campeón Internacional WCF",
      "breed": "Siamés",
      "color": "Seal Point"
},
    dam: {
      "name": "Princess Jasmine of Bangkok",
      "title": "Campeona Nacional",
      "breed": "Siamés",
      "color": "Chocolate Point"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "molly-siames",
    name: "Molly",
    pedigreeName: "Molly de Gracia Divina (ID: GE052)",
    breed: "Siamés",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 11,
    colorManto: "Siamés Estándar Oficial de Raza",
    eyeColor: "Azul Índigo Profundo",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/molly-B8oj-dvm.jpg"
    ],
    description: "Molly es una gatita siamesa de pelaje crema con puntos oscuros. Elegante, curiosa y muy comunicativa.",
    temperament: ["Dulce","Extremadamente cariñoso","Sociable","Equilibrado"],
    sire: {
      "name": "Ch. Lotus Siam Star",
      "title": "Campeón Internacional WCF",
      "breed": "Siamés",
      "color": "Seal Point"
},
    dam: {
      "name": "Princess Jasmine of Bangkok",
      "title": "Campeona Nacional",
      "breed": "Siamés",
      "color": "Chocolate Point"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "rome-siames",
    name: "Rome",
    pedigreeName: "Rome de Gracia Divina (ID: GE053)",
    breed: "Siamés",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 12,
    colorManto: "Siamés Estándar Oficial de Raza",
    eyeColor: "Azul Índigo Profundo",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/rome-NKpKboP-.jpg"
    ],
    description: "Rome es un siamés de mirada azul cautivadora. Inteligente, activo y siempre dispuesto a jugar.",
    temperament: ["Afectuoso","Juguetón","Sociable con niños","Criado en familia"],
    sire: {
      "name": "Ch. Lotus Siam Star",
      "title": "Campeón Internacional WCF",
      "breed": "Siamés",
      "color": "Seal Point"
},
    dam: {
      "name": "Princess Jasmine of Bangkok",
      "title": "Campeona Nacional",
      "breed": "Siamés",
      "color": "Chocolate Point"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "yoda-siames",
    name: "Yoda",
    pedigreeName: "Yoda de Gracia Divina (ID: GE054)",
    breed: "Siamés",
    gender: "Macho",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 13,
    colorManto: "Siamés Estándar Oficial de Raza",
    eyeColor: "Azul Índigo Profundo",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/yoda-CCYCQ7hV.jpg"
    ],
    description: "Yoda es un gatito siamés de orejas grandes y ojos azules. Travieso, simpático y muy sociable.",
    temperament: ["Tranquilo","Muy mimoso","Dócil","Acostumbrado al hogar"],
    sire: {
      "name": "Ch. Lotus Siam Star",
      "title": "Campeón Internacional WCF",
      "breed": "Siamés",
      "color": "Seal Point"
},
    dam: {
      "name": "Princess Jasmine of Bangkok",
      "title": "Campeona Nacional",
      "breed": "Siamés",
      "color": "Chocolate Point"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  },
  {
    id: "yuki-siames",
    name: "Yuki",
    pedigreeName: "Yuki de Gracia Divina (ID: GE055)",
    breed: "Siamés",
    gender: "Hembra",
    birthDate: '15 de Enero de 2026',
    ageWeeks: 14,
    colorManto: "Siamés Estándar Oficial de Raza",
    eyeColor: "Azul Índigo Profundo",
    status: 'Disponible',
    price: '600 €',
    featured: false,
    images: [
      "/photos/yuki-CXHnI5iH.jpg"
    ],
    description: "Yuki es una gatita de pelaje crema con máscara oscura y patitas blancas. Dulce, cariñosa y muy juguetona.",
    temperament: ["Curioso","Inteligente","Noble","Compañero leal"],
    sire: {
      "name": "Ch. Lotus Siam Star",
      "title": "Campeón Internacional WCF",
      "breed": "Siamés",
      "color": "Seal Point"
},
    dam: {
      "name": "Princess Jasmine of Bangkok",
      "title": "Campeona Nacional",
      "breed": "Siamés",
      "color": "Chocolate Point"
},
    healthTests: {
      hcm: 'Negativo / Libre',
      pkd: 'Negativo / Libre',
      fivFelv: 'Negativo',
      sma: 'Libre N/N',
      microchip: true,
      vaccines: 'Pauta completa para su edad',
      dewormed: true,
      passport: true
    }
  }
];

export const BREEDS_DATA: BreedInfo[] = [
  {
    id: 'Maine Coon',
    name: 'Maine Coon',
    origin: 'Maine, Estados Unidos',
    shortDesc: 'El gigante gentil del mundo felino: grande, sociable y muy leal.',
    heroImage: '/photos/aswad-En47OetX.jpg',
    gallery: [
      '/photos/aswad-En47OetX.jpg',
      '/photos/benny-DMYmKlDG.jpg',
      '/photos/jarvis-CX7S9FRG.jpg',
      '/photos/lion-DFSPOmjQ.jpg',
      '/photos/romeo-D0jFAAXt.jpg'
    ],
    standardFed: 'WCF & FIFe Oficial',
    averageWeight: 'Machos: 7.5 - 11 kg | Hembras: 5 - 7.5 kg',
    lifeSpan: '13 - 16 años',
    characterTraits: [
      'Extremadamente sociable y paciente',
      'Temperamento similar a un perro leal',
      'Fascinación por el agua y juegos de cobro',
      'Excelente convivencia con niños y otros animales'
    ],
    coatCare: 'Cepillado 2-3 veces por semana con carda metálica para mantener el subpelo sedoso sin nudos.',
    idealFor: 'Familias con niños, hogares con espacio y personas que buscan un felino imponente y cariñoso.',
    overview: 'El Maine Coon es la raza felina doméstica natural más grande del mundo. Poseen una mandíbula fuerte y cuadrada, orejas grandes coronadas con característicos penachos de lince (lynx tips), y una cola espesa como la de un zorro.'
  },
  {
    id: 'Bengalí',
    name: 'Bengalí',
    origin: 'Estados Unidos (Híbrido de Gato Leopardo Asiático)',
    shortDesc: 'Un leopardo en miniatura: atlético, inteligente y lleno de energía.',
    heroImage: '/photos/bear-ngunYmJJ.jpg',
    gallery: [
      '/photos/bear-ngunYmJJ.jpg',
      '/photos/caro-Bzw1RCZX.jpg',
      '/photos/cezar-BrsQqhQT.jpg',
      '/photos/snow-CMsFLY-e.jpg'
    ],
    standardFed: 'TICA & WCF Oficial',
    averageWeight: 'Machos: 5 - 8 kg | Hembras: 3.5 - 5.5 kg',
    lifeSpan: '12 - 16 años',
    characterTraits: [
      'Increíblemente activo y juguetón',
      'Manto con rosetas espectaculares y brillo "glitter"',
      'Adora el agua y los juegos de habilidad mental',
      'Muy comunicativo y afectuoso con su familia'
    ],
    coatCare: 'Manto corto y denso de mínimo mantenimiento, cepillado semanal suave.',
    idealFor: 'Familias activas, amantes de la estética exótica salvaje y hogares estimulantes.',
    overview: 'El Bengalí combina la apariencia física majestuosa de un leopardo asiático salvaje con el carácter noble, dulce y confiado de un gato doméstico.'
  },
  {
    id: 'Siberiano',
    name: 'Siberiano',
    origin: 'Rusia (Siberia)',
    shortDesc: 'Robusto, cariñoso y con pelaje de triple capa. Apto para algunos alérgicos.',
    heroImage: '/photos/galaxy-DhnWnkmZ.jpg',
    gallery: [
      '/photos/galaxy-DhnWnkmZ.jpg',
      '/photos/jackie-B4k2ui5R.jpg',
      '/photos/luna-DAByMT34.jpg',
      '/photos/pierogi-DorihDDm.jpg'
    ],
    standardFed: 'WCF & FIFe Oficial',
    averageWeight: 'Machos: 6 - 9.5 kg | Hembras: 4.5 - 6.5 kg',
    lifeSpan: '13 - 17 años',
    characterTraits: [
      'Hipoalergénico natural (produce menos proteína Fel d 1)',
      'Fuerte, ágil y de corazón bondadoso',
      'Muy paciente y cariñoso con los niños',
      'Carácter equilibrado y sereno'
    ],
    coatCare: 'Pelaje impermeable de triple capa; cepillado frecuente durante época de muda.',
    idealFor: 'Hogares con personas sensibles a las alergias tradicionales y amantes de los gatos de bosque.',
    overview: 'Nacido en los rigurosos bosques de Rusia, el Siberiano posee una constitución atlética imponente, ojos grandes y expresivos, y un temperamento extremadamente tierno.'
  },
  {
    id: 'Ragdoll',
    name: 'Ragdoll',
    origin: 'California, Estados Unidos',
    shortDesc: 'El "gato peluche": dócil, tranquilo y de impresionantes ojos azules.',
    heroImage: '/photos/norman-DKKWwGPS.jpg',
    gallery: [
      '/photos/norman-DKKWwGPS.jpg',
      '/photos/alfie-DT3d13Jo.jpg',
      '/photos/pan-Ckny2-_E.jpg',
      '/photos/willow-DPEUbROo.jpg'
    ],
    standardFed: 'WCF & FIFe Oficial',
    averageWeight: 'Machos: 6 - 9 kg | Hembras: 4.5 - 6.5 kg',
    lifeSpan: '14 - 17 años',
    characterTraits: [
      'Se relaja por completo al ser sostenido en brazos',
      'Confianza absoluta y carencia de agresividad',
      'Sigue a su familia de habitación en habitación',
      'Mirada azul pura e inocente'
    ],
    coatCare: 'Pelaje semilargo sedoso con mínimo subpelo, lo que reduce la formación de nudos.',
    idealFor: 'Familias con niños pequeños, terapia asistida y quienes buscan mimos constantes.',
    overview: 'El nombre "Ragdoll" (muñeca de trapo) proviene de su tendencia a aflojar toda la musculatura al ser alzado. Es conocido por su carácter dulce y calmado.'
  },
  {
    id: 'British Shorthair',
    name: 'British Shorthair',
    origin: 'Gran Bretaña',
    shortDesc: 'Un osito de peluche: pelaje denso, carita redonda y carácter sereno.',
    heroImage: '/photos/teddy-DqzhuZqD.jpg',
    gallery: [
      '/photos/teddy-DqzhuZqD.jpg',
      '/photos/dana-eevqkUX5.jpg',
      '/photos/freddie-B1SgnCoi.jpg',
      '/photos/moose-Clv489NG.jpg'
    ],
    standardFed: 'WCF, ASFE & FIFe',
    averageWeight: 'Machos: 5.5 - 8 kg | Hembras: 4 - 6 kg',
    lifeSpan: '14 - 18 años',
    characterTraits: [
      'Sosiego y calma ejemplar en el hogar',
      'Independiente pero profundamente fiel',
      'Maullido casi imperceptible y silencioso',
      'Comportamiento impecable en pisos y apartamentos'
    ],
    coatCare: 'Cepillado semanal gracias a su manto corto "crisp" que no se enreda con facilidad.',
    idealFor: 'Profesionales, personas que trabajan desde casa y familias que valoran la serenidad.',
    overview: 'El aristócrata del mundo felino: cuerpo robusto, patas firmes, cabeza redonda con mofletes prominentes y un pelaje tan denso que parece felpa.'
  },
  {
    id: 'Persa',
    name: 'Persa',
    origin: 'Antigua Persia / Irán',
    shortDesc: 'Elegancia clásica: pelaje largo y exuberante y un carácter muy dulce.',
    heroImage: '/photos/tiago-BnN5kHMR.jpg',
    gallery: [
      '/photos/tiago-BnN5kHMR.jpg',
      '/photos/benise-D_5fyX-A.jpg',
      '/photos/gus-BN3dxQOU.jpg',
      '/photos/ralph-7cG_QflY.jpg'
    ],
    standardFed: 'FIFe, CFA & WCF',
    averageWeight: 'Machos: 4.5 - 7 kg | Hembras: 3.5 - 5.5 kg',
    lifeSpan: '13 - 17 años',
    characterTraits: [
      'Temperamento plácido, silencioso y tranquilo',
      'Devoto de los cojines mullidos y el relax',
      'Excelente compañía para ambientes sosegados',
      'Mirada dulce y expresiva'
    ],
    coatCare: 'Requiere cepillado diario y cuidado de lagrimales para mantener su manto sedoso.',
    idealFor: 'Hogares tranquilos, amantes del glamour felino clásico y personas hogareñas.',
    overview: 'Sinónimo de lujo y sofisticación felina desde hace siglos. Su manto largo y majestuoso y su expresión dulce lo convierten en un icono de belleza.'
  },
  {
    id: 'Sphynx',
    name: 'Sphynx',
    origin: 'Toronto, Canadá',
    shortDesc: 'Sin pelo y con un corazón enorme: extrovertido, cálido y muy sociable.',
    heroImage: '/photos/oscar-BFhuhZo2.jpg',
    gallery: [
      '/photos/oscar-BFhuhZo2.jpg',
      '/photos/dobby-IgEkiQXu.jpg',
      '/photos/fig-EgKue146.jpg',
      '/photos/nalita-BcyUmxzV.jpg'
    ],
    standardFed: 'WCF & TICA Oficial',
    averageWeight: 'Machos: 4 - 6 kg | Hembras: 3 - 4.5 kg',
    lifeSpan: '13 - 16 años',
    characterTraits: [
      'Búsqueda constante de calor y mimos humanos',
      'Inteligencia vivaz, juguetón y acrobático',
      'Hipersociable y cariñoso al extremo',
      'Tacto cálido como piel de melocotón'
    ],
    coatCare: 'Higiene periódica de la piel con toallitas húmedas específicas o baños tibios.',
    idealFor: 'Amantes de animales singulares, personas que buscan un felino que duerma siempre pegado a ellos.',
    overview: 'Su temperatura corporal se siente reconfortante al tacto. Adoran estar en brazos, meterse bajo las sábanas y acompañar a sus cuidadores en todo momento.'
  },
  {
    id: 'Azul Ruso',
    name: 'Azul Ruso',
    origin: 'Arcángel, Rusia',
    shortDesc: 'Elegancia plateada y ojos verde esmeralda. Tranquilo, limpio y leal.',
    heroImage: '/photos/grace-DKHjgcjD.jpg',
    gallery: [
      '/photos/grace-DKHjgcjD.jpg',
      '/photos/lunna-jJBFDrZh.jpg',
      '/photos/merlin-DcUMtdgP.jpg',
      '/photos/zeke-iqpLOsab.jpg'
    ],
    standardFed: 'FIFe, GCCF & WCF',
    averageWeight: 'Machos: 4 - 6 kg | Hembras: 3 - 4.5 kg',
    lifeSpan: '15 - 20 años',
    characterTraits: [
      'Manto plateado de doble capa con brillo metálico',
      'Ojos verde esmeralda deslumbrantes',
      'Carácter tímido al inicio, pero intensamente devoto a su familia',
      'Comportamiento sumamente limpio y discreto'
    ],
    coatCare: 'Manto corto de doble capa que apenas desprende pelo; cepillado semanal suave.',
    idealFor: 'Pisos tranquilos, amantes de la elegancia sutil y familias que aprecian la armonía.',
    overview: 'Conocido como el "gato de los Zares", el Azul Ruso destaca por sus movimientos gráciles, su manto azul grisáceo con reflejos plateados y su inteligencia calmada.'
  },
  {
    id: 'Siamés',
    name: 'Siamés',
    origin: 'Tailandia (Antiguo Reino de Siam)',
    shortDesc: 'Ojos azules intensos, cuerpo elegante y una personalidad muy comunicativa.',
    heroImage: '/photos/leo-DFLBAktV.jpg',
    gallery: [
      '/photos/leo-DFLBAktV.jpg',
      '/photos/molly-B8oj-dvm.jpg',
      '/photos/rome-NKpKboP-.jpg',
      '/photos/yuki-CXHnI5iH.jpg'
    ],
    standardFed: 'WCF & FIFe Oficial',
    averageWeight: 'Machos: 3.5 - 5.5 kg | Hembras: 2.5 - 4.5 kg',
    lifeSpan: '14 - 19 años',
    characterTraits: [
      'Altamente comunicativo con maullidos expresivos',
      'Fidelidad y apego canino hacia su dueño',
      'Ojos de un azul zafiro penetrante',
      'Muy despierto, curioso y sociable'
    ],
    coatCare: 'Pelaje muy corto y satinado, sin subpelo; mantenimiento mínimo.',
    idealFor: 'Personas que buscan un felino parlanchín, extrovertido, con el que entablar auténticas conversaciones.',
    overview: 'El legendario príncipe de los templos de Siam. Su cuerpo estilizado, sus puntos de color en extremidades y su voz melodiosa lo hacen inconfundible.'
  }
];

export const LITTERS_DATA: Litter[] = [
  {
    id: 'litter-a-mc',
    code: 'Camada A · Emperadores del Bosque',
    litterName: 'Camada Aswad & Stefi',
    breed: 'Maine Coon',
    birthDate: '15 de Enero de 2026',
    readyDate: '15 de Abril de 2026',
    sire: 'G.I.Ch. Ragnarok King of the North (Black Smoke)',
    dam: 'Ch. Freya Valkyrie Whisper (Blue Tortie with White)',
    kittensCount: 5,
    availableCount: 2,
    image: '/photos/aswad-En47OetX.jpg',
    description: 'Cachorros con excepcional tipicidad americana: mandíbulas fuertes, orejas altas con penachos de lince pronunciados y osamenta colosal.'
  },
  {
    id: 'litter-b-rag',
    code: 'Camada B · Ángeles de Terciopelo',
    litterName: 'Camada Norman & Alfie',
    breed: 'Ragdoll',
    birthDate: '28 de Enero de 2026',
    readyDate: '28 de Abril de 2026',
    sire: 'W.Ch. Cloud Mirage of Avalon (Seal Bicolor)',
    dam: 'Ch. Bellissima Fiorella (Blue Point Mitted)',
    kittensCount: 4,
    availableCount: 2,
    image: '/photos/norman-DKKWwGPS.jpg',
    description: 'Línea de ojos azules profundos garantizados y temperamento de peluche ultra dócil. Criados bajo los pies de nuestros hijos.'
  },
  {
    id: 'litter-c-bsh',
    code: 'Camada C · Lords de Kensington',
    litterName: 'Camada Teddy & Dana',
    breed: 'British Shorthair',
    birthDate: '10 de Febrero de 2026',
    readyDate: '10 de Mayo de 2026',
    sire: 'G.I.Ch. Baron Winston Churchill (Blue Solid)',
    dam: 'Lady Penelope Velvet Rose (Lilac Bicolor)',
    kittensCount: 4,
    availableCount: 3,
    image: '/photos/teddy-DqzhuZqD.jpg',
    description: 'Mantos chocolate y blue de densidad esponjosa, cabezas esféricas perfectas y miradas vivaces color ámbar y aguamarina.'
  }
];

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  siteTitle: 'Gracia Divina',
  siteSubtitle: 'Criadero Felino de Alta Cuna',
  announcementText: 'Criadero Ético Federado WCF & FIFe · Camadas Primavera 2026 Abiertas para Reserva',
  heroHeadline: 'Nobleza, Pureza de Linaje y Crianza Familiar.',
  heroSubtitle: 'Criadero de élite dedicado a las 9 razas premium: Maine Coon, Bengalí, Siberiano, Ragdoll, British Shorthair, Persa, Sphynx, Azul Ruso y Siamés.',
  contactEmail: 'Criaderograciadivina@gmail.com',
  whatsappNumber: '+34 692 88 14 30',
  catteryLocation: 'España',
  defaultPrice: '600 €',
  wcfAffiliation: 'Afiliado WCF Nº 41289',
  asfeAffiliation: 'Registro ASFE / FIFe'
};

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    adopterName: 'Laura P.',
    city: 'Madrid',
    catName: 'Mia',
    breed: 'Maine Coon',
    adoptionYear: '2025',
    rating: 5,
    image: '/testimonials/adopter_mainecoon.jpg',
    text: 'Desde el primer mensaje por WhatsApp el trato fue cercano y transparente. Nos mandaron vídeos semanales y cuando llegó a casa se adaptó en cuestión de horas. Es súper cariñosa y equilibrada, se nota muchísimo que se crían en familia.'
  },
  {
    id: 't-2',
    adopterName: 'Carlos y Marta G.',
    city: 'Barcelona',
    catName: 'Nube',
    breed: 'Ragdoll',
    adoptionYear: '2025',
    rating: 5,
    image: '/testimonials/adopter_ragdoll.jpg',
    text: 'Buscábamos un Ragdoll tranquilo para convivir con nuestros dos hijos pequeños y no podríamos estar más felices. Vino con su cartilla al día, microchip, revisión veterinaria perfecta y un carácter dulce que enamora a todo el que viene a casa.'
  },
  {
    id: 't-3',
    adopterName: 'Elena R.',
    city: 'Valencia',
    catName: 'Oliver',
    breed: 'British Shorthair',
    adoptionYear: '2026',
    rating: 5,
    image: '/testimonials/adopter_british.jpg',
    text: 'Nuestro Británico de Pelo Corto llegó a Valencia mediante transporte especializado en perfecto estado. Nuestro veterinario nos felicitó por lo bien cuidado y socializado que venía. Además, siguen pendientes de cualquier duda que tenemos.'
  },
  {
    id: 't-4',
    adopterName: 'David S.',
    city: 'Sevilla',
    catName: 'Bear',
    breed: 'Bengalí',
    adoptionYear: '2025',
    rating: 5,
    image: '/testimonials/adopter_bengal.jpg',
    text: 'Bear tiene un manto espectacular y una vitalidad increíble, pero a la vez es súper mimoso y duerme con nosotros en el sofá. Nos entregaron toda la documentación, el contrato y una guía de alimentación que nos ayudó muchísimo.'
  },
  {
    id: 't-5',
    adopterName: 'Nerea E.',
    city: 'Bilbao',
    catName: 'Jackie',
    breed: 'Siberiano',
    adoptionYear: '2026',
    rating: 5,
    image: '/testimonials/adopter_siberian.jpg',
    text: 'Tenía un poco de alergia leve y nos asesoraron con muchísima paciencia con un Siberiano. Llevamos ya varios meses con ella en casa y estamos encantados: limpia, educada con el arenero desde el primer minuto y de un carácter extremadamente noble.'
  },
  {
    id: 't-6',
    adopterName: 'Sofía & Marcos R.',
    city: 'Málaga',
    catName: 'Oscar',
    breed: 'Sphynx',
    adoptionYear: '2026',
    rating: 5,
    image: '/testimonials/adopter_sphynx.jpg',
    text: 'Buscábamos un criadero ético que garantizase la salud de los padres con ecocardiogramas limpios. Oscar duerme bajo las mantas con nosotros y es el rey más cariñoso y juguetón de la casa. Un diez de experiencia.'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: 'Salud & Garantías',
    question: '¿Qué garantías de salud por escrito se entregan con cada cachorro?',
    answer: 'Todos nuestros cachorros se entregan con un contrato legal que estipula una garantía genética de 2 años contra cardiopatía hipertrófica (HCM), poliquistosis renal (PKD) y atrofia muscular espinal (SMA), además de garantía vírica de 15 días tras la entrega.'
  },
  {
    category: 'Salud & Garantías',
    question: '¿A qué edad se realiza la entrega de los gatitos?',
    answer: 'La entrega se realiza a partir de las 12 a 14 semanas de vida. Este período es fundamental e innegociable para asegurar una adecuada inmunización y un correcto desarrollo psicológico y socialización junto a su madre y hermanos.'
  },
  {
    category: 'Proceso de Reserva',
    question: '¿Cómo funciona la reserva y qué ocurre si cambio de opinión?',
    answer: 'La reserva formal requiere un depósito una vez aprobada la solicitud de adopción. Durante las semanas previas a la entrega, los adoptantes reciben vídeos y fotografías semanales del crecimiento del cachorro.'
  },
  {
    category: 'Proceso de Reserva',
    question: '¿Hacéis entregas fuera de Madrid o en el resto de España y Europa?',
    answer: 'Sí. Fomentamos que las familias vengan a recoger a su cachorro. Para familias de otras provincias disponemos de transporte especializado climatizado asegurando que el gatito viaje seguro.'
  },
  {
    category: 'Cuidados & Adaptación',
    question: '¿Qué incluye el Welcome Pack de entrega?',
    answer: 'Cada gatito viaja con su Pasaporte Sanitario Europeo oficial, microchip registrado en el censo, pedigrí oficial, pauta antiparasitaria al día, manta olfativa y alimento que consume en el criadero.'
  },
  {
    category: 'Cuidados & Adaptación',
    question: '¿Puedo visitar el criadero antes de tomar la decisión?',
    answer: 'Por supuesto. Organizamos visitas privadas con cita previa para familias con solicitud aprobada, manteniendo siempre los protocolos higiénicos y el bienestar de los cachorros.'
  }
];
