export interface Post {
    id: string;
    post: string;
    authorId: string;
    createdAt: Date;
    modifiedAt: Date;
    numberOfLikes?: number;
    numberOfDislikes?: number;
}