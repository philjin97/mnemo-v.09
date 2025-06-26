"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

function DownloadContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "sample asset";

  const assetList = [
    `${query}`,
  ];

  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Page Briefing in Highlighted Box */}
      <div className="max-w-5xl mx-auto mt-3 mb-20 px-4">
        <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
          <p className="text-base text-blue-900 font-semibold mb-2">공유 Pool 창작물 공유 조건 기준</p>
          <p className="text-sm text-blue-900 font-semibold mb-1">- 기록 관리</p>
          <p className="text-sm text-blue-800 mb-1">각 사용자의 등록(업로드), 검색, 조회, 요청, 다운로드 내역은 모두 기록됩니다.</p>
          <p className="text-sm text-blue-800 mb-1">Mnemo의 전사 관리자는 시스템 내 모든 창작물 등록 현황과 사용자 활동을 모니터링할 수 있습니다.</p>
          <p className="text-sm text-blue-800 mb-1">공유 창작물 pool 외 스튜디오의 엠바고 창작물 또한 전사 관리자에 의해 모니터링 되나, 기록을 확인할 뿐 접근에는 일반 사용자와 동일한 사용 제약을 받습니다.</p>
          <p className="text-sm text-blue-900 font-semibold mt-4 mb-1">- 정책 위반 및 해결 절차</p>
          <p className="text-sm text-blue-800 mb-1">위반 시 TF에서 검토</p>
          <p className="text-sm text-blue-800 mb-1">필요 시 소속 팀장에게 통보 및 재사용 중단 요청</p>
          <p className="text-sm text-blue-900 font-semibold mt-4 mb-1">- 정책 검토 주기</p>
          <p className="text-sm text-blue-800">6개월 주기로 IP 거버넌스팀에서 정기 검토</p>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-6">Download Links</h1>
      <div className="space-y-4">
        {assetList.map((name, idx) => (
          <div key={idx} className="flex justify-between items-center bg-white p-4 rounded shadow">
            <span className="text-gray-800 font-medium">{name}</span>
            <Button>Download</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DownloadPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-gray-400">로딩 중...</div>}>
      <DownloadContent />
    </Suspense>
  );
}
