import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { FormProvider, useForm } from "@/context/FormContext"; // Import du contexte

const Dps = () => {
	return (
		<FormProvider>
			<Form />
		</FormProvider>
	);
};

const Form = () => {
	const { formState, handleFileChange, handleInputChange, handleSubmit } =
		useForm();

	return (
		<div className="max-w-4xl mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">
				FORMULAIRE DE DEMANDE D’UN DISPOSITIF PREVISIONNEL DE SECOURS
			</h1>

			{/* Modales d'information */}
			<div className="flex gap-4 mb-6">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline">À quoi sert cette demande ?</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle className="font-bold">
								À quoi sert ce document ?
							</DialogTitle>
						</DialogHeader>
						<p className="pt-8">
							Ce document permet à l'UDPS de préparer un dispositif de secours
							adapté à votre événement.
						</p>
						<p className="pt-8">
							L’arrêté du 7 novembre 2006, fixe le référentiel relatif aux
							dispositifs prévisionnels de secours (D.P.S.) dénommé usuellement
							« poste de secours ». Au travers de ce document, le législateur à
							souhaité offrir aux organisateurs, autorités de police, et tous
							les acteurs de la sécurité civile, un véritable outils de
							dimensionnement et donc un certains nombres de garanties
							(compétences et ressources humaines, moyens matériels).
						</p>
						<p className="pt-8">
							Les éléments à renseigner dans le présent formulaire nous
							permettrons de vous apporter la réponse la plus adapté
						</p>
						<ul className="list-disc list-inside pt-8 text-center">
							<li>I : Remplir et retourner le formulaire.</li>
							<li className="pt-2">
								II : Nous vous faisons parvenir une proposition sous forme d'une
								convention.
							</li>
							<li className="pt-2">
								III : Si notre proposition vous convient, vous nous retrounez la
								convention signée.
							</li>
						</ul>
					</DialogContent>
				</Dialog>

				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline">Mode d'emploi du formulaire</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle className="font-bold">
								NOTICE POUR COMPLETER LE FORMULAIRE DE DEMANDE D’UN DISPOSITIF
								PREVISIONNEL DE SECOURS (D.P.S.)
							</DialogTitle>
						</DialogHeader>
						<p className="underline font-semibold">Horaires :</p>
						<p>- horaires officiels de début et de fin de manifestation</p>
						<p className="underline font-semibold">
							Nom du contact sur place :
						</p>
						<p>
							- la personne désignée par l’organisateur ou l’autorité de police
							est l’interlocuteur privilégié avec le chef de poste de l’UDPS 19
							, sans toutefois ne pouvoir se substituer aux obligations légales
							et réglementaires qui incombent à l’organisateur.
						</p>
						<p className="underline font-semibold">Circuit : Ouvert</p>
						<p>
							- entend que l’accès à d’autres usagers (automobiles, cycles et
							piétons) et possible), ou bien que la chaussée est séparée par un
							balisage permettant la circulation et la réalisation des épreuves.
						</p>
						<p className="underline font-semibold">Risques particuliers :</p>
						<p>
							- stockage inflammable, feu d’artifice, présence d’animaux,
							barbecues, proximité d’une rivière, piscine, etc
						</p>
						<p className="underline font-semibold">Effectifs d'acteurs :</p>
						<p>
							- en théorie l’effectif des acteurs (compétiteurs, participants)
							n’entre pas en ligne de compte dans le calcul, toutefois à la
							demande de l’organisateur il peut être pris en considération
						</p>
						<p className="underline font-semibold">Effectif de public :</p>
						<p>
							- le nombre de participants est l’élément majeur pour dimensionner
							le D.P.S. il doit être le plus précis possible. Si l’effectif
							varie sensiblement par demi journée, le D.P.S. en sera tout autant
							adapté.
						</p>
						<p className="underline font-semibold">Structure : Permanente</p>
						<p>
							- construction fixe et durable (salle des fêtes, hall exposition,
							etc…)
						</p>
						<p className="underline font-semibold">
							Structure : Non permanente
						</p>
						<p>- tente, chapiteau ou en plein air</p>
						<p className="underline font-semibold">Voies publiques : oui</p>
						<p>
							- manifestation se déroulant entièrement ou partiellement sur une
							voie du domaine publique ou aux abords immédiat de celle-ci
						</p>
						<p className="underline font-semibold">Distance de brancardage :</p>
						<p>
							- distance en mètres qui sépare la structure fixe du poste de
							secours, à l’endroit le plus éloigné de l’enceinte de la
							manifestation.
						</p>
					</DialogContent>
				</Dialog>
			</div>

			<form onSubmit={handleSubmit} className="space-y-8">
				{/* ORGANISME DEMANDEUR */}
				<section className="rounded-lg border p-4 mb-6">
					<h2 className="text-xl font-semibold mb-2">ORGANISME DEMANDEUR</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<Input
							name="organism"
							value={formState.organism}
							placeholder="Raison sociale"
							onChange={handleInputChange}
							required
						/>
						<Input
							name="email"
							value={formState.email}
							placeholder="Email"
							type="email"
							onChange={handleInputChange}
							required
						/>
						<Input
							name="siegesocial"
							value={formState.siegesocial}
							placeholder="Siège social"
							onChange={handleInputChange}
						/>
						<Input
							name="adresse"
							value={formState.adresse}
							placeholder="Adresse"
							onChange={handleInputChange}
						/>
						<Input
							name="telephonefixe"
							value={formState.telephonefixe}
							placeholder="Téléphone fixe"
							onChange={handleInputChange}
						/>
						<Input
							name="telephoneportable"
							value={formState.telephoneportable}
							placeholder="Téléphone portable"
							onChange={handleInputChange}
						/>
					</div>
				</section>

				{/* CARACTERISTIQUES DE LA MANIFESTATION */}
				<section className="rounded-lg border p-4 mb-6">
					<h2 className="text-xl font-semibold mb-2">
						CARACTERISTIQUES DE LA MANIFESTATION
					</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<Input
							name="nom"
							value={formState.nom}
							placeholder="Nom du représentant"
							onChange={handleInputChange}
						/>
						<Input
							name="fonction"
							value={formState.fonction}
							placeholder="Fonction"
							onChange={handleInputChange}
						/>
						<Input
							name="replegal"
							value={formState.replegal}
							placeholder="Nom du représentant légal"
							onChange={handleInputChange}
						/>
						<Input
							name="fonctionreplegal"
							value={formState.fonctionreplegal}
							placeholder="Fonction du représentant légal"
							onChange={handleInputChange}
						/>
					</div>
				</section>

				{/* NATURE DE LA DEMANDE */}
				<section className="rounded-lg border p-4 mb-6">
					<h2 className="text-xl font-semibold mb-2">NATURE DE LA DEMANDE</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<Input
							name="activite"
							value={formState.activite}
							placeholder="Type d’activité"
							onChange={handleInputChange}
						/>
						<Input
							name="date"
							value={formState.date}
							placeholder="Date de l’événement"
							type="date"
							onChange={handleInputChange}
						/>
						<Input
							name="horaires"
							value={formState.horaires}
							placeholder="Horaires"
							onChange={handleInputChange}
						/>
					</div>
				</section>

				{/* CARACTERISTIQUE DE L’ENVIRONNEMENT ET DE L’ACCESSIBILITE DU SITE  */}
				<section className="rounded-lg border p-4 mb-6">
					<h2 className="text-xl font-semibold mb-2">
						CARACTERISTIQUE DE L’ENVIRONNEMENT ET DE L’ACCESSIBILITE DU SITE{" "}
					</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<Input
							name="contact"
							value={formState.contact}
							placeholder="Nom du contact"
							onChange={handleInputChange}
						/>
						<Input
							name="contactemail"
							value={formState.contactemail}
							placeholder="Email du contact"
							onChange={handleInputChange}
						/>
						<Input
							name="contacttel"
							value={formState.contacttel}
							placeholder="Téléphone du contact"
							onChange={handleInputChange}
						/>
						<Input
							name="superficie"
							value={formState.superficie}
							placeholder="Superficie"
							onChange={handleInputChange}
						/>
						<Input
							name="risques"
							value={formState.risques}
							placeholder="Risques particuliers"
							onChange={handleInputChange}
						/>
						<Input
							name="effectifsacteurs"
							value={formState.effectifsacteurs}
							placeholder="Effectif des acteurs"
							onChange={handleInputChange}
						/>
						<Input
							name="effectifspublic"
							value={formState.effectifspublic}
							placeholder="Effectif du public attendu"
							onChange={handleInputChange}
						/>
						<Input
							name="ageacteurs"
							value={formState.ageacteurs}
							placeholder="Tranche d’âge des acteurs"
							onChange={handleInputChange}
						/>
						<Input
							name="agepublic"
							value={formState.agepublic}
							placeholder="Tranche d’âge du public"
							onChange={handleInputChange}
						/>
						<Input
							name="dureepresencepublic"
							value={formState.dureepresencepublic}
							placeholder="Durée de présence du public"
							onChange={handleInputChange}
						/>

						<Input
							name="dimespacepublic"
							value={formState.dimespacepublic}
							placeholder="Dimension de l’espace accessible au public"
							onChange={handleInputChange}
						/>
						<Input
							name="distancebrancardage"
							value={formState.distancebrancardage}
							placeholder="Distance de brancardage (en m)"
							onChange={handleInputChange}
						/>
						<Input
							name="longpente"
							value={formState.longpente}
							placeholder="Longueur de pente éventuelle (en m)"
							onChange={handleInputChange}
						/>
						<Input
							name="autrecondition"
							value={formState.autrecondition}
							placeholder="Autres conditions d'accès difficile"
							onChange={handleInputChange}
						/>
					</div>
				</section>

				{/* STRUCTURES FIXE DE SECOURS PUBLICS LES PLUS PROCHES */}
				<section className="rounded-lg border p-4 mb-6">
					<h2 className="text-xl font-semibold mb-2">
						STRUCTURES FIXE DE SECOURS PUBLICS LES PLUS PROCHES
					</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<Input
							name="sdis"
							value={formState.sdis}
							placeholder="Centre de secours le plus proche (SDIS)"
							onChange={handleInputChange}
						/>
						<Input
							name="sdisdistance"
							value={formState.sdisdistance}
							placeholder="Distance du SDIS (en km)"
							onChange={handleInputChange}
						/>
						<Input
							name="hopital"
							value={formState.hopital}
							placeholder="Établissement hospitalier de référence"
							onChange={handleInputChange}
						/>
						<Input
							name="hopitaldistance"
							value={formState.hopitaldistance}
							placeholder="Distance de l’hôpital (en km)"
							onChange={handleInputChange}
						/>
					</div>
				</section>

				{/* DOCUMENTS JOINTS
				 */}
				<section className="rounded-lg border p-4 mb-6">
					<h2 className="text-xl font-semibold mb-2">DOCUMENTS JOINTS</h2>
					<Textarea
						name="comment"
						value={formState.comment}
						placeholder="Ajoutez ici un commentaire ou toute information complémentaire"
						onChange={handleInputChange}
					/>

					<div className="mt-4">
						<label htmlFor="attachments" className="block font-medium mb-1">
							Pièces jointes :
						</label>
						<Input
							id="attachments"
							name="files"
							type="file"
							multiple
							onChange={handleFileChange}
						/>
					</div>
				</section>
				<section className="rounded-lg border p-4 mb-6">
					{/* AUTRES SECOURS PRESENT SUR PLACE
					 */}
					<div className="mt-4">
						<label htmlFor="attachments" className="block font-medium mb-1">
							AUTRES SECOURS PRESENT SUR PLACE
						</label>
					</div>
				</section>

				{/* Bouton de soumission */}
				<Button type="submit" className="mt-6">
					Envoyer la demande
				</Button>
			</form>
		</div>
	);
};

export default Dps;
