import { Box, Button, CardMedia, Typography } from "@mui/material";
import SimpleToolBar from "./toolbar/SimpleToolBar";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";

function ArticleSingle() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state: IReducer) => state.feed);

  const defaultImage = "https://via.placeholder.com/800x400?text=No+Image+Available"; // Default image URL

  return (
    <Box>
      <SimpleToolBar />
      <Box sx={{ mt: 2 }}>
        <Typography
          variant="h6"
          component="h1"
          sx={{ fontWeight: "bold", fontSize: "1.8rem", mt: 2 }}
        >
          {state?.article?.title}
        </Typography>

        <Typography variant="body1" component="div" sx={{ my: 1 }}>
          {state?.article?.source_name ?? state?.article?.category_name}
        </Typography>

        <CardMedia
          component="img"
          sx={{ width: "100%", height: 400, borderRadius: 2 }}
          image={state?.article?.image || defaultImage} // Use default image if none exists
          alt={state?.article?.title}
        />

        <Typography
          variant="body1"
          component="div"
          sx={{
            my: 2,
            p: {
              fontSize: "1.1rem",
            },
            img: {
              width: "100%",
              objectFit: "cover",
              margin: 0,
            },
          }}
          dangerouslySetInnerHTML={{
            __html:
              state?.article?.content ?? state?.article?.description ?? "...",
          }}
        ></Typography>

        <Button
          variant="outlined"
          color="primary"
          sx={{ width: "100%", my: 2, p: 1 }}
          onClick={() => window.open(state?.article?.url, "_blank")}
        >
          VISIT WEBSITE
        </Button>
      </Box>
    </Box>
  );
}

export default ArticleSingle;
