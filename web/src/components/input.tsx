import { InputRootProps } from "../interface/inputRootProps";
import { InputIconProps } from "../interface/inputIconProps";
import { InputFieldProps } from "@/interface/inputFieldProps";


export function InputRoot({error, ...props}:InputRootProps) {
  return (
    <div
      data-error={error}
      className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger" {...props} />
  );
}


export function InputIcon({error, ...props}:InputIconProps) {
  return (
    <span className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger" {...props}/>
  );
}

export function InputField({error, ...props}:InputFieldProps) {
  return  <input className="flex-1 outline-0 placeholder-gray-100" {...props} />
}