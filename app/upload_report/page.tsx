"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";

export default function UploadResultPage() {
  const router = useRouter();

  // Mock metadata - replace with real extracted data
  const metadata = {
    author: "홍길동",
    project: "Project B",
    studio: "Studio X",
    type: "기술 자산",
    license: "내부 사용 전용",
    metadata: "Python script with auto-import pipeline"
  };

  const handleConfirm = () => {
    router.push("/"); // Go back or wherever needed
  };

  return (
    <div className="max-w-2xl mx-auto px-4 mt-16 space-y-8">
      <div className="border border-gray-300 rounded-lg p-6 bg-white">
        <h2 className="text-lg font-semibold text-black mb-4">요청 제출 결과 및 안내</h2>

        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>
            <strong className="text-blue-900">주요 제작자:</strong> {metadata.author}
          </li>
          <li>
            <strong className="text-blue-900">소속 프로젝트:</strong> {metadata.project}
          </li>
          <li>
            <strong className="text-blue-900">소속 스튜디오:</strong> {metadata.studio}
          </li>
          <li>
            <strong className="text-blue-900">창작물 유형:</strong> {metadata.type}
          </li>
          <li>
            <strong className="text-blue-900">사용 권한/라이선스 정보:</strong> {metadata.license}
          </li>
          <li>
            <strong className="text-blue-900">표준 메타데이터:</strong> {metadata.metadata}
          </li>
        </ul>
      </div>
      <Link href='/'><Button className="w-full">확인</Button></Link>
    </div>
  );
}
