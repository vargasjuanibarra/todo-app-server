import { connect } from "mongoose"


export const dbConnection = () => {
  connect('mongodb+srv://vargasjuanibarra:vHRZpZYqX7vaSa5w@cluster0.lschue3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to database'))
  .catch((error) => console.error(error));
}
