import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  Search, Briefcase, FileText, ClipboardList, BookOpen, 
  Award, FileBadge, HelpCircle, UserPlus, MapPin, DollarSign, Clock, Building2 
} from "lucide-react";

const quickActions = [
  { icon: UserPlus, label: "求职登记", desc: "快速完善个人意向", color: "text-blue-600", bg: "bg-blue-50", hoverBorder: "hover:border-blue-200" },
  { icon: Search, label: "岗位检索", desc: "海量职位一键搜", color: "text-indigo-600", bg: "bg-indigo-50", hoverBorder: "hover:border-indigo-200" },
  { icon: FileText, label: "简历投递", desc: "在线直投精准匹配", color: "text-emerald-600", bg: "bg-emerald-50", hoverBorder: "hover:border-emerald-200" },
  { icon: ClipboardList, label: "就业备案", desc: "就职状态实时同步", color: "text-amber-600", bg: "bg-amber-50", hoverBorder: "hover:border-amber-200" },
  { icon: ClipboardList, label: "失业登记", desc: "保障权益及时申领", color: "text-rose-600", bg: "bg-rose-50", hoverBorder: "hover:border-rose-200" },
  { icon: DollarSign, label: "创业补贴", desc: "资金扶持助梦启航", color: "text-purple-600", bg: "bg-purple-50", hoverBorder: "hover:border-purple-200" },
  { icon: BookOpen, label: "技能培训", desc: "提升能力拓宽渠道", color: "text-cyan-600", bg: "bg-cyan-50", hoverBorder: "hover:border-cyan-200" },
  { icon: Award, label: "证书查询", desc: "资质认证一网通查", color: "text-teal-600", bg: "bg-teal-50", hoverBorder: "hover:border-teal-200" },
  { icon: HelpCircle, label: "政策咨询", desc: "最新政策专业解读", color: "text-orange-600", bg: "bg-orange-50", hoverBorder: "hover:border-orange-200" },
];

const recommendedJobs = [
  { title: "高级前端开发工程师", company: "大连某科技有限公司", location: "高新园区", salary: "15k-25k", time: "3天前" },
  { title: "人力资源主管", company: "星海集团", location: "沙河口区", salary: "8k-12k", time: "1周前" },
  { title: "自动化测试工程师", company: "大连智造软件服务中心", location: "软件园", salary: "10k-18k", time: "刚刚" },
  { title: "新媒体运营专员", company: "传媒互动有限公司", location: "中山区", salary: "6k-10k", time: "2天前" },
];

export function SocialWorkerPage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1766066014237-00645c74e9c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwYXNpYW4lMjBwcm9mZXNzaW9uYWwlMjB3b3JrZXIlMjBhdCUyMGRlc2t8ZW58MXx8fHwxNzc5Nzg0NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Smiling asian professional worker"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-sm">
              社保卡在手，就业无忧
            </h1>
            <p className="text-lg md:text-xl font-medium text-blue-100 mb-8 drop-shadow-sm max-w-xl">
              深度整合人社数据，支持凭借实体或电子社保卡完成求职、登记、补贴等全生命周期就业服务。一卡集成，全域通办。
            </p>
            
            <div className="bg-white p-2 rounded-xl shadow-lg flex items-center gap-2 max-w-xl transition-all focus-within:ring-4 focus-within:ring-blue-300">
              <div className="pl-3 text-slate-400">
                <Search size={24} />
              </div>
              <input 
                type="text" 
                placeholder="搜索职位、政策或服务..."
                className="flex-1 bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400 px-2 py-3 text-lg"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                搜索
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileBadge className="text-blue-600" size={24} />
              服务大厅
            </h2>
            <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              无需繁琐填表，刷卡即可办理
            </span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {quickActions.map((action, idx) => (
              <button 
                key={idx} 
                className={`group flex flex-col items-center justify-center p-4 rounded-xl border border-transparent ${action.hoverBorder} hover:shadow-md transition-all ${action.bg} bg-opacity-30 hover:bg-opacity-50`}
              >
                <div className={`w-12 h-12 rounded-full ${action.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <action.icon size={24} className={action.color} />
                </div>
                <span className="font-semibold text-slate-800 text-sm">{action.label}</span>
                <span className="text-xs text-slate-500 mt-1 text-center hidden sm:block">{action.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Jobs & Policies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Briefcase className="text-blue-600" size={24} />
          为您推荐
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedJobs.map((job, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-200 p-5 transition-shadow cursor-pointer flex flex-col h-full">
              <h3 className="font-bold text-lg text-slate-900 line-clamp-1 mb-1" title={job.title}>{job.title}</h3>
              <p className="text-blue-600 font-semibold mb-4">{job.salary}</p>
              
              <div className="mt-auto space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Building2 size={16} className="text-slate-400" />
                  <span className="truncate">{job.company}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-slate-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock size={14} />
                    <span className="text-xs">{job.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
