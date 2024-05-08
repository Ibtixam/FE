import {useState} from 'react';
import {swalAlert} from '../../utils/helpers';
import {SharedApi} from '../../libs/api/dashboard.api';
import {UploadImage} from '../../assets';

interface ModalInputProps {
  Voucher_Type: string;
  Voucher_Number: string;
  Amount: string;
  Date: string;
  Location: string;
  Voucher_Image: File | null;
  Voucher_Image_URL: string;
}

const useDashboard = () => {
  const [modalInputData, setModalInputData] = useState<ModalInputProps>({
    Voucher_Type: '',
    Voucher_Number: '',
    Amount: '',
    Location: '',
    Date: '',
    Voucher_Image: null,
    Voucher_Image_URL: '',
  });
  const [voucher, setVoucher] = useState<any | undefined>([]);
  const [imagePreview, setImagePreview] = useState<string>(UploadImage);
  const [voucherVisible, setVoucherVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isVoucherFormFilled = (data: ModalInputProps): boolean => {
    const isGTNNumber = data.Voucher_Type === 'GTN Number';
    return (
      data.Voucher_Type.trim() !== '' &&
      data.Voucher_Number.trim().length >= 7 &&
      data.Date.trim() !== '' &&
      data.Voucher_Image !== null &&
      ((isGTNNumber && data.Location.trim() !== '') ||
        (!isGTNNumber && data.Amount.trim().length >= 2))
    );
  };

  const addVoucher = async () => {
    if (isVoucherFormFilled(modalInputData)) {
      const res = await SharedApi.addItem(modalInputData);
      setVoucherVisible(false);
      if (voucher) {
        setVoucher((prev: any) => [
          ...prev,
          {
            ...modalInputData,
            Voucher_Image: {name: modalInputData?.Voucher_Image?.name || ''},
            _id: res?.id,
          },
        ]);
      }
      setModalInputData({
        Voucher_Type: '',
        Voucher_Number: '',
        Amount: '',
        Location: '',
        Date: '',
        Voucher_Image: null,
        Voucher_Image_URL: '',
      });
      setImagePreview(UploadImage);
      swalAlert(res.data);
    } else {
      swalAlert('Please fill all required fields with valid values.', 'error');
    }
  };

  const searchVoucherByDate = async (searchDate: {
    startDate: string;
    endDate: string;
  }) => {
    if (searchDate.startDate && searchDate.endDate) {
      setIsLoading(true);
      const res = await SharedApi?.filterVoucher(searchDate);
      setVoucher(res);
      setIsLoading(false);
    } else {
      swalAlert('Please select both start and end Date', 'error');
    }
  };

  const getVoucherList = async (role: string) => {
    setIsLoading(true);
    let res;
    if (role === 'worker') {
      res = await SharedApi?.getItemList();
    } else if (role === 'admin') {
      res = await SharedApi?.getAllItems();
    }
    if (setVoucher && res) {
      setVoucher(res);
    }
    setIsLoading(false);
  };

  const deleteVoucher = async (selectedTableID: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setIsLoading(true);
    const res = await SharedApi.deleteItem({id: selectedTableID});
    if (res && setVoucher) {
      setVoucher((prev: any) =>
        prev.filter((voucher: any) => voucher._id !== selectedTableID)
      );
      swalAlert('Voucher Deleted Successfully');
    }
    setIsLoading(false);
  };

  return {
    addVoucher,
    searchVoucherByDate,
    getVoucherList,
    deleteVoucher,

    // States
    voucher,
    modalInputData,
    voucherVisible,
    imagePreview,
    isLoading,
    setIsLoading,

    setVoucherVisible,
    setModalInputData,
    setImagePreview,
  };
};

export default useDashboard;
