import { create, deleteCard, findAll, findById, update } from "./repository"

export const createCard = async (data: any) => {
    return create({ ...data });
}
export const getCardById = async (data: any) => {
    return findById({ ...data });
}
export const getAllCards = async (data: any) => {
    return findAll({ ...data });
}
export const updateMyCard = async (data: any) => {
    return update({ ...data })
}
export const deleteMyCard = async (data: any) => {
    return deleteCard({ ...data });
}