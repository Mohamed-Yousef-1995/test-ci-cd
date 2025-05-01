import React from "react";
import { Button, Typography, Box } from "@mui/material";
import CircleAddIcon from "../../assets/icons/circleAddIcon";

interface AddOwnerButtonProps {
  text: string;
  label?: string;
  onClick: () => void;
  secondButtonText?: string;
  onSecondButtonClick?: () => void;
}

const AddOwner: React.FC<AddOwnerButtonProps> = ({ text, label, onClick, secondButtonText, onSecondButtonClick }) => {
  return (
    <div>
      {label && (
        <Typography
          variant="subtitle1"
          sx={{ marginBottom: "8px", color: "#1e4a7e" }}
        >
          {label}
        </Typography>
      )}
      <Box display="flex" gap={2}>
        <Button
          variant="outlined"
          startIcon={<CircleAddIcon style={{ width: "1.5em", height: "1.5em" }} />}
          onClick={onClick}
          sx={{
            borderColor: "#b0c4de",
            color: "#1e4a7e",
            padding: { xs: "8px 12px", sm: "10px 16px", md: "12px 20px" },
            borderRadius: "8px",
            textTransform: "none",
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            width: { xs: "100%", sm: "350px", md: "450px", lg: "509px" },
            height: { xs: "50px", sm: "70px", md: "90px", lg: "107px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {text}
        </Button>
        {secondButtonText && onSecondButtonClick && (
          <Button
            variant="outlined"
            startIcon={<CircleAddIcon style={{ width: "1.5em", height: "1.5em" }} />}
            onClick={onSecondButtonClick}
            sx={{
              borderColor: "#b0c4de",
              color: "#1e4a7e",
              padding: { xs: "8px 12px", sm: "10px 16px", md: "12px 20px" },
              borderRadius: "8px",
              textTransform: "none",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              width: { xs: "100%", sm: "350px", md: "450px", lg: "509px" },
              height: { xs: "50px", sm: "70px", md: "90px", lg: "107px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {secondButtonText}
          </Button>
        )}
      </Box>
    </div>
  );
};

export default AddOwner;
