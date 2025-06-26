"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ApprovalConditionalPage() {
  const [loading, setLoading] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    if (agreed) {
      const search = window.location.search;
      router.push(`/download${search}`);
    }
  };

  return (
    <div className="min-h-screen px-4">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-full gap-4 text-center animate-fadeIn">
          <Loader2 className="h-8 w-8 animate-spin text-gray-700" />
          <p className="text-lg font-semibold">권한 확인중...</p>
        </div>
      ) : (
        <>
          {/* Page Briefing in Highlighted Box */}
          <div className="max-w-5xl mx-auto mt-12 mb-20 px-4">
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
              <p className="text-base text-blue-900 font-semibold mb-2">
                공유 Pool 창작물 공유 조건 기준
              </p>
              <p className="text-sm text-blue-800 mb-1">
                - 사용 목적에 제한이 있는 창작물로, 통상적으로 창작 확장 기반이 되는 창작물에 해당됩니다.
              </p>
              <p className="text-sm text-blue-800 mb-1">
                - 시스템 내에서 미리보기 / 미리듣기 등 기능을 활용하여 파악할 수 있으며, 주의 사항에 동의 후 프로젝트 단위로 ‘언락’하여 일정 기간 동안 자유롭게 다운로드 받을 수 있습니다.
              </p>
              <p className="text-sm text-blue-800">
                - 시스템 내에서 이용 내역이 기록되며, 프로젝트 언락 내역이 주기적으로 IP owner에게 보고됩니다.
              </p>
            </div>
          </div>

          {/* Consent Form */}
          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">주의 사항 및 사용 조건 안내 표시</h2>
            <p className="text-sm text-gray-600 mb-4">
              이 자료를 사용하기 전 다음 조건에 동의해야 합니다. 조건에는 저작권, 사용 범위, 변경 금지 등이 포함됩니다.
            </p>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="agree"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="mr-2 h-4 w-4"
              />
              <label htmlFor="agree" className="text-sm">
                주의사항 및 조건에 동의합니다.
              </label>
            </div>
            <Button onClick={handleSubmit} disabled={!agreed} className="w-full">
              확인하고 다운로드 페이지로 이동
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
