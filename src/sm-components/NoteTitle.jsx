import * as React from "react";
import Typography from "@mui/material/Typography";

export default function TypographyTheme(props) {
  const day = new Date(props.date).toLocaleDateString();

  let title = props.title;

  if (props.title.length > 18){
     title = title.substr(0,18) + "..."
  }

  const style = {
    color: "#474BFF",
  }

  return (
    <div>
      <Typography sx={style} variant="button" noWrap display="block" gutterBottom>
        {title}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {day}
      </Typography>
    </div>
  );
}
