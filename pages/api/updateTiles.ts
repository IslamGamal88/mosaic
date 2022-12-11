// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MosaicTile, prisma, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MosaicTile[]>
) {
  const prisma = new PrismaClient();
  const { x, y, color }: MosaicTile = JSON.parse(req.body).tile;

  await prisma.mosaicTile.update({
    where: {
      x_y: {
        x,
        y,
      },
    },
    data: {
      color,
    },
  });

  const tiles = await prisma.mosaicTile.findMany({});
  res.status(200).json(tiles);
}
