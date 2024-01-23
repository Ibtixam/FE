import {GroupBase} from 'react-select';

export const BASE_URL: string = 'http://localhost:5000';

interface VoucherTypeProps {
  value: string | GroupBase<string>;
  name: string | GroupBase<string>;
  label: string | GroupBase<string>;
}

export const VoucherTypeContants: VoucherTypeProps[] = [
  {value: 'Invoices', name: 'Voucher_Type', label: 'Invoices'},
  {value: 'Delivery', name: 'Voucher_Type', label: 'Delivery'},
  {value: 'GTN Number', name: 'Voucher_Type', label: 'GTN Number'},
  {value: 'Purchase', name: 'Voucher_Type', label: 'Purchase'},
  {value: 'Sale', name: 'Voucher_Type', label: 'Sale'},
  {value: 'Payment', name: 'Voucher_Type', label: 'Payment'},
  {value: 'Receipt', name: 'Voucher_Type', label: 'Receipt'},
  {value: 'Daily sheet', name: 'Voucher_Type', label: 'Daily sheet'},
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
