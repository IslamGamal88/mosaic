import React from "react";
import { MosaicTile } from "@prisma/client";
import { Box } from "@chakra-ui/react";

interface TileProps {
  tile: MosaicTile;
  children: React.ReactNode;
  color: string;
  handleClick: (
    e: React.MouseEvent<HTMLElement>,
    tile: MosaicTile,
    color: string
  ) => void;
}

const Tile: React.FC<TileProps> = ({ handleClick, tile, color, children }) => {
  return (
    <Box
      border={"1px"}
      bg={tile?.color}
      onClick={(e: React.MouseEvent<HTMLElement>) =>
        handleClick(e, tile, color)
      }
    >
      {children}
    </Box>
  );
};

export default Tile;
