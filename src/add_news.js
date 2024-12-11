// Sélection des éléments HTML
const journalInput = document.getElementById("journalInput");
const addJournalButton = document.getElementById("addJournalButton");
const journalList = document.getElementById("journalList");

// Fonction pour ajouter un journal
function addJournal() {
  const journalTitle = journalInput.value.trim(); // Récupère le titre du journal et enlève les espaces inutiles

  if (journalTitle === "") {
    alert("Veuillez entrer un titre avant d'ajouter un journal !");
    return;
  }

  // Créer un nouvel élément <li> pour le journal
  const li = document.createElement("li");
  li.textContent = journalTitle;

  // Ajouter un bouton de suppression au journal
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Supprimer";
  deleteButton.style.marginLeft = "10px"; // Ajout d'un petit espace
  deleteButton.addEventListener("click", () => {
    li.remove(); // Supprime le journal lorsqu'on clique sur "Supprimer"
  });

  // Ajouter le bouton de suppression à l'élément <li>
  li.appendChild(deleteButton);

  // Ajouter le <li> à la liste des journaux
  journalList.appendChild(li);

  // Réinitialiser le champ d'entrée
  journalInput.value = "";
}

// Ajouter un écouteur d'événement pour le bouton "Ajouter"
addJournalButton.addEventListener("click", addJournal);