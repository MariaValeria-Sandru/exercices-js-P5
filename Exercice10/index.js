
// Fonction qui prend un nombre n en paramètre et retourne une chaîne de caractères avec tous les nombres de 1 à n 
function printNumbers(n) {
     let result = ''; 
     for (let i = 1; i <= n; i++) { 
        result += i;
         if (i < n) {
             result += ' ';// Ajoute un espace entre les nombres
             } 
            } return result;
         } 
// Export de la fonction printNumbers pour qu'elle soit utilisable dans d'autres fichiers
export default printNumbers
