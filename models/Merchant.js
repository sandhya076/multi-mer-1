import Mongoose from "mongoose";

const SRSchema = Mongoose.Schema({
  FullName: String,
  Email: String,
  PhoneNo: String,
  State: String,
  Item: String,
  Price: String,
  Password : String,
});

const SRMerchant = Mongoose.model("SRMerchant", SRSchema);

export default SRMerchant;
