/**
 * Topic is an interface which describes properties
 * an article's topic should be created with
 */
export interface Topic {
    createdAt: number;
    id: string;
    name: string;
    permalink: string;
}