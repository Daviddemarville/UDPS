import jsPDF from 'jspdf';

// Interface pour définir les types de données pour le PDF
interface FormDataForPDF {
  organism: string;
  email: string;
  siegesocial: string;
  adresse: string;
  telephonefixe: string;
  telephoneportable: string;
  nom: string;
  representant: string;
  fonction: string;
  replegal: string;
  fonctionreplegal: string;
  activite: string;
  date: string;
  horaires: string;
  contact: string;
  contactemail: string;
  contacttel: string;
  superficie: string;
  risques: string;
  effectifsacteurs: string;
  effectifspublic: string;
  ageacteurs: string;
  agepublic: string;
  dureepresencepublic: string;
  dimespacepublic: string;
  distancebrancardage: string;
  longpente: string;
  autrecondition: string;
  sdis: string;
  sdisdistance: string;
  hopital: string;
  hopitaldistance: string;
  comment: string;
  files: FileList | null;
}

// Fonction pour ajouter du texte avec gestion de la pagination
const addTextWithPagination = (doc: jsPDF, text: string, x: number, y: number): { newY: number } => {
  const pageHeight = doc.internal.pageSize.height;
  const lineHeight = 10; // Hauteur d'une ligne, ajuste selon les besoins

  if (y + lineHeight > pageHeight) {
    doc.addPage(); // Ajouter une nouvelle page
    return { newY: 20 }; // Retourner une nouvelle position en haut de la page
  }

  doc.text(text, x, y);
  return { newY: y + lineHeight }; // Retourner la nouvelle position verticale après l'ajout du texte
};

export const generatePDF = (formData: FormDataForPDF) => {
  const doc = new jsPDF();

  let yPosition = 20; // Position verticale initiale pour le texte
  const xPosition = 20; // Position horizontale pour le texte

  // Ajouter un titre
  let position = addTextWithPagination(doc, 'Demande de poste de secours', xPosition, yPosition);
  yPosition = position.newY;

  // Ajouter les données du formulaire
  position = addTextWithPagination(doc, `Organisme: ${formData.organism}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Email: ${formData.email}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Siège social: ${formData.siegesocial}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Adresse: ${formData.adresse}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Téléphone fixe: ${formData.telephonefixe}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Téléphone portable: ${formData.telephoneportable}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Nom: ${formData.nom}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Représentant: ${formData.representant}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Fonction: ${formData.fonction}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Rép. légal: ${formData.replegal}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Fonction rép. légal: ${formData.fonctionreplegal}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Activité: ${formData.activite}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Date: ${formData.date}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Horaires: ${formData.horaires}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Contact: ${formData.contact}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Email contact: ${formData.contactemail}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Téléphone contact: ${formData.contacttel}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Superficie: ${formData.superficie}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Risques: ${formData.risques}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Effectifs acteurs: ${formData.effectifsacteurs}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Effectifs public: ${formData.effectifspublic}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Age acteurs: ${formData.ageacteurs}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Age public: ${formData.agepublic}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Durée présence public: ${formData.dureepresencepublic}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Espace public: ${formData.dimespacepublic}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Distance brancardage: ${formData.distancebrancardage}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Longueur pente: ${formData.longpente}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Autre condition: ${formData.autrecondition}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `SDIS: ${formData.sdis}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Distance SDIS: ${formData.sdisdistance}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Hôpital: ${formData.hopital}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Distance hôpital: ${formData.hopitaldistance}`, xPosition, yPosition);
  yPosition = position.newY;

  position = addTextWithPagination(doc, `Commentaires: ${formData.comment}`, xPosition, yPosition);
  yPosition = position.newY;

  // Si des fichiers sont fournis, mentionner leur présence
  if (formData.files && formData.files.length > 0) {
    position = addTextWithPagination(doc, `Pièces jointes: ${formData.files.length} fichier(s) inclus`, xPosition, yPosition);
    yPosition = position.newY;
  }

  // Retourner le PDF en tant que Blob
  return doc.output('blob');
};




