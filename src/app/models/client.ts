export interface Client {
        id?: number;
        numero: string;
        prenom: string;
        nom: string;
        dateNaiss: string;
        lieuNaiss: string;
        cni: string; 
        dateDCni: string;
        dateECni: string;
        domicile: string; 
        adresse: string;
        telephone: number; 
        contrat?: object;
    
    
}
