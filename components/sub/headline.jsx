export default function Headline({ title, subtitle }) {
  return (
    <div className="text-center pt-24 mb-16">
      <p className="text-lg text-primary uppercase">{subtitle}</p>
      <h2 className="text-5xl md:text-6xl font-bold text-body">{title}</h2>
    </div>
  );
}
