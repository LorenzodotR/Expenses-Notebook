import { create, deleteMyExpense, findAll, findById, update } from "./repository"

export const createExpense = async (data: any) => {
    return create({ ...data });
}
export const getExpenseById = async (data: any) => {
    return findById({ ...data });
}
export const getAllExpenses = async (data: any) => {
    return findAll({ ...data });
}
export const updateExpense = async (data: any) => {
    return update({ ...data })
}
export const deleteExpense = async (data: any) => {
    return deleteMyExpense({ ...data });
}