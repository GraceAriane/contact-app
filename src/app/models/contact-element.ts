export class ContactElement{
    id?: number;
    prenom!: string;
    nom!: string;
    numero!: number;

    profil?: string;
    entreprise?: string;
    email?: string;
    url?: string;

    constructor(prenom: string, nom: string, numero: number){
        this.prenom = prenom;
        this.nom = nom;
        this.numero = numero;
    }

    setProfile(profil: string){
        this.profil= profil;
    }
    withProfil(profil: string): ContactElement{
        this.setProfile(profil);
        return this;
    }
    setEntreprise(entreprise: string){
        this.entreprise= entreprise;
    }
    withEntreprise(entreprise: string): ContactElement{
        this.setEntreprise(entreprise);
        return this;
    }
    setEmail(email: string){
        this.email= email;
    }
    withEmail(email: string): ContactElement{
        this.setEmail(email);
        return this;
    }
    setUrl(url: string){
        this.url= url;
    }
    withUrl(url: string): ContactElement{
        this.setUrl(url);
        return this;
    }
}