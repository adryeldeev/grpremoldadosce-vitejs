const Stats = () => {
  const features = [
    { label: "Anos de Mercado", value: "10+" },
    { label: "Obras Atendidas", value: "500+" },
    { label: "Norma Técnica", value: "ABNT" },
    { label: "Entrega Própria", value: "100%" },
  ];

  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {features.map((item, idx) => (
          <div key={idx}>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{item.value}</div>
            <div className="text-[#1E40AF] text-sm font-semibold uppercase tracking-wide">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;