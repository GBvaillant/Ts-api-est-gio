import suppController from '../controllers/suppController'

export const router = app => {
    app.post('/addfornecedor', suppController.createFornecedor)
    app.get('/listarfornecedores', suppController.listFornecedor)
    app.get('/listarfornecedor/:id', suppController.listFornecedorId)
    app.delete('/deletarfornecedor/:id', suppController.deleteFornecedor)
    app.put('/editarfornecedor/:id', suppController.updateFornecedor)
}
