'use client'
import React from 'react'
import Image from "next/image";
import Button from "./Button";
import Menu from "./Menu";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <main className="">
      <Button isOpen={isOpen}  setIsOpen={setIsOpen}/>
     

    </main>
  );
}
