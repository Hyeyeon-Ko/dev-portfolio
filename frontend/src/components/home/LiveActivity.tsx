import { useEffect, useState, type FC } from "react";
import { Icons, LIVE_ACTIVITY, CURRENT_READING } from "../../constants";

const GITHUB_OWNER = "Hyeyeon-Ko";
const GITHUB_REPO = "dev-portfolio";

export default function LiveActivity() {
  const [lastCommit, setLastCommit] = useState<string | null>(null);
  const [commitUrl, setCommitUrl] = useState<string>("#");

  useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/commits?per_page=1`)
      .then((res) => res.json())
      .then((data) => {
        const msg: string = data[0]?.commit?.message ?? "";
        // 첫 줄만 (멀티라인 커밋 메시지 대응)
        setLastCommit(msg.split("\n")[0]);
        setCommitUrl(data[0]?.html_url ?? "#");
      })
      .catch(() => {});
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 mb-20">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
          <h2 className="text-xl font-bold text-slate-800">Live Activity</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* 현재 작업 카드 */}
        <div className="md:col-span-2 glass-card rounded-3xl p-6 card-shadow flex items-start space-x-6">
          <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 flex-shrink-0">
            <Icons.Project />
          </div>
          <div className="flex-grow space-y-3 min-w-0">
            <div className="flex items-center space-x-2 flex-wrap gap-y-1">
              <h3 className="font-bold text-slate-800">작업 중: {LIVE_ACTIVITY.title}</h3>
              <span className="px-2 py-0.5 bg-indigo-100 text-indigo-600 rounded text-[10px] font-bold shrink-0">
                {LIVE_ACTIVITY.status}
              </span>
            </div>

            <p className="text-sm text-slate-500 truncate">
              Last Commit:{" "}
              {lastCommit ? (
                <a
                  href={commitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-50 px-1.5 py-0.5 rounded text-indigo-500 hover:text-indigo-700 transition-colors"
                >
                  {lastCommit}
                </a>
              ) : (
                <span className="bg-slate-50 px-1.5 py-0.5 rounded text-slate-400 animate-pulse">
                  불러오는 중...
                </span>
              )}
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

        {/* 현재 읽는 책 카드 */}
        <div className="glass-card rounded-3xl p-6 card-shadow flex items-center space-x-4">
          <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 shrink-0">
            <Icons.Reading />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
              Current Reading
            </span>
            <h4 className="font-bold text-slate-800 leading-tight">{CURRENT_READING}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
