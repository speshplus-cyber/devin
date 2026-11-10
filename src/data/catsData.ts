import { Kitten, BreedInfo, Litter, Testimonial, FAQItem, SiteSettings } from '../types';

export const KITTENS_DATA: Kitten[] = [
  {
    "id": "bsh-astrid",
    "name": "Astrid",
    "pedigreeName": "Astrid de Gracia Divina (ID: GD001)",
    "breed": "British Shorthair",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Solid (Gris Británico Clásico)",
    "eyeColor": "Cobre Brillante",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Babushka de Gracia Divina (ID: GD002)",
    "breed": "British Shorthair",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Bicolor con Blanco",
    "eyeColor": "Ámbar Profundo",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Bambi de Gracia Divina (ID: GD003)",
    "breed": "British Shorthair",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Lilac Solid Suave",
    "eyeColor": "Cobre Intenso",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Fanny de Gracia Divina (ID: GD004)",
    "breed": "British Shorthair",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Tortie Mitted",
    "eyeColor": "Dorado Ámbar",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Gunner de Gracia Divina (ID: GD005)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Solid Tradicional",
    "eyeColor": "Cobre Intenso",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Maggie de Gracia Divina (ID: GD006)",
    "breed": "British Shorthair",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Cream / Lilac Bicolor",
    "eyeColor": "Ámbar Cálido",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Marmalade de Gracia Divina (ID: GD007)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Red / Cream Tabby",
    "eyeColor": "Cobre Dorado",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Mickey de Gracia Divina (ID: GD008)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Black Golden Shaded",
    "eyeColor": "Cobre Brillante",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Milo de Gracia Divina (ID: GD009)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Solid de Felpa Densa",
    "eyeColor": "Ámbar Espléndido",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Nutella de Gracia Divina (ID: GD010)",
    "breed": "British Shorthair",
    "gender": "Hembra",
    "birthDate": "18 de Enero de 2026",
    "ageWeeks": 9,
    "colorManto": "Chocolate Solid Satinado",
    "eyeColor": "Cobre Profundo",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Pablo de Gracia Divina (ID: GD011)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Bicolor Británico",
    "eyeColor": "Ámbar Luminoso",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Popie de Gracia Divina (ID: GD012)",
    "breed": "British Shorthair",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Silver Tabby Shaded",
    "eyeColor": "Cobre Cautivador",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Raji de Gracia Divina (ID: GD013)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Golden Ticked Tabby",
    "eyeColor": "Ámbar Intenso",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Renzo de Gracia Divina (ID: GD014)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Solid Clásico",
    "eyeColor": "Cobre Real",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Ricky de Gracia Divina (ID: GD015)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Cream Solid Aterciopelado",
    "eyeColor": "Ámbar Profundo",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Robert de Gracia Divina (ID: GD016)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Solid Aristocrático",
    "eyeColor": "Cobre Cálido",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Romeo de Gracia Divina (ID: GD017)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Bicolor Elegante",
    "eyeColor": "Cobre Intenso",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Ruda de Gracia Divina (ID: GD018)",
    "breed": "British Shorthair",
    "gender": "Hembra",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Lilac Bicolor con Blanco",
    "eyeColor": "Ámbar Vivo",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Smokey de Gracia Divina (ID: GD019)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Black Smoke Británico",
    "eyeColor": "Cobre Intenso",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Toni de Gracia Divina (ID: GD020)",
    "breed": "British Shorthair",
    "gender": "Macho",
    "birthDate": "10 de Enero de 2026",
    "ageWeeks": 10,
    "colorManto": "Blue Solid Mofletes Marcados",
    "eyeColor": "Cobre Radiante",
    "status": "Disponible",
    "price": "600 €",
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
    "pedigreeName": "Alulu de Gracia Divina (ID: GD021)",
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
    "pedigreeName": "Carreo de Gracia Divina (ID: GD022)",
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
    "pedigreeName": "Cleo de Gracia Divina (ID: GD023)",
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
    "pedigreeName": "Jason de Gracia Divina (ID: GD024)",
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
    "pedigreeName": "Lola de Gracia Divina (ID: GD025)",
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
    "pedigreeName": "Murphy de Gracia Divina (ID: GD026)",
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
    "pedigreeName": "Nunes de Gracia Divina (ID: GD027)",
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
    "pedigreeName": "Ollie de Gracia Divina (ID: GD028)",
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
    "pedigreeName": "Toni de Gracia Divina (ID: GD029)",
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
    "pedigreeName": "Bambino de Gracia Divina (ID: GD030)",
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
    "pedigreeName": "Collie de Gracia Divina (ID: GD031)",
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
    "pedigreeName": "Desmond de Gracia Divina (ID: GD032)",
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
    "pedigreeName": "Layla de Gracia Divina (ID: GD033)",
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
    "pedigreeName": "Lino de Gracia Divina (ID: GD034)",
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
    "pedigreeName": "Phila de Gracia Divina (ID: GD035)",
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
    "pedigreeName": "Scrubs de Gracia Divina (ID: GD036)",
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
  }
];

export const BREEDS_DATA: BreedInfo[] = [
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
  },
  {
    id: 'Maine Coon',
    name: 'Maine Coon',
    origin: 'Maine, Estados Unidos',
    shortDesc: 'El gigante gentil del mundo felino: grande, sociable y muy leal.',
    heroImage: '/photos/bsh-milo-09.jpg',
    gallery: [
      '/photos/bsh-milo-09.jpg',
      '/photos/bsh-astrid-01.jpg',
      '/photos/rag-jason-24.jpg',
      '/photos/sph-desmond-32.png'
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
    heroImage: '/photos/bsh-marmalade-07.jpg',
    gallery: [
      '/photos/bsh-marmalade-07.jpg',
      '/photos/bsh-raji-13.png',
      '/photos/bsh-mickey-08.png',
      '/photos/rag-alulu-21.jpg'
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
    heroImage: '/photos/rag-lola-25.jpg',
    gallery: [
      '/photos/rag-lola-25.jpg',
      '/photos/rag-ollie-28.jpg',
      '/photos/bsh-babushka-02.jpg',
      '/photos/bsh-fanny-04.jpg'
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
    id: 'Persa',
    name: 'Persa',
    origin: 'Antigua Persia / Irán',
    shortDesc: 'Elegancia clásica: pelaje largo y exuberante y un carácter muy dulce.',
    heroImage: '/photos/rag-cleo-23.jpg',
    gallery: [
      '/photos/rag-cleo-23.jpg',
      '/photos/rag-alulu-21.jpg',
      '/photos/bsh-maggie-06.png',
      '/photos/bsh-nutella-10.jpg'
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
    id: 'Azul Ruso',
    name: 'Azul Ruso',
    origin: 'Arcángel, Rusia',
    shortDesc: 'Elegancia plateada y ojos verde esmeralda. Tranquilo, limpio y leal.',
    heroImage: '/photos/bsh-smokey-19.png',
    gallery: [
      '/photos/bsh-smokey-19.png',
      '/photos/bsh-milo-09.jpg',
      '/photos/bsh-gunner-05.jpg',
      '/photos/bsh-astrid-01.jpg'
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
    heroImage: '/photos/rag-alulu-21.jpg',
    gallery: [
      '/photos/rag-alulu-21.jpg',
      '/photos/rag-murphy-26.jpg',
      '/photos/sph-layla-33.png',
      '/photos/sph-phila-35.png'
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
    id: 'litter-a-bsh',
    code: 'Camada A · Lords de Kensington',
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
    id: 'litter-b-rag',
    code: 'Camada B · Ángeles de Terciopelo',
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
    id: 'litter-c-sph',
    code: 'Camada C · Joyas del Nilo',
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
  siteTitle: 'Gracia Divina',
  siteSubtitle: 'Criadero Felino de Alta Cuna',
  announcementText: 'Criadero Ético Federado WCF & FIFe · Camadas 2026 Abiertas para Reserva',
  heroHeadline: 'Nobleza, Pureza de Linaje y Crianza Familiar.',
  heroSubtitle: 'Criadero de élite en España especializado en British Shorthair, Ragdoll y Sphynx, con líneas de campeones internacionales.',
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
    author: 'Laura P.',
    location: 'Madrid',
    avatar: 'LP',
    kittenName: 'Milo · British Shorthair',
    rating: 5,
    text: 'Desde el primer mensaje por WhatsApp el trato fue cercano y transparente. Nos mandaron vídeos semanales y cuando llegó Milo a casa se adaptó en cuestión de horas. Es súper cariñoso, redondo como un peluche y equilibrado, se nota muchísimo que se crían en familia.',
    verified: true,
    date: 'Febrero 2026'
  },
  {
    id: 't-2',
    author: 'Carlos y Marta G.',
    location: 'Barcelona',
    avatar: 'CM',
    kittenName: 'Jason · Ragdoll',
    rating: 5,
    text: 'Buscábamos un Ragdoll tranquilo para convivir con nuestros dos hijos pequeños y no podríamos estar más felices. Vino con su cartilla al día, microchip, revisión veterinaria perfecta y un carácter dulce que enamora a todo el que viene a casa.',
    verified: true,
    date: 'Enero 2026'
  },
  {
    id: 't-3',
    author: 'Elena R.',
    location: 'Valencia',
    avatar: 'ER',
    kittenName: 'Desmond · Sphynx',
    rating: 5,
    text: 'Nuestro Sphynx llegó a Valencia mediante transporte especializado en perfecto estado. Su piel es como terciopelo cálido y su personalidad no puede ser más cariñosa. Además, el criadero sigue pendiente de nosotros ante cualquier duda.',
    verified: true,
    date: 'Febrero 2026'
  },
  {
    id: 't-4',
    author: 'Javier M.',
    location: 'Sevilla',
    avatar: 'JM',
    kittenName: 'Astrid · British Shorthair',
    rating: 5,
    text: 'Una experiencia de diez. Astrid es una belleza de pelaje denso y carácter sosegado. Todo el proceso de reserva y entrega fue transparente y profesional.',
    verified: true,
    date: 'Enero 2026'
  },
  {
    id: 't-5',
    author: 'Beatriz S.',
    location: 'Bilbao',
    avatar: 'BS',
    kittenName: 'Alulu · Ragdoll',
    rating: 5,
    text: 'Alulu es el amor de nuestra casa. Ojos azules penetrantes y cuando la coges parece una muñeca de trapo de lo relajada que se queda. Muy agradecida al Criadero Gracia Divina.',
    verified: true,
    date: 'Diciembre 2025'
  },
  {
    id: 't-6',
    author: 'Marc y Clara',
    location: 'Zaragoza',
    avatar: 'MC',
    kittenName: 'Bambino · Sphynx',
    rating: 5,
    text: 'Queríamos un Sphynx sano y bien socializado y superó con creces lo esperado. Juguetona, limpia y sumamente inteligente. Recomendable 100%.',
    verified: true,
    date: 'Febrero 2026'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: '¿Qué incluye la adopción de cada gatito por 600 €?',
    answer: 'Todos nuestros cachorros se entregan a partir de las 10-12 semanas con: cartilla sanitaria oficial europea, microchip ya implantado a nombre del adoptante, vacunación completa (trivalente felina), desparasitaciones internas y externas al día, pedigrí oficial de raza, contrato de garantía vírica y genética de 2 años, y kit de bienvenida con pienso de alta gama y juguete con el aroma de su camada.'
  },
  {
    question: '¿Realizáis envíos a toda España?',
    answer: 'Sí. Los gatitos pueden recogerse personalmente en nuestras instalaciones en España mediante visita concertada, o bien entregarse directamente en tu domicilio a través de transporte veterinario especializado puerta a puerta con climatización controlada y monitorización en tiempo real.'
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
