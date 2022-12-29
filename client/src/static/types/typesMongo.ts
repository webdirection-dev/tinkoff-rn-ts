export interface IUser {
    _id: string;
    createdAt: string;
    username: string;
    password: string;
    userPic: string;
    isAdmin: string;
    updatedAt: string;
    accessToken?: string;
    status: string;
}

export interface IStory {
    _id: string;
    title: string;
    images: string[];
}
