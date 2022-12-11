import { createContext, useState } from "react";

interface IClipboardContext {
  color: string;
  setColor: (color: string) => void;
}

interface Props {
  children: React.ReactNode;
}

export const ClipboardContext = createContext<IClipboardContext>({
  color: "",
  setColor: () => {},
});

export const ColorContextProvider = ({ children }: Props) => {
  const [color, setColor] = useState("");

  return (
    <ClipboardContext.Provider value={{ color, setColor }}>
      {children}
    </ClipboardContext.Provider>
  );
};
