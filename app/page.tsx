import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-4">
      {/* Page Briefing in Highlighted Box */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
          <p className="text-base text-blue-900 font-semibold mb-2">
            해당 페이지는 Mnemo의 공유 Pool 창작물 Dashboard 프로토타입입니다.
          </p>
          <p className="text-base text-blue-900 mb-1">
            해당 페이지에는 크게 두가지 Flow가 명시되어 있습니다.
          </p>
          <ul className="list-disc list-inside text-sm text-blue-800">
            <li>
              사용자가 공유 Pool의 창작물을 검색할 때:
              <ol className="list-decimal list-inside ml-4">
                <li>Search Box에 창작물을 키워드 기반으로 검색.</li>
                <li>개인 페이지에서는 저장된 결과 리포트 목록 확인.</li>
              </ol>
            </li>
            <li>
              사용자가 공유 Pool의 창작물을 등록할 때:
              <ol className="list-decimal list-inside ml-4">
                <li>Register Asset 버튼을 클릭하여 창작물 등록 페이지로 이동.</li>
              </ol>
            </li>
          </ul>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-xl mx-auto mt-24">
        <form action="/search" method="GET" className="flex gap-2">
          <Input
            name="query"
            type="text"
            placeholder="Search for game assets..."
            className="text-lg px-4 py-2"
          />
          <Button type="submit" className="text-lg">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
}