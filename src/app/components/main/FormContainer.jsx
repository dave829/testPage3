"use client";
import React, { useEffect, useState } from "react";
import ApplyList from "./ApplyList";
import AskList from "./AskList";

export default function FormContainer() {
  const [formData, setFormData] = useState([
    {
      name: "김**",
      phone1: "010",
      phone2: "2321",
      phone3: "",
      companyName: "",
      businessType: "",
      address: "",
      confirmation: "",
      agreement: false,
    },
    {
      name: "당근15님",
      phone1: "010",
      phone2: "2235",
      phone3: "",
      companyName: "",
      businessType: "",
      address: "",
      confirmation: "",
      agreement: false,
    },
  ]);

  return (
    <>
      <section className="w-full max-w-4xl">
        <ApplyList formData={formData} />
      </section>
      <section className="w-full max-w-4xl">
        <AskList setFormData={setFormData} />
      </section>
    </>
  );
}
