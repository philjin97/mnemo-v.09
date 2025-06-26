"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const projectStatusMap = {
  "Project A": "개발 중",
  "Project B": "종료",
  "Project C": "서비스",
  "Project D": "종료",
  "Project E": "종료"
} as const;

type ProjectKey = keyof typeof projectStatusMap;

export default function RegisterFixedPage() {
  const [project, setProject] = useState("");
  const [projectStatus, setProjectStatus] = useState("");
  const [fileType, setFileType] = useState("");
  const [classification, setClassification] = useState("");
  const [symbolicChoice, setSymbolicChoice] = useState("");
  const router = useRouter();

  const handleProjectChange = (value: string) => {
    setProject(value);
    const status = (projectStatusMap as Record<string, string>)[value] || "";
    setProjectStatus(status);
  };

  const handleFileTypeChange = (value: string) => {
    setFileType(value);
    if (value === ".txt") setClassification("문서형 창작 확장 기반");
    else if (value === ".py") setClassification("기술 자산");
    else setClassification("");
    setSymbolicChoice("");
  };

  const handleSubmit = () => {
    router.push("/upload_report");
  };

  return (
    <div className="space-y-12">
      {/* Page Briefing in Highlighted Box */}
      <div className="max-w-5xl mx-auto mt-3 px-4">
        <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
          <p className="text-sm text-blue-900 font-semibold mb-1">창작물 등록 정책</p>
          <p className="text-sm text-blue-800 mb-1">Mnemo 출범 이전에 창작물을 공유하는 경우 IP Governance TF에서 수집을 진행하며, 시스템의 설계 및 창작물 전달 방식의 연구를 위해 활용할 수 있습니다. 이와 같이 수집된 창작물은 Mnemo 출범 시점에 공유 pool에 등록되며, 전달 절차의 반복을 가급적 지양합니다.</p>
          <p className="text-sm text-blue-800 mb-4">Mnemo 베타 출시 이후 각 스튜디오에서 직접 Mnemo로 창작물을 업로드하며, IP Governance TF에서 제시하는 가이드라인에 따라 정보를 입력하여 등록합니다.</p>
          <p className="text-sm text-blue-900 font-semibold mb-1">모든 창작물은 다음 정보를 포함해야 합니다:</p>
          <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
            <li>주요 제작자</li>
            <li>소속 프로젝트</li>
            <li>소속 스튜디오</li>
            <li>창작물 유형</li>
            <li>사용 권한/라이선스 정보 (추후 제 3자의 창작물에 적용)</li>
            <li>표준 메타데이터</li>
          </ul>
          <p className="text-sm text-blue-800 mt-4">위 정보를 기반으로 시스템이 창작물에 자동으로 공유 조건을 부여합니다.</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 space-y-6">
        <div>
          <label className="block font-medium mb-1">프로젝트 선택</label>
          <select
            className="w-full border border-gray-300 rounded p-2"
            value={project}
            onChange={(e) => handleProjectChange(e.target.value)}
          >
            <option value="">프로젝트 선택</option>
            <option>Project A</option>
            <option>Project B</option>
            <option>Project C</option>
            <option>Project D</option>
            <option>Project E</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">프로젝트 상태</label>
          <p className="text-sm text-gray-700">{projectStatus || "(선택된 프로젝트 없음)"}</p>
          {(projectStatus === "개발 중" || projectStatus === "서비스") && (
            <p className="mt-1 text-sm text-red-500">
              현재 개발 중이거나 서비스 중인 프로젝트는 상징적 창작물, 비상징적 창작물, 기술 자산을 등록할 수 없습니다.
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">파일 업로드 (확장자 선택)</label>
          <select
            className="w-full border border-gray-300 rounded p-2"
            value={fileType}
            onChange={(e) => handleFileTypeChange(e.target.value)}
          >
            <option value="">확장자 선택</option>
            <option value=".txt">.txt</option>
            <option value=".jpg">.jpg</option>
            <option value=".fbx">.fbx</option>
            <option value=".py">.py</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">창작물 분류</label>
          {(fileType === ".jpg" || fileType === ".fbx") ? (
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="symbolic"
                  value="상징적 창작물"
                  checked={symbolicChoice === "상징적 창작물"}
                  onChange={(e) => setSymbolicChoice(e.target.value)}
                />
                상징적 창작물
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="symbolic"
                  value="비상징적 창작물"
                  checked={symbolicChoice === "비상징적 창작물"}
                  onChange={(e) => setSymbolicChoice(e.target.value)}
                />
                비상징적 창작물
              </label>
            </div>
          ) : (
            <p className="text-sm text-gray-700">{classification || "(선택된 확장자 없음)"}</p>
          )}
        </div>

        <Button className="w-full" onClick={handleSubmit}>
          제출
        </Button>
      </div>
    </div>
  );
}