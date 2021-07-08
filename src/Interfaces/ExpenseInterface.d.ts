export interface IExpenses {
    id: string;
    title: string;
    amount: number;
    date: Date;
}

export interface IForm {
    enteredTitle: string;
    enteredAmount: string;
    enteredDate: string;
}
