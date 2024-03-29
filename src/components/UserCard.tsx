import React from "react";
import { IUserSummary } from "../models/UserModel";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface UserCardProps {
  user: IUserSummary;
  onClick?: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => (
  <Card sx={{ maxWidth: 345, mb: 2 }}>
    <CardActionArea onClick={onClick}>
      <CardMedia
        component="img"
        height="140"
        image={user.avatar_url}
        alt={user.login}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.login}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default UserCard;
