import React from "react";
import { Link, NavLink } from "react-router-dom";
import frntVid from "/video (2160p).gif";
import { motion } from "framer-motion";
import { LucideArrowUpRight, Sparkle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const recomendations = {
    prompt: "Make something new today with chicken",
  };

  const navigate = useNavigate();

  return (
    <>
      <motion.div className=" h-[100vh] w-[100vw]  pt-[10vh]  overflow-hidden flex flex-col select-none ">
        <motion.div
          className=" h-[60%]  w-full origin-top  flex justify-center items-center"
          initial={{ opacity: 0, height: "unset" }}
          animate={{ opacity: 1, height: "60%" }}
          transition={{
            duration: 0.5,
            delay: 2,
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 0.5,
            easing: [0.42, 0, 0.58, 1],
          }}
        >
          <div className=" w-[75vw] h-[50%] ">
            <motion.div
              className=" flex flex-col font-Merienda text-[8vh] leading-tight text-center"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 1,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 0.5,
                easing: [0.42, 0, 0.58, 1],
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 3,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 0.5,
                  easing: [0.42, 0, 0.58, 1],
                }}
                className="flex
                justify-center gap-[3vh]"
              >
                Cooking{" "}
                <motion.span
                  className=" font-Karla  px-[2vw] flex rounded-[5vh] relative whitespace-nowrap"
                  initial={{ padding: "0px .8vw" }}
                  animate={{ padding: "0px 2vw" }}
                  transition={{
                    duration: 1,
                    delay: 3.4,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 0.5,
                    easing: [0.42, 0, 0.58, 1],
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1470549813517-2fa741d25c92?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className=" w-[200vw] h-[10vh] rounded-[5vh] object-cover absolute top-0 left-0 brightness-[.4] blur-[1px]  z-0"
                  />
                  <div className=" z-40 ">Doesn't </div>
                </motion.span>
                have
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 3.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 0.5,
                  easing: [0.42, 0, 0.58, 1],
                }}
              >
                <span className=" font-Karla ">to be</span> complicated
              </motion.p>
              <motion.div
                className=" text-[3vh] pt-[1%] opacity-70 font-Karla"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 3.4,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 0.5,
                  easing: [0.42, 0, 0.58, 1],
                }}
              >
                Explore a world of flavor. Discover new recipes that match your
                cravings.
              </motion.div>
              <div className=" text-[3.2vh] px-[1%] py-[1%]  flex justify-center items-center">
                <motion.div
                  className=" bg-[#252424] px-[3%] py-[.5%] gap-[.3vw] rounded-3xl flex items-center font-Karla cursor-pointer "
                  onClick={() => {
                    setTimeout(() => {
                      navigate("/list");
                    }, 350);
                  }}
                  initial={{ transformOrigin: "top", opacity: 0, y: 20 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transformOrigin: "center",
                    transition: {
                      duration: 0.3,
                      type: "spring",
                      stiffness: 100,
                      delay: 3.6,
                      damping: 20,
                      mass: 0.5,
                      easing: [0.42, 0, 0.58, 1],
                    },
                  }}
                  whileHover={{ backgroundColor: "#444040" }}
                  whileTap={{ scale: 0.9 }}
                >
                  Get Your Recipe{" "}
                  <LucideArrowUpRight size={30} className=" rotate-45" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className=" h-[40%] w-full  rounded-[1rem]"
          initial={{ opacity: 0, height: "90%" }}
          animate={{ opacity: 1, height: "40%" }}
          transition={{
            duration: 1,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 0.5,
            easing: [0.42, 0, 0.58, 1],
          }}
        >
          <div className=" w-[100vw] h-[100vh] p-3 rounded-[1rem] overflow-hidden  relative">
            <motion.img
              src={frntVid}
              alt=""
              className=" w-full h-full object-cover rounded-[2rem] 2xl:rounded-[2rem]  border-x-8 border-t-8 brightness-75 border-white"
              initial={{
                opacity: 0,
                scale: 1.1,
                borderRadius: ".5rem",
                filter: "blur(1px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                borderRadius: "3rem",
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 0.5,
                easing: [0.42, 0, 0.58, 1],
              }}
            />
            <div className="bg-gradient-to-t from-[#000000] to-[#000000] w-full h-full "></div>
            <motion.div
              className=" absolute top-[8%] right-[5%] w-[20vw] h-[25vh] bg-[#ffffffd2] px-[2%] py-[1.5%] backdrop-blur-lg  rounded-2xl z-10"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 1.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 0.5,
                easing: [0.42, 0, 0.58, 1],
              }}
            >
              <div className=" h-[65%]  text-[black] font-semibold text-[3.2vh] font-Karla leading-tight">
                {recomendations.prompt}
              </div>
              <div className=" h-[35%]  flex items-start justify-start font-Karla py-[1%]">
                <motion.div
                  className=" text-[2.7vh] bg-[#ff5e00d5] h-full flex items-center cursor-pointer justify-center px-[5%] rounded-3xl"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 0.5,
                    easing: [0.42, 0, 0.58, 1],
                  }}
                >
                  <Sparkle className=" pr-[1%]" /> Generate Now{" "}
                  <LucideArrowUpRight size={20} />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className=" absolute top-[8%] left-[5%] w-[35vw] h-[25vh]   rounded-2xl z-10"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 1.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 0.5,
                easing: [0.42, 0, 0.58, 1],
              }}
            >
              <motion.div className=" w-full h-full flex flex-col text-[5vh] justify-center items-start px-[3%] font-Karla">
                <motion.div className=" text-[2.8vh] ml-[1%]  h-[40%] w-full flex items-center">
                  <span className=" px-2  py-1 border  rounded-2xl bg-[#0000002f] backdrop-blur-xl">
                    Explore{" "}
                  </span>
                </motion.div>
                <motion.div className=" text-[3.3vh] leading-tight">
                  Cooking made easy
                </motion.div>
                <motion.div className=" text-[3.3vh] leading-tight ">
                  Find recipes that tantalize your taste buds
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Homepage;
