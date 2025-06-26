"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

function ApprovalFreeContent() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      const search = window.location.search;
      router.push(`/download${search}`);
    }, 10000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      {/* Page Briefing in Highlighted Box */}
      <div className="max-w-5xl mx-auto mt-12 mb-20 px-4">
        <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
          <p className="text-base text-blue-900 font-semibold mb-2">공유 Pool 창작물 공유 조건 기준</p>
          <p className="text-sm text-blue-900 font-semibold mb-1">6.1 자유 공유 창작물</p>
          <p className="text-sm text-blue-800 mb-1">사용 목적에 제한이 없는 창작물로, 별도의 승인 또는 정산 절차를 거치지 않습니다.</p>
          <p className="text-sm text-blue-800 mb-1">시스템 내에서 미리보기 / 미리듣기 등 기능을 활용하여 파악하고 자유롭게 다운로드 받을 수 있습니다.</p>
          <p className="text-sm text-blue-800">단, 시스템 내에서 이용 내역이 기록됩니다.</p>
        </div>
      </div>

      <div className="flex items-center justify-center px-4 mb-20">
        {loading && (
          <div className="flex flex-col items-center gap-4 text-center animate-fadeIn">
            <Loader2 className="h-8 w-8 animate-spin text-gray-700" />
            <p className="text-lg font-semibold">다운로드 링크 생성 중...</p>
          </div>
        )}
      </div>
    </>
  );
}

export default function ApprovalFreePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-gray-400">로딩 중...</div>}>
      <ApprovalFreeContent />
    </Suspense>
  );
}