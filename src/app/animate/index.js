"use client";
const { Box, Heading, Flex } = require("@chakra-ui/react");
import * as motion from "motion/react-client";
const Page = () => {
  const bgs = ["green", "blue", "yellow"];
  const cardVariants = {
    offscreen: {
      x: "-100%",
      height: 0,
      width: "0",
    },
    onscreen: {
      x: 50,
      width: "50%",
      height: "auto",
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 0.8,
      },
    },
  };
  const cardVar = {
    offscreen: {
      y: -200,
    },
    onscreen: {
      y: 50,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 1,
      },
    },
  };
  const hue = (h) => `hsl(${h}, 100%, 50%)`;

  /**
   * ==============   Styles   ================
   */

  const container = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
  };

  const cardContainer = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
  };

  const splash = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "red",
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
  };

  const card = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
      "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "bottom center",
  };

  return (
    <Box px="20px">
      <Heading>Hello world</Heading>
      <Box height="100%" w="100%" maxW={1200} mx="auto">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <motion.div
              key={index}
              style={{ width: "100%", height: "100vh", background: bgs[index] }}
              className={`card-container-${index}`}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.8 }}
            >
              {/* <div style={{ ...splash }} /> */}
              <Flex>
                <motion.div
                  style={card}
                  variants={cardVariants}
                  className="card"
                  initial={{ opacity: 0, ...cardVariants.offscreen }}
                  whileInView={{ opacity: 1, ...cardVariants.onscreen }}
                >
                  <Box>
                    <Heading>just like that</Heading>
                  </Box>
                </motion.div>
                <motion.div
                  style={card}
                  variants={cardVar}
                  className="card"
                  initial={{ opacity: 0, ...cardVar.offscreen }}
                  whileInView={{ opacity: 1, ...cardVar.onscreen }}
                >
                  <Box>
                    <Heading>just like that</Heading>
                  </Box>
                </motion.div>
              </Flex>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
};
export default Page;
