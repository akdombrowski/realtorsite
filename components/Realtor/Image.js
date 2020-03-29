import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";


export default function Image(props) {
  if (props.data) {
    if (props.data.img) {
      return props.data.img.map((datum, i) => {
        if (i % 2 > 0) {
          return (
            <Grid
              key={i + "grid"}
              item
              xs={12}
              height="5vh"
              style={{ height: "5%", maxHeight: "5%" }}
            >
              <Card>
                <CardMedia
                  component="img"
                  image={datum}
                  title="agent-photo"
                ></CardMedia>
              </Card>
            </Grid>
          );
        }
      });
    }
  }
  return null;
}
