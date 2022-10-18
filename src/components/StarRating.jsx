import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "../styles/Rating.css";

function StarRating({ rating, setRating, value }) {
  return (
    <>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <div className="rating">
          <Typography component="legend" className="text-rating">
            <h4>Search by rating:</h4>
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, rating) => {
              setRating(rating);
            }}
            size="large"
          />
        </div>
      </Box>
    </>
  );
}

export default StarRating;
