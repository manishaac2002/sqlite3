import services from "./service.js";

const test = async (request, response) => {
  try {

    const testResult = await services.testService(request)
    response.json("Data inserted successfully")

  } catch (error) {
    console.log(error);
  }
}

export default { test }