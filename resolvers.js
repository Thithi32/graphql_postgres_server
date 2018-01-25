export default {
  Query: {
    allUsers: (parent, args, { models }) => models.User.findAll(),
    getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
  },

  Mutation: {
    createUser: (parent, args, { models }) => models.User.create(args),
    updateUser: (parent, { id, username }, { models }) =>
      models.User.update({ username }, { where: { id } }),
    deleteUser: (parent, args, { models }) => models.User.destroy({ where: args }),
  },
};
