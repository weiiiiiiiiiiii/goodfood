function Radio() {
    return (
        <div className="w-full px-4 flex justify-start text-[1.3rem] ">
            <label className="flex items-center gap-5 ml-[3rem]">
                <input type="radio" name="option" value="A"
                    className="appearance-none w-[2rem] h-[2rem] border-2 border-black rounded-md bg-[#D9D9D9] "
                />
                起士堡
            </label>
            <label className="flex items-center gap-5 ml-[3rem]">
                <input type="radio" name="option" value="B"
                    className="appearance-none w-[2rem] h-[2rem] border-2 border-black rounded-md bg-[#D9D9D9] "
                />
                馬芬堡
            </label>
            <label className="flex items-center gap-5 ml-[3rem]">
                <input type="radio" name="option" value="C"
                    className="appearance-none w-[2rem] h-[2rem] border-2 border-black rounded-md bg-[#D9D9D9] "
                />
                丹麥吐司
            </label>
            <label className="flex items-center gap-5 ml-[3rem]">
                <input type="radio" name="option" value="D"
                    className="appearance-none w-[2rem] h-[2rem] border-2 border-black rounded-md bg-[#D9D9D9] "
                />
                貝果
            </label>
        </div>

    )

}

export default Radio;