module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const name = req.query.num1;
  const name2 = req.query.num2;

  const outputBlob = name * name2;

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: outputBlob,
  };
};
