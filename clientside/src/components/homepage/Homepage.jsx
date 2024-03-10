import React from "react";
import { Link, NavLink } from "react-router-dom";
// import frntVid from "/video (2160p).gif";
import { motion } from "framer-motion";
import { LucideArrowUpRight } from "lucide-react";

function Homepage() {
  const recomendations = {
    prompt: "Make something new today with chicken",
  };
  return (
    <>
      <motion.div className=" h-[90vh] w-[100vw]    overflow-hidden flex flex-col ">
        <motion.div
          className=" h-[60%]  w-full origin-top  flex justify-center items-center"
          initial={{ opacity: 0, height: "unset" }}
          animate={{ opacity: 1, height: "60%" }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <div className=" w-[75vw] h-[50%] ">
            <motion.div className=" flex flex-col font-Merienda text-[8vh] leading-tight text-center">
              <p>
                Cooking <span className=" font-Karla ">doesn't</span> have{" "}
              </p>
              <p>
                <span className=" font-Karla ">to be</span> complicated
              </p>
              <div className=" text-[3vh] pt-[1%] opacity-70 font-Macondo">
                Explore a world of flavor. Discover new recipes that match your
                cravings.
              </div>
              <div className=" text-[3.2vh] px-[1%] py-[1%]  flex justify-center items-center">
                <div className=" bg-[black] px-[3%] py-[.5%]  rounded-3xl flex items-center font-Karla  ">
                  Get Your Recipe <LucideArrowUpRight size={30} />
                </div>
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
              // src={frntVid}
              alt=""
              className=" w-full h-full object-cover rounded-[1rem] 2xl:rounded-[2rem]  border-x-8 border-t-8 brightness-75 border-white"
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
            />
            <div className="bg-gradient-to-t from-[#000000] to-[#000000] w-full h-full "></div>
            <motion.div className=" absolute top-[8%] right-[5%] w-[20vw] h-[25vh] bg-[#ffffffd2] px-[2%] py-[1.5%] backdrop-blur-lg  rounded-2xl z-10">
              <div className=" h-[65%]  text-[black] font-semibold text-[3.2vh] font-Karla leading-tight">
                {recomendations.prompt}
              </div>
              <div className=" h-[35%]  flex items-start justify-start font-Karla py-[1%]">
                <div className=" text-[2.7vh] bg-[#ff5e00] h-full flex items-center justify-center px-[5%] rounded-3xl">
                  Generate Now <LucideArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
            <motion.div className=" absolute top-[8%] left-[5%] w-[35vw] h-[25vh]   rounded-2xl z-10">
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
