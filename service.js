import dbModel from "./db.js";

const testService = async (request) => {
  const data = request.body
  const insertingData = await dbModel.insertQuery(data)
  return insertingData
}

export default { testService }