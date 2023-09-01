import { prisma } from '../database'
import { Request, Response } from 'express'

export default {

    async createFornecedor(req: Request, res: Response) {
        try {
            const { razao, end, email, nome, nome2, email2, produto } = req.body
            const dados = [razao, end, email, nome, produto]

            if (dados == null) {
                res.json({
                    err: true,
                    msg: 'Preencha os campos corretamenete'
                })
            }

            const supp = await prisma.fornecedor.create({
                data: {
                    razao,
                    end,
                    nome,
                    email,
                    nome2,
                    email2,
                    produto
                }
            })
            return res.json({
                err: false,
                supp
            })
        } catch (err) {
            return res.json({ msg: err.message })
        }
    },

    async listFornecedor(req: Request, res: Response) {
        try {
            const fornecedores = await prisma.fornecedor.findMany({
                select: {
                    id: true,
                    razao: true,
                    end: false,
                    nome: false,
                    email: false,
                    nome2: false,
                    email2: false,
                    produto: true
                }
            })
            return res.json({
                err: false,
                msg: 'Fornecedores',
                fornecedores
            })
        } catch (err) {
            return res.json({ msg: err.message })
        }
    },

    async listFornecedorId(req: Request, res: Response) {
        try {
            const { id } = req.params
            const fornecedor = await prisma.fornecedor.findUnique({ where: { id: Number(id) } })

            return res.json({
                err: false,
                msg: 'fornecedor' + id,
                fornecedor
            })
        } catch (err) {
            return res.json({ msg: err.message })
        }
    },

    async deleteFornecedor(req: Request, res: Response) {
        try {
            const { id } = req.params
            const deleteSupp = await prisma.fornecedor.delete({
                where: { id: Number(id) }
            })

            return res.json({
                err: false,
                msg: 'Fornecedor deletado',
                deleteSupp
            })
        } catch (err) {
            return res.json({ msg: err.message })
        }
    },

    async updateFornecedor(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { razao, end, nome, email, nome2, email2, produto } = req.body
            const updateSupp = await prisma.fornecedor.update({
                where: {
                    id: Number(id)
                },
                data: {
                    razao,
                    end,
                    nome,
                    email,
                    nome2,
                    email2,
                    produto
                }
            })
            return res.json({
                err: false,
                msg: 'Dados atualizados',
                updateSupp
            })
        }

        catch (err) {
            return res.json({ msg: err.message })
        }
    }
}
