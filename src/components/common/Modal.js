import { IoMdClose } from "react-icons/io";

const Modal = ({ title, children, isOpen, closeFn }) => {
  return (
    isOpen && (
      <div className=" fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[#f9ebd982] p-5">
        <div className=" min:w-2/4 min:h-2/4 bg-white border-2 border-orange-200 p-4">
          <div className=" border-b-2 border-orange-100 w-full py text-5xl text-orange-400 flex justify-between items-center">
            <span className=" text-2xl font-semibold">{title}</span>
            <IoMdClose
              onClick={closeFn}
              className=" cursor-pointer hover:text-orange-500 duration-200 transition-colors"
            />
          </div>
          <div>{children}</div>
        </div>
      </div>
    )
  );
};

export default Modal;
