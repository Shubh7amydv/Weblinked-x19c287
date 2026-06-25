import React, { useState } from 'react';
import { 
  Users, 
  CreditCard, 
  Map, 
  Bell, 
  Plus, 
  TrendingUp, 
  CheckCircle,
  Send,
  Bus,
  MapPin,
  CheckSquare,
  BarChart3,
  Minus,
  Square,
  X,
  Activity
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
  const [activeTab, setActiveTab] = useState<'analytics' | 'students' | 'fees' | 'gps' | 'broadcaster'>('analytics');

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

        {/* Dashboard Console Container (Windows re-themed, White themed screen) */}
        <div 
          className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 transform shadow-2xl shadow-slate-200"
          id="sandbox-dashboard-box"
        >
          {/* Windows Title Bar */}
          <div className="bg-slate-100 border-b border-slate-200 pl-6 pr-0 py-0 flex items-center justify-between select-none h-10">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="font-sans font-semibold text-[12.5px] text-slate-700">
                Dettroin Core Enterprise — Client Dashboard v3.2
              </span>
              <span className="font-mono text-[9px] text-emerald-700 font-bold ml-2 bg-emerald-100/60 border border-emerald-250 px-2 py-0.5 rounded">
                SECURE SSL
              </span>
            </div>
            
            {/* Windows System Control Buttons on Right */}
            <div className="flex items-center">
              <button className="h-10 w-12 flex items-center justify-center hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer">
                <Minus className="w-3.5 h-3.5" />
              </button>
              <button className="h-10 w-12 flex items-center justify-center hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer">
                <Square className="w-3 h-3" />
              </button>
              <button className="h-10 w-12 flex items-center justify-center hover:bg-rose-600 hover:text-white text-slate-500 transition-colors cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Console Inner Core Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
            
            {/* Left Control Column Stack */}
            <div className="md:col-span-3 bg-slate-50 border-r border-slate-200 p-4 space-y-1.5" id="sandbox-sidebar">
              <p className="font-sans font-bold text-[10px] text-slate-400 tracking-wider uppercase mb-3 px-3">
                ERP Core Panels
              </p>
              
              <button
                onClick={() => { setActiveTab('analytics'); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-sans font-semibold text-[13.5px] text-left transition-all relative cursor-pointer ${
                  activeTab === 'analytics'
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-l-blue-600 font-bold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                <BarChart3 className="w-4 h-4 shrink-0" />
                <span>Dashboard Analytics</span>
              </button>

              <button
                onClick={() => { setActiveTab('students'); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-sans font-semibold text-[13.5px] text-left transition-all relative cursor-pointer ${
                  activeTab === 'students'
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-l-blue-600 font-bold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                <Users className="w-4 h-4 shrink-0" />
                <span>Student Directory</span>
              </button>

              <button
                onClick={() => { setActiveTab('fees'); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-sans font-semibold text-[13.5px] text-left transition-all relative cursor-pointer ${
                  activeTab === 'fees'
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-l-blue-600 font-bold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                <CreditCard className="w-4 h-4 shrink-0" />
                <span>Unified Fees Ledger</span>
              </button>

              <button
                onClick={() => { setActiveTab('gps'); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-sans font-semibold text-[13.5px] text-left transition-all relative cursor-pointer ${
                  activeTab === 'gps'
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-l-blue-600 font-bold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                <Map className="w-4 h-4 shrink-0" />
                <span>GPS Bus Monitoring</span>
              </button>

              <button
                onClick={() => { setActiveTab('broadcaster'); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-sans font-semibold text-[13.5px] text-left transition-all relative cursor-pointer ${
                  activeTab === 'broadcaster'
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-l-blue-600 font-bold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                <Bell className="w-4 h-4 shrink-0" />
                <span>WhatsApp Notice Board</span>
              </button>

              <div className="pt-6 border-t border-slate-200 mt-6 px-3">
                <p className="font-sans font-bold text-[10px] text-slate-400 tracking-wider uppercase mb-2">
                  Interactive Console Logs
                </p>
                <div className="bg-white text-slate-700 font-mono text-[10px] p-3 rounded-lg h-[110px] overflow-y-auto space-y-1.5 leading-relaxed selection:bg-brand-red border border-slate-200 shadow-inner">
                  {logsList.map((log, index) => (
                    <div key={index} className="truncate">{log}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Display Console Content */}
            <div className="md:col-span-9 p-6 sm:p-8 flex flex-col justify-between bg-white" id="sandbox-center-panel">
              
              <div className="w-full">
                
                {/* 1. Dashboard Analytics View (with SVG graphs) */}
                {activeTab === 'analytics' && (
                  <div className="space-y-6">
                    {/* Key Stats Cards Row */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-medium block">Total Roster</span>
                          <p className="font-display font-black text-xl text-slate-900 mt-0.5">{totalStudents}</p>
                        </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-medium block">Avg Attendance</span>
                          <p className="font-display font-black text-xl text-emerald-600 mt-0.5">{averageAttendance}%</p>
                        </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                          <CreditCard className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-medium block">Fee Collected</span>
                          <p className="font-display font-black text-xl text-slate-900 mt-0.5">{collectionsRate}%</p>
                        </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                          <Bus className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-medium block">Active Fleet</span>
                          <p className="font-display font-black text-xl text-slate-900 mt-0.5">3 Routes</p>
                        </div>
                      </div>
                    </div>

                    {/* SVG Graphs Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      
                      {/* Attendance Area Chart */}
                      <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h5 className="font-display font-bold text-sm text-slate-800">Weekly Attendance Trend</h5>
                            <p className="font-sans text-xs text-slate-500">Live operational percentage updates</p>
                          </div>
                          <span className="bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> +1.2%
                          </span>
                        </div>
                        
                        <div className="w-full">
                          <svg className="w-full" viewBox="0 0 400 160" preserveAspectRatio="xMidYMid meet">
                            <defs>
                              <linearGradient id="attendance-grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            
                            {/* Grid Lines */}
                            <line x1="40" y1="20" x2="380" y2="20" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />
                            <line x1="40" y1="70" x2="380" y2="70" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />
                            <line x1="40" y1="120" x2="380" y2="120" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />
                            <line x1="40" y1="140" x2="380" y2="140" stroke="#cbd5e1" strokeWidth="1.5" />
                            
                            {/* Y Axis Labels */}
                            <text x="12" y="24" className="fill-slate-400 font-mono text-[9px] font-semibold">100%</text>
                            <text x="17" y="74" className="fill-slate-400 font-mono text-[9px] font-semibold">90%</text>
                            <text x="17" y="124" className="fill-slate-400 font-mono text-[9px] font-semibold">80%</text>

                            {/* X Axis Labels */}
                            <text x="40" y="154" textAnchor="middle" className="fill-slate-500 font-sans text-[10px] font-bold">Mon</text>
                            <text x="120" y="154" textAnchor="middle" className="fill-slate-500 font-sans text-[10px] font-bold">Tue</text>
                            <text x="200" y="154" textAnchor="middle" className="fill-slate-500 font-sans text-[10px] font-bold">Wed</text>
                            <text x="280" y="154" textAnchor="middle" className="fill-slate-500 font-sans text-[10px] font-bold">Thu</text>
                            <text x="360" y="154" textAnchor="middle" className="fill-slate-500 font-sans text-[10px] font-bold">Fri</text>

                            {/* Area Path */}
                            <path 
                              d="M 40 60 L 120 45 L 200 70 L 280 30 L 360 40 L 360 140 L 40 140 Z" 
                              fill="url(#attendance-grad)" 
                            />
                            
                            {/* Line Path */}
                            <path 
                              d="M 40 60 L 120 45 L 200 70 L 280 30 L 360 40" 
                              fill="none" 
                              stroke="#3b82f6" 
                              strokeWidth="2.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                            />

                            {/* Data Dots */}
                            <circle cx="40" cy="60" r="4" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5" />
                            <circle cx="120" cy="45" r="4" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5" />
                            <circle cx="200" cy="70" r="4" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5" />
                            <circle cx="280" cy="30" r="4" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5" />
                            <circle cx="360" cy="40" r="4" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5" />

                            {/* Dot values */}
                            <text x="40" y="48" textAnchor="middle" className="fill-blue-700 font-mono text-[9px] font-bold">92%</text>
                            <text x="120" y="33" textAnchor="middle" className="fill-blue-700 font-mono text-[9px] font-bold">95%</text>
                            <text x="200" y="58" textAnchor="middle" className="fill-blue-700 font-mono text-[9px] font-bold">90%</text>
                            <text x="280" y="18" textAnchor="middle" className="fill-blue-700 font-mono text-[9px] font-bold">98%</text>
                            <text x="360" y="28" textAnchor="middle" className="fill-blue-700 font-mono text-[9px] font-bold">96%</text>
                          </svg>
                        </div>
                      </div>

                      {/* Fees Bar Chart */}
                      <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h5 className="font-display font-bold text-sm text-slate-800">Dues Recovery Tracker</h5>
                            <p className="font-sans text-xs text-slate-500">Collected vs Pending invoices</p>
                          </div>
                          <div className="flex items-center gap-3 text-[10px] font-bold">
                            <span className="flex items-center gap-1 text-slate-650">
                              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-sm" /> Collected
                            </span>
                            <span className="flex items-center gap-1 text-slate-650">
                              <span className="w-2.5 h-2.5 bg-rose-400 rounded-sm" /> Pending
                            </span>
                          </div>
                        </div>

                        <div className="w-full">
                          <svg className="w-full" viewBox="0 0 400 160" preserveAspectRatio="xMidYMid meet">
                            {/* Grid Lines */}
                            <line x1="45" y1="20" x2="380" y2="20" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />
                            <line x1="45" y1="75" x2="380" y2="75" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />
                            <line x1="45" y1="130" x2="380" y2="130" stroke="#cbd5e1" strokeWidth="1.5" />

                            {/* Y Axis Labels */}
                            <text x="10" y="24" className="fill-slate-400 font-mono text-[9px] font-semibold">₹150k</text>
                            <text x="15" y="79" className="fill-slate-400 font-mono text-[9px] font-semibold">₹75k</text>
                            <text x="25" y="134" className="fill-slate-400 font-mono text-[9px] font-semibold">0</text>

                            {/* X Axis Labels */}
                            <text x="100" y="146" textAnchor="middle" className="fill-slate-500 font-sans text-[10px] font-bold">April</text>
                            <text x="210" y="146" textAnchor="middle" className="fill-slate-500 font-sans text-[10px] font-bold">May</text>
                            <text x="320" y="146" textAnchor="middle" className="fill-slate-500 font-sans text-[10px] font-bold">June</text>

                            {/* April Bars */}
                            <rect x="80" y="75" width="16" height="55" rx="3" fill="#10b981" />
                            <text x="88" y="70" textAnchor="middle" className="fill-slate-650 font-mono text-[8.5px] font-bold">₹80k</text>
                            <rect x="102" y="116" width="16" height="14" rx="3" fill="#fb7185" />
                            <text x="110" y="111" textAnchor="middle" className="fill-slate-650 font-mono text-[8.5px] font-bold">₹20k</text>

                            {/* May Bars */}
                            <rect x="190" y="48" width="16" height="82" rx="3" fill="#10b981" />
                            <text x="198" y="43" textAnchor="middle" className="fill-slate-650 font-mono text-[8.5px] font-bold">₹120k</text>
                            <rect x="212" y="123" width="16" height="7" rx="3" fill="#fb7185" />
                            <text x="220" y="118" textAnchor="middle" className="fill-slate-650 font-mono text-[8.5px] font-bold">₹10k</text>

                            {/* June Bars */}
                            <rect x="300" y="65" width="16" height="65" rx="3" fill="#10b981" />
                            <text x="308" y="60" textAnchor="middle" className="fill-slate-650 font-mono text-[8.5px] font-bold">₹95k</text>
                            <rect x="322" y="103" width="16" height="27" rx="3" fill="#fb7185" />
                            <text x="330" y="98" textAnchor="middle" className="fill-slate-650 font-mono text-[8.5px] font-bold">₹40k</text>
                          </svg>
                        </div>
                      </div>

                    </div>

                    {/* Bottom Telemetry and Broadcast Summary Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      
                      {/* Donut Fleet status */}
                      <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl shadow-sm lg:col-span-1 flex flex-col justify-between">
                        <div>
                          <h5 className="font-display font-bold text-sm text-slate-800 mb-2">Fleet Telemetry Status</h5>
                          <p className="font-sans text-xs text-slate-500 mb-4">Real-time school bus connection rates</p>
                        </div>
                        
                        <div className="flex items-center justify-center py-2">
                          <div className="relative w-[110px] h-[110px]">
                            <svg width="110" height="110" viewBox="0 0 110 110" className="transform -rotate-90">
                              <circle cx="55" cy="55" r="40" fill="transparent" stroke="#e2e8f0" strokeWidth="12" />
                              <circle cx="55" cy="55" r="40" fill="transparent" stroke="#10b981" strokeWidth="12" strokeDasharray="188.5 251.3" strokeDashoffset="0" strokeLinecap="round" />
                              <circle cx="55" cy="55" r="40" fill="transparent" stroke="#f43f5e" strokeWidth="12" strokeDasharray="62.8 251.3" strokeDashoffset="-188.5" strokeLinecap="round" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                              <span className="font-display font-black text-lg text-slate-800 leading-none">4</span>
                              <span className="font-sans text-[9px] uppercase tracking-wider text-slate-500 font-bold mt-0.5">Buses</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-around text-[10.5px] font-bold mt-3">
                          <span className="flex items-center gap-1.5 text-slate-700">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" /> Active (3)
                          </span>
                          <span className="flex items-center gap-1.5 text-slate-700">
                            <span className="w-2 h-2 rounded-full bg-rose-500" /> Delayed (1)
                          </span>
                        </div>
                      </div>

                      {/* Broadcast Feed Overview */}
                      <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl shadow-sm lg:col-span-2 space-y-3">
                        <h5 className="font-display font-bold text-sm text-slate-800">Recent Broadcast Announcements</h5>
                        <div className="space-y-3">
                          {recentBroadcasts.slice(0, 2).map((bc, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 p-3 rounded-lg flex justify-between items-start gap-3 shadow-sm">
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 rounded-full font-mono text-[9px] font-bold">
                                    {bc.type}
                                  </span>
                                  <span className="text-[10px] font-sans text-slate-400 font-medium">{bc.time}</span>
                                </div>
                                <p className="font-sans text-[11px] text-slate-600 italic leading-relaxed">
                                  "{bc.text}"
                                </p>
                                <div className="text-[9.5px] font-sans font-semibold text-slate-500">
                                  Target: <span className="text-blue-600 font-bold">{bc.target}</span>
                                </div>
                              </div>
                              <span className="text-emerald-550 text-[10px] font-bold flex items-center gap-1 mt-0.5 select-none shrink-0">
                                <CheckSquare className="w-3.5 h-3.5" /> Dispatched
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* 2. Student Directory Roster View */}
                {activeTab === 'students' && (
                  <div className="space-y-6">
                    {/* Interactive Stat Cards Row */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm">
                        <span className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-medium">Total Roster</span>
                        <p className="font-display font-black text-2xl text-slate-900 mt-1">{totalStudents}</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm">
                        <span className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-medium">Absentees Checked</span>
                        <p className="font-display font-black text-2xl text-rose-600 mt-1">{absenteesCount}</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm">
                        <span className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-medium">Avg Attendance Rate</span>
                        <p className="font-display font-black text-2xl text-emerald-600 mt-1">{averageAttendance}%</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                      <h4 className="font-display font-bold text-lg text-slate-900">Active Enrolled Students</h4>
                      <button
                        onClick={handleAddStudent}
                        className="flex items-center gap-1.5 bg-brand-red text-white py-1.5 px-3.5 rounded-lg font-sans font-bold text-[12px] hover:bg-brand-red-hover active:scale-95 transition-all self-start sm:self-auto cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        Quick Admission Enroll
                      </button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white">
                      <table className="w-full text-left font-sans text-xs select-none">
                        <thead>
                          <tr className="bg-slate-50 text-slate-500 font-medium uppercase border-b border-slate-200">
                            <th className="p-3">Admit ID</th>
                            <th className="p-3">Student Name</th>
                            <th className="p-3">Grade Class</th>
                            <th className="p-3">Attendance %</th>
                            <th className="p-3">Status</th>
                            <th className="p-3 text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {studentsList.map((st) => (
                            <tr key={st.id} className="hover:bg-slate-50 transition-colors">
                              <td className="p-3 font-mono text-slate-500 font-bold">{st.id}</td>
                              <td className="p-3 text-slate-900 font-bold">{st.name}</td>
                              <td className="p-3 text-slate-600 font-medium">{st.grade}</td>
                              <td className="p-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-12 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                    <div 
                                      className={`h-full rounded-full ${st.attendance >= 90 ? 'bg-emerald-500' : st.attendance >= 80 ? 'bg-amber-500' : 'bg-brand-red'}`}
                                      style={{ width: `${st.attendance}%` }}
                                    />
                                  </div>
                                  <span className="font-bold text-slate-700">{st.attendance}%</span>
                                </div>
                              </td>
                              <td className="p-3">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  st.status === 'Present' 
                                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                                    : 'bg-rose-50 text-rose-600 border border-rose-200'
                                }`}>
                                  {st.status}
                                </span>
                              </td>
                              <td className="p-3 text-center">
                                <button
                                  onClick={() => toggleStudentStatus(st.id)}
                                  className="border border-slate-200 text-slate-650 hover:border-brand-red py-1 px-2.5 rounded hover:bg-brand-red hover:text-white transition-all font-semibold text-[10px] cursor-pointer"
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

                {/* 3. Fees Ledger View */}
                {activeTab === 'fees' && (
                  <div className="space-y-6">
                    {/* Interactive Stat Cards Row */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm">
                        <span className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-medium">Total Invoiced</span>
                        <p className="font-display font-black text-2xl text-slate-900 mt-1">₹{totalInvoiced.toLocaleString()}</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm">
                        <span className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-medium">Collected Online</span>
                        <p className="font-display font-black text-2xl text-emerald-600 mt-1">₹{collectedInvoiced.toLocaleString()}</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm">
                        <span className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-medium">Collection Progress</span>
                        <p className="font-display font-black text-2xl text-amber-600 mt-1">{collectionsRate}%</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                      <h4 className="font-display font-bold text-lg text-slate-900">Pending & Settled Invoices</h4>
                      <p className="font-sans text-[11.5px] text-slate-500 font-medium">Click "Approve" to simulate a real-time parent mobile payout</p>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white">
                      <table className="w-full text-left font-sans text-xs select-none">
                        <thead>
                          <tr className="bg-slate-50 text-slate-500 font-medium uppercase border-b border-slate-200">
                            <th className="p-3">Invoice ID</th>
                            <th className="p-3">Student Name</th>
                            <th className="p-3">Amount Due</th>
                            <th className="p-3">Due Date</th>
                            <th className="p-3">Channel Class</th>
                            <th className="p-3">Status</th>
                            <th className="p-3 text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {feesList.map((f) => (
                            <tr key={f.id} className="hover:bg-slate-50 transition-colors">
                              <td className="p-3 font-mono text-slate-500 font-bold">{f.invoiceId}</td>
                              <td className="p-3 text-slate-900 font-bold">{f.student}</td>
                              <td className="p-3 font-semibold text-slate-800">₹{f.amount.toLocaleString()}</td>
                              <td className="p-3 text-slate-500 font-medium">{f.dueDate}</td>
                              <td className="p-3 text-slate-500 font-mono font-medium">{f.method}</td>
                              <td className="p-3">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  f.status === 'Paid' 
                                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                                    : 'bg-rose-50 text-rose-600 border border-rose-200'
                                }`}>
                                  {f.status}
                                </span>
                              </td>
                              <td className="p-3 text-center">
                                {f.status === 'Pending' ? (
                                  <button
                                    onClick={() => approveFeePayment(f.id)}
                                    className="bg-emerald-650 text-white hover:bg-emerald-700 py-1 px-3 rounded font-bold text-[10px] active:scale-95 transition-all shadow-md shadow-emerald-500/10 cursor-pointer"
                                  >
                                    Approve Pay
                                  </button>
                                ) : (
                                  <span className="text-emerald-600 font-bold text-[10.5px]">Receipt Emailed</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 4. GPS Bus Monitoring */}
                {activeTab === 'gps' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                        <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red">
                          <Bus className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-medium block">Total Fleet Active</span>
                          <p className="font-display font-black text-xl text-slate-900 mt-0.5">3 Active Buses</p>
                        </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-medium block">Verified Live Waypoints</span>
                          <p className="font-display font-black text-xl text-amber-600 mt-0.5">24 Scanned Gates</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <h4 className="font-display font-bold text-lg text-slate-900">School Bus GPS Tracking Feed</h4>
                      <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-bold">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Live Telemetry Feed
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {buses.map((bus) => (
                        <div 
                          key={bus.id} 
                          className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:bg-slate-100/50"
                        >
                          <div className="flex items-start gap-3">
                            <span className="font-bold text-slate-650 font-mono text-[11px] bg-slate-200 px-2 py-0.5 rounded mt-0.5 shrink-0 block">{bus.id}</span>
                            <div>
                              <p className="font-display font-bold text-slate-800 text-[14px] leading-tight">{bus.routeNo}</p>
                              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-[11.5px] font-sans text-slate-500 font-medium">
                                <span className="text-slate-650">Operator: <strong className="font-semibold">{bus.driverName}</strong></span>
                                <span>•</span>
                                <span>Recent Mark: <strong className="text-brand-red font-semibold">{bus.currentStop}</strong></span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-6 self-end sm:self-auto shrink-0">
                            <div className="text-right">
                              <p className="font-sans text-[11.5px] text-slate-500 leading-none">Status</p>
                              <span className={`inline-block font-sans font-bold text-[11px] mt-1.5 ${
                                bus.status === 'Active' ? 'text-emerald-600' : 'text-rose-650'
                              }`}>
                                {bus.status === 'Active' ? 'MOVING' : 'DELAYED 12M'}
                              </span>
                            </div>
                            <div className="text-right">
                              <p className="font-sans text-[11.5px] text-slate-500 leading-none">Boarding Roll</p>
                              <p className="font-display font-black text-slate-800 text-sm mt-1">{bus.totalStudents} Students</p>
                            </div>
                            <div className="text-right w-16">
                              <p className="font-sans text-[11.5px] text-slate-500 leading-none">Speed</p>
                              <p className="font-mono font-bold text-[13px] text-slate-650 mt-1">{bus.speed} km/h</p>
                            </div>
                            <button
                              onClick={() => {
                                setBuses(prev => 
                                  prev.map(b => b.id === bus.id ? { ...b, speed: Math.floor(Math.random() * 20) + 35, currentStop: 'Main Academy Terminal Gateway' } : b)
                                );
                                addLog(`Requested instant route telemetry update for ${bus.id}.`);
                              }}
                              className="bg-slate-200 p-2 rounded-lg hover:bg-brand-red hover:text-white transition-colors text-slate-600 focus:outline-none cursor-pointer"
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

                {/* 5. Notice circular broadcasting View */}
                {activeTab === 'broadcaster' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-250">
                      <h4 className="font-display font-bold text-lg text-slate-900 font-semibold">WhatsApp Circular Broadcast Console</h4>
                      <p className="font-sans text-[11px] text-slate-400 font-semibold uppercase tracking-wider">SMS / WA Channel Active</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      
                      {/* Left: Input Form */}
                      <form onSubmit={handleBroadcastSubmit} className="lg:col-span-7 bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4">
                        <div id="form-inp-target">
                          <label className="font-sans font-bold text-[11px] text-slate-500 uppercase tracking-wider block mb-1.5">Target Core Parameters</label>
                          <select 
                            value={broadcastTarget}
                            onChange={(e) => setBroadcastTarget(e.target.value)}
                            className="bg-white border border-slate-300 text-slate-800 rounded-lg p-2.5 w-full font-sans text-xs focus:ring focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none"
                          >
                            <option value="All Parents">All Parents & Guardians (500+ contacts)</option>
                            <option value="Grade 10 & 12 Boards">Board Examinees Students Parents (120+ contacts)</option>
                            <option value="All Academic Roster Teachers">All Educators Staff (40+ contacts)</option>
                            <option value="Transport Bus Passengers">Route Bus Passengers Parents (80+ contacts)</option>
                          </select>
                        </div>

                        <div id="form-inp-text">
                          <label className="font-sans font-bold text-[11px] text-slate-500 uppercase tracking-wider block mb-1.5">Circular Content Notice Message (WhatsApp Template Format)</label>
                          <textarea
                            rows={4}
                            value={broadcastText}
                            onChange={(e) => setBroadcastText(e.target.value)}
                            placeholder="Enter announcement text to dispatch..."
                            className="bg-white border border-slate-300 text-slate-800 rounded-lg p-3 w-full font-sans text-xs leading-relaxed focus:ring focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none"
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
                            <div key={idx} className="bg-slate-50 border border-slate-200 p-3.5 rounded-lg shadow-sm space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="bg-emerald-50 text-emerald-600 border border-emerald-250 px-2 py-0.5 rounded-full font-mono text-[9px] font-bold">
                                  {bc.type}
                                </span>
                                <span className="text-slate-400 font-sans text-[10px] font-medium">{bc.time}</span>
                              </div>
                              <p className="font-sans text-[11px] text-slate-700 leading-relaxed italic">
                                "{bc.text}"
                              </p>
                              <div className="text-[10px] font-sans font-medium text-slate-500">
                                Target: <span className="text-blue-600 font-bold">{bc.target}</span> • Delivery Rate: <span className="text-emerald-600 font-bold">100% Success</span>
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
