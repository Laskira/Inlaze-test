import {connect} from 'mongoose'

export async function databaseConnection() {
    const database = await connect('mongodb://0.0.0.0:27017/Inlaze').then(() => {
      console.log('Mongodb Connection running');
    })
    .catch((err) => {
      console.log(err.message);
    });
}
