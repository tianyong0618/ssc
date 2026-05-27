import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PaymentChart } from "../components/figma/PaymentChart";
import { 
  User, Briefcase, FileSignature, GraduationCap, Banknote, Shield, CheckCircle2, Copy 
} from "lucide-react";

export function PersonalArchivePage() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "档案概览", icon: User },
    { id: "employment", label: "就业登记", icon: Briefcase },
    { id: "insurance", label: "参保缴费", icon: Shield },
    { id: "training", label: "技能培训", icon: GraduationCap },
    { id: "subsidy", label: "补贴享受", icon: Banknote },
    { id: "contract", label: "劳动合同", icon: FileSignature },
  ];

  return (
    <div className="flex-1 bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-50 shadow-md">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3OTc4NDQwOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-emerald-500 text-white p-1.5 rounded-full border-2 border-white" title="已实名认证">
                <CheckCircle2 size={16} />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left mt-2 md:mt-0">
              <h1 className="text-2xl font-bold text-slate-900 mb-2 flex items-center justify-center md:justify-start gap-3">
                张*华
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md font-medium">个人专属人社档案</span>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-slate-600 mb-4 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 w-20">身份证号:</span>
                  <span className="font-mono">210202********1234</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 w-20">社保卡号:</span>
                  <span className="font-mono flex items-center gap-2">
                    A123****789 
                    <button className="text-blue-500 hover:text-blue-700"><Copy size={14}/></button>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 w-20">联系电话:</span>
                  <span className="font-mono">138****5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 w-20">户籍性质:</span>
                  <span>城镇户口</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4">
                "一卡一号"数据归集模式，为您汇总归集全生命周期人社数据。
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-64 shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
              <div className="p-4 bg-slate-50 border-b border-slate-200">
                <h3 className="font-semibold text-slate-700">档案目录</h3>
              </div>
              <nav className="p-2 space-y-1">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      activeTab === tab.id 
                        ? "bg-blue-50 text-blue-700" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <tab.icon size={18} className={activeTab === tab.id ? "text-blue-600" : "text-slate-400"} />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex-1">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: "累计缴费月数", value: "86", unit: "个月", icon: Shield, color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "就业登记状态", value: "在职", unit: "", icon: Briefcase, color: "text-emerald-600", bg: "bg-emerald-50" },
                    { label: "职业技能证书", value: "2", unit: "本", icon: GraduationCap, color: "text-amber-600", bg: "bg-amber-50" },
                    { label: "劳动合同", value: "1", unit: "份", icon: FileSignature, color: "text-purple-600", bg: "bg-purple-50" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full ${stat.bg} flex items-center justify-center shrink-0`}>
                        <stat.icon size={24} className={stat.color} />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 mb-1">{stat.label}</div>
                        <div className="text-xl font-bold text-slate-900">
                          {stat.value} <span className="text-sm font-normal text-slate-500">{stat.unit}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Shield className="text-blue-600" size={20} />
                    近半年社保缴费趋势
                  </h3>
                  <PaymentChart />
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-500" size={20} />
                    数据治理与标准化记录
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-blue-200 pl-4 py-1 relative">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                      <div className="text-sm font-bold text-slate-900">数据清洗与比对完成</div>
                      <div className="text-xs text-slate-500 mt-1">2026-05-20 10:30 · 剔除冗余记录2条，合并参保信息1条。</div>
                    </div>
                    <div className="border-l-2 border-blue-200 pl-4 py-1 relative">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                      <div className="text-sm font-bold text-slate-900">电子劳动合同归集</div>
                      <div className="text-xs text-slate-500 mt-1">2025-11-15 14:20 · 成功同步大连某科技有限公司劳动合同。</div>
                    </div>
                    <div className="border-l-2 border-blue-200 pl-4 py-1 relative">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                      <div className="text-sm font-bold text-slate-900">建立专属人社电子档案</div>
                      <div className="text-xs text-slate-500 mt-1">2023-08-01 09:00 · 首次归集就业与社保基础数据。</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab !== "overview" && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                  {activeTab === "employment" && <Briefcase size={40} />}
                  {activeTab === "insurance" && <Shield size={40} />}
                  {activeTab === "training" && <GraduationCap size={40} />}
                  {activeTab === "subsidy" && <Banknote size={40} />}
                  {activeTab === "contract" && <FileSignature size={40} />}
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">
                  {tabs.find(t => t.id === activeTab)?.label} 明细数据
                </h3>
                <p className="text-slate-500 max-w-md mx-auto">
                  基于"一卡一号"数据归集模式，您的该项历史数据已实现标准化管理。可在对应业务大厅进行详细办理或查询。
                </p>
                <button className="mt-6 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-2 rounded-lg font-medium transition-colors shadow-sm">
                  查看详细记录
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}