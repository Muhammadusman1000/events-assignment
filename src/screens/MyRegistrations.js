import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import {
  removeRegistration,
  deleteAll,
  reorderRegistrations,
} from "../store/slices/SelectedEvent";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const MyRegistrations = () => {
  const registrations = useSelector((state) => state.selectedEvent);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("dragIndex", index);
    e.currentTarget.classList.add("opacity-50", "scale-95");
  };

  const handleDragEnd = (e) => {
    e.currentTarget.classList.remove("opacity-50", "scale-95");
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = Number(e.dataTransfer.getData("dragIndex"));
    if (dragIndex === dropIndex) return;
    dispatch(
      reorderRegistrations({ fromIndex: dragIndex, toIndex: dropIndex })
    );
  };

  const handleDragOver = (e) => e.preventDefault();

  if (registrations.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-center min-h-screen bg-blue-50 p-6 gap-10 flex-col"
      >
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-16">
          No registrations found.
        </p>
        <Button
          label="Back to Events"
          icon="pi pi-arrow-left"
          className="w-full md:w-[60%] lg:w-[30%] mt-3 border-none bg-blue-700 text-white hover:bg-blue-500 py-3 text-lg"
          onClick={() => navigate("/")}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="mt-[14px] w-[90%] md:w-[90%] mx-auto pb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center mt-8">
        My Registrations
      </h1>

      <motion.div
        layout
        className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
        transition={{ layout: { type: "spring", damping: 25, stiffness: 250 } }}
      >
        <AnimatePresence>
          {registrations.map((reg, index) => (
            <motion.div
              key={reg.id || index}
              layout
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{
                layout: { type: "spring", damping: 25, stiffness: 250 },
              }}
              className="bg-white shadow-lg rounded-2xl p-4 sm:p-5 md:p-6 break-words relative cursor-grab active:cursor-grabbing select-none"
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
                  className="text-red-500"
                  onClick={() => dispatch(removeRegistration(index))}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

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
