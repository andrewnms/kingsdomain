export const RulesSection = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h2 className="cyber-heading">OPERATION PROTOCOLS</h2>
        
        <div className="cyber-grid">
          {[
            {
              title: "TEAM COMPOSITION",
              content: "Squads of 3-5 operatives required"
            },
            {
              title: "ORIGINALITY",
              content: "All projects must be new, created during the operation timeframe"
            },
            {
              title: "FORMAT",
              content: "Development from ground zero within allocated time"
            },
            {
              title: "CLEARANCE",
              content: "Limited to enrolled agents from UP, DLSU, and ATENEO"
            },
            {
              title: "INTELLECTUAL RIGHTS",
              content: "Operatives maintain full ownership of created assets"
            }
          ].map((rule, index) => (
            <div 
              key={index}
              className="bg-cyber-black/50 p-6 border-2 border-cyber-red hover:border-cyber-blue transition-colors duration-300"
            >
              <h3 className="text-cyber-red text-xl mb-4">{rule.title}</h3>
              <p>{rule.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};