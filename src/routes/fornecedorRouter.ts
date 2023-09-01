import fornecedorController from '../controllers/fornecedorController'

export const router = app => {
    app.post('/addfornecedor', fornecedorController.createFornecedor)
    app.get('/listarfornecedores', fornecedorController.listFornecedor)
    app.get('/listarfornecedor/:id', fornecedorController.listFornecedorId)
    app.delete('/deletarfornecedor/:id', fornecedorController.deleteFornecedor)
    app.put('/editarfornecedor/:id', fornecedorController.updateFornecedor)
}
