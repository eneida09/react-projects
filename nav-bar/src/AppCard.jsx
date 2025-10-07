import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function AppCard({ sub, onClick, active }) {
  return (
    <Card
      onClick={onClick}
      sx={{
        maxWidth: 345,
        cursor: "pointer",
        marginBottom: 2,
        backgroundColor: active ? "#e0e0e0" : "white",
        border: active ? "2px solid #007bff" : "1px solid #ccc",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {sub.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
