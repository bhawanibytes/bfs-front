import { ReactComponent as Magnifier } from "../Icons/Magnifier.svg";

const Searchbar = () => {
  return (
    <div className=' border-[0.025rem] border-[#999999] min-h-10 flex justify-between items-center  min-w-80 rounded-[0.625rem]'>
      <input
        type='text'
        placeholder='Search for fruits & vegetables'
        className='placeholder-left-1 min-w-52 font-inria text-sm font-normal'
      />
      <Magnifier className='mr-3' />
    </div>
  );
};

export default Searchbar;
