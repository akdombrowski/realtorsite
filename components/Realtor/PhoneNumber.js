import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

export default function PhoneNumber(props) {
  if (props.data) {
    if (props.data.name) {
      return props.data.name.map((datum, i) => {
        return (
          <Grid
            key={i + "grid"}
            item
            xs={12}
            height="5vh"
            style={{ height: "5%", maxHeight: "5%" }}
          >
            <Typography>{datum}</Typography>
          </Grid>
        );
      });
    }
  }
  return null;
}
