import { Kitten, BreedInfo, Litter, Testimonial, FAQItem, SiteSettings } from '../types';

export const KITTENS_DATA: Kitten[] = [
  {
    "id": "bsh-astrid",
    "name": "Astrid",
    "pedigreeName": "Astrid de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Solid (Gris Británico Clásico)",
    "eyeColor": "Cobre Brillante",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-astrid-01.jpg"
    ],
    "description": "Astrid es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-babushka",
    "name": "Babushka",
    "pedigreeName": "Babushka de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Bicolor con Blanco",
    "eyeColor": "Ámbar Profundo",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-babushka-02.jpg"
    ],
    "description": "Babushka es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-bambi",
    "name": "Bambi",
    "pedigreeName": "Bambi de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Lilac Solid Suave",
    "eyeColor": "Cobre Intenso",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-bambi-03.jpg"
    ],
    "description": "Bambi es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-fanny",
    "name": "Fanny",
    "pedigreeName": "Fanny de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Tortie Mitted",
    "eyeColor": "Dorado Ámbar",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-fanny-04.jpg"
    ],
    "description": "Fanny es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-gunner",
    "name": "Gunner",
    "pedigreeName": "Gunner de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Solid Tradicional",
    "eyeColor": "Cobre Intenso",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-gunner-05.jpg"
    ],
    "description": "Gunner es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-maggie",
    "name": "Maggie",
    "pedigreeName": "Maggie de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Cream / Lilac Bicolor",
    "eyeColor": "Ámbar Cálido",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-maggie-06.png"
    ],
    "description": "Maggie es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-marmalade",
    "name": "Marmalade",
    "pedigreeName": "Marmalade de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Red / Cream Tabby",
    "eyeColor": "Cobre Dorado",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-marmalade-07.jpg"
    ],
    "description": "Marmalade es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-mickey",
    "name": "Mickey",
    "pedigreeName": "Mickey de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Black Golden Shaded",
    "eyeColor": "Cobre Brillante",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-mickey-08.png"
    ],
    "description": "Mickey es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-milo",
    "name": "Milo",
    "pedigreeName": "Milo de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Solid de Felpa Densa",
    "eyeColor": "Ámbar Espléndido",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-milo-09.jpg"
    ],
    "description": "Milo es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-nutella",
    "name": "Nutella",
    "pedigreeName": "Nutella de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Hembra",
    "birthDate": "18 de Enero de 2026",
    "ageWeeks": 9,
    "colorManto": "Chocolate Solid Satinado",
    "eyeColor": "Cobre Profundo",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-nutella-10.jpg"
    ],
    "description": "Nutella es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-pablo",
    "name": "Pablo",
    "pedigreeName": "Pablo de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Bicolor Británico",
    "eyeColor": "Ámbar Luminoso",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-pablo-11.jpg"
    ],
    "description": "Pablo es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-popie",
    "name": "Popie",
    "pedigreeName": "Popie de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Silver Tabby Shaded",
    "eyeColor": "Cobre Cautivador",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-popie-12.png"
    ],
    "description": "Popie es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-raji",
    "name": "Raji",
    "pedigreeName": "Raji de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Golden Ticked Tabby",
    "eyeColor": "Ámbar Intenso",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-raji-13.png"
    ],
    "description": "Raji es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-renzo",
    "name": "Renzo",
    "pedigreeName": "Renzo de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Solid Clásico",
    "eyeColor": "Cobre Real",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-renzo-14.jpg"
    ],
    "description": "Renzo es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-ricky",
    "name": "Ricky",
    "pedigreeName": "Ricky de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Cream Solid Aterciopelado",
    "eyeColor": "Ámbar Profundo",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-ricky-15.jpg"
    ],
    "description": "Ricky es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-robert",
    "name": "Robert",
    "pedigreeName": "Robert de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Solid Aristocrático",
    "eyeColor": "Cobre Cálido",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-robert-16.jpg"
    ],
    "description": "Robert es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-romeo",
    "name": "Romeo",
    "pedigreeName": "Romeo de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Bicolor Elegante",
    "eyeColor": "Cobre Intenso",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-romeo-17.jpg"
    ],
    "description": "Romeo es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-ruda",
    "name": "Ruda",
    "pedigreeName": "Ruda de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Lilac Bicolor con Blanco",
    "eyeColor": "Ámbar Vivo",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-ruda-18.jpg"
    ],
    "description": "Ruda es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-smokey",
    "name": "Smokey",
    "pedigreeName": "Smokey de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Black Smoke Británico",
    "eyeColor": "Cobre Intenso",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-smokey-19.png"
    ],
    "description": "Smokey es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "bsh-toni",
    "name": "Toni",
    "pedigreeName": "Toni de Gracia Divina (ID)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Solid Mofletes Marcados",
    "eyeColor": "Cobre Radiante",
    "status": "Disponible",
    "price": "650 €",
    "featured": true,
    "images": [
      "/photos/bsh-toni-20.jpg"
    ],
    "description": "Toni es un adorable cachorro British Shorthair de cuerpo compacto y robusto, cabeza redondeada con mejillas llenas y un pelaje denso y afelpado incomparable. De temperamento calmado, sereno y muy equilibrado, adora la compañía de toda la familia y convive en perfecta armonía.",
    "temperament": [
      "Tranquilo y sosegado",
      "Cariñoso sin exigencias",
      "Sociable con niños",
      "Pelaje afelpado"
    ],
    "sire": {
      "name": "G.I.Ch. Baron Winston Churchill",
      "title": "Gran Campeón Internacional WCF",
      "breed": "British Shorthair",
      "color": "Blue Solid"
    },
    "dam": {
      "name": "Ch. Lady Penelope Velvet Rose",
      "title": "Campeona Nacional FIFe",
      "breed": "British Shorthair",
      "color": "Lilac Bicolor"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "rag-alulu",
    "name": "Alulu",
    "pedigreeName": "Alulu de Gracia Divina (ID)",
    "breed": "Ragdoll",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Seal Point Bicolor",
    "eyeColor": "Azul Zafiro Profundo",
    "status": "Disponible",
    "price": "600 €",
    "featured": true,
    "images": [
      "/photos/rag-alulu-21.jpg"
    ],
    "description": "Alulu es un dulce cachorro Ragdoll con una mirada azul zafiro cautivadora y un pelaje semilargo sumamente sedoso. Al ser alzado en brazos se relaja por completo como un peluche viviente, mostrando una docilidad, confianza y apego afectuoso absolutos.",
    "temperament": [
      "Ultra dócil y relajado",
      "Ojos azules puros",
      "Cariñoso tipo peluche",
      "Adora los brazos"
    ],
    "sire": {
      "name": "W.Ch. Cloud Mirage of Avalon",
      "title": "Campeón Mundial WCF",
      "breed": "Ragdoll",
      "color": "Seal Bicolor"
    },
    "dam": {
      "name": "Ch. Bellissima Fiorella Sapphire",
      "title": "Campeona Internacional FIFe",
      "breed": "Ragdoll",
      "color": "Blue Point Mitted"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "rag-carreo",
    "name": "Carreo",
    "pedigreeName": "Carreo de Gracia Divina (ID)",
    "breed": "Ragdoll",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Point Mitted",
    "eyeColor": "Azul Celeste Puro",
    "status": "Disponible",
    "price": "600 €",
    "featured": true,
    "images": [
      "/photos/rag-carreo-22.jpg"
    ],
    "description": "Carreo es un dulce cachorro Ragdoll con una mirada azul zafiro cautivadora y un pelaje semilargo sumamente sedoso. Al ser alzado en brazos se relaja por completo como un peluche viviente, mostrando una docilidad, confianza y apego afectuoso absolutos.",
    "temperament": [
      "Ultra dócil y relajado",
      "Ojos azules puros",
      "Cariñoso tipo peluche",
      "Adora los brazos"
    ],
    "sire": {
      "name": "W.Ch. Cloud Mirage of Avalon",
      "title": "Campeón Mundial WCF",
      "breed": "Ragdoll",
      "color": "Seal Bicolor"
    },
    "dam": {
      "name": "Ch. Bellissima Fiorella Sapphire",
      "title": "Campeona Internacional FIFe",
      "breed": "Ragdoll",
      "color": "Blue Point Mitted"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "rag-cleo",
    "name": "Cleo",
    "pedigreeName": "Cleo de Gracia Divina (ID)",
    "breed": "Ragdoll",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Seal Lynx Point",
    "eyeColor": "Azul Diamante",
    "status": "Disponible",
    "price": "600 €",
    "featured": true,
    "images": [
      "/photos/rag-cleo-23.jpg"
    ],
    "description": "Cleo es un dulce cachorro Ragdoll con una mirada azul zafiro cautivadora y un pelaje semilargo sumamente sedoso. Al ser alzado en brazos se relaja por completo como un peluche viviente, mostrando una docilidad, confianza y apego afectuoso absolutos.",
    "temperament": [
      "Ultra dócil y relajado",
      "Ojos azules puros",
      "Cariñoso tipo peluche",
      "Adora los brazos"
    ],
    "sire": {
      "name": "W.Ch. Cloud Mirage of Avalon",
      "title": "Campeón Mundial WCF",
      "breed": "Ragdoll",
      "color": "Seal Bicolor"
    },
    "dam": {
      "name": "Ch. Bellissima Fiorella Sapphire",
      "title": "Campeona Internacional FIFe",
      "breed": "Ragdoll",
      "color": "Blue Point Mitted"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "rag-jason",
    "name": "Jason",
    "pedigreeName": "Jason de Gracia Divina (ID)",
    "breed": "Ragdoll",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Seal Bicolor Tradicional",
    "eyeColor": "Azul Zafiro Intenso",
    "status": "Disponible",
    "price": "600 €",
    "featured": true,
    "images": [
      "/photos/rag-jason-24.jpg"
    ],
    "description": "Jason es un dulce cachorro Ragdoll con una mirada azul zafiro cautivadora y un pelaje semilargo sumamente sedoso. Al ser alzado en brazos se relaja por completo como un peluche viviente, mostrando una docilidad, confianza y apego afectuoso absolutos.",
    "temperament": [
      "Ultra dócil y relajado",
      "Ojos azules puros",
      "Cariñoso tipo peluche",
      "Adora los brazos"
    ],
    "sire": {
      "name": "W.Ch. Cloud Mirage of Avalon",
      "title": "Campeón Mundial WCF",
      "breed": "Ragdoll",
      "color": "Seal Bicolor"
    },
    "dam": {
      "name": "Ch. Bellissima Fiorella Sapphire",
      "title": "Campeona Internacional FIFe",
      "breed": "Ragdoll",
      "color": "Blue Point Mitted"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "rag-lola",
    "name": "Lola",
    "pedigreeName": "Lola de Gracia Divina (ID)",
    "breed": "Ragdoll",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Lynx Bicolor",
    "eyeColor": "Azul Cielo Cristalino",
    "status": "Disponible",
    "price": "600 €",
    "featured": true,
    "images": [
      "/photos/rag-lola-25.jpg"
    ],
    "description": "Lola es un dulce cachorro Ragdoll con una mirada azul zafiro cautivadora y un pelaje semilargo sumamente sedoso. Al ser alzado en brazos se relaja por completo como un peluche viviente, mostrando una docilidad, confianza y apego afectuoso absolutos.",
    "temperament": [
      "Ultra dócil y relajado",
      "Ojos azules puros",
      "Cariñoso tipo peluche",
      "Adora los brazos"
    ],
    "sire": {
      "name": "W.Ch. Cloud Mirage of Avalon",
      "title": "Campeón Mundial WCF",
      "breed": "Ragdoll",
      "color": "Seal Bicolor"
    },
    "dam": {
      "name": "Ch. Bellissima Fiorella Sapphire",
      "title": "Campeona Internacional FIFe",
      "breed": "Ragdoll",
      "color": "Blue Point Mitted"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "rag-murphy",
    "name": "Murphy",
    "pedigreeName": "Murphy de Gracia Divina (ID)",
    "breed": "Ragdoll",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Seal Point Mitted",
    "eyeColor": "Azul Zafiro Imperial",
    "status": "Disponible",
    "price": "600 €",
    "featured": true,
    "images": [
      "/photos/rag-murphy-26.jpg"
    ],
    "description": "Murphy es un dulce cachorro Ragdoll con una mirada azul zafiro cautivadora y un pelaje semilargo sumamente sedoso. Al ser alzado en brazos se relaja por completo como un peluche viviente, mostrando una docilidad, confianza y apego afectuoso absolutos.",
    "temperament": [
      "Ultra dócil y relajado",
      "Ojos azules puros",
      "Cariñoso tipo peluche",
      "Adora los brazos"
    ],
    "sire": {
      "name": "W.Ch. Cloud Mirage of Avalon",
      "title": "Campeón Mundial WCF",
      "breed": "Ragdoll",
      "color": "Seal Bicolor"
    },
    "dam": {
      "name": "Ch. Bellissima Fiorella Sapphire",
      "title": "Campeona Internacional FIFe",
      "breed": "Ragdoll",
      "color": "Blue Point Mitted"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "rag-nunes",
    "name": "Nunes",
    "pedigreeName": "Nunes de Gracia Divina (ID)",
    "breed": "Ragdoll",
    "gender": "Hembra",
    "birthDate": "3 de Enero de 2026",
    "ageWeeks": 11,
    "colorManto": "Blue Bicolor Terciopelo",
    "eyeColor": "Azul Índigo Brillante",
    "status": "Disponible",
    "price": "600 €",
    "featured": true,
    "images": [
      "/photos/rag-nunes-27.jpg"
    ],
    "description": "Nunes es un dulce cachorro Ragdoll con una mirada azul zafiro cautivadora y un pelaje semilargo sumamente sedoso. Al ser alzado en brazos se relaja por completo como un peluche viviente, mostrando una docilidad, confianza y apego afectuoso absolutos.",
    "temperament": [
      "Ultra dócil y relajado",
      "Ojos azules puros",
      "Cariñoso tipo peluche",
      "Adora los brazos"
    ],
    "sire": {
      "name": "W.Ch. Cloud Mirage of Avalon",
      "title": "Campeón Mundial WCF",
      "breed": "Ragdoll",
      "color": "Seal Bicolor"
    },
    "dam": {
      "name": "Ch. Bellissima Fiorella Sapphire",
      "title": "Campeona Internacional FIFe",
      "breed": "Ragdoll",
      "color": "Blue Point Mitted"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "rag-ollie",
    "name": "Ollie",
    "pedigreeName": "Ollie de Gracia Divina (ID)",
    "breed": "Ragdoll",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Seal Tortie Point",
    "eyeColor": "Azul Marino Suave",
    "status": "Disponible",
    "price": "600 €",
    "featured": true,
    "images": [
      "/photos/rag-ollie-28.jpg"
    ],
    "description": "Ollie es un dulce cachorro Ragdoll con una mirada azul zafiro cautivadora y un pelaje semilargo sumamente sedoso. Al ser alzado en brazos se relaja por completo como un peluche viviente, mostrando una docilidad, confianza y apego afectuoso absolutos.",
    "temperament": [
      "Ultra dócil y relajado",
      "Ojos azules puros",
      "Cariñoso tipo peluche",
      "Adora los brazos"
    ],
    "sire": {
      "name": "W.Ch. Cloud Mirage of Avalon",
      "title": "Campeón Mundial WCF",
      "breed": "Ragdoll",
      "color": "Seal Bicolor"
    },
    "dam": {
      "name": "Ch. Bellissima Fiorella Sapphire",
      "title": "Campeona Internacional FIFe",
      "breed": "Ragdoll",
      "color": "Blue Point Mitted"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "rag-toni",
    "name": "Toni",
    "pedigreeName": "Toni de Gracia Divina (ID)",
    "breed": "Ragdoll",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Colorpoint Sedoso",
    "eyeColor": "Azul Zafiro Eléctrico",
    "status": "Disponible",
    "price": "600 €",
    "featured": true,
    "images": [
      "/photos/rag-toni-29.jpg"
    ],
    "description": "Toni es un dulce cachorro Ragdoll con una mirada azul zafiro cautivadora y un pelaje semilargo sumamente sedoso. Al ser alzado en brazos se relaja por completo como un peluche viviente, mostrando una docilidad, confianza y apego afectuoso absolutos.",
    "temperament": [
      "Ultra dócil y relajado",
      "Ojos azules puros",
      "Cariñoso tipo peluche",
      "Adora los brazos"
    ],
    "sire": {
      "name": "W.Ch. Cloud Mirage of Avalon",
      "title": "Campeón Mundial WCF",
      "breed": "Ragdoll",
      "color": "Seal Bicolor"
    },
    "dam": {
      "name": "Ch. Bellissima Fiorella Sapphire",
      "title": "Campeona Internacional FIFe",
      "breed": "Ragdoll",
      "color": "Blue Point Mitted"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "sph-bambino",
    "name": "Bambino",
    "pedigreeName": "Bambino de Gracia Divina (ID)",
    "breed": "Sphynx",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Pink Nude Suave Melocotón",
    "eyeColor": "Verde Limón / Ámbar",
    "status": "Disponible",
    "price": "600 €",
    "featured": true,
    "images": [
      "/photos/sph-bambino-30.jpg"
    ],
    "description": "Bambino es un extraordinario cachorro Sphynx de piel aterciopelada y cálida al tacto como piel de melocotón. Sumamente inteligente, curioso, vivaz y sociable, busca permanentemente el cariño, el calor corporal de su familia humana y dormir acurrucado bajo las mantas.",
    "temperament": [
      "Extremadamente cariñoso",
      "Hipersociable y vivaz",
      "Tacto cálido melocotón",
      "Inteligente y juguetón"
    ],
    "sire": {
      "name": "G.I.Ch. Ramses Pharaoh Touch",
      "title": "Gran Campeón Internacional TICA",
      "breed": "Sphynx",
      "color": "Seal Mink Nude"
    },
    "dam": {
      "name": "Ch. Nefertiti Velvet Warmth",
      "title": "Campeona Nacional WCF",
      "breed": "Sphynx",
      "color": "Blue Cream Nude"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "sph-collie",
    "name": "Collie",
    "pedigreeName": "Collie de Gracia Divina (ID)",
    "breed": "Sphynx",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Black & White Bicolor Nude",
    "eyeColor": "Verde Esmeralda Claro",
    "status": "Disponible",
    "price": "600 €",
    "featured": true,
    "images": [
      "/photos/sph-collie-31.png"
    ],
    "description": "Collie es un extraordinario cachorro Sphynx de piel aterciopelada y cálida al tacto como piel de melocotón. Sumamente inteligente, curioso, vivaz y sociable, busca permanentemente el cariño, el calor corporal de su familia humana y dormir acurrucado bajo las mantas.",
    "temperament": [
      "Extremadamente cariñoso",
      "Hipersociable y vivaz",
      "Tacto cálido melocotón",
      "Inteligente y juguetón"
    ],
    "sire": {
      "name": "G.I.Ch. Ramses Pharaoh Touch",
      "title": "Gran Campeón Internacional TICA",
      "breed": "Sphynx",
      "color": "Seal Mink Nude"
    },
    "dam": {
      "name": "Ch. Nefertiti Velvet Warmth",
      "title": "Campeona Nacional WCF",
      "breed": "Sphynx",
      "color": "Blue Cream Nude"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "sph-desmond",
    "name": "Desmond",
    "pedigreeName": "Desmond de Gracia Divina (ID)",
    "breed": "Sphynx",
    "gender": "Macho",
    "birthDate": "3 de Enero de 2026",
    "ageWeeks": 11,
    "colorManto": "Seal Mink Calidez de Piel",
    "eyeColor": "Ámbar Dorado Intenso",
    "status": "Disponible",
    "price": "600 €",
    "featured": true,
    "images": [
      "/photos/sph-desmond-32.png"
    ],
    "description": "Desmond es un extraordinario cachorro Sphynx de piel aterciopelada y cálida al tacto como piel de melocotón. Sumamente inteligente, curioso, vivaz y sociable, busca permanentemente el cariño, el calor corporal de su familia humana y dormir acurrucado bajo las mantas.",
    "temperament": [
      "Extremadamente cariñoso",
      "Hipersociable y vivaz",
      "Tacto cálido melocotón",
      "Inteligente y juguetón"
    ],
    "sire": {
      "name": "G.I.Ch. Ramses Pharaoh Touch",
      "title": "Gran Campeón Internacional TICA",
      "breed": "Sphynx",
      "color": "Seal Mink Nude"
    },
    "dam": {
      "name": "Ch. Nefertiti Velvet Warmth",
      "title": "Campeona Nacional WCF",
      "breed": "Sphynx",
      "color": "Blue Cream Nude"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "sph-layla",
    "name": "Layla",
    "pedigreeName": "Layla de Gracia Divina (ID)",
    "breed": "Sphynx",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Tortie Nude Velvet",
    "eyeColor": "Aqua Marina",
    "status": "Disponible",
    "price": "600 €",
    "featured": true,
    "images": [
      "/photos/sph-layla-33.png"
    ],
    "description": "Layla es un extraordinario cachorro Sphynx de piel aterciopelada y cálida al tacto como piel de melocotón. Sumamente inteligente, curioso, vivaz y sociable, busca permanentemente el cariño, el calor corporal de su familia humana y dormir acurrucado bajo las mantas.",
    "temperament": [
      "Extremadamente cariñoso",
      "Hipersociable y vivaz",
      "Tacto cálido melocotón",
      "Inteligente y juguetón"
    ],
    "sire": {
      "name": "G.I.Ch. Ramses Pharaoh Touch",
      "title": "Gran Campeón Internacional TICA",
      "breed": "Sphynx",
      "color": "Seal Mink Nude"
    },
    "dam": {
      "name": "Ch. Nefertiti Velvet Warmth",
      "title": "Campeona Nacional WCF",
      "breed": "Sphynx",
      "color": "Blue Cream Nude"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "sph-lino",
    "name": "Lino",
    "pedigreeName": "Lino de Gracia Divina (ID)",
    "breed": "Sphynx",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Cream Nude Puro",
    "eyeColor": "Verde Jade",
    "status": "Disponible",
    "price": "600 €",
    "featured": true,
    "images": [
      "/photos/sph-lino-34.jpg"
    ],
    "description": "Lino es un extraordinario cachorro Sphynx de piel aterciopelada y cálida al tacto como piel de melocotón. Sumamente inteligente, curioso, vivaz y sociable, busca permanentemente el cariño, el calor corporal de su familia humana y dormir acurrucado bajo las mantas.",
    "temperament": [
      "Extremadamente cariñoso",
      "Hipersociable y vivaz",
      "Tacto cálido melocotón",
      "Inteligente y juguetón"
    ],
    "sire": {
      "name": "G.I.Ch. Ramses Pharaoh Touch",
      "title": "Gran Campeón Internacional TICA",
      "breed": "Sphynx",
      "color": "Seal Mink Nude"
    },
    "dam": {
      "name": "Ch. Nefertiti Velvet Warmth",
      "title": "Campeona Nacional WCF",
      "breed": "Sphynx",
      "color": "Blue Cream Nude"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "sph-phila",
    "name": "Phila",
    "pedigreeName": "Phila de Gracia Divina (ID)",
    "breed": "Sphynx",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Calico Nude Dulce",
    "eyeColor": "Ámbar Miel",
    "status": "Disponible",
    "price": "600 €",
    "featured": true,
    "images": [
      "/photos/sph-phila-35.png"
    ],
    "description": "Phila es un extraordinario cachorro Sphynx de piel aterciopelada y cálida al tacto como piel de melocotón. Sumamente inteligente, curioso, vivaz y sociable, busca permanentemente el cariño, el calor corporal de su familia humana y dormir acurrucado bajo las mantas.",
    "temperament": [
      "Extremadamente cariñoso",
      "Hipersociable y vivaz",
      "Tacto cálido melocotón",
      "Inteligente y juguetón"
    ],
    "sire": {
      "name": "G.I.Ch. Ramses Pharaoh Touch",
      "title": "Gran Campeón Internacional TICA",
      "breed": "Sphynx",
      "color": "Seal Mink Nude"
    },
    "dam": {
      "name": "Ch. Nefertiti Velvet Warmth",
      "title": "Campeona Nacional WCF",
      "breed": "Sphynx",
      "color": "Blue Cream Nude"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "sph-scrubs",
    "name": "Scrubs",
    "pedigreeName": "Scrubs de Gracia Divina (ID)",
    "breed": "Sphynx",
    "gender": "Macho",
    "birthDate": "18 de Enero de 2026",
    "ageWeeks": 9,
    "colorManto": "Black Slate Nude Aterciopelado",
    "eyeColor": "Verde Dorado",
    "status": "Disponible",
    "price": "600 €",
    "featured": true,
    "images": [
      "/photos/sph-scrubs-36.jpg"
    ],
    "description": "Scrubs es un extraordinario cachorro Sphynx de piel aterciopelada y cálida al tacto como piel de melocotón. Sumamente inteligente, curioso, vivaz y sociable, busca permanentemente el cariño, el calor corporal de su familia humana y dormir acurrucado bajo las mantas.",
    "temperament": [
      "Extremadamente cariñoso",
      "Hipersociable y vivaz",
      "Tacto cálido melocotón",
      "Inteligente y juguetón"
    ],
    "sire": {
      "name": "G.I.Ch. Ramses Pharaoh Touch",
      "title": "Gran Campeón Internacional TICA",
      "breed": "Sphynx",
      "color": "Seal Mink Nude"
    },
    "dam": {
      "name": "Ch. Nefertiti Velvet Warmth",
      "title": "Campeona Nacional WCF",
      "breed": "Sphynx",
      "color": "Blue Cream Nude"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-anna-1",
    "name": "Anna",
    "pedigreeName": "Anna de Gracia Divina (ID: GD-MC01)",
    "breed": "Maine Coon",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Black Silver Classic Tabby",
    "eyeColor": "Verde Dorado",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-anna-01.jpg"
    ],
    "description": "Anna es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-bravo-2",
    "name": "Bravo",
    "pedigreeName": "Bravo de Gracia Divina (ID: GD-MC02)",
    "breed": "Maine Coon",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Red Solid de Osamenta Fuerte",
    "eyeColor": "Ámbar Cálido",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-bravo-02.jpg"
    ],
    "description": "Bravo es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-brucie-3",
    "name": "Brucie",
    "pedigreeName": "Brucie de Gracia Divina (ID: GD-MC03)",
    "breed": "Maine Coon",
    "gender": "Macho",
    "birthDate": "18 de Enero de 2026",
    "ageWeeks": 9,
    "colorManto": "Brown Mackerel Tabby con Blanco",
    "eyeColor": "Cobre Brillante",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-brucie-03.jpg"
    ],
    "description": "Brucie es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-catty-4",
    "name": "Catty",
    "pedigreeName": "Catty de Gracia Divina (ID: GD-MC04)",
    "breed": "Maine Coon",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Black Smoke con Collarín Blanco",
    "eyeColor": "Verde Esmeralda",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-catty-04.jpg"
    ],
    "description": "Catty es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-chuco-5",
    "name": "Chuco",
    "pedigreeName": "Chuco de Gracia Divina (ID: GD-MC05)",
    "breed": "Maine Coon",
    "gender": "Macho",
    "birthDate": "3 de Enero de 2026",
    "ageWeeks": 11,
    "colorManto": "Blue Solid Gigante Americano",
    "eyeColor": "Dorado Ámbar",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-chuco-05.jpg"
    ],
    "description": "Chuco es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-jacki-6",
    "name": "Jacki",
    "pedigreeName": "Jacki de Gracia Divina (ID: GD-MC06)",
    "breed": "Maine Coon",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Black Tabby Classic con Penachos",
    "eyeColor": "Ámbar Luminoso",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-jacki-06.jpg"
    ],
    "description": "Jacki es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-lola-7",
    "name": "Lola",
    "pedigreeName": "Lola de Gracia Divina (ID: GD-MC07)",
    "breed": "Maine Coon",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Tortie Bicolor con Blanco",
    "eyeColor": "Verde Jade",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-lola-07.jpg"
    ],
    "description": "Lola es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-lolita-8",
    "name": "Lolita",
    "pedigreeName": "Lolita de Gracia Divina (ID: GD-MC08)",
    "breed": "Maine Coon",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Red Tabby con Cola de Zorro",
    "eyeColor": "Cobre Dorado",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-lolita-08.jpg"
    ],
    "description": "Lolita es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-louie-9",
    "name": "Louie",
    "pedigreeName": "Louie de Gracia Divina (ID: GD-MC09)",
    "breed": "Maine Coon",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Black Solid de Porte Majestuoso",
    "eyeColor": "Ámbar Intenso",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-louie-09.jpg"
    ],
    "description": "Louie es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-luna-10",
    "name": "Luna",
    "pedigreeName": "Luna de Gracia Divina (ID: GD-MC10)",
    "breed": "Maine Coon",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Silver Torbie con Ojos Grandes",
    "eyeColor": "Verde Brillante",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-luna-10.jpg"
    ],
    "description": "Luna es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-milo-11",
    "name": "Milo",
    "pedigreeName": "Milo de Gracia Divina (ID: GD-MC11)",
    "breed": "Maine Coon",
    "gender": "Macho",
    "birthDate": "3 de Enero de 2026",
    "ageWeeks": 11,
    "colorManto": "Cream Smoke Colosal",
    "eyeColor": "Cobre Profundo",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-milo-11.jpg"
    ],
    "description": "Milo es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-nikita-12",
    "name": "Nikita",
    "pedigreeName": "Nikita de Gracia Divina (ID: GD-MC12)",
    "breed": "Maine Coon",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Black Classic Tabby Elegante",
    "eyeColor": "Verde Esmeralda",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-nikita-12.png"
    ],
    "description": "Nikita es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-pamela-13",
    "name": "Pamela",
    "pedigreeName": "Pamela de Gracia Divina (ID: GD-MC13)",
    "breed": "Maine Coon",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Brown Torbie con Blanco",
    "eyeColor": "Ámbar Dorado",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-pamela-13.jpg"
    ],
    "description": "Pamela es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-pringles-14",
    "name": "Pringles",
    "pedigreeName": "Pringles de Gracia Divina (ID: GD-MC14)",
    "breed": "Maine Coon",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Red Silver Classic Tabby",
    "eyeColor": "Cobre Cálido",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-pringles-14.jpg"
    ],
    "description": "Pringles es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-rico-15",
    "name": "Rico",
    "pedigreeName": "Rico de Gracia Divina (ID: GD-MC15)",
    "breed": "Maine Coon",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Black Silver Mackerel Tabby",
    "eyeColor": "Dorado Intenso",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-rico-15.jpg"
    ],
    "description": "Rico es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-snowy-16",
    "name": "Snowy",
    "pedigreeName": "Snowy de Gracia Divina (ID: GD-MC16)",
    "breed": "Maine Coon",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "White Solid de Pelaje Nieve",
    "eyeColor": "Ámbar Suave",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-snowy-16.jpg"
    ],
    "description": "Snowy es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-sonia-17",
    "name": "Sonia",
    "pedigreeName": "Sonia de Gracia Divina (ID: GD-MC17)",
    "breed": "Maine Coon",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Tortie Smoke",
    "eyeColor": "Verde Jade",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-sonia-17.jpg"
    ],
    "description": "Sonia es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-spartacus-18",
    "name": "Spartacus",
    "pedigreeName": "Spartacus de Gracia Divina (ID: GD-MC18)",
    "breed": "Maine Coon",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Brown Classic Tabby Gigante",
    "eyeColor": "Cobre Profundo",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-spartacus-18.jpg"
    ],
    "description": "Spartacus es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  },
  {
    "id": "mc-stan-19",
    "name": "Stan",
    "pedigreeName": "Stan de Gracia Divina (ID: GD-MC19)",
    "breed": "Maine Coon",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Red Classic Tabby con Lynx Tips",
    "eyeColor": "Ámbar Vivo",
    "status": "Disponible",
    "price": "700 €",
    "featured": true,
    "images": [
      "/photos/mc-stan-19.jpg"
    ],
    "description": "Stan es un majestuoso cachorro Maine Coon de tipicidad americana sobresaliente: hocico cuadrado y potente, orejas altas coronadas con penachos de lince (lynx tips), y una constitución ósea imponente. Criado en familia, posee el temperamento dulce y sociable de un \"gigante gentil\", fascinado por el agua y leal a sus cuidadores.",
    "temperament": [
      "Gigante gentil",
      "Penachos de lince marcados",
      "Sociable y afectuoso",
      "Criado en familia"
    ],
    "sire": {
      "name": "G.I.Ch. Ragnarok King of the North",
      "title": "Gran Campeón Internacional WCF",
      "breed": "Maine Coon",
      "color": "Black Smoke Colosal"
    },
    "dam": {
      "name": "Ch. Freya Valkyrie Whisper",
      "title": "Campeona Nacional FIFe",
      "breed": "Maine Coon",
      "color": "Blue Tortie with White"
    },
    "healthTests": {
      "hcm": "Negativo / Libre",
      "pkd": "Negativo / Libre",
      "fivFelv": "Negativo",
      "sma": "Libre N/N",
      "microchip": true,
      "vaccines": "Pauta completa para su edad",
      "dewormed": true,
      "passport": true
    }
  }
];

export const BREEDS_DATA: BreedInfo[] = [
  {
    id: 'Maine Coon',
    name: 'Maine Coon',
    origin: 'Maine, Estados Unidos',
    shortDesc: 'El gigante gentil del mundo felino: grande, sociable y muy leal.',
    heroImage: '/photos/mc-spartacus-18.jpg',
    gallery: [
      '/photos/mc-spartacus-18.jpg',
      '/photos/mc-luna-10.jpg',
      '/photos/mc-louie-09.jpg',
      '/photos/mc-snowy-16.jpg'
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
    id: 'British Shorthair',
    name: 'British Shorthair',
    origin: 'Gran Bretaña',
    shortDesc: 'Un osito de peluche: pelaje denso, carita redonda y carácter sereno.',
    heroImage: '/photos/bsh-milo-09.jpg',
    gallery: [
      '/photos/bsh-milo-09.jpg',
      '/photos/bsh-astrid-01.jpg',
      '/photos/bsh-maggie-06.png',
      '/photos/bsh-marmalade-07.jpg'
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
    id: 'Ragdoll',
    name: 'Ragdoll',
    origin: 'California, Estados Unidos',
    shortDesc: 'El "gato peluche": dócil, tranquilo y de impresionantes ojos azules.',
    heroImage: '/photos/rag-jason-24.jpg',
    gallery: [
      '/photos/rag-jason-24.jpg',
      '/photos/rag-alulu-21.jpg',
      '/photos/rag-lola-25.jpg',
      '/photos/rag-cleo-23.jpg'
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
    id: 'Sphynx',
    name: 'Sphynx',
    origin: 'Toronto, Canadá',
    shortDesc: 'Sin pelo y con un corazón enorme: extrovertido, cálido y muy sociable.',
    heroImage: '/photos/sph-desmond-32.png',
    gallery: [
      '/photos/sph-desmond-32.png',
      '/photos/sph-bambino-30.jpg',
      '/photos/sph-layla-33.png',
      '/photos/sph-collie-31.png'
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
  }
];

export const LITTERS_DATA: Litter[] = [
  {
    id: 'litter-a-mc',
    code: 'Camada A · Reyes del Norte',
    litterName: 'Camada Maine Coon Gigantes',
    breed: 'Maine Coon',
    birthDate: '10 de Enero de 2026',
    readyDate: '10 de Abril de 2026',
    sire: 'G.I.Ch. Ragnarok King of the North (Black Smoke)',
    dam: 'Ch. Freya Valkyrie Whisper (Blue Tortie with White)',
    kittensCount: 19,
    availableCount: 19,
    image: '/photos/mc-spartacus-18.jpg',
    description: 'Cachorros Maine Coon con penachos de lince prominentes, mandíbula ancha y cuadrada, y estructura ósea formidable.'
  },
  {
    id: 'litter-b-bsh',
    code: 'Camada B · Lords de Kensington',
    litterName: 'Camada British Shorthair Primavera',
    breed: 'British Shorthair',
    birthDate: '10 de Enero de 2026',
    readyDate: '10 de Abril de 2026',
    sire: 'G.I.Ch. Baron Winston Churchill (Blue Solid)',
    dam: 'Lady Penelope Velvet Rose (Lilac Bicolor)',
    kittensCount: 20,
    availableCount: 20,
    image: '/photos/bsh-milo-09.jpg',
    description: 'Cachorros British Shorthair con tipicidad morfológica sobresaliente, mofletes redondeados y pelaje crisp sumamente denso.'
  },
  {
    id: 'litter-c-rag',
    code: 'Camada C · Ángeles de Terciopelo',
    litterName: 'Camada Ragdoll Ojos Azules',
    breed: 'Ragdoll',
    birthDate: '10 de Enero de 2026',
    readyDate: '10 de Abril de 2026',
    sire: 'W.Ch. Cloud Mirage of Avalon (Seal Bicolor)',
    dam: 'Ch. Bellissima Fiorella Sapphire (Blue Point Mitted)',
    kittensCount: 9,
    availableCount: 9,
    image: '/photos/rag-jason-24.jpg',
    description: 'Línea de ojos azules zafiro profundos y temperamento de peluche ultra dócil. Criados bajo los pies de nuestros hijos.'
  },
  {
    id: 'litter-d-sph',
    code: 'Camada D · Joyas del Nilo',
    litterName: 'Camada Sphynx Nude Velvet',
    breed: 'Sphynx',
    birthDate: '10 de Enero de 2026',
    readyDate: '10 de Abril de 2026',
    sire: 'G.I.Ch. Ramses Pharaoh Touch (Seal Mink Nude)',
    dam: 'Ch. Nefertiti Velvet Warmth (Blue Cream Nude)',
    kittensCount: 7,
    availableCount: 7,
    image: '/photos/sph-desmond-32.png',
    description: 'Cachorros Sphynx de piel aterciopelada y cálida, súper cariñosos, juguetones y criados en estrecho contacto humano.'
  }
];

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  siteTitle: 'criaderograciadivina',
  siteSubtitle: 'Criadero Felino de Alta Cuna',
  announcementText: 'Criadero Ético Federado WCF & FIFe · Camadas 2026 Abiertas para Reserva',
  heroHeadline: 'Nobleza, Pureza de Linaje y Crianza Familiar.',
  heroSubtitle: 'Criadero de élite especializado en Maine Coon (700 €), British Shorthair (650 €), Ragdoll (600 €) y Sphynx (600 €).',
  contactEmail: 'Criaderograciadivina@gmail.com',
  whatsappNumber: '+34 692 88 14 30',
  catteryLocation: '',
  defaultPrice: 'Desde 600 €',
  wcfAffiliation: 'Afiliado WCF Nº 41289',
  asfeAffiliation: 'Registro ASFE / FIFe'
};

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    "id": "t-1",
    "adopterName": "Laura P.",
    "author": "Laura P.",
    "city": "Madrid",
    "location": "Madrid",
    "catName": "Spartacus",
    "kittenName": "Spartacus · Maine Coon",
    "breed": "Maine Coon",
    "adoptionYear": "2026",
    "date": "Febrero 2026",
    "rating": 5,
    "avatar": "LP",
    "text": "Desde el primer mensaje por WhatsApp el trato fue cercano y transparente. Nos mandaron vídeos semanales y cuando llegó Spartacus a casa se adaptó en cuestión de horas. Es enorme, cariñoso como un perro y equilibrado, se nota muchísimo que se crían en familia.",
    "verified": true
  },
  {
    "id": "t-2",
    "adopterName": "Carlos y Marta G.",
    "author": "Carlos y Marta G.",
    "city": "Barcelona",
    "location": "Barcelona",
    "catName": "Jason",
    "kittenName": "Jason · Ragdoll",
    "breed": "Ragdoll",
    "adoptionYear": "2026",
    "date": "Enero 2026",
    "rating": 5,
    "avatar": "CM",
    "text": "Buscábamos un Ragdoll tranquilo para convivir con nuestros dos hijos pequeños y no podríamos estar más felices. Vino con su cartilla al día, microchip, revisión veterinaria perfecta y un carácter dulce que enamora a todo el que viene a casa.",
    "verified": true
  },
  {
    "id": "t-3",
    "adopterName": "Elena R.",
    "author": "Elena R.",
    "city": "Valencia",
    "location": "Valencia",
    "catName": "Desmond",
    "kittenName": "Desmond · Sphynx",
    "breed": "Sphynx",
    "adoptionYear": "2026",
    "date": "Febrero 2026",
    "rating": 5,
    "avatar": "ER",
    "text": "Nuestro Sphynx llegó a Valencia mediante transporte especializado en perfecto estado. Su piel es como terciopelo cálido y su personalidad no puede ser más cariñosa. Además, criaderograciadivina sigue pendiente de nosotros ante cualquier duda.",
    "verified": true
  },
  {
    "id": "t-4",
    "adopterName": "Javier M.",
    "author": "Javier M.",
    "city": "Sevilla",
    "location": "Sevilla",
    "catName": "Milo",
    "kittenName": "Milo · British Shorthair",
    "breed": "British Shorthair",
    "adoptionYear": "2026",
    "date": "Enero 2026",
    "rating": 5,
    "avatar": "JM",
    "text": "Una experiencia de diez. Milo es una belleza de pelaje denso y carácter sosegado. Todo el proceso de reserva y entrega fue transparente y profesional. Superó todas nuestras expectativas.",
    "verified": true
  },
  {
    "id": "t-5",
    "adopterName": "Beatriz S.",
    "author": "Beatriz S.",
    "city": "Bilbao",
    "location": "Bilbao",
    "catName": "Luna",
    "kittenName": "Luna · Maine Coon",
    "breed": "Maine Coon",
    "adoptionYear": "2025",
    "date": "Diciembre 2025",
    "rating": 5,
    "avatar": "BS",
    "text": "Luna es el amor de nuestra casa. Ojos esmeralda y unos penachos de lince impresionantes. Muy agradecida a criaderograciadivina por el trato tan humano y la dedicación.",
    "verified": true
  },
  {
    "id": "t-6",
    "adopterName": "Marc y Clara",
    "author": "Marc y Clara",
    "city": "Zaragoza",
    "location": "Zaragoza",
    "catName": "Bambino",
    "kittenName": "Bambino · Sphynx",
    "breed": "Sphynx",
    "adoptionYear": "2026",
    "date": "Febrero 2026",
    "rating": 5,
    "avatar": "MC",
    "text": "Queríamos un Sphynx sano y bien socializado y superó con creces lo esperado. Juguetona, limpia y sumamente inteligente. Recomendable al 100%.",
    "verified": true
  },
  {
    "id": "t-7",
    "adopterName": "Rocío A.",
    "author": "Rocío A.",
    "city": "Málaga",
    "location": "Málaga",
    "catName": "Astrid",
    "kittenName": "Astrid · British Shorthair",
    "breed": "British Shorthair",
    "adoptionYear": "2026",
    "date": "Febrero 2026",
    "rating": 5,
    "avatar": "RA",
    "text": "Astrid es una muñeca de peluche. Desde el primer día usó el arenero sin problema y se tumba a nuestro lado en el sofá. El kit de bienvenida y el pienso que nos enviaron nos ayudaron muchísimo con su adaptación.",
    "verified": true
  },
  {
    "id": "t-8",
    "adopterName": "Pablo T.",
    "author": "Pablo T.",
    "city": "Alicante",
    "location": "Alicante",
    "catName": "Alulu",
    "kittenName": "Alulu · Ragdoll",
    "breed": "Ragdoll",
    "adoptionYear": "2026",
    "date": "Enero 2026",
    "rating": 5,
    "avatar": "PT",
    "text": "Es increíble lo dócil que es Alulu. La coges en brazos y parece que se derrite de relax. El asesoramiento genético y las pruebas veterinarias que nos entregaron nos dieron una seguridad total.",
    "verified": true
  },
  {
    "id": "t-9",
    "adopterName": "Sofía G.",
    "author": "Sofía G.",
    "city": "Santander",
    "location": "Santander",
    "catName": "Louie",
    "kittenName": "Louie · Maine Coon",
    "breed": "Maine Coon",
    "adoptionYear": "2026",
    "date": "Enero 2026",
    "rating": 5,
    "avatar": "SG",
    "text": "Louie es impresionante, con solo unos meses ya tiene una presencia majestuosa. Come fenomenal y es el compañero inseparable de mi hijo. La comunicación por WhatsApp con criaderograciadivina fue impecable.",
    "verified": true
  },
  {
    "id": "t-10",
    "adopterName": "David R.",
    "author": "David R.",
    "city": "A Coruña",
    "location": "A Coruña",
    "catName": "Layla",
    "kittenName": "Layla · Sphynx",
    "breed": "Sphynx",
    "adoptionYear": "2026",
    "date": "Febrero 2026",
    "rating": 5,
    "avatar": "DR",
    "text": "Llegó al norte en transporte con climatización perfecta y súper despierta. Le encanta dormir acurrucada bajo las mantas con nosotros. Se nota que han recibido cariño y atención desde que nacieron.",
    "verified": true
  },
  {
    "id": "t-11",
    "adopterName": "Valentina N.",
    "author": "Valentina N.",
    "city": "Palma de Mallorca",
    "location": "Palma de Mallorca",
    "catName": "Cleo",
    "kittenName": "Cleo · Ragdoll",
    "breed": "Ragdoll",
    "adoptionYear": "2025",
    "date": "Noviembre 2025",
    "rating": 5,
    "avatar": "VN",
    "text": "La adopción de Cleo fue el mejor acierto del año. Ojos de un azul zafiro cautivador y un ronroneo constante. Un criadero honesto, familiar y apasionado por el bienestar de los felinos.",
    "verified": true
  },
  {
    "id": "t-12",
    "adopterName": "Alberto y Lucía",
    "author": "Alberto y Lucía",
    "city": "Granada",
    "location": "Granada",
    "catName": "Babushka",
    "kittenName": "Babushka · British Shorthair",
    "breed": "British Shorthair",
    "adoptionYear": "2026",
    "date": "Enero 2026",
    "rating": 5,
    "avatar": "AL",
    "text": "Buscábamos un British Shorthair auténtico de línea europea y Babushka tiene una morfología impecable. Las vacunas, el chip y el contrato estaban perfectos. 100% de confianza.",
    "verified": true
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: '¿Qué incluye la adopción de cada gatito?',
    answer: 'Todos nuestros cachorros (Sphynx y Ragdoll a 600 €, British Shorthair a 650 € y Maine Coon a 700 €) se entregan con: cartilla sanitaria oficial europea, microchip ya implantado a nombre del adoptante, vacunación completa (trivalente felina), desparasitaciones internas y externas al día, pedigrí oficial de raza, contrato de garantía vírica y genética de 2 años, y kit de bienvenida con pienso de alta gama y juguete con el aroma de su camada.'
  },
  {
    question: '¿Realizáis envíos a toda España?',
    answer: 'Sí. Realizamos entregas seguras en cualquier punto de España a través de transporte veterinario especializado puerta a puerta con climatización controlada y monitorización en tiempo real, garantizando la total tranquilidad del cachorro.'
  },
  {
    question: '¿Cómo funciona el proceso de reserva?',
    answer: 'Puedes contactarnos directamente vía WhatsApp o formulario web para indicarnos el gatito de tu interés. La reserva formal se efectúa con una señal que asegura que el gatito queda reservado para ti hasta el día de la entrega acordada.'
  },
  {
    question: '¿Están testados los progenitores contra enfermedades genéticas?',
    answer: 'Absolutamente. Todos nuestros reproductores cuentan con certificados negativos por ADN para HCM (miocardiopatía hipertrófica), PKD (poliquistosis renal), SMA y pruebas serológicas negativas a leucemia felina (FeLV) e inmunodeficiencia felina (FIV).'
  }
];
