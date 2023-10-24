import { Router } from "express";
import Book from "../model/Book.js";

const router = new Router()

router.route('/add-book').post(async (req, res) => {
    const book = await Book.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    })
    book.save()
})

router.route('/').get(async (req, res) => {
    const book = await Book.find()
    res.json(book)
})

router.route('/read-book/:_id').get(async (req, res) => {
    const book = await Book.findById(req.params._id)
    res.json(book)
})

router.route('/update-book/:_id').put(async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params._id, {
        $set: {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }
    })
    res.json(book)
})

router.route('/delete-book/:_id').delete(async (req, res) => {
    await Book.findByIdAndDelete(req.params._id)
})

export default router