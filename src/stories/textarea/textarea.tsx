import React from "react";
import { TextField, Box, Typography } from "@mui/material";

interface TextAreaFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, value, onChange }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: { xs: "8px", sm: "12px", md: "16px" },
      }}
    >
      {/* Responsive Label */}
      <Typography
        variant="body1"
        sx={{
          marginBottom: "6px",
          color: "#4A4A4A",
          fontSize: { xs: "14px", sm: "16px", md: "18px" },
        }}
      >
        {label}
      </Typography>

      {/* Responsive TextArea */}
      <TextField
        variant="outlined"
        multiline
        fullWidth
        minRows={3} // ✅ Allows it to shrink on small screens
        maxRows={6} // ✅ Expands when needed
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            backgroundColor: "#fff",
            fontSize: { xs: "14px", sm: "16px" },
            lineHeight: { xs: "1.4", sm: "1.6" }, // ✅ Better spacing inside textarea
            "& fieldset": {
              borderColor: "#BEDFEF",
            },
            "&:hover fieldset": {
              borderColor: "#BEDFEF",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#BEDFEF",
            },
          },
          textarea: {
            resize: "vertical", // ✅ Allows resizing on larger screens
          },
        }}
      />
    </Box>
  );
};

export default TextAreaField;
