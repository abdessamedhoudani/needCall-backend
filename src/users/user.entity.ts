export class UserEntity {
    id: string;
    username: string;
    password: string;
    email?: string;
    role?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    deleted?: boolean;
    deletedBy?: string;
    deletedById?: string;
}