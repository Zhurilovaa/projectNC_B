// пока что создам интерфейс, т.к. мне пока для таких объектов не нужна какая-то реализация

// поля:
// ФИО
// Возраст (др?)
// Необходимая сумма
// Собранная сумма (она и будет меняться)
// Id каждого ребенка
// что-то ещё??
export interface Child{
    id: number, //возможно лучше string
    name: string,
    patronym: string,
    surname: string,
    needSum: number,
    donatSum: number,
}