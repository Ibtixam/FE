import {useState} from 'react';
import {
  ModalContainer,
  Title,
  Input,
  Label,
  InputWrapper,
  Overlay,
  ButtonWrapper,
  CancelButton,
  SaveButton,
  VoucherImage,
} from './styles';
import Select, {GroupBase} from 'react-select';
import ReactDOM from 'react-dom';
import React from 'react';
import {swalAlert} from '../../utils/helpers';
import {SharedApi} from '../../libs/api/sharedapi';
import {VoucherTypeContants} from '../../utils/constant';
import {UploadImage} from '../../assets/svgs';

interface ModalProps {
  visible?: boolean;
  setProducts?: React.Dispatch<React.SetStateAction<any | undefined>>;
  props?: any;
  title?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface ModalInputProps {
  Voucher_Type: string;
  Voucher_Number: string;
  Amount: string;
  Date: string;
  Voucher_Image: File | null;
  Voucher_Image_URL: string;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  onCancel,
  onConfirm,
  setProducts,
  title,
}) => {
  const [modalInputData, setModalInputData] = useState<ModalInputProps>({
    Voucher_Type: '',
    Voucher_Number: '',
    Amount: '',
    Date: '',
    Voucher_Image: null,
    Voucher_Image_URL: '',
  });
  const [imagePreview, setImagePreview] = useState<string>(UploadImage);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    if (!e) return;

    const target = e.label ? e : e.target;
    const {name} = target;

    if (name === 'Voucher_Image' && target.files) {
      const file = target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setModalInputData((prev: any) => ({
        ...prev,
        [name]: file,
        Voucher_Image_URL: imageUrl,
      }));
    } else {
      const {value} = target;
      setModalInputData((prev: any) => ({...prev, [name]: value}));
    }
  };

  const handleSave = async () => {
    const res = await SharedApi?.addItem(modalInputData);
    if (setProducts) {
      setProducts((prev: any) => [
        ...prev,
        {
          ...modalInputData,
          Voucher_Image: {name: modalInputData?.Voucher_Image?.name},
        },
      ]);
    }
    setModalInputData({
      Voucher_Type: '',
      Voucher_Number: '',
      Amount: '',
      Date: '',
      Voucher_Image: null,
      Voucher_Image_URL: '',
    });
    swalAlert('Product Added Successfully');
    onCancel?.();
    return res;
  };

  return (
    <>
      {visible && (
        <>
          <Overlay onClick={onCancel} />
          <ModalContainer>
            <Title>{title}</Title>
            <InputWrapper style={{justifyContent: 'center'}}>
              <Label htmlFor="Voucher_Image" className="voucher-image">
                <VoucherImage src={imagePreview} alt="upload-img" />
              </Label>
              <Input
                type="file"
                id="Voucher_Image"
                name="Voucher_Image"
                onChange={handleOnChange}
                style={{display: 'none'}}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Voucher Type: </Label>
              <Select
                defaultValue={modalInputData.Voucher_Type}
                onChange={handleOnChange}
                isSearchable={false}
                options={VoucherTypeContants as unknown as GroupBase<string>[]}
                className="select-voucher"
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Voucher Number: </Label>
              <Input
                type="number"
                name="Voucher_Number"
                value={modalInputData.Voucher_Number}
                onChange={handleOnChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Amount: </Label>
              <Input
                type="number"
                name="Amount"
                value={modalInputData.Amount}
                onChange={handleOnChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Date: </Label>
              <Input
                name="Date"
                type="Date"
                value={modalInputData.Date}
                onChange={handleOnChange}
              />
            </InputWrapper>
            <ButtonWrapper>
              <CancelButton onClick={onCancel}>Cancel</CancelButton>
              <SaveButton onClick={onConfirm || handleSave}>Save</SaveButton>
            </ButtonWrapper>
          </ModalContainer>
        </>
      )}
    </>
  );
};

const createModal: React.FC<ModalProps> = (props) => {
  const createModal: any = document.getElementById('modal');
  return ReactDOM.createPortal(<Modal {...props} />, createModal);
};

export default createModal;
