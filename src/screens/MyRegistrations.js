import { useSelector } from "react-redux";

const MyRegistrations = () => {
  const registrations = useSelector((state) => state.selectedEvent);

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
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center mt-16">
        My Registrations
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {registrations.map((reg, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-4 sm:p-5 md:p-6 transition transform hover:scale-105 break-words"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRegistrations;
