//from MongoDB
export interface IUser {
    _id: string;
    createdAt: string;
    isAdmin: string;
    password: string;
    profilePic: string;
    updatedAt: string;
    username: string;
    accessToken?: string;
}
