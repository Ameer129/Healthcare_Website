import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { HashLink } from "react-router-hash-link";
import { useParams } from "react-router-dom";
import useData from "../../../Hooks/useData";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ServiceDetails = () => {
  const { servId } = useParams();
  const [service, setServices] = useState(null);
  const mainData = useData();
  const services = mainData[0];

  useEffect(() => {
    if (services && services.length > 0) {
      const servDetails = services.find(
        (service) => service.id === parseInt(servId)
      );
      setServices(servDetails);
    } else {
      console.log("waiting for data");
    }
  }, [services, servId]); // ✅ added servId here

  return (
    <Box
      sx={{
        bgcolor: "#fce4ec",
        color: "primary.main",
        p: 2,
        mb: 2,
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant="h6">
          Why Choose Our Medical
        </Typography>

        <Typography sx={{ mb: 8, fontWeight: 600 }} variant="h5">
          Breakthrough in Comprehensive, Flexible Care Delivery Models
        </Typography>

        {service && (
          <Grid container spacing={3}>
            <Grid key={service.id} item xs={12}>
              <Card
                sx={{
                  mx: "auto",
                  maxWidth: 550,
                  transition: "0.5s all ease-in-out",
                  ":hover": {
                    boxShadow: 10,
                  },
                  img: { transition: "0.5s all ease-in-out" },
                  ":hover img": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="550"
                    image={service?.service_img}
                    alt="card image of service"
                  />
                  <CardContent sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Avatar
                      alt="service icon"
                      src={service?.icon}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Typography variant="h5" component="div">
                      Consult for {service.treatment}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography
                    sx={{ p: 2 }}
                    align="justify"
                    component="p"
                  >
                    {service.description}
                  </Typography>
                </CardActions>
                <Typography gutterBottom variant="h6" component="div">
                  Consult fee: ₹{service.price}
                </Typography>
                <HashLink smooth to="/appointment" className="text-style">
                  <Button
                    sx={{ mt: 2, mb: 2 }}
                    variant="contained"
                    className="CheckButton"
                  >
                    Make an Appointment
                    <AddCircleIcon sx={{ ml: 1 }} />
                  </Button>
                </HashLink>
              </Card>
            </Grid>
          </Grid>
        )}

        <HashLink smooth to="/home#home" className="text-style">
          <Button
            variant="contained"
            color="primary"
            startIcon={<HomeIcon />}
            sx={{ mb: 5, mt: 5 }}
          >
            Back to Home
          </Button>
        </HashLink>
      </Container>
    </Box>
  );
};

export default ServiceDetails;
