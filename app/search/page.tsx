import React from "react";
import Link from "next/link";
import { Play } from "lucide-react";

const mockAssets = Array.from({ length: 16 }, (_, i) => {
  const types = ["2D", "3D", "Music", "Code", "IP Lore"];
  const type = types[i % types.length];
  const base = {
    id: i + 1,
    name: `${type} Asset ${i + 1}`,
    project: "Project Wild",
    format: type === "2D" ? "PNG" : type === "3D" ? "FBX" : type === "Music" ? "MP3" : type === "Code" ? "JS" : "PDF",
    owner: ["Jane Doe", "John Smith", "Emily Rose", "Liam Lee", "Sophia Lee"][i % 5],
    type,
    link:
      type === "2D"
        ? "/approval_free"
        : type === "3D" || type === "Music"
        ? "/approval_conditional"
        : type === "Code"
        ? "/approval_request"
        : "/approval_conditional"
  };

  if (type === "2D" || type === "3D") {
    return { ...base, image: "/placeholder-image.png" };
  } else if (type === "Music") {
    return { ...base, audio: "/sample.mp3" };
  } else if (type === "Code") {
    return { ...base, description: "Script that animates a bear walking." };
  } else {
    return { ...base, excerpt: "In ancient times, the bear tribes ruled the northern forests..." };
  }
});

type Asset = {
  id: number;
  name: string;
  project: string;
  format: string;
  owner: string;
  type: string;
  link: string;
  image?: string;
  audio?: string;
  description?: string;
  excerpt?: string;
};

const AssetCard = ({ asset }: { asset: Asset }) => {
  return (
    <Link href={`${asset.link}?query=${encodeURIComponent(asset.name)}`}>
      <div className="relative border rounded-lg overflow-hidden bg-white hover:shadow-lg group cursor-pointer transition h-64 flex items-center justify-center p-4">
        {/* Uniform Placeholder */}
        <div className="text-center">
          {asset.type === "2D" || asset.type === "3D" ? (
            <img src={asset.image} alt={asset.name} className="h-24 w-auto mx-auto mb-2" />
          ) : asset.type === "Music" ? (
            <button className="bg-gray-200 rounded-full p-4 hover:bg-gray-300">
              <Play className="w-6 h-6 text-gray-700" />
            </button>
          ) : asset.type === "Code" ? (
            <p className="text-sm text-gray-600">{asset.description}</p>
          ) : asset.type === "IP Lore" ? (
            <p className="text-sm italic text-gray-600">{asset.excerpt}</p>
          ) : null}
        </div>

        {/* Hover Info */}
        <div className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center p-4 transition">
          <h3 className="text-lg font-semibold">{asset.name}</h3>
          <p className="text-sm">Project: {asset.project}</p>
          <p className="text-sm">Format: {asset.format}</p>
          <p className="text-sm">Owner: {asset.owner}</p>
        </div>
      </div>
    </Link>
  );
};

export default function SearchPage() {
  return (
    <div className="px-6 py-8">
      {/* Page Briefing in Highlighted Box */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
          <p className="text-base text-blue-900 font-semibold mb-2">
            공유 Pool 창작물 공유 조건 기준
          </p>
          <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
            <li>문서형 창작 확장 기반 (IP Bibles, Lores): 개발중, 종료, 서비스 중인 프로젝트 모두 포함. 조건부 공유 정책에 해당.</li>
            <li>상징적 창작물 (2D, 3D, Music): 종료된 프로젝트만 포함. 조건부 공유 정책에 해당.</li>
            <li>비상징적 창작물 (2D, 3D, Music): 종료된 프로젝트만 포함. 자유 공유 정책에 해당.</li>
            <li>기술 자산 (Code): 종료된 프로젝트만 포함. 요청 기반 공유 정책에 해당.</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Search Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockAssets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
}
