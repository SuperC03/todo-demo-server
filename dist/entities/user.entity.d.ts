import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    imageURL: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=user.entity.d.ts.map