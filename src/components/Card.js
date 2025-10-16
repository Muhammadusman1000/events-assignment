import { Button } from "primereact/button";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchEvents } from "../store/slices/EventSlice";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function EventsCards() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const fallbackImage = "https://picsum.photos/seed/picsum/200/300";

  return (
    <div className="p-4">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {event.title}
                </h3>

                <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                  {event.body}
                </p>

                {/* <Button
                  label="Register"
                  icon="pi pi-check"
                  className="mt-4 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white border-none w-full"
                  onClick={() => navigate(`/register/${event.title}`)}
                /> */}
                <Button
                  label="Register"
                  icon="pi pi-check"
                  className="mt-4 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white border-none w-full"
                  onClick={() =>
                    navigate(`/register/${event.id}`, {
                      state: { eventTitle: event.title },
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
