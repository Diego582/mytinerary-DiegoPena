import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
export default function MenuNav({ handleClick }) {
  console.log(handleClick,'esto handleClick ');
  return (
    <div>
      <Button onClick={handleClick} variant="text" sx={{ color: "black" }}>
        <MenuIcon />
      </Button>
    </div>
  );
}
