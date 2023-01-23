import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";

const steps = [
  {
    role: "Developer",
    tech: "Javascript",
    project: "Ecommerce website",
    period: "2022",
    company: "Google",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus eligendi labore vero aut velit impedit magni explicabo excepturi molestiae maxime recusandae rerum reiciendis, libero, dicta nisi deleniti provident fugit?`,
  },
  {
    role: "Developer",
    tech: "React",
    project: "Ecommerce website",
    period: "2022",
    company: "Facebook",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus eligendi labore vero aut velit impedit magni explicabo excepturi molestiae maxime recusandae rerum reiciendis, libero, dicta nisi deleniti provident fugit?`,
  },
  {
    role: "Developer",
    tech: "TypeScript",
    project: "Ecommerce website",
    period: "2022",
    company: "Apple",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus eligendi labore vero aut velit impedit magni explicabo excepturi molestiae maxime recusandae rerum reiciendis, libero, dicta nisi deleniti provident fugit?`,
  },
];

const WorkExperience = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleCurrent = (id) => {
    setActiveStep(id);
  };
  return (
    <Box className="bg-gradient-to-r from-gray-600 via-gray-700 to-cyan-50 p-10">
      <Container maxWidth="lg" className="">
        <Typography
          variant="h5"
          className=" font-bold text-cyan-100 font-Josefin mb-5"
        >
          Work Experiences
        </Typography>
        <Box sx={{ maxWidth: 1000 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.role}>
                <StepLabel
                  onClick={() => handleCurrent(index)}
                  optional={
                    index === 2 ? (
                      <Typography variant="caption" className=" text-white">
                        Present Working
                      </Typography>
                    ) : null
                  }
                >
                  <Typography
                    variant="subtitle1"
                    className="  font-mono cursor-pointer text-green-400"
                  >
                    {step.role} at {step.company}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <CardContent className=" bg-white rounded-2xl">
                    <Typography
                      variant="caption"
                      className=" text-gray-600 font-Josefin"
                    >
                      {step.period}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className="font-mono font-bold"
                    >
                      {step.project}
                    </Typography>
                    <Typography variant="body2" className="font-mono">
                      {step.tech}
                    </Typography>
                    <Typography
                      variant="body1"
                      className="font-mono tracking-wider"
                    >
                      {step.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="outlined"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                          className=" normal-case font-mono"
                        >
                          {index === steps.length - 1 ? "Finish" : "Continue"}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                          className="font-mono normal-case"
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </CardContent>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Button
              onClick={handleReset}
              sx={{ mt: 1, mr: 1 }}
              className=" font-Josefin font-bold normal-case text-green-300"
            >
              Review
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default WorkExperience;
