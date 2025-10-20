import { Button } from "primereact/button";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchEvents } from "../store/slices/EventSlice";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

export default function EventsCards() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const fallbackImage = "https://picsum.photos/seed/picsum/200/300";

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ImSpinner9 className="w-8 h-8 animate-spin text-blue-500" />
        </div>
      ) : error ? (
        <div className="text-center p-4 bg-red-100 rounded">
          <p className="text-red-500">Error: {error}</p>
        </div>
      ) : data.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {data.slice(0, 8).map((event) => (
            <motion.div
              key={event.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <img
                alt={event.title}
                src={event.imageUrl || fallbackImage}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              <div className="flex flex-col flex-grow p-4">
                <h3 className="text-md font-semibold text-gray-800 mb-1">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-6 text-gray-600 mt-5">
                  <p className="flex items-center gap-2  text-sm">
                    <span className="font-semibold text-gray-700 flex gap-2 items-center">
                      <CiCalendarDate className="text-blue-700 text-[20px]" />{" "}
                      Date:
                    </span>{" "}
                    {event.date}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-gray-700 flex gap-2 items-center">
                      <IoLocationOutline className="text-red-400 text-[20px]" />
                      Location:
                    </span>{" "}
                    {event.location}
                  </p>
                </div>

                <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                  {event.body}
                </p>

                <Button
                  label="View Registeration"
                  icon="pi pi-check"
                  className="mt-4 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white border-none w-full"
                  onClick={() =>
                    navigate(`/view-registeration/${event.id}`, {
                      state: {
                        event: event,
                      },
                    })
                  }
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center w-full col-span-4 p-8 bg-gray-50 rounded">
          <p className="text-gray-500">No events available.</p>
        </div>
      )}
    </div>
  );
}
