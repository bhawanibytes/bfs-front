import { ReactComponent as LocationIcon } from "../Icons/LocationIcon.svg";

const AddressBox = () => {
  return (
    <div className='min-w-[15.8125rem] min-h-[2.375rem] flex items-center'>
      <div className='pr-[0.625rem]'>
        <LocationIcon />
      </div>
      <div>
        <h3 className='font-inria font-bold text-[1rem] text-[#232323]'>
          Delivery: Tomorrow by 10 AM
        </h3>
        <p className='pt-[0.125rem] font-inria font-normal text-sm text-[#444444]'>
          Jagatpura, Jaipur 302017
        </p>
      </div>
    </div>
  );
};

export default AddressBox;
