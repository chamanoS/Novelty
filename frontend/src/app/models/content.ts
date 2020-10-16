export interface ContentResponse {
    status: number;
    message: string;
    data: Content [];
}
export interface Content {
    id: number;
    title: string;
    content:string
}

export interface AnswerResponse {
    status: number;
    message: string;
    data: Answer [];
}
export interface Answer {
    id : number  ;
    user_answer: string ;
}