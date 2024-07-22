function calcolaVolume() {
    const diametro = parseFloat(document.getElementById('diametro').value);
    const altezza = parseFloat(document.getElementById('altezza').value);
    const percentuale = parseFloat(document.getElementById('percentuale').value);
    
    if (isNaN(diametro) || isNaN(altezza) || isNaN(percentuale)) {
        alert("Per favore, inserisci valori validi.");
        return;
    }
    
    const raggio = diametro / 2;
    const volumeTotale = Math.PI * Math.pow(raggio, 2) * altezza / 1000; // Conversione da mm³ a cm³
    
    const volumeUtilizzato = volumeTotale * (percentuale / 100) * 0.001; // Conversione da cm³ a litri
    const volumePerso = volumeTotale * 0.001 - volumeUtilizzato; // Conversione da cm³ a litri
    
    document.getElementById('volume-utile').textContent = `Volume Utile: ${volumeUtilizzato.toFixed(2)} litri`;
    document.getElementById('volume-perso').textContent = `Volume Perso: ${volumePerso.toFixed(2)} litri`;
}
