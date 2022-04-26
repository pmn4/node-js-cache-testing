function fnPlanDemo(req, res, _next) {
  const { headers } = req;

  console.log({ headers });

  Object.keys(headers)
    .filter((key) => key.toLowerCase().includes("x-header-"))
    .forEach((key) => res.set(key.replace(/X-Header-/i, ""), headers[key]));

  return res.send(`
  Plans Page!
  <pre>
  ${JSON.stringify(res.getHeaders(), null, 2)}
  </pre>
`);
}

module.exports = { fnPlanDemo };
