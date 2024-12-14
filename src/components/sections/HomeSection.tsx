export const HomeSection = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h1 className="cyber-heading">
          UP vs. DLSU vs. ATENEO
          <br />
          STARTUP TOURNAMENT
        </h1>
        
        <div className="space-y-8">
          <div className="bg-cyber-black/50 p-8 border-l-4 border-cyber-red">
            <h2 className="text-2xl font-bold mb-4">MISSION BRIEFING</h2>
            <p className="text-lg text-cyber-green">
              Three elite institutions. One ultimate challenge. Your mission: 
              Create, innovate, dominate. The future begins here.
            </p>
          </div>

          <div className="cyber-grid">
            <div className="bg-cyber-black/50 p-6 border-2 border-cyber-blue">
              <h3 className="text-cyber-blue text-xl mb-4">PRIZE POOL</h3>
              <ul className="space-y-2">
                <li>💰 $2,000 in Google Cloud credits</li>
                <li>🚀 Google Manila HQ Tour</li>
                <li>🌊 GOAB Pitch Opportunity</li>
              </ul>
            </div>

            <div className="bg-cyber-black/50 p-6 border-2 border-cyber-green">
              <h3 className="text-cyber-green text-xl mb-4">DATE & LOCATION</h3>
              <p>🗓️ April 5, 2024</p>
              <p>📍 Location: TBA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};