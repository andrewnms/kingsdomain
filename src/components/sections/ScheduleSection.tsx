export const ScheduleSection = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h2 className="cyber-heading">MISSION TIMELINE</h2>
        
        <div className="space-y-8">
          {[
            {
              time: "0900",
              title: "INITIALIZATION",
              details: "Mission briefing and team assembly"
            },
            {
              time: "1000",
              title: "DEVELOPMENT PHASE",
              details: "Core operation begins"
            },
            {
              time: "1600",
              title: "PREPARATION",
              details: "Teams prepare final presentations"
            },
            {
              time: "1800",
              title: "FINAL DEPLOYMENT",
              details: "Project presentations to command"
            }
          ].map((event, index) => (
            <div 
              key={index}
              className="flex items-start space-x-6 bg-cyber-black/50 p-6 border-l-4 border-cyber-green"
            >
              <div className="text-cyber-green font-mono text-xl">{event.time}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p>{event.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};