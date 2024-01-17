const users = require("../Model/Model");
exports.createuser = async (req, res) => {
  try {
    const user = new users(req.body);
    await user.save();
    res.status(200).send({ message: "User has been created!", user });
  } catch (error) {
    res.status(500).send({ message: "User creation has failed!" });
  }
};
exports.getuser = async (req, res) => {
  try {
    const user = await users.find();

    res.status(200).send({ message: "User has been found!", all_users: user }); //res.data in the payload for from the action
  } catch (error) {
    res.status(500).send({ message: "User wasn't found!" });
  }
};
exports.deleteuser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await users.findByIdAndDelete(id);

    res
      .status(200)
      .send({ message: "User has been deleted!", user_deleted: user });
  } catch (error) {
    res.status(500).send({ message: "User has failed to delete!" });
  }
};
exports.updateuser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await users.findByIdAndUpdate(id, { $set: req.body });

    res
      .status(200)
      .send({ message: "User has been updated!", user_update: user });
  } catch (error) {
    res.status(500).send({ message: "User has failed to update!" });
  }
};
