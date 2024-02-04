import React from 'react';
import {LocationConstants, VoucherTypeContants} from '../../../utils/constant';
import Select, {GroupBase} from 'react-select';
import {InputWrapper, Input, Label, VoucherImage} from './styles';

const ModalContent = ({data}: any) => {
  const {modalInputData, setModalInputData, imagePreview, setImagePreview} =
    data;

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
  return (
    <>
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
        {modalInputData.Voucher_Type === 'GTN Number' ? (
          <>
            <Label>Location: </Label>
            <Select
              defaultValue={modalInputData.Location}
              onChange={handleOnChange}
              isSearchable={false}
              options={LocationConstants as unknown as GroupBase<string>[]}
              className="select-voucher"
            />
          </>
        ) : (
          <>
            <Label>Amount: </Label>
            <Input
              type="number"
              name="Amount"
              value={modalInputData.Amount}
              onChange={handleOnChange}
            />
          </>
        )}
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
    </>
  );
};

export default ModalContent;
