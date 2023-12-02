import { User } from "../entities/user.entity";

export interface LoginResponse{
    user: User;
    token: string;
}

export class RegisterDto{
    user: User;
    token: string;
}