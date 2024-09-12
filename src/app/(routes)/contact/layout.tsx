import { ReactNode } from "react";

export const metadata= {
  title: "Contact Form",
  description: "Contact Form Layout",
};

interface Props {
  children: ReactNode,
  modal: ReactNode,
}

export default function ContactLayout({
  children,
  modal
}: Props) {
  return (
    <>
    {children}
    {modal}
    </>
  );
}
