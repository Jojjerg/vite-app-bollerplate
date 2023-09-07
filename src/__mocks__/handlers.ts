import { rest } from "msw";

const url = "YOUR_URL";

export const handlers = [
  rest.get(url, (req, res, ctx) => {
    return res(
      ctx.json()
    );
  }),
];
