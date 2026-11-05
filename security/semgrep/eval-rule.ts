function unsafe(input: string) {
  // ruleid: javascript-eval
  return eval(input)
}

function safe(input: string) {
  // ok: javascript-eval
  return JSON.parse(input)
}
