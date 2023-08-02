import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ImageList } from "@mui/material";

export default function CardCity() {
  return (
    <>
      <Typography variant="h1" color="initial">
        CARD CITY
      </Typography>
      <ImageList
        sx={{
          width: 500,
          height: 450,
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: "translateZ(0)",
        }}
        rowHeight={200}
        gap={1}
      ></ImageList>
    </>
  );
}
