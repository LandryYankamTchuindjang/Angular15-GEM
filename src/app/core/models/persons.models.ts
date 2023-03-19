
export class Adress{
    id?: number;
    town?: string;
    email?: string;
    quarter?: string;
    phone?: string
}

export class Person{
    id?: number;
    name?: string;
    firstname?: string;
    sex?: string;
    adress?: Adress;
    birthday?: string;
}
