// Datos ficticios - en una aplicación real estos vendrían de un servidor
const comunasData = {
    "Arica": {
        lat: -18.4746,
        lng: -70.2979,
        plasticos: 1250,
        petroleo: 320,
        quimicos: 180,
        aguasResiduales: 420,
        basuraOrganica: 750,
        tendencia: "↑",
        playas: ["Playa Chinchorro", "Playa La Lisera"],
        ultimaMedicion: "2023-05-15",
        fuente: "Estudio U. de Tarapacá"
    },
    "Iquique": {
        lat: -20.2137,
        lng: -70.1506,
        plasticos: 1840,
        petroleo: 450,
        quimicos: 220,
        aguasResiduales: 580,
        basuraOrganica: 920,
        tendencia: "↑↑",
        playas: ["Playa Cavancha", "Playa Brava"],
        ultimaMedicion: "2023-04-22",
        fuente: "Telemetria boyas solares I.municipalidad de Iquique"
    },
    "Antofagasta": {
        lat: -23.6509,
        lng: -70.3975,
        plasticos: 2100,
        petroleo: 680,
        quimicos: 350,
        aguasResiduales: 720,
        basuraOrganica: 1100,
        tendencia: "→",
        playas: ["Playa Paraíso", "Playa La Portada"],
        ultimaMedicion: "2023-03-30",
        fuente: "MMA Región de Antofagasta"
    },
    "Coquimbo": {
        lat: -29.959,
        lng: -71.3389,
        plasticos: 980,
        petroleo: 210,
        quimicos: 120,
        aguasResiduales: 380,
        basuraOrganica: 650,
        tendencia: "↓",
        playas: ["Playa La Herradura", "Playa Tongoy"],
        ultimaMedicion: "2023-05-10",
        fuente: "Observatorio Ambiental UCN"
    },
    "Valparaíso": {
        lat: -33.0472,
        lng: -71.6127,
        plasticos: 2750,
        petroleo: 890,
        quimicos: 480,
        aguasResiduales: 1250,
        basuraOrganica: 1850,
        tendencia: "↑↑",
        playas: ["Playa Reñaca", "Playa Las Salinas"],
        ultimaMedicion: "2023-05-18",
        fuente: "PUCV - Ciencias del Mar"
    },
    "Viña del Mar": {
        lat: -33.0245,
        lng: -71.5518,
        plasticos: 3500,
        petroleo: 1150,
        quimicos: 620,
        aguasResiduales: 1680,
        basuraOrganica: 2200,
        tendencia: "↑↑↑",
        playas: ["Playa Acapulco", "Playa Los Marineros"],
        ultimaMedicion: "2023-05-20",
        fuente: "Telemetria boyas solares I.Municipalidad de Viña del Mar"
    },
    "San Antonio": {
        lat: -33.5957,
        lng: -71.6169,
        plasticos: 1950,
        petroleo: 520,
        quimicos: 310,
        aguasResiduales: 850,
        basuraOrganica: 1200,
        tendencia: "↑",
        playas: ["Playa Las Cruces", "Playa Llolleo"],
        ultimaMedicion: "2023-04-05",
        fuente: "ONG EcoOcéanos"
    },
    "Concepción": {
        lat: -36.8267,
        lng: -73.0617,
        plasticos: 1650,
        petroleo: 480,
        quimicos: 290,
        aguasResiduales: 780,
        basuraOrganica: 1050,
        tendencia: "→",
        playas: ["Playa Rocoto", "Playa Chome"],
        ultimaMedicion: "2023-03-15",
        fuente: "UDEC - Oceanografía"
    },
    "Talcahuano": {
        lat: -36.7146,
        lng: -73.1141,
        plasticos: 2300,
        petroleo: 750,
        quimicos: 420,
        aguasResiduales: 1100,
        basuraOrganica: 1500,
        tendencia: "↑↑",
        playas: ["Playa El Morro", "Playa Las Escalerillas"],
        ultimaMedicion: "2023-05-12",
        fuente: "Telemetria boyas solares Capitánía de Puerto"
    },
    "Puerto Montt": {
        lat: -41.4689,
        lng: -72.9411,
        plasticos: 870,
        petroleo: 190,
        quimicos: 110,
        aguasResiduales: 350,
        basuraOrganica: 580,
        tendencia: "↓",
        playas: ["Playa Pelluco", "Playa Chinquihue"],
        ultimaMedicion: "2023-02-28",
        fuente: "SEREMI Salud Los Lagos"
    },
    "Isla de Pascua": {
        lat: -27.0833,
        lng: -109.375,
        plasticos: 3400,
        petroleo: 150,
        quimicos: 80,
        aguasResiduales: 200,
        basuraOrganica: 450,
        tendencia: "↑↑↑",
        playas: ["Playa Anakena"],
        ultimaMedicion: "2023-05-15",
        fuente: "Estudio U. Catolica del norte con Telemetria de boyas solares"
    },
    
    "Arica Norte": {
        lat: -18.4046,
        lng: -70.3179,
        plasticos: 1100,
        petroleo: 280,
        quimicos: 150,
        aguasResiduales: 380,
        basuraOrganica: 680,
        tendencia: "↑",
        playas: ["Playa Corazones"],
        ultimaMedicion: "2023-05-10",
        fuente: "Telemetria boyas solares I. municipalidad de Arica"
    },
    "Iquique Norte": {
        lat: -20.1937,
        lng: -70.1306,
        plasticos: 1650,
        petroleo: 380,
        quimicos: 190,
        aguasResiduales: 520,
        basuraOrganica: 850,
        tendencia: "↑↑",
        playas: ["Playa Huaiquique"],
        ultimaMedicion: "2023-04-18",
        fuente: "SEREMI Medio Ambiente"
    },
    "Mejillones": {
        lat: -23.1028,
        lng: -70.4525,
        plasticos: 1950,
        petroleo: 850,
        quimicos: 480,
        aguasResiduales: 680,
        basuraOrganica: 950,
        tendencia: "↑↑",
        playas: ["Playa Hornitos", "Playa Mejillones"],
        ultimaMedicion: "2023-03-25",
        fuente: "MMA Región de Antofagasta"
    },
    "Tocopilla": {
        lat: -22.0920,
        lng: -70.1979,
        plasticos: 1450,
        petroleo: 620,
        quimicos: 350,
        aguasResiduales: 580,
        basuraOrganica: 820,
        tendencia: "→",
        playas: ["Playa Tocopilla"],
        ultimaMedicion: "2023-04-05",
        fuente: "Telemetria boyas solares I. municipalidad de Tocopilla"
    },
    "Caldera": {
        lat: -27.0699,
        lng: -70.8200,
        plasticos: 1250,
        petroleo: 380,
        quimicos: 220,
        aguasResiduales: 450,
        basuraOrganica: 750,
        tendencia: "↓",
        playas: ["Playa Brava", "Playa La Virgen"],
        ultimaMedicion: "2023-05-08",
        fuente: "Observatorio Ambiental UCN"
    },
    "Huasco": {
        lat: -28.4691,
        lng: -71.2197,
        plasticos: 980,
        petroleo: 420,
        quimicos: 250,
        aguasResiduales: 520,
        basuraOrganica: 680,
        tendencia: "↑",
        playas: ["Playa Grande", "Playa Chica"],
        ultimaMedicion: "2023-04-15",
        fonte: "Telemetria boyas solares SEREMI Medio Ambiente Atacama"
    },
    "La Serena": {
        lat: -29.9027,
        lng: -71.2519,
        plasticos: 1350,
        petroleo: 280,
        quimicos: 180,
        aguasResiduales: 650,
        basuraOrganica: 920,
        tendencia: "↑",
        playas: ["Playa El Faro", "Playa La Serena"],
        ultimaMedicion: "2023-05-12",
        fuente: "Telemetria boyas solares I. municipalidad de La Serena"
    },
    "Los Vilos": {
        lat: -31.9108,
        lng: -71.5106,
        plasticos: 850,
        petroleo: 180,
        quimicos: 120,
        aguasResiduales: 380,
        basuraOrganica: 580,
        tendencia: "→",
        playas: ["Playa Los Vilos"],
        ultimaMedicion: "2023-03-28",
        fuente: "Telemetria boyas solares ONG EcoPlayas"
    },
    "Pichidangui": {
        lat: -32.1306,
        lng: -71.5350,
        plasticos: 680,
        petroleo: 120,
        quimicos: 80,
        aguasResiduales: 280,
        basuraOrganica: 450,
        tendencia: "↓",
        playas: ["Playa Pichidangui"],
        ultimaMedicion: "2023-04-10",
        fuente: "Telemetria boyas solares I. municipalidad de Los Vilos"
    },
    "Zapallar": {
        lat: -32.5536,
        lng: -71.4603,
        plasticos: 520,
        petroleo: 80,
        quimicos: 50,
        aguasResiduales: 180,
        basuraOrganica: 320,
        tendencia: "↓",
        playas: ["Playa Zapallar"],
        ultimaMedicion: "2023-05-05",
        fuente: "Telemetria boyas solares I. municipalidad de Zapallar"
    },
    "Papudo": {
        lat: -32.5069,
        lng: -71.4436,
        plasticos: 750,
        petroleo: 150,
        quimicos: 90,
        aguasResiduales: 320,
        basuraOrganica: 480,
        tendencia: "→",
        playas: ["Playa Papudo"],
        ultimaMedicion: "2023-04-22",
        fuente: "Telemetria boyas solares I. municipalidad de Papudo"
    },
    "Quintero": {
        lat: -32.7833,
        lng: -71.5333,
        plasticos: 1850,
        petroleo: 1250,
        quimicos: 980,
        aguasResiduales: 850,
        basuraOrganica: 680,
        tendencia: "↑↑↑",
        playas: ["Playa Larga", "Playa Quintero"],
        ultimaMedicion: "2023-05-15",
        fuente: "PUCV - Ciencias Ambientales"
    },
    "Puchuncaví": {
        lat: -32.7333,
        lng: -71.4167,
        plasticos: 1950,
        petroleo: 1580,
        quimicos: 1250,
        aguasResiduales: 980,
        basuraOrganica: 750,
        tendencia: "↑↑↑",
        playas: ["Playa Ventanas", "Playa Maitencillo"],
        ultimaMedicion: "2023-05-18",
        fuente: "Telemetria boyas solares SEREMI Salud Valparaíso"
    },
    "Cartagena": {
        lat: -33.5533,
        lng: -71.6056,
        plasticos: 1250,
        petroleo: 280,
        quimicos: 180,
        aguasResiduales: 480,
        basuraOrganica: 750,
        tendencia: "↑",
        playas: ["Playa Cartagena"],
        ultimaMedicion: "2023-04-30",
        fuente: "Telemetria boyas solares I. municipalidad de Cartagena"
    },
    "El Tabo": {
        lat: -33.4556,
        lng: -71.6667,
        plasticos: 980,
        petroleo: 180,
        quimicos: 120,
        aguasResiduales: 380,
        basuraOrganica: 580,
        tendencia: "→",
        playas: ["Playa El Tabo"],
        ultimaMedicion: "2023-05-08",
        fuente: "Telemetria boyas solares I. municipalidad de El Tabo"
    },
    "Algarrobo": {
        lat: -33.3667,
        lng: -71.6667,
        plasticos: 850,
        petroleo: 150,
        quimicos: 90,
        aguasResiduales: 320,
        basuraOrganica: 480,
        tendencia: "↓",
        playas: ["Playa El Canelo", "Playa San Pedro"],
        ultimaMedicion: "2023-05-12",
        fuente: "Telemetria boyas solares I. municipalidad de Algarrobo"
    },
    "El Quisco": {
        lat: -33.4000,
        lng: -71.7000,
        plasticos: 1150,
        petroleo: 220,
        quimicos: 150,
        aguasResiduales: 480,
        basuraOrganica: 680,
        tendencia: "↑",
        playas: ["Playa Los Corsarios", "Playa El Quisco"],
        ultimaMedicion: "2023-05-10",
        fuente: "Telemetria boyas solares I. municipalidad de El Quisco"
    },
    "Isla Negra": {
        lat: -33.4333,
        lng: -71.6833,
        plasticos: 680,
        petroleo: 120,
        quimicos: 80,
        aguasResiduales: 280,
        basuraOrganica: 420,
        tendencia: "→",
        playas: ["Playa Isla Negra"],
        ultimaMedicion: "2023-04-28",
        fuente: "Telemetria boyas solares I. municipalidad de El Quisco"
    },
    "Navidad": {
        lat: -33.9500,
        lng: -71.8333,
        plasticos: 580,
        petroleo: 90,
        quimicos: 60,
        aguasResiduales: 220,
        basuraOrganica: 380,
        tendencia: "↓",
        playas: ["Playa Matanzas", "Playa Navidad"],
        ultimaMedicion: "2023-04-15",
        fuente: "Telemetria boyas solares I. municipalidad de Navidad"
    },
    "Pichilemu": {
        lat: -34.3833,
        lng: -72.0167,
        plasticos: 750,
        petroleo: 120,
        quimicos: 80,
        aguasResiduales: 320,
        basuraOrganica: 480,
        tendencia: "↑",
        playas: ["Playa Principal", "Playa Infiernillo"],
        ultimaMedicion: "2023-05-05",
        fuente: "Municipalidad de Pichilemu"
    },
    "Bucalemu": {
        lat: -34.6167,
        lng: -72.0667,
        plasticos: 480,
        petroleo: 80,
        quimicos: 50,
        aguasResiduales: 180,
        basuraOrganica: 320,
        tendencia: "→",
        playas: ["Playa Bucalemu"],
        ultimaMedicion: "2023-04-10",
        fuente: "Telemetria boyas solares I. municipalidad de Paredones"
    },
    "Constitución": {
        lat: -35.3333,
        lng: -72.4167,
        plasticos: 1250,
        petroleo: 280,
        quimicos: 180,
        aguasResiduales: 650,
        basuraOrganica: 850,
        tendencia: "↑",
        playas: ["Playa Los Gringos", "Playa Constitución"],
        ultimaMedicion: "2023-05-08",
        fuente: "Telemetria boyas solares I. municipalidad de Constitución"
    },
    "Curanipe": {
        lat: -35.8500,
        lng: -72.6333,
        plasticos: 680,
        petroleo: 120,
        quimicos: 80,
        aguasResiduales: 280,
        basuraOrganica: 420,
        tendencia: "↓",
        playas: ["Playa Curanipe"],
        ultimaMedicion: "2023-04-20",
        fuente: "Telemetria boyas solares I. municipalidad de Pelluhue"
    },
    "Dichato": {
        lat: -36.5500,
        lng: -72.9333,
        plasticos: 850,
        petroleo: 180,
        quimicos: 120,
        aguasResiduales: 380,
        basuraOrganica: 580,
        tendencia: "↑",
        playas: ["Playa Dichato"],
        ultimaMedicion: "2023-05-12",
        fuente: "Telemetria boyas solares I. municipalidad de Tomé"
    },
    "Lenga": {
        lat: -36.7667,
        lng: -73.1667,
        plasticos: 1150,
        petroleo: 320,
        quimicos: 220,
        aguasResiduales: 580,
        basuraOrganica: 750,
        tendencia: "↑↑",
        playas: ["Playa Lenga"],
        ultimaMedicion: "2023-05-15",
        fuente: "Telemetria boyas solares I. municipalidad de Hualpén"
    },
    "Coronel": {
        lat: -37.0167,
        lng: -73.1333,
        plasticos: 1850,
        petroleo: 680,
        quimicos: 420,
        aguasResiduales: 850,
        basuraOrganica: 1050,
        tendencia: "↑↑",
        playas: ["Playa Coronel", "Playa Lo Rojas"],
        ultimaMedicion: "2023-05-10",
        fuente: "Telemetria boyas solares I. municipalidad de Coronel"
    },
    "Lota": {
        lat: -37.0833,
        lng: -73.1667,
        plasticos: 1650,
        petroleo: 580,
        quimicos: 380,
        aguasResiduales: 750,
        basuraOrganica: 920,
        tendencia: "↑",
        playas: ["Playa Blanca", "Playa Lota"],
        ultimaMedicion: "2023-04-28",
        fuente: "Telemetria boyas solares I. municipalidad de Lota"
    },
    "Lebu": {
        lat: -37.6167,
        lng: -73.6500,
        plasticos: 1250,
        petroleo: 320,
        quimicos: 220,
        aguasResiduales: 480,
        basuraOrganica: 680,
        tendencia: "→",
        playas: ["Playa Lebu"],
        ultimaMedicion: "2023-04-15",
        fuente: "Telemetria boyas solares I. municipalidad de Lebu"
    },
    "Tirúa": {
        lat: -38.3500,
        lng: -73.5000,
        plasticos: 680,
        petroleo: 120,
        quimicos: 80,
        aguasResiduales: 280,
        basuraOrganica: 420,
        tendencia: "↓",
        playas: ["Playa Tirúa"],
        ultimaMedicion: "2023-03-30",
        fuente: "Telemetria boyas solares I. municipalidad de Tirúa"
    },
    "Puerto Saavedra": {
        lat: -38.7833,
        lng: -73.4000,
        plasticos: 580,
        petroleo: 90,
        quimicos: 60,
        aguasResiduales: 220,
        basuraOrganica: 380,
        tendencia: "→",
        playas: ["Playa Puerto Saavedra"],
        ultimaMedicion: "2023-04-05",
        fuente: "Municipalidad de Saavedra"
    },
    "Carahue": {
        lat: -38.7000,
        lng: -73.1667,
        plasticos: 480,
        petroleo: 80,
        quimicos: 50,
        aguasResiduales: 180,
        basuraOrganica: 320,
        tendencia: "↓",
        playas: ["Playa Carahue"],
        ultimaMedicion: "2023-03-25",
        fuente: "Telemetria boyas solares I. municipalidad de Carahue"
    },
    "Queule": {
        lat: -39.3833,
        lng: -73.2333,
        plasticos: 420,
        petroleo: 60,
        quimicos: 40,
        aguasResiduales: 150,
        basuraOrganica: 280,
        tendencia: "→",
        playas: ["Playa Queule"],
        ultimaMedicion: "2023-04-10",
        fuente: "Telemetria boyas solares I. municipalidad de Toltén"
    },
    "Niebla": {
        lat: -39.8667,
        lng: -73.3833,
        plasticos: 750,
        petroleo: 120,
        quimicos: 80,
        aguasResiduales: 320,
        basuraOrganica: 480,
        tendencia: "↑",
        playas: ["Playa Niebla"],
        ultimaMedicion: "2023-05-08",
        fuente: "Telemetria boyas solares I. municipalidad de Valdivia"
    },
    "Corral": {
        lat: -39.8833,
        lng: -73.4333,
        plasticos: 580,
        petroleo: 90,
        quimicos: 60,
        aguasResiduales: 220,
        basuraOrganica: 380,
        tendencia: "→",
        playas: ["Playa Corral"],
        ultimaMedicion: "2023-04-28",
        fuente: "Telemetria boyas solares I. municipalidad de Corral"
    },
    "Mehuín": {
        lat: -39.4333,
        lng: -73.2167,
        plasticos: 480,
        petroleo: 80,
        quimicos: 50,
        aguasResiduales: 180,
        basuraOrganica: 320,
        tendencia: "↓",
        playas: ["Playa Mehuín"],
        ultimaMedicion: "2023-04-15",
        fuente: "Telemetria boyas solares I. municipalidad de Mariquina"
    },
    "Bahía Mansa": {
        lat: -40.5667,
        lng: -73.7333,
        plasticos: 420,
        petroleo: 60,
        quimicos: 40,
        aguasResiduales: 150,
        basuraOrganica: 280,
        tendencia: "→",
        playas: ["Playa Bahía Mansa"],
        ultimaMedicion: "2023-03-30",
        fuente: "Telemetria boyas solares I. municipalidad de San Juan de la Costa"
    },
    "Pucatrihue": {
        lat: -40.5500,
        lng: -73.7000,
        plasticos: 380,
        petroleo: 50,
        quimicos: 30,
        aguasResiduales: 120,
        basuraOrganica: 250,
        tendencia: "↓",
        playas: ["Playa Pucatrihue"],
        ultimaMedicion: "2023-04-05",
        fuente: "Telemetria boyas solares I. municipalidad de San Juan de la Costa"
    },
    "Maullín": {
        lat: -41.6167,
        lng: -73.6000,
        plasticos: 320,
        petroleo: 40,
        quimicos: 25,
        aguasResiduales: 100,
        basuraOrganica: 220,
        tendencia: "→",
        playas: ["Playa Maullín"],
        ultimaMedicion: "2023-03-25",
        fuente: "Telemetria boyas solares I. municipalidad de Maullín"
    },
    "Carelmapu": {
        lat: -41.7167,
        lng: -73.7167,
        plasticos: 280,
        petroleo: 30,
        quimicos: 20,
        aguasResiduales: 80,
        basuraOrganica: 180,
        tendencia: "↓",
        playas: ["Playa Carelmapu"],
        ultimaMedicion: "2023-04-10",
        fuente: "Telemetria boyas solares I. municipalidad de Maullín"
    },
    "Ancud": {
        lat: -41.8667,
        lng: -73.8167,
        plasticos: 450,
        petroleo: 70,
        quimicos: 45,
        aguasResiduales: 180,
        basuraOrganica: 320,
        tendencia: "→",
        playas: ["Playa Arena Gruesa", "Playa Lechagua"],
        ultimaMedicion: "2023-05-08",
        fuente: "Telemetria boyas solares I. municipalidad de Ancud"
    },
    "Quellón": {
        lat: -43.1167,
        lng: -73.6167,
        plasticos: 380,
        petroleo: 50,
        quimicos: 30,
        aguasResiduales: 120,
        basuraOrganica: 250,
        tendencia: "↓",
        playas: ["Playa Quellón"],
        ultimaMedicion: "2023-04-28",
        fuente: "Telemetria boyas solares I. municipalidad de Quellón"
    },
    "Chiloé Norte": {
        lat: -42.5000,
        lng: -73.7667,
        plasticos: 320,
        petroleo: 40,
        quimicos: 25,
        aguasResiduales: 100,
        basuraOrganica: 220,
        tendencia: "→",
        playas: ["Playa Chacao", "Playa Mar Brava"],
        ultimaMedicion: "2023-04-15",
        fuente: "Telemetria boyas solares I. municipalidad de Ancud"
    },
    "Cucao": {
        lat: -42.6167,
        lng: -74.1167,
        plasticos: 280,
        petroleo: 30,
        quimicos: 20,
        aguasResiduales: 80,
        basuraOrganica: 180,
        tendencia: "↓",
        playas: ["Playa Cucao"],
        ultimaMedicion: "2023-03-30",
        fuente: "Telemetria boyas solares I. municipalidad de Chonchi"
    },
    "Aysén": {
        lat: -45.4000,
        lng: -72.7000,
        plasticos: 220,
        petroleo: 25,
        quimicos: 15,
        aguasResiduales: 60,
        basuraOrganica: 150,
        tendencia: "→",
        playas: ["Playa Aysén"],
        ultimaMedicion: "2023-04-05",
        fuente: "Telemetria boyas solares I. municipalidad de Aysén"
    },
    "Puyuhuapi": {
        lat: -44.3333,
        lng: -72.5500,
        plasticos: 180,
        petroleo: 20,
        quimicos: 10,
        aguasResiduales: 50,
        basuraOrganica: 120,
        tendencia: "↓",
        playas: ["Playa Puyuhuapi"],
        ultimaMedicion: "2023-03-25",
        fuente: "Telemetria boyas solares I. municipalidad de Cisnes"
    },
    "Chaitén": {
        lat: -42.9167,
        lng: -72.7167,
        plasticos: 150,
        petroleo: 15,
        quimicos: 8,
        aguasResiduales: 40,
        basuraOrganica: 100,
        tendencia: "→",
        playas: ["Playa Chaitén"],
        ultimaMedicion: "2023-04-10",
        fuente: "Telemetria boyas solares I. municipalidad de Chaitén"
    },
    "Futaleufú": {
        lat: -43.1833,
        lng: -71.8667,
        plasticos: 120,
        petroleo: 10,
        quimicos: 5,
        aguasResiduales: 30,
        basuraOrganica: 80,
        tendencia: "↓",
        playas: ["Playa Futaleufú"],
        ultimaMedicion: "2023-03-15",
        fuente: "Telemetria boyas solares I. municipalidad de Futaleufú"
    },
    "Coyhaique": {
        lat: -45.5667,
        lng: -72.0667,
        plasticos: 200,
        petroleo: 30,
        quimicos: 20,
        aguasResiduales: 80,
        basuraOrganica: 150,
        tendencia: "→",
        playas: ["Playa Coyhaique"],
        ultimaMedicion: "2023-04-20",
        fuente: "Telemetria boyas solares I. municipalidad de Coyhaique"
    },
    "Punta Arenas": {
        lat: -53.1667,
        lng: -70.9333,
        plasticos: 280,
        petroleo: 120,
        quimicos: 80,
        aguasResiduales: 180,
        basuraOrganica: 220,
        tendencia: "↑",
        playas: ["Playa Punta Arenas"],
        ultimaMedicion: "2023-05-05",
        fuente: "Estudio universidad de magallanes"
    },
    "Puerto Natales": {
        lat: -51.7333,
        lng: -72.5167,
        plasticos: 220,
        petroleo: 80,
        quimicos: 50,
        aguasResiduales: 120,
        basuraOrganica: 180,
        tendencia: "→",
        playas: ["Playa Puerto Natales"],
        ultimaMedicion: "2023-04-15",
        fuente: "Telemetria boyas solares I. municipalidad de Puerto Natales"
    },
    "Porvenir": {
        lat: -53.3000,
        lng: -70.3667,
        plasticos: 180,
        petroleo: 60,
        quimicos: 40,
        aguasResiduales: 100,
        basuraOrganica: 150,
        tendencia: "↓",
        playas: ["Playa Porvenir"],
        ultimaMedicion: "2023-03-30",
        fuente: "Telemetria boyas solares I. municipalidad de Porvenir"
    },
    "Puerto Williams": {
        lat: -54.9333,
        lng: -67.6167,
        plasticos: 120,
        petroleo: 20,
        quimicos: 15,
        aguasResiduales: 50,
        basuraOrganica: 100,
        tendencia: "→",
        playas: ["Playa Puerto Williams"],
        ultimaMedicion: "2023-04-05",
        fuente: "Telemetria boyas solares I. municipalidad de Cabo de Hornos"
    }
};

// Datos históricos
const historicalData = [
    { año: "2018", plasticos: 12500, petroleo: 3200, quimicos: 1800, aguasResiduales: 4500, basuraOrganica: 6800, variacion: "+12%", comunas: 15 },
    { año: "2019", plasticos: 14300, petroleo: 3800, quimicos: 2200, aguasResiduales: 5200, basuraOrganica: 7500, variacion: "+14%", comunas: 18 },
    { año: "2020", plasticos: 15800, petroleo: 4200, quimicos: 2500, aguasResiduales: 5800, basuraOrganica: 8200, variacion: "+10%", comunas: 22 },
    { año: "2021", plasticos: 17200, petroleo: 4800, quimicos: 2900, aguasResiduales: 6500, basuraOrganica: 9200, variacion: "+9%", comunas: 24 },
    { año: "2022", plasticos: 19500, petroleo: 5500, quimicos: 3500, aguasResiduales: 7500, basuraOrganica: 10500, variacion: "+13%", comunas: 28 },
    { año: "2023", plasticos: 21800, petroleo: 6200, quimicos: 4200, aguasResiduales: 8500, basuraOrganica: 12500, variacion: "+12%", comunas: 32 }
];



// Variables globales
let selectedContaminante = 'plasticos';
let map;
let markers = [];

// Inicializar el mapa
function initMap() {
    map = L.map('map').setView([-33.4569, -70.6483], 8);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    updateMap();
    createLegend();
}

// Función para obtener el color según el valor del contaminante
function getColor(valor) {
    return valor > 3000 ? '#800026' :
           valor > 2500 ? '#BD0026' :
           valor > 2000 ? '#E31A1C' :
           valor > 1500 ? '#FC4E2A' :
           valor > 1000 ? '#FD8D3C' :
                          '#FEB24C';
}

// Crear leyenda dinámica
function createLegend() {
    const legend = L.control({ position: 'bottomright' });
    
    legend.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'legend');
        const grades = [0, 1000, 1500, 2000, 2500, 3000];
        const titles = {
            plasticos: "Kg plástico/km",
            petroleo: "Kg petróleo/km",
            quimicos: "Kg químicos/km",
            aguasResiduales: "L aguas residuales/km",
            basuraOrganica: "Kg orgánicos/km"
        };

        div.innerHTML = `<h4>${titles[selectedContaminante]}</h4>`;

        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                `<div class="legend-item"><i style="background:${getColor(grades[i] + 1)}"></i>` +
                `${grades[i]}${grades[i + 1] ? '&ndash;' + grades[i + 1] : '+'}</div>`;
        }

        return div;
    };
    
    legend.addTo(map);
}

// Actualizar mapa según contaminante seleccionado
function updateMap() {
    // Limpiar marcadores anteriores
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
    
    // Añadir nuevos marcadores
    Object.keys(comunasData).forEach(comuna => {
        const data = comunasData[comuna];
        const valor = data[selectedContaminante];
        
        const marker = L.circleMarker([data.lat, data.lng], {
            radius: 8,
            fillColor: getColor(valor),
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(map);

        marker.bindPopup(`<b>${comuna}</b><br>${valor} ${selectedContaminante === 'aguasResiduales' ? 'L/km' : 'kg/km'}`);
        
        marker.on('click', function() {
            showComunaInfo(comuna, data);
        });
        
        markers.push(marker);
    });
    
    // Actualizar tablas
    fillTopTable();
}

// Mostrar información de la comuna
function showComunaInfo(comuna, data) {
    const infoDiv = document.getElementById('comuna-info');
    const unidad = selectedContaminante === 'aguasResiduales' ? 'L/km' : 'kg/km';
    
    infoDiv.innerHTML = `
        <h3>${comuna}</h3>
        <p><strong>Nivel de ${getContaminanteName(selectedContaminante)}:</strong> ${data[selectedContaminante]} ${unidad}</p>
        <p><strong>Tendencia:</strong> ${getTendenciaText(data.tendencia)}</p>
        <p><strong>Playas afectadas:</strong> ${data.playas.join(", ")}</p>
        <p><strong>Última medición:</strong> ${data.ultimaMedicion}</p>
        <p><strong>Fuente de datos:</strong> ${data.fuente}</p>
    `;
}

// Obtener nombre completo del contaminante
function getContaminanteName(key) {
    const names = {
        plasticos: "plásticos",
        petroleo: "petróleo",
        quimicos: "químicos",
        aguasResiduales: "aguas residuales",
        basuraOrganica: "basura orgánica"
    };
    return names[key] || key;
}

function getTendenciaText(tendencia) {
    if (tendencia === "→") return "Estable";
    if (tendencia === "↓") return "Disminuyendo";
    const arrows = tendencia.length;
    if (arrows === 1) return "Leve aumento";
    if (arrows === 2) return "Aumento significativo";
    if (arrows >= 3) return "Aumento alarmante";
    return tendencia;
}

// Llenar tabla de top comunas
function fillTopTable() {
    const tableBody = document.querySelector('#top-table tbody');
    tableBody.innerHTML = '';
    
    // Ordenar comunas por nivel de contaminación (mayor a menor)
    const sortedComunas = Object.keys(comunasData).sort((a, b) => {
        return comunasData[b][selectedContaminante] - comunasData[a][selectedContaminante];
    }).slice(0, 5); // Tomar solo las top 5
    
    const unidad = selectedContaminante === 'aguasResiduales' ? 'L/km' : 'kg/km';
    
    sortedComunas.forEach(comuna => {
        const data = comunasData[comuna];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${comuna}</td>
            <td>${data[selectedContaminante]} ${unidad}</td>
            <td>${getTendenciaText(data.tendencia)}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Llenar tabla histórica
function fillHistoricalTable() {
    const tableBody = document.querySelector('#historical-table tbody');
    tableBody.innerHTML = '';
    
    historicalData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.año}</td>
            <td>${data.plasticos}</td>
            <td>${data.variacion}</td>
            <td>${data.comunas}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Generar y descargar archivo Excel con datos de comunas
document.getElementById('download-excel').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Preparar datos para Excel
    const excelData = Object.keys(comunasData).map(comuna => {
        return {
            "Comuna": comuna,
            "Plásticos (kg/km)": comunasData[comuna].plasticos,
            "Petróleo (kg/km)": comunasData[comuna].petroleo,
            "Químicos (kg/km)": comunasData[comuna].quimicos,
            "Aguas Residuales (L/km)": comunasData[comuna].aguasResiduales,
            "Basura Orgánica (kg/km)": comunasData[comuna].basuraOrganica,
            "Tendencia": comunasData[comuna].tendencia,
            "Playas Afectadas": comunasData[comuna].playas.join(", "),
            "Última Medición": comunasData[comuna].ultimaMedicion,
            "Fuente": comunasData[comuna].fuente
        };
    });
    
    // Crear libro de Excel
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(excelData);
    XLSX.utils.book_append_sheet(wb, ws, "Datos Comunas");
    
    // Exportar a archivo
    XLSX.writeFile(wb, "contaminacion_costera_comunas.xlsx");
});

// Generar y descargar archivo Excel con datos históricos
document.getElementById('download-historical').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Crear libro de Excel
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(historicalData);
    XLSX.utils.book_append_sheet(wb, ws, "Datos Históricos");
    
    // Exportar a archivo
    XLSX.writeFile(wb, "contaminacion_historica.xlsx");
});

// Cambiar contaminante seleccionado
document.getElementById('contaminante').addEventListener('change', function(e) {
    selectedContaminante = e.target.value;
    updateMap();
    
    // Mostrar información de la comuna más contaminada con el nuevo contaminante
    const mostPolluted = Object.keys(comunasData).reduce((a, b) => 
        comunasData[a][selectedContaminante] > comunasData[b][selectedContaminante] ? a : b
    );
    showComunaInfo(mostPolluted, comunasData[mostPolluted]);
});

// Inicializar aplicación al cargar la página
window.onload = function() {
    initMap();
    fillHistoricalTable();
    
    // Mostrar información de la comuna más contaminada por defecto
    const mostPolluted = Object.keys(comunasData).reduce((a, b) => 
        comunasData[a][selectedContaminante] > comunasData[b][selectedContaminante] ? a : b
    );
    showComunaInfo(mostPolluted, comunasData[mostPolluted]);
    
    // Centrar el mapa en la comuna más contaminada
    map.setView([comunasData[mostPolluted].lat, comunasData[mostPolluted].lng], 10);
};

