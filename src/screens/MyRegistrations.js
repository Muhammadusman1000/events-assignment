import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeRegistration, deleteAll } from "../store/slices/SelectedEvent";
import { motion } from "framer-motion";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};
const MyRegistrations = () => {
  const registrations = useSelector((state) => state.selectedEvent);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (registrations.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-50 p-6 gap-10 flex-col">
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-16">
          No registrations found.
        </p>
        <Button
          label="Back to Events"
          icon="pi pi-arrow-left"
          className="w-full md:w-[60%] lg:w-[30%] mt-3 border-none bg-blue-700 text-white hover:bg-blue-500 py-3 text-lg"
          onClick={() => navigate("/")}
        />
      </div>
    );
  }

  return (
    <motion.div
      className="mt-[14px] w-[90%] md:w-[90%] mx-auto pb-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center mt-8">
        My Registrations
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {registrations.map((reg, index) => (
          <motion.div
            key={reg.id || index}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-lg rounded-2xl p-4 sm:p-5 md:p-6 break-words relative"
          >
            <p className="text-[14px] sm:text-[16px] md:text-[14px] lg:text-[20px] text-gray-700 mb-2">
              <span className="font-semibold">Name:</span> {reg.name}
            </p>
            <p className="text-[14px] sm:text-[16px] md:text-[14px] lg:text-[20px] text-gray-700 mb-2">
              <span className="font-semibold">Email:</span> {reg.email}
            </p>
            <p className="text-[14px] sm:text-[16px] md:text-[14px] lg:text-[20px] text-gray-700 mb-2">
              <span className="font-semibold">Phone:</span> {reg.phone}
            </p>
            <p className="text-[14px] sm:text-[16px] md:text-[14px] lg:text-[20px] text-gray-700 mb-2">
              <span className="font-semibold">Event:</span> {reg.eventTitle}
            </p>
            <div className="absolute top-4 right-4 w-6 h-6 cursor-pointer hover:text-red-700 transition">
              <MdDeleteForever
                className="text-red-500 "
                onClick={() => dispatch(removeRegistration(index))}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <p
        className="text-red-500 underline mx-auto w-max mt-8 cursor-pointer hover:text-red-700 transition"
        onClick={() => dispatch(deleteAll())}
      >
        clear all
      </p>
    </motion.div>
  );
};

export default MyRegistrations;
