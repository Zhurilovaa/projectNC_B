//все данные для вкладки "контакты"

export interface ActualAdress{
    postalCode: number,
    city: string,
    street: string,
    build: number,
    office:  number,
}
export interface BusinessAddress{
    postalCode: number,
    city: string,
    street: string,
    build: number,
    office:  number,
}

export interface Requisites{
    OGRN: number,
    Name: string,
    INN: number,
    KPP: number,
}

export interface Contacts{
    nameOfTheOrganization: string,
    shortName: string,
    telephone: string,
    fax: string,
    email: string,
    actualAddress: ActualAdress,
    businessAddress:BusinessAddress,
    requisites: Requisites,        
}

export let contactsContent: Contacts[] = [
    {
        nameOfTheOrganization: 'Некоммерческая организация "Нижегородский онкологический научный центр"',
        shortName: 'Фонд "НОНЦ"',
        telephone: '(831)4155775',
        fax: '(831) 469 07 36',
        email: 'fondnonc@mail.ru',
        actualAddress: {
            postalCode: 603024,
            city: 'Н.Новгород',
            street: 'Невзоровых',
            build: 49,
            office:  9,
        },
        businessAddress:{
            postalCode: 603115,
            city: 'Н.Новгород',
            street: 'Тверская',
            build: 20,
            office:  9,
        },
        requisites: {
            OGRN: 1045207474663,
            Name: 'Фонд НОНЦ',
            INN: 5260139846,
            KPP: 526201001,
        },        
    }
];