
export function formatDatetoTime(dateString: string): string 
{
    // Cria um objeto Date a partir da string de data
    const date = new Date(dateString);

    // Extrai as horas, minutos e segundos do objeto Date
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');

    // Formata a string no formato HH:MM:SS
    return `${hours}:${minutes}:${seconds}`;
}