"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function ApprovalTFAlertPage() {
  const [stage, setStage] = useState("loading");
  const router = useRouter();

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setStage("done");
      const redirectTimer = setTimeout(() => {
        const search = window.location.search;
        router.push(`/download${search}`);
      }, 2000);
      return () => clearTimeout(redirectTimer);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, [router]);

  return (
    <div className="mt-12 flex items-center justify-center px-4">
      {stage === "loading" ? (
        <div className="flex flex-col items-center gap-4 text-center animate-fadeIn">
          <Loader2 className="h-8 w-8 animate-spin text-gray-700" />
          <p className="text-lg font-semibold">TF 승인 대기 중...</p>
        </div>
      ) : (
        <div className="text-center animate-fadeIn">
          <p className="text-xl font-bold text-green-600">TF 승인 완료</p>
        </div>
      )}
    </div>
  );
}