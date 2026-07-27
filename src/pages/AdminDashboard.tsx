import { useState } from "react";
import { useInquiryStore, type Inquiry } from "@/lib/useInquiryStore";
import { useAdminAuth } from "@/lib/useAdminAuth";
import { useVisitorStore, type VisitorSession } from "@/lib/useVisitorStore";
import { products } from "@/data/products/products.data";
import {
  Users,
  FileText,
  Clock,
  Search,
  Trash2,
  Layers,
  LogOut,
  Eye,
  Globe,
  Monitor,
  Smartphone,
  Tablet,
  MapPin,
  RefreshCw,
  Activity,
  TrendingUp,
  Link2,
} from "lucide-react";

// ─── Visitor Intelligence Panel ───────────────────────────────────────────────

function VisitorIntelligencePanel() {
  const { sessions, clearSessions } = useVisitorStore();
  const [selectedSession, setSelectedSession] = useState<VisitorSession | null>(null);
  const [visitorSearch, setVisitorSearch] = useState("");

  const onlineSessions = sessions.filter((s) => s.isOnline);
  const anonymousSessions = sessions.filter((s) => !s.convertedToLead);
  const convertedSessions = sessions.filter((s) => s.convertedToLead);

  // Top pages
  const pageFrequency: Record<string, number> = {};
  sessions.forEach((s) =>
    s.pages.forEach((p) => {
      pageFrequency[p.title] = (pageFrequency[p.title] ?? 0) + 1;
    })
  );
  const topPages = Object.entries(pageFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Referrer breakdown
  const referrerFreq: Record<string, number> = {};
  sessions.forEach((s) => {
    referrerFreq[s.referrerSource] = (referrerFreq[s.referrerSource] ?? 0) + 1;
  });

  // Device breakdown
  const deviceFreq = { mobile: 0, tablet: 0, desktop: 0 };
  sessions.forEach((s) => deviceFreq[s.device]++);

  const filtered = sessions.filter(
    (s) =>
      s.ip.includes(visitorSearch) ||
      s.country.toLowerCase().includes(visitorSearch.toLowerCase()) ||
      s.city.toLowerCase().includes(visitorSearch.toLowerCase()) ||
      s.referrerSource.toLowerCase().includes(visitorSearch.toLowerCase())
  );

  const DeviceIcon = ({ device }: { device: string }) => {
    if (device === "mobile") return <Smartphone className="h-3.5 w-3.5" />;
    if (device === "tablet") return <Tablet className="h-3.5 w-3.5" />;
    return <Monitor className="h-3.5 w-3.5" />;
  };

  return (
    <div className="space-y-6">
      {/* Metric Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-white p-5 border border-neutral-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase text-neutral-400">Total Visitors</span>
            <p className="mt-1 text-2xl font-extrabold text-neutral-900">{sessions.length}</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
            <Eye className="h-6 w-6" />
          </div>
        </div>

        <div className="rounded-xl bg-white p-5 border border-neutral-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase text-neutral-400">Online Now</span>
            <p className="mt-1 text-2xl font-extrabold text-green-600">{onlineSessions.length}</p>
          </div>
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
            <Activity className="h-6 w-6" />
            {onlineSessions.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>
            )}
          </div>
        </div>

        <div className="rounded-xl bg-white p-5 border border-neutral-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase text-neutral-400">Anonymous Visitors</span>
            <p className="mt-1 text-2xl font-extrabold text-amber-600">{anonymousSessions.length}</p>
            <p className="text-[10px] text-neutral-400 mt-0.5">Did not fill any form</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
            <Users className="h-6 w-6" />
          </div>
        </div>

        <div className="rounded-xl bg-white p-5 border border-neutral-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase text-neutral-400">Converted to Leads</span>
            <p className="mt-1 text-2xl font-extrabold text-emerald-600">{convertedSessions.length}</p>
            <p className="text-[10px] text-neutral-400 mt-0.5">
              {sessions.length > 0
                ? `${Math.round((convertedSessions.length / sessions.length) * 100)}% conversion`
                : "0% conversion"}
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
            <TrendingUp className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Top Pages */}
        <div className="rounded-xl bg-white p-5 border border-neutral-200 shadow-sm">
          <h3 className="text-sm font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <FileText className="h-4 w-4 text-blue-600" />
            Top Pages Visited
          </h3>
          {topPages.length === 0 ? (
            <p className="text-xs text-neutral-400 py-4 text-center">No page data yet</p>
          ) : (
            <div className="space-y-3">
              {topPages.map(([page, count]) => {
                const max = topPages[0]?.[1] ?? 1;
                return (
                  <div key={page}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-neutral-700 truncate max-w-[160px]">{page}</span>
                      <span className="font-bold text-neutral-500">{count}</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-neutral-100">
                      <div
                        className="h-1.5 rounded-full bg-blue-600 transition-all duration-500"
                        style={{ width: `${(count / max) * 100}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Traffic Sources */}
        <div className="rounded-xl bg-white p-5 border border-neutral-200 shadow-sm">
          <h3 className="text-sm font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <Link2 className="h-4 w-4 text-orange-600" />
            Traffic Sources
          </h3>
          {Object.keys(referrerFreq).length === 0 ? (
            <p className="text-xs text-neutral-400 py-4 text-center">No traffic data yet</p>
          ) : (
            <div className="space-y-3">
              {Object.entries(referrerFreq)
                .sort((a, b) => b[1] - a[1])
                .map(([source, count]) => {
                  const total = Object.values(referrerFreq).reduce((a, b) => a + b, 0);
                  return (
                    <div key={source} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Globe className="h-3.5 w-3.5 text-neutral-400" />
                        <span className="text-xs font-medium text-neutral-700">{source}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-neutral-400">{count}</span>
                        <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-bold text-orange-700">
                          {Math.round((count / total) * 100)}%
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>

        {/* Device Breakdown */}
        <div className="rounded-xl bg-white p-5 border border-neutral-200 shadow-sm">
          <h3 className="text-sm font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <Monitor className="h-4 w-4 text-purple-600" />
            Device Breakdown
          </h3>
          <div className="space-y-4">
            {(["desktop", "mobile", "tablet"] as const).map((device) => {
              const count = deviceFreq[device];
              const total = sessions.length || 1;
              const colors = {
                desktop: "bg-blue-500",
                mobile: "bg-orange-500",
                tablet: "bg-purple-500",
              };
              return (
                <div key={device}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="flex items-center gap-1.5 font-medium text-neutral-700 capitalize">
                      <DeviceIcon device={device} />
                      {device}
                    </span>
                    <span className="font-bold text-neutral-500">{count} ({Math.round((count / total) * 100)}%)</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-100">
                    <div
                      className={`h-2 rounded-full ${colors[device]} transition-all duration-500`}
                      style={{ width: `${(count / total) * 100}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Visitor Session Table */}
      <div className="rounded-xl bg-white border border-neutral-200 shadow-sm overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-5 border-b border-neutral-100">
          <div>
            <h3 className="text-sm font-bold text-neutral-900">Anonymous Visitor Sessions</h3>
            <p className="text-xs text-neutral-400 mt-0.5">People who browsed without filling any form</p>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-neutral-400" />
              <input
                type="text"
                value={visitorSearch}
                onChange={(e) => setVisitorSearch(e.target.value)}
                placeholder="Search by country, city, source…"
                className="rounded-lg border border-neutral-300 pl-8 pr-3 py-1.5 text-xs focus:border-blue-600 focus:outline-none"
              />
            </div>
            <button
              onClick={clearSessions}
              className="flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-500 hover:bg-red-100 transition"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Clear All
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-100">
                <th className="px-4 py-3 text-left font-bold text-neutral-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left font-bold text-neutral-500 uppercase tracking-wider">Location</th>
                <th className="px-4 py-3 text-left font-bold text-neutral-500 uppercase tracking-wider">Device</th>
                <th className="px-4 py-3 text-left font-bold text-neutral-500 uppercase tracking-wider">Source</th>
                <th className="px-4 py-3 text-left font-bold text-neutral-500 uppercase tracking-wider">Pages</th>
                <th className="px-4 py-3 text-left font-bold text-neutral-500 uppercase tracking-wider">First Seen</th>
                <th className="px-4 py-3 text-left font-bold text-neutral-500 uppercase tracking-wider">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-neutral-400">
                    No visitor sessions recorded yet. Sessions appear as people browse your website.
                  </td>
                </tr>
              ) : (
                filtered.slice(0, 50).map((session) => (
                  <tr
                    key={session.sessionId}
                    className="hover:bg-neutral-50 cursor-pointer transition"
                    onClick={() => setSelectedSession(session === selectedSession ? null : session)}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <span className={`relative h-2 w-2 rounded-full ${session.isOnline ? "bg-green-500" : "bg-neutral-300"}`} />
                        <span className={`font-semibold ${session.isOnline ? "text-green-600" : "text-neutral-400"}`}>
                          {session.isOnline ? "Online" : "Offline"}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3 w-3 text-neutral-400 shrink-0" />
                        <span className="text-neutral-700 font-medium">
                          {session.city !== "Unknown" ? `${session.city}, ` : ""}{session.country}
                        </span>
                      </div>
                      <p className="text-[10px] text-neutral-400 mt-0.5">{session.ip}</p>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 text-neutral-600">
                        <DeviceIcon device={session.device} />
                        <span className="capitalize">{session.device}</span>
                      </div>
                      <p className="text-[10px] text-neutral-400 mt-0.5">{session.browser} / {session.os}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-blue-50 px-2 py-0.5 font-bold text-blue-700 border border-blue-100">
                        {session.referrerSource}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-bold text-neutral-900">{session.pages.length}</td>
                    <td className="px-4 py-3 text-neutral-500">
                      {new Date(session.firstSeen).toLocaleDateString("en-IN", {
                        day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit",
                      })}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold border ${
                        session.convertedToLead
                          ? "bg-green-50 text-green-700 border-green-200"
                          : "bg-amber-50 text-amber-700 border-amber-200"
                      }`}>
                        {session.convertedToLead ? "✓ Lead" : "Anonymous"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Expanded session detail */}
        {selectedSession && (
          <div className="border-t border-neutral-200 bg-neutral-50 p-5">
            <h4 className="text-xs font-bold text-neutral-700 mb-3">
              Session Journey — {selectedSession.sessionId}
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedSession.pages.map((page, i) => (
                <div key={i} className="flex items-center gap-1.5 rounded-lg bg-white border border-neutral-200 px-3 py-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[9px] font-black text-white">{i + 1}</span>
                  <span className="text-xs font-medium text-neutral-700">{page.title}</span>
                  <span className="text-[10px] text-neutral-400">
                    {new Date(page.timestamp).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              ))}
              {selectedSession.pages.length === 0 && (
                <p className="text-xs text-neutral-400">No pages tracked yet in this session.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const { inquiries, updateStatus, deleteInquiry } = useInquiryStore();
  const { username, logout } = useAdminAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<"crm" | "visitors">("crm");

  const statuses: Inquiry["status"][] = ["New", "Contacted", "Quoted", "Closed"];

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.machineInterest.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || inq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: Inquiry["status"]) => {
    switch (status) {
      case "New": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Contacted": return "bg-amber-100 text-amber-800 border-amber-200";
      case "Quoted": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Closed": return "bg-green-100 text-green-800 border-green-200";
    }
  };

  return (
    <div className="py-8 bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl bg-neutral-900 p-6 text-white shadow-xl">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-orange-500/20 px-2.5 py-0.5 text-xs font-bold text-orange-400 border border-orange-500/30">
                Admin Command Center
              </span>
              <span className="text-xs text-neutral-400">Excelpack Lead Pipeline CRM</span>
            </div>
            <h1 className="mt-1 text-2xl font-extrabold text-white">Commercial Inquiries & Visitor Intelligence</h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-neutral-800 px-3 py-1.5 text-xs text-neutral-300 font-medium">
              Welcome, <strong className="text-orange-400">{username}</strong>
            </span>
            <span className="rounded-lg bg-neutral-800 px-3 py-1.5 text-xs text-neutral-300 font-medium">
              Role: <strong className="text-white">Super Admin</strong>
            </span>
            <button
              onClick={logout}
              className="flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-400 transition hover:bg-red-500/20"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Summary metric cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-5 border border-neutral-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-neutral-400">Total Leads</span>
              <p className="mt-1 text-2xl font-extrabold text-neutral-900">{inquiries.length}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <Users className="h-6 w-6" />
            </div>
          </div>
          <div className="rounded-xl bg-white p-5 border border-neutral-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-neutral-400">New Pending</span>
              <p className="mt-1 text-2xl font-extrabold text-blue-700">
                {inquiries.filter((i) => i.status === "New").length}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <Clock className="h-6 w-6" />
            </div>
          </div>
          <div className="rounded-xl bg-white p-5 border border-neutral-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-neutral-400">Quotations Issued</span>
              <p className="mt-1 text-2xl font-extrabold text-purple-700">
                {inquiries.filter((i) => i.status === "Quoted").length}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
              <FileText className="h-6 w-6" />
            </div>
          </div>
          <div className="rounded-xl bg-white p-5 border border-neutral-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-neutral-400">Catalogue Models</span>
              <p className="mt-1 text-2xl font-extrabold text-green-700">{products.length}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
              <Layers className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-8 flex gap-1 rounded-xl bg-white border border-neutral-200 p-1 shadow-sm w-fit">
          <button
            onClick={() => setActiveTab("crm")}
            className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-all ${
              activeTab === "crm"
                ? "bg-neutral-900 text-white shadow"
                : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            <Users className="h-4 w-4" />
            Lead Pipeline CRM
          </button>
          <button
            onClick={() => setActiveTab("visitors")}
            className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-all ${
              activeTab === "visitors"
                ? "bg-orange-600 text-white shadow"
                : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            <Eye className="h-4 w-4" />
            Visitor Intelligence
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6">

          {/* ── CRM TAB ── */}
          {activeTab === "crm" && (
            <div className="rounded-2xl bg-white p-6 border border-neutral-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-100 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-neutral-900">Lead Pipeline (Kanban)</h2>
                  <p className="text-xs text-neutral-500">Track and update potential machinery buyers</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-neutral-400" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search buyer, company, model…"
                      className="rounded-lg border border-neutral-300 pl-8 pr-3 py-1.5 text-xs focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="rounded-lg border border-neutral-300 px-3 py-1.5 text-xs focus:border-blue-600 focus:outline-none"
                  >
                    <option value="All">All Statuses</option>
                    {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-4">
                {statuses.map((status) => {
                  const colInquiries = filteredInquiries.filter((i) => i.status === status);
                  return (
                    <div key={status} className="rounded-xl bg-neutral-50 p-4 border border-neutral-200 flex flex-col">
                      <div className="flex items-center justify-between border-b border-neutral-200 pb-2 mb-3">
                        <span className={`rounded-md px-2.5 py-0.5 text-xs font-bold border ${getStatusBadge(status)}`}>
                          {status} ({colInquiries.length})
                        </span>
                      </div>
                      <div className="space-y-3 flex-1 overflow-y-auto max-h-[500px] pr-1">
                        {colInquiries.length === 0 ? (
                          <p className="text-center text-xs text-neutral-400 py-6">No leads in {status}</p>
                        ) : (
                          colInquiries.map((inq) => (
                            <div key={inq.id} className="rounded-lg bg-white p-3.5 border border-neutral-200 shadow-xs hover:shadow-md transition space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-[11px] font-bold text-blue-900">{inq.company}</span>
                                <span className="text-[10px] text-neutral-400">
                                  {new Date(inq.createdAt).toLocaleDateString()}
                                </span>
                              </div>
                              <h4 className="text-xs font-bold text-neutral-900">{inq.name}</h4>
                              <p className="text-[11px] text-neutral-600"><strong>Interest:</strong> {inq.machineInterest}</p>
                              <p className="text-[11px] text-neutral-500 truncate">📞 {inq.phone} • ✉️ {inq.email}</p>
                              {inq.message && (
                                <p className="text-[11px] text-neutral-600 bg-neutral-50 p-2 rounded border border-neutral-100 line-clamp-2">
                                  "{inq.message}"
                                </p>
                              )}
                              <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
                                <select
                                  value={inq.status}
                                  onChange={(e) => updateStatus(inq.id, e.target.value as Inquiry["status"])}
                                  className="text-[10px] font-bold rounded border border-neutral-300 px-1.5 py-1 bg-white"
                                >
                                  {statuses.map((st) => <option key={st} value={st}>Move to {st}</option>)}
                                </select>
                                <button onClick={() => deleteInquiry(inq.id)} className="text-neutral-400 hover:text-red-600 p-1" title="Delete Lead">
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── VISITOR INTELLIGENCE TAB ── */}
          {activeTab === "visitors" && <VisitorIntelligencePanel />}
        </div>
      </div>
    </div>
  );
}
