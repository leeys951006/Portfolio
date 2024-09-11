import InfoLink from './InfoLink';

interface InformationSectionProps {
  isBrightMode: boolean;
  copyEmailToClipboard: () => void;
}

const InformationSection: React.FC<InformationSectionProps> = ({ isBrightMode, copyEmailToClipboard }) => (
  <div className={`w-full h-auto lg:h-[300px] flex flex-col items-center justify-center mt-12 p-4 ${isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'}`}>
    <h1 className="text-white font-bold text-3xl lg:text-4xl mb-6 lg:mb-8">정보</h1>

    <div className="flex flex-col lg:flex-row items-center w-full justify-center lg:space-x-16">
      <p className="text-white text-center mb-4 lg:mb-0 lg:mr-8">Phone: 010-5546-0640</p>
      <p className="text-white text-center mb-4 lg:mb-0 lg:mr-8">
        Email:{' '}
        <span className="cursor-pointer hover:text-gray-300 transition-colors duration-200" onClick={copyEmailToClipboard}>
          leeys951006@gmail.com
        </span>
      </p>

      <div className="relative flex items-center space-x-4">
        <InfoLink href="https://github.com/leeys951006" src="/github.png" alt="GitHub" />
        <span className="h-6 w-[2px] bg-white"></span>
        <InfoLink href="https://nifty-mountain-1e6.notion.site/6082bd6c7d394c01a33ca3c9395cd3b1?v=7bdd17d9378f42e2bffce1b200cfc53a&pvs=4" src="/notion.png" alt="Notion" />
        <span className="h-6 w-[2px] bg-white"></span>
        <InfoLink href="/이연승_포트폴리오.pdf" src="/pdf.png" alt="PDF" />
      </div>
    </div>
  </div>
);

export default InformationSection;
