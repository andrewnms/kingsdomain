export const JudgesSection = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h2 className="cyber-heading">COMMAND CENTER</h2>
        
        <div className="cyber-grid">
          {[
            {
              name: "COMMANDER ALPHA",
              title: "Tech Veteran & Startup Advisor",
              bio: "20+ years of battlefield experience in Silicon Valley"
            },
            {
              name: "AGENT BETA",
              title: "Innovation Director",
              bio: "Led numerous successful startup operations"
            },
            {
              name: "SPECIALIST GAMMA",
              title: "Investment Strategist",
              bio: "Expert in identifying high-potential recruits"
            }
          ].map((judge, index) => (
            <div 
              key={index}
              className="bg-cyber-black/50 p-6 border-2 border-cyber-blue hover:border-cyber-green transition-colors duration-300"
            >
              <h3 className="text-cyber-blue text-xl mb-4">{judge.name}</h3>
              <p className="text-cyber-green mb-2">{judge.title}</p>
              <p>{judge.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};