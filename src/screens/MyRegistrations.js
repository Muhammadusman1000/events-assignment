import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeRegistration, deleteAll } from "../store/slices/SelectedEvent";
import { motion } from "framer-motion";

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

  if (registrations.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-50 p-6">
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-16">
          No registrations found.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-blue-50 p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center mt-16">
        My Registrations
      </h1>
      <p
        className="text-red-500 underline"
        onClick={() => dispatch(deleteAll())}
      >
        clear all
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                onClick={() => dispatch(removeRegistration(reg.id))}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyRegistrations;
