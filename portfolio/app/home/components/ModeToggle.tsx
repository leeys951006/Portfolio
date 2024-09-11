interface ModeToggleProps {
  isBrightMode: boolean;
  toggleBrightMode: () => void;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ isBrightMode, toggleBrightMode }) => (
  <div className="flex items-center mt-6">
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" checked={isBrightMode} onChange={toggleBrightMode} className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F7B033]"></div>
    </label>
    <span className={`ml-2 text-sm ${isBrightMode ? 'text-[#F7B033]' : 'text-[#333333]'}`}>채용 하기</span>
  </div>
);

export default ModeToggle;
