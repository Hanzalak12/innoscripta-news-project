import { IArticle } from "@/utils/interface";
import { Box, Card, CardContent, CardActions, CardMedia, IconButton, Typography } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface IProps {
  article: IArticle;
  ago?: string;
  onBookmark?: () => void;
  onHover?: () => void;
  onClick?: () => void;
  imageUrl?: string;  // Add this prop for the image URL
}

const FALLBACK_IMAGE_URL = "/path/to/default-image.jpg"; // Define a fallback image URL

function CTitle(props: IProps) {
  // Determine the image URL to use
  const imageUrl = props.article.image || props.imageUrl || FALLBACK_IMAGE_URL;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        alignItems: "flex-start",
        justifyContent: "space-between",
        cursor: "pointer",
        mb: 2,
        "&:hover": {
          backgroundColor: "#F6F7F8",
        },
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
      }}
      onClick={props.onClick}
    >
      <CardMedia
        component="img"
        sx={{
          width: { md: 150, xs: "100%" }, // Adjust width for different screen sizes
          height: { md: "auto", xs: 150 }, // Adjust height for different screen sizes
          borderRadius: { md: "4px 0 0 4px", xs: "4px 4px 0 0" }, // Adjust border-radius for images
        }}
        image={imageUrl}
        alt={props.article?.title || "Article image"}
      />
      <CardContent sx={{ flex: "1 0 auto", display: "flex", flexDirection: "column" }}>
        <Typography
          variant="body1"
          component="h2"
          sx={{ fontWeight: "bold", pr: 2, mb: 1 }}
        >
          {props.article?.title}
        </Typography>
        <Typography variant="body2" component="span" sx={{ fontSize: "0.8rem", color: "#555" }}>
          {props.article?.source_name ?? props.article?.category_name}
          {props.ago && ` • ${props.ago}`}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="bookmark"
          onClick={props.onBookmark}
          sx={{ ml: "auto", mr: 1 }}
        >
          <BookmarkBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CTitle;
