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
import ReactDOM from 'react-dom';
import React from 'react';
import {swalAlert} from '../../utils/helpers';
import {SharedApi} from '../../libs/api/sharedapi';

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
  Date: Date;
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
    Date: new Date(),
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
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
      Date: new Date(),
    });
    swalAlert('Product Successfully Added');
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
              <Input
                name="Voucher_Type"
                value={modalInputData.Voucher_Type}
                onChange={handleOnChange}
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
              {/* <Input
                name="Date"
                type="date"
                value={
                  modalInputData.Date instanceof Date
                    ? modalInputData.Date.toISOString().split("T")[0]
                    : ""
                }
                onChange={handleOnChange}
              /> */}
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
