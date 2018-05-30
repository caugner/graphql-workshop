module.exports = {
  getAll(fn) {
    return (req, res, next) => {
      fn()
        .then(data => res.json({ data }))
        .catch(err => next(err));
    };
  },
  getById(fn, idName) {
    return (req, res, next) => {
      fn(req.params[idName])
        .then(data => res.json({ data }))
        .catch(err => next(err));
    };
  }
};
