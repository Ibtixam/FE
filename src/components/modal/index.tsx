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
} from './styles';
import Select, {GroupBase} from 'react-select';
import ReactDOM from 'react-dom';
import React from 'react';
import {swalAlert} from '../../utils/helpers';
import {SharedApi} from '../../libs/api/sharedapi';
import {VoucherTypeContants} from '../../utils/constant';

interface ModalProps {
  visible?: boolean;
  setProducts?: React.Dispatch<React.SetStateAction<any | undefined>>;
  props?: any;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface ModalInputProps {
  Voucher_Type: string;
  Voucher_Number: string;
  Amount: string;
  // Date: Date;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  onCancel,
  onConfirm,
  setProducts,
}) => {
  const [modalInputData, setModalInputData] = useState<ModalInputProps>({
    Voucher_Type: '',
    Voucher_Number: '',
    Amount: '',
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    if (!e) return;
    const target = e.label ? e : e.target;
    const {value, name} = target;
    setModalInputData((prev: any) => ({...prev, [name]: value}));
  };

  const handleSave = async () => {
    const res = await SharedApi?.addItem(modalInputData);
    if (setProducts) {
      setProducts((prev: any) => [...prev, {...modalInputData}]);
    }
    setModalInputData({
      Voucher_Type: '',
      Voucher_Number: '',
      Amount: '',
      // Date: new Date(),
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
            <Title>Add Product</Title>
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
                name="Voucher_Number"
                value={modalInputData.Voucher_Number}
                onChange={handleOnChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Amount: </Label>
              <Input
                name="Amount"
                value={modalInputData.Amount}
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
