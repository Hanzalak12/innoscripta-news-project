import { IArticle } from "@/utils/interface";
import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface IProps {
  article: IArticle;
  ago?: string;
  onBookmark?: () => void;
  onHover?: () => void;
  onClick?: () => void;
}

function CCard(props: IProps) {
  return (
    <Box
      sx={{
        cursor: "pointer",
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
        mb: 2, // Margin bottom
        "&:hover": {
          backgroundColor: "#F6F7F8",
        },
      }}
      onClick={() => props.onClick && props.onClick()}
    >
      <CardMedia
        component="img"
        sx={{ width: "100%", height: { md: 400, xs: 300 }, objectFit: "cover" }}
        image={props.article?.image}
        alt={props.article?.title}
      />

      <Box sx={{ p: 2 }}>
        <Typography
          variant="h6"
          component="h2"
          sx={{ fontWeight: "bold", fontSize: "1.1rem", mb: 1 }}
        >
          {props.article?.title}
        </Typography>

        <Typography variant="body2" component="span">
          {props.article?.source_name ?? props.article?.category_name}
          {props.ago && ` / ${props.ago}`}
        </Typography>

        <Typography
          variant="body1"
          component="p"
          sx={{ mt: 1 }}
          dangerouslySetInnerHTML={{ __html: props.article?.description ?? "" }}
        />
      </Box>
    </Box>
  );
}

export default CCard;
