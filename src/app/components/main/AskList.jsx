"use client";

import React, { useEffect, useState } from "react";
import PrivacyNoticeModal from "./PrivacyNoticeModal";

export default function AskList() {
  const [formData, setFormData] = useState({
    name: "",
    phone1: "010",
    phone2: "",
    phone3: "",
    companyName: "",
    businessType: "",
    address: "",
    confirmation: "",
    agreement: false,
  });

  const [showPhoneDropdown, setShowPhoneDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const phonePrefix = ["010", "011", "016", "017", "018", "019"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    if (value.match(/^[0-9]*$/) || value === "") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    }
  };

  const handlePrefixSelect = (prefix) => {
    setFormData((prev) => ({
      ...prev,
      phone1: prefix,
    }));
    setShowPhoneDropdown(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요";
    }

    if (!formData.phone2 || !formData.phone3) {
      newErrors.phone = "연락처를 완성해주세요";
    } else if (formData.phone2.length < 3 || formData.phone3.length < 4) {
      newErrors.phone = "연락처 형식이 올바르지 않습니다";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "회사명을 입력해주세요";
    }

    if (!formData.businessType.trim()) {
      newErrors.businessType = "업종을 입력해주세요";
    }

    if (!formData.address.trim()) {
      newErrors.address = "사업장 주소를 입력해주세요";
    }

    if (!formData.confirmation) {
      newErrors.confirmation = "확인 여부를 선택해주세요";
    }

    if (!formData.agreement) {
      newErrors.agreement = "개인정보 수집·이용에 동의해주세요";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitFundingForm = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // 여기에 실제 제출 로직 추가
      alert(
        "상담신청이 완료되었습니다. 담당자가 빠른시간내 상담드리도록 하겠습니다."
      );
    }
  };

  // const privacyNoticeModalHandler = () => {
  //   setIsOpen(true);
  // };

  return (
    <div className="max-w-4xl p-6 flex justify-center items-center flex-col gap-6">
      <form className="space-y-6" onSubmit={submitFundingForm}>
        {/* Name Field */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            이름
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="이름을 입력해주세요"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Phone Number Fields */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">
            연락처
          </label>
          <div className="flex gap-3 items-center">
            <div className="relative">
              <input
                type="text"
                name="phone1"
                value={formData.phone1}
                onClick={() => setShowPhoneDropdown(!showPhoneDropdown)}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm cursor-pointer bg-white"
              />
              {showPhoneDropdown && (
                <div className="absolute top-full left-0 w-24 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {phonePrefix.map((prefix) => (
                    <div
                      key={prefix}
                      onClick={() => handlePrefixSelect(prefix)}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {prefix}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <span className="text-gray-500">-</span>
            <input
              type="text"
              name="phone2"
              value={formData.phone2}
              onChange={handlePhoneChange}
              className={`w-full px-3 py-2 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black`}
              maxLength={4}
            />
            <span className="text-gray-500">-</span>
            <input
              type="text"
              name="phone3"
              value={formData.phone3}
              onChange={handlePhoneChange}
              className={`w-full px-3 py-2 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black`}
              maxLength={4}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Company Name Field */}
        <div className="space-y-2">
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-600"
          >
            회사명
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.companyName ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black`}
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
          )}
        </div>

        {/* Business Type Field */}
        <div className="space-y-2">
          <label
            htmlFor="businessType"
            className="block text-sm font-medium text-gray-600"
          >
            업종
            <span className="text-sm text-gray-500">
              {" "}
              (제조업, 정보통신업 외 신청은 불가 합니다.)
            </span>
          </label>
          <input
            type="text"
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.businessType ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black`}
          />
          {errors.businessType && (
            <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>
          )}
        </div>

        {/* Business Address Field */}
        <div className="space-y-2">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-600"
          >
            사업장 주소{" "}
            <span className="text-gray-500">(예: 경기도 성남시)</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.address ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black`}
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>

        {/* Confirmation Radio Buttons */}
        <div className="space-y-3">
          <p className="text-sm text-gray-700">
            국세체납, 신용불량자, 개인회생인 경우 정책자금 신청이 불가 합니다.
            확인 하셨나요?
          </p>
          <div className="flex gap-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="yes"
                name="confirmation"
                value="yes"
                checked={formData.confirmation === "yes"}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-black"
              />
              <label htmlFor="yes" className="ml-2 text-sm text-gray-700">
                예
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="no"
                name="confirmation"
                value="no"
                checked={formData.confirmation === "no"}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-black"
              />
              <label htmlFor="no" className="ml-2 text-sm text-gray-700">
                아니요
              </label>
            </div>
          </div>
          {errors.confirmation && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmation}</p>
          )}
        </div>
      </form>

      <div className="flex flex-col justify-center items-center my-6">
        <div>
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            checked={formData.agreement}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                agreement: e.target.checked,
              }))
            }
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-black my-8"
          />
          <label htmlFor="agreement" className="ml-2 text-sm text-gray-700">
            [필수] 개인정보 수집 · 이용에 동의합니다.
          </label>
          <button
            onClick={() => setIsOpen(true)}
            className="mx-2 bg-gray-300 text-white py-0 px-1 text-sm rounded hover:bg-gray-400"
          >
            자세히보기
          </button>
          {errors.agreement && (
            <p className="text-red-500 text-sm mt-1">{errors.agreement}</p>
          )}
        </div>

        <PrivacyNoticeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

        <button
          onClick={submitFundingForm}
          className="w-full mx-2 bg-gray-400 text-white py-3 px-4 text-sm rounded hover:bg-gray-600"
        >
          문의하기
        </button>
      </div>
    </div>
  );
}
