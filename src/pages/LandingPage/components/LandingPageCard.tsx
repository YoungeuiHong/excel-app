import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

interface Props {
    imageSrc: string;
    imageAlt?: string;
    imageHeight?: number;
}

export const LandingPageCard = (props: Props) => {
    //
    const { imageSrc, imageAlt, imageHeight } = props;

    return (
        <Card
            style={{
                marginTop: "100px",
                marginLeft: "20px",
                marginRight: "20px",
                padding: "20px"
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={imageHeight ?? 500}
                    image={imageSrc}
                    alt={imageAlt ?? 'image'}
                    style={{
                        width: "100%"
                    }}
                />
            </CardActionArea>
        </Card>
    );
}