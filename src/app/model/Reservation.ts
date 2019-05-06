import { Client } from './Client';
import { Activite } from './Activite';



export class Reservation {
    id: number;
    dtDeb: string;
    hrDeb: string;
    activite: Activite[];
    client: Client;

    constructor(id: number,  dtDeb: string, hrDeb: string, act: Activite[], client: Client) {
        this.id = id;
        this.dtDeb = dtDeb;
        this.hrDeb = hrDeb;
        this.activite = act;
        this.client = client;

    }

    public static createBlank() {
        return new Reservation(-1, '', '', [], null);
    }
    public static reservationFromJSON(obj: any): Reservation {
        return new Reservation(obj.id, obj.dtDeb, obj.hrDeb, obj.act, obj.client);
    }

}
