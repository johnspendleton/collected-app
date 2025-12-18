const imgImage2 = "/assets/image2.png";
const imgAppleAppButton = "/assets/apple-app-button.png";
const imgImage14 = "/assets/image14.png";
const imgBackground = "/assets/background.svg";
const imgLine1 = "/assets/line1.svg";
const img = "/assets/arrow.svg";
const imgCollectdMyOrangeLogo = "/assets/logo.svg";

export default function Header() {
  return (
    <div className="relative w-full" data-name="Header" data-node-id="1:1036">
      <div className="relative w-[1900px] mx-auto">
      <div className="absolute left-[calc(50%-391.44px)] top-[566.63px] translate-x-[-50%]" data-name="store buttons" data-node-id="1:1041">
        <div className="relative h-[62px] w-[187.746px]" data-name="Apple App Button" data-node-id="1:1042">
          <img alt="Download on the App Store" className="w-full h-full object-contain" src={imgAppleAppButton} />
        </div>
      </div>
      <p className="absolute font-outfit leading-[85px] left-[calc(50%-391.44px)] not-italic text-[90px] text-center text-white top-[346.13px] translate-x-[-50%] w-[839.591px]" data-node-id="1:1044">
        {`The simple way to `}
        <br aria-hidden="true" />
        manage modern life.
      </p>
      <div className="absolute contents left-0 top-[37.08px]" data-name="Navigation Bar" data-node-id="1:1045">
        <div className="absolute contents left-[calc(50%+89.41px)] top-[37.08px] translate-x-[-50%]" data-name="nav" data-node-id="1:1047">
          <div className="absolute flex gap-[40px] left-[calc(50%-608.5px)] top-[48.63px]" data-node-id="1:1048">
            <p className="font-outfit leading-[24px] not-italic text-[16px] text-white tracking-[0.2px] hover:text-[#FFD166] transition-colors duration-300 cursor-pointer">Overview</p>
            <p className="font-outfit leading-[24px] not-italic text-[16px] text-white tracking-[0.2px] hover:text-[#FFD166] transition-colors duration-300 cursor-pointer">Built for privacy</p>
            <p className="font-outfit leading-[24px] not-italic text-[16px] text-white tracking-[0.2px] hover:text-[#FFD166] transition-colors duration-300 cursor-pointer">FAQ</p>
            <p className="font-outfit leading-[24px] not-italic text-[16px] text-white tracking-[0.2px] hover:text-[#FFD166] transition-colors duration-300 cursor-pointer">Contact us</p>
          </div>
          <div className="absolute bg-[#4c4065] hover:bg-[#957BCC] content-stretch flex gap-[5px] items-center justify-center left-[calc(50%+704.31px)] pb-[13px] pt-[12px] px-[23px] rounded-[25px] top-[37.08px] translate-x-[-50%] transition-colors duration-300 cursor-pointer" data-name="standard/website" data-node-id="1:1049">
            <p className="font-outfit leading-[22px] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white" data-node-id="I1:1049;1153:13017">
              Try for free
            </p>
            <div className="relative shrink-0 size-[24px]" data-name="arrow right" data-node-id="I1:1049;2199:1287">
              <div className="absolute contents inset-[26.17%_37.77%]" data-name="Back <" data-node-id="I1:1049;2199:1287;0:24354">
                <div className="absolute inset-[26.17%_37.77%]" data-node-id="I1:1049;2199:1287;0:24355">
                  <div className="absolute inset-[-8.06%_-24.1%_-11.34%_-24.04%]">
                    <img alt="" className="block max-w-none size-full" src={img} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[37px] left-[calc(50%-791.5px)] top-[39px] translate-x-[-50%] w-[215px]" data-name="Collect'd/My orange logo" data-node-id="1:1050">
          <img alt="" className="block max-w-none size-full" src={imgCollectdMyOrangeLogo} />
        </div>
      </div>
      <div className="absolute h-[780px] left-[calc(50%+460.69px)] top-[206.63px] translate-x-[-50%] w-[973.378px]" data-name="image 14" data-node-id="1:1052">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
      </div>
    </div>
  );
}
