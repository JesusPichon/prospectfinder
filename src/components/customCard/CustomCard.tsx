import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Link as MuiLink,
} from "@mui/material";

type InfoType = {
  title: string;
  address: string;
  category: string;
  currentStatus: string;
  phoneNumber: string;
  imgUrl: string;
  website?: string;
  rating: string;
  reviewCount: number;
  placeUrl: string;
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
};

interface CustomCardProps {
  info: InfoType;
}

const CustomCard: React.FC<CustomCardProps> = ({ info }) => {
  if (!info) return null;

  const formattedPhone = info.phoneNumber.replace(/\D/g, "");
  const whatsappUrl = `https://web.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(
    `Hola, somos XPRS, una agencia especializada en desarrollo digital. Hemos conocido ${info.title} y creemos que juntos podemos potenciar su presencia en línea y llevar su negocio al siguiente nivel.

¿Te gustaría conversar unos minutos para contarte cómo podemos ayudarte?`
  )}`;

  return (
    <a
      href={info.placeUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Card className="max-w-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
        <img
          src={info.imgUrl}
          alt={info.title}
          className="max-h-72"
          style={{ objectFit: "cover", width: "100%" }}
          onError={(e) => {
            e.currentTarget.src =
              "https://i.pinimg.com/736x/73/b6/6d/73b66d9790c99f0bb027f5197e94870b.jpg";
          }}
        />

        <CardContent className="space-y-2">
          <Typography variant="h6" className="font-bold">
            {info.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Category:</strong> {info.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Rating:</strong> {info.rating} ⭐ ({info.reviewCount}{" "}
            reviews)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Phone:</strong> {info.phoneNumber}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Address:</strong> {info.address}
          </Typography>

          <div className="flex gap-2 mt-3">
            {info.website && (
              <MuiLink
                href={info.website}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <Button
                  size="small"
                  variant="contained"
                  onClick={(e) => e.stopPropagation()}
                >
                  Sitio Web
                </Button>
              </MuiLink>
            )}

            <MuiLink
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              onClick={(e) => e.stopPropagation()}
            >
              <Button size="small" variant="outlined" color="success">
                WhatsApp
              </Button>
            </MuiLink>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export default CustomCard;
