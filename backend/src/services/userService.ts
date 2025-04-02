import { createUser } from "../repository/userRepositories";
import { hashPassword } from "../utils/hash"

export const registerUser = async (data: any) => {
    const hashedPassword = await hashPassword(data.password);
    return createUser({ ...data, password: hashedPassword });
}