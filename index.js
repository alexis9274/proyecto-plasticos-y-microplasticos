// Datos para el banner
const bannerMessages = [
    "En 2023 se registraron más de 21,800 kg de plásticos en las costas nacionales",
    "El 78% de las playas monitoreadas muestran aumento en contaminación por petróleo",
    "Sistema monitorea 32 comunas costeras a lo largo de Chile",
    "La comuna de Quintero presenta los niveles más altos de contaminación química",
    "Se han identificado más de 150 playas afectadas por contaminación costera",
    "Programa de limpieza costera ha recolectado más de 45 toneladas de residuos este año",
    "Nuevas tecnologías permiten monitoreo en tiempo real de la contaminación marina",
    "Estudio revela que el 60% de la contaminación proviene de fuentes terrestres",
    "Viña del Mar supera los 3,500 kg de plásticos por km de costa - ¡Alerta máxima!",
    "Isla de Pascua: Paraíso turístico convertido en vertedero con 3,400 kg de plásticos/km",
    "Quintero y Puchuncaví lideran contaminación química con niveles 10 veces sobre lo permitido",
    "Cada km de playa en Valparaíso acumula 2,750 kg de plásticos - equivalente a 275,000 botellas",
    "Talcahuano: 2,300 kg de desechos por km asfixian su ecosistema marino",
    "Viña del Mar muestra tendencia ↑↑↑ en contaminación - ¿Dónde están los controles?",
    "Mejillones: 1,950 kg de plásticos y 850 kg de petróleo por km - Crisis ambiental silenciosa",
    "Arica Norte duplica el promedio nacional de contaminación por aguas residuales",
    "Playas de Antofagasta reciben diariamente el equivalente a 6 camiones de basura",
    "Isla de Pascua: El lugar más remoto con la mayor contaminación plástica de Chile",
    "Zapallar es la comuna menos contaminada, pero aún así acumula 520 kg de plásticos/km",
    "Coronel: 1,850 kg de plásticos por km están matando su biodiversidad marina",
    "La Serena muestra aumento constante en contaminación a pesar de programas de limpieza",
    "Punta Arenas, la ciudad más austral, registra preocupante aumento de contaminantes",
    "Cada chileno genera indirectamente 1.2 kg de basura marina por año",
    "Playas de Quintero contienen niveles de químicos tóxicos peligrosos para la salud humana",
    "Viña del Mar podría colapsar ecológicamente en 5 años si continúa esta tendencia",
    "Talcahuano: La contaminación industrial está creando una zona muerta en su costa",
    "El 78% de las playas monitoreadas muestran aumento en contaminación por petróleo",
    "Arica acumula 1,250 kg de plásticos/km - ¿Dónde terminan nuestros desechos?",
    "Concepción: 1,650 kg de plásticos por km están afectando la pesca artesanal",
    "Puchuncaví tiene los niveles más altos de contaminación química en Latinoamérica",
    "La basura orgánica en Valparaíso equivale a 18,500 bolsas de supermercado por km",
    "Iquique Norte muestra aumento alarmante en todos los tipos de contaminantes",
    "Playas de Algarrobo pierden su certificación azul por aumento de contaminación",
    "El 92% de las aves marinas en Chile tienen plástico en sus estómagos",
    "Cartagena: 1,250 kg de plásticos/km están destruyendo sus arrecifes naturales",
    "La contaminación en Quintero equivale a verter 1,250 botellas de químicos por km",
    "Puerto Montt es de las pocas comunas donde la contaminación disminuye ↓",
    "Viña del Mar: Sus 3,500 kg de plásticos/km equivalen a 35 torres Costanera de basura",
    "Mejillones lidera contaminación por petróleo con 850 kg/km - Desastre ecológico",
    "La tendencia ↑↑↑ en Isla de Pascua amenaza su patrimonio natural y cultural",
    "Cada metro de playa en Talcahuano contiene 2.3 kg de desechos peligrosos",
    "Antofagasta: Sus 2,100 kg de plásticos/km equivalen a 210,000 pajillas alineadas",
    "El Quisco muestra aumento constante en contaminación a pesar de ser destino turístico",
    "Pichidangui es ejemplo de cómo la gestión ambiental puede reducir la contaminación ↓",
    "Los químicos en Quintero superan 980 kg/km - ¿Qué estamos respirando?",
    "Valparaíso podría ver desaparecer sus especies marinas en menos de una década",
    "Coronel: La contaminación industrial está envenenando la cadena alimenticia marina",
    "Playas de Concón reciben diariamente desechos equivalentes a 1,800 botellas plásticas",
    "La contaminación en Viña del Mar crece un 15% anual - ¡Se necesita acción inmediata!",
    "Aguas residuales no tratadas equivalen a 1,680 litros por km en Viña del Mar",
    "Talcahuano: Cada residente genera indirectamente 4 kg de basura marina al año",
    "Isla de Pascua tiene niveles de plástico comparables a las islas más contaminadas del Pacífico",
    "El 60% de los peces en Quintero contienen niveles peligrosos de químicos tóxicos",
    "Valparaíso: Sus 2,750 kg de plásticos/km equivalen a 550,000 bolsas plásticas",
    "Mejillones registra 480 kg de químicos/km - ¿Qué consecuencias tiene para la salud?",
    "La basura orgánica en las playas atrae plagas y enfermedades prevenibles",
    "Viña del Mar: La contaminación costera reduce en 40% el turismo en temporada baja",
    "Sin cambios, en 2030 Chile duplicará sus niveles actuales de contaminación marina"
    
];

// Elementos del DOM
const bannerText = document.getElementById('banner-text');
const enterBtn = document.getElementById('enter-btn');

// Mostrar mensaje aleatorio
function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * bannerMessages.length);
    const message = bannerMessages[randomIndex];
    
    // Aplicar animación
    bannerText.style.animation = 'none';
    void bannerText.offsetWidth; // Trigger reflow
    bannerText.style.animation = 'fadeInOut 4s ease';
    
    bannerText.textContent = message;
}

// Redirigir a index.html
enterBtn.addEventListener('click', () => {
    window.location.href = 'inicio.html';
});

// Efecto hover para el botón
enterBtn.addEventListener('mouseenter', () => {
    enterBtn.style.transform = 'scale(1.05)';
});

enterBtn.addEventListener('mouseleave', () => {
    enterBtn.style.transform = 'scale(1)';
});

// Iniciar el banner con el primer mensaje
showRandomMessage();

// Cambiar mensaje cada 8 segundos
setInterval(showRandomMessage, 8000);