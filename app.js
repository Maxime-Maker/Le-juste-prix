ChoiseDificult = prompt('Entre ton niveau de difficulté');

//* Générateur nombre aléatoire
function NewPlayer() {
  let RandomNumber = Math.ceil(Math.random() * ChoiseDificult);
  let Player;

  //* Test du nombre
  for (compteur = 1; compteur < 10; compteur += 1) {
    do {
      Player = prompt(
        `Devine le nombre entre 1 et ${ChoiseDificult}. Tu as 10 chances`
      );
      if (!Player) {
        // console.log('Merci de saisir un nombre');
        return;
      }
    } while (isNaN(Number(Player)));
    {
    }
    if (Player == RandomNumber) {
      console.log(` Tu as reussi en  ${compteur} coups! On rejoue?`);
      break;
    }
    if (RandomNumber > Player) {
      console.log('Trop petit,Rejoue');
    }
    if (RandomNumber < Player) {
      console.log('Trop Grand,Rejoue');
    }
  }
}
NewPlayer();
// console.log("c'est fini: le chiffre cherche est:" + RandomNumber);
