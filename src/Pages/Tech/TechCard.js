import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const TechCard = ({ news }) => {
  const classes = useStyles();

  return (
    <div className="content__wrapper">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={news.title}
            height="140"
            image={news.urlToImage}
            title={news.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {news.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {news.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <a href={news.url} target="_blank">
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </a>
        </CardActions>
      </Card>
    </div>
  );
};

export default TechCard;