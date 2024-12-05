
// Fonction qui prend un âge en paramètre et renvoie un message en fonction de la tranche d'âge
 function checkAge(age) {
     if (age < 18) {
         return "Vous êtes mineur."; 
        } else if (age >= 18 && age <= 65) { 
            return "Vous êtes majeur."; 
        } else { 
            return "Vous êtes senior."; 
        } 
    } // Export de la fonction checkAge pour qu'elle soit utilisable dans d'autres fichiers ;
export default checkAge;
