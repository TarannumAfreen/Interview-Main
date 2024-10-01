const mongoose = require("mongoose");
async function connectoDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://SalmaSanubar:Salma_549@salmacluster.y5azttk.mongodb.net/expenseTrackerUser"
    );
    console.log("DB is Connected Successfully");
  } catch (error) {
    console.error(error);
  }
}
connectoDB();

module.exports = connectoDB;
