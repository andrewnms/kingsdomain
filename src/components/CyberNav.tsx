import { useState } from 'react';
import { Menu } from 'lucide-react';

const sections = [
  { id: 'home', label: 'HOME' },
  { id: 'rules', label: 'RULES' },
  { id: 'schedule', label: 'SCHEDULE' },
  { id: 'judges', label: 'JUDGES' },
  { id: 'sponsors', label: 'SPONSORS' },
];

interface CyberNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const CyberNav = ({ activeSection, onSectionChange }: CyberNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-black/90 border-b-2 border-cyber-red">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-cyber-red font-bold text-xl">STARTUP.TOURNAMENT</span>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden cyber-button !p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`cyber-button ${
                  activeSection === section.id ? 'bg-cyber-red/20' : ''
                }`}
                onClick={() => onSectionChange(section.id)}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`cyber-button ${
                    activeSection === section.id ? 'bg-cyber-red/20' : ''
                  }`}
                  onClick={() => {
                    onSectionChange(section.id);
                    setIsMenuOpen(false);
                  }}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};