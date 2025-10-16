import EventsCards from "../components/Card";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center mt-16">
        Events
      </h1>
      <EventsCards />
    </div>
  );
};

export default Home;
