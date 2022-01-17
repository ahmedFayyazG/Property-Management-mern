const Tanet = require("./../Model/Tanet");

exports.createTanet = async (req, res) => {
  try {
    const tanet = await Tanet.create(req.body);
    res.status(200).json({
      success: true,
      data: tanet,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllTanets = async (req, res) => {
  try {
    const tanet = await Tanet.find();
    if (!tanet) {
      res.status(400).json({
        success: false,
        Message: "No management Found",
      });
    }
    res.status(200).json({
      data: tanet,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.DeleteTanet = async (req, res) => {
  try {
    const tanet = await Tanet.findById(req.params.id);
    if (!tanet) {
      return res.status(400).json({
        Error: "Tanet Not Found",
      });
    }
    tanet.remove();
    res.status(200).json({
      Message: "Successfully Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
