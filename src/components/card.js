import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function Aboutpreskool (){
    return(

         <Box sx={{
            backgroundColor:'255,255,255',
            borderRadius: 5,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            padding:2,
            margin: 2,
         }}>
            <Box
          sx={{
            color: "white",
            textAlign: "center",
            fontFamily:'"Roboto", sans-serif',
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, fontWeight: "bold", textAlign:'left',fontFamily:'"Roboto", sans-serif', }}
          >
            What's New on Preskool !!!
          </Typography>

          {[
            {
              title: "Summer Vacation Holiday Homework",
              description: "The school will remain closed from April 20th to June...",
            },
            {
              title: "New Academic Session Admission Start (2024-25)",
              description: "An academic term is a portion of an academic year, the time...",
            },
            {
              title: "Date sheet Final Exam Nursery to Sr.Kg",
              description:
                "Dear Parents, as the final examination for the session 2024-25 is...",
            },
            {
              title: "Annual Day Function",
              description:
                "Annual functions provide a platform for students to showcase their...",
            },
          ].map((item, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: "white",
                padding: 0,
                marginBottom: 2,
                borderRadius: 1,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                textAlign: "left",
                height:'15vh'
              }}
            >
              <CardContent sx={{
                width:500,
                padding:1,
                margin:1,
              }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginBottom: 1, fontSize:'15px' }}
                >
                  {item.title}
                </Typography>
          <Box
      sx={{
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 1,
        mb: 1, 
      }}
    >
      <Typography
        sx={{
          fontSize: '13px',
          color: 'text.primary', 
          flexGrow: 1, 
          mr: 1, 
        }}
      >
        {item.description}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <KeyboardDoubleArrowRightIcon
          sx={{
            fontSize: "16px", 
            color: 'text.secondary', 
            "&:hover": {
              color: "blue",
            },
            display: 'block', 
          }}
        />
      </Box>
    </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
         </Box>
    );
}
export default Aboutpreskool;