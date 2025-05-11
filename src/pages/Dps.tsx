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
			<div className="flex flex-wrap gap-4 mb-6">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline">À quoi sert cette demande ?</Button>
					</DialogTrigger>
					<DialogContent className="max-h-[80vh] overflow-y-auto">
						<DialogHeader>
							<DialogTitle className="font-bold">
								À quoi sert ce document ?
							</DialogTitle>
						</DialogHeader>
						<p className="pt-8">
							Ce document permet à l'UDPS de préparer un dispositif de secours
							adapté à votre événement.
						</p>
						<p className="pt-8 italic font-serif">
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
						<ul className="list-disc list-inside pt-8 font-semibold">
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
					<DialogContent className="max-h-[80vh] overflow-y-auto">
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
							className="col-span-2"
						/>
						<Textarea
							name="siegesocial"
							value={formState.siegesocial}
							placeholder="Adresse siège social"
							onChange={handleInputChange}
							className="h-16 col-span-2"
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
						<Input
							name="email"
							value={formState.email}
							placeholder="Email"
							type="email"
							onChange={handleInputChange}
							required
							className="col-span-2"
						/>
						<Input
							name="nom"
							value={formState.nom}
							placeholder="Représenté par"
							onChange={handleInputChange}
						/>
						<Input
							name="fonction"
							value={formState.fonction}
							placeholder="Fonction"
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
							name="eventname"
							value={formState.eventname}
							placeholder="Nom de l'evenement"
							onChange={handleInputChange}
						/>
						<Input
							name="activite"
							value={formState.activite}
							placeholder="Type d’activité"
							onChange={handleInputChange}
						/>

						<fieldset className="border border-gray-300 col-span-2 md:col-span-1 rounded-md p-4">
							<legend className="font-semibold mb-2">
								Date de début de l'événement
							</legend>
							<Input
								name="dateDebut"
								value={formState.dateDebut}
								placeholder="Date de début"
								type="date"
								onChange={handleInputChange}
							/>
						</fieldset>
						<fieldset className="border border-gray-300 col-span-2 md:col-span-1 rounded-md p-4">
							<legend className="font-semibold mb-2">
								Date de fin de l'événement
							</legend>
							<Input
								name="dateFin"
								value={formState.dateFin}
								placeholder="Date de fin"
								type="date"
								onChange={handleInputChange}
							/>
						</fieldset>

						<Input
							name="horaires"
							value={formState.horaires}
							placeholder="Horaires de l'événement pour chaque journée"
							onChange={handleInputChange}
							className="col-span-2"
						/>
						<Input
							name="contact"
							value={formState.contact}
							placeholder="Nom du contact sur place"
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
						<Textarea
							name="adresse"
							value={formState.adresse}
							placeholder="Adresse"
							onChange={handleInputChange}
							className="h-16 col-span-2"
						/>
						<fieldset className="col-span-2 border border-gray-300 rounded-md p-4">
							<legend className="font-semibold mb-2">
								L'événement comporte-t-il un circuit ?
							</legend>

							<label className="flex items-center gap-2 mb-2">
								<input
									type="radio"
									name="circuit"
									value="oui"
									checked={formState.circuit === "oui"}
									onChange={handleInputChange}
									className="accent-blue-950"
								/>
								<span>Oui</span>
							</label>

							<label className="flex items-center gap-2">
								<input
									type="radio"
									name="circuit"
									value="non"
									checked={formState.circuit === "non"}
									onChange={handleInputChange}
									className="accent-blue-950"
								/>
								<span>Non</span>
							</label>
						</fieldset>
						{formState.circuit === "oui" && (
							<fieldset className="col-span-2 border border-gray-300 rounded-md p-4">
								<legend className="font-semibold mb-2">Type de circuit</legend>

								<label className="flex items-center gap-2 mb-2">
									<input
										type="radio"
										name="typeCircuit"
										value="ouvert"
										checked={formState.typeCircuit === "ouvert"}
										onChange={handleInputChange}
										className="accent-blue-950"
									/>
									<span>Ouvert</span>
								</label>

								<label className="flex items-center gap-2">
									<input
										type="radio"
										name="typeCircuit"
										value="ferme"
										checked={formState.typeCircuit === "ferme"}
										onChange={handleInputChange}
										className="accent-blue-950"
									/>
									<span>Fermé</span>
								</label>
							</fieldset>
						)}

						<Input
							name="superficie"
							value={formState.superficie}
							placeholder="Superficie : distance maxi entre les 2 points les plus éloignés du site"
							onChange={handleInputChange}
							className="col-span-2"
						/>
						<Textarea
							name="risques"
							value={formState.risques}
							placeholder="Risques particuliers"
							onChange={handleInputChange}
							className="h-20 col-span-2"
						/>
					</div>
				</section>

				{/* NATURE DE LA DEMANDE */}
				<section className="rounded-lg border p-4 mb-6">
					<h2 className="text-xl font-semibold mb-2">NATURE DE LA DEMANDE</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<Input
							name="effectifsacteurs"
							value={formState.effectifsacteurs}
							placeholder="Effectif des acteurs"
							onChange={handleInputChange}
						/>
						<Input
							name="ageacteurs"
							value={formState.ageacteurs}
							placeholder="Tranche d’âge des acteurs en simultané à l'instant T"
							onChange={handleInputChange}
						/>
						<Input
							name="effectifspublic"
							value={formState.effectifspublic}
							placeholder="Effectif du public en simultané à l'instant T"
							onChange={handleInputChange}
						/>
						<Input
							name="agepublic"
							value={formState.agepublic}
							placeholder="Tranche d’âge du public"
							onChange={handleInputChange}
						/>
						<Textarea
							name="besoinsparticuliers"
							value={formState.besoinsparticuliers}
							placeholder="Personnes ayant des besoins particuliers : communication, mobilité, autre"
							onChange={handleInputChange}
							className="h-20 col-span-2"
						/>

						<Input
							name="dureepresencepublic"
							value={formState.dureepresencepublic}
							placeholder="Durée de présence du public"
							onChange={handleInputChange}
							className="col-span-2"
						/>
						<fieldset className="col-span-2 border border-gray-300 rounded-md p-4">
							<legend className="font-semibold mb-2">Public</legend>

							<select
								id="public"
								name="public"
								value={formState.public}
								onChange={handleInputChange}
								className="w-full border rounded-md px-3 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
							>
								<option value="communication">Assis</option>
								<option value="mobilite">Debout statique</option>
								<option value="autre">Debout dynamique</option>
							</select>
						</fieldset>
					</div>
				</section>

				{/* CARACTERISTIQUE DE L’ENVIRONNEMENT ET DE L’ACCESSIBILITE DU SITE  */}
				<section className="rounded-lg border p-4 mb-6">
					<h2 className="text-xl font-semibold mb-2">
						CARACTERISTIQUE DE L’ENVIRONNEMENT ET DE L’ACCESSIBILITE DU SITE{" "}
					</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<fieldset className="col-span-2 border border-gray-300 rounded-md p-4">
							<legend className="font-semibold mb-2">Structure</legend>

							<label className="flex items-center gap-2 mb-2">
								<input
									type="checkbox"
									name="structurePermanente"
									checked={formState.structurePermanente}
									onChange={handleInputChange}
									className="w-5 h-5 accent-blue-950"
								/>
								<span>Permanente</span>
							</label>

							<label className="flex items-center gap-2 mb-4">
								<input
									type="checkbox"
									name="structureNonPermanente"
									checked={formState.structureNonPermanente}
									onChange={handleInputChange}
									className="w-5 h-5 accent-blue-950"
								/>
								<span>Non permanente</span>
							</label>

							{formState.structureNonPermanente && (
								<input
									type="text"
									name="structureType"
									value={formState.structureType}
									onChange={handleInputChange}
									placeholder="Type de structure non permanente (ex. chapiteau)"
									className="w-full border rounded-md px-3 py-2"
								/>
							)}
						</fieldset>
						<fieldset className="col-span-2 border border-gray-300 rounded-md p-4">
							<legend className="font-semibold mb-2">
								La manifestation utilise-t-elle la voie publique ?
							</legend>

							<label className="flex items-center gap-2 mb-2">
								<input
									type="radio"
									name="voiePublique"
									value="oui"
									checked={formState.voiePublique === "oui"}
									onChange={handleInputChange}
									className="accent-blue-950"
								/>
								<span>Oui</span>
							</label>

							<label className="flex items-center gap-2">
								<input
									type="radio"
									name="voiePublique"
									value="non"
									checked={formState.voiePublique === "non"}
									onChange={handleInputChange}
									className="accent-blue-950"
								/>
								<span>Non</span>
							</label>
						</fieldset>

						<Input
							name="dimespacepublic"
							value={formState.dimespacepublic}
							placeholder="Dimension de l’espace naturel accessible au public"
							onChange={handleInputChange}
							className="col-span-2"
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
							placeholder="Longueur de pente du terrain"
							onChange={handleInputChange}
						/>
						<Textarea
							name="autrecondition"
							value={formState.autrecondition}
							placeholder="Autres conditions d'accès difficile"
							onChange={handleInputChange}
							className="h-16 col-span-2"
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
							placeholder="Centre d'incendie et de secours le plus proche"
							onChange={handleInputChange}
						/>
						<Input
							name="sdisdistance"
							value={formState.sdisdistance}
							placeholder="Distance"
							onChange={handleInputChange}
						/>
						<Input
							name="hopital"
							value={formState.hopital}
							placeholder="Structure hospitaliére de référence"
							onChange={handleInputChange}
						/>
						<Input
							name="hopitaldistance"
							value={formState.hopitaldistance}
							placeholder="Distance"
							onChange={handleInputChange}
						/>
					</div>
				</section>

				{/* DOCUMENTS JOINTS
				 */}
				<section className="rounded-lg border p-4 mb-6">
					<h2 className="text-xl font-semibold mb-2">DOCUMENTS JOINTS</h2>

					<div className="mt-4">
						<fieldset className="col-span-2 border border-gray-300 rounded-md p-4">
							<legend className="font-semibold mb-2">
								Liste documents fournis par l'organisation
							</legend>

							<label className="flex items-center gap-2 mb-2">
								<input
									type="checkbox"
									name="arrete"
									checked={formState.arrete}
									onChange={handleInputChange}
									className="w-4 h-4 accent-blue-950"
								/>
								<span>Arrêté municipal et/ou préfectoral</span>
							</label>

							<label className="flex items-center gap-2 mb-2">
								<input
									type="checkbox"
									name="avisSecurite"
									checked={formState.avisSecurite}
									onChange={handleInputChange}
									className="w-4 h-4 accent-blue-950"
								/>
								<span>Avis de la commission de sécurité</span>
							</label>

							<label className="flex items-center gap-2 mb-2">
								<input
									type="checkbox"
									name="planSite"
									checked={formState.planSite}
									onChange={handleInputChange}
									className="w-4 h-4 accent-blue-950"
								/>
								<span>Plans du site</span>
							</label>

							<label className="flex items-center gap-2">
								<input
									type="checkbox"
									name="annuaire"
									checked={formState.annuaire}
									onChange={handleInputChange}
									className="w-4 h-4 accent-blue-950"
								/>
								<span>Annuaire téléphonique du site</span>
							</label>
							<label className="flex items-center gap-2">
								<input
									type="checkbox"
									name="autreDoc"
									checked={formState.autreDoc}
									onChange={handleInputChange}
									className="w-4 h-4 accent-blue-950"
								/>
								<span>Autre(s) document(s)</span>
								<Input
									name="other"
									value={formState.other}
									placeholder="Autres pièces jointes"
									onChange={handleInputChange}
								/>
							</label>
						</fieldset>

						<label
							htmlFor="attachments"
							className="block font-medium mt-4 mb-1"
						>
							Joindre des fichiers:
						</label>
						<Input
							id="attachments"
							name="files"
							type="file"
							multiple
							onChange={handleFileChange}
						/>
						<Textarea
							name="comment"
							value={formState.comment}
							placeholder="Ajoutez ici un commentaire ou toute information complémentaire"
							onChange={handleInputChange}
							className="h-20 col-span-2 mt-4"
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

						<label className="flex items-center gap-2 mb-2">
							<span>Médecin</span>
							<input
								type="checkbox"
								name="medecin"
								checked={formState.medecin}
								onChange={handleInputChange}
								className="w-4 h-4 accent-blue-950"
							/>
							<Input
								name="docname"
								value={formState.docName}
								placeholder="Nom"
								onChange={handleInputChange}
							/>
							<Input
								name="docTelephone"
								value={formState.docTelephone}
								placeholder="Téléphone"
								onChange={handleInputChange}
							/>
						</label>

						<label className="flex items-center gap-2 mb-2">
							<span>Infirmier</span>
							<input
								type="checkbox"
								name="infirmier"
								checked={formState.infirmier}
								onChange={handleInputChange}
								className="w-4 h-4 accent-blue-950"
							/>
							<span>Kinésithérapeute</span>
							<input
								type="checkbox"
								name="Kine"
								checked={formState.kine}
								onChange={handleInputChange}
								className="w-4 h-4 accent-blue-950"
							/>
							<Input
								name="othersoignant"
								value={formState.otherSoignant}
								placeholder="Autres"
								onChange={handleInputChange}
							/>
						</label>

						<label className="flex items-center gap-2">
							<span>Ambulance privée</span>
							<input
								type="checkbox"
								name="ambulance"
								checked={formState.ambulance}
								onChange={handleInputChange}
								className="w-4 h-4 accent-blue-950"
							/>
							<Input
								name="otherAmbulance"
								value={formState.otherAmbulance}
								placeholder="Autres"
								onChange={handleInputChange}
							/>
						</label>
						<fieldset className="col-span-2 border border-gray-300 rounded-md p-4 mt-4">
							<legend className="font-semibold mb-2">Secours publics :</legend>

							<div className="flex flex-wrap items-center gap-6">
								<label className="flex items-center gap-2">
									<input
										type="checkbox"
										name="smur"
										checked={formState.smur}
										onChange={handleInputChange}
										className="w-4 h-4 accent-blue-950"
									/>
									<span>SMUR</span>
								</label>

								<label className="flex items-center gap-2">
									<input
										type="checkbox"
										name="pompier"
										checked={formState.pompier}
										onChange={handleInputChange}
										className="w-4 h-4 accent-blue-950"
									/>
									<span>Sapeur-pompier</span>
								</label>

								<label className="flex items-center gap-2">
									<input
										type="checkbox"
										name="police"
										checked={formState.police}
										onChange={handleInputChange}
										className="w-4 h-4 accent-blue-950"
									/>
									<span>Police</span>
								</label>

								<label className="flex items-center gap-2">
									<input
										type="checkbox"
										name="gendarmerie"
										checked={formState.gendarmerie}
										onChange={handleInputChange}
										className="w-4 h-4 accent-blue-950"
									/>
									<span>Gendarmerie</span>
								</label>
							</div>
						</fieldset>

						<Input
							name="othersecours"
							value={formState.otherSecours}
							placeholder="Autres"
							onChange={handleInputChange}
							className="col-span-2 mt-4"
						/>
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
