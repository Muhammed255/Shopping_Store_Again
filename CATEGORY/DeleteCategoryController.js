/**
 * Returning the list of Categories
 */
categoryController.get = async (req, res, next) => {
    const { user } = req;
    const query = { owner: user._id };
    try {
        const expense = await Expense.find(query);
        return res.send({ expense });
    } catch (e) {
        next(e);
    }
}
