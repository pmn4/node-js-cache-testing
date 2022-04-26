function fnPlanDemo(req, res, _next) {
  const { headers } = req;

  Object.keys(headers)
    .filter((key) => key.toLowerCase().includes("x-header-"))
    .forEach((key) => res.set(key, headers[key]));

  return res.send("Plans Page!");
}

module.exports = { fnPlanDemo };
