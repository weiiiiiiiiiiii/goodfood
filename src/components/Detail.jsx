export default function Detail({ isOpen, toggleModal, detail }) {

    const handleCancel = () => toggleModal(!isOpen);

    return (
        <>
            {isOpen && (
                <div className="modal modal-open ">
                    <div className="modal-box max-w-md bg-orange-50 bg-gray-100 h-[8rem] grid grid-cols-1 pt-0">

                        {/*close*/}
                        <div className="modal-action ">
                            <button onClick={handleCancel} className="bg-gray-200 btn btn-sm font-thin hover:bg-gray-400">X</button>
                        </div>

                        <h3 className="font-black text-black text-base md:text-xl">
                            {detail}
                        </h3>

                        


                    </div>
                </div>
            )}
        </>
    )


}

