import { useState, useMemo } from "react";
import { useInquiryStore, type Inquiry, type InquiryStatus, type EmailLog } from "@/lib/useInquiryStore";
import { useAdminAuth } from "@/lib/useAdminAuth";
import { useVisitorStore, type VisitorSession } from "@/lib/useVisitorStore";
import { products } from "@/data/products/products.data";
import { sendClientQuotation } from "@/lib/useEmailService";
import {
  FileText, TrendingUp, Search, Trash2, LogOut, Eye,
  Globe, Monitor, Smartphone, Tablet, RefreshCw, Activity,
  Mail, Send, CheckCheck, Bell, StickyNote, Clock, ChevronDown,
  MailCheck, Layers, Link2, X, MessageCircle, Phone,
} from "lucide-react";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const STATUS_COLORS: Record<InquiryStatus, string> = {
  "New":       "bg-blue-100 text-blue-700 border-blue-200",
  "In Review": "bg-amber-100 text-amber-700 border-amber-200",
  "Quoted":    "bg-purple-100 text-purple-700 border-purple-200",
  "Converted": "bg-green-100 text-green-700 border-green-200",
  "Closed":    "bg-neutral-100 text-neutral-500 border-neutral-200",
};

const STATUSES: InquiryStatus[] = ["New", "In Review", "Quoted", "Converted", "Closed"];

function timeAgo(iso: string) {
  const diff = (Date.now() - new Date(iso).getTime()) / 1000;
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

// ─── Quotation Composer Modal ─────────────────────────────────────────────────

function QuotationComposer({ inquiry, onClose }: { inquiry: Inquiry; onClose: () => void }) {
  const { logEmailSent } = useInquiryStore();
  const { username } = useAdminAuth();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const machine = products.find((p) => p.id === inquiry.machineInterest || p.model === inquiry.machineInterest);

  const defaultMsg = `Dear ${inquiry.name},

Thank you for your interest in the ${machine?.name ?? inquiry.machineInterest} from ExcelPack Machines Private Limited.

We are pleased to submit our commercial and technical offer for your packaging requirement. Please find the key details below:

Machine Model: ${machine?.model ?? inquiry.machineInterest}
Packaging Speed: ${machine?.speed ?? "As discussed"}
Industry: ${inquiry.industry}
${inquiry.pouchType ? `Pouch Style: ${inquiry.pouchType}` : ""}

Our team is available for a factory visit and live demonstration at our Greater Noida plant at your convenience.

For any queries, please contact us directly:
📞 +91-8527502214
📧 info@excelpackmachine.com
🌐 www.excelpackmachine.com

Warm Regards,
${username ?? "Sales Team"}
ExcelPack Machines Pvt. Ltd.`;

  const [message, setMessage] = useState(defaultMsg);

  const handleSend = async () => {
    setSending(true);
    setError("");
    const result = await sendClientQuotation({
      to_name: inquiry.name,
      to_email: inquiry.email,
      to_company: inquiry.company,
      machine_name: machine?.name ?? inquiry.machineInterest,
      machine_model: machine?.model ?? inquiry.machineInterest,
      machine_speed: machine?.speed ?? "As discussed",
      custom_message: message,
      inquiry_id: inquiry.id,
      sender_name: username ?? "Sales Team",
    });
    setSending(false);
    if (result.success) {
      const log: EmailLog = {
        sentAt: new Date().toISOString(),
        sentBy: username ?? "Admin",
        templateType: "quotation",
        toEmail: inquiry.email,
      };
      logEmailSent(inquiry.id, log);
      setSent(true);
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="fixed inset-0 z-[700] flex items-end sm:items-center justify-center bg-black/60 p-0 sm:p-4">
      <div className="w-full sm:max-w-2xl max-h-[92dvh] sm:max-h-[90vh] flex flex-col rounded-t-2xl sm:rounded-2xl bg-white shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b bg-neutral-900 text-white shrink-0">
          <div>
            <p className="text-xs text-neutral-400 font-medium uppercase tracking-widest">Send Quotation Email</p>
            <h3 className="text-base font-bold">{inquiry.name} — {inquiry.company}</h3>
          </div>
          <button onClick={onClose} className="rounded-full bg-white/10 p-1.5 hover:bg-white/20 transition">
            <X className="h-4 w-4" />
          </button>
        </div>

        {sent ? (
          <div className="flex-1 flex flex-col items-center justify-center py-12 gap-4">
            <MailCheck className="h-16 w-16 text-green-500 animate-bounce" />
            <h3 className="text-xl font-bold text-neutral-900">Quotation Sent!</h3>
            <p className="text-sm text-neutral-500 text-center px-8">
              Email delivered to <span className="font-semibold text-blue-700">{inquiry.email}</span>.<br/>
              Status updated to <span className="font-semibold text-purple-700">Quoted</span>.
            </p>
            <button onClick={onClose} className="mt-2 rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white hover:bg-neutral-700">
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Client Info Strip */}
            <div className="bg-blue-50 border-b border-blue-100 px-5 py-3 flex flex-wrap gap-4 text-xs text-blue-900 shrink-0">
              <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> {inquiry.email}</span>
              <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> {inquiry.phone}</span>
              <span className="flex items-center gap-1"><Layers className="h-3.5 w-3.5" /> {machine?.name ?? inquiry.machineInterest}</span>
            </div>

            {/* Scrollable Message Editor */}
            <div className="flex-1 overflow-y-auto p-5">
              <label className="block text-xs font-bold uppercase text-neutral-500 mb-2">
                Email Message (editable)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={16}
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm font-mono focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
              />
              {error && (
                <p className="mt-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  ⚠️ {error}. Check your EmailJS setup in .env.
                </p>
              )}
            </div>

            {/* Footer Actions */}
            <div className="shrink-0 border-t px-5 py-4 flex gap-3 justify-end">
              <button onClick={onClose} className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-semibold hover:bg-neutral-50">
                Cancel
              </button>
              <button
                onClick={handleSend}
                disabled={sending}
                className="flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-2.5 text-sm font-bold text-white hover:bg-blue-800 disabled:opacity-60 transition"
              >
                {sending ? <><RefreshCw className="h-4 w-4 animate-spin" /> Sending...</> : <><Send className="h-4 w-4" /> Send Quotation</>}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Inquiry Detail Drawer ────────────────────────────────────────────────────

function InquiryDetailDrawer({ inquiry, onClose }: { inquiry: Inquiry; onClose: () => void }) {
  const { updateStatus, updateNotes, deleteInquiry, markRead } = useInquiryStore();
  const [notes, setNotes] = useState(inquiry.notes);
  const [showComposer, setShowComposer] = useState(false);

  return (
    <>
      <div className="fixed inset-0 z-[600] flex items-end sm:items-center justify-end">
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <div className="relative w-full sm:w-[480px] h-full flex flex-col bg-white shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-neutral-900 text-white px-5 py-4 flex items-center justify-between shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${STATUS_COLORS[inquiry.status]}`}>
                  {inquiry.status}
                </span>
                {!inquiry.isRead && <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />}
              </div>
              <h3 className="mt-1 text-base font-bold">{inquiry.name}</h3>
              <p className="text-xs text-neutral-400">{inquiry.company} · {timeAgo(inquiry.createdAt)}</p>
            </div>
            <button onClick={onClose} className="rounded-full bg-white/10 p-1.5 hover:bg-white/20">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {/* Contact info */}
            <div className="rounded-xl border border-neutral-200 divide-y divide-neutral-100 overflow-hidden">
              {[
                { label: "Email", value: inquiry.email, icon: <Mail className="h-4 w-4 text-blue-500" />, href: `mailto:${inquiry.email}` },
                { label: "Phone", value: inquiry.phone, icon: <Phone className="h-4 w-4 text-green-500" />, href: `tel:${inquiry.phone}` },
                { label: "WhatsApp", value: "Open Chat", icon: <MessageCircle className="h-4 w-4 text-green-600" />, href: `https://wa.me/${inquiry.phone.replace(/\D/g,"")}` },
                { label: "Machine", value: inquiry.machineInterest, icon: <Layers className="h-4 w-4 text-orange-500" /> },
                { label: "Industry", value: inquiry.industry, icon: <Globe className="h-4 w-4 text-purple-500" /> },
                ...(inquiry.pouchType ? [{ label: "Pouch", value: inquiry.pouchType, icon: <FileText className="h-4 w-4 text-neutral-400" /> }] : []),
                ...(inquiry.targetSpeed ? [{ label: "Speed", value: inquiry.targetSpeed, icon: <Activity className="h-4 w-4 text-neutral-400" /> }] : []),
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3 px-4 py-2.5">
                  {row.icon}
                  <span className="text-xs font-bold text-neutral-400 w-16 shrink-0">{row.label}</span>
                  {row.href ? (
                    <a href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="text-sm text-blue-700 font-medium hover:underline truncate">
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-sm text-neutral-800 font-medium truncate">{row.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Message */}
            {inquiry.message && (
              <div>
                <p className="text-xs font-bold uppercase text-neutral-400 mb-1.5">Client Message</p>
                <p className="text-sm text-neutral-700 bg-neutral-50 rounded-lg p-3 border border-neutral-200 leading-relaxed">
                  {inquiry.message}
                </p>
              </div>
            )}

            {/* Status Picker */}
            <div>
              <p className="text-xs font-bold uppercase text-neutral-400 mb-1.5">Update Status</p>
              <div className="relative">
                <select
                  value={inquiry.status}
                  onChange={(e) => updateStatus(inquiry.id, e.target.value as InquiryStatus)}
                  className="w-full appearance-none rounded-lg border border-neutral-300 bg-white px-4 py-2.5 pr-10 text-sm font-semibold focus:border-blue-500 focus:outline-none"
                >
                  {STATUSES.map((s) => <option key={s}>{s}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
              </div>
            </div>

            {/* Internal Notes */}
            <div>
              <p className="text-xs font-bold uppercase text-neutral-400 mb-1.5 flex items-center gap-1">
                <StickyNote className="h-3.5 w-3.5" /> Internal Notes
              </p>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                onBlur={() => updateNotes(inquiry.id, notes)}
                rows={3}
                placeholder="Add private notes visible only to admin..."
                className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none resize-none"
              />
            </div>

            {/* Email History */}
            <div>
              <p className="text-xs font-bold uppercase text-neutral-400 mb-2 flex items-center gap-1">
                <MailCheck className="h-3.5 w-3.5" /> Email History ({inquiry.emailLog.length})
              </p>
              {inquiry.emailLog.length === 0 ? (
                <p className="text-xs text-neutral-400 italic">No emails sent yet.</p>
              ) : (
                <div className="space-y-2">
                  {inquiry.emailLog.map((log, i) => (
                    <div key={i} className="flex items-start gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                      <MailCheck className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-green-800">
                          {log.templateType === "quotation" ? "Quotation" : "Follow-up"} sent to {log.toEmail}
                        </p>
                        <p className="text-[11px] text-green-600">{timeAgo(log.sentAt)} · by {log.sentBy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Action Footer */}
          <div className="shrink-0 border-t p-4 flex gap-2">
            <button
              onClick={() => { markRead(inquiry.id); setShowComposer(true); }}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-blue-700 py-2.5 text-sm font-bold text-white hover:bg-blue-800 transition"
            >
              <Send className="h-4 w-4" /> Send Quotation
            </button>
            <button
              onClick={() => { deleteInquiry(inquiry.id); onClose(); }}
              className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-red-600 hover:bg-red-100 transition"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {showComposer && (
        <QuotationComposer inquiry={inquiry} onClose={() => setShowComposer(false)} />
      )}
    </>
  );
}

// ─── Visitor Intelligence Panel ───────────────────────────────────────────────

function VisitorIntelligencePanel() {
  const { sessions, clearSessions } = useVisitorStore();
  const [selectedSession, setSelectedSession] = useState<VisitorSession | null>(null);
  const [visitorSearch, setVisitorSearch] = useState("");

  const onlineSessions = sessions.filter((s) => s.isOnline);
  const convertedSessions = sessions.filter((s) => s.convertedToLead);
  const pageFrequency: Record<string, number> = {};
  sessions.forEach((s) => s.pages.forEach((p) => { pageFrequency[p.title] = (pageFrequency[p.title] ?? 0) + 1; }));
  const topPages = Object.entries(pageFrequency).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const referrerFreq: Record<string, number> = {};
  sessions.forEach((s) => { referrerFreq[s.referrerSource] = (referrerFreq[s.referrerSource] ?? 0) + 1; });
  const deviceFreq = { mobile: 0, tablet: 0, desktop: 0 };
  sessions.forEach((s) => deviceFreq[s.device]++);
  const filtered = sessions.filter((s) =>
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Visitors", value: sessions.length, color: "text-blue-700", bg: "bg-blue-50" },
          { label: "Online Now", value: onlineSessions.length, color: "text-green-700", bg: "bg-green-50" },
          { label: "Converted Leads", value: convertedSessions.length, color: "text-purple-700", bg: "bg-purple-50" },
          { label: "Conversion Rate", value: sessions.length ? `${Math.round((convertedSessions.length / sessions.length) * 100)}%` : "0%", color: "text-orange-700", bg: "bg-orange-50" },
        ].map((card) => (
          <div key={card.label} className={`rounded-xl ${card.bg} border p-5`}>
            <p className="text-xs font-bold uppercase text-neutral-500">{card.label}</p>
            <p className={`mt-1 text-3xl font-extrabold ${card.color}`}>{card.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl bg-white border border-neutral-200 p-5">
          <h4 className="text-sm font-bold text-neutral-700 mb-3 flex items-center gap-2"><TrendingUp className="h-4 w-4 text-blue-500" />Top Pages</h4>
          {topPages.length === 0 ? <p className="text-xs text-neutral-400">No data yet.</p> : topPages.map(([title, count]) => (
            <div key={title} className="flex justify-between items-center py-1.5 border-b border-neutral-100 last:border-0">
              <span className="text-xs text-neutral-700 truncate max-w-[160px]">{title}</span>
              <span className="text-xs font-bold text-blue-700">{count}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-white border border-neutral-200 p-5">
          <h4 className="text-sm font-bold text-neutral-700 mb-3 flex items-center gap-2"><Link2 className="h-4 w-4 text-purple-500" />Traffic Sources</h4>
          {Object.entries(referrerFreq).length === 0 ? <p className="text-xs text-neutral-400">No data yet.</p> : Object.entries(referrerFreq).sort((a,b) => b[1]-a[1]).map(([src, count]) => (
            <div key={src} className="flex justify-between items-center py-1.5 border-b border-neutral-100 last:border-0">
              <span className="text-xs text-neutral-700">{src}</span>
              <span className="text-xs font-bold text-purple-700">{count}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-white border border-neutral-200 p-5">
          <h4 className="text-sm font-bold text-neutral-700 mb-3 flex items-center gap-2"><Monitor className="h-4 w-4 text-orange-500" />Devices</h4>
          {[["Mobile", deviceFreq.mobile], ["Tablet", deviceFreq.tablet], ["Desktop", deviceFreq.desktop]].map(([label, val]) => (
            <div key={String(label)} className="flex justify-between items-center py-1.5 border-b border-neutral-100 last:border-0">
              <span className="text-xs text-neutral-700">{label}</span>
              <span className="text-xs font-bold text-orange-700">{val}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-white border border-neutral-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h4 className="text-sm font-bold">Live Visitor Sessions</h4>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
              <input value={visitorSearch} onChange={(e) => setVisitorSearch(e.target.value)}
                placeholder="Search by country, city, source..." className="rounded-lg border px-3 py-1.5 pl-8 text-xs focus:outline-none w-48" />
            </div>
            <button onClick={clearSessions} className="rounded-lg border px-3 py-1.5 text-xs text-neutral-600 hover:bg-neutral-50 flex items-center gap-1">
              <RefreshCw className="h-3 w-3" />Clear
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-neutral-50 text-neutral-500 uppercase text-[11px]">
              <tr>{["Status","Device","Location","Source","Pages","Time"].map(h => <th key={h} className="px-4 py-2.5 text-left font-bold">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {filtered.slice(0, 50).map((s) => (
                <tr key={s.sessionId} className="hover:bg-neutral-50 cursor-pointer" onClick={() => setSelectedSession(selectedSession?.sessionId === s.sessionId ? null : s)}>
                  <td className="px-4 py-2.5">
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${s.isOnline ? "bg-green-100 text-green-700" : "bg-neutral-100 text-neutral-500"}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${s.isOnline ? "bg-green-500 animate-pulse" : "bg-neutral-400"}`} />
                      {s.isOnline ? "Online" : "Away"}
                    </span>
                  </td>
                  <td className="px-4 py-2.5"><span className="flex items-center gap-1 text-neutral-600"><DeviceIcon device={s.device} />{s.device}</span></td>
                  <td className="px-4 py-2.5 text-neutral-700">{s.city}, {s.country}</td>
                  <td className="px-4 py-2.5 text-neutral-600">{s.referrerSource}</td>
                  <td className="px-4 py-2.5 text-neutral-600">{s.pages.length}</td>
                  <td className="px-4 py-2.5 text-neutral-500">{timeAgo(s.lastSeen)}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="px-4 py-8 text-center text-neutral-400">No visitors recorded yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── Main Admin Dashboard ─────────────────────────────────────────────────────

export default function AdminDashboard() {
  const { inquiries, deleteInquiry, markRead, markAllRead, unreadCount } = useInquiryStore();
  const { logout, username } = useAdminAuth();
  const [activeTab, setActiveTab] = useState<"inquiries" | "visitors" | "analytics">("inquiries");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<InquiryStatus | "All">("All");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  const unread = unreadCount();

  const filtered = useMemo(() => {
    return inquiries
      .filter((inq) => {
        const matchSearch =
          inq.name.toLowerCase().includes(search.toLowerCase()) ||
          inq.company.toLowerCase().includes(search.toLowerCase()) ||
          inq.email.toLowerCase().includes(search.toLowerCase()) ||
          inq.machineInterest.toLowerCase().includes(search.toLowerCase());
        const matchStatus = statusFilter === "All" || inq.status === statusFilter;
        return matchSearch && matchStatus;
      });
  }, [inquiries, search, statusFilter]);

  // Stats
  const stats = useMemo(() => ({
    total: inquiries.length,
    newCount: inquiries.filter((i) => i.status === "New").length,
    quoted: inquiries.filter((i) => i.status === "Quoted").length,
    converted: inquiries.filter((i) => i.status === "Converted").length,
  }), [inquiries]);

  const handleOpen = (inq: Inquiry) => {
    setSelectedInquiry(inq);
    if (!inq.isRead) markRead(inq.id);
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Top Bar */}
      <div className="bg-neutral-900 text-white px-4 sm:px-8 py-3 flex items-center justify-between sticky top-0 z-40 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-orange-500 flex items-center justify-center font-black text-sm">E</div>
          <div>
            <p className="text-sm font-bold leading-none">ExcelPack Admin</p>
            <p className="text-[11px] text-neutral-400">{username}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {unread > 0 && (
            <span className="flex items-center gap-1 rounded-full bg-red-500 px-2.5 py-1 text-[11px] font-bold animate-pulse">
              <Bell className="h-3 w-3" />{unread} new
            </span>
          )}
          <button onClick={() => logout()} className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold hover:bg-white/20 transition">
            <LogOut className="h-3.5 w-3.5" />Logout
          </button>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Total Inquiries", value: stats.total, color: "text-neutral-900", bg: "bg-white", border: "border-neutral-200" },
            { label: "New (Unread)", value: stats.newCount, color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200" },
            { label: "Quoted", value: stats.quoted, color: "text-purple-700", bg: "bg-purple-50", border: "border-purple-200" },
            { label: "Converted", value: stats.converted, color: "text-green-700", bg: "bg-green-50", border: "border-green-200" },
          ].map((card) => (
            <div key={card.label} className={`rounded-xl ${card.bg} border ${card.border} p-4 sm:p-5`}>
              <p className="text-xs font-bold uppercase text-neutral-500">{card.label}</p>
              <p className={`mt-1 text-3xl font-extrabold ${card.color}`}>{card.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 rounded-xl bg-white border border-neutral-200 p-1 w-fit">
          {(["inquiries", "visitors", "analytics"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold capitalize transition ${activeTab === tab ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-neutral-100"}`}
            >
              {tab}
              {tab === "inquiries" && unread > 0 && (
                <span className="ml-1.5 rounded-full bg-red-500 text-white text-[10px] px-1.5 py-0.5 font-bold">{unread}</span>
              )}
            </button>
          ))}
        </div>

        {/* ── Inquiries Tab ── */}
        {activeTab === "inquiries" && (
          <div className="rounded-xl bg-white border border-neutral-200 overflow-hidden">
            {/* Toolbar */}
            <div className="px-5 py-4 border-b flex flex-wrap gap-3 items-center justify-between">
              <div className="flex flex-wrap gap-2 items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
                  <input value={search} onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search name, company, machine..." className="rounded-lg border border-neutral-300 py-2 pl-8 pr-3 text-sm focus:outline-none focus:border-blue-500 w-56" />
                </div>
                <div className="relative">
                  <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as InquiryStatus | "All")}
                    className="appearance-none rounded-lg border border-neutral-300 py-2 pl-3 pr-8 text-sm focus:outline-none focus:border-blue-500">
                    <option value="All">All Status</option>
                    {STATUSES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400 pointer-events-none" />
                </div>
              </div>
              {unread > 0 && (
                <button onClick={markAllRead} className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
                  <CheckCheck className="h-3.5 w-3.5" /> Mark all read
                </button>
              )}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 text-neutral-500 text-xs uppercase">
                  <tr>
                    {["", "Client", "Machine", "Type", "Status", "Emails", "Time", "Actions"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left font-bold whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {filtered.map((inq) => (
                    <tr key={inq.id} className={`hover:bg-neutral-50 transition cursor-pointer ${!inq.isRead ? "bg-blue-50/40" : ""}`}
                      onClick={() => handleOpen(inq)}>
                      <td className="pl-4 py-3">
                        {!inq.isRead && <span className="h-2 w-2 rounded-full bg-blue-500 block animate-pulse" />}
                      </td>
                      <td className="px-4 py-3">
                        <p className="font-semibold text-neutral-900">{inq.name}</p>
                        <p className="text-xs text-neutral-500">{inq.company}</p>
                        <p className="text-xs text-blue-600">{inq.email}</p>
                      </td>
                      <td className="px-4 py-3 text-neutral-700 font-medium whitespace-nowrap">{inq.machineInterest}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-600">{inq.type}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-block rounded-full border px-2.5 py-1 text-xs font-bold ${STATUS_COLORS[inq.status]}`}>
                          {inq.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {inq.emailLog.length > 0 ? (
                          <span className="flex items-center gap-1 text-green-700 text-xs font-semibold">
                            <MailCheck className="h-3.5 w-3.5" />{inq.emailLog.length} sent
                          </span>
                        ) : (
                          <span className="text-xs text-neutral-400">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-neutral-500 text-xs whitespace-nowrap">
                        <div className="flex items-center gap-1"><Clock className="h-3 w-3" />{timeAgo(inq.createdAt)}</div>
                      </td>
                      <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center gap-1.5">
                          <button onClick={() => handleOpen(inq)}
                            className="rounded-lg bg-blue-700 px-2.5 py-1.5 text-xs font-bold text-white hover:bg-blue-800 flex items-center gap-1">
                            <Eye className="h-3 w-3" />View
                          </button>
                          <button onClick={() => deleteInquiry(inq.id)}
                            className="rounded-lg border border-red-200 bg-red-50 p-1.5 text-red-500 hover:bg-red-100">
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr><td colSpan={8} className="px-4 py-12 text-center text-neutral-400">No inquiries found.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── Visitors Tab ── */}
        {activeTab === "visitors" && <VisitorIntelligencePanel />}

        {/* ── Analytics Tab ── */}
        {activeTab === "analytics" && (
          <div className="rounded-xl bg-white border border-neutral-200 p-8 text-center">
            <TrendingUp className="h-12 w-12 text-neutral-300 mx-auto" />
            <h3 className="mt-4 text-lg font-bold text-neutral-700">Google Analytics Connected</h3>
            <p className="mt-2 text-sm text-neutral-500">
              Full traffic analytics are available in your GA4 dashboard.<br />
              <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-800">
                <Activity className="h-4 w-4" />Open Google Analytics
              </a>
            </p>
          </div>
        )}
      </div>

      {/* Inquiry Detail Drawer */}
      {selectedInquiry && (
        <InquiryDetailDrawer
          inquiry={selectedInquiry}
          onClose={() => setSelectedInquiry(null)}
        />
      )}
    </div>
  );
}
