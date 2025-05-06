import emailjs from '@emailjs/browser';

interface MailOptions {
  to: string;
  subject: string;
  body: string;
  attachments: { filename: string; content: Blob }[];
}

// Fonction pour convertir FormData en un objet simple
const formDataToObject = (formData: FormData): Record<string, string | Blob> => {
  const object: Record<string, string | Blob> = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  return object;
};

export const sendMail = async ({ to, subject, body, attachments }: MailOptions) => {
  const formData = new FormData();
  
  formData.append('to_email', to);
  formData.append('subject', subject);
  formData.append('body', body);

  // Ajout des pièces jointes au formData
  attachments.forEach((attachment, index) => {
    formData.append(`attachment_${index}`, attachment.content, attachment.filename);
  });

  // Convertir FormData en objet JavaScript avec des types précis
  const formDataObject = formDataToObject(formData);

  // Envoi de l'email via send, en utilisant l'objet JavaScript
  try {
    const response = await emailjs.send('your_service_id', 'your_template_id', formDataObject);
    console.log('Email envoyé:', response);
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
  }
};


