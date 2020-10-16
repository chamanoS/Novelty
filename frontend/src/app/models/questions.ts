export interface QuestionsResponse {
    status: number;
    message: string;
    data: Questions[];
}
export interface Questions {
    id: number;
    q_name: string;
}
