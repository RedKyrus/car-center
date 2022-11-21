import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { page },
  } = req;
  const backedPage = Number(page) - 1;
  console.log(page);
  const customerInfoList = await client.customerInfo.findMany({
    take: 10,
    skip: backedPage * 10,
  });

  return res.json({
    ok: true,
    customerInfoList,
  });
}

export default withHandler({ methods: ["GET"], handler });
