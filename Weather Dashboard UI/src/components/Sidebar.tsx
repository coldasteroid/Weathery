import { Cloud, Grid3x3, Icon, Mic, Calendar, Settings } from 'lucide-react';
import { UserButton } from "@clerk/clerk-react";


interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {

  return (
    <div className="flex bg-[#252525] rounded-3xl overflow-hidden h-auto lg:h-[calc(100vh-3rem)]">
      {/* Navigation Strip */}
      <div className="w-[100px] p-6 flex flex-col items-center gap-8 border-r border-[#3a3a3a]">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-[#3a3a3a] rounded-xl flex items-center justify-center">
            <Cloud className="w-6 h-6 text-blue-400" />
          </div>
          <span className="text-xs text-gray-400">Weathery</span>
        </div>

        {/* Divider */}
        <div className="w-8 h-[1px] bg-gray-700"></div>

        {/* Navigation Icons */}
        <nav className="flex flex-col gap-6">
          <button
            onClick={() => onTabChange('weather')}
            className={`w-12 h-12 rounded-xl transition-colors flex items-center justify-center ${activeTab === 'weather' ? 'bg-[#3a3a3a] text-blue-400' : 'hover:bg-[#3a3a3a] text-gray-400'}`}
            title="Weather Dashboard"
          >
            <Grid3x3 className="w-5 h-5" />
          </button>

          <button
            onClick={() => onTabChange('air-quality')}
            className={`w-12 h-12 rounded-xl transition-colors flex items-center justify-center ${activeTab === 'air-quality' ? 'bg-[#3a3a3a] text-green-400' : 'hover:bg-[#3a3a3a] text-gray-400'}`}
            title="Air Quality"
          >
            <Cloud className="w-5 h-5" />
          </button>



          {/* Other icons kept as links/placeholders for now */}
          <button onClick={() => window.open('https://youtu.be/xvFZjo5PgG0?si=pKJOiYAVz5ASlqkI', '_blank')} className="w-12 h-12 rounded-xl hover:bg-[#3a3a3a] transition-colors flex items-center justify-center">
            <Mic className="w-5 h-5 text-gray-400" />
          </button>
          <button onClick={() => window.open('https://youtu.be/xvFZjo5PgG0?si=pKJOiYAVz5ASlqkI', '_blank')} className="w-12 h-12 rounded-xl hover:bg-[#3a3a3a] transition-colors flex items-center justify-center">
            <Calendar className="w-5 h-5 text-gray-400" />
          </button>
          <button onClick={() => window.open('https://youtu.be/xvFZjo5PgG0?si=pKJOiYAVz5ASlqkI', '_blank')} className="w-12 h-12 rounded-xl hover:bg-[#3a3a3a] transition-colors flex items-center justify-center">
            <Settings className="w-5 h-5 text-gray-400" />
          </button>
        </nav>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Bottom Icons */}
        <div className="flex flex-col gap-4 items-center">
          <button onClick={() => window.open('https://youtu.be/xvFZjo5PgG0?si=pKJOiYAVz5ASlqkI', '_blank')} className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
            <span className="text-xl">🔔</span>
          </button>
          <div className="w-12 h-12 flex items-center justify-center">
            <UserButton />
          </div>
        </div>
      </div>


    </div>
  );
}

