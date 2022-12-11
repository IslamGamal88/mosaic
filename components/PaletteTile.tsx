import { FC } from "react";
import { Box } from "@chakra-ui/react";

interface PaletteTileProps {
  bg: string;
  handleClick: (e: React.MouseEvent<HTMLElement>, bg: string) => void;
}

const PaletteTile: FC<PaletteTileProps> = ({ bg, handleClick }) => {
  return (
    <Box
      onClick={(e: React.MouseEvent<HTMLElement>) => handleClick(e, bg)}
      bg={bg}
    />
  );
};

export default PaletteTile;
