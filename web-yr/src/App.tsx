import React from 'react';
import './assets/common.css';
import ArrowDown from './assets/images/arrowDown.png';
import BlueLine2 from './assets/images/blueLine2.png';
import Brush from './assets/images/brush.png';
import CircleBlue from './assets/images/circleBlue.png';
import Hat from './assets/images/hat.png';
import NoteBook from './assets/images/notebook.png';
import Phone from './assets/images/phone.png';
import Triangle from './assets/images/triangle.png';
import Tree from './assets/images/tree.png';
import WhiteLine2 from './assets/images/whiteLine2.png';
import WhiteLine from './assets/images/whiteLine.png';
import Background from './assets/images/background.png';
/*import CircleOrange from './assets/images/circleOrange.png';
import Emoticon from './assets/images/emoticon.png';
import BlueLine from './assets/images/blueLine.png';
import ArrowFront from './assets/images/arrowFront.png';*/


const App: React.FC = () => {
    return (
        <main>
            <header className={'fixed right-0 px-[200px] py-10 flex font-light text-xl z-50 text-c-ivory'}>
                <div
                    className={'w-[100px] text-center hover:border-b-2 hover:border-b-c-ivory cursor-pointer pb-2 mx-3'}>About
                </div>
                <div
                    className={'w-[100px] text-center hover:border-b-2 hover:border-b-c-ivory cursor-pointer pb-2 mx-3'}>Works
                </div>
                <div
                    className={'w-[100px] text-center hover:border-b-2 hover:border-b-c-ivory cursor-pointer pb-2 mx-3'}>Contact
                </div>
            </header>
            {/*Section 1*/}
            <div className={'relative w-full bg-black h-[2300px]'}>
                <div
                    className={'text-c-ivory font-black text-8xl text-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'}>
                    <div className={'mb-8'}>더 나은 디자인이</div>
                    <div className={'mb-20'}>더 나은 <span className={'bg-c-orange'}>경험</span>을 만듭니다</div>
                    <div className={'font-light text-5xl'}>Better design creates better experiences</div>
                </div>
                <div>
                    <img src={CircleBlue} alt={'파란동그라미'} width={300} className={'absolute left-[19%] top-[4%]'}/>
                    <img src={Hat} alt={'모자'} width={250} className={'absolute left-[8%] top-[20%]'}/>
                    <img src={WhiteLine2} alt={'흰색점선'} width={800} className={'absolute left-0 top-[35%]'}/>
                    <img src={Phone} alt={'휴대폰'} width={300} className={'absolute left-0 top-[45%]'}/>
                    <img src={BlueLine2} alt={'파란선'} width={500} className={'absolute right-[20%] top-[7%]'}/>
                    <img src={NoteBook} alt={'노트북'} width={300} className={'absolute right-[20%] top-[12%]'}/>
                    <img src={ArrowDown} alt={'아래화살표'} width={120} className={'absolute right-[22%] top-[35%]'}/>
                    <img src={ArrowDown} alt={'아래화살표'} width={180} className={'absolute right-[25%] top-[40%]'}/>
                    <img src={Tree} alt={'나무'} width={250} className={'absolute right-[8%] top-[46%]'}/>
                    <img src={WhiteLine} alt={'흰색점선'} width={800} className={'absolute right-0 top-[70%]'}/>
                    <img src={Brush} alt={'물감붓'} width={350} className={'absolute right-[15%] top-[65%]'}/>
                    <img src={Triangle} alt={'주황색삼각형'} width={500} className={'absolute left-[10%] top-[75%]'}/>
                </div>
            </div>
            {/*Section2*/}
            <div className={'relative w-full h-screen text-6xl font-bold text-center tracking-widest'}>
                <img src={Background} alt={'작업이미지'} className={'object-cover w-full h-full'}/>
                <div className={'absolute text-white m-auto left-0 right-0 top-[50%]'}>우리가 매일 경험하는 것들</div>
                <div className={'absolute text-white m-auto left-0 right-0 top-[50%] mt-[100px] leading-[70px]'}>화면 그
                    이상에서 우리의 경험을 형성합니다
                </div>
            </div>
            {/*Section3*/}
            <div className={'bg-c-ivory relative'}>
                <div className={'h-screen mx-auto w-[1200px] py-20'}>
                    <div className={'flex justify-between'}>
                        <div>관련이미지</div>
                        <div>
                            <div className={'mb-4 text-lg'}>사용자 경험 화면구성</div>
                            <div className={'font-medium text-5xl text-[#c1c1c1]'}>
                                <div className={'py-2'}>단순한 시각적 디자인을</div>
                                <div className={'py-2'}>넘어서</div>
                                <div className={'py-2'}>사용자의 경험을 선사합니다</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'h-screen mx-auto w-[1200px] py-20'}>
                    <div className={'flex justify-between'}>
                        <div>관련이미지</div>
                        <div>
                            <div className={'mb-4 text-lg'}>신속 정확한 표현</div>
                            <div className={'font-medium text-5xl text-[#c1c1c1]'}>
                                <div className={'py-2'}>빠르고 명확하게</div>
                                <div className={'py-2'}>의도를 파악하여</div>
                                <div className={'py-2'}>화면을 구현합니다</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'h-screen mx-auto w-[1200px] py-20'}>
                    <div className={'flex justify-between'}>
                        <div>관련이미지</div>
                        <div>
                            <div className={'mb-4 text-lg'}>효율적 문제해결</div>
                            <div className={'font-medium text-5xl text-[#c1c1c1]'}>
                                <div className={'py-2'}>복잡한 문제를</div>
                                <div className={'py-2'}>효율적으로 해결해</div>
                                <div className={'py-2'}>앞으로 나아갑니다</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Section4*/}
            <div className={'bg-black relative'}>
                <div
                    className={'h-screen mx-auto w-[1200px] py-40 text-c-orange font-semibold text-4xl leading-[52px] tracking-wide'}>
                    <div>사용자가 실제로 느끼고, 기억에 남을 경험을 만드는 것을 목표로</div>
                    <div>사용자 경험을 강화하는 요소로 작용하도록 설계해 나갑니다</div>
                </div>
            </div>
            {/*Section5*/}
            <div className={'bg-c-ivory relative'}>
                <div
                    className={'h-screen mx-auto w-[1200px] py-40 text-c-orange font-semibold text-4xl leading-[52px] tracking-wide'}>
                    <div>지금, 사용자가 느끼는 모든 순간을 경험 하세요</div>
                    <div>
                    <div className={'text-black'}>Works</div>
                        <div>화살표이미지</div>
                    </div>
                </div>
            </div>
        </main>
    );
};


export default App

