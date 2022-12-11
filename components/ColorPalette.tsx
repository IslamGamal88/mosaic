import React, { useContext } from "react";
import { Grid } from "@chakra-ui/react";
import PaletteTile from "./PaletteTile";
import { colors } from "../constants/colors";
import { ClipboardContext } from "../contexts/clipboard";

const ColorPalette: React.FC = () => {
  const { color, setColor } = useContext(ClipboardContext);

  const handlePaletteTileClick = (
    e: React.MouseEvent<HTMLElement>,
    bg: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setColor(bg);
  };

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {colors.map((color, i) => (
        <PaletteTile handleClick={handlePaletteTileClick} key={i} bg={color} />
      ))}
    </Grid>
  );
};

export default ColorPalette;
