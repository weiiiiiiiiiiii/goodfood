import Heart from './Heart'
import AddToCart from './AddToCart'
import { useState, useRef, useEffect } from "react"
import { Link } from 'react-router';
import Detail from './Detail';
import Comments from './comment/Comments';




function FoodDetail({ food, isLoading }) {
    const [qty, setQty] = useState(1);

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    //這裡有個小盒子放著食物的價錢 一開始放的是0元 因為不知道實際的價格是多少
    const [selectedPrice, setSelectedPrice] = useState(0);

    //useEffect 當某些事情發生時 我就要開始一些動作囉
    // -->資料讀取好了我就要開始做事囉
    useEffect(() => {

        //假如資料跑好了而且食物有價格
        if (!isLoading && food?.price) {

            //把資料放進的小盒子裡面囉
            //Number 以防資料是字串 先轉成數字
            setSelectedPrice(Number(food.price));
        }

        //只要isLoading或food有改變 剛剛的動作就再重新一次
    }, [isLoading, food]);

    const breadOptions = [
        { name: '起士堡', extra: 0 },
        { name: '馬芬堡', extra: 5 },
        { name: '丹麥吐司', extra: 10 },
        { name: '貝果', extra: 25 }
    ];

    // 好食pasta的價格更改
    const pastaOptions = [
        { name: '+培根 $35', extra: 35 },
        { name: '+起士 $40', extra: 40 },
        { name: '+鮪魚 $45', extra: 45 },
        { name: '+燒肉 $45', extra: 45 },
        { name: '+香腸 $55', extra: 55 },
        { name: '+雞腿 $60', extra: 60 }
    ];


    // 讓品項名字根據按鈕做更動
    const [selectedOption, setSelectedOption] = useState('');

    // 留言顯示與否
    const [showComments, setShowComments] = useState(false);

    // 點擊按鈕自動滑動到留言區
    const commentsRefDesktop = useRef(null);
    const commentsRefMobile = useRef(null);

    useEffect(() => {
        if (showComments) {
            // 根據目前是 desktop 還是 mobile 來判斷該 scroll 哪個區塊
            const isMobile = window.innerWidth < 768;
            const targetRef = isMobile ? commentsRefMobile : commentsRefDesktop;

            if (targetRef.current) {
                targetRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [showComments]);

    return (
        <>
            {isLoading ? (
                <div className="flex justify-center mt-[20vh]">
                    <span className="loading loading-spinner loading-xl"></span>
                </div>
            )
                : (
                    <>
                        {/* 電腦螢幕*/}
                        <Link to="/Product" className='hidden md:flex text-[1rem] border h-auto p-3 absolute left-10 rounded-xl top-30 hover:bg-red-100'>↩回前頁</Link>

                        <div className="hidden md:flex md:flex-col">
                            <div className="w-3/5 mx-auto flex flex-col justify-center items-center gap-10 bg-[#F9E1E1] text-black  mt-10 mb-[7rem] py-5 rounded-3xl">
                                <img
                                    src={food.pic}
                                    alt=""
                                    className="w-1/4 mt-15" />
                                <div className="w-full px-4 mb-0">
                                    <div className="flex justify-start items-center gap-[2rem] mx-[3rem]">
                                        <Heart />
                                        <button
                                            onClick={() => setShowComments(prev => !prev)}
                                            className="border border-black border-[2px] rounded-2xl px-[1rem] py-[0.1rem] text-[1.5rem] text-black transition-all duration-400 hover:bg-red-300 hover:border-none hover:text-white cursor-pointer group-hover:scale-105"> Comments </button>
                                    </div>
                                </div>


                                <div className="flex w-full">
                                    <div className="w-3/4 px-4 flex justify-start -mt-3 text-left pl-0 pl-[4rem] items-center ">
                                        <h3 className="w-auto text-[2rem] font-semibold">
                                            {food.name}
                                        </h3>
                                        <h4 className='text-[2rem] font-semibold'>
                                            {selectedOption ? ` -  ${selectedOption}` : ''}
                                        </h4>
                                    </div>
                                    {/* 價格根據select到的價格做變化 */}
                                    <div className="w-1/4 px-4">
                                        <p className="pr-[4rem] text-right text-[#631616] font-md text-[1.2rem]"> ${selectedPrice} NTD</p>
                                    </div>
                                </div>

                                {/* 元氣好食選麵包、加購的按鈕 */}
                                {food.category === "元氣好食" && (
                                    <div className="flex gap-2 mt-2">
                                        {breadOptions.map(option => (
                                            <button
                                                key={option.name}
                                                className={`px-3 py-1 border rounded ${selectedOption === option.name ? 'bg-red-300 text-white' : 'bg-white hover:bg-red-200'
                                                    }`}
                                                onClick={() => {
                                                    if (selectedOption === option.name) {
                                                        // 取消選擇 → 還原價格與名稱
                                                        setSelectedOption('');
                                                        setSelectedPrice(Number(food.price));
                                                    } else {
                                                        // 選擇新的
                                                        setSelectedOption(option.name);
                                                        setSelectedPrice(Number(food.price) + option.extra);
                                                    }
                                                }}
                                            >
                                                {option.name}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {food.category?.toLowerCase() === "好食pasta".toLowerCase() && (
                                    <div className="flex gap-2 mt-2">
                                        {pastaOptions.map(option => (
                                            <button
                                                key={option.name}
                                                className={`px-3 py-1 border rounded ${selectedOption === option.name ? 'bg-red-300 text-white' : 'bg-white hover:bg-red-200'
                                                    }`}
                                                onClick={() => {
                                                    if (selectedOption === option.name) {
                                                        // 取消選擇 → 還原價格與名稱
                                                        setSelectedOption('');
                                                        setSelectedPrice(Number(food.price));
                                                    } else {
                                                        // 選擇新的
                                                        setSelectedOption(option.name);
                                                        setSelectedPrice(Number(food.price) + option.extra);
                                                    }
                                                }}
                                            >
                                                {option.name}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                <div className="w-full px-4 flex justify-start items-center -mt-3">
                                    <p className="w-[30rem] mx-[3rem] text-[1.3rem] text-left">{food.information}</p>
                                    <button
                                        onClick={toggleModal}
                                        className="border h-[2.8rem] rounded-sm px-[0.7rem] text-[1rem] -ml-[1.5rem] bg-[#D9D9D9] text-[#424242] border-[#424242] transition-all duration-400 hover:bg-gray-300 hover:border-none hover:text-white cursor-pointer"
                                    >
                                        詳細資訊
                                    </button>
                                    <Detail
                                        isOpen={isOpen}
                                        toggleModal={toggleModal}
                                        detail={food.detail}
                                    />
                                </div>

                                <div className="w-full px-[4rem] -mt-3 ">
                                    <textarea
                                        placeholder="備註:"
                                        className="w-full  p-3 rounded-lg bg-[#D9D9D9] text-[1rem] resize-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                                        rows="4"
                                    >
                                    </textarea>
                                </div>

                                <div className="w-full flex justify-between items-center">
                                    <div className=" w-full text-left pl-[4rem] -mt-[2rem] translate-y-[5px]">
                                        <span className="font-bold"> 數量: </span>
                                        <select
                                            className="select select-bordered w-20 bg-gray-300"
                                            value={qty}
                                            onChange={event => setQty(Number(event.target.value))}
                                        >
                                            {[...Array(10).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}


                                        </select>
                                    </div>

                                    {/* 總價根據select到的價格做變化 */}
                                    <div className="mb-[3rem] flex flex-col items-center justify-between pr-8 gap-2 pr-[0.5rem] text-[#631616]">
                                        <p className="w-full text-right px-[3.8rem] text-[1.2rem]">
                                            <span className="font-bold">總價</span>:  {selectedPrice * qty}
                                        </p>
                                        <AddToCart
                                            food={{
                                                ...food,
                                                price: selectedPrice,
                                                name: selectedOption ? `${food.name} - ${selectedOption}` : food.name
                                            }}
                                            qty={qty}
                                        />
                                    </div>

                                </div>

                            </div>

                            {/* 留言區 */}
                            {showComments && (
                                <div ref={commentsRefDesktop} className='px-[8rem] lg:px-[13rem] bg-[#f6e1e1]/45 py-10'>
                                    <h1 className='text-center text-3xl mb-13'>顧客評價</h1>
                                    <hr className='text-[#EAC7C7] border-3 mb-10 rounded' />
                                    <Comments />
                                </div>
                            )}



                        </div>


                        {/* 手機螢幕*/}
                        <Link to="/Product" className='md:hidden text-[1rem] border h-auto p-2 absolute left-5 rounded-xl top-25 hover:bg-red-100'>↩</Link>

                        <div className="md:hidden">
                            <div className=" mx-[4rem] pr-[1rem] flex flex-col justify-center items-center gap-10 bg-[#F9E1E1] text-black  mt-10 mb-[10rem] py-5 rounded-3xl">
                                <img
                                    src={food.pic}
                                    alt=""
                                    className="w-1/3 mt-15" />

                                <div className="w-full px-4 mb-0">
                                    <div className="flex justify-start items-center gap-[1.5rem] mx-[2.5rem]">
                                        <Heart />
                                        <button className="border border-black border-[2px] rounded-2xl px-[1rem] py-[0.1rem] text-[0.9rem] text-black transition-all duration-400 hover:bg-red-300 hover:border-none hover:text-white cursor-pointer group-hover:scale-105"> Comments </button>
                                    </div>
                                </div>

                                <div className="flex w-full justify-between">
                                    <div className="w-full pr-10 flex justify-start -mt-3 text-left pl-[3rem] mr-0 -ml-[0.5rem]">
                                        <h3 className=" w-auto text-[1.4rem] font-semibold">{food.name}</h3>
                                        <h4 className='text-[1.4rem] font-semibold text-right'>
                                            {selectedOption ? ` -  ${selectedOption}` : ''}
                                        </h4>
                                    </div>
                                    <div className="w-[5.5rem] px-3 -ml-[1rem] ">
                                        <p className="translate-y-[-5px] text-right text-[#631616] font-md text-[1rem]"> ${selectedPrice} NTD</p>
                                    </div>
                                </div>

                                {/* 元氣好食選麵包的按鈕 */}
                                {food.category === "元氣好食" && (
                                    <div className="flex gap-2 ml-4">
                                        {breadOptions.map(option => (
                                            <button
                                                key={option.name}
                                                className={`text-[1rem] px-3 py-1 border rounded ${selectedOption === option.name ? 'bg-red-300 text-white' : 'bg-white hover:bg-red-200'
                                                    }`}
                                                onClick={() => {
                                                    if (selectedOption === option.name) {
                                                        // 取消選擇 → 還原價格與名稱
                                                        setSelectedOption('');
                                                        setSelectedPrice(Number(food.price));
                                                    } else {
                                                        // 選擇新的
                                                        setSelectedOption(option.name);
                                                        setSelectedPrice(Number(food.price) + option.extra);
                                                    }
                                                }}
                                            >
                                                {option.name}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {food.category?.toLowerCase() === "好食pasta".toLowerCase() && (
                                    <div className="ml-4 grid grid-cols-3 grid-rows-2 gap-2 justify-center">
                                        {pastaOptions.map(option => (
                                            <button
                                                key={option.name}
                                                className={`text-[1rem] px-3 py-1 border rounded ${selectedOption === option.name ? 'bg-red-300 text-white' : 'bg-white hover:bg-red-200'
                                                    }`}
                                                onClick={() => {
                                                    if (selectedOption === option.name) {
                                                        // 取消選擇 → 還原價格與名稱
                                                        setSelectedOption('');
                                                        setSelectedPrice(Number(food.price));
                                                    } else {
                                                        // 選擇新的
                                                        setSelectedOption(option.name);
                                                        setSelectedPrice(Number(food.price) + option.extra);
                                                    }
                                                }}
                                            >
                                                {option.name}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                <div className="w-full px-4 flex justify-between items-end -mt-3">
                                    <p className="mx-[2rem] text-[1.1rem] w-[8rem]">{food.information}</p>
                                    <button
                                        onClick={toggleModal}
                                        className="h-[3rem] border w-[4rem] rounded-sm px-[0.7rem] text-[0.8rem] mr-[0.9rem] bg-[#D9D9D9] text-[#424242] border-[#424242] transition-all duration-400 hover:bg-gray-300 hover:border-none hover:text-white cursor-pointer"
                                    >
                                        詳細資訊
                                    </button>
                                    <Detail
                                        isOpen={isOpen}
                                        toggleModal={toggleModal}
                                        detail={food.detail}
                                    />
                                </div>

                                <div className="w-[115%] px-[4rem] -mt-3 ">
                                    <textarea
                                        placeholder="備註:"
                                        className="w-full ml-[1rem] p-3 rounded-lg bg-[#D9D9D9] text-[1rem] resize-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                                        rows="4"
                                    >
                                    </textarea>
                                </div>
                                <div className="w-full flex justify-between items-center">
                                    <div className=" w-full text-left pl-[4rem] -mt-[2rem] translate-y-[10px]">
                                        <span className="font-bold "> 數量: </span>
                                        <select
                                            className="select select-bordered w-15 bg-gray-300"
                                            value={qty}
                                            onChange={event => setQty(Number(event.target.value))}
                                        >
                                            {[...Array(10).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}


                                        </select>
                                    </div>
                                    <div className="mb-[3rem] flex flex-col pr-8 gap-2 pr-[0.5rem] text-[#631616] mt-[0.7rem]">
                                        <p className="w-[8rem] text-right pr-0 text-[1rem]">
                                            <span className="font-bold">總價</span>:  {selectedPrice * qty}
                                        </p>
                                        <AddToCart
                                            food={{
                                                ...food,
                                                price: selectedPrice,
                                                name: selectedOption ? `${food.name} - ${selectedOption}` : food.name
                                            }}
                                            qty={qty}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* 留言區 */}
                            {showComments && (
                                <div ref={commentsRefMobile} className='px-[1rem] bg-[#f6e1e1]/45 py-10'>
                                    <h1 className='text-center text-2xl mb-10'>顧客評價</h1>
                                    <hr className='text-[#EAC7C7] border-3 mb-10 rounded' />
                                    <Comments />
                                </div>
                            )}

                        </div>
                    </>
                )
            }
        </>
    );
}

export default FoodDetail;

