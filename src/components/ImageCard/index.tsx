import React from "react";
import { Card, CardOverflow, Typography } from "@mui/joy";

interface ImageCardProps {
  title: string;
  description: string;
  imageUrl: string;
  style: any;
  imgStyle?: any;
  cardStyle?: any;
  titleStyle?: any;
  onLoad?: (load: boolean) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  imageUrl,
  style,
  cardStyle,
  imgStyle,
  titleStyle,
  onLoad,
}) => {
  return (
    <Card sx={style}>
      <CardOverflow sx={cardStyle}>
        <img
          src={imageUrl}
          alt={title}
          style={imgStyle}
          onLoad={() => onLoad?.(true)}
        />
      </CardOverflow>
      {title && <Typography sx={titleStyle}>{title}</Typography>}
      {description && <Typography sx={{ mb: 2 }}>{description}</Typography>}
    </Card>
  );
};

export default ImageCard;
