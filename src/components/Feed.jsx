import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

import Post from "./Post";

function Feed() {
  return (
    <Box
      flex={4}
      p={2}
      //   sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}

export default Feed;
