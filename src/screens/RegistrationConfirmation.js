import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
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

const RegistrationConfirmation = () => {
  const registrations = useSelector((state) => state.selectedEvent);
  const lastRegistration =
    registrations.length > 0 ? registrations[registrations.length - 1] : null;

  if (!lastRegistration) {
    return (
      <motion.div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
        <div className="bg-white mt-8 shadow-xl rounded-2xl p-8 text-center max-w-md w-full animate-fadeIn">
          <p className="text-gray-600">No registration data found.</p>
          <Link
            to="/"
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
          >
            Go Back to Events
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      vaients={containerVariants}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6"
    >
      <motion.div
        variants={cardVariants}
        className="bg-white shadow-xl rounded-2xl p-4 text-center max-w-md w-full animate-fadeIn"
      >
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4 animate-bounce" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Registration Successful!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for registering
          {lastRegistration.name ? `, ${lastRegistration.name}` : ""}! <br />
          We have received your details and will contact you soon.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6 text-left">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Name:</span> {lastRegistration.name}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Email:</span>{" "}
            {lastRegistration.email}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Phone:</span>{" "}
            {lastRegistration.phone}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Event:</span>{" "}
            {lastRegistration.eventTitle}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
          >
            Go Back to Events
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RegistrationConfirmation;
