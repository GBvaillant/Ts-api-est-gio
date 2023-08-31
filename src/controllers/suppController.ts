import { error } from 'console'
import { prisma } from '../database'
import { Request, Response } from 'express'

export default {

    async createSupp(req: Request, res: Response) {
        try {
            const { razao, end, email, nome } = req.body
            if (razao === null) {
                res.json({
                    error: true,
                    msg: 'Digite os dados corretamente !!'
                })
            }
            if (end === null) {
                res.json({
                    error: true,
                    msg: 'Digite os dados corretamente !!'
                })
            }
            if (email === null) {
                res.json({
                    error: true,
                    msg: 'Digite os dados corretamente !!'
                })
            }
            if (nome === null) {
                res.json({
                    error: true,
                    msg: 'Digite os dados corretamente !!'
                })
            }

            const supp = await prisma.fornecedor.create({
                data: {
                    razao,
                    end,
                    email,
                    nome,
                }
            })
            return res.json({
                error: false,
                supp
            })
        } catch (error) {

        }
    }
}
