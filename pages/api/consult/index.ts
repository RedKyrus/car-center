import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  // const {
  //   query: { id },
  // } = req;

  const customerInfoList = await client.customerInfo.findMany({});

  return res.json({
    ok: true,
    customerInfoList,
  });
}

export default withHandler({ methods: ["GET"], handler });
