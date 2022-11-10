import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  title?: string;
  name: string;
  kind?: "text" | "phone" | "email";
}

export default function Input({ title, name, kind = "text" }: InputProps) {
  return (
    <label htmlFor="" className="my-2">
      <p>{title}</p>
      <input
        id={name}
        type={kind}
        className="border-2 w-full rounded px-3 py-2 mt-2 focus:outline-teal-600"
      ></input>
    </label>
  );
}
