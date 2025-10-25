import { imgFrame, imgFrame1, imgFrame2, imgFrame3, imgFrame4, imgFrame5, imgFrame6, imgFrame7, imgFrame8, imgFrame9, imgFrame10, imgFrame11, imgFrame12, imgFrame13, imgFrame14, imgFrame15 } from "./svg-qr6sw";

function Span() {
  return (
    <div className="absolute h-8 left-0 top-0 w-[56.479px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-8 justify-center leading-[0] left-0 not-italic text-[20.4px] text-blue-900 top-4 translate-y-[-50%] w-[56.479px]">
        <p className="leading-[32px]">Logo</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-8 left-0 top-0 w-[116.917px]" data-name="Heading">
      <Span />
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-8 justify-center leading-[0] left-[56.48px] not-italic text-[20.4px] text-blue-900 top-4 translate-y-[-50%] w-[60.438px]">
        <p className="leading-[32px]">{` Here`}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-8 left-4 top-1 w-[116.917px]" data-name="Container">
      <Heading />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-2 w-11" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[21.333px] justify-center leading-[0] left-[22px] not-italic text-[13.6px] text-blue-900 text-center top-3 translate-x-[-50%] translate-y-[-50%] w-11">
        <p className="leading-[24px]">Home</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[76px] top-2 w-[59px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[21.333px] justify-center leading-[0] left-[29.5px] not-italic text-[13.6px] text-blue-900 text-center top-3 translate-x-[-50%] translate-y-[-50%] w-[59px]">
        <p className="leading-[24px]">Services</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[167px] top-2 w-[141.406px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[21.333px] justify-center leading-[0] left-[70.7px] not-italic text-[13.6px] text-blue-900 text-center top-3 translate-x-[-50%] translate-y-[-50%] w-[141.406px]">
        <p className="leading-[24px]">{`Terms & Conditions`}</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[340.41px] top-2 w-[67.604px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[21.333px] justify-center leading-[0] left-[33.8px] not-italic text-[13.6px] text-blue-900 text-center top-3 translate-x-[-50%] translate-y-[-50%] w-[67.604px]">
        <p className="leading-[24px]">About Us</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-blue-900 h-10 left-[440.01px] rounded-[6px] top-0 w-[122.094px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.333px] justify-center leading-[0] left-[61.05px] not-italic text-[13.6px] text-center text-white top-5 translate-x-[-50%] translate-y-[-50%] w-[90.094px]">
        <p className="leading-[24px]">Admin Login</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-10 left-[686.56px] top-0 w-[562.104px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-10 left-0 top-4 w-[1264.67px]" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[72px] left-0 top-0 w-[1264.67px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[rgba(0,0,0,0.5)] h-[465.333px] left-0 top-0 w-[1264.67px]" data-name="Container" />;
}

function Image() {
  return <div className="absolute h-[465.333px] left-0 top-0 w-[1264.67px]" data-name="Image" />;
}

function Container5() {
  return (
    <div className="absolute h-[465.333px] left-0 top-0 w-[1264.67px]" data-name="Container">
      <Container4 />
      <Image />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[672px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-20 justify-center leading-[0] left-0 not-italic text-[51px] text-white top-[30px] translate-y-[-50%] w-[628.333px]">
        <p className="leading-[60px]">Play More, Worry Less</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-7 left-0 top-[76px] w-[672px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[26.667px] justify-center leading-[0] left-0 not-italic text-[17px] text-white top-3.5 translate-y-[-50%] w-[542.615px]">
        <p className="leading-[28px]">Check availability, lock your time, and enjoy a stress-free play.</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-blue-500 h-[52px] left-0 rounded-[6px] top-0 w-[195.031px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[21.333px] justify-center leading-[0] left-[97.52px] not-italic text-[13.6px] text-center text-white top-[26px] translate-x-[-50%] translate-y-[-50%] w-[131.031px]">
        <p className="leading-[24px]">Reserve Your Slot</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[52px] left-[211.03px] rounded-[6px] top-0 w-[176.781px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[21.333px] justify-center leading-[0] left-[88.39px] not-italic text-[13.6px] text-center text-white top-[26px] translate-x-[-50%] translate-y-[-50%] w-[108.781px]">
        <p className="leading-[24px]">View Schedule</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[52px] left-0 top-[136px] w-[672px]" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[188px] left-4 top-0 w-[672px]" data-name="Container">
      <Heading1 />
      <Paragraph />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[188px] left-0 top-[170.67px] w-[1264.67px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute h-[465.333px] left-0 top-0 w-[1264.67px]" data-name="Section">
      <Container5 />
      <Container8 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-10 left-0 top-0 w-[1232.67px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-12 justify-center leading-[0] left-[616.33px] not-italic text-[30.6px] text-blue-900 text-center top-5 translate-x-[-50%] translate-y-[-50%] w-[612.76px]">
        <p className="leading-[40px]">Affordable Rates, Prime Court Time.</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-[280.33px] not-italic text-[13.6px] text-center text-gray-600 top-14 w-[672px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[21.333px] justify-center left-[336px] top-3 translate-x-[-50%] translate-y-[-50%] w-[634.458px]">
        <p className="leading-[24px]">{`Book your court time with ease. Whether you're planning a casual game with friends or an `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.333px] justify-center left-[336px] top-9 translate-x-[-50%] translate-y-[-50%] w-[484.688px]">
        <p className="leading-[24px]">intense training session, our courts are available at competitive rates.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[104px] left-4 top-0 w-[1232.67px]" data-name="Container">
      <Heading2 />
      <Paragraph1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-8 left-8 top-8 w-[704px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-8 justify-center leading-[0] left-[352px] not-italic text-[20.4px] text-blue-900 text-center top-4 translate-x-[-50%] translate-y-[-50%] w-[162.833px]">
        <p className="leading-[32px]">{`Hours & Rates`}</p>
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="absolute h-7 left-0 top-0 w-[177.135px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-6 justify-center leading-[0] left-0 not-italic text-[15.3px] text-blue-900 top-3.5 translate-y-[-50%] w-[177.135px]">
        <p className="leading-[28px]">{`Morning & Afternoon`}</p>
      </div>
    </div>
  );
}

function Span2() {
  return (
    <div className="absolute bg-blue-100 h-7 left-[211px] rounded-[9999px] top-0 w-[81px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[18.667px] justify-center leading-[0] left-3 not-italic text-[11.9px] text-blue-800 top-3.5 translate-y-[-50%] w-[57px]">
        <p className="leading-[20px]">Standard</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-7 left-6 top-6 w-[292px]" data-name="Container">
      <Span1 />
      <Span2 />
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute h-6 left-[70.94px] top-[11.33px] w-[44.198px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-6 justify-center leading-[0] left-0 not-italic text-[15.3px] text-gray-500 top-3 translate-y-[-50%] w-[44.198px]">
        <p className="leading-[28px]">/hour</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[37.333px] left-6 top-16 w-[292px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-10 justify-center leading-[0] left-0 not-italic text-[25.5px] text-blue-900 top-[18px] translate-y-[-50%] w-[70.938px]">
        <p className="leading-[36px]">₱500</p>
      </div>
      <Span3 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-6 left-6 top-[109.33px] w-[292px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.333px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-gray-600 top-3 translate-y-[-50%] w-[132.24px]">
        <p className="leading-[24px]">8:00 AM – 4:00 PM</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-10 leading-[0] left-6 not-italic text-[11.9px] text-gray-500 top-[141.33px] w-[292px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[18.667px] justify-center left-0 top-2.5 translate-y-[-50%] w-[241.302px]">
        <p className="leading-[20px]">{`Perfect for daytime games and practice `}</p>
      </div>
      <div className="absolute flex flex-col h-[18.667px] justify-center left-0 top-[30px] translate-y-[-50%] w-[50.604px]">
        <p className="leading-[20px]">sessions</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-white h-[209.333px] left-0 rounded-[8px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[340px]" data-name="Container">
      <Container10 />
      <Container11 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Span4() {
  return (
    <div className="absolute h-7 left-0 top-0 w-[133.542px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-6 justify-center leading-[0] left-0 not-italic text-[15.3px] text-blue-900 top-3.5 translate-y-[-50%] w-[133.542px]">
        <p className="leading-[28px]">{`Evening & Night`}</p>
      </div>
    </div>
  );
}

function Span5() {
  return (
    <div className="absolute bg-orange-100 h-7 left-[206.69px] rounded-[9999px] top-0 w-[81.313px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[18.667px] justify-center leading-[0] left-3 not-italic text-[11.9px] text-orange-800 top-3.5 translate-y-[-50%] w-[57.313px]">
        <p className="leading-[20px]">Premium</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-7 left-[26px] top-[26px] w-72" data-name="Container">
      <Span4 />
      <Span5 />
    </div>
  );
}

function Span6() {
  return (
    <div className="absolute h-6 left-[70.94px] top-[11.33px] w-[44.198px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-6 justify-center leading-[0] left-0 not-italic text-[15.3px] text-gray-500 top-3 translate-y-[-50%] w-[44.198px]">
        <p className="leading-[28px]">/hour</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[37.333px] left-[26px] top-[66px] w-72" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-10 justify-center leading-[0] left-0 not-italic text-[25.5px] text-blue-900 top-[18px] translate-y-[-50%] w-[70.938px]">
        <p className="leading-[36px]">₱650</p>
      </div>
      <Span6 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-6 left-[26px] top-[111.33px] w-72" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.333px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-gray-600 top-3 translate-y-[-50%] w-[139.5px]">
        <p className="leading-[24px]">5:00 PM – 11:00 PM</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-10 leading-[0] left-[26px] not-italic text-[11.9px] text-gray-500 top-[143.33px] w-72" data-name="Paragraph">
      <div className="absolute flex flex-col h-[18.667px] justify-center left-0 top-2.5 translate-y-[-50%] w-[227.781px]">
        <p className="leading-[20px]">{`Prime time for after-work games and `}</p>
      </div>
      <div className="absolute flex flex-col h-[18.667px] justify-center left-0 top-[30px] translate-y-[-50%] w-[78.771px]">
        <p className="leading-[20px]">tournaments</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-white h-[209.333px] left-[364px] rounded-[8px] top-0 w-[340px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-orange-500 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <Container13 />
      <Container14 />
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[209.333px] left-8 top-[88px] w-[704px]" data-name="Container">
      <Container12 />
      <Container15 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-7 left-0 top-0 w-[704px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-6 justify-center leading-[0] left-0 not-italic text-[15.3px] text-blue-900 top-3.5 translate-y-[-50%] w-[140.688px]">
        <p className="leading-[28px]">Payment Options</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-0 size-5 top-0.5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame} />
    </div>
  );
}

function Span7() {
  return (
    <div className="absolute h-6 left-7 top-0 w-[44.875px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.333px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-gray-700 top-3 translate-y-[-50%] w-[44.875px]">
        <p className="leading-[24px]">GCash</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-6 left-[246.79px] top-0 w-[72.875px]" data-name="Container">
      <Frame />
      <Span7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-0 size-5 top-0.5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame1} />
    </div>
  );
}

function Span8() {
  return (
    <div className="absolute h-6 left-7 top-0 w-[85.542px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.333px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-gray-700 top-3 translate-y-[-50%] w-[85.542px]">
        <p className="leading-[24px]">Cash on site</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-6 left-[343.67px] top-0 w-[113.542px]" data-name="Container">
      <Frame1 />
      <Span8 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-6 left-0 top-11 w-[704px]" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[68px] left-8 top-[329.33px] w-[704px]" data-name="Container">
      <Heading4 />
      <Container19 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-orange-500 h-12 left-[270.91px] rounded-[6px] top-0 w-[162.177px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[21.333px] justify-center leading-[0] left-[81.09px] not-italic text-[13.6px] text-center text-white top-6 translate-x-[-50%] translate-y-[-50%] w-[98.177px]">
        <p className="leading-[24px]">Reserve Now</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-12 left-8 top-[429.33px] w-[704px]" data-name="Container">
      <Button7 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-blue-50 h-[509.333px] left-[248.33px] rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[152px] w-[768px]" data-name="Container">
      <Heading3 />
      <Container16 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[661.333px] left-0 top-20 w-[1264.67px]" data-name="Container">
      <Container9 />
      <Container22 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-white h-[821.333px] left-0 top-[465.33px] w-[1264.67px]" data-name="Section">
      <Container23 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-10 left-0 top-0 w-[1232.67px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-12 justify-center leading-[0] left-[616.33px] not-italic text-[30.6px] text-blue-900 text-center top-5 translate-x-[-50%] translate-y-[-50%] w-[798.156px]">
        <p className="leading-[40px]">From Calendar to Court — Simple, Fast, Secure.</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-6 left-[280.33px] top-14 w-[672px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.333px] justify-center leading-[0] left-[336px] not-italic text-[13.6px] text-center text-gray-600 top-3 translate-x-[-50%] translate-y-[-50%] w-[230.552px]">
        <p className="leading-[24px]">Reserve your slot in 3 easy steps.</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-20 left-4 top-0 w-[1232.67px]" data-name="Container">
      <Heading5 />
      <Paragraph6 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-7 left-0 top-0 w-[832px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[26.667px] justify-center leading-[0] left-0 not-italic text-[17px] text-blue-900 top-3.5 translate-y-[-50%] w-[223.312px]">
        <p className="leading-[28px]">Step 1: Check Availability</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-6 left-0 top-0 w-[400px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.333px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-gray-600 top-3 translate-y-[-50%] w-[93.656px]">
        <p className="leading-[24px]">Select a date:</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#f0f0f0] left-0 size-11 top-0" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[18px] justify-center leading-[0] left-[22px] not-italic text-[13.6px] text-black text-center top-[22px] translate-x-[-50%] translate-y-[-50%] w-[8.906px]">
        <p className="leading-[18px]">«</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[#f0f0f0] left-11 size-11 top-0" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[18px] justify-center leading-[0] left-[22px] not-italic text-[13.6px] text-black text-center top-[22px] translate-x-[-50%] translate-y-[-50%] w-[5.333px]">
        <p className="leading-[18px]">‹</p>
      </div>
    </div>
  );
}

function Span9() {
  return (
    <div className="absolute h-[18px] left-[27.18px] top-[13px] w-[118.312px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[18px] justify-center leading-[0] left-[59.16px] not-italic text-[13.6px] text-black text-center top-[9px] translate-x-[-50%] translate-y-[-50%] w-[118.312px]">
        <p className="leading-[18px]">September 2025</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-[88px] top-0 w-[172.667px]" data-name="Button">
      <Span9 />
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[260.67px] size-11 top-0" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[18px] justify-center leading-[0] left-[22px] not-italic text-[13.6px] text-black text-center top-[22px] translate-x-[-50%] translate-y-[-50%] w-[5.333px]">
        <p className="leading-[18px]">›</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[304.67px] size-11 top-0" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[18px] justify-center leading-[0] left-[22px] not-italic text-[13.6px] text-black text-center top-[22px] translate-x-[-50%] translate-y-[-50%] w-[8.906px]">
        <p className="leading-[18px]">»</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-11 left-[0.67px] top-[0.67px] w-[348.667px]" data-name="Container">
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[13.333px] left-[10.9px] top-2 w-7" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[13.333px] justify-center leading-[0] left-3.5 not-italic text-[10.2px] text-black text-center top-[6.67px] translate-x-[-50%] translate-y-[-50%] w-7">
        <p className="leading-[18px]">Mon</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[30px] left-0 overflow-clip top-0 w-[49.802px]" data-name="Container">
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[13.333px] left-[12.9px] top-2 w-6" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[13.333px] justify-center leading-[0] left-3 not-italic text-[10.2px] text-black text-center top-[6.67px] translate-x-[-50%] translate-y-[-50%] w-6">
        <p className="leading-[18px]">Tue</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[30px] left-[49.8px] overflow-clip top-0 w-[49.802px]" data-name="Container">
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[13.333px] left-[10.9px] top-2 w-7" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[13.333px] justify-center leading-[0] left-3.5 not-italic text-[10.2px] text-black text-center top-[6.67px] translate-x-[-50%] translate-y-[-50%] w-7">
        <p className="leading-[18px]">Wed</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[30px] left-[99.6px] overflow-clip top-0 w-[49.802px]" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[13.333px] left-[12.56px] top-2 w-[24.667px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[13.333px] justify-center leading-[0] left-[12.33px] not-italic text-[10.2px] text-black text-center top-[6.67px] translate-x-[-50%] translate-y-[-50%] w-[24.667px]">
        <p className="leading-[18px]">Thu</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[30px] left-[149.41px] overflow-clip top-0 w-[49.802px]" data-name="Container">
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[13.333px] left-[15.23px] top-2 w-[19.333px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[13.333px] justify-center leading-[0] left-[9.67px] not-italic text-[10.2px] text-black text-center top-[6.67px] translate-x-[-50%] translate-y-[-50%] w-[19.333px]">
        <p className="leading-[18px]">Fri</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[30px] left-[199.21px] overflow-clip top-0 w-[49.802px]" data-name="Container">
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[13.333px] left-[13.34px] top-2 w-[23.115px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[13.333px] justify-center leading-[0] left-[11.56px] not-italic text-[10.2px] text-black text-center top-[6.67px] translate-x-[-50%] translate-y-[-50%] w-[23.115px]">
        <p className="leading-[18px]">Sat</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[30px] left-[249.01px] overflow-clip top-0 w-[49.802px]" data-name="Container">
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[13.333px] left-[12.23px] top-2 w-[25.344px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[13.333px] justify-center leading-[0] left-[12.67px] not-italic text-[10.2px] text-black text-center top-[6.67px] translate-x-[-50%] translate-y-[-50%] w-[25.344px]">
        <p className="leading-[18px]">Sun</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[30px] left-[298.81px] overflow-clip top-0 w-[49.802px]" data-name="Container">
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[30px] left-0 top-0 w-[348.667px]" data-name="Container">
      <Container27 />
      <Container29 />
      <Container31 />
      <Container33 />
      <Container35 />
      <Container37 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[14.667px] left-[21.19px] top-[11.33px] w-[7.417px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[3.71px] not-italic text-[#ababab] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[7.417px]">
        <p className="leading-[18px]">1</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-[#f0f0f0] h-[38px] left-0 overflow-clip top-0 w-[49.802px]" data-name="Button">
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[14.667px] left-[21.19px] top-[11.33px] w-[7.417px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[3.71px] not-italic text-[#ababab] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[7.417px]">
        <p className="leading-[18px]">2</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-[#f0f0f0] h-[38px] left-[49.8px] overflow-clip top-0 w-[49.802px]" data-name="Button">
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[14.667px] left-[21.19px] top-[11.33px] w-[7.417px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[3.71px] not-italic text-[#ababab] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[7.417px]">
        <p className="leading-[18px]">3</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-[#f0f0f0] h-[38px] left-[99.6px] overflow-clip top-0 w-[49.802px]" data-name="Button">
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[14.667px] left-[21.19px] top-[11.33px] w-[7.417px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[3.71px] not-italic text-[#ababab] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[7.417px]">
        <p className="leading-[18px]">4</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute bg-[#f0f0f0] h-[38px] left-[149.41px] overflow-clip top-0 w-[49.802px]" data-name="Button">
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[14.667px] left-[21.19px] top-[11.33px] w-[7.417px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[3.71px] not-italic text-[#ababab] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[7.417px]">
        <p className="leading-[18px]">5</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-[#f0f0f0] h-[38px] left-[199.21px] overflow-clip top-0 w-[49.802px]" data-name="Button">
      <Container45 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[14.667px] left-[21.19px] top-[11.33px] w-[7.417px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[3.71px] not-italic text-[#ababab] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[7.417px]">
        <p className="leading-[18px]">6</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute bg-[#f0f0f0] h-[38px] left-[249.01px] overflow-clip top-0 w-[49.802px]" data-name="Button">
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[14.667px] left-[21.19px] top-[11.33px] w-[7.417px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[3.71px] not-italic text-[#ababab] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[7.417px]">
        <p className="leading-[18px]">7</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute bg-[#f0f0f0] h-[38px] left-[298.81px] overflow-clip top-0 w-[49.802px]" data-name="Button">
      <Container47 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[14.667px] left-[21.19px] top-[11.33px] w-[7.417px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[3.71px] not-italic text-[#ababab] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[7.417px]">
        <p className="leading-[18px]">8</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute bg-[#f0f0f0] h-[38px] left-0 overflow-clip top-[38px] w-[49.802px]" data-name="Button">
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[14.667px] left-[21.19px] top-[11.33px] w-[7.417px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[3.71px] not-italic text-[11.05px] text-center text-white top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[7.417px]">
        <p className="leading-[18px]">9</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute bg-[#006edc] h-[38px] left-[49.8px] overflow-clip top-[38px] w-[49.802px]" data-name="Button">
      <Container49 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[11.05px] text-black text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">10</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[99.6px] overflow-clip top-[38px] w-[49.802px]" data-name="Button">
      <Container50 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[14.667px] left-[17.98px] top-[11.33px] w-[13.844px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[6.92px] not-italic text-[11.05px] text-black text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[13.844px]">
        <p className="leading-[18px]">11</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[149.41px] overflow-clip top-[38px] w-[49.802px]" data-name="Button">
      <Container51 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[11.05px] text-black text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">12</p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[199.21px] overflow-clip top-[38px] w-[49.802px]" data-name="Button">
      <Container52 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[#d10000] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">13</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[249.01px] overflow-clip top-[38px] w-[49.802px]" data-name="Button">
      <Container53 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[#d10000] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">14</p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[298.81px] overflow-clip top-[38px] w-[49.802px]" data-name="Button">
      <Container54 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[11.05px] text-black text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">15</p>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-0 overflow-clip top-[76px] w-[49.802px]" data-name="Button">
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[11.05px] text-black text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">16</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[49.8px] overflow-clip top-[76px] w-[49.802px]" data-name="Button">
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[11.05px] text-black text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">17</p>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[99.6px] overflow-clip top-[76px] w-[49.802px]" data-name="Button">
      <Container57 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[11.05px] text-black text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">18</p>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[149.41px] overflow-clip top-[76px] w-[49.802px]" data-name="Button">
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[11.05px] text-black text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">19</p>
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[199.21px] overflow-clip top-[76px] w-[49.802px]" data-name="Button">
      <Container59 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[#d10000] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">20</p>
      </div>
    </div>
  );
}

function Button32() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[249.01px] overflow-clip top-[76px] w-[49.802px]" data-name="Button">
      <Container60 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[#d10000] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">21</p>
      </div>
    </div>
  );
}

function Button33() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[298.81px] overflow-clip top-[76px] w-[49.802px]" data-name="Button">
      <Container61 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[11.05px] text-black text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">22</p>
      </div>
    </div>
  );
}

function Button34() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-0 overflow-clip top-[114px] w-[49.802px]" data-name="Button">
      <Container62 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[11.05px] text-black text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">23</p>
      </div>
    </div>
  );
}

function Button35() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[49.8px] overflow-clip top-[114px] w-[49.802px]" data-name="Button">
      <Container63 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[11.05px] text-black text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">24</p>
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[99.6px] overflow-clip top-[114px] w-[49.802px]" data-name="Button">
      <Container64 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[11.05px] text-black text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">25</p>
      </div>
    </div>
  );
}

function Button37() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[149.41px] overflow-clip top-[114px] w-[49.802px]" data-name="Button">
      <Container65 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[11.05px] text-black text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">26</p>
      </div>
    </div>
  );
}

function Button38() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[199.21px] overflow-clip top-[114px] w-[49.802px]" data-name="Button">
      <Container66 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[#d10000] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">27</p>
      </div>
    </div>
  );
}

function Button39() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[249.01px] overflow-clip top-[114px] w-[49.802px]" data-name="Button">
      <Container67 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[#d10000] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">28</p>
      </div>
    </div>
  );
}

function Button40() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[298.81px] overflow-clip top-[114px] w-[49.802px]" data-name="Button">
      <Container68 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[11.05px] text-black text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">29</p>
      </div>
    </div>
  );
}

function Button41() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-0 overflow-clip top-[152px] w-[49.802px]" data-name="Button">
      <Container69 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[14.667px] left-[17.48px] top-[11.33px] w-[14.833px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[7.42px] not-italic text-[11.05px] text-black text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[14.833px]">
        <p className="leading-[18px]">30</p>
      </div>
    </div>
  );
}

function Button42() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[49.8px] overflow-clip top-[152px] w-[49.802px]" data-name="Button">
      <Container70 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[14.667px] left-[21.19px] top-[11.33px] w-[7.417px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[3.71px] not-italic text-[#757575] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[7.417px]">
        <p className="leading-[18px]">1</p>
      </div>
    </div>
  );
}

function Button43() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[99.6px] overflow-clip top-[152px] w-[49.802px]" data-name="Button">
      <Container71 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute h-[14.667px] left-[21.19px] top-[11.33px] w-[7.417px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[3.71px] not-italic text-[#757575] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[7.417px]">
        <p className="leading-[18px]">2</p>
      </div>
    </div>
  );
}

function Button44() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[149.41px] overflow-clip top-[152px] w-[49.802px]" data-name="Button">
      <Container72 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[14.667px] left-[21.19px] top-[11.33px] w-[7.417px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[3.71px] not-italic text-[#757575] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[7.417px]">
        <p className="leading-[18px]">3</p>
      </div>
    </div>
  );
}

function Button45() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[199.21px] overflow-clip top-[152px] w-[49.802px]" data-name="Button">
      <Container73 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[14.667px] left-[21.19px] top-[11.33px] w-[7.417px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[3.71px] not-italic text-[#757575] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[7.417px]">
        <p className="leading-[18px]">4</p>
      </div>
    </div>
  );
}

function Button46() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[249.01px] overflow-clip top-[152px] w-[49.802px]" data-name="Button">
      <Container74 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[14.667px] left-[21.19px] top-[11.33px] w-[7.417px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14.667px] justify-center leading-[0] left-[3.71px] not-italic text-[#757575] text-[11.05px] text-center top-[7.33px] translate-x-[-50%] translate-y-[-50%] w-[7.417px]">
        <p className="leading-[18px]">5</p>
      </div>
    </div>
  );
}

function Button47() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[38px] left-[298.81px] overflow-clip top-[152px] w-[49.802px]" data-name="Button">
      <Container75 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute h-[190px] left-0 top-[30px] w-[348.667px]" data-name="Container">
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
      <Button24 />
      <Button25 />
      <Button26 />
      <Button27 />
      <Button28 />
      <Button29 />
      <Button30 />
      <Button31 />
      <Button32 />
      <Button33 />
      <Button34 />
      <Button35 />
      <Button36 />
      <Button37 />
      <Button38 />
      <Button39 />
      <Button40 />
      <Button41 />
      <Button42 />
      <Button43 />
      <Button44 />
      <Button45 />
      <Button46 />
      <Button47 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute h-[220px] left-0 top-0 w-[348.667px]" data-name="Container">
      <Container40 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[220px] left-0 top-0 w-[348.667px]" data-name="Container">
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute h-[220px] left-0 top-0 w-[348.667px]" data-name="Container">
      <Container78 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute h-[220px] left-[0.67px] top-[60.67px] w-[348.667px]" data-name="Container">
      <Container79 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute bg-white h-[281.333px] left-0 rounded-[8px] top-9 w-[350px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-0 border-[#a0a096] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <Container25 />
      <Container80 />
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute h-[420px] left-0 top-0 w-[400px]" data-name="Container">
      <Paragraph7 />
      <Container81 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[13.6px] text-gray-600 top-0 w-[400px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-3 translate-y-[-50%] w-[160.146px]">
        <p className="leading-[24px]">Available time slots for</p>
      </div>
      <div className="absolute flex flex-col h-[21.333px] justify-center left-[160.15px] top-3 translate-y-[-50%] w-[4.385px]">
        <p className="leading-[24px]"> </p>
      </div>
      <div className="absolute flex flex-col h-[21.333px] justify-center left-[164.53px] top-3 translate-y-[-50%] w-[64.219px]">
        <p className="leading-[24px]">9/9/2025</p>
      </div>
      <div className="absolute flex flex-col h-[21.333px] justify-center left-[228.75px] top-3 translate-y-[-50%] w-[3.469px]">
        <p className="leading-[24px]">:</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-4 left-0 top-4 w-[14.229px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame2} />
    </div>
  );
}

function Span10() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-[22.23px] not-italic text-[13.6px] text-gray-700 top-0 w-[132.771px]" data-name="Span">
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-3 translate-y-[-50%] w-[120.177px]">
        <p className="leading-[24px]">{`08:00 AM - 09:00 `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-9 translate-y-[-50%] w-[24.688px]">
        <p className="leading-[24px]">AM</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute h-12 left-[12.67px] top-[12.67px] w-[155px]" data-name="Container">
      <Frame2 />
      <Span10 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute h-4 left-[12.67px] top-[64.67px] w-[155px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-4 justify-center leading-[0] left-0 not-italic text-[10.2px] text-gray-700 top-2 translate-y-[-50%] w-[47.521px]">
        <p className="leading-[16px]">Available</p>
      </div>
    </div>
  );
}

function Button48() {
  return (
    <div className="absolute bg-white h-[93.333px] left-2 rounded-[8px] top-2 w-[180.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container83 />
      <Container84 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-4 left-0 top-4 w-[14.229px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame2} />
    </div>
  );
}

function Span11() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-[22.23px] not-italic text-[13.6px] text-gray-700 top-0 w-[132.771px]" data-name="Span">
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-3 translate-y-[-50%] w-[120.177px]">
        <p className="leading-[24px]">{`09:00 AM - 10:00 `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-9 translate-y-[-50%] w-[24.688px]">
        <p className="leading-[24px]">AM</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute h-12 left-[12.67px] top-[12.67px] w-[155px]" data-name="Container">
      <Frame3 />
      <Span11 />
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute h-4 left-[12.67px] top-[64.67px] w-[155px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-4 justify-center leading-[0] left-0 not-italic text-[10.2px] text-gray-700 top-2 translate-y-[-50%] w-[47.521px]">
        <p className="leading-[16px]">Available</p>
      </div>
    </div>
  );
}

function Button49() {
  return (
    <div className="absolute bg-white h-[93.333px] left-[196.33px] rounded-[8px] top-2 w-[180.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container85 />
      <Container86 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-4 left-0 top-4 w-[14.365px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame3} />
    </div>
  );
}

function Span12() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-[22.36px] not-italic text-[13.6px] text-gray-400 top-0 w-[133.969px]" data-name="Span">
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-3 translate-y-[-50%] w-[120.177px]">
        <p className="leading-[24px]">{`10:00 AM - 11:00 `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-9 translate-y-[-50%] w-[24.688px]">
        <p className="leading-[24px]">AM</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute h-12 left-3 top-[12.67px] w-[156.333px]" data-name="Container">
      <Frame4 />
      <Span12 />
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute h-4 left-3 top-[64.67px] w-[156.333px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-4 justify-center leading-[0] left-0 not-italic text-[10.2px] text-gray-400 top-2 translate-y-[-50%] w-[40.25px]">
        <p className="leading-[16px]">Booked</p>
      </div>
    </div>
  );
}

function Button50() {
  return (
    <div className="absolute bg-gray-100 h-[93.333px] left-2 rounded-[8px] top-[109.33px] w-[180.333px]" data-name="Button">
      <Container87 />
      <Container88 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-4 left-0 top-4 w-[14.354px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame4} />
    </div>
  );
}

function Span13() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-[22.35px] not-italic text-[13.6px] text-gray-700 top-0 w-[132.646px]" data-name="Span">
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-3 translate-y-[-50%] w-[120.177px]">
        <p className="leading-[24px]">{`11:00 AM - 12:00 `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-9 translate-y-[-50%] w-[23.333px]">
        <p className="leading-[24px]">PM</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute h-12 left-[12.67px] top-[12.67px] w-[155px]" data-name="Container">
      <Frame5 />
      <Span13 />
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute h-4 left-[12.67px] top-[64.67px] w-[155px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-4 justify-center leading-[0] left-0 not-italic text-[10.2px] text-gray-700 top-2 translate-y-[-50%] w-[47.521px]">
        <p className="leading-[16px]">Available</p>
      </div>
    </div>
  );
}

function Button51() {
  return (
    <div className="absolute bg-white h-[93.333px] left-[196.33px] rounded-[8px] top-[109.33px] w-[180.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container89 />
      <Container90 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-4 left-0 top-4 w-[14.604px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame5} />
    </div>
  );
}

function Span14() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-[22.6px] not-italic text-[13.6px] text-gray-400 top-0 w-[133.729px]" data-name="Span">
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-3 translate-y-[-50%] w-[118.812px]">
        <p className="leading-[24px]">{`12:00 PM - 01:00 `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-9 translate-y-[-50%] w-[23.333px]">
        <p className="leading-[24px]">PM</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute h-12 left-3 top-[12.67px] w-[156.333px]" data-name="Container">
      <Frame6 />
      <Span14 />
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute h-4 left-3 top-[64.67px] w-[156.333px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-4 justify-center leading-[0] left-0 not-italic text-[10.2px] text-gray-400 top-2 translate-y-[-50%] w-[40.25px]">
        <p className="leading-[16px]">Booked</p>
      </div>
    </div>
  );
}

function Button52() {
  return (
    <div className="absolute bg-gray-100 h-[93.333px] left-2 rounded-[8px] top-[210.67px] w-[180.333px]" data-name="Button">
      <Container91 />
      <Container92 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-4 left-0 top-4 w-[14.469px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame6} />
    </div>
  );
}

function Span15() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-[22.47px] not-italic text-[13.6px] text-gray-700 top-0 w-[132.531px]" data-name="Span">
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-3 translate-y-[-50%] w-[118.812px]">
        <p className="leading-[24px]">{`01:00 PM - 02:00 `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-9 translate-y-[-50%] w-[23.333px]">
        <p className="leading-[24px]">PM</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute h-12 left-[12.67px] top-[12.67px] w-[155px]" data-name="Container">
      <Frame7 />
      <Span15 />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute h-4 left-[12.67px] top-[64.67px] w-[155px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-4 justify-center leading-[0] left-0 not-italic text-[10.2px] text-gray-700 top-2 translate-y-[-50%] w-[47.521px]">
        <p className="leading-[16px]">Available</p>
      </div>
    </div>
  );
}

function Button53() {
  return (
    <div className="absolute bg-white h-[93.333px] left-[196.33px] rounded-[8px] top-[210.67px] w-[180.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container93 />
      <Container94 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-4 left-0 top-4 w-[14.469px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame6} />
    </div>
  );
}

function Span16() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-[22.47px] not-italic text-[13.6px] text-gray-700 top-0 w-[132.531px]" data-name="Span">
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-3 translate-y-[-50%] w-[118.812px]">
        <p className="leading-[24px]">{`02:00 PM - 03:00 `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-9 translate-y-[-50%] w-[23.333px]">
        <p className="leading-[24px]">PM</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute h-12 left-[12.67px] top-[12.67px] w-[155px]" data-name="Container">
      <Frame8 />
      <Span16 />
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute h-4 left-[12.67px] top-[64.67px] w-[155px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-4 justify-center leading-[0] left-0 not-italic text-[10.2px] text-gray-700 top-2 translate-y-[-50%] w-[47.521px]">
        <p className="leading-[16px]">Available</p>
      </div>
    </div>
  );
}

function Button54() {
  return (
    <div className="absolute bg-white h-[93.333px] left-2 rounded-[8px] top-[312px] w-[180.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container95 />
      <Container96 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-4 left-0 top-4 w-[14.469px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame6} />
    </div>
  );
}

function Span17() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-[22.47px] not-italic text-[13.6px] text-gray-700 top-0 w-[132.531px]" data-name="Span">
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-3 translate-y-[-50%] w-[118.812px]">
        <p className="leading-[24px]">{`03:00 PM - 04:00 `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-9 translate-y-[-50%] w-[23.333px]">
        <p className="leading-[24px]">PM</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute h-12 left-[12.67px] top-[12.67px] w-[155px]" data-name="Container">
      <Frame9 />
      <Span17 />
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute h-4 left-[12.67px] top-[64.67px] w-[155px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-4 justify-center leading-[0] left-0 not-italic text-[10.2px] text-gray-700 top-2 translate-y-[-50%] w-[47.521px]">
        <p className="leading-[16px]">Available</p>
      </div>
    </div>
  );
}

function Button55() {
  return (
    <div className="absolute bg-white h-[93.333px] left-[196.33px] rounded-[8px] top-[312px] w-[180.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container97 />
      <Container98 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-4 left-0 top-4 w-[14.604px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame5} />
    </div>
  );
}

function Span18() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-[22.6px] not-italic text-[13.6px] text-gray-400 top-0 w-[133.729px]" data-name="Span">
      <div className="absolute flex flex-col h-[21.334px] justify-center left-0 top-3 translate-y-[-50%] w-[118.812px]">
        <p className="leading-[24px]">{`04:00 PM - 05:00 `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.334px] justify-center left-0 top-9 translate-y-[-50%] w-[23.333px]">
        <p className="leading-[24px]">PM</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute h-12 left-3 top-[12.67px] w-[156.333px]" data-name="Container">
      <Frame10 />
      <Span18 />
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute h-4 left-3 top-[64.67px] w-[156.333px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-4 justify-center leading-[0] left-0 not-italic text-[10.2px] text-gray-400 top-2 translate-y-[-50%] w-[40.25px]">
        <p className="leading-[16px]">Booked</p>
      </div>
    </div>
  );
}

function Button56() {
  return (
    <div className="absolute bg-gray-100 h-[93.333px] left-2 rounded-[8px] top-[413.33px] w-[180.333px]" data-name="Button">
      <Container99 />
      <Container100 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-4 left-0 top-4 w-[14.469px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame6} />
    </div>
  );
}

function Span19() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-[22.47px] not-italic text-[13.6px] text-gray-700 top-0 w-[132.531px]" data-name="Span">
      <div className="absolute flex flex-col h-[21.334px] justify-center left-0 top-3 translate-y-[-50%] w-[118.812px]">
        <p className="leading-[24px]">{`05:00 PM - 06:00 `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.334px] justify-center left-0 top-9 translate-y-[-50%] w-[23.333px]">
        <p className="leading-[24px]">PM</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute h-12 left-[12.67px] top-[12.67px] w-[155px]" data-name="Container">
      <Frame11 />
      <Span19 />
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute h-4 left-[12.67px] top-[64.67px] w-[155px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-4 justify-center leading-[0] left-0 not-italic text-[10.2px] text-gray-700 top-2 translate-y-[-50%] w-[47.521px]">
        <p className="leading-[16px]">Available</p>
      </div>
    </div>
  );
}

function Button57() {
  return (
    <div className="absolute bg-white h-[93.333px] left-[196.33px] rounded-[8px] top-[413.33px] w-[180.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container101 />
      <Container102 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-4 left-0 top-4 w-[14.604px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame5} />
    </div>
  );
}

function Span20() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-[22.6px] not-italic text-[13.6px] text-gray-400 top-0 w-[133.729px]" data-name="Span">
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-3 translate-y-[-50%] w-[118.812px]">
        <p className="leading-[24px]">{`06:00 PM - 07:00 `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-9 translate-y-[-50%] w-[23.333px]">
        <p className="leading-[24px]">PM</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute h-12 left-3 top-[12.67px] w-[156.333px]" data-name="Container">
      <Frame12 />
      <Span20 />
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute h-4 left-3 top-[64.67px] w-[156.333px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-4 justify-center leading-[0] left-0 not-italic text-[10.2px] text-gray-400 top-2 translate-y-[-50%] w-[40.25px]">
        <p className="leading-[16px]">Booked</p>
      </div>
    </div>
  );
}

function Button58() {
  return (
    <div className="absolute bg-gray-100 h-[93.333px] left-2 rounded-[8px] top-[514.67px] w-[180.333px]" data-name="Button">
      <Container103 />
      <Container104 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-4 left-0 top-4 w-[14.469px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame6} />
    </div>
  );
}

function Span21() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-[22.47px] not-italic text-[13.6px] text-gray-700 top-0 w-[132.531px]" data-name="Span">
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-3 translate-y-[-50%] w-[118.812px]">
        <p className="leading-[24px]">{`07:00 PM - 08:00 `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-9 translate-y-[-50%] w-[23.333px]">
        <p className="leading-[24px]">PM</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute h-12 left-[12.67px] top-[12.67px] w-[155px]" data-name="Container">
      <Frame13 />
      <Span21 />
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute h-4 left-[12.67px] top-[64.67px] w-[155px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-4 justify-center leading-[0] left-0 not-italic text-[10.2px] text-gray-700 top-2 translate-y-[-50%] w-[47.521px]">
        <p className="leading-[16px]">Available</p>
      </div>
    </div>
  );
}

function Button59() {
  return (
    <div className="absolute bg-white h-[93.333px] left-[196.33px] rounded-[8px] top-[514.67px] w-[180.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container105 />
      <Container106 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-4 left-0 top-4 w-[14.469px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame6} />
    </div>
  );
}

function Span22() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-[22.47px] not-italic text-[13.6px] text-gray-700 top-0 w-[132.531px]" data-name="Span">
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-3 translate-y-[-50%] w-[118.812px]">
        <p className="leading-[24px]">{`08:00 PM - 09:00 `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-9 translate-y-[-50%] w-[23.333px]">
        <p className="leading-[24px]">PM</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute h-12 left-[12.67px] top-[12.67px] w-[155px]" data-name="Container">
      <Frame14 />
      <Span22 />
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute h-4 left-[12.67px] top-[64.67px] w-[155px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-4 justify-center leading-[0] left-0 not-italic text-[10.2px] text-gray-700 top-2 translate-y-[-50%] w-[47.521px]">
        <p className="leading-[16px]">Available</p>
      </div>
    </div>
  );
}

function Button60() {
  return (
    <div className="absolute bg-white h-[93.333px] left-2 rounded-[8px] top-[616px] w-[180.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container107 />
      <Container108 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-4 left-0 top-4 w-[14.469px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame6} />
    </div>
  );
}

function Span23() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-[22.47px] not-italic text-[13.6px] text-gray-700 top-0 w-[132.531px]" data-name="Span">
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-3 translate-y-[-50%] w-[118.812px]">
        <p className="leading-[24px]">{`09:00 PM - 10:00 `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.333px] justify-center left-0 top-9 translate-y-[-50%] w-[23.333px]">
        <p className="leading-[24px]">PM</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute h-12 left-[12.67px] top-[12.67px] w-[155px]" data-name="Container">
      <Frame15 />
      <Span23 />
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute h-4 left-[12.67px] top-[64.67px] w-[155px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-4 justify-center leading-[0] left-0 not-italic text-[10.2px] text-gray-700 top-2 translate-y-[-50%] w-[47.521px]">
        <p className="leading-[16px]">Available</p>
      </div>
    </div>
  );
}

function Button61() {
  return (
    <div className="absolute bg-white h-[93.333px] left-[196.33px] rounded-[8px] top-[616px] w-[180.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container109 />
      <Container110 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute h-4 left-0 top-4 w-[14.469px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame6} />
    </div>
  );
}

function Span24() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-[22.47px] not-italic text-[13.6px] text-gray-700 top-0 w-[132.531px]" data-name="Span">
      <div className="absolute flex flex-col h-[21.334px] justify-center left-0 top-3 translate-y-[-50%] w-[118.812px]">
        <p className="leading-[24px]">{`10:00 PM - 11:00 `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.334px] justify-center left-0 top-9 translate-y-[-50%] w-[23.333px]">
        <p className="leading-[24px]">PM</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute h-12 left-[12.67px] top-[12.67px] w-[155px]" data-name="Container">
      <Frame16 />
      <Span24 />
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute h-4 left-[12.67px] top-[64.67px] w-[155px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-4 justify-center leading-[0] left-0 not-italic text-[10.2px] text-gray-700 top-2 translate-y-[-50%] w-[47.521px]">
        <p className="leading-[16px]">Available</p>
      </div>
    </div>
  );
}

function Button62() {
  return (
    <div className="absolute bg-white h-[93.333px] left-2 rounded-[8px] top-[717.33px] w-[180.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container111 />
      <Container112 />
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute h-96 left-0 top-9 w-[400px]" data-name="Container">
      <Button48 />
      <Button49 />
      <Button50 />
      <Button51 />
      <Button52 />
      <Button53 />
      <Button54 />
      <Button55 />
      <Button56 />
      <Button57 />
      <Button58 />
      <Button59 />
      <Button60 />
      <Button61 />
      <Button62 />
    </div>
  );
}

function Container114() {
  return (
    <div className="absolute h-[420px] left-[432px] top-0 w-[400px]" data-name="Container">
      <Paragraph8 />
      <Container113 />
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute h-[420px] left-0 top-[52px] w-[832px]" data-name="Container">
      <Container82 />
      <Container114 />
    </div>
  );
}

function Button63() {
  return (
    <div className="absolute bg-gray-300 h-10 left-[718.03px] rounded-[6px] top-0 w-[113.969px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[21.334px] justify-center leading-[0] left-[56.98px] not-italic text-[13.6px] text-center text-gray-500 top-5 translate-x-[-50%] translate-y-[-50%] w-[65.969px]">
        <p className="leading-[24px]">Continue</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute h-10 left-0 top-[496px] w-[832px]" data-name="Container">
      <Button63 />
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute h-[536px] left-8 top-8 w-[832px]" data-name="Container">
      <Heading6 />
      <Container115 />
      <Container116 />
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute bg-white h-[600px] left-[184.33px] rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-32 w-[896px]" data-name="Container">
      <Container117 />
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute h-[728px] left-0 top-20 w-[1264.67px]" data-name="Container">
      <Container24 />
      <Container118 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-gray-50 h-[888px] left-0 top-[1286.67px] w-[1264.67px]" data-name="Section">
      <Container119 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-10 left-0 top-0 w-[1232.67px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-12 justify-center leading-[0] left-[616.33px] not-italic text-[30.6px] text-blue-900 text-center top-5 translate-x-[-50%] translate-y-[-50%] w-[362.573px]">
        <p className="leading-[40px]">Our Court, Our Rules.</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-6 left-[280.33px] top-14 w-[672px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.334px] justify-center leading-[0] left-[336px] not-italic text-[13.6px] text-center text-gray-600 top-3 translate-x-[-50%] translate-y-[-50%] w-[393.031px]">
        <p className="leading-[24px]">Booking a court means agreeing to the following terms.</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute h-20 left-4 top-0 w-[1232.67px]" data-name="Container">
      <Heading7 />
      <Paragraph9 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute left-0 size-6 top-0.5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame7} />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-7 left-9 top-0 w-[164.865px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[26.666px] justify-center leading-[0] left-0 not-italic text-[17px] text-blue-900 top-3.5 translate-y-[-50%] w-[164.865px]">
        <p className="leading-[28px]">Important Policies</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute h-7 left-6 top-6 w-[720px]" data-name="Container">
      <Frame17 />
      <Heading8 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-6 not-italic text-[13.6px] text-gray-600 top-[68px] w-[720px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[21.334px] justify-center left-0 top-3 translate-y-[-50%] w-[705.615px]">
        <p className="leading-[24px]">{`Please read our policies carefully before making a reservation. By booking a court, you automatically `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.334px] justify-center left-0 top-9 translate-y-[-50%] w-[149.198px]">
        <p className="leading-[24px]">agree to these terms.</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute bg-blue-50 h-[156px] left-0 rounded-[8px] top-0 w-[768px]" data-name="Container">
      <Container121 />
      <Paragraph10 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-6 left-5 top-2 w-[748px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-blue-900 top-3 translate-y-[-50%] w-[178.781px]">
        <p className="leading-[24px]">First to pay gets the slot.</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-5 left-5 top-9 w-[748px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[18.666px] justify-center leading-[0] left-0 not-italic text-[11.9px] text-gray-600 top-2.5 translate-y-[-50%] w-[720.469px]">
        <p className="leading-[20px]">Reservations are only confirmed after payment. Until payment is made, the slot remains available to other customers.</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute h-16 left-0 top-0 w-[768px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-blue-900 border-solid inset-0 pointer-events-none" />
      <Heading9 />
      <Paragraph11 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-6 left-5 top-2 w-[748px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-blue-900 top-3 translate-y-[-50%] w-[369.979px]">
        <p className="leading-[24px]">Downpayment is required to confirm a reservation.</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-5 left-5 top-9 w-[748px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[18.666px] justify-center leading-[0] left-0 not-italic text-[11.9px] text-gray-600 top-2.5 translate-y-[-50%] w-[747.396px]">
        <p className="leading-[20px]">A 50% downpayment is required to secure your booking. The remaining balance can be paid before your scheduled time.</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute h-16 left-0 top-[88px] w-[768px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-blue-900 border-solid inset-0 pointer-events-none" />
      <Heading10 />
      <Paragraph12 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute h-6 left-5 top-2 w-[748px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-blue-900 top-3 translate-y-[-50%] w-[368.813px]">
        <p className="leading-[24px]">Strictly no refund of downpayment once cancelled.</p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-5 left-5 top-9 w-[748px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[18.666px] justify-center leading-[0] left-0 not-italic text-[11.9px] text-gray-600 top-2.5 translate-y-[-50%] w-[616.719px]">
        <p className="leading-[20px]">Downpayments are non-refundable. Please be certain of your schedule before making a reservation.</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute h-16 left-0 top-44 w-[768px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-orange-500 border-solid inset-0 pointer-events-none" />
      <Heading11 />
      <Paragraph13 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute h-6 left-5 top-2 w-[748px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-blue-900 top-3 translate-y-[-50%] w-[183.75px]">
        <p className="leading-[24px]">No rescheduling allowed.</p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-5 left-5 top-9 w-[748px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[18.666px] justify-center leading-[0] left-0 not-italic text-[11.9px] text-gray-600 top-2.5 translate-y-[-50%] w-[720.542px]">
        <p className="leading-[20px]">{`Once a slot is booked, it cannot be rescheduled. If you can't make your reserved time, you'll need to book a new slot.`}</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute h-16 left-0 top-[264px] w-[768px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-orange-500 border-solid inset-0 pointer-events-none" />
      <Heading12 />
      <Paragraph14 />
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute h-[328px] left-0 top-[188px] w-[768px]" data-name="Container">
      <Container123 />
      <Container124 />
      <Container125 />
      <Container126 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute h-7 left-6 top-6 w-[720px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-6 justify-center leading-[0] left-0 not-italic text-[15.3px] text-blue-900 top-3.5 translate-y-[-50%] w-[184.781px]">
        <p className="leading-[28px]">Additional Court Rules</p>
      </div>
    </div>
  );
}

function Span25() {
  return (
    <div className="absolute h-6 left-0 top-0 w-[6.76px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-orange-500 top-3 translate-y-[-50%] w-[6.76px]">
        <p className="leading-[24px]">•</p>
      </div>
    </div>
  );
}

function Span26() {
  return (
    <div className="absolute h-6 left-[14.76px] top-0 w-[187.812px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-gray-600 top-3 translate-y-[-50%] w-[187.812px]">
        <p className="leading-[24px]">Use court at your own risk.</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute h-6 left-0 top-0 w-[720px]" data-name="Container">
      <Span25 />
      <Span26 />
    </div>
  );
}

function Span27() {
  return (
    <div className="absolute h-6 left-0 top-0 w-[6.76px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-orange-500 top-3 translate-y-[-50%] w-[6.76px]">
        <p className="leading-[24px]">•</p>
      </div>
    </div>
  );
}

function Span28() {
  return (
    <div className="absolute h-6 left-[14.76px] top-0 w-[391.427px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-gray-600 top-3 translate-y-[-50%] w-[391.427px]">
        <p className="leading-[24px]">The basketball court is for renters and their guests only.</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="absolute h-6 left-0 top-8 w-[720px]" data-name="Container">
      <Span27 />
      <Span28 />
    </div>
  );
}

function Span29() {
  return (
    <div className="absolute h-6 left-0 top-0 w-[6.76px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-orange-500 top-3 translate-y-[-50%] w-[6.76px]">
        <p className="leading-[24px]">•</p>
      </div>
    </div>
  );
}

function Span30() {
  return (
    <div className="absolute h-6 left-[14.76px] top-0 w-[445.969px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-gray-600 top-3 translate-y-[-50%] w-[445.969px]">
        <p className="leading-[24px]">Limit play to your reserved slot for there are still others waiting.</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute h-6 left-0 top-16 w-[720px]" data-name="Container">
      <Span29 />
      <Span30 />
    </div>
  );
}

function Span31() {
  return (
    <div className="absolute h-6 left-0 top-0 w-[6.76px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-orange-500 top-3 translate-y-[-50%] w-[6.76px]">
        <p className="leading-[24px]">•</p>
      </div>
    </div>
  );
}

function Span32() {
  return (
    <div className="absolute h-6 left-[14.76px] top-0 w-[170px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-gray-600 top-3 translate-y-[-50%] w-[170px]">
        <p className="leading-[24px]">Do not hang on the rim.</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute h-6 left-0 top-24 w-[720px]" data-name="Container">
      <Span31 />
      <Span32 />
    </div>
  );
}

function Span33() {
  return (
    <div className="absolute h-6 left-0 top-0 w-[6.76px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-orange-500 top-3 translate-y-[-50%] w-[6.76px]">
        <p className="leading-[24px]">•</p>
      </div>
    </div>
  );
}

function Span34() {
  return (
    <div className="absolute h-6 left-[14.76px] top-0 w-[420.875px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-gray-600 top-3 translate-y-[-50%] w-[420.875px]">
        <p className="leading-[24px]">No smoking, no chewing gum, glass or alcoholic beverages.</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="absolute h-6 left-0 top-32 w-[720px]" data-name="Container">
      <Span33 />
      <Span34 />
    </div>
  );
}

function Span35() {
  return (
    <div className="absolute h-6 left-0 top-0 w-[6.76px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-orange-500 top-3 translate-y-[-50%] w-[6.76px]">
        <p className="leading-[24px]">•</p>
      </div>
    </div>
  );
}

function Span36() {
  return (
    <div className="absolute h-6 left-[14.76px] top-0 w-[325.188px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-gray-600 top-3 translate-y-[-50%] w-[325.188px]">
        <p className="leading-[24px]">No skateboard, roller blades, or bikes allowed.</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute h-6 left-0 top-40 w-[720px]" data-name="Container">
      <Span35 />
      <Span36 />
    </div>
  );
}

function Span37() {
  return (
    <div className="absolute h-6 left-0 top-0 w-[6.76px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-orange-500 top-3 translate-y-[-50%] w-[6.76px]">
        <p className="leading-[24px]">•</p>
      </div>
    </div>
  );
}

function Span38() {
  return (
    <div className="absolute h-6 left-[14.76px] top-0 w-[560.781px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-gray-600 top-3 translate-y-[-50%] w-[560.781px]">
        <p className="leading-[24px]">WallStreet Sport is not responsible for any personal belongings left unattended.</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute h-6 left-0 top-48 w-[720px]" data-name="Container">
      <Span37 />
      <Span38 />
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute h-[216px] left-6 top-[68px] w-[720px]" data-name="Container">
      <Container128 />
      <Container129 />
      <Container130 />
      <Container131 />
      <Container132 />
      <Container133 />
      <Container134 />
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute bg-gray-50 h-[308px] left-0 rounded-[8px] top-[564px] w-[768px]" data-name="Container">
      <Heading13 />
      <Container135 />
    </div>
  );
}

function Container137() {
  return (
    <div className="absolute h-[872px] left-[248.33px] top-32 w-[768px]" data-name="Container">
      <Container122 />
      <Container127 />
      <Container136 />
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute h-[1000px] left-0 top-20 w-[1264.67px]" data-name="Container">
      <Container120 />
      <Container137 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-white h-[1160px] left-0 top-[2174.67px] w-[1264.67px]" data-name="Section">
      <Container138 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute h-10 left-0 top-0 w-[1232.67px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-12 justify-center leading-[0] left-[616.33px] not-italic text-[30.6px] text-blue-900 text-center top-5 translate-x-[-50%] translate-y-[-50%] w-[615.312px]">
        <p className="leading-[40px]">More Than a Court — A Community.</p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-[280.33px] not-italic text-[13.6px] text-center text-gray-600 top-14 w-[672px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[21.334px] justify-center left-[336px] top-3 translate-x-[-50%] translate-y-[-50%] w-[662.375px]">
        <p className="leading-[24px]">{`WallStreet Sport is dedicated to making basketball simple to play and easy to access. With our `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.334px] justify-center left-[336px] top-9 translate-x-[-50%] translate-y-[-50%] w-[664.896px]">
        <p className="leading-[24px]">online reservation system, you can check the schedule, book your slot, and focus on the game.</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="absolute h-[104px] left-4 top-0 w-[1232.67px]" data-name="Container">
      <Heading14 />
      <Paragraph15 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute h-7 left-0 top-0 w-[552.333px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[26.666px] justify-center leading-[0] left-0 not-italic text-[17px] text-blue-900 top-3.5 translate-y-[-50%] w-[183.792px]">
        <p className="leading-[28px]">Contact Information</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute left-0 size-5 top-3.5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame8} />
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute h-6 left-0 top-0 w-[485.708px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-blue-900 top-3 translate-y-[-50%] w-[62.104px]">
        <p className="leading-[24px]">Location</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-6 left-0 top-6 w-[485.708px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-gray-600 top-3 translate-y-[-50%] w-[485.708px]">
        <p className="leading-[24px]">78 Corrales Extension Tapia Street, Cagayan de Oro, 9000, Philippines</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="absolute h-12 left-8 top-0 w-[485.708px]" data-name="Container">
      <Heading16 />
      <Paragraph16 />
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute h-12 left-0 top-0 w-[552.333px]" data-name="Container">
      <Frame18 />
      <Container140 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute left-0 size-5 top-3.5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame9} />
    </div>
  );
}

function Heading17() {
  return (
    <div className="absolute h-6 left-0 top-0 w-[120.51px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-blue-900 top-3 translate-y-[-50%] w-[120.51px]">
        <p className="leading-[24px]">Contact Number</p>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-6 left-0 top-6 w-[120.51px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-gray-600 top-3 translate-y-[-50%] w-[103.646px]">
        <p className="leading-[24px]">0953 916 4621</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="absolute h-12 left-8 top-0 w-[120.51px]" data-name="Container">
      <Heading17 />
      <Paragraph17 />
    </div>
  );
}

function Container143() {
  return (
    <div className="absolute h-12 left-0 top-16 w-[552.333px]" data-name="Container">
      <Frame19 />
      <Container142 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute left-0 size-5 top-3.5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame10} />
    </div>
  );
}

function Heading18() {
  return (
    <div className="absolute h-6 left-0 top-0 w-[225.24px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-blue-900 top-3 translate-y-[-50%] w-[109.688px]">
        <p className="leading-[24px]">Business Hours</p>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-6 left-0 top-6 w-[225.24px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-gray-600 top-3 translate-y-[-50%] w-[225.24px]">
        <p className="leading-[24px]">Open Daily: 8:00 AM - 11:00 PM</p>
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute h-12 left-8 top-0 w-[225.24px]" data-name="Container">
      <Heading18 />
      <Paragraph18 />
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute h-12 left-0 top-32 w-[552.333px]" data-name="Container">
      <Frame20 />
      <Container144 />
    </div>
  );
}

function Container146() {
  return (
    <div className="absolute h-44 left-0 top-11 w-[552.333px]" data-name="Container">
      <Container141 />
      <Container143 />
      <Container145 />
    </div>
  );
}

function Container147() {
  return (
    <div className="absolute h-[220px] left-6 top-6 w-[552.333px]" data-name="Container">
      <Heading15 />
      <Container146 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute left-6 size-[18px] top-[11px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame11} />
    </div>
  );
}

function Container148() {
  return (
    <div className="absolute bg-orange-500 h-10 left-0 rounded-[6px] top-0 w-[141.281px]" data-name="Container">
      <Frame21 />
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[21.334px] justify-center leading-[0] left-[50px] not-italic text-[13.6px] text-white top-5 translate-y-[-50%] w-[67.281px]">
        <p className="leading-[24px]">Call Now</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="absolute h-10 left-6 top-[336px] w-[552.333px]" data-name="Container">
      <Container148 />
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute bg-white h-[400px] left-0 rounded-[8px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[600.333px]" data-name="Container">
      <Container147 />
      <Container149 />
    </div>
  );
}

function Container151() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[600.333px]" data-name="Container">
      <Container150 />
    </div>
  );
}

function Container152() {
  return <div className="absolute h-[400px] left-0 top-0 w-[600.333px]" data-name="Container" />;
}

function Container153() {
  return (
    <div className="absolute h-[400px] left-[632.33px] overflow-clip rounded-[8px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[600.333px]" data-name="Container">
      <Container152 />
    </div>
  );
}

function Container154() {
  return (
    <div className="absolute h-[400px] left-4 top-[152px] w-[1232.67px]" data-name="Container">
      <Container151 />
      <Container153 />
    </div>
  );
}

function Container155() {
  return (
    <div className="absolute h-[552px] left-0 top-20 w-[1264.67px]" data-name="Container">
      <Container139 />
      <Container154 />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-gray-50 h-[712px] left-0 top-[3334.67px] w-[1264.67px]" data-name="Section">
      <Container155 />
    </div>
  );
}

function Container156() {
  return (
    <div className="absolute h-[4046.67px] left-0 top-0 w-[1264.67px]" data-name="Container">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

function Span39() {
  return (
    <div className="absolute h-[26.667px] left-0 top-[0.67px] w-[97.229px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[26.666px] justify-center leading-[0] left-0 not-italic text-[17px] text-orange-400 top-[13.33px] translate-y-[-50%] w-[97.229px]">
        <p className="leading-[28px]">WallStreet</p>
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="absolute h-7 left-0 top-0 w-[284.167px]" data-name="Heading">
      <Span39 />
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[26.666px] justify-center leading-[0] left-[97.23px] not-italic text-[17px] text-white top-3.5 translate-y-[-50%] w-[57.677px]">
        <p className="leading-[28px]">{` Sport`}</p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[72px] leading-[0] left-0 not-italic text-[13.6px] text-blue-200 top-11 w-[284.167px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[21.334px] justify-center left-0 top-3 translate-y-[-50%] w-[234.344px]">
        <p className="leading-[24px]">{`Making basketball accessible and `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.334px] justify-center left-0 top-9 translate-y-[-50%] w-[265.906px]">
        <p className="leading-[24px]">{`enjoyable for everyone with our `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.334px] justify-center left-[228.47px] top-9 translate-y-[-50%] w-[37.438px]">
        <p className="leading-[24px]">easy-to-use</p>
      </div>
      <div className="absolute flex flex-col h-[21.334px] justify-center left-[45.41px] top-[60px] translate-y-[-50%] w-[180.5px]">
        <p className="leading-[24px]">{` court reservation system.`}</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame12} />
    </div>
  );
}

function Container157() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="Container">
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame13} />
    </div>
  );
}

function Container158() {
  return (
    <div className="absolute left-9 size-5 top-0" data-name="Container">
      <Frame23 />
    </div>
  );
}

function Container159() {
  return (
    <div className="absolute h-5 left-0 top-[132px] w-[284.167px]" data-name="Container">
      <Container157 />
      <Container158 />
    </div>
  );
}

function Container160() {
  return (
    <div className="absolute h-[164px] left-0 top-0 w-[284.167px]" data-name="Container">
      <Heading19 />
      <Paragraph19 />
      <Container159 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="absolute h-7 left-0 top-0 w-[284.167px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-6 justify-center leading-[0] left-0 not-italic text-[15.3px] text-white top-3.5 translate-y-[-50%] w-[92.885px]">
        <p className="leading-[28px]">Quick Links</p>
      </div>
    </div>
  );
}

function Button64() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-0 w-[42.885px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.334px] justify-center leading-[0] left-[21.44px] not-italic text-[13.6px] text-blue-200 text-center top-3 translate-x-[-50%] translate-y-[-50%] w-[42.885px]">
        <p className="leading-[24px]">Home</p>
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="absolute h-6 left-0 top-0 w-[284.167px]" data-name="Container">
      <Button64 />
    </div>
  );
}

function Button65() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-0 w-[56.521px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.334px] justify-center leading-[0] left-[28.26px] not-italic text-[13.6px] text-blue-200 text-center top-3 translate-x-[-50%] translate-y-[-50%] w-[56.521px]">
        <p className="leading-[24px]">Services</p>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="absolute h-6 left-0 top-8 w-[284.167px]" data-name="Container">
      <Button65 />
    </div>
  );
}

function Button66() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-0 w-[139.042px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.334px] justify-center leading-[0] left-[69.52px] not-italic text-[13.6px] text-blue-200 text-center top-3 translate-x-[-50%] translate-y-[-50%] w-[139.042px]">
        <p className="leading-[24px]">{`Terms & Conditions`}</p>
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="absolute h-6 left-0 top-16 w-[284.167px]" data-name="Container">
      <Button66 />
    </div>
  );
}

function Button67() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-0 w-[65.75px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.334px] justify-center leading-[0] left-[32.88px] not-italic text-[13.6px] text-blue-200 text-center top-3 translate-x-[-50%] translate-y-[-50%] w-[65.75px]">
        <p className="leading-[24px]">About Us</p>
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="absolute h-6 left-0 top-24 w-[284.167px]" data-name="Container">
      <Button67 />
    </div>
  );
}

function Container165() {
  return (
    <div className="absolute h-[120px] left-0 top-11 w-[284.167px]" data-name="Container">
      <Container161 />
      <Container162 />
      <Container163 />
      <Container164 />
    </div>
  );
}

function Container166() {
  return (
    <div className="absolute h-[164px] left-[316.17px] top-0 w-[284.167px]" data-name="Container">
      <Heading20 />
      <Container165 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="absolute h-7 left-0 top-0 w-[284.167px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-6 justify-center leading-[0] left-0 not-italic text-[15.3px] text-white top-3.5 translate-y-[-50%] w-[123.406px]">
        <p className="leading-[28px]">Business Hours</p>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[13.6px] text-blue-200 top-0 w-[284.167px]" data-name="Container">
      <div className="absolute flex flex-col h-[21.334px] justify-center left-0 top-3 translate-y-[-50%] w-[124.219px]">
        <p className="leading-[24px]">Monday to Friday</p>
      </div>
      <div className="absolute flex flex-col h-[21.334px] justify-center left-[-20px] top-[10.67px] translate-y-[-50%] w-[13.6px]">
        <p className="leading-[24px]">•</p>
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[13.6px] text-blue-200 top-8 w-[284.167px]" data-name="Container">
      <div className="absolute flex flex-col h-[21.334px] justify-center left-0 top-3 translate-y-[-50%] w-[147.656px]">
        <p className="leading-[24px]">8:00 AM to 11:00 PM</p>
      </div>
      <div className="absolute flex flex-col h-[21.334px] justify-center left-[-20px] top-[10.67px] translate-y-[-50%] w-[13.6px]">
        <p className="leading-[24px]">•</p>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="absolute h-14 left-0 top-11 w-[284.167px]" data-name="Container">
      <Container167 />
      <Container168 />
    </div>
  );
}

function Container170() {
  return (
    <div className="absolute h-[164px] left-[632.33px] top-0 w-[284.167px]" data-name="Container">
      <Heading21 />
      <Container169 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="absolute h-7 left-0 top-0 w-[284.167px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-6 justify-center leading-[0] left-0 not-italic text-[15.3px] text-white top-3.5 translate-y-[-50%] w-[88.667px]">
        <p className="leading-[28px]">Contact Us</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute left-0 size-[18px] top-[3px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame14} />
    </div>
  );
}

function Span40() {
  return (
    <div className="absolute h-6 left-[26px] top-0 w-[103.646px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-blue-200 top-3 translate-y-[-50%] w-[103.646px]">
        <p className="leading-[24px]">0953 916 4621</p>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="absolute h-6 left-0 top-0 w-[284.167px]" data-name="Container">
      <Frame24 />
      <Span40 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute left-0 size-[18px] top-[3px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame15} />
    </div>
  );
}

function Span41() {
  return (
    <div className="absolute h-6 left-[26px] top-0 w-[180.552px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21.334px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-blue-200 top-3 translate-y-[-50%] w-[180.552px]">
        <p className="leading-[24px]">info@wallstreetsport.com</p>
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="absolute h-6 left-0 top-9 w-[284.167px]" data-name="Container">
      <Frame25 />
      <Span41 />
    </div>
  );
}

function Container173() {
  return (
    <div className="absolute h-[60px] left-0 top-11 w-[284.167px]" data-name="Container">
      <Container171 />
      <Container172 />
    </div>
  );
}

function Container174() {
  return (
    <div className="absolute h-[164px] left-[948.5px] top-0 w-[284.167px]" data-name="Container">
      <Heading22 />
      <Container173 />
    </div>
  );
}

function Container175() {
  return (
    <div className="absolute h-[164px] left-4 top-0 w-[1232.67px]" data-name="Container">
      <Container160 />
      <Container166 />
      <Container170 />
      <Container174 />
    </div>
  );
}

function Container176() {
  return (
    <div className="absolute h-5 left-0 top-[24.67px] w-[1232.67px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[18.667px] justify-center leading-[0] left-[616.33px] not-italic text-[11.9px] text-blue-300 text-center top-2.5 translate-x-[-50%] translate-y-[-50%] w-[277.75px]">
        <p className="leading-[20px]">© 2025 WallStreet Sport. All Rights Reserved.</p>
      </div>
    </div>
  );
}

function Container177() {
  return (
    <div className="absolute h-[44.667px] left-4 top-[212px] w-[1232.67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-0 border-blue-800 border-solid inset-0 pointer-events-none" />
      <Container176 />
    </div>
  );
}

function Container178() {
  return (
    <div className="absolute h-[256.667px] left-0 top-12 w-[1264.67px]" data-name="Container">
      <Container175 />
      <Container177 />
    </div>
  );
}

function Container179() {
  return (
    <div className="absolute bg-blue-900 h-[328.667px] left-0 top-[4046.67px] w-[1264.67px]" data-name="Container">
      <Container178 />
    </div>
  );
}

function Container180() {
  return (
    <div className="absolute bg-gray-50 h-[4375.33px] left-0 top-0 w-[1264.67px]" data-name="Container">
      <Container3 />
      <Container156 />
      <Container179 />
    </div>
  );
}

function Container181() {
  return (
    <div className="absolute h-[4375.33px] left-0 top-0 w-[1264.67px]" data-name="Container">
      <Container180 />
    </div>
  );
}

export default function Container182() {
  return (
    <div className="bg-white relative size-full" data-name="Container">
      <Container181 />
    </div>
  );
}