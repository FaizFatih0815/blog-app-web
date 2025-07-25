import { michroma } from "@/assets/fonts";

const Jumbotron = () => {
  return (
    <section className="mt-10 space-y-2 text-center">
      <h1 className={`text-4xl font-bold md:text-6xl ${michroma.className}`}>
        The Blog<span className="text-orange-500">Hub</span>
      </h1>
      <p className="text-lg md:text-xl">
        A Blog about food, experiences, and recipes
      </p>
    </section>
  );
};

export default Jumbotron;
