import React, { Component } from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import ky from "ky-universal";
import { Typography } from "@material-ui/core";

class Realtor extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "Me", data: {} };
    this.getNames = this.getNames.bind(this);
    this.getPhones = this.getPhones.bind(this);
    this.getAddresses = this.getAddresses.bind(this);
    this.getGroups = this.getGroups.bind(this);
    this.getWebsites = this.getWebsites.bind(this);
    this.getNumbers = this.getNumbers.bind(this);
    this.getImgs = this.getImgs.bind(this);
  }
  componentDidMount() {
    const searchParams = new URLSearchParams();
    let pgNum = this.props.pageNumber;
    if (!pgNum) {
      pgNum = 3;
    }
    searchParams.set("page", pgNum);
    searchParams.set("wrapAPIKey", "JFp5Ky3rzhCVKDcJDOV7HvcthQqB5vj8");
    const response = async () => {
      const res = await ky
        .post(this.props.url, {
          body: searchParams,
        })
        .json();

      //   console.log(res.data);
      await this.setState({ data: res.data });
      await console.dir(res);
    };
    response();
  }

  getNames() {
    if (this.state.data) {
      if (this.state.data.name) {
        return this.state.data.name.map((datum, i) => {
          return (
            <Grid
              key={datum}
              item
              xs={12}
              height="5vh"
              style={{ height: "5%", maxHeight: "5%" }}
            >
              <p>{datum}</p>
            </Grid>
          );
        });
      }
    }
  }

  getPhones() {
    if (this.state.data) {
      if (this.state.data.phone) {
        return this.state.data.phone.map((datum, i) => {
          return (
            <Grid
              key={datum}
              item
              xs={12}
              height="5vh"
              style={{ height: "5%", maxHeight: "5%" }}
            >
              <p>{datum}</p>
            </Grid>
          );
        });
      }
    }
  }

  getImgs() {
    if (this.state.data) {
      if (this.state.data.img) {
        return this.state.data.img.map((datum, i) => {
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
  }

  getAddresses() {
    if (this.state.data) {
      if (this.state.data.address) {
        return this.state.data.address.map((datum, i) => {
          return (
            <Grid
              key={datum + "" + i}
              item
              xs={12}
              height="5vh"
              style={{ height: "5%", maxHeight: "5%" }}
            >
              <p>{datum}</p>
            </Grid>
          );
        });
      }
    }
  }

  getGroups() {
    if (this.state.data) {
      if (this.state.data.group) {
        return this.state.data.group.map((datum, i) => {
          return (
            <Grid
              key={datum + "" + i}
              item
              xs={12}
              height="5vh"
              style={{ height: "5%", maxHeight: "5%" }}
            >
              <p>{datum}</p>
            </Grid>
          );
        });
      }
    }
  }

  getWebsites() {
    if (this.state.data) {
      if (this.state.data.website) {
        return this.state.data.website.map((datum, i) => {
          return (
            <Grid
              key={datum + " " + i}
              item
              xs={12}
              height="5vh"
              style={{ height: "5%", maxHeight: "5%" }}
            >
              <Typography
                variant="body1"
                style={{ "overflow": "hidden", "word-wrap": "anywhere" }}
              >
                {datum}
              </Typography>
            </Grid>
          );
        });
      }
    }
  }

  getNumbers() {
    if (this.state.data) {
      if (this.state.data.phone) {
        return this.state.data.phone.map((datum, i) => {
          return (
            <Grid key={datum} item xs={12} height="5vh" maxHeight="5vh">
              <Typography variant="subtitle1" gutterBottom>
                {datum}
              </Typography>
            </Grid>
          );
        });
      }
    }
  }

  render() {
    return (
      <Container padding={0}>
        <Grid container wrap="wrap">
          <Grid item container xs={2} height="100vh" justify="space-between">
            <Grid item>
              <Typography>Image</Typography>
            </Grid>
            {this.getImgs()}
          </Grid>
          <Grid item container xs={2} height="100vh" justify="space-between">
            <Grid item>
              <Typography>Name</Typography>
            </Grid>
            {this.getNames()}
          </Grid>
          <Grid item container xs={2} height="100vh" justify="space-between">
            <Grid item>
              <Typography>Phone Number</Typography>
            </Grid>
            {this.getPhones()}
          </Grid>
          <Grid item container xs={2} height="100vh" justify="space-between">
            <Grid item>
              <Typography>Address</Typography>
            </Grid>
            {this.getAddresses()}
          </Grid>
          <Grid item container xs={2} height="100vh" justify="space-between">
            <Grid item>
              <Typography>Group</Typography>
            </Grid>
            {this.getGroups()}
          </Grid>
          <Grid
            xs={2}
            item
            container
            // style={{
            //   height: "100vh",
            //   maxHeight: "100vh"
            // }}
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography>Website</Typography>
            </Grid>
            {this.getWebsites()}
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default Realtor;
