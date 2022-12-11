import React from "react";
import { Grid } from "@chakra-ui/react";
import ColorPalette from "./ColorPalette";
import Tiles from "./Tiles";
import { MosaicTile } from "@prisma/client";
interface Props {
  tiles: MosaicTile[];
}
const GameBoard: React.FC<Props> = ({ tiles }) => {
  return (
    <Grid height={"100%"} templateColumns="80% 20%" gap={12}>
      <Tiles tiles={tiles} />
      <ColorPalette />
    </Grid>
  );
};

export default GameBoard;
