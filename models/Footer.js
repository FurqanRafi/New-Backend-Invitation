const mongoose = require("mongoose");

const FooterSchema = new mongoose.Schema({
  logo: String,
  description: String,
  copyright: String,
  address: String,
  mapEmbedUrl: String,
  socaillinks: [
    {
      plateform: String,
      icon: String,
      url: String,
    },
  ],
  navlinks: [
    {
      names: String,
      links: String,
    },
  ],
  quicklinks: [
    {
      name: String,
      link: String,
    },
  ],
});

module.exports = mongoose.model("Footer", FooterSchema);
