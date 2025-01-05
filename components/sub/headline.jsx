export default function Headline({ title, subtitle }) {
  return (
    <div className="text-center">
      <p className="text-lg text-primary uppercase mt-20">{subtitle}</p>
      <h2 className="text-5xl md:text-6xl font-bold text-body mb-10">{title}</h2>
    </div>
  );
}
