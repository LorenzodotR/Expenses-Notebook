import { create, deleteMyBank, findAll, findById, update } from "./repository"

export const createBank = async (data: any) => {
    return create({ ...data });
}
export const getBankById = async (data: any) => {
    return findById({ ...data });
}
export const getAllBanks = async (data: any) => {
    return findAll({ ...data });
}
export const updateBank = async (data: any) => {
    return update({ ...data })
}
export const deleteBank = async (data: any) => {
    return deleteMyBank({ ...data });
}