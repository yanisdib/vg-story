/**
 * Comment is an interface which describes properties
 * an article's comment should be created with
 */
export interface Comment {
    id: string;
    body: string;
    createdAt: number;
}