export class CreateChildInfoDTO{
    //здесь нужно обозначить какие поля мы ожидаем в этом объекте
    //учитывая, что мы их не меняем, делаем сразу с модификатором readonly

    readonly nameChild: string;
    readonly monSym: number;
}