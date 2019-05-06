
export class Personne {
    id: number;
    nom: string;
    tel: LongRange;
    mail: string;
    userName: string;
    passWord: string;
    constructor(id: number, nom: string, tel: LongRange, mail: string, userName: string, passWord: string,
        ) {
        this.id = id;
        this.nom = nom;
        this.tel = tel;
        this.mail = mail;
        this.userName = userName;
        this.passWord = passWord;


    }
}


export class Client extends Personne {
    public statut: string;


constructor(id: number, nom: string, tel: LongRange, mail: string, userName: string, passWord: string, statut: string) {
    super(id, nom, tel, mail, userName, passWord);

    this.statut = statut;



}

public static createBlank() {
    return new Client(-1, '', null , '', '', '', '');
}
public static clientFromJSON(obj: any): Client {
    return new Client(obj.id, obj.nom, obj.tel, obj.mail, obj.userName, obj.passWord, obj.statut);
}
}




