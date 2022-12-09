import Mongoose from "mongoose";

const RSSchema = Mongoose.Schema({
  FullName: String,
  Email: String,
  PhoneNo: String,
  State: String,
  Password : String,
});

const SRCustomer = Mongoose.model("SRCustomer", RSSchema);
export default SRCustomer;
