import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ShieldCheck, Users, Banknote, FileCheck, ArrowRight, ChevronRight } from "lucide-react";

export function EmployerPage() {
  const services = [
    {
      title: "身份快速核验",
      desc: "依托社保卡及电子社保卡，一键核验用工人员真实身份，保障企业用工安全。",
      icon: ShieldCheck,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "员工用工备案",
      desc: "线上全流程办理新进员工用工备案手续，数据多跑路，企业少跑腿。",
      icon: Users,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "就业扶持补贴",
      desc: "一键申领企业吸纳就业补贴、社保补贴，资金直达企业账户。",
      icon: Banknote,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      title: "劳动合同管理",
      desc: "电子劳动合同在线签署与归档，规��用工流程，防范用工风险。",
      icon: FileCheck,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1674981208693-de5a9c4c4f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3Nzk3NjQ5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Modern office building"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
            精准高效，助力企业用工
          </h1>
          <p className="text-lg md:text-xl text-slate-200 drop-shadow-sm">
            企业依托电子社保卡平台，实现员工身份核验、用工备案与补贴申领全流程数字化管理。
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="flex items-start gap-5 relative z-10">
                <div className={`w-16 h-16 rounded-xl ${service.bg} flex items-center justify-center shrink-0`}>
                  <service.icon size={32} className={service.color} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                    立即办理 <ArrowRight size={16} />
                  </button>
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-5 transform group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                <service.icon size={160} className={service.color} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">一站式企业服务工作台</h2>
              <p className="text-lg text-slate-600">
                聚合企业常用服务，实时掌握员工备案状态与补贴申领进度，提升企业人力资源管理效率。
              </p>
              <ul className="space-y-4">
                {[
                  "统一身份认证体系，告别多账号密码管理",
                  "智能数据比对校验，降低用工违规风险",
                  "补贴政策智能匹配，政策红利应享尽享",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <ShieldCheck size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
                  进入企业控制台 <ChevronRight size={18} />
                </button>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <div className="ml-4 text-xs text-slate-500 font-mono">企业工作台 - 待办事项</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm font-semibold text-slate-500">本月待处理用工备案</div>
                    <div className="text-2xl font-bold text-slate-900">12<span className="text-sm font-normal text-slate-500 ml-1">人</span></div>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                            {['张', '李', '王'][i-1]}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">新员工入职备案</div>
                            <div className="text-xs text-slate-500">提交时间: 今天 10:{20+i}</div>
                          </div>
                        </div>
                        <button className="text-sm text-blue-600 font-medium hover:text-blue-700">审核</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
