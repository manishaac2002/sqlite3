import services from "./service.js";

const test = async (request, response) => {
  try {
    console.log("logging");
    const testResult = await services.testService(request)
    console.log(testResult);
    response.json(testResult) 
  } catch (error) {
    console.log(error);
  }
}

export default { test }