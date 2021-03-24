export interface Facture {
    id?: number,
    numFacture: string,
	libele: string,
	nbrEcheanciers: number,
    acompte: number,
    montAVerser: number,
    montVerse: number,
    resteAPayer: number,
    commandes?:object,
    contrat?: object
 
}
