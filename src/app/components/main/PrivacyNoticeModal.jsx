import React from "react";
import { X } from "lucide-react";

const PrivacyNoticeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-4xl max-h-[90vh] mx-4 bg-white rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5">
        {/* Header with shadow */}
        <div className="flex items-center justify-between p-4 border-b ">
          <h2 className="text-xl font-bold w-full text-center">
            개인정보취급방침
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-8rem)]">
          <div className="space-y-6">
            <section className="hover:shadow-md p-4 rounded-lg transition-shadow duration-200">
              <p className="text-gray-700 mb-4">
                '비전0305' (이하 "회사")는 고객의 개인정보를 소중히 다루고
                있으며, 『정보통신망이용 촉진 및 정보보호 등에 관한 법률』, 상의
                개인정보보호 규정 및 정보통신부가 제정한 『개인정보보호 및
                취급방침』을 준수하고 있습니다.
              </p>
            </section>

            <section className="hover:shadow-md p-4 rounded-lg transition-shadow duration-200">
              <h3 className="text-lg font-semibold mb-2">
                1. 개인정보 수집·이용·제공 등에 대한 동의
              </h3>
              <p className="text-gray-700">
                회사는 고객께서 회사가 제공하는 이벤트 참여시 이벤트 페이지에
                개인정보취급방침 내용에 대하여 동의 여부를 선택할 수 있는 절차를
                마련하였으며, 취하가 제공한 정보는 개인정보취급방침에 명시된
                내용 이외의 목적으로는 사용되지 아니합니다.
              </p>
            </section>

            <section className="hover:shadow-md p-4 rounded-lg transition-shadow duration-200">
              <h3 className="text-lg font-semibold mb-2">
                2. 수집하는 개인정보의 범위 및 수집방법
              </h3>
              <p className="text-gray-700">
                회사에서는 귀하의 상담신청 및 서비스신청 등을 위한 필수적인
                정보를 입력 받고 있습니다.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                <li>이벤트 참여시 받는 필수 정보 : 성함, 연락처 등</li>
                <li>
                  서비스 이용과정이나 처리 과정에서 자동으로 생성되어 수집될 수
                  있는 정보 : IP Address, 참여일시, 유입경로(참여매체) 등
                </li>
              </ul>
            </section>

            <section className="hover:shadow-md p-4 rounded-lg transition-shadow duration-200">
              <h3 className="text-lg font-semibold mb-2">
                3. 개인정보의 수집 및 이용목적
              </h3>
              <p className="text-gray-700">
                이벤트 참여시 입력하신 정보는 이벤트 참여확인, 당첨자 발표 및
                안내, 고지사항 전달, 불편사항처리 등을 위한 원활한 의사소통
                경로의 확보, 이벤트 경품 제공, 개인별 맞춤 서비스 제공, 새로운
                이벤트 안내(이메일, 전화, MMS 등) 아래 명기한 제3자에게 제공되어
                상품안내를 위한 마케팅 자료(전화, 이메일, MMS 등)로 활용 됩니다.
              </p>
            </section>

            <section className="hover:shadow-md p-4 rounded-lg transition-shadow duration-200">
              <h3 className="text-lg font-semibold mb-2">
                4. 개인정보의 보유 및 이용기간
              </h3>
              <p className="text-gray-700">
                귀하의 동의를 받고 수집한 개인정보는 이벤트가 진행되는 동안
                당첨자 발표 및 안내, 경품 배송 완료와 이메일/문자 정구서 전환 및
                아래 명기한 제3자 제공 및 그 활용에 대한 이의제기 등을 위하여
                이용할 수 있습니다.
              </p>
              <p className="text-gray-700 mt-2">
                개인정보를 수집 동의일로부터 3년간 보유 및 활용하게 되고, 위
                보유기간의 경과 즉시 기록을 재생할 수 없는 기술적 방법을
                사용하여 동 개인정보를 파기합니다. 단, 다음의 정보에 대해서는
                아래의 이유로 명시한 기간 동안 보존합니다.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyNoticeModal;
