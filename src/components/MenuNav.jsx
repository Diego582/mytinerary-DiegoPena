import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
export default function MenuNav({ handleClick }) {
  return (
    <div>
      <Button onClick={handleClick} variant="text" sx={{ color: "black" }}>
        <MenuRoundedIcon />
      </Button>
    </div>
  );
}
