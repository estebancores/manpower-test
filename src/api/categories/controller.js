const Model = require('./models')

exports.getAll = async (req, res) => {
    try {
        const rows = await Model.getAll()
        return res.json({
            data: rows,
            message: 'Fetched data'
        })
    } catch (e) {
        return res.status(e.status).json({ data: [], message: e.message })
    }
}

exports.get = async (req, res) => {
    try {
        const { id } = req.params
        const row = await Model.get(id)
        return res.json({
            data: row,
            message: 'Fetched data'
        })
    } catch (e) {
        return res.status(e.status).json({ data: [], message: e.message })
    }
}

exports.create = async (req, res) => {
    try {
        const element = req.body
        const created = await Model.create(element)
        return res.json({
            data: created,
            message: 'Created data'
        })
    } catch (e) {
        return res.status(e.status).json({ data: [], message: e.message })
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params
        const element = {
            ...req.body,
            updated_at: new Date()
        }
        const row = await Model.update(id, element)
        return res.json({
            data: row,
            message: 'Updated data'
        })
    } catch (e) {
        return res.status(e.status).json({ data: [], message: e.message })
    }
}

exports.delete = async (req, res) => {
    try {
        const { id } = req.params
        const row = await Model.deleteRow(id)
        return res.json({
            data: row,
            message: 'Deleted data'
        })
    } catch (e) {
        return res.status(e.status).json({ data: [], message: e.message })
    }
}