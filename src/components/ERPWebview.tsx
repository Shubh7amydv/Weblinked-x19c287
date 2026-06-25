import React, { useState } from 'react';
import { 
  Users, 
  CreditCard, 
  Map, 
  Bell, 
  Plus, 
  Search, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Send,
  Bus,
  MapPin,
  CheckSquare
} from 'lucide-react';

// Data models for interactive mock state
interface SandboxStudent {
  id: string;
  name: string;
  grade: string;
  rollNo: number;
  attendance: number;
  status: 'Present' | 'Absent/Alert';
  parentPhone: string;
  feesStatus: 'Paid' | 'Pending';
}

interface SandboxFee {
  id: string;
  student: string;
  grade: string;
  invoiceId: string;
  amount: number;
  dueDate: string;
  status: 'Paid' | 'Pending';
  method: string;
}

interface SandboxBus {
  id: string;
  routeNo: string;
  driverName: string;
  status: 'Active' | 'Delayed' | 'IDLE';
  currentStop: string;
  totalStudents: number;
  speed: number;
}

export default function ERPWebview() {
  const [activeTab, setActiveTab] = useState<'students' | 'fees' | 'gps' | 'broadcaster'>('students');

  // Interactive Student State
  const [studentsList, setStudentsList] = useState<SandboxStudent[]>([
    { id: 'ST-201', name: 'Aarav Sharma', grade: 'Grade 9-A', rollNo: 4, attendance: 96, status: 'Present', parentPhone: '98450 XXXXX', feesStatus: 'Paid' },
    { id: 'ST-202', name: 'Diya Patel', grade: 'Grade 10-B', rollNo: 15, attendance: 78, status: 'Absent/Alert', parentPhone: '99212 XXXXX', feesStatus: 'Pending' },
    { id: 'ST-203', name: 'Rohan Deshmukh', grade: 'Grade 8-C', rollNo: 21, attendance: 92, status: 'Present', parentPhone: '98112 XXXXX', feesStatus: 'Paid' },
    { id: 'ST-204', name: 'Ananya Iyer', grade: 'Grade 10-A', rollNo: 1, attendance: 99, status: 'Present', parentPhone: '97401 XXXXX', feesStatus: 'Paid' },
    { id: 'ST-205', name: 'Ishaan Nair', grade: 'Grade 12-C', rollNo: 12, attendance: 82, status: 'Absent/Alert', parentPhone: '99661 XXXXX', feesStatus: 'Pending' },
  ]);

  // Interactive Fee State
  const [feesList, setFeesList] = useState<SandboxFee[]>([
    { id: 'F-401', student: 'Aarav Sharma', grade: 'Grade 9-A', invoiceId: 'INV-2026-092', amount: 18500, dueDate: '2026-06-15', status: 'Paid', method: 'UPI Pay' },
    { id: 'F-402', student: 'Diya Patel', grade: 'Grade 10-B', invoiceId: 'INV-2026-093', amount: 22000, dueDate: '2026-06-12', status: 'Pending', method: 'NetBanking' },
    { id: 'F-403', student: 'Rohan Deshmukh', grade: 'Grade 8-C', invoiceId: 'INV-2026-094', amount: 15000, dueDate: '2026-06-15', status: 'Paid', method: 'Debit Card' },
    { id: 'F-404', student: 'Ishaan Nair', grade: 'Grade 12-C', invoiceId: 'INV-2026-095', amount: 25000, dueDate: '2026-06-10', status: 'Pending', method: 'Cash Deposit' },
  ]);

  // Interactive GPS state
  const [buses, setBuses] = useState<SandboxBus[]>([
    { id: 'BUS-01', routeNo: 'Route 14 (East Ring)', driverName: 'Satish Kumar', status: 'Active', currentStop: 'Iscon Circle', totalStudents: 28, speed: 42 },
    { id: 'BUS-02', routeNo: 'Route 09 (West Valley)', driverName: 'Manpreet Singh', status: 'Active', currentStop: 'Sardar Patel Chowk', totalStudents: 32, speed: 51 },
    { id: 'BUS-03', routeNo: 'Route 22 (South Hub)', driverName: 'Gopal Raju', status: 'Delayed', currentStop: 'Gokuldham Gate', totalStudents: 19, speed: 8 },
  ]);

  // Interactive Broadcaster Form State
  const [broadcastTarget, setBroadcastTarget] = useState('All Parents');
  const [broadcastText, setBroadcastText] = useState('Respected Parents, Please note that the school will remain closed tomorrow, June 10, on account of heavy regional rainfall alerts. Online sessions will resume.');
  const [recentBroadcasts, setRecentBroadcasts] = useState<Array<{ time: string, target: string, text: string, type: string }>>([
    { time: '11:15 AM', target: 'Class 10 Parents', text: 'Pre-board CBSE exam schedules and mock test cards have been updated in the portal.', type: 'WhatsApp API' },
    { time: '09:00 AM', target: 'All Teachers', text: 'Monthly roster evaluation meeting slated for Room 402 at 02:00 PM today.', type: 'SMS Gateway' },
  ]);

  const [searchFilter, setSearchFilter] = useState('');
  const [logsList, setLogsList] = useState<string[]>(['System Ready. Initialized Admin Account Session #0912.']);

  // Log dispatch utility
  const addLog = (message: string) => {
    const time = new Date().toLocaleTimeString();
    setLogsList((prev) => [`[${time}] ${message}`, ...prev.slice(0, 4)]);
  };

  // Student Actions
  const toggleStudentStatus = (id: string) => {
    setStudentsList((prev) =>
      prev.map((st) => {
        if (st.id === id) {
          const newStatus = st.status === 'Present' ? 'Absent/Alert' : 'Present';
          addLog(`Toggled ${st.name} status to ${newStatus}. dispatching absentee SMS...`);
          return {
            ...st,
            status: newStatus,
            attendance: newStatus === 'Present' ? Math.min(st.attendance + 1, 100) : Math.max(st.attendance - 1, 0),
          };
        }
        return st;
      })
    );
  };

  const handleAddStudent = () => {
    const dummyNames = ['Karan Joshi', 'Nisha Sen', 'Preeti Rao', 'Samir Desi', 'Tanmay Roy'];
    const dummyGrades = ['Grade 9-B', 'Grade 11-A', 'Grade 8-B', 'Grade 12-A'];
    const randomName = dummyNames[Math.floor(Math.random() * dummyNames.length)];
    const randomGrade = dummyGrades[Math.floor(Math.random() * dummyGrades.length)];
    const studentId = `ST-${Math.floor(Math.random() * 100) + 220}`;

    const newStudent: SandboxStudent = {
      id: studentId,
      name: randomName,
      grade: randomGrade,
      rollNo: Math.floor(Math.random() * 40) + 1,
      attendance: 90 + Math.floor(Math.random() * 10),
      status: 'Present',
      parentPhone: '98221 XXXXX',
      feesStatus: Math.random() > 0.3 ? 'Paid' : 'Pending',
    };

    setStudentsList((prev) => [...prev, newStudent]);
    addLog(`Enrolled student ${randomName} into ${randomGrade} directory.`);
  };

  // Fee Actions
  const approveFeePayment = (id: string) => {
    setFeesList((prev) =>
      prev.map((f) => {
        if (f.id === id && f.status === 'Pending') {
          addLog(`Secured ₹${f.amount.toLocaleString()} for student ${f.student} via Instant UPI.`);
          
          // Also set corresponding student billing to Paid
          setStudentsList((stList) => 
            stList.map(st => st.name === f.student ? { ...st, feesStatus: 'Paid' } : st)
          );

          return { ...f, status: 'Paid', method: 'UPI Pay (Verified)' };
        }
        return f;
      })
    );
  };

  // Broadcast Circular Submit
  const handleBroadcastSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!broadcastText.trim()) return;

    const newBC = {
      time: 'Just Now',
      target: broadcastTarget,
      text: broadcastText,
      type: 'WhatsApp & SMS'
    };

    setRecentBroadcasts((prev) => [newBC, ...prev]);
    addLog(`Circular Broadcasted to ${broadcastTarget} via Official WS API.`);
    setBroadcastText('');
    alert(`⚡ Dettroin Broadcaster: Digital notice successfully dispatched to ${broadcastTarget} inbox!`);
  };

  // Calculate stats based on active database
  const totalStudents = studentsList.length;
  const absenteesCount = studentsList.filter(s => s.status === 'Absent/Alert').length;
  const averageAttendance = Math.round(studentsList.reduce((acc, current) => acc + current.attendance, 0) / studentsList.length);

  const totalInvoiced = feesList.reduce((sum, current) => sum + current.amount, 0);
  const collectedInvoiced = feesList.filter(f => f.status === 'Paid').reduce((sum, current) => sum + current.amount, 0);
  const collectionsRate = Math.round((collectedInvoiced / totalInvoiced) * 100);

  return (
    <section 
      id="sandbox" 
      className="bg-brand-red-light py-20 lg:py-24 px-6 lg:px-[56px] relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 select-none" id="demo-section-header">
          <p className="font-sans font-medium text-[10px] tracking-[2.5px] uppercase text-[#ff6a00] opacity-80 mb-3">
            LIVE INTERACTIVE PLAYGROUND
          </p>
          <h2 className="font-display font-semibold text-[34px] sm:text-[38px] text-[#D90707] tracking-[-0.15px] leading-[1.3] max-w-2xl">
            Experience our Operational Console in <span className="font-bold text-[#1a2a4a]">Real-Time</span>
          </h2>
          <div className="w-12 h-0.5 bg-brand-red mt-5 rounded-full" />
          <p className="font-sans font-normal text-gray-500 text-[15px] sm:text-[16px] max-w-xl mt-4">
            Test real-world tasks like managing parent notifications, matching fees, tracking buses, and toggling schedules on our interactive demo box.
          </p>
        </div>

        {/* Dashboard Console Container */}
        <div 
          className="bg-slate-950 border-1.5 border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 transform"
          style={{ 
            borderTop: '4px solid #3b82f6',
            boxShadow: '0 40px 80px rgba(15,23,42,0.4)'
          }}
          id="sandbox-dashboard-box"
        >
          {/* Console Header Bar */}
          <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 bg-[#ff5f57] rounded-full inline-block" />
              <span className="w-3.5 h-3.5 bg-[#febc2e] rounded-full inline-block" />
              <span className="w-3.5 h-3.5 bg-[#28c840] rounded-full inline-block" />
              <span className="font-mono text-xs text-slate-300 font-semibold ml-3 bg-slate-800 px-2.5 py-0.5 rounded">
                SECURE SSL
              </span>
            </div>
            <span className="font-sans font-semibold text-[13px] text-slate-400">
              Dettroin Core Enterprise — Client Dashboard v3.2
            </span>
          </div>

          {/* Console Inner Core Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
            
            {/* Left Control Column Stack */}
            <div className="md:col-span-3 bg-slate-950 border-r border-slate-800 p-4 space-y-1.5" id="sandbox-sidebar">
              <p className="font-sans font-bold text-[10px] text-slate-500 tracking-wider uppercase mb-3 px-3">
                ERP Core Panels
              </p>
              
              <button
                onClick={() => { setActiveTab('students'); setSearchFilter(''); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-sans font-semibold text-[13.5px] text-left transition-all relative ${
                  activeTab === 'students'
                    ? 'bg-blue-500/10 text-blue-400 border-l-4 border-l-blue-500'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}
              >
                <Users className="w-4 h-4 shrink-0" />
                <span>Student Directory</span>
              </button>

              <button
                onClick={() => { setActiveTab('fees'); setSearchFilter(''); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-sans font-semibold text-[13.5px] text-left transition-all relative ${
                  activeTab === 'fees'
                    ? 'bg-blue-500/10 text-blue-400 border-l-4 border-l-blue-500'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}
              >
                <CreditCard className="w-4 h-4 shrink-0" />
                <span>Unified Fees Ledger</span>
              </button>

              <button
                onClick={() => { setActiveTab('gps'); setSearchFilter(''); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-sans font-semibold text-[13.5px] text-left transition-all relative ${
                  activeTab === 'gps'
                    ? 'bg-blue-500/10 text-blue-400 border-l-4 border-l-blue-500'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}
              >
                <Map className="w-4 h-4 shrink-0" />
                <span>GPS Bus Monitoring</span>
              </button>

              <button
                onClick={() => { setActiveTab('broadcaster'); setSearchFilter(''); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-sans font-semibold text-[13.5px] text-left transition-all relative ${
                  activeTab === 'broadcaster'
                    ? 'bg-blue-500/10 text-blue-400 border-l-4 border-l-blue-500'
                    : 'text-slate-400 hover:bg-[#1e293b]/50 hover:text-slate-200'
                }`}
              >
                <Bell className="w-4 h-4 shrink-0" />
                <span>WhatsApp Notice Board</span>
              </button>

              <div className="pt-6 border-t border-slate-800/80 mt-6 px-3">
                <p className="font-sans font-bold text-[10px] text-slate-500 tracking-wider uppercase mb-2">
                  Interactive Console Logs
                </p>
                <div className="bg-slate-950 text-emerald-400/90 font-mono text-[10px] p-3 rounded-lg h-[110px] overflow-y-auto space-y-1.5 leading-relaxed selection:bg-brand-red border border-slate-800/60">
                  {logsList.map((log, index) => (
                    <div key={index} className="truncate">{log}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Display Console Content */}
            <div className="md:col-span-9 p-6 sm:p-8 flex flex-col justify-between bg-slate-900" id="sandbox-center-panel">
              
              {/* Dynamic Sub-header or Stats Panel depending on tab */}
              <div className="w-full">
                
                {/* 1. Student Directory Roster View */}
                {activeTab === 'students' && (
                  <div className="space-y-6">
                    {/* Interactive Stat Cards Row */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-slate-950 border border-slate-850 p-4 rounded-xl">
                        <span className="font-sans text-[11px] uppercase tracking-wider text-slate-400 font-medium">Total Roster</span>
                        <p className="font-display font-black text-2xl text-white mt-1">{totalStudents}</p>
                      </div>
                      <div className="bg-slate-950 border border-slate-850 p-4 rounded-xl">
                        <span className="font-sans text-[11px] uppercase tracking-wider text-slate-400 font-medium">Absentees Checked</span>
                        <p className="font-display font-black text-2xl text-rose-400 mt-1">{absenteesCount}</p>
                      </div>
                      <div className="bg-slate-950 border border-slate-850 p-4 rounded-xl">
                        <span className="font-sans text-[11px] uppercase tracking-wider text-slate-400 font-medium">Avg Attendance Rate</span>
                        <p className="font-display font-black text-2xl text-emerald-400 mt-1">{averageAttendance}%</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                      <h4 className="font-display font-bold text-lg text-white">Active Enrolled Students</h4>
                      <button
                        onClick={handleAddStudent}
                        className="flex items-center gap-1.5 bg-brand-red text-white py-1.5 px-3.5 rounded-lg font-sans font-bold text-[12px] hover:bg-brand-red-hover active:scale-95 transition-all self-start sm:self-auto"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        Quick Admission Enroll
                      </button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto border border-slate-800 rounded-xl">
                      <table className="w-full text-left font-sans text-xs select-none">
                        <thead>
                          <tr className="bg-slate-950 text-slate-400 font-medium uppercase border-b border-slate-800">
                            <th className="p-3">Admit ID</th>
                            <th className="p-3">Student Name</th>
                            <th className="p-3">Grade Class</th>
                            <th className="p-3">Attendance %</th>
                            <th className="p-3">Status</th>
                            <th className="p-3 text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                          {studentsList.map((st) => (
                            <tr key={st.id} className="hover:bg-slate-800 transition-colors">
                              <td className="p-3 font-mono text-slate-400 font-bold">{st.id}</td>
                              <td className="p-3 text-white font-bold">{st.name}</td>
                              <td className="p-3 text-slate-300 font-medium">{st.grade}</td>
                              <td className="p-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-12 bg-slate-850 h-1.5 rounded-full overflow-hidden">
                                    <div 
                                      className={`h-full rounded-full ${st.attendance >= 90 ? 'bg-emerald-500' : st.attendance >= 80 ? 'bg-amber-500' : 'bg-brand-red'}`}
                                      style={{ width: `${st.attendance}%` }}
                                    />
                                  </div>
                                  <span className="font-bold text-slate-300">{st.attendance}%</span>
                                </div>
                              </td>
                              <td className="p-3">
                                <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                                  st.status === 'Present' 
                                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/10' 
                                    : 'bg-rose-500/15 text-rose-400 border border-rose-500/10'
                                }`}>
                                  {st.status}
                                </span>
                              </td>
                              <td className="p-3 text-center">
                                <button
                                  onClick={() => toggleStudentStatus(st.id)}
                                  className="border border-slate-700 text-slate-300 hover:border-brand-red py-1 px-2.5 rounded hover:bg-brand-red hover:text-white transition-all font-semibold text-[10px]"
                                >
                                  Toggle Presentee
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 2. Fees Ledger View */}
                {activeTab === 'fees' && (
                  <div className="space-y-6">
                    {/* Interactive Stat Cards Row */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-slate-950 border border-slate-850 p-4 rounded-xl">
                        <span className="font-sans text-[11px] uppercase tracking-wider text-slate-400 font-medium">Total Invoiced</span>
                        <p className="font-display font-black text-2xl text-white mt-1">₹{totalInvoiced.toLocaleString()}</p>
                      </div>
                      <div className="bg-slate-950 border border-slate-850 p-4 rounded-xl">
                        <span className="font-sans text-[11px] uppercase tracking-wider text-slate-400 font-medium">Collected Online</span>
                        <p className="font-display font-black text-2xl text-emerald-400 mt-1">₹{collectedInvoiced.toLocaleString()}</p>
                      </div>
                      <div className="bg-slate-950 border border-slate-850 p-4 rounded-xl">
                        <span className="font-sans text-[11px] uppercase tracking-wider text-slate-400 font-medium">Collection Progress</span>
                        <p className="font-display font-black text-2xl text-amber-400 mt-1">{collectionsRate}%</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                      <h4 className="font-display font-bold text-lg text-white">Pending & Settled Invoices</h4>
                      <p className="font-sans text-[11.5px] text-slate-400 font-medium">Click "Approve" to simulate a real-time parent mobile payout</p>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto border border-slate-800 rounded-xl">
                      <table className="w-full text-left font-sans text-xs select-none">
                        <thead>
                          <tr className="bg-slate-950 text-slate-400 font-medium uppercase border-b border-slate-800">
                            <th className="p-3">Invoice ID</th>
                            <th className="p-3">Student Name</th>
                            <th className="p-3">Amount Due</th>
                            <th className="p-3">Due Date</th>
                            <th className="p-3">Channel Class</th>
                            <th className="p-3">Status</th>
                            <th className="p-3 text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                          {feesList.map((f) => (
                            <tr key={f.id} className="hover:bg-slate-800 transition-colors">
                              <td className="p-3 font-mono text-slate-400 font-bold">{f.invoiceId}</td>
                              <td className="p-3 text-white font-bold">{f.student}</td>
                              <td className="p-3 font-semibold text-slate-100">₹{f.amount.toLocaleString()}</td>
                              <td className="p-3 text-slate-350 font-medium">{f.dueDate}</td>
                              <td className="p-3 text-slate-400 font-mono font-medium">{f.method}</td>
                              <td className="p-3">
                                <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                                  f.status === 'Paid' 
                                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/10' 
                                    : 'bg-rose-500/15 text-rose-400 border border-rose-500/10'
                                }`}>
                                  {f.status}
                                </span>
                              </td>
                              <td className="p-3 text-center">
                                {f.status === 'Pending' ? (
                                  <button
                                    onClick={() => approveFeePayment(f.id)}
                                    className="bg-emerald-500 text-white hover:bg-[#16a34a] py-1 px-3 rounded font-bold text-[10px] active:scale-95 transition-all shadow-md shadow-emerald-500/10"
                                  >
                                    Approve Pay
                                  </button>
                                ) : (
                                  <span className="text-emerald-400 font-bold text-[10.5px]">Receipt Emailed</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 3. GPS Bus Monitoring */}
                {activeTab === 'gps' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-950 border border-slate-850 p-4 rounded-xl flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red">
                          <Bus className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-sans text-[11px] uppercase tracking-wider text-slate-400 font-medium block">Total Fleet Active</span>
                          <p className="font-display font-black text-xl text-white mt-0.5">3 Active Buses</p>
                        </div>
                      </div>
                      <div className="bg-slate-950 border border-slate-850 p-4 rounded-xl flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-sans text-[11px] uppercase tracking-wider text-slate-400 font-medium block">Verified Live Waypoints</span>
                          <p className="font-display font-black text-xl text-amber-400 mt-0.5">24 Scanned Gates</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <h4 className="font-display font-bold text-lg text-white">School Bus GPS Tracking Feed</h4>
                      <span className="inline-flex items-center gap-1 bg-emerald-500/15 border border-emerald-500/25 text-emerald-450 px-2 py-0.5 rounded-full text-[10px] font-bold">
                        <span className="w-1.5 h-1.5 bg-[#28c840] rounded-full animate-pulse" /> Live Telemetry Feed
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {buses.map((bus) => (
                        <div 
                          key={bus.id} 
                          className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:bg-slate-800"
                        >
                          <div className="flex items-start gap-3">
                            <span className="font-bold text-slate-300 font-mono text-[11px] bg-slate-800 px-2 py-0.5 rounded mt-0.5 shrink-0 block">{bus.id}</span>
                            <div>
                              <p className="font-display font-bold text-white text-[14px] leading-tight">{bus.routeNo}</p>
                              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-[11.5px] font-sans text-slate-400 font-medium">
                                <span className="text-slate-300">Operator: <strong className="font-semibold">{bus.driverName}</strong></span>
                                <span>•</span>
                                <span>Recent Mark: <strong className="text-brand-red font-semibold">{bus.currentStop}</strong></span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-6 self-end sm:self-auto shrink-0">
                            <div className="text-right">
                              <p className="font-sans text-[11.5px] text-slate-400 leading-none">Status</p>
                              <span className={`inline-block font-sans font-bold text-[11px] mt-1.5 ${
                                bus.status === 'Active' ? 'text-emerald-400' : 'text-rose-450'
                              }`}>
                                {bus.status === 'Active' ? 'MOVING' : 'DELAYED 12M'}
                              </span>
                            </div>
                            <div className="text-right">
                              <p className="font-sans text-[11.5px] text-slate-400 leading-none">Boarding Roll</p>
                              <p className="font-display font-black text-white text-sm mt-1">{bus.totalStudents} Students</p>
                            </div>
                            <div className="text-right w-16">
                              <p className="font-sans text-[11.5px] text-slate-400 leading-none">Speed</p>
                              <p className="font-mono font-bold text-[13px] text-slate-300 mt-1">{bus.speed} km/h</p>
                            </div>
                            <button
                              onClick={() => {
                                setBuses(prev => 
                                  prev.map(b => b.id === bus.id ? { ...b, speed: Math.floor(Math.random() * 20) + 35, currentStop: 'Main Academy Terminal Gateway' } : b)
                                );
                                addLog(`Requested instant route telemetry update for ${bus.id}.`);
                              }}
                              className="bg-slate-800 p-2 rounded-lg hover:bg-brand-red hover:text-white transition-colors text-slate-400 focus:outline-none cursor-pointer"
                              title="Force Route Ping"
                            >
                              <Map className="w-4 h-4 text-current" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Notice circular broadcasting View */}
                {activeTab === 'broadcaster' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <h4 className="font-display font-bold text-lg text-white font-semibold">WhatsApp Circular Broadcast Console</h4>
                      <p className="font-sans text-[11px] text-slate-400 font-semibold uppercase tracking-wider">SMS / WA Channel Active</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      
                      {/* Left: Input Form form */}
                      <form onSubmit={handleBroadcastSubmit} className="lg:col-span-7 bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-4">
                        <div id="form-inp-target">
                          <label className="font-sans font-bold text-[11px] text-slate-400 uppercase tracking-wider block mb-1.5">Target Core Parameters</label>
                          <select 
                            value={broadcastTarget}
                            onChange={(e) => setBroadcastTarget(e.target.value)}
                            className="bg-slate-950 border border-slate-700 text-slate-200 rounded-lg p-2.5 w-full font-sans text-xs focus:ring focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none"
                          >
                            <option value="All Parents">All Parents & Guardians (500+ contacts)</option>
                            <option value="Grade 10 & 12 Boards">Board Examinees Students Parents (120+ contacts)</option>
                            <option value="All Academic Roster Teachers">All Educators Staff (40+ contacts)</option>
                            <option value="Transport Bus Passengers">Route Bus Passengers Parents (80+ contacts)</option>
                          </select>
                        </div>

                        <div id="form-inp-text">
                          <label className="font-sans font-bold text-[11px] text-slate-400 uppercase tracking-wider block mb-1.5">Circular Content Notice Message (WhatsApp Template Format)</label>
                          <textarea
                            rows={4}
                            value={broadcastText}
                            onChange={(e) => setBroadcastText(e.target.value)}
                            placeholder="Enter announcement text to dispatch..."
                            className="bg-slate-950 border border-slate-700 text-slate-200 rounded-lg p-3 w-full font-sans text-xs leading-relaxed focus:ring focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none"
                            required
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-brand-red text-white py-3 rounded-lg font-sans font-bold text-xs hover:bg-brand-red-hover active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md shadow-brand-red/10 cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5" />
                          Send Broadcast Out Now
                        </button>
                      </form>

                      {/* Right: Broadcast Feed */}
                      <div className="lg:col-span-5 space-y-3">
                        <p className="font-sans font-bold text-[11px] text-slate-400 tracking-wider uppercase">Recent Dispatch Logs (Live Status)</p>
                        <div className="space-y-3 h-[240px] overflow-y-auto pr-1">
                          {recentBroadcasts.map((bc, idx) => (
                            <div key={idx} className="bg-slate-950 border border-slate-800 p-3.5 rounded-lg shadow-sm space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono text-[9px] font-bold">
                                  {bc.type}
                                </span>
                                <span className="text-slate-400 font-sans text-[10px] font-medium">{bc.time}</span>
                              </div>
                              <p className="font-sans text-[11px] text-slate-200 leading-relaxed italic">
                                "{bc.text}"
                              </p>
                              <div className="text-[10px] font-sans font-medium text-slate-400">
                                Target: <span className="text-blue-400 font-bold">{bc.target}</span> • Delivery Rate: <span className="text-emerald-400 font-bold">100% Success</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
