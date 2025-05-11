import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { sendMail } from "../services/mailService"; // Hypothétique fonction pour envoyer l'email
import { generatePDF } from "../services/pdfService"; // Hypothétique fonction pour générer le PDF

// Définition des types pour l'état du formulaire
interface FormState {
	files: FileList | null;
	organism: string;
	email: string;
	siegesocial: string;
	adresse: string;
	telephonefixe: string;
	telephoneportable: string;
	fax: string;
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
	[key: string]: string | FileList | null | boolean;
}

interface FormContextType {
	formState: FormState;
	handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleInputChange: (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => void;
	handleSubmit: (e: React.FormEvent) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormProviderProps {
	children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
	const [formState, setFormState] = useState<FormState>({
		files: null,
		organism: "",
		email: "",
		siegesocial: "",
		adresse: "",
		telephonefixe: "",
		telephoneportable: "",
		fax: "",
		nom: "",
		representant: "",
		fonction: "",
		replegal: "",
		fonctionreplegal: "",
		activite: "",
		date: "",
		horaires: "",
		contact: "",
		contactemail: "",
		contacttel: "",
		superficie: "",
		risques: "",
		effectifsacteurs: "",
		effectifspublic: "",
		ageacteurs: "",
		agepublic: "",
		dureepresencepublic: "",
		dimespacepublic: "",
		distancebrancardage: "",
		longpente: "",
		autrecondition: "",
		sdis: "",
		sdisdistance: "",
		hopital: "",
		hopitaldistance: "",
		comment: "",
	});

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFormState((prev) => ({ ...prev, files: e.target.files }));
		}
	};

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, type, value, checked } = e.target;

		setFormState((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	// Logique du bouton "Envoyer la demande"
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Validation des champs obligatoires
		if (!formState.organism || !formState.email) {
			alert(
				"Merci de remplir les champs obligatoires : Raison sociale et Email.",
			);
			return;
		}

		// Préparation des données pour le PDF
		const formDataForPDF = {
			organism: formState.organism,
			email: formState.email,
			siegesocial: formState.siegesocial,
			adresse: formState.adresse,
			telephonefixe: formState.telephonefixe,
			telephoneportable: formState.telephoneportable,
			nom: formState.nom,
			representant: formState.representant,
			fonction: formState.fonction,
			replegal: formState.replegal,
			fonctionreplegal: formState.fonctionreplegal,
			activite: formState.activite,
			date: formState.date,
			horaires: formState.horaires,
			contact: formState.contact,
			contactemail: formState.contactemail,
			contacttel: formState.contacttel,
			superficie: formState.superficie,
			risques: formState.risques,
			effectifsacteurs: formState.effectifsacteurs,
			effectifspublic: formState.effectifspublic,
			ageacteurs: formState.ageacteurs,
			agepublic: formState.agepublic,
			dureepresencepublic: formState.dureepresencepublic,
			dimespacepublic: formState.dimespacepublic,
			distancebrancardage: formState.distancebrancardage,
			longpente: formState.longpente,
			autrecondition: formState.autrecondition,
			sdis: formState.sdis,
			sdisdistance: formState.sdisdistance,
			hopital: formState.hopital,
			hopitaldistance: formState.hopitaldistance,
			comment: formState.comment,
			files: formState.files,
		};

		// Transformation des fichiers en objets compatibles avec le type attendu
		const transformedFiles = formState.files
			? Array.from(formState.files).map((file) => ({
					filename: file.name,
					content: file,
				}))
			: [];

		// Générer le PDF
		try {
			const pdfBlob = await generatePDF(formDataForPDF);

			const filesToSend = [...transformedFiles];

			await sendMail({
				to: formState.email,
				subject: "Demande de Poste de Secours",
				body: `Bonjour ${formState.representant},\n\nVotre demande de poste de secours a été reçue. Vous trouverez ci-joint le PDF de votre demande ainsi que les pièces jointes.`,
				attachments: [
					...filesToSend,
					{ filename: "demande_poste_secours.pdf", content: pdfBlob },
				],
			});

			await sendMail({
				to: "ludps@example.com",
				subject: "Nouvelle demande de poste de secours",
				body: "Une nouvelle demande de poste de secours a été soumise. Vous trouverez ci-joint le PDF de la demande ainsi que les pièces jointes.",
				attachments: [
					...filesToSend,
					{ filename: "demande_poste_secours.pdf", content: pdfBlob },
				],
			});

			alert("Votre demande a bien été envoyée.");
		} catch (error) {
			alert(
				"Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.",
			);
			console.error(error);
		}
	};

	return (
		<FormContext.Provider
			value={{ formState, handleFileChange, handleInputChange, handleSubmit }}
		>
			{children}
		</FormContext.Provider>
	);
};

export const useForm = (): FormContextType => {
	const context = useContext(FormContext);
	if (!context) {
		throw new Error("useForm must be used within a FormProvider");
	}
	return context;
};
