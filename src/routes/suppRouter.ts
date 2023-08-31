import suppController from '../controllers/suppController'

export const router = app => {
    app.post('/addfornecedor', suppController.createSupp)
}

