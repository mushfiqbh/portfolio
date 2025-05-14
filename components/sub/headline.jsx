export default function Headline({ title, subtitle, className }) {
  return (
    <div className={`text-center mt-20 mb-16 ${className}`}>
      <p className="text-lg text-primary uppercase">{subtitle}</p>
      <h2 className="text-5xl md:text-6xl font-bold text-body">{title}</h2>
    </div>
  );
}
