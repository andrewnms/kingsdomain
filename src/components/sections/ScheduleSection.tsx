export const ScheduleSection = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h2 className="cyber-heading">MISSION TIMELINE</h2>
        <h3 className="text-cyber-secondary text-xl mb-8">Sunday, April 06, 2025</h3>
        
        <div className="space-y-8">
          {[
            {
              time: "0900",
              title: "NETWORK SESSION AND PROJECT SHOWCASE",
              details: "Connect with fellow operatives and showcase your projects"
            },
            {
              time: "1000",
              title: "ROUND 1 - LIGHTING PITCHES",
              details: "60-second rapid-fire pitch presentations"
            },
            {
              time: "1100",
              title: "ROUND 2 - GRILLING ROUND",
              details: "3-minute pitch + 3-minute Q&A for top 10 teams"
            },
            {
              time: "1200",
              title: "AWARDS & WRAP UP",
              details: "Final deployment and mission completion ceremony"
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