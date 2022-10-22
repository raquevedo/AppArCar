import * as React from "react";
import '../App/App.css'
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function TextCards(props) {
  return (
    <div className="callout setup">
      <CardContent>

        <Typography variant="h5" component="div">
          {props.title}
          {props.value}
        </Typography>
      </CardContent>
   </div>
  );
}
