const Card = ({ title, value, icon: Icon }) => {
  return (
    <div className="bg-gray-900 p-5 rounded-xl shadow-md border border-white/10 hover:scale-105 transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <h2 className="text-white text-2xl font-bold">{value}</h2>
        </div>

        {Icon && <Icon className="text-gray-400" size={22} />}
      </div>
    </div>
  );
};

export default Card;