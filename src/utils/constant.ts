import {GroupBase} from 'react-select';

export const BASE_URL: string = 'http://localhost:5000';
export const IMAGE_BASE_URL: string = `${BASE_URL}/uploads`;

interface VoucherTypeProps {
  value: string | GroupBase<string>;
  name: string | GroupBase<string>;
  label: string | GroupBase<string>;
}

export const VoucherTypeContants: VoucherTypeProps[] = [
  {value: 'Invoices', name: 'Voucher_Type', label: 'Invoices'},
  {value: 'Delivery', name: 'Voucher_Type', label: 'Delivery'},
  {value: 'GTN_Number', name: 'Voucher_Type', label: 'GTN Number'},
  {value: 'Purchase', name: 'Voucher_Type', label: 'Purchase'},
  {value: 'Sale', name: 'Voucher_Type', label: 'Sale'},
  {value: 'Payment', name: 'Voucher_Type', label: 'Payment'},
  {value: 'Receipt', name: 'Voucher_Type', label: 'Receipt'},
  {value: 'Daily sheet', name: 'Voucher_Type', label: 'Daily sheet'},
  {value: 'No taken', name: 'Voucher_Type', label: 'No taken'},
  {value: 'URA paye', name: 'Voucher_Type', label: 'URA paye'},
  {value: 'URA VAT', name: 'Voucher_Type', label: 'URA VAT'},
  {value: 'URA WHT', name: 'Voucher_Type', label: 'URA WHT'},
  {value: 'URA INCOME TAX', name: 'Voucher_Type', label: 'URA INCOME TAX'},
  {value: 'Immigration', name: 'Voucher_Type', label: 'Immigration'},
  {value: 'Land File', name: 'Voucher_Type', label: 'Land File'},
  {value: 'NSSF', name: 'Voucher_Type', label: 'NSSF'},
  {value: 'Insurance', name: 'Voucher_Type', label: 'Insurance'},
  {value: 'Vehicle log book', name: 'Voucher_Type', label: 'Vehicle log book'},
  {value: 'Agreement', name: 'Voucher_Type', label: 'Agreement'},
  {value: 'Item picture', name: 'Voucher_Type', label: 'Item picture'},
  {
    value: 'Staff impointment letter',
    name: 'Voucher_Type',
    label: 'Staff impointment letter',
  },
  {
    value: 'City council trading licence',
    name: 'Voucher_Type',
    label: 'City council trading licence',
  },
  {
    value: 'Bank_Deposite_Slip',
    name: 'Voucher_Type',
    label: 'Bank Deposite Slip',
  },
  {
    value: 'Add gate one sheet',
    name: 'Voucher_Type',
    label: 'Add gate one sheet',
  },
  {
    value: 'Add gate 2 sheets',
    name: 'Voucher_Type',
    label: 'Add gate 2 sheets',
  },
  {
    value: 'Add general documents',
    name: 'Voucher_Type',
    label: 'Add general documents',
  },
  {value: 'Bank statements', name: 'Voucher_Type', label: 'Bank statements'},
];

interface LocationProps {
  value: string | GroupBase<string>;
  name: string | GroupBase<string>;
  label: string | GroupBase<string>;
}

export const LocationConstants: LocationProps[] = [
  {value: 'Kampala store', name: 'Location', label: 'Kampala store'},
  {value: 'Aura shop', name: 'Location', label: 'Aura shop'},
  {value: 'Site warehouse', name: 'Location', label: 'Site warehouse'},
  {value: 'Kaboko store', name: 'Location', label: 'Kaboko store'},
];
