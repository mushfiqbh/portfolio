export default function Card({ title, Icon, children }) {
  return (
    <div className="w-[90%] lg:w-full mx-5 md:mx-0 p-10 bg-gradient-box shadow-shadow1 rounded-lg">
      <div className="flex items-center gap-3">
        <Icon className="text-3xl md:text-4xl text-primary" />
        <h1 className="text-xl md:text-2xl my-5">{title}</h1>
      </div>
      <br />
      {children}
    </div>
  );
}
