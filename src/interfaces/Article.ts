import {
    Comment,
    ImageAttributes,
    Topic
} from '.';


/**
 * Article is an interface which describes properties
 * an article should be created with
 */
export interface Article {
    author: string;
    backgroundHex?: string;
    body?: string;
    comments?: Comment[];
    createdAt: number;
    editedAt?: number;
    frontImage: ImageAttributes;
    imageGallery?: {
        id: string,
        images: ImageAttributes[]
    }[];
    id: string;
    isFeatured?: boolean;
    permalink: string;
    title: string;
    topics: Topic[];
}