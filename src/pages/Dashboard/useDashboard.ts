import {useEffect, useRef, useState} from 'react';
import {swalAlert} from '@utils/helpers';
import {SharedApi} from '@libs/api/dashboard.api';
import {UploadImage} from '@assets';
import {useApp} from '@contexts';

interface ModalInputProps {
  Voucher_Type: string;
  Voucher_Number: string;
  Amount: string;
  Date: string;
  Location: string;
  Voucher_Image: File | null;
  Voucher_Image_URL: string;
}

interface searchDateProps {
  startDate: string;
  endDate: string;
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
  const [search, setSearch] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dateFilterVisible, setDateFilterVisible] = useState<boolean>(false);
  const [searchDate, setSearchDate] = useState<searchDateProps>({
    startDate: '',
    endDate: '',
  });
  const {setIsLoading, role} = useApp() || {};

  useEffect(() => {
    getVoucherList(role);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);

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
      setVoucherVisible(false);
      setIsLoading(true);
      const res = await SharedApi.addItem(modalInputData);
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
      setIsLoading(false);
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

  const ItemList = voucher?.filter(
    (a: any) =>
      !search ||
      (a?.Voucher_Number).toLowerCase().includes(search.toLowerCase())
  );

  const onSearch = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current?.value || '';
      setSearch(inputValue);
    }
  };

  const handleDateSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    setSearchDate((prev: any) => ({...prev, [name]: value}));
  };

  const showVoucherModal = () => {
    setVoucherVisible(true);
  };

  const hideVoucherModal = () => {
    setVoucherVisible(false);
  };

  const showDateFilterModal = () => {
    setDateFilterVisible(true);
  };

  const hideDateFilterModal = () => {
    setDateFilterVisible(false);
  };

  const onDateModalConfirm = () => {
    searchVoucherByDate(searchDate);
    if (searchDate.startDate && searchDate.endDate) {
      setDateFilterVisible(false);
    }
  };

  const onSearchChange = (e: any) => {
    if (!e.target.value) {
      setSearch(e.target.value);
    }
  };

  const modalContentStates = {
    modalInputData,
    setModalInputData,
    imagePreview,
    setImagePreview,
  };

  return {
    // API's
    addVoucher,
    searchVoucherByDate,
    getVoucherList,
    deleteVoucher,

    // Modal Functions
    showVoucherModal,
    hideVoucherModal,
    hideDateFilterModal,
    showDateFilterModal,
    onDateModalConfirm,

    // Search Functions
    ItemList,
    handleDateSearchChange,
    onSearch,
    onSearchChange,
    searchDate,

    // Modal Visible States
    dateFilterVisible,
    voucherVisible,

    // States
    voucher,
    inputRef,

    modalContentStates,
  };
};

export default useDashboard;
