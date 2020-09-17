//Color to get quick feedback to console
const colors = require("colors");

const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const stringConnection =
  "mongodb+srv://admin:KWrTgmZI66tzQvPo@personalcluster.voep6.mongodb.net/andrewakosta-com";

//Connection to MongoDB
// ****
mongoose.set("useFindAndModify", false);
mongoose.connect(stringConnection, { useNewUrlParser: true }, (error, res) => {
  if (error) {
    console.log("Connection failed".red);
  } else {
    console.log("Connetion ssuccesful".green);

    app.listen(port, () => {
      console.log(
        "-----------------------------------------------------------------"
          .green
      );
      console.log(
        "|                                                               |"
          .green
      );
      console.log(
        "|                           API REST v1                         |"
          .green
      );
      console.log(
        "|                                                               |"
          .green
      );
      console.log(
        "-----------------------------------------------------------------"
          .green
      );
    });
  }
});
