export interface UserSys {
  id?: number;
  username: string;
  password: string;
  token?: string;
  role: string;
  prenom: string;
  nom: string;
  dateNaiss: string;
  lieuNaiss: string;
  adresse: string;
  telephone: number;
  email?: string;
  isActive: boolean;
}


