import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { motion } from "framer-motion";
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

export default function ViewRegistration() {
  const location = useLocation();
  const navigate = useNavigate();

  const { event } = location.state || {};

  // fallback if no event data
  if (!event) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          No Event Data Found
        </h2>
        <Button
          label="Go Back"
          icon="pi pi-arrow-left"
          className="bg-blue-600 text-white border-none"
          onClick={() => navigate("/")}
        />
      </div>
    );
  }

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gray-50 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {event.title}
          </h2>

          <div className="space-y-2 mb-6 text-gray-600 mt-5">
            <p className="flex items-center gap-2">
              <span className="font-semibold text-gray-700 flex gap-2 items-center">
                <CiCalendarDate /> Date:
              </span>{" "}
              {event.date}
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-gray-700 flex gap-2 items-center">
                <IoLocationOutline className="text-red-400 text-[20px]" />
                Location:
              </span>{" "}
              {event.location}
            </p>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {event.body ||
              "Join us for an exciting event filled with learning and networking opportunities!"}
          </p>

          <Button
            label="Register Now"
            icon="pi pi-check"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none py-3 text-lg rounded-md"
            onClick={() =>
              navigate(`/register/${event.id}`, {
                state: {
                  eventTitle: event.title,
                },
              })
            }
          />

          <Button
            label="Back to Events"
            icon="pi pi-arrow-left"
            className="w-full mt-3 border-none bg-gray-200 text-gray-800 hover:bg-gray-300 py-3 text-lg"
            onClick={() => navigate("/register/:")}
          />
        </div>
      </div>
    </motion.div>
  );
}
