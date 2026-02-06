import React, { useEffect, useState } from "react";
import { Icons, LIVE_ACTIVITY } from "../constants";

const LiveActivity: React.FC = () => {
  const [backendOk, setBackendOk] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setBackendOk(Boolean(data?.ok)))
      .catch(() => setBackendOk(false));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 mb-20">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
          <h2 className="text-xl font-bold text-slate-800">Live Activity</h2>
        </div>

        <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          Backend:{" "}
          {backendOk === null ? (
            "CHECKING"
          ) : backendOk ? (
            <span className="text-emerald-600">OK</span>
          ) : (
            <span className="text-red-500">DOWN</span>
          )}
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-3xl p-6 border border-slate-100 card-shadow flex items-start space-x-6">
          <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 flex-shrink-0">
            <Icons.Project />
          </div>
          <div className="flex-grow space-y-3">
            <div className="flex items-center space-x-2">
              <h3 className="font-bold text-slate-800">
                작업 중: {LIVE_ACTIVITY.title}
              </h3>
              <span className="px-2 py-0.5 bg-indigo-100 text-indigo-600 rounded text-[10px] font-bold">
                {LIVE_ACTIVITY.status}
              </span>
            </div>

            <p className="text-sm text-slate-500">
              Last Commit:{" "}
              <code className="bg-slate-50 px-1.5 py-0.5 rounded text-indigo-500">
                {LIVE_ACTIVITY.lastCommit}
              </code>
            </p>

            <div className="space-y-2 pt-1">
              <div className="flex justify-between items-end">
                <span className="text-xs font-bold text-slate-400">Progress</span>
                <span className="text-lg font-black text-indigo-600 leading-none">
                  {LIVE_ACTIVITY.progress}%
                </span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full transition-all duration-1000"
                  style={{ width: `${LIVE_ACTIVITY.progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-100 card-shadow flex items-center space-x-4">
          <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
            <Icons.Reading />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
              Current Reading
            </span>
            <h4 className="font-bold text-slate-800 leading-tight">
              Clean Code (Robert C. Martin)
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveActivity;
