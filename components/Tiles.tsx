import React, { useContext } from "react";
import { Grid } from "@chakra-ui/react";
import Tile from "./Tile";
import { MosaicTile } from "@prisma/client";
import useSWRMutation from "swr/mutation";
import { ClipboardContext } from "../contexts/clipboard";

interface Props {
  tiles: MosaicTile[];
}
const Tiles: React.FC<Props> = ({ tiles }) => {
  const { color } = useContext(ClipboardContext);

  const sendRequest = async (url: RequestInfo, { arg }: any): Promise<any> => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(arg),
    });
  };

  const { trigger } = useSWRMutation("/api/updateTiles", sendRequest);

  const handleTileClick = async (
    e: React.MouseEvent<HTMLElement>,
    tile: MosaicTile,
    newColor: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (tile && tile.color !== newColor) {
      await trigger({ tile: { ...tile, color: newColor } });
    }
  };

  return (
    <Grid templateColumns="repeat(10, 1fr)" gap={6}>
      {tiles.map((tile, i) => (
        <Tile handleClick={handleTileClick} key={i} tile={tile} color={color}>
          {`${tile.x} - ${tile.y} - ${tile.color}`}
        </Tile>
      ))}
    </Grid>
  );
};

export default Tiles;
