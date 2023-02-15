import {Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {LandingPageCard} from "./LandingPageCard";

export const LandingPage = () => {
    //
    return (
        <Grid container spacing={2}>
            <Grid xs={6}>
                <Link to={"/excel-export"}>
                    <LandingPageCard
                        imageSrc={"public/export-excel.png"}
                    />
                </Link>
            </Grid>
            <Grid xs={6}>
                <Link to={"/excel-import"}>
                    <LandingPageCard
                        imageSrc={"public/import-excel.png"}
                    />
                </Link>
            </Grid>
        </Grid>
    );
}