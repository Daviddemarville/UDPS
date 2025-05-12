import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { sendMail } from "../services/mailService"; // Hypothétique fonction pour envoyer l'email
import { generatePDF } from "../services/pdfService"; // Hypothétique fonction pour générer le PDF

// Définition des types pour l'état du formulaire
interface FormState {
	organism: string;
	siegesocial: string;
	telephonefixe: string;
	telephoneportable: string;
	email: string;
	nom: string;
	fonction: string;
	eventname: string;
	activite: string;
	dateDebut: string;
	dateFin: string;
	horaires: string;
	contact: string;
	contactemail: string;
	contacttel: string;
	adresse: string;
	circuit: string;
	typeCircuit: string;
	superficie: string;
	risques: string;
	effectifsacteurs: string;
	ageacteurs: string;
	effectifspublic: string;
	agepublic: string;
	besoinsparticuliers: string;
	dureepresencepublic: string;
	public: string;
	structurePermanente: boolean;
	structureNonPermanente: boolean;
	structureType: string;
	voiePublique: string;
	dimespacepublic: string;
	distancebrancardage: string;
	longpente: string;
	autrecondition: string;
	sdis: string;
	sdisdistance: string;
	hopital: string;
	hopitaldistance: string;
	arrete: boolean;
	avisSecurite: boolean;
	planSite: boolean;
	annuaire: boolean;
	autreDoc: boolean;
	other: string;
	medecin: boolean;
	docName: string;
	docTelephone: string;
	infirmier: boolean;
	kine: boolean;
	otherSoignant: string;
	ambulance: boolean;
	otherAmbulance: string;
	smur: boolean;
	pompier: boolean;
	police: boolean;
	gendarmerie: boolean;
	otherSecours: string;
	villeDemande: string;
	dateDemande: string;
	demandeur: string;
	confirmation: boolean;
	files: FileList | null;
	comment: string;
	representant: string;
	replegal: string;
	fonctionreplegal: string;
	date: string;
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
		organism: "",
		siegesocial: "",
		telephonefixe: "",
		telephoneportable: "",
		email: "",
		nom: "",
		fonction: "",
		eventname: "",
		activite: "",
		dateDebut: "",
		dateFin: "",
		horaires: "",
		contact: "",
		contactemail: "",
		contacttel: "",
		adresse: "",
		circuit: "",
		typeCircuit: "",
		superficie: "",
		risques: "",
		effectifsacteurs: "",
		ageacteurs: "",
		effectifspublic: "",
		agepublic: "",
		besoinsparticuliers: "",
		dureepresencepublic: "",
		public: "",
		structurePermanente: false,
		structureNonPermanente: false,
		structureType: "",
		voiePublique: "",
		dimespacepublic: "",
		distancebrancardage: "",
		longpente: "",
		autrecondition: "",
		sdis: "",
		sdisdistance: "",
		hopital: "",
		hopitaldistance: "",
		arrete: false,
		avisSecurite: false,
		planSite: false,
		annuaire: false,
		autreDoc: false,
		other: "",
		medecin: false,
		docName: "",
		docTelephone: "",
		infirmier: false,
		kine: false,
		otherSoignant: "",
		ambulance: false,
		otherAmbulance: "",
		smur: false,
		pompier: false,
		police: false,
		gendarmerie: false,
		otherSecours: "",
		villeDemande: "",
		dateDemande: "",
		demandeur: "",
		confirmation: false,
		files: null,
		comment: "",
		representant: "",
		replegal: "",
		fonctionreplegal: "",
		date: "",
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
		const { name, value, type } = e.target;

		const newValue =
			type === "checkbox" && "checked" in e.target
				? (e.target as HTMLInputElement).checked
				: value;

		setFormState((prev) => ({
			...prev,
			[name]: newValue,
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
		// Validation du formulaire via case a cochet
		if (!formState.confirmation) {
			alert(
				"Veuillez confirmer que les informations saisies sont exactes en cochant la case prévue à cet effet.",
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
