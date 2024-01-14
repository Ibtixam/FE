import Swal from "sweetalert2";

export const swalAlert = (text: string, type: any = "success") => {
  Swal.fire({
    text,
    icon: type,
    timer: 2000,
  });
};
