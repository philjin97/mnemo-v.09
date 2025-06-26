"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ApprovalRequestPage() {
  const [loading, setLoading] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({ purpose: "", duration: "", poc: "" });
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (agreed && formData.purpose && formData.duration && formData.poc) {
      router.push("/approval_tf_alert");
    }
  };

  return (
    <>
      {/* Page Briefing in Highlighted Box */}
      <div className="max-w-5xl mx-auto mt-3 mb-20 px-4">
        <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
          <p className="text-sm text-blue-900 font-semibold mb-1">요청 기반 공유 창작물</p>
          <p className="text-sm text-blue-800 mb-1">- 일반적으로 소스코드 등 기술자산을 가르키며, 높은 수준의 보안이 요구되어 승인 및 계약 체결 절차가 필요합니다.</p>
          <p className="text-sm text-blue-800 mb-1">- 전체 열람 또는 다운로드 희망 시 사용 목적, 기간, POC 지정하여 NDA 및 cross-licensing 계약 체결 필요.</p>
          <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
            <li>시스템 내에서 키워드 기반으로 부분적으로 조회 (e.g. 기능성 코드) (복사 붙이기 불가), 또는 요약 내용을 확인할 수 있습니다.</li>
            <li>이러한 내용을 기반으로 필요 여부를 판단하여, 사용 목적, 기간, 그리고 POC를 지정하여 요청을 제출합니다.</li>
            <li>시스템 안내 내용에 따라 NDA 체결 및 소유법인↔소속법인 cross-licensing 계약 체결합니다.</li>
            <li>승인 받은 창작물에 대해 지정 기간 동안 접근하여, 참고 목적으로 이용합니다. 기간 만료 시 접근 권한이 회수됩니다.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center px-4">
        {loading ? (
          <div className="flex flex-col items-center gap-4 text-center animate-fadeIn">
            <Loader2 className="h-8 w-8 animate-spin text-gray-700" />
            <p className="text-lg font-semibold">소속 관련 계약 유효성 검토중...</p>
          </div>
        ) : (
          <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow space-y-6">
            <h2 className="text-xl font-bold text-red-600">NDA 및 Cross-Licensing 계약 체결 절차 필요</h2>
            <p className="text-sm text-gray-600">
              이 자료의 사용을 위해 아래의 NDA 및 Cross-Licensing 조건에 동의해야 하며, 사용 목적, 사용 기간, 그리고 POC 정보를 제공해야 합니다.
            </p>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="mr-2 h-4 w-4"
              />
              <label htmlFor="agree" className="text-sm">
                NDA 및 Cross-Licensing 계약에 동의합니다.
              </label>
            </div>
            <div className="space-y-4">
              <Input name="purpose" placeholder="사용 목적" value={formData.purpose} onChange={handleChange} />
              <Input name="duration" placeholder="사용 기간" value={formData.duration} onChange={handleChange} />
              <Input name="poc" placeholder="POC (담당자)" value={formData.poc} onChange={handleChange} />
            </div>
            <Button
              onClick={handleSubmit}
              disabled={!(agreed && formData.purpose && formData.duration && formData.poc)}
              className="w-full"
            >
              제출하고 계약 절차 시작하기
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
