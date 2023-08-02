import { Button } from "@mui/material";

export default function ButNav({ variant, color, icon, text }) {
  return (
    <Button
      variant={variant}
      startIcon={icon}
      sx={{ color: { color }, m: 1, p: 1, pr: 2, pl: 2 }}
    >
      {text}
    </Button>
  );
}
